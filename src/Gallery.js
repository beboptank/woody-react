import React, { Component } from 'react';
let Flickr = require('flickr-sdk');

let flickr = new Flickr('');

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            noPhotos: false
        }
    }

    componentDidMount = () => {
        this.getPhotos();
    }

    getPhotos() {
        flickr.people.getPublicPhotos({
            user_id: '187976999@N08'
        })
        .then(function (res) {
            console.log('nice!', res.body);
            this.setState({
                photos: res.body.photos.photo
            });
        })
        .catch(function (err) {
            console.log('no dice man', err);
        })
    }

    render() {
        const { photos, noPhotos } = this.state;
        return (
            <h1>Gallery currently under construction</h1>
        )
    }
}

export default Gallery;