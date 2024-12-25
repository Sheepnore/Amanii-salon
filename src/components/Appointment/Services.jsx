import "../../styles/Services.css";
import ServiceOptionCard from "./ServiceOptionCard";

function Services({ setFormData, formData, setBoxesChecked }) {
  const services = [
    { service: "剪髮", price_NTD: 2000 },
    { service: "洗頭", price_NTD: 500 },
    { service: "頭皮按摩", price_NTD: 4000 },
    { service: "髮燙", price_NTD: 3500 },
    { service: "縮毛矯正", price_NTD: 3500 },
    { service: "染髮", price_NTD: 4000 },
  ];

  return (
    <div className="Services" id="services">
      <div className="highlight-heading">
        <span>選擇服務</span>
      </div>
      <div className="cards-container">
        {services.map((service) => {
          return (
            <ServiceOptionCard
              serviceObj={service}
              key={service.service}
              setFormData={setFormData}
              formData={formData}
              setBoxesChecked={setBoxesChecked}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Services;
