import React from "react";

export const EmployeeCard = ({ id, name, surname, email }) => {
  return (
    <div
      key={id}
      className="bg-cyan-50 rounded-xl shadow-md px-4 py-2 border border-cyan-100 hover:shadow-lg transition duration-200"
    >
      <h3 className="text-xl font-bold text-cyan-800">
        {name} {surname}
      </h3>
      <p className="text-gray-700">📧 {email}</p>
    </div>
  );
};
