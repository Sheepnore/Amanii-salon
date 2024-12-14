import "../../styles/DatePicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";

function DatePicker({ date, time, setDate, setTime }) {
  return (
    <div className="DatePicker">
      <div className="highlight-heading">2. Select Time</div>
      <div className="datepicker-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
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
      </div>
    </div>
  );
}
export default DatePicker;
