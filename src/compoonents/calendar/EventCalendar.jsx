import React, { useState, useEffect, useRef, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import './EventCalendar.css';

const EventCalendar = () => {
  const calendarRef = useRef(null); // Reference to the FullCalendar component
  const [events, setEvents] = useState([]); // State to hold event data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error messages

  // Fetch events from the server when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://127.0.0.1:8000/api/events/'); // Replace with your API URL
        if (!response.ok) throw new Error('Failed to fetch events'); // Handle non-200 responses
        const data = await response.json();
        setEvents(data); // Update state with fetched events
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Could not load events. Please try again later.'); // Set error message
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures this effect runs only once

  // Event handler when a date is clicked
  const handleDateClick = (arg) => alert(`Date clicked: ${arg.dateStr}`);

  // Event handler when an event is clicked
  const handleEventClick = (arg) => alert(`Event clicked: ${arg.event.title}`);

  // Callback for when events are set
  const handleEventsSet = (events) => console.log('Current events:', events);

  // Memoize events to prevent unnecessary re-renders
  const memoizedEvents = useMemo(() => events, [events]);

  // Custom rendering for events
  const renderEventContent = (eventInfo) => (
    <div className="custom-event-content">
      <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </div>
  );

  return (
    <div className="scheduler-container">
      {loading ? (
        <div>Loading events...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next customToday',
            center: 'title',
            right: 'customMonth,customWeek,customDay,customList',
          }}
          customButtons={{
            customMonth: { text: 'Month', click: () => calendarRef.current.getApi().changeView('dayGridMonth') },
            customWeek: { text: 'Week', click: () => calendarRef.current.getApi().changeView('timeGridWeek') },
            customDay: { text: 'Day', click: () => calendarRef.current.getApi().changeView('timeGridDay') },
            customList: { text: 'Schedule', click: () => calendarRef.current.getApi().changeView('listWeek') },
            customToday: { text: 'Today', click: () => calendarRef.current.getApi().today() },
          }}
          events={memoizedEvents}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={handleEventsSet}
          eventContent={renderEventContent}
          editable
          selectable
          selectMirror
          dayMaxEvents
        />
      )}
    </div>
  );
};

export default EventCalendar;
