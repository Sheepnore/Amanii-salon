import "../../styles/DatePicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar as MUIDateCalendar } from "@mui/x-date-pickers";
import TimeSlots from "./TimeSlots";

function DatePicker({ date, time, setDate, setTime }) {
  return (
    <div className="DatePicker">
      <div className="highlight-heading">2. Select Time</div>
      <div className="datepicker-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MUIDateCalendar
            className="dateCalendar"
            defaultValue={date}
            value={date}
            onChange={(newDate) => {
              console.log(newDate);
              setDate(newDate);
            }}
            disablePast={true}
          />
        </LocalizationProvider>
        <TimeSlots />
      </div>
    </div>
  );
}
export default DatePicker;
