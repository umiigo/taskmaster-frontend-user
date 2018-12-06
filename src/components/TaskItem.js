import React from 'react'
import { Table, Image, Card, Button} from 'semantic-ui-react'
import BeforeUploadButton from './BeforeUploadButton'
import AfterUploadButton from './AfterUploadButton';


export default class taskItem  extends React.Component {
    render(){
        return(
            <Card >
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
                <Button basic color='white'>
                 {this.props.task.beforeImage?
                    <Image size={'mini'}  src={this.props.task.beforeImage} />
                    :<BeforeUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
                        <Image  size={'mini'}src={this.props.task.beforeImage}></Image></BeforeUploadButton>}
                </Button>
                <Button basic color='white'>
                {this.props.task.beforeImage&&!this.props.task.afterImage?
                    <AfterUploadButton activeTasks={this.props.activeTasks}task={this.props.task}>
                        <Image  size={'mini'}src={this.props.task.afterImage}></Image></AfterUploadButton>
                    :<Image  size={'mini' }src={this.props.task.afterImage} />}
                </Button>
            </div>
            </Card.Content>
            </Card>
        )
    }
} 
