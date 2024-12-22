import "../styles/Location.css";

function Location() {
  return (
    <div className="Location" id="location">
      <h1 className="heading">Salon Location 店面地址</h1>
      <div className="location-info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.858616224895!2d121.60176337555423!3d25.072780713439016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac97c5df8a23%3A0x2c07b9f2eb8e65f8!2z6Zi_5pu8546J5rKZ6b6N!5e0!3m2!1szh-TW!2stw!4v1733906562573!5m2!1szh-TW!2stw"
          width="400"
          height="400"
          loading="lazy"
        ></iframe>
        <div className="address">
          <h2>阿曼玉沙龍</h2>
          <p>地址: 台北市內湖區民權東路六段447號</p>
          <p>交通: 捷運文湖線至葫洲站，步行約6分鐘</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
