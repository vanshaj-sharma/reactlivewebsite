import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.firstname} ${data.lastname}, my phone number is ${data.phone}, email is ${data.email} `
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="firstname" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  name="firstname"
                  value={data.firstname}
                  onChange={inputEvent}
                  placeholder="First Name"
                />
              </div>
              <div class="mb-3">
                <label for="lastname" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  name="lastname"
                  value={data.lastname}
                  onChange={inputEvent}
                  placeholder="Last Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="emailA" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailA"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Email address"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
