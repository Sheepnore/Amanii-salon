import "../../styles/TimeSlots.css";
function TimeSlots({ setTime, selectedDateAppointment }) {
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
          <button
            className="slot"
            key={slot.time}
            disabled={!slot.isAvailable}
            onClick={(e) => {
              e.preventDefault();
              setTime(slot.time);
              console.log(slot.time);
            }}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
}
export default TimeSlots;
