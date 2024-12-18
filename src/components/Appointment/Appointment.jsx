import { Link } from "react-router-dom";
import Services from "./Services";
import "../../styles/Appointment.css";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import backToHome_svg from "../../assets/back-to-home.svg";
import AlertDialogSlide from "./SubmitModal";
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
  const [time, setTime] = useState("00:00");
  const [selectedDateAppointment, setSelectedDateAppointment] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [boxesChecked, setBoxesChecked] = useState(0);
  console.log(boxesChecked);
  const isOneBoxChecked = (boxesChecked) => {
    if (boxesChecked < 1) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const q = query(
          collection(db, "appointments"),
          where("date", "==", date.format("YYYY/MM/DD"))
        );

        // placeholder array for getting docs out of querySnapshot
        let temp = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        setSelectedDateAppointment(temp);
        setIsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();

    return () => {
      setSelectedDateAppointment([]);
    };
  }, [date]);

  // Add appointment to the db
  const createAppointment = async (e) => {
    // when triggers form submit event, the default action is reloading the page. To prevent reloading from happening, use e.preventDefault()
    e.preventDefault();

    const newAppointmentObj = {
      name: fullName,
      date: date.format("YYYY/MM/DD"),
      time: time,
      service: serviceSelected,
      phone: phone,
    };
    console.log(newAppointmentObj);

    try {
      const ref = await addDoc(
        collection(db, "appointments"),
        newAppointmentObj
      );
      console.log(ref);
    } catch (err) {
      console.error("Error adding appointment:", err);
    }
  };

  return (
    <>
      {isLoaded ? (
        <>
          <div className="top-section">
            <Link to="/" className="link">
              <img src={backToHome_svg} alt="Back to Home" />
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
              setBoxesChecked={setBoxesChecked}
            />
            <DatePicker
              date={date}
              setDate={setDate}
              setTime={setTime}
              selectedDateAppointment={selectedDateAppointment}
            />
            <UserInputs
              fullName={fullName}
              setPhone={setPhone}
              setFullName={setFullName}
            />
            <div className="submitModal">
              <AlertDialogSlide
                isOneBoxChecked={isOneBoxChecked(boxesChecked)}
              ></AlertDialogSlide>
            </div>
          </form>
        </>
      ) : (
        <div>載入中...</div>
      )}
    </>
  );
}
export default Appointment;
