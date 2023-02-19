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
      //ToDo: 1- Handle all form validation in the handleSubmit + display a div or span for error
      //Or even have the error show up under the input
    }
    console.log(formData); //before post

    //Todo: 2- POST the formData to this api:
    //The result should be similar to formData with id of 11
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        pwd1: formData.pwd1,
        pwd2: formData.pwd2,
        fname: formData.fname,
        lname: formData.lname,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e)); //just logs it for now
  };

  return (
    <div className="App">
      <Form onChange={onChange} onSubmit={handleSubmit} data={formData} />
    </div>
  );
}
