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

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); //before post

    if (hasEmptyKeys(formData)) {
      setIsAlertVisible(true);

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    } else {
      postData();
    }
  };

  function postData() {
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
  }

  function hasEmptyKeys(obj) {
    for (var key in obj) {
      if (obj[key] === "") {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="App">
      {isAlertVisible && (
        <div className="alert-container">
          <div className="alert-inner">Please Fill Out All Form Fields !!</div>
        </div>
      )}
      <Form
        onChange={onChange}
        onSubmit={handleSubmit}
        focused={focused.toString()}
        onBlur={handleFocus}
        data={formData}
      />
    </div>
  );
}
