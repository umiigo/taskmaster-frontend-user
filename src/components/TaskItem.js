import React from 'react'
import { Table} from 'semantic-ui-react'
import Button from './Button'
import { Image} from 'cloudinary-react';

const taskItem = (props) => (
    < Table.Row >
        <Table.Cell>{props.task.date}</Table.Cell>
        <Table.Cell>{props.task.title}</Table.Cell>    
        <Table.Cell>{props.task.location}</Table.Cell>   
        <Table.Cell>{props.task.time}</Table.Cell> 
        <Table.Cell  textAlign='center'>
        <Button>
                <Image cloudName="demo" publicId="sample" width="300" crop="scale" />
            </Button>
        </Table.Cell> 
        <Table.Cell  textAlign='center'><Image  style={{'fontSize':15}} avatar src={props.task.afterImage}/></Table.Cell>
     </Table.Row >)


export default taskItem

    
      