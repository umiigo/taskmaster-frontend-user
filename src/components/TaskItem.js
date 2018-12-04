import React from 'react'
import { Table, Image} from 'semantic-ui-react'
import Button from './Button'


export default class taskItem  extends React.Component {
    render(){
        return(
        < Table.Row >
            <Table.Cell>{this.props.task.date}</Table.Cell>
            <Table.Cell>{this.props.task.title}</Table.Cell>    
            <Table.Cell>{this.props.task.location}</Table.Cell>   
            <Table.Cell>{this.props.task.time}</Table.Cell> 
            <Table.Cell  textAlign='center'>
                    {this.props.task.beforeImage?
                    <Image avatar style={{'fontSize':15}} src={this.props.task.beforeImage} />
                    :<Button activeTasks={this.props.activeTasks}task={this.props.task}>
                        <Image cloudName="demo" publicId="sample" width="300" crop="scale" style={{'fontSize':15}} avatar src={this.props.task.beforeImage}></Image></Button>}
            </Table.Cell> 
            <Table.Cell  textAlign='center'><Image  style={{'fontSize':15}} avatar src={this.props.task.afterImage}/></Table.Cell>
         </Table.Row >)
    }

} 
// onClick={props.updateTaskImage(props.task)}