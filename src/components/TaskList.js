import React from 'react'
import TaskItem from './TaskItem'
import { Table} from 'semantic-ui-react'
import TaskListHeader from './TaskListHeader'



const TaskList = (props) => (
  props.selectedUser.length>0?
  <div>
  <Table unstackable singleLine> 
  <TaskListHeader/>
  <Table.Body>
    {props.filterActiveTasksByUser()
      .map(task => 
        <TaskItem key={task.id} task = {task}/>)
      }
  </Table.Body>
  </Table>
  </div>:null
)
export default TaskList

