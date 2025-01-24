import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { collection, query } from "firebase/firestore";
import { db } from "../../config/firebase";

const localizer = momentLocalizer(moment);

const SalonOwnerCalendar = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch all appointments data
    const fetchAllAppointments = async () => {
      const allAppoQuery = query(collection(db, "appointments"));
    };

    fetchAllAppointments();
  }, []);

  // Transform data for react-big-calendar
  const events = appointments.map((appo) => ({
    title: `${appo.name} - ${appo.service}`,
    start: new Date(appo.date + " " + appo.time),
    end: new Date(appo.date + " " + appo.time), // Adjust end time as needed
  }));

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default SalonOwnerCalendar;
