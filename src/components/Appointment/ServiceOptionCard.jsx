import { useState } from "react";
import "../../styles/ServiceOptionCard.css";

function ServiceOptionCard({
  serviceObj,
  setFormData,
  formData,
  setBoxesChecked,
}) {
  const [isChecked, setIsChecked] = useState(false);
  // console.log(formData.serviceSelected);

  const handleSelectService = () => {
    if (formData.serviceSelected.includes(serviceObj.service)) {
      // Remove the service from the selected list
      const updatedServices = formData.serviceSelected.filter(
        (itm) => itm !== serviceObj.service
      );
      setFormData((prev) => ({
        ...prev,
        serviceSelected: updatedServices,
      }));
    } else {
      // Add the service to the selected list
      setFormData((prev) => ({
        ...prev,
        serviceSelected: [...prev.serviceSelected, serviceObj.service],
      }));
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
    </div>
  );
}
export default ServiceOptionCard;
