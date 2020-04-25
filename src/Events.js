import React, { Component } from 'react';
import Navigation from '../src/components/navigation';
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