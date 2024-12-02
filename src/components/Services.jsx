import "../styles/Services.css";
import ServiceOptionCard from "./ServiceOptionCard";

function Services() {
  const services = [
    { name: "Haircut", isSelected: false },
    { name: "Scalp Massage", isSelected: false },
    { name: "Hair Perm", isSelected: false },
    { name: "Hair Straightening", isSelected: false },
  ];

  return (
    <div className="services" id="services">
      <div className="highlight-heading">Select Services</div>
      <div className="cards-container">
        {services.map((service) => {
          return (
            <ServiceOptionCard
              serviceDescription={service.name}
              key={service.name}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Services;
