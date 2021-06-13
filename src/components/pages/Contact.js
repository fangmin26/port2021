import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Contact() {
  return (
    <main id="root" className="lock">
      {/* <Loader /> */}
      <Header />
      <section id="Contact">
        <section id="section1">
          <div className="container">
            <div className="sec1">
              <h2>CONTACT'ME</h2>
            </div>
          </div>
        </section>
        <section id="section2">
          <div className="container">
            <div className="sec2">
              <div className="contact_form">
                <div className="left">
                  <form>
                    {/* <form onsubmit="return false">                  */}
                    <div className="contact_li active">
                      <label for="name">YOUR NAME</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="write your your name here."
                        required
                      />
                    </div>
                    <div className="contact_li">
                      <label for="phone">MOBILE</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="write your mobile number here."
                        required
                      />
                    </div>
                    <div className="contact_li">
                      <label for="email">E-MAIL</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="write yoer e-mail here."
                        required
                      />
                    </div>
                    <div className="contact_li">
                      <label for="message">MASSAGE</label>
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="write yoer message here."
                        required
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="right">
                  <input type="submit" value="SUBMIT" className="submitBTN" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}

export default Contact;
