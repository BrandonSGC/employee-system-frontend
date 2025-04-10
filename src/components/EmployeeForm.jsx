import { useState } from "react";
import { createEmployee } from "../helpers";

export const EmployeeForm = ({ fetchEmployees }) => {
  const [employee, setEmployee] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const onInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (employee.password !== employee.passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }

    await createEmployee(employee);
    fetchEmployees();
  };
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label htmlFor="name">Name: </label>
        <input
          className="border border-cyan-200 rounded-sm p-2 mb-2"
          type="text"
          id="name"
          placeholder="Your Name"
          onChange={onInputChange}
        />

        <label htmlFor="surname">Surname: </label>
        <input
          className="border border-cyan-200 rounded-sm p-2 mb-2"
          type="text"
          id="surname"
          placeholder="Your Surname"
          onChange={onInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          className="border border-cyan-200 rounded-sm p-2 mb-2"
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
          onChange={onInputChange}
        />

        <label htmlFor="password">Password: </label>
        <input
          className="border border-cyan-200 rounded-sm p-2 mb-2"
          type="password"
          id="password"
          placeholder="Your password"
          onChange={onInputChange}
        />

        <label htmlFor="passwordConfirmation">Confirm password: </label>
        <input
          className="border border-cyan-200 rounded-sm p-2 mb-2"
          type="password"
          id="passwordConfirmation"
          placeholder="Your password"
          onChange={onInputChange}
        />
        <button className="bg-cyan-900 cursor-pointer p-2 hover:bg-cyan-950 duration-75 mt-2 rounded-sm">
          Submit
        </button>
      </form>
    </>
  );
};
