import "../../styles/DatePicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import TimeSlots from "./TimeSlots";
import dayjs from "dayjs";
function DatePicker({ setFormData, formData, selectedDateAppointments }) {
  const dateValue = dayjs(formData.date);
  console.log(dateValue);
  return (
    <div className="DatePicker">
      <div className="highlight-heading">
        <span>選擇日期</span>
      </div>
      <div className="datepicker-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MUIDatePicker
            className="datepicker"
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
          selectedDateAppointments={selectedDateAppointments}
        />
      </div>
    </div>
  );
}
export default DatePicker;
