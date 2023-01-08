import React, { useState } from "react";
import Getalladmin from "./Getalladmin";
import AddandSearchscreen from "./AddandSearchscreen";

function Addandsearchadmin() {
  const [admin, setAdmin] = useState([]);
  const [newadmin, setnewadmin] = useState([]);
  const [filteradminid, setFilteradminid] = useState("");
  const [filterregion, setFilterregion] = useState("");
  const [filterempno, setFilterempno] = useState("");
  const filter = () => {
    const filteredvalue = admin.filter((admins) => {
      if (
        (admins.adminid === filteradminid || filteradminid === "") &&
        (admins.region === filterregion || filterregion === "") &&
        (admins.empno.toString() === filterempno || filterempno === "")
      ) {
        return true;
      } else {
        return false;
      }
    });
    setnewadmin(filteredvalue);
  };

  const searchobj = {
    setFilteradminid,

    setFilterregion,

    setFilterempno,
    filter,
  };
  const adminfilterneeds = {
    admin,
    setAdmin,
    newadmin,
    setnewadmin,
  };
  return (
    <div>
      <AddandSearchscreen obj={searchobj} />
      <Getalladmin searchresults={adminfilterneeds} />
    </div>
  );
}

export default Addandsearchadmin;
