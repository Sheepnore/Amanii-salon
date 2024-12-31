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
import salonInterior from "../../assets/salon-interior.jpg";
import logo from "../../assets/salon-logo-v6-removebg.png";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [boxesChecked, setBoxesChecked] = useState(0);
  const isOneBoxChecked = (boxesChecked) => {
    if (boxesChecked < 1) {
      return false;
    } else {
      return true;
    }
  };
  const [carouselIndex, setCarouselIndex] = useState(0);

  function handleProceedClick() {
    setCarouselIndex((prev) => prev + 1);
  }

  useEffect(() => {
    async function fetchDateData() {
      try {
        // fetch all non member appointment data on user selected date
        const nonMemberQuery = query(
          collection(db, "appointments"),
          where("date", "==", formData.date.format("YYYY/MM/DD"))
        );
        const selectedDateAppoQuery = await getDocs(nonMemberQuery);

        // fetch all login user appointment data on user selected date
        const loginUserQuery = query(
          collection(db, "login-user-appointments"),
          where("date", "==", formData.date.format("YYYY/MM/DD"))
        );

        const selectedDateAppointments = selectedDateAppoQuery.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id })
        );
        console.log("selectedDateAppointments:", selectedDateAppointments);

        setSelectedDateAppointments(selectedDateAppointments);
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
    const newAppointmentObj = {
      name: formData.name,
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
                  <UserInputs setFormData={setFormData} formData={formData} />
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
                  className={`progress-step ${
                    carouselIndex === 0 ? "active" : ""
                  }`}
                ></div>
                <div
                  className={`progress-step ${
                    carouselIndex === 1 ? "active" : ""
                  }`}
                ></div>
                <div
                  className={`progress-step ${
                    carouselIndex === 2 ? "active" : ""
                  }`}
                ></div>
              </div>
            </div>
            <img
              src={salonInterior}
              alt="salon-interior"
              className="right-box"
            />
          </form>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
export default Appointment;
