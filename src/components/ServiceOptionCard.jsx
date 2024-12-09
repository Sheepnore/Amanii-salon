import "../styles/ServiceOptionCard.css";

function ServiceOptionCard({
  serviceObj,
  setServiceSelected,
  serviceSelected,
}) {
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
    <div className="card">
      <input type="checkbox" onChange={handleSelectService} />
      <span className="service-name">{serviceObj.service}</span>
      <span className="service-cost">Cost: {serviceObj.price_NTD}</span>
    </div>
  );
}
export default ServiceOptionCard;
