import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import "../styles/Appointment.css";
import dayjs from "dayjs";

function Appointment() {
  return (
    <div className="Appointment" id="appointment">
      <div className="highlight-heading">Select Time</div>
      <div className="datepicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker defaultValue={dayjs("2024/12/02")} />
        </LocalizationProvider>
      </div>
    </div>
  );
}
export default Appointment;
