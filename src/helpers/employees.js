const apiUrl = import.meta.env.VITE_API_URL;

export const getEmployees = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export const createEmployee = async (employee) => {
  console.log(apiUrl);
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  return data;
};
