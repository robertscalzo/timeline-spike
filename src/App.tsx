import React, {useState} from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions, toast} from '@mobiscroll/react';
import {fakeEvents, rangeResources} from "./fakeData";

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
    const [selectedDate, setSelectedDate] = useState(new Date(2022, 4, 1))
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
                popover: true,


            },
        };
    }, []);

    const placeHolder = (event: MbscCalendarEvent) => {
        console.log(event)
    }

    return (<>
            <button onClick={() => {
                if (selectedDate.getMonth() > 4) {
                    setSelectedDate(new Date(2022, selectedDate.getMonth() - 1, 1))
                }
            }}>Back
            </button>
            <button onClick={() => {
                if (selectedDate.getMonth() < 6) {
                    setSelectedDate(new Date(2022, selectedDate.getMonth() + 1, 1))
                }
            }

            }>Forward
            </button>
            <Eventcalendar
                theme="ios"
                themeVariant="light"
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}

                view={view}
                data={fakeEvents}
                // defaultSelectedDate={new Date(2022,4,1)}
                selectedDate={selectedDate}
                onSelectedDateChange={(event) => {
                }}
                onEventCreate={(event) => placeHolder(event)}
                onEventHoverIn={(event) => {
                    toast({message: event.event.title})
                }}
                onEventClick={(event) => placeHolder(event)}
                resources={rangeResources}
                invalid={myInvalid}
                onEventCreateFailed={() => {
                    toast({message: "RANGE MAINT"})
                }}
                onEventUpdateFailed={() => {
                    toast({message: "RANGE MAINT"})
                }}

            />
        </>
    );
}