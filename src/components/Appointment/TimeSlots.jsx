import "../../styles/TimeSlots.css";
import { useState } from "react";

function TimeSlots({ setTime, selectedDateAppointment }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeslots = [
    { time: "9:00", isAvailable: true },
    { time: "10:00", isAvailable: true },
    { time: "11:00", isAvailable: true },
    { time: "12:00", isAvailable: true },
    { time: "13:00", isAvailable: true },
    { time: "14:00", isAvailable: true },
    { time: "15:00", isAvailable: true },
    { time: "16:00", isAvailable: true },
    { time: "17:00", isAvailable: true },
    { time: "18:00", isAvailable: true },
    { time: "19:00", isAvailable: true },
    { time: "20:00", isAvailable: true },
  ];

  // Mark unavailable times based on selectedDateAppointment
  selectedDateAppointment.forEach((slotData) => {
    timeslots.forEach((slot) => {
      if (slot.time === slotData.time) {
        slot.isAvailable = false;
      }
    });
  });

  return (
    <div className="TimeSlots">
      <div>選擇預約時間：</div>
      <div className="timeslots-container">
        {timeslots.map((slot) => (
          <div
            key={slot.time}
            className={`slot ${
              !slot.isAvailable
                ? "disabled"
                : selectedTime === slot.time
                ? "selected"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (slot.isAvailable) {
                setSelectedTime(slot.time);
                setTime(slot.time);
              }
            }}
          >
            {slot.time}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;
