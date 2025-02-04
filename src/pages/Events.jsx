// src/pages/Events.js
import React, { useState } from "react";
import "./Events.css";

export default function Events() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [events, setEvents] = useState([
    {
      id: Date.now(),
      title: "Cultural Night",
      description: "Celebrate cultures with food, music, and dance.",
      date: "2024-03-15",
    },
    {
      id: Date.now() + 1,
      title: "International Potluck",
      description: "Bring your favorite dish and share your culture.",
      date: "2024-04-10",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
  });

  const years = ["2024", "2023", "2022", "2021"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Date formatting function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const weekday = date.toLocaleString("en-US", { weekday: "short" });
    return (
      <div className="date-container">
        <span className="date-day">{day}</span>
        <span className="date-weekday">{weekday}</span>
      </div>
    );
  };

  // Group events by month
  const groupedEvents = events
    .filter(
      (event) => new Date(event.date).getFullYear() === parseInt(selectedYear)
    )
    .reduce((acc, event) => {
      const month = months[new Date(event.date).getMonth()];
      if (!acc[month]) acc[month] = [];
      acc[month].push(event);
      return acc;
    }, {});

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ title: "", description: "", date: "" });
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="content-container">
      <div className="events-header">
        <h1 className="page-title">Upcoming Events</h1>
        <div className="year-selector">
          {years.map((year) => (
            <button
              key={year}
              className={`year-button ${selectedYear === year ? "active" : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Add Event Form */}
      <div className="add-event-form">
        <h3>Add New Event</h3>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <button type="submit" className="add-button">
            Add Event
          </button>
        </form>
      </div>

      {/* Events by Month */}
      <div className="events-by-month">
        {months.map(
          (month) =>
            groupedEvents[month] && (
              <div key={month} className="month-section">
                <h2 className="month-header">{month}</h2>
                <div className="event-list">
                  {groupedEvents[month].map((event) => (
                    <div key={event.id} className="event-item">
                      {formatDate(event.date)}
                      <div className="event-info">
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-description">{event.description}</p>
                      </div>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
