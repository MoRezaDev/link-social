import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddUserButton from "../components/buttons/AddUserButton";
import UserCard from "../components/user/UserCard";
import useUser from "../hooks/useUser";

function User() {
  const { users: initialUsers } = useUser();
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const onDelete = (user) => {
    const filteredUsers = users.filter((us) => us.name !== user.name);
    toast.success(`User "${user.name}" deleted`, { duration: 1000 });
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    setUsers(filteredUsers);
  };
  return (
    <section className="flex items-center flex-col justify-center">
      {users?.map((user, idx) => (
        <UserCard key={idx} user={user} onDelete={onDelete} />
      ))}
      <AddUserButton />
    </section>
  );
}

export default User;
