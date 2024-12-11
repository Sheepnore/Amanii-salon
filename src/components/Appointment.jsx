import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import Services from "./Services";
import "../styles/Appointment.css";
import dayjs from "dayjs";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { BookBtn } from "./CallToActionBtn";
function Appointment() {
  const [serviceSelected, setServiceSelected] = useState([]);
  const [fullName, setFullName] = useState({ firstName: null, lastName: null });
  const [phone, setPhone] = useState(null);
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());

  // Add appointment to the db
  const createAppointment = async () => {
    await addDoc(collection(db, "appointments"), {
      name: fullName,
      date: date.format("YYYY/MM/DD"),
      time: time.format("HH:MM"),
      service: serviceSelected,
      phone: phone,
    });
  };
  console.log(date);

  return (
    <form className="Appointment" id="appointment">
      <Services
        setServiceSelected={setServiceSelected}
        serviceSelected={serviceSelected}
      ></Services>
      <div className="highlight-heading">Select Time</div>
      <div className="datepicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            defaultValue={date}
            value={date}
            onChange={(newDate) => {
              console.log(newDate);
              setDate(newDate);
            }}
          />
          <TimePicker
            defaultValue={time}
            value={time}
            onChange={(newTime) => {
              console.log(newTime);
              setTime(newTime);
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="highlight-heading">Your contact information</div>
      <div className="user-info">
        <div className="info-inputs">
          <input
            type="text"
            className="firstName"
            placeholder="Your first name"
            defaultValue={null}
            onChange={(e) => {
              setFullName((newVal) => ({
                ...fullName,
                firstName: e.target.value,
              }));
            }}
            pattern="[\u4e00-\u9fff]{1,5}"
          />
          <input
            type="text"
            className="lastName"
            placeholder="Your last name"
            defaultValue={null}
            onChange={(e) => {
              setFullName((newVal) => ({
                ...fullName,
                lastName: e.target.value,
              }));
            }}
            pattern="[\u4e00-\u9fff]{1,5}"
          />
          <input
            type="tel"
            className="phone"
            placeholder="Phone number for contact"
            defaultValue={null}
            onChange={(e) => {
              setPhone(() => e.target.value);
            }}
            pattern="^0\d{9}"
          />
        </div>
      </div>
      <BookBtn
        onClick={() => {
          createAppointment();
        }}
        className="bookBtn"
      >
        Book
      </BookBtn>
    </form>
  );
}
export default Appointment;
