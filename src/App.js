import React, { Component } from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react'
import TableDiv from './components/TableDiv'
import MenuBar from './components/MenuBar';
import LoginForm from './components/loginpage';


class App extends Component {
  
  
  state = {
    users: [],
    selectedUser: [],
    activeUsers: [],
    selectedUserTasks:[],
    activeTasks: [],
    emailvalue:'',
    passwordvalue:''
  }

  //Get All Users And Filter By Active User 
  componentDidMount() {
    this.interval = setInterval(() => {
    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/users`)
      .then(resp => resp.json())
      .then(data => {
        data.map(user => user.selected = false)
        this.setState({ users: [...data] })
        let activeUsers = this.state.users.filter(user=>user.is_active)
        this.setState({ activeUsers: activeUsers })
      }
    )     
      fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/tasks`)
      .then(resp => resp.json())
      .then(data => {
        data.map(task => task.selected = false)
        this.setState({ tasks: [...data] })
        let activeTasks = this.state.tasks.filter(task=>task.is_active)
        this.setState({ activeTasks: activeTasks })
      }
    )     
    },3000)
    }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  

  //USER FUNCTIONS




  enterUsername = (event) => {
  this.setState({ emailvalue: event.target.value })}

  enterPassword = (event) => {
    this.setState({ passwordvalue: event.target.value })}
  

  findUser = (event) => {
    event.preventDefault()
    let foundUser = (this.state.activeUsers).find(u => u.email === (this.state.emailvalue))
    console.log(foundUser)
    this.setState({ selectedUser: [foundUser]}) 
  }

  signin = username => this.setState({ username  });
  signout= () => this.setState({ username: ''  });

  handleSignin = () =>{
    return fetch('http://localhost:3000/api/v1/signin', {
	  method: 'POST',
	  headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.emailvalue,
      password: this.state.passwordvalue
    })})
    .then(resp=>resp.json())
    .then(data =>{
      if(data.error){
        alert('incorrect')}
        else{
          return fetch('http://localhost:3000/api/v1/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: this.state.emailvalue,
              password: this.state.passwordvalue
            })})
            .then(resp=>resp.json())
            .then(data=> this.setState({ selectedUser:[data]  }))
            

        }
    })
  }


  // logout = () => this.setState({ selectedUser: false  });

  //MIXED 

  filterActiveTasksByUser = () => {
    if (this.state.selectedUser.length>0){
    let userId = this.state.selectedUser[0].id
    let activeTasks = this.state.activeTasks
    let UserActiveTasks =activeTasks.filter(task => task.user_id===userId)
    return UserActiveTasks}
  }

  //TASK

  handleTaskFormSubmit = (event) => {
    event.preventDefault()
    this.postNewTaskToServerAndPage()
  }

  postNewTaskToServerAndPage = () => {
    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
          user_id: this.state.selectedUser[0].id,
          date: this.state.datevalue,
          title: this.state.taskvalue,
          location: this.state.locationvalue,
          time: this.state.timevalue
      })
    })
      .then(resp => resp.json())
      .then(task => (this.setState({ activeTasks: [...this.state.activeTasks, task] })))
  }


  deactivateTask = (task) => {
    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        is_active: false
      })
    })
      .then(resp => resp.json())
      .then(result => {
        let newArray = this.state.activeTasks.filter(t => t.id !== task.id)
        this.setState({ activeTasks: newArray})
      })
  }
 
  render() {
    return (
    this.state.selectedUser.length === 0?
    <LoginForm enterUsername={this.enterUsername}
    enterPassword={this.enterPassword}
    handleSignin={this.handleSignin}/>
      :this.state.selectedUser.length === 1?
       <div>   
                  <MenuBar logout={this.logout}/>
         
            <TableDiv
              updateImage={this.updateTaskImage}
              users={this.state.users} 
              activeTasks={this.state.activeTasks}
              selectedUser={this.state.selectedUser}
              filterActiveTasksByUser={this.filterActiveTasksByUser}
              enterUsername={this.enterUsername}
              findUser={this.findUser}
              />

          </div>: <LoginForm enterUsername={this.enterUsername}
    findUser={this.findUser}/>
    );
  }
}



export default App;
