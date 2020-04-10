import request from "superagent";
import { gapi } from 'gapi-script';

const CALENDAR_ID = 'woodytest@woody-test.iam.gserviceaccount.com';
const API_KEY = 'AIzaSyDcQU6zxT4rxODuBY8TfJtDr_4TCQ9B99I';
let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    export default function getEvents() {
        let that = this;
        function start() {
            gapi.client.init({
                'apiKey': API_KEY
            }).then(function () {
                return gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
                })
            }).then((response) => {
                let events = response.result.items
                that.setState({
                    events
                }, () => {
                    console.log(that.state.events);
                })
            }, function (reason) {
                console.log(reason);
            });
        }
        gapi.load('client', start)
}