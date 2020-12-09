import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Form.module.css";

const Form = (props) => {
  // const submittedForm = props.submittedForm;

  const setName = props.setName;
  const [submittedForm, setSubmittedForm] = useState()
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };
  useEffect(() => {
    if (submittedForm) {
      setName({
        firstName: submittedForm.get("firstName")
        , lastName: submittedForm.get("lastName")
      })

    }
  }, [submittedForm, setName])



  return (
    <div>
      {
        submittedForm ? (
          <Link to="/" >Thanks for your Sign up,Please Click Here Return to Home Page</Link>
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
                <select name="position" id="position" >
                  <option value="Student">Student</option>
                  <option value="designer">designer</option>
                  <option value="programmer">programmer</option>
                  <option value="others">others</option>
                </select>
              </div>

              <div className={styles.agePart}>
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
              </div>
              <div>
                <input type="submit" value="confirm" className={styles.button} />
              </div>
            </form>
          )
      }
    </div>
  )
}

export default Form
