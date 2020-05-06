import React, { Component } from 'react';
import Navigation from '../src/components/navigation';
import LogoBanner from '../src/components/logobanner';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        const thisPointer = this;
        fetch('http://localhost:3000/gallery', {
            method: 'get',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(response => JSON.parse(response.text))
            .then(text => thisPointer.setState({
                photos: text.photos.photo
            }));
    }

    render() {
        const { photos } = this.state;

        let displayPhotos = photos.map(function (photo) {
            return (
                <img 
                key={photo.id}
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
                className="gallerycontainer__photogallery__photo"
                ></img>
            )
        })

        return (
            <div>
                <Navigation />
                <LogoBanner />
                <div className="gallerycontainer">
                    <h1 className="gallerycontainer__header">Gallery</h1>
                    <div className="gallerycontainer__photogallery">
                        {photos.length > 0 && displayPhotos}
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;