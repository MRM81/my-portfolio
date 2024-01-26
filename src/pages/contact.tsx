import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="page-container">
      <div className="contact-container flex-center-column">
        <h1>Contact</h1>

        <p>
          feel free to e-mail me at svarlan04@yahoo.com.au or use the contact
          form below.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
