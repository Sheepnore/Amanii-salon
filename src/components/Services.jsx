import { useEffect, useState, useMemo } from "react";
import "../styles/Services.css";
import ServiceOptionCard from "./ServiceOptionCard";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function Services() {
  const [serviceList, setServiceList] = useState([]);

  const serviceCollectionRef = collection(db, "services");

  const services = [
    { service: "haircut", price_NTD: 2000 },
    { service: "hairwash", price_NTD: 500 },
    { service: "scalp Massage", price_NTD: 4000 },
    { service: "hair perming", price_NTD: 3500 },
    { service: "hair staightening", price_NTD: 3500 },
    { service: "hair dyeing", price_NTD: 4000 },
  ];

  const createAppointment = async () => {
    await addDoc(collection(db, "appointments"), {});
  };

  useEffect(() => {
    const getServiceList = async () => {
      try {
        const data = await getDocs(serviceCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setServiceList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getServiceList();
  }, []);

  return (
    <div className="services" id="services">
      <div className="highlight-heading">Select Services</div>
      <div className="cards-container">
        {services.map((service) => {
          return (
            <ServiceOptionCard
              serviceDescription={service.service}
              key={service.service}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Services;
