import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'


export default class BeforeUploadImage extends Component {



    state={
        url: ''
      }

    updateBeforeTaskImage = (task,url) => {
        fetch(`https://hidden-thicket-33143.herokuapp.com/api/v1/tasks/${task.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            beforeImage: url
          })
        })
          .then(resp => resp.json())
          .then(result => {
            let newArray = this.props.activeTasks.filter(t => t.id !== task.id)
            this.setState({ activeTasks: newArray})
          })
      } 


    uploadWidget = () => {
        window.cloudinary.openUploadWidget({ cloud_name: 'dk2bxxflb', upload_preset: 'dupb1zlh', tags: ['xmas'] },
            (error, result) => {
                if (result.event === "success") {
                    const url = result.info.url
                    this.setState({ url });
                    this.updateBeforeTaskImage(this.props.task, this.state.url)
                    
                }
            });
    }
    render() {
        return (
            <div className="main">
                <div className="upload">
                    <Button basic color='green' content='Green' onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Before Image
                    </Button>
                </div>
            </div>

        );
    }
}

