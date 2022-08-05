import { useState } from "react";
import axios from "axios";
import "./Form.scss";

const Form = () => {
  const url =
    "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit";

  const [data, setData] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: [""],
    Message: "",
    bIncludeAddressDetails: true,
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

  const handleAddressClick = () => {
    setShowAddress(!showAddress);
    console.log(showAddress);
  };

  const handleSubmit = (event) => {
    console.log("sumbit");
    event.preventDefault();
    axios
      .post(url, {
        FullName: data.FullName,
        EmailAddress: data.EmailAddress,
        PhoneNumbers: [data.PhoneNumbers],
        Message: data.Message,
        bIncludeAddressDetails: true,
        AddressDetails: {
          AddressLine1: data.AddressLine1,
          AddressLine2: data.AddressLine2,
          CityTown: data.CityTown,
          StateCounty: data.StateCounty,
          Postcode: data.Postcode,
          Country: data.Country,
        },
      })
      .then((result) => {
        console.log(result.data);
      });
  };

  const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="FullName">Full name</label>
        <input
          onChange={handleChange}
          value={data.FullName}
          type="text"
          id="FullName"
          required
        />
      </div>
      <div>
        <label htmlFor="EmailAddress">Email address</label>
        <input
          onChange={handleChange}
          value={data.EmailAddress}
          type="text"
          id="EmailAddress"
          required
        />
      </div>
      <div>
        <label htmlFor="PhoneNumbers">Phone number 01 - optional</label>
        <input
          onChange={handleChange}
          value={[data.PhoneNumbers]}
          type="text"
          id="PhoneNumbers"
        />
      </div>
      <button>Add new phone number</button>
      <div>
        <label htmlFor="Message">
          Message - Maximum text length is 500 characters
        </label>
        <input
          onChange={handleChange}
          value={data.Message}
          type="text"
          id="Message"
        />
      </div>
      <div>
        <input type="checkbox" id="add-address" onChange={handleAddressClick} />
        <label htmlFor="add-address">Add address details</label>
      </div>

      {showAddress && (
        <div className="address-container">
          <div className="adddress-line-container">
            <div>
              <label htmlFor="AddressLine1">Address line 1</label>
              <input
                onChange={handleChange}
                value={data.AddressDetails.AddressLine1}
                type="text"
                id="AddressLine1"
              />
            </div>
            <div>
              <label htmlFor="AddressLine2">Address line 2</label>
              <input
                onChange={handleChange}
                value={data.AddressDetails.AddressLine2}
                type="text"
                id="AddressLine2"
              />
            </div>
          </div>
          <div className="adddress-extras-container">
            <div>
              <label htmlFor="CityTown">City/Town</label>
              <input
                onChange={handleChange}
                value={data.AddressDetails.CityTown}
                type="text"
                id="CityTown"
              />
            </div>
            <div>
              <label htmlFor="StateCounty">State/County</label>
              <input
                onChange={handleChange}
                value={data.AddressDetails.StateCounty}
                type="text"
                id="StateCounty"
              />
            </div>
            <div>
              <label htmlFor="Postcode">Postcode</label>
              <input
                onChange={handleChange}
                value={data.AddressDetails.Postcode}
                type="text"
                id="Postcode"
              />
            </div>
            <div>
              <label htmlFor="Country">Country</label>
              <input
                onChange={handleChange}
                value={data.AddressDetails.Country}
                type="text"
                id="Country"
              />
            </div>
          </div>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
