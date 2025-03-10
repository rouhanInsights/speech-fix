import React from "react";
import styles from "../../Styles/Contact.module.css";

const ContactUs = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.container}>
        {/* Left Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.heading}>
            Get in <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.description}>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </p>
          <form className={styles.form}>
            <input type="text" placeholder="Name *" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="text" placeholder="Phone number *" className={styles.input} />
            <select className={styles.input}>
              <option>How did you find us?</option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Word of Mouth</option>
            </select>
            <button type="submit" className={styles.button}>SEND</button>           
            <p className={styles.backhome}>Back to <a href="/">Home page</a></p>
          </form>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <img src="/images/phone.png" alt="" />
              <div>
              <span>PHONE</span>
              <p>03 5432 1234</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <img src="/images/fax.png" alt="" />
              <div>
              <span>FAX</span>
              <p>03 5432 1234</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <img src="/images/mail.png" alt="" />
              <div>
              <span>EMAIL</span>
              <p>EMAIL
              info@marcc.com.au</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Map Section with Shadow */}
        <div className={styles.mapSection}>
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            className={styles.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.2704233382!2d88.18253509871184!3d22.535660584250135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1741325917126!5m2!1sen!2sin"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
