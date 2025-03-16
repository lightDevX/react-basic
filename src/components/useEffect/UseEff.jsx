import { useEffect, useState } from "react";

const UseEff = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto space-y-3">
      {users.map((user) => (
        <li key={user.id} className="list-none text-red-300">
          {user.name}
        </li>
      ))}
    </div>
  );
};

export default UseEff;
