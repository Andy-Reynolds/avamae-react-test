import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [showAddress, setShowAddress] = useState(false);

  const handleAddressClick = () => {
    setShowAddress(!showAddress);
    console.log(showAddress);
  };

  return (
    <form className="form">
      <div>
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone number 01 - optional</label>
        <input type="text" id="phone" />
      </div>
      <button>Add new phone number</button>
      <div>
        <label htmlFor="message">
          Message - Maximum text length is 500 characters
        </label>
        <input type="text" id="message" />
      </div>
      <div>
        <input type="checkbox" id="add-address" onChange={handleAddressClick} />
        <label htmlFor="add-address">Add address details</label>
      </div>

      {showAddress && (
        <div className="address-c     ontainer">
          <div className="adddress-line-container">
            <div>
              <label htmlFor="address-one">Address line 1</label>
              <input type="text" id="address-one" />
            </div>
            <div>
              <label htmlFor="address-two">Address line 2</label>
              <input type="text" id="address-two" />
            </div>
          </div>
          <div className="adddress-extras-container">
            <div>
              <label htmlFor="city">City/Town</label>
              <input type="text" id="city" />
            </div>
            <div>
              <label htmlFor="state">State/County</label>
              <input type="text" id="state" />
            </div>
            <div>
              <label htmlFor="postcode">Postcode</label>
              <input type="text" id="postcode" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" />
            </div>
          </div>
        </div>
      )}
      <button>Submit</button>
    </form>
  );
};

export default Form;
