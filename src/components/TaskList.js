import React from 'react'
import TaskItem from './TaskItem'
import { Card } from 'semantic-ui-react';



export default class TaskList extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={1}>
        {this.props.selectedUser.length>0?
          this.props.filterActiveTasksByUser()
            .map(task => 
              <TaskItem activeTasks={this.props.activeTasks} updateImage={this.props.updateTaskImage} key={task.id} task = {task}/>):null}
        </Card.Group>
    )
            }
}