import "./styles.css";
import Form from "./Form.js";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pwd1: "",
    pwd2: "",
    fname: "",
    lname: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.pwd1 !== formData.pwd2) {
      console.log("Passwords dont match ERRRRROR");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="App">
      <Form onChange={onChange} onSubmit={handleSubmit} data={formData} />
    </div>
  );
}
