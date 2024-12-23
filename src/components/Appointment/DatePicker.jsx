import "../../styles/DatePicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar as MUIDateCalendar } from "@mui/x-date-pickers";
import TimeSlots from "./TimeSlots";
import dayjs from "dayjs";
function DatePicker({ setFormData, formData, selectedDateAppointment }) {
  const dateValue = dayjs(formData.date);
  console.log(dateValue);
  return (
    <div className="DatePicker">
      <div className="highlight-heading">2. Select Time</div>
      <div className="datepicker-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MUIDateCalendar
            className="dateCalendar"
            defaultValue={dateValue}
            value={dateValue}
            onChange={(newDate) => {
              setFormData((prev) => ({
                ...prev,
                date: newDate,
              }));
            }}
            disablePast={true}
          />
        </LocalizationProvider>
        <TimeSlots
          setFormData={setFormData}
          formData={formData}
          selectedDateAppointment={selectedDateAppointment}
        />
      </div>
    </div>
  );
}
export default DatePicker;
