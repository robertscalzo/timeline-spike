import React from 'react';
import {render, screen} from '@testing-library/react';
import {App, applyConflicts} from './App';

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

//take events and apply conflict colors

test("apply conflict colors to conflicting events", () => {
    const myEvents = [
        {
            start: '2021-09-02T00:00',
            end: '2021-09-05T00:00',
            title: 'Event 1',
            conflicted:false
        }, {
            start: '2021-09-04T00:00',
            end: '2021-09-07T00:00',
            title: 'Event 2',
            conflicted:false
        }, {
            start: '2021-09-20T00:00',
            end: '2021-09-21T00:00',
            title: 'Event 3',
            conflicted:false
        }
    ];
    const myEventsWithConflicts= [
        {
            start: '2021-09-02T00:00',
            end: '2021-09-05T00:00',
            title: 'Event 1',
            conflicted:true,
            color:"yellow"
        }, {
            start: '2021-09-04T00:00',
            end: '2021-09-07T00:00',
            title: 'Event 2',
            conflicted:true,
            color:"yellow"
        }, {
            start: '2021-09-20T00:00',
            end: '2021-09-21T00:00',
            title: 'Event 3',
            conflicted:false,
            color:"blue"
        }
    ];;
    expect(applyConflicts(myEvents)).toEqual(myEventsWithConflicts)
})
