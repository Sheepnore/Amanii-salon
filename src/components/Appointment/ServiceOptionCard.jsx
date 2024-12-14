import { useState } from "react";
import "../../styles/ServiceOptionCard.css";

function ServiceOptionCard({
  serviceObj,
  setServiceSelected,
  serviceSelected,
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

  return (
    <div
      className={isChecked ? "service-card checked" : "service-card"}
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      <input
        type="checkbox"
        onChange={handleSelectService}
        className="service-checkbox"
        checked={isChecked}
      />
      <span className="service-name">{serviceObj.service}</span>
      <span className="service-cost">Cost: {serviceObj.price_NTD}</span>
    </div>
  );
}
export default ServiceOptionCard;
