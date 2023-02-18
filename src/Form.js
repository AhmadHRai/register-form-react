import "./styles.css";

export default function Form() {
  return (
    <>
      <form>
        <header>Registration form</header>
        <fieldset>
          <section>
            <label>
              <i class="fa fa-user icon" />
              <input type="text" name="username" placeholder="Username" />
            </label>
          </section>
          <section>
            <label>
              <i class="fa fa-envelope icon" />
              <input type="text" name="email" placeholder="Email Address" />
            </label>
          </section>
          <section>
            <label>
              <i class="fa fa-lock icon" />
              <input type="password" name="pwd1" placeholder="Password" />
            </label>
          </section>
          <section>
            <label>
              <i class="fa fa-lock icon" />
              <input
                type="password"
                name="pwd2"
                placeholder="Confirm password"
              />
            </label>
          </section>
        </fieldset>

        {/* Second fieldset */}
        <fieldset>
          <div className="row">
            <section className="col">
              <input type="text" name="fname" placeholder="First Name" />
            </section>
            <section className="col">
              <input type="text" name="lname" placeholder="Last Name" />
            </section>
          </div>
          <section>
            <label className="checkbox">
              <input type="checkbox" name="checkbox" />I agree to the Terms of
              Service
            </label>
          </section>
        </fieldset>

        {/* footer */}
        <footer>
          <button type="submit">Submit</button>
        </footer>
      </form>
    </>
  );
}
