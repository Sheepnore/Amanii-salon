import { useState } from "react";
import "../../styles/ServiceOptionCard.css";

function ServiceOptionCard({
  serviceObj,
  setServiceSelected,
  serviceSelected,
  setBoxesChecked,
}) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(serviceSelected);
  const handleSelectService = () => {
    if (serviceSelected.includes(serviceObj.service)) {
      // Remove the service from the selected list
      const updatedServices = serviceSelected.filter(
        (itm) => itm !== serviceObj.service
      );
      setServiceSelected(updatedServices);
    } else {
      // Add the service to the selected list
      setServiceSelected([...serviceSelected, serviceObj.service]);
    }
  };

  const countBoxesChecked = (e) => {
    if (!e.target.classList.contains("checked")) {
      setBoxesChecked((count) => count + 1);
    } else {
      setBoxesChecked((count) => count - 1);
    }
  };

  return (
    <div
      className={isChecked ? "service-card checked" : "service-card"}
      onClick={(e) => {
        setIsChecked(!isChecked);
        countBoxesChecked(e);
        handleSelectService();
      }}
    >
      <input
        type="checkbox"
        value={serviceObj.service}
        name="services"
        id={serviceObj.service}
        className="service-checkbox"
        checked={isChecked}
        readOnly
      />
      <label
        className={`service-name ${isChecked ? "checked" : ""}`}
        id={serviceObj.service}
      >
        {serviceObj.service}
      </label>
      <label
        className={`service-cost ${isChecked ? "checked" : ""}`}
        id={serviceObj.service}
      >
        Cost: {serviceObj.price_NTD}
      </label>
    </div>
  );
}
export default ServiceOptionCard;
