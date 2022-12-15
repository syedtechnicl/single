import { useState } from "react";

const Form = () => {
  const [form, setform] = useState({
    fname: "",
    lname: "",
    cname: "",
    address: "",
    email: "",
    phone: "",
    additional: "",
  });
  const Change = (e) => {
    const { name, value } = e.target;
    setform((names) => {
      return {
        ...names,
        [name]: value,
      };
    });
  };
  const Result = (e) => {
    e.preventDefault();
    alert(`my first name is ${form.fname} my lname is ${form.lname} ${form.cname} 
        ${form.address}
        ${form.email}
        ${form.phone}
        ${form.additional}
        `);
  };

  return (
    <>
      <div className="p-5">
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                name="fname"
                value={form.fname}
                onChange={Change}
                type="text"
                id="form6Example1"
                className="form-control"
              />
              <label className="form-label" for="form6Example1">
                First name
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                name="lname"
                value={form.lname}
                onChange={Change}
                type="text"
                id="form6Example2"
                className="form-control"
              />
              <label className="form-label" for="form6Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input
            name="cname"
            value={form.cname}
            onChange={Change}
            type="text"
            id="form6Example3"
            className="form-control"
          />
          <label className="form-label" for="form6Example3">
            Company name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="address"
            value={form.address}
            onChange={Change}
            type="text"
            id="form6Example4"
            className="form-control"
          />
          <label className="form-label" for="form6Example4">
            Address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="email"
            value={form.email}
            onChange={Change}
            type="email"
            id="form6Example5"
            className="form-control"
          />
          <label className="form-label" for="form6Example5">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="phone"
            value={form.phone}
            onChange={Change}
            type="number"
            id="form6Example6"
            className="form-control"
          />
          <label className="form-label" for="form6Example6">
            Phone
          </label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            name="additional"
            value={form.additional}
            onChange={Change}
            className="form-control"
            id="form6Example7"
            rows="4"
          ></textarea>
          <label className="form-label" for="form6Example7">
            Additional information
          </label>
        </div>

        <button onClick={Result} className="btn btn-primary btn-block mb-4">
          Place order
        </button>
      </div>
    </>
  );
};
export default Form;
