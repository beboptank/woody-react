import React, { Component } from 'react';
import Navigation from '../src/components/navigation';
import LogoBanner from '../src/components/logobanner';
import moment from 'moment';


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("dddd, MMMM Do, h:mm A"),
            events: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const thisPointer = this;
        fetch('http://localhost:3000/events', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(response => thisPointer.setState({
                events: response.data.items
            }));
    }

    render() {
        const { time, events } = this.state;

        let eventsList = events.map(function (event) {
            return (
                <div
                    key={event.id}
                    className="eventscontainer__timeandlist__upcomingevents__list__item"
                >
                    <h2>{event.summary}{" "}</h2>
                    <p>{event.description}</p>
                    <h3>{moment(event.start.dateTime).format("h:mm a")}</h3>
                    <h3>{moment(event.start.dateTime).format("MMMM Do, YYYY")}</h3>
                </div>
            );
        });


        return (
            <div>
                <Navigation />
                <LogoBanner />
                <div className="eventscontainer">
                    <div className="eventscontainer__timeandlist">
                        <div className="eventscontainer__timeandlist__currenttime">{time}</div>
                        <div className="eventscontainer__timeandlist__upcomingevents">
                            <h1 className="eventscontainer__timeandlist__upcomingevents__header">Upcoming Events</h1>
                            <div className="eventscontainer__timeandlist__upcomingevents__list">
                                {this.state.isLoading}
                                {events.length > 0 && eventsList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
    }
}

export default Events;