import { useState } from "react";
import "../../styles/ServiceOptionCard.css";

function ServiceOptionCard({
  serviceObj,
  setServiceSelected,
  serviceSelected,
  setBoxesChecked,
}) {
  const [isChecked, setIsChecked] = useState(false);

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
    console.log(e.target);
  };

  return (
    <div
      className={isChecked ? "service-card checked" : "service-card"}
      onClick={(e) => {
        setIsChecked(!isChecked);
        countBoxesChecked(e);
      }}
    >
      <input
        type="checkbox"
        onChange={handleSelectService}
        className="service-checkbox"
        checked={isChecked}
        hidden
      />
      <span className={`service-name ${isChecked ? "checked" : ""}`}>
        {serviceObj.service}
      </span>
      <span className={`service-cost ${isChecked ? "checked" : ""}`}>
        Cost: {serviceObj.price_NTD}
      </span>
    </div>
  );
}
export default ServiceOptionCard;
