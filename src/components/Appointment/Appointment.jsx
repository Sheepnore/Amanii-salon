import { Link } from "react-router-dom";
import Services from "./Services";
import "../../styles/Appointment.css";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import backToHome_svg from "../../assets/back-to-home.svg";
import DatePicker from "./DatePicker";
import UserInputs from "./UserInputs";

function Appointment() {
  const [serviceSelected, setServiceSelected] = useState([]);
  const [fullName, setFullName] = useState({
    firstName: "John",
    lastName: "Doe",
  });
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "appointment"), where("date", "==", true));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
    }
    fetchData();
  });

  // Add appointment to the db
  const createAppointment = async (e) => {
    // when triggers form submit event, the default action is reloading the page. To prevent reloading from happening, use e.preventDefault()
    e.preventDefault();
    try {
      const ref = await addDoc(collection(db, "appointments"), {
        name: fullName,
        date: date.format("YYYY/MM/DD"),
        time: time.format("HH:mm"),
        service: serviceSelected,
        phone: phone,
      });
      console.log(ref);
    } catch (err) {
      console.error("Error adding appointment:", err);
    }
  };

  return (
    <>
      <div className="top-section">
        <Link to="/" className="link">
          <img src={backToHome_svg} />
          <span>回到首頁</span>
        </Link>
      </div>

      <form
        className="Appointment"
        id="appointment"
        onSubmit={createAppointment}
      >
        <Services
          setServiceSelected={setServiceSelected}
          serviceSelected={serviceSelected}
        ></Services>
        <DatePicker
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
        ></DatePicker>
        <UserInputs
          fullName={fullName}
          setPhone={setPhone}
          setFullName={setFullName}
        ></UserInputs>
      </form>
    </>
  );
}
export default Appointment;
