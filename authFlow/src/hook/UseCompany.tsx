import React from "react";
import axios from "axios";

const url: string = "http://localhost:4000/api";

const useCompany = () => {
  const [user, setUser] = React.useState<[]>([]);

  const getAll = async () => {
    await axios
      .get(`${url}/users`)
      .then((res) => {
        return setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getAll();
    console.log(user);
  }, []);
  return [user] as const;
};

export default useCompany;
