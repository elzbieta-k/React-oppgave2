import styles from "./Users.module.css";
import { useState } from "react";

export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  const [newUser, setNewUser] = useState({});

  const getNewUser = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const addUser = () => {
    if (newUser.username && newUser.email) {
      setUsers((prev) => [...prev, newUser]);
    } else {
      alert("Please fill in all the fields!");
    }
    setNewUser({});
  };
  return (
    <div className={styles.usersContainer}>
      <h2>Users:</h2>
      {users.map((user, i) => {
        return (
          <div key={i}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
      <h3>Add new user:</h3>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Name..."
          name="username"
          onChange={getNewUser}
          value={newUser.username || ""}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Email..."
          name="email"
          onChange={getNewUser}
          value={newUser.email || ""}
          className={styles.inputField}
        />
        <button className={styles.addBtn} onClick={addUser}>
          Add
        </button>
      </div>
    </div>
  );
}
