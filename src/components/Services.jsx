import { useEffect, useState, useMemo } from "react";
import "../styles/Services.css";
import ServiceOptionCard from "./ServiceOptionCard";

function Services({ serviceSelected, setServiceSelected }) {
  const services = [
    { service: "haircut", price_NTD: 2000 },
    { service: "hairwash", price_NTD: 500 },
    { service: "scalp massage", price_NTD: 4000 },
    { service: "hair perming", price_NTD: 3500 },
    { service: "hair staightening", price_NTD: 3500 },
    { service: "hair dyeing", price_NTD: 4000 },
  ];

  return (
    <div className="services" id="services">
      <div className="highlight-heading">Select Service</div>
      <div className="cards-container">
        {services.map((service) => {
          return (
            <ServiceOptionCard
              serviceObj={service}
              key={service.service}
              setServiceSelected={setServiceSelected}
              serviceSelected={serviceSelected}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Services;
