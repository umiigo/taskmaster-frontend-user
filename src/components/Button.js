import React, { Component } from 'react';
import { render } from 'react-dom';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';


export default class Button extends Component {

    uploadWidget() {
        window.cloudinary.openUploadWidget({ cloud_name: 'dk2bxxflb', upload_preset: 'dupb1zlh', tags: ['xmas'] },
            function (error, result) {
                console.log(result);
            });
    }
    render() {
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}

