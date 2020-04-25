import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount = () => {
        this.getPhotos();
    }

    getPhotos() {
        fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=API_KEY&user_id=187976999@N08&format=json&nojsoncallback=1')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let galleryArray = data.photos.photo.map((image) => {
                var source = "https://farm"+image.farm+".staticflickr.com/"+image.server+"/"+image.id+"_"+image.secret+".jpg";
                return (
                    <div>
                        <img className="gallerycontainer__photogallery__photo" alt="woody Gallery" src={source}></img>
                    </div>
                )
            })
            this.setState({
                photos: galleryArray
            });
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="gallerycontainer">
                <h1 className="gallerycontainer__header">Gallery</h1>
                <div className="gallerycontainer__photogallery">
                    {this.state.photos}
                </div>
            </div>
        )
    }
}

export default Gallery;