import { useState } from "react";
import "./styles.css";

export default function Form(props) {
  const { onChange, onBlur, onSubmit, focused,data } = props;

  return (
    <>
      <form onSubmit={onSubmit}>
        <header>Registration form</header>
        <fieldset>
          <section>
            <label>
              <i className="fa fa-user icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                pattern="^[A-Za-z0-9]{3,16}$"
                title="Username should not contain spaces"
                onChange={onChange}
                onFocus={onBlur}
                focused={focused}
               
              />
              <span>Username should not contain spaces</span>
            </label>
            
          </section>
          <section>
            <label>
              <i className="fa fa-envelope icon" />
              <input
                type="email"
                name="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                placeholder="Email Address"
                onChange={onChange}
                onFocus={onBlur}
                focused={focused}
              />
              <span>Username should not contain spaces</span>
            </label>
          </section>
          <section>
            <label>
              <i className="fa fa-lock icon" />
              <input
                type="password"
                name="pwd1"
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
               
                title="Passwords should have over 8 characters long, have at least one capital letter, have at least one small letter, have at least one number, have at least one symbol"
                onChange={onChange}
                onFocus={onBlur}
                focused={focused}
             
              />
              <span>Passwords should have over 8 characters long, have at least one capital letter, have at least one small letter, have at least one number, have at least one symbol</span>
            </label>
          </section>
          <section>
            <label>
              <i className="fa fa-lock icon" />
              <input
                type="password"
                name="pwd2"
                placeholder="Confirm password"
                pattern={data.pwd1}
                title="Passwords should have over 8 characters long, have at least one capital letter, have at least one small letter, have at least one number, have at least one symbol"
                onChange={onChange}
                onFocus={onBlur}
                focused={focused}
            
              />
              <span>Passwords should have over 8 characters long, have at least one capital letter, have at least one small letter, have at least one number, have at least one symbol</span>
            </label>
          </section>
        </fieldset>

        {/* Second fieldset */}
        <fieldset>
          <div className="row">
            <section className="col">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
              
                pattern="^[A-Za-z]{3,16}$"
                title="Your name (3+ characters) should not contain any numbers"
                onChange={onChange}
            
              />
              <span>Your name (3+ characters) should not contain any numbers</span>
            </section>
            <section className="col">
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
               
                pattern="^[A-Za-z]{3,16}$"
                title="Your name (3+ characters) should not contain any numbers"
                onChange={onChange}
              
              />
                <span>Your name (3+ characters) should not contain any numbers</span>
            </section>
          </div>
          <section>
            <label className="checkbox">
              <input type="checkbox" name="checkbox" required />I agree to the
              Terms of Service
            </label>
          </section>
        </fieldset>

        {/* footer */}
        <footer>
          <button type="submit">Sign Up</button>
        </footer>
      </form>
    </>
  );
}
