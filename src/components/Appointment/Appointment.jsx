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
import { useSucess } from "../SucessSubmitContext";
import LoadingPage from "./LoadingPage";

function Appointment() {
  const { setOnAppointmentSucess } = useSucess();
  const [selectedDateAppointment, setSelectedDateAppointment] = useState([]);

  const [formData, setFormData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    phone: "",
    serviceSelected: [],
    date: dayjs(),
    time: null,
  });

  console.log(formData.date);

  const [isLoaded, setIsLoaded] = useState(false);
  const [boxesChecked, setBoxesChecked] = useState(0);

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
          where("date", "==", formData.date.format("YYYY/MM/DD"))
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
  }, [formData.date]);

  // Add appointment to the db
  const createAppointment = async (e) => {
    e.preventDefault();
    const newAppointmentObj = {
      name: formData.fullName,
      date: formData.date.format("YYYY/MM/DD"),
      time: formData.time,
      service: formData.serviceSelected,
      phone: formData.phone,
    };

    try {
      await addDoc(collection(db, "appointments"), newAppointmentObj);
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
            onSubmit={(e) => {
              createAppointment(e);
              setOnAppointmentSucess(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            <Services
              formData={formData}
              setFormData={setFormData}
              setBoxesChecked={setBoxesChecked}
            />
            <DatePicker
              formData={formData}
              setFormData={setFormData}
              selectedDateAppointment={selectedDateAppointment}
            />
            <UserInputs setFormData={setFormData} formData={formData} />
            <div className="submitModal">
              <AlertDialogSlide
                isOneBoxChecked={isOneBoxChecked(boxesChecked)}
                formData={formData}
              ></AlertDialogSlide>
            </div>
          </form>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
export default Appointment;
