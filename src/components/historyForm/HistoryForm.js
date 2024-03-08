import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOrderByUser } from "../../redux/operations";
import "./HistoryForm.css";
const HistoryForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchOrderByUser(formData));
  };

  return (
    <div>
      <h2>Order History</h2>
      <form className="history-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HistoryForm;
