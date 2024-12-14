import "../styles/Contact.css";

function Contact() {
  return (
    <div className="Contact" id="contact">
      <h1 className="heading">Salon Location</h1>
      <div className="location-info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.858616224895!2d121.60176337555423!3d25.072780713439016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac97c5df8a23%3A0x2c07b9f2eb8e65f8!2z6Zi_5pu8546J5rKZ6b6N!5e0!3m2!1szh-TW!2stw!4v1733906562573!5m2!1szh-TW!2stw"
          width="400"
          height="400"
          loading="lazy"
        ></iframe>
        <div className="address">
          <h2>阿曼玉沙龍</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit
            voluptatem facere blanditiis, dolorem amet assumenda quia suscipit
            rerum repellat exercitationem. itaque deserunt ipsam eaque explicabo
            quos debitis magni! Magnam
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
