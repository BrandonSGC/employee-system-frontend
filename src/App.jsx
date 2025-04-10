import { useEffect, useState } from "react";
import { getEmployees } from "./helpers";
import { EmployeeCard, EmployeeForm } from "./components";

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    setEmployees(await getEmployees());
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container max-w-[90%] mx-auto">
      <h1 className="text-3xl text-center mt-10">Employee System</h1>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <EmployeeForm fetchEmployees={fetchEmployees} />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
          {employees.length === 0 ? (
            <p className="text-gray-500">No employees yet.</p>
          ) : (
            <div className="grid gap-4">
              {employees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  surname={employee.surname}
                  email={employee.email}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
