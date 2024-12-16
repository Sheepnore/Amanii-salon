import "../../styles/TimeSlots.css";
function TimeSlots({ time, setTime }) {
  const timeslots = [
    { time: "9:00 am", isAvailable: true },
    { time: "10:00 am", isAvailable: true },
    { time: "11:00 am", isAvailable: true },
    { time: "12:00 pm", isAvailable: true },
    { time: "1:00 pm ", isAvailable: true },
    { time: "2:00 pm", isAvailable: false },
    { time: "3:00 pm", isAvailable: true },
    { time: "4:00 pm", isAvailable: false },
    { time: "5:00 pm", isAvailable: true },
    { time: "6:00 pm", isAvailable: true },
    { time: "7:00 pm", isAvailable: true },
    { time: "8:00 pm", isAvailable: true },
  ];

  return (
    <div className="TimeSlots">
      <div>選擇預約時間：</div>
      <div className="timeslots-container">
        {timeslots.map((slot) => (
          <div
            className={
              slot.isAvailable
                ? slot.isChecked
                  ? "slot checked"
                  : "slot"
                : "slot disabled"
            }
            key={slot.time}
          >
            {slot.time}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TimeSlots;
