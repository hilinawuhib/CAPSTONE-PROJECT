import React from "react";
import { useState, useEffect } from "react";
const Myprofile = () => {
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      let res = await fetch("http://localhost:3007/users");
      if (res.ok) {
        let data = await res.json();
        setUser(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      {user.map((u) => (
        <div>
          <h4>
            {u.firstName} {u.lastName}
          </h4>
          <h4>
            {u.email} {u.role}
          </h4>
        </div>
      ))}
    </>
  );
};
export default Myprofile;
