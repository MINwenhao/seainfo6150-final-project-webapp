import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };
  return (
    <div>
      {
        submittedForm ? (
          <div> Welcome {submittedForm.get("firstName")}  {submittedForm.get("lastName")}</div>
        ) : (

            <form onSubmit={onSubmit} className={styles.container}>
              <input type="text" id="first" name="firstName" placeholder="First Name" required />
              <input type="text" id="last" name="lastName" placeholder="Last Name" required />
              <input type="password" id="password" name="password" placeholder="Password" required />
              <input type="email" name="email" id="email" placeholder="Email" required />
              <div>
                <label htmlFor="Gender">Gender</label>
                <select name="Gender" id="Gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="position">Position</label>
                <select name="position" id="position">
                  <option value="Student">Student</option>
                  <option value="designer">designer</option>
                  <option value="programmer">programmer</option>
                  <option value="others">others</option>
                </select>
              </div>
              <p> select your age range</p>
              <div>
                <input type="radio" name="ageRange" id="adolescent" />
                <label htmlFor="adolescent">less than 19</label>
              </div>
              <div>
                <input type="radio" name="ageRange" id="youngAdult" />
                <label htmlFor="youngAdult">19-30</label>
              </div>
              <div>
                <input type="radio" name="ageRange" id="middleAge" />
                <label htmlFor="middleAge">31-60</label>
              </div>
              <div>
                <input type="radio" name="ageRange" id="oldAdult" />
                <label htmlFor="oldAdult">more than 60</label>
              </div>
              <div>
                <input type="submit" value="confirm" />
              </div>

            </form>
          )
      }
    </div>
  )
}

export default Form
