import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Services from "./Services";
import "../styles/Appointment.css";
import dayjs from "dayjs";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
function Appointment() {
  const [serviceSelected, setServiceSelected] = useState([]);

  const [date, setDate] = useState(dayjs("2024-12-09"));
  // Add appointment to the db
  const createAppointment = async () => {
    await addDoc(collection(db, "appointments"), {
      name: "abc",
      date: date.format(),
      service: serviceSelected,
    });
  };

  return (
    <div className="Appointment" id="appointment">
      <Services
        setServiceSelected={setServiceSelected}
        serviceSelected={serviceSelected}
      ></Services>
      <div className="highlight-heading">Select Time</div>
      <div className="datepicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            defaultValue={dayjs("2024/12/02", "YYYY-MM-DD")}
            value={date}
            onChange={(newDate) => {
              console.log(newDate.format());
              setDate(newDate);
            }}
          />
          <TimePicker label="Basic time picker" />
        </LocalizationProvider>
      </div>
      <div className="personal-info">
        <div className="highlight-heading">Your contact information</div>
        <div className="info-inputs">
          <input
            type="text"
            className="firstName"
            placeholder="Your first name"
            defaultValue={null}
          />
          <input
            type="text"
            className="lastName"
            placeholder="Your last name"
            defaultValue={null}
          />
          <input
            type="tel"
            className="phone"
            placeholder="Phone number for contact"
            defaultValue={null}
          />
        </div>
      </div>
      <div className="bookBtn">
        <button
          onClick={() => {
            createAppointment();
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
}
export default Appointment;
