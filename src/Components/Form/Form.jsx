import { useState } from "react";
import axios from "axios";
import "./Form.scss";
import submitIcon from "../../assets/svgs/Icon_Submit.svg";
import submitSuccess from "../../assets/svgs/Icon_Valid.svg";

const Form = () => {
  const url =
    "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit";

  const [data, setData] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: [""],
    Message: "",
    bIncludeAddressDetails: false,
    AddressDetails: {
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: "",
    },
  });
  const [showAddress, setShowAddress] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAddressClick = () => {
    setShowAddress(!showAddress);
    console.log(showAddress);
  };

  const handleSubmit = async (event) => {
    console.log("sumbit");
    event.preventDefault();
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          FullName: data.FullName,
          EmailAddress: data.EmailAddress,
          PhoneNumbers: data.PhoneNumbers,
          Message: data.Message,
          bIncludeAddressDetails: false,
          AddressDetails: {
            AddressLine1: data.AddressLine1,
            AddressLine2: data.AddressLine2,
            CityTown: data.CityTown,
            StateCounty: data.StateCounty,
            Postcode: data.Postcode,
            Country: data.Country,
          },
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: false,
        }
      );
      console.log(response);
      setSuccess(true);
    } catch (err) {
      console.log("failed");
    }
  };

  const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  };

  const handlePhoneNumberChange = (event) => {
    const newData = { ...data };
    newData[event.target.id][0] = event.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <>
      {success ? (
        <div className="form__success-container">
          <div className="form__tick-container">
            <img className="form__tick" src={submitSuccess} alt="" />
          </div>
          <h3 className="form__success-header">Your message has been sent</h3>
          <p className="form__success-message">
            We will be in contact with you within 24 hours.
          </p>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input-container">
            <label className="form__label" htmlFor="FullName">
              Full name
            </label>
            <input
              className="form__input"
              onChange={handleChange}
              value={data.FullName}
              type="text"
              id="FullName"
              required
            />
          </div>
          <div className="form__input-container">
            <label className="form__label" htmlFor="EmailAddress">
              Email address
            </label>
            <input
              className="form__input"
              onChange={handleChange}
              value={data.EmailAddress}
              type="text"
              id="EmailAddress"
              required
            />
          </div>
          <div className="form__input-container">
            <label className="form__label" htmlFor="PhoneNumbers">
              Phone number 01 <span className="form__fade">- optional</span>
            </label>
            <input
              className="form__input"
              onChange={handlePhoneNumberChange}
              value={data.PhoneNumbers}
              type="text"
              id="PhoneNumbers"
              required
            />
          </div>
          {/* <button className="form__button">Add new phone number</button> */}
          <div className="form__input-container">
            <label className="form__label" htmlFor="Message">
              Message{" "}
              <span className="form__fade form__fade--message">
                - Maximum text length is 500 characters
              </span>
            </label>
            <input
              className="form__input form__input--message"
              onChange={handleChange}
              value={data.Message}
              type="text"
              id="Message"
              required
            />
          </div>
          <div>
            <input
              className="form__checkbox"
              type="checkbox"
              id="add-address"
              onChange={handleAddressClick}
            />
            <label className="form__label" htmlFor="add-address">
              Add address details
            </label>
          </div>

          {showAddress && (
            <div className="form__address-container">
              <div className="form__address-line-container">
                <div className="form__input-container">
                  <label className="form__label" htmlFor="AddressLine1">
                    Address line 1
                  </label>
                  <input
                    className="form__input form__input--address-lines"
                    onChange={handleChange}
                    value={data.AddressDetails.AddressLine1}
                    type="text"
                    id="AddressLine1"
                  />
                </div>
                <div className="form__input-container">
                  <label className="form__label" htmlFor="AddressLine2">
                    Address line 2{" "}
                    <span className="form__fade">- optional</span>
                  </label>
                  <input
                    className="form__input form__input--address-lines"
                    onChange={handleChange}
                    value={data.AddressDetails.AddressLine2}
                    type="text"
                    id="AddressLine2"
                  />
                </div>
              </div>
              <div className="form__address-extras-container">
                <div className="form__input-container form__input-container--address-extras">
                  <label className="form__label" htmlFor="CityTown">
                    City/Town
                  </label>
                  <input
                    className="form__input form__input--address-extras"
                    onChange={handleChange}
                    value={data.AddressDetails.CityTown}
                    type="text"
                    id="CityTown"
                  />
                </div>
                <div className="form__input-container form__input-container--address-extras">
                  <label className="form__label" htmlFor="StateCounty">
                    State/County
                  </label>
                  <input
                    className="form__input form__input--address-extras"
                    onChange={handleChange}
                    value={data.AddressDetails.StateCounty}
                    type="text"
                    id="StateCounty"
                  />
                </div>
                <div className="form__input-container form__input-container--address-extras">
                  <label className="form__label" htmlFor="Postcode">
                    Postcode
                  </label>
                  <input
                    className="form__input form__input--address-extras"
                    onChange={handleChange}
                    value={data.AddressDetails.Postcode}
                    type="text"
                    id="Postcode"
                  />
                </div>
                <div className="form__input-container form__input-container--address-extras">
                  <label className="form__label" htmlFor="Country">
                    Country
                  </label>
                  <input
                    className="form__input form__input--address-extras"
                    onChange={handleChange}
                    value={data.AddressDetails.Country}
                    type="text"
                    id="Country"
                  />
                </div>
              </div>
            </div>
          )}
          <button
            className="form__submit form__button form__button--submit"
            type="submit"
          >
            <img className="form__submit-icon" src={submitIcon} alt="sumbit" />
            Submit
            <div></div>
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
