import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      {console.log(listOfUser)}
      {listOfUser.map((data) => (
        <CardList listOfUser={data} />
      ))}
    </div>
  );
};

export default UserList;
