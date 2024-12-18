import { useEffect, useState, useMemo } from "react";
import "../../styles/Services.css";
import ServiceOptionCard from "./ServiceOptionCard";

function Services({ serviceSelected, setServiceSelected, setBoxesChecked }) {
  const services = [
    { service: "Haircut", price_NTD: 2000 },
    { service: "Hairwash", price_NTD: 500 },
    { service: "Scalp Massage", price_NTD: 4000 },
    { service: "Hair Perming", price_NTD: 3500 },
    { service: "Hair Staightening", price_NTD: 3500 },
    { service: "Hair Dyeing", price_NTD: 4000 },
  ];

  return (
    <div className="Services" id="services">
      <div className="highlight-heading">1. Select Service</div>
      <div className="cards-container">
        {services.map((service) => {
          return (
            <ServiceOptionCard
              serviceObj={service}
              key={service.service}
              setServiceSelected={setServiceSelected}
              serviceSelected={serviceSelected}
              setBoxesChecked={setBoxesChecked}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Services;
