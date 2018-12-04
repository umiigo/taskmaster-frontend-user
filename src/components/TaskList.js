import React from 'react'
import TaskItem from './TaskItem'
import { Table} from 'semantic-ui-react'
import TaskListHeader from './TaskListHeader'



export default class TaskList extends React.Component {
  render() {
    return (
      this.props.selectedUser.length>0?
      <div>
      <Table unstackable singleLine> 
      {/* <TaskListHeader/> */}
      <Table.Body>
        {this.props.filterActiveTasksByUser()
          .map(task => 
            <TaskItem activeTasks={this.props.activeTasks} updateImage={this.props.updateTaskImage} key={task.id} task = {task}/>)
          }
      </Table.Body>
      </Table>
      </div>:null
    )


  }
}