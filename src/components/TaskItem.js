import React from 'react'
import { Table, Image} from 'semantic-ui-react'
import BeforeUploadButton from './BeforeUploadButton'
import AfterUploadButton from './AfterUploadButton';


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
                    :<BeforeUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
                        <Image cloudName="demo" publicId="sample" width="300" crop="scale" style={{'fontSize':15}} avatar src={this.props.task.beforeImage}></Image></BeforeUploadButton>}
            </Table.Cell> 
            <Table.Cell  textAlign='center'>
                    {this.props.task.beforeImage&&!this.props.task.afterImage?
                    <AfterUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
                        <Image cloudName="demo" publicId="sample" width="300" crop="scale" style={{'fontSize':15}} avatar src={this.props.task.afterImage}></Image></AfterUploadButton>
                    :<Image avatar style={{'fontSize':15}} src={this.props.task.afterImage} />}
            </Table.Cell>
         </Table.Row >)
    }

} 