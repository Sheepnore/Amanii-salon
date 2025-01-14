import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useSucess } from "../SucessSubmitContext";
import { useAuth } from "../Auth/UserDataContext";
import AlertDialogSlide from "./SubmitModal";
import Services from "./Services";
import DatePicker from "./DatePicker";
import UserInputs from "./UserInputs";
import dayjs from "dayjs";
import backToHome_svg from "../../assets/back-to-home-black.svg";
import salonInterior from "../../assets/salon-interior.jpg";
import logo from "../../assets/salon-logo-v6-removebg.png";
import "../../styles/Appointment.css";

function Appointment() {
  const { setOnAppointmentSucess } = useSucess();
  const [selectedDateAppointments, setSelectedDateAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceSelected: [],
    date: dayjs(),
    time: null,
  });
  const [boxesChecked, setBoxesChecked] = useState(0);
  const isOneBoxChecked = (boxesChecked) => {
    if (boxesChecked < 1) {
      return false;
    } else {
      return true;
    }
  };
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { userData, setUserData } = useAuth();

  function handleProceedClick() {
    setCarouselIndex((prev) => prev + 1);
  }

  useEffect(() => {
    async function fetchDateData() {
      try {
        // fetch all non member appointment data on user selected date;
        const nonMemberQuery = query(
          collection(db, "appointments"),
          where("date", "==", formData.date.format("YYYY/MM/DD"))
        );
        const nonMemberAppoSnap = await getDocs(nonMemberQuery);

        // fetch all login user appointment data on user selected date
        const loginUserQuery = query(
          collection(db, "login-user-appointments"),
          where("date", "==", formData.date.format("YYYY/MM/DD"))
        );
        const loginUserAppoSnap = await getDocs(loginUserQuery);

        const dateAppo = loginUserAppoSnap.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        console.log("loginAppo:", dateAppo);

        const selectedDateAppoData = nonMemberAppoSnap.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));

        const allAppoData = [...dateAppo, ...selectedDateAppoData];
        console.log("selectedDateAppointments:", allAppoData);

        setSelectedDateAppointments(allAppoData);
        setIsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDateData();

    return () => {
      setSelectedDateAppointments([]);
    };
  }, [formData.date]);

  // Add appointment to the db
  const createAppointment = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData) {
      const memberAppointmentObj = {
        name: userData.name,
        date: formData.date.format("YYYY/MM/DD"),
        time: formData.time,
        services: formData.serviceSelected,
        phone: formData.phone,
        email: userData.email,
        accountId: userData.uid,
      };
      try {
        await addDoc(
          collection(db, "login-user-appointments"),
          memberAppointmentObj
        );
      } catch (err) {
        console.error("Error creating member appointments:", err);
      }
    } else {
      const newAppointmentObj = {
        name: formData.name,
        date: formData.date.format("YYYY/MM/DD"),
        time: formData.time,
        services: formData.serviceSelected,
        phone: formData.phone,
      };
      try {
        await addDoc(collection(db, "appointments"), newAppointmentObj);
      } catch (err) {
        console.error("Error adding appointment:", err);
      }
    }
  };

  return (
    <>
      <div className="top-section">
        <Link to="/" className="link">
          <img src={backToHome_svg} alt="Back to Home" />
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
        <div className="userInput-section left-box">
          <img src={logo} alt="" className="logo" />
          <div className="carousel">
            <div
              className={`carousel-item ${
                carouselIndex === 0 ? "active" : "inactive"
              }`}
            >
              <Services
                formData={formData}
                setFormData={setFormData}
                setBoxesChecked={setBoxesChecked}
              />
            </div>
            <div
              className={`carousel-item ${
                carouselIndex === 1 ? "active" : "inactive"
              }`}
            >
              <DatePicker
                formData={formData}
                setFormData={setFormData}
                selectedDateAppointments={selectedDateAppointments}
              />
            </div>
            <div
              className={`carousel-item ${
                carouselIndex === 2 ? "active" : "inactive"
              }`}
            >
              {userData ? (
                <>
                  <div>會員：{userData.name}</div>
                  <div>Email：{userData.email}</div>
                  <div>
                    預約日期：
                    {formData.date.format("YYYY/MM/DD") + " " + formData.time}
                  </div>
                </>
              ) : (
                <UserInputs setFormData={setFormData} formData={formData} />
              )}
            </div>
          </div>
          <div className="submitModal">
            <AlertDialogSlide
              isOneBoxChecked={isOneBoxChecked(boxesChecked)}
              formData={formData}
              carouselIndex={carouselIndex}
              handleProceedClick={handleProceedClick}
            ></AlertDialogSlide>
          </div>
          <div className="progressStep-container">
            <div
              className={`progress-step ${carouselIndex === 0 ? "active" : ""}`}
            ></div>
            <div
              className={`progress-step ${carouselIndex === 1 ? "active" : ""}`}
            ></div>
            <div
              className={`progress-step ${carouselIndex === 2 ? "active" : ""}`}
            ></div>
          </div>
        </div>
        <img src={salonInterior} alt="salon-interior" className="right-box" />
      </form>
    </>
  );
}
export default Appointment;
