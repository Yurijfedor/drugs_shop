import { useState } from "react";
import "./ShoppingCartForm.css";

const ShoppingCartForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.address) {
      onSubmit(formData);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="shopping-cart-form">
      <h2>Personal Information</h2>
      <form style={{ padding: "20px" }} onSubmit={() => handleSubmit()}>
        <div className="form-group">
          <label htmlFor="name">
            <span className="input-span">*</span> Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <span className="input-span">*</span> Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            <span className="input-span">*</span> Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">
            <span className="input-span">*</span> Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShoppingCartForm;
