import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';



const TimelineEvent = (props) => {

  // Fill in your code here
  return (
    <section className='timeline-event'>
      <h3 className='event-person'>{props.person}</h3>
      <p className='event-status'>{props.status}</p>
      <p className='event-time'><Timestamp time={props.timeStamp} /></p>
    </section>
  )
 
  // return;
}

export default TimelineEvent;
