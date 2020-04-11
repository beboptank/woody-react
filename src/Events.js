import React, { Component } from 'react';
import moment from 'moment';
import { gapi } from 'gapi-script';


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("dddd, MMMM Do, h:mm A"),
            events: [],
            isLoading: true
        }
    }

    componentDidMount = () => {
        this.getEvents();
    }

    getEvents() {
        let that = this;
        function start() {
            gapi.client
            .init({
                apiKey: API_KEY
            })
            .then(function() {
                return gapi.client.request({
                    path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=11`
                });
            })
            .then(
                response => {
                    let events = response.result.items;
                    console.log(events);
                    if (events.length > 0) {
                        that.setState({
                            events: events
                        });
                    } else {
                        that.setState({
                            isLoading: true
                        });
                    }
                },
                function (reason) {
                    console.log(reason);
                }
            );
        }
        gapi.load("client", start);
    }

    render() {
        const { time, events } = this.state;

        let eventsList = events.map(function (event) {
            return (
                <div
                    key={event.id}
                    className=""
                >
                    <h2>{event.summary}{" "}</h2>
                    <p>{event.description}</p>
                    <h3>{moment(event.start.dateTime).format("h:mm a")}</h3>
                    <h3>{moment(event.start.dateTime).format("MMMM Do, YYYY")}</h3>
                </div>
            );
        });


        return (
            <div className="eventscontainer">
                <div className="current-time">{time}</div>
                <div className="eventscontainer__upcomingevents">
                    <h1>Upcoming Events</h1>
                    <div className="eventscontainer__upcomingevents__list">
                        {this.state.isLoading}
                        {events.length > 0 && eventsList}
                    </div>
                </div>
            </div>
        );
    
    }
}

export default Events;