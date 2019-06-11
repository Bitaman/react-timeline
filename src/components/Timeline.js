import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const generateTimelineComponents = (events) => {
  return events.map (event => {
    const {person, status, timeStamp} = event;
    return (< TimelineEvent
      person={person}
      status={status}
      timeStamp= {timeStamp}
      />);
  });
};



const Timeline = (props) => {
  // Fill in your code here
  console.log(props);
  const {events} = props;
  const TtimelineComponents = generateTimelineComponents(events.events);
  return (
    <div className='timeline'>{TtimelineComponents}</div>
  );


  // return;
}

export default Timeline;
