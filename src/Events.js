import React, { Component } from 'react';
import moment from 'moment';
import { gapi } from 'gapi-script';



class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("dd, Do MMMM, h:mm A"),
            events: [],
            isBusy: false,
            isEmpty: false,
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
                    let sortedEvents = events.sort(function(a, b) {
                        return (
                            moment(b.start.dateTime).format("YYYYMMDD") - 
                            moment(a.start.dateTime).format("YYYYMMDD")
                        );
                    });
                    if (events.length > 0) {
                        that.setState({
                            events: sortedEvents
                        },
                        () => {
                            that.setStatus();
                        }
                        );
                    } else {
                        that.setState({
                            isBusy: false,
                            isEmpty: false,
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


    setStatus = () => {
        let now = moment();
        let events = this.state.events;
        for (var e = 0; e < events.length; e++) {
            var eventItem = events[e];
            if (
                moment(now).isBetween(
                    moment(eventItem.start.dateTime),
                    moment(eventItem.end.dateTime)
                )
            ) {
                this.setState({
                    isBusy: true
                });
                return false;
            } else {
                this.setState({
                    isBusy: false
                });
            }
        }
    }

    render() {
        const { time, events } = this.state;

        let eventsList = events.map(function (event) {
            return (
                <a
                    className="list-group-item"
                    href={event.htmlLink}
                    target="_blank"
                    key={event.id}
                >
                    {event.summary}{" "}
                    <span className="badge">
                        {moment(event.start.dateTime).format("h:mm a")},{" "}
                        {moment(event.end.dateTime).diff(
                            moment(event.start.dateTime),
                            "minutes"
                        )}{" "}
            minutes, {moment(event.start.dateTime).format("MMMM Do")}{" "}
                    </span>
                </a>
            );
        });


        return (
            <div className="container">
                <div className="upcoming-meetings">
                    <div className="current-time">{time}</div>
                    <h1>Upcoming Events</h1>
                    <div className="list-group">
                        {this.state.isLoading}
                        {events.length > 0 && eventsList}
                        {this.state.isEmpty}
                    </div>
                </div>
            </div>
        );
    
    }
}

export default Events;