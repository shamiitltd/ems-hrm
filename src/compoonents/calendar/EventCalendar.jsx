import React, { useState, useEffect, useRef, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import './EventCalendar.css';

const EventCalendar = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8000/api/events/');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Could not load events. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDateClick = (arg) => {
    alert(`Date clicked: ${arg.dateStr}`);
  };

  const handleEventClick = (arg) => {
    alert(`Event clicked: ${arg.event.title}`);
  };

  const handleEventsSet = (events) => {
    console.log('Current events:', events);
  };

  // Memoize the events array to prevent unnecessary re-renders
  const memoizedEvents = useMemo(() => events, [events]);

  // Custom event rendering 
  const renderEventContent = (eventInfo) => {
    return (
      <div className="custom-event-content">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  };

  return (
    <div className="scheduler-container">
      
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        events={memoizedEvents}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={handleEventsSet}
        eventContent={renderEventContent}  // Custom event rendering
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
      />
    </div>
  );
};

export default EventCalendar;
