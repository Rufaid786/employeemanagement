import React, { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Getalladmin.css";
import { InputSwitch } from "primereact/inputswitch";
import "primeicons/primeicons.css";
import { Dialog } from "primereact/dialog";
import "./Getalladmin.css";
import UserService from "../Services/UserService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import Edituserform from "./Edituserform";
import Datatabledetails from "./Datatabledetails";
function Getallusers({
  user,
  setuser,
  setConstantuservalues,
  constantuservalues,
}) {
  const [deleteid, setDeleteid] = useState("");
  const [displaydelete, setDisplaydelete] = useState(false);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [edituser, setEdituser] = useState();
  const onClick = (id) => {
    setDisplayBasic(true);
    setEdituser(id);
  };
  const onHide = () => {
    setDisplayBasic(false);
  };
  const onClickdelete = (id) => {
    setDeleteid(id);
    setDisplaydelete(true);
  };
  const onHidedelete = () => {
    setDisplaydelete(false);
  };
  const renderFooter = (id) => {
    return (
      <center>
        <div>
          <Button
            className="mt-3"
            label="Yes"
            onClick={() => {
              deleteUser(id);
              onHidedelete();
            }}
          />
          <Button
            label="Cancel"
            onClick={onHidedelete}
            className="p-button-outlined mt-3"
          />
        </div>
      </center>
    );
  };
  useEffect(() => {
    getallusers();
  }, []);

  const getallusers = () => {
    UserService.getalluser()
      .then((success) => {
        setuser(success.data);
        setConstantuservalues(success.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const deleteUser = (userId) => {
    UserService.deleteuser(userId)
      .then((success) => {
        getallusers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Dialog
        visible={displaydelete}
        style={{ width: "40vw" }}
        onHide={() => onHidedelete()}
        headerStyle={{
          textAlign: "center",
        }}
        footer={renderFooter(deleteid)}
      >
        <center>
          <p>Do you want to delete {deleteid} ?</p>
        </center>
      </Dialog>
      <Dialog
        header="Edit"
        visible={displayBasic}
        style={{ width: "75vw" }}
        onHide={() => onHide()}
        headerStyle={{
          background: "#f9f9f9",
          borderBottom: "2px  solid rgba(223, 221, 221,1)",
        }}
      >
        <Edituserform hide={onHide} uid={edituser} />
      </Dialog>
      <Datatabledetails
        details={user}
        idfield={user.userId}
        headerid={"User Id"}
        headername={"User Name"}
        headerempnooragentcode={"Agent Code"}
        headerlanguage={"Language"}
        headeremailid={"Email Id"}
        headercontactno={"Contact Number"}
        headerroleorusertype={"User Type"}
        headerregionorprivilege={"Privilege"}
        headerbranchoraddress={"Address"}
        headercompanyname={"Company Name"}
        update={onClick}
        del={onClickdelete}
      />
    </>
  );
}

export default Getallusers;
