import React from 'react'
import { Table, Image, Card, Button} from 'semantic-ui-react'
import BeforeUploadButton from './BeforeUploadButton'
import AfterUploadButton from './AfterUploadButton';


export default class taskItem  extends React.Component {
    render(){
        return(
            <Card>
            <Card.Content>
            <Card.Header>{this.props.task.date}</Card.Header>
            <Card.Header>{this.props.task.title}</Card.Header>
            <Card.Meta>{this.props.task.location}</Card.Meta>

            <Card.Description>
                {this.props.task.time}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green'>
                 {this.props.task.beforeImage?
                    <Image avatar style={{'fontSize':15}} src={this.props.task.beforeImage} />
                    :<BeforeUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
                        <Image cloudName="demo" publicId="sample" width="300" crop="scale" style={{'fontSize':15}} avatar src={this.props.task.beforeImage}></Image></BeforeUploadButton>}
                </Button>
                <Button basic color='red'>
                {this.props.task.beforeImage&&!this.props.task.afterImage?
                    <AfterUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
                        <Image cloudName="demo" publicId="sample" width="300" crop="scale" style={{'fontSize':15}} avatar src={this.props.task.afterImage}></Image></AfterUploadButton>
                    :<Image avatar style={{'fontSize':15}} src={this.props.task.afterImage} />}
                </Button>
            </div>
            </Card.Content>
            </Card>
        )
    }
} 

    //     < Table.Row >
    //         <
    //         <Table.Cell>{this.props.task.date}</Table.Cell>
    //         <Table.Cell>{this.props.task.title}</Table.Cell>    
    //         <Table.Cell>{this.props.task.location}</Table.Cell>   
    //         <Table.Cell>{this.props.task.time}</Table.Cell> 
    //         <Table.Cell  textAlign='center'>
    //                 {this.props.task.beforeImage?
    //                 <Image avatar style={{'fontSize':15}} src={this.props.task.beforeImage} />
    //                 :<BeforeUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
    //                     <Image cloudName="demo" publicId="sample" width="300" crop="scale" style={{'fontSize':15}} avatar src={this.props.task.beforeImage}></Image></BeforeUploadButton>}
    //         </Table.Cell> 
    //         <Table.Cell  textAlign='center'>
    //                 {this.props.task.beforeImage&&!this.props.task.afterImage?
    //                 <AfterUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
    //                     <Image cloudName="demo" publicId="sample" width="300" crop="scale" style={{'fontSize':15}} avatar src={this.props.task.afterImage}></Image></AfterUploadButton>
    //                 :<Image avatar style={{'fontSize':15}} src={this.props.task.afterImage} />}
    //         </Table.Cell>
    //      </Table.Row >)
    // }




// <Card>
// <Card.Content>
//   <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
//   <Card.Header>Steve Sanders</Card.Header>
//   <Card.Meta>Friends of Elliot</Card.Meta>
//   <Card.Description>
//     Steve wants to add you to the group <strong>best friends</strong>
//   </Card.Description>
// </Card.Content>
// <Card.Content extra>
//   <div className='ui two buttons'>
//     <Button basic color='green'>
//       Approve
//     </Button>
//     <Button basic color='red'>
//       Decline
//     </Button>
//   </div>
// </Card.Content>
// </Card>