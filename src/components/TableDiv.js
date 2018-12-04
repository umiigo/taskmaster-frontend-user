import React from 'react'
import { Grid, Segment, Input, Form} from 'semantic-ui-react'
import TaskList from './TaskList'

const rightDiv = (props) => (
<Grid.Column width={16}>
        <Segment basic>
                <TaskList 
                 selectedUser={props.selectedUser}
                 users={props.users}
                 filterActiveTasksByUser={props.filterActiveTasksByUser}
                 activeTasks={props.activeTasks}
                 deactivateTask={props.deactivateTask}
                 updateImage={props.updateTaskImage}
                 />
        </Segment>
</Grid.Column> )


export default rightDiv

    // && props.users.map(user => user.tasks).map(user => console.log(user)) > 0