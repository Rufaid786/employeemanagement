import React, { useEffect, useRef, useState } from "react";

import AdminService from "../Services/AdminService";

import { Dialog } from "primereact/dialog";
import "./Getalladmin.css";

import "primeicons/primeicons.css";

import { Button } from "primereact/button";
import Editadminform from "./Editadminform";
import Datatabledetails from "./Datatabledetails";
function Getalladmin({ searchresults }) {
  const [displaydelete, setDisplaydelete] = useState(false);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [editAdmin, setEditAdmin] = useState();
  const [deleteid, setDeleteid] = useState("");

  const onClick = (id) => {
    setEditAdmin(id);
    setDisplayBasic(true);
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
              deleteAdmin(id);
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
    getalladmin();
  }, []);

  const getalladmin = () => {
    AdminService.getalladmin()
      .then((success) => {
        searchresults.setnewadmin(success.data);
        searchresults.setAdmin(success.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const deleteAdmin = (adminid) => {
    console.log(adminid);
    AdminService.deleteadmin(adminid)
      .then((success) => {
        getalladmin();
        console.log(success);
      })
      .then((error) => {
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
        <Editadminform hide={onHide} aid={editAdmin} />
      </Dialog>
      {/* <i className="pi pi-arrow-circle-left" onClick={() => slide(-50)}></i>

      <i className="pi pi-arrow-circle-right" onClick={() => slide(+50)}></i> */}
      <Datatabledetails
        details={searchresults.newadmin}
        headerid={"Admin id"}
        headername={"Admin Name"}
        headerempnooragentcode={"Emp No"}
        headerlanguage={"Language"}
        headeremailid={"Email Id"}
        headerroleorusertype={"Role"}
        headercontactno={"Contact Number"}
        headerregionorprivilege={"Region"}
        headerbranchoraddress={"Branch"}
        update={onClick}
        del={onClickdelete}
      />
    </>
  );
}

export default Getalladmin;
