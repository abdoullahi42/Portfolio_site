/* eslint-disable react/no-unescaped-entities */
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact_box">
          <div className="contact__header">
            <p>CONTACT</p>
            <h3 className="header-contact">contact me on👇</h3>
          </div>
          <div className="contact__content">
            <div className="contact__details-box">
              <span className="span-icons">
                <ion-icon
                  name="location-outline"
                  className="icon-location"
                ></ion-icon>
              </span>
              <div className="contact__details">
                <h3>Location</h3>
                <p>Abuja, Nigeria</p>
              </div>
            </div>

            <div className="contact__details-box">
              <span>
                <ion-icon name="mail-outline" className="icon-mail"></ion-icon>
              </span>
              <div className="contact__details">
                <h3>Email</h3>
                <a href="mailto:abdoullahisalihou2@gmail.com">
                  abdoullahisalihou2@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
