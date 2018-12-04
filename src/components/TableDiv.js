import React from 'react'
import TaskList from './TaskList'

const rightDiv = (props) => (
                <TaskList 
                 selectedUser={props.selectedUser}
                 users={props.users}
                 filterActiveTasksByUser={props.filterActiveTasksByUser}
                 activeTasks={props.activeTasks}
                 deactivateTask={props.deactivateTask}
                 updateImage={props.updateTaskImage}
                 />
 )


export default rightDiv
