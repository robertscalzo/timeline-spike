import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
    setOptions,
    Eventcalendar,
    MbscCalendarEvent,
    MbscEventcalendarView,
    MbscResource,
    toast
} from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});
export const applyConflicts = (events: MbscCalendarEvent[]): MbscCalendarEvent[] => {
    function checkOverlap(events: MbscCalendarEvent[]): MbscCalendarEvent[] {
        const overlap: MbscCalendarEvent[] = [];
        let start: MbscCalendarEvent[] = [];
        events.forEach((e) => {
            let d = [e.start, e.end]
            start.push(d);
        });
        start.sort();
        start.forEach((e, i) => {
            if (start[i + 1]) {
                if (e[1] > start[i + 1]) {
                    overlap.push(start[0], start[1])
                }
            }
        });
        return overlap;
    }

    const conflictedEvents = checkOverlap(events)
    events.map((event) => {
            conflictedEvents.map((conflictedEvent) => {
                if (event.start === conflictedEvent[0] && event.end === conflictedEvent[1]) {
                    event.conflicted = true
                    return;
                }
            })
            if (event.conflicted) {
                event.color = '#d6d145';
            } else {
                event.color = '#4981d6';
            }
        }
    );

    return events
}

export const App: React.FC = () => {
    const myEvents = React.useMemo<MbscCalendarEvent[]>(() => {
        return [{
            start: '2021-09-02T00:00',
            end: '2021-09-05T00:00',
            title: 'Event 1',
            resource: 1
        }, {
            start: '2021-09-10T09:00',
            end: '2021-09-15T15:00',
            title: 'Event 2',
            resource: 3
        }, {
            start: '2021-09-05T00:00',
            end: '2021-09-09T00:00',
            title: 'Event 2',
            resource: 4
        }, {
            start: '2021-09-12T00:00',
            end: '2021-09-14T00:00',
            title: 'Event 3',
            resource: 11
        }, {
            start: '2021-09-15T07:00',
            end: '2021-09-20T12:00',
            title: 'Event 4',
            resource: 53
        }, {
            start: '2021-09-03T00:00',
            end: '2021-09-10T00:00',
            title: 'Event 5',
            resource: 6
        }, {
            start: '2021-09-10T08:00',
            end: '2021-09-11T20:00',
            title: 'Event 6',
            resource: 7
        }, {
            start: '2021-09-22T00:00',
            end: '2021-09-28T00:00',
            title: 'Event 7',
            resource: 7
        }, {
            start: '2021-09-08T00:00',
            end: '2021-09-13T00:00',
            title: 'Event 8',
            resource: 511
        }, {
            start: '2021-09-25T00:00',
            end: '2021-09-27T00:00',
            title: 'Event 9',
            resource: 511
        }, {
            start: '2021-09-20T00:00',
            end: '2021-09-23T00:00',
            title: 'Event 10',
            resource: 12
        }, {
            start: '2021-09-15T00:00',
            end: '2021-09-20T00:00',
            title: 'Event 11',
            resource: 512
        }];
    }, []);


    const myResources = React.useMemo<MbscResource[]>(() => {
        return [{
            id: 1,
            name: 'Resource 1',
            color: '#1dab2f'
        }, {
            id: 2,
            name: 'Resource 2',
            color: '#76e083'
        }, {
            id: 3,
            name: 'Resource 3',
            color: '#4981d6'
        }, {
            id: 4,
            name: 'Group 1',
            color: '#ff1717',
            children: [{
                id: 11,
                name: 'Resource 4',
                color: '#f7961e',
            }, {
                id: 12,
                name: 'Resource 5',
                color: '#34c8e0',
            }]
        }, {
            id: 5,
            name: 'Group 2',
            collapsed: true,
            children: [{
                id: 51,
                name: 'Group 3',
                color: '#af0000',
                children: [{
                    id: 511,
                    name: 'Resource 6',
                    color: '#843100',
                }, {
                    id: 512,
                    name: 'Resource 7',
                    color: '#4caf00',
                }, {
                    id: 513,
                    name: 'Resource 8',
                    color: '#7056ff',
                }]
            }, {
                id: 52,
                name: 'Resource 9',
                color: '#4caf00',
            }, {
                id: 53,
                name: 'Resource 10',
                color: '#e20000',
            }]
        }, {
            id: 6,
            name: 'Resource 11',
            color: '#d6d145'
        }, {
            id: 7,
            name: 'Resource 12',
            color: '#e25dd2'
        }]
    }, []);

    const myInvalid = React.useMemo<any>(() => {
        return [
            {
                start: '2021-09-20T00:00',
                end: '2021-09-23T00:00',
                allDay: true
            }
        ]
    }, []);

    const view = React.useMemo<MbscEventcalendarView>(() => {
        return {
            timeline: {
                type: 'month',
                eventList: true,
            },
        };
    }, []);

    return (
        <Eventcalendar
            theme="ios"
            themeVariant="light"
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            view={view}
            data={myEvents}
            resources={myResources}
            invalid={myInvalid}
            onEventCreateFailed={() => {
                toast({message: "RANGE MAINT"})
            }}
        />
    );
}