import "./ContactUs.scss";
import Form from "../../Components/Form/Form";
import Layout from "../../Components/Layout/Layout";
import companyLogo from "../../assets/images/Img_Contact.png";

const ContactUs = () => {
  return (
    <Layout>
      <div className="contact-us">
        <div className="contact-us__content-container">
          <h1 className="contact-us__heading">Contact Us</h1>
          <p className="contact-us__paragraph">
            Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
            aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan
            at vix.
          </p>
          <Form />
        </div>
        <img
          className="contact-us__logo"
          src={companyLogo}
          alt="Company Logo"
        />
      </div>
    </Layout>
  );
};

export default ContactUs;
