import { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";
import { Footer } from "../components/Footer";

const defaultTemplateForm = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultTemplateForm);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [userData, user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(contact);

    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultTemplateForm);
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      }

      console.log(response);
    } catch (error) {
      console.log(error, "error while sending message");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registeration image">
                <img
                  src="/organized-desk-with-copy-space_23-2148219270.avif"
                  alt="always ready to help"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="contact-form">
                <h1 className="main-heading mb-3">Contact Us</h1>
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      autoComplete="off"
                      required
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      autoComplete="off"
                      required
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type your message..."
                      required
                      value={contact.message}
                      onChange={handleInput}
                    ></textarea>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2501961250514!2d73.91456992465314!3d18.56275566788537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1713618268129!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
       
      </section>
      <Footer></Footer>
    </>
  );
};

// export default Contact;
