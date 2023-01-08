import React, { useState } from "react";
import AddandSearchuser from "./AddandSearchuser";
import Getallusers from "./Getallusers";

function Searchandgetall() {
  const [userId, setUserId] = useState("");
  const [privilege, setPrivilege] = useState("");
  const [agentCode, setAgentCode] = useState("");
  const [user, setUser] = useState([]);
  const [constantuservalues, setConstantuservalues] = useState([]);
  const filter = (e) => {
    console.log(userId, privilege, agentCode);
    const filteroutput = constantuservalues.filter((users) => {
      if (
        (users.userId === userId || userId === "") &&
        (users.privilege === privilege || privilege === "") &&
        (users.agentCode.toString() === agentCode || agentCode === "")
      ) {
        return true;
      } else {
        return false;
      }
    });
    setUser(filteroutput);
  };

  return (
    <div>
      <AddandSearchuser
        userId={userId}
        setUserId={setUserId}
        privilege={privilege}
        setPrivilege={setPrivilege}
        agentCode={agentCode}
        setAgentCode={setAgentCode}
        search={filter}
      />
      <Getallusers
        user={user}
        setuser={setUser}
        constantuservalues={constantuservalues}
        setConstantuservalues={setConstantuservalues}
      />
    </div>
  );
}

export default Searchandgetall;
