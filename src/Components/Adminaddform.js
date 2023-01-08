import React, { useState } from "react";

import "primeicons/primeicons.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import AdminService from "../Services/AdminService";
import "./Adminaddform.css";
function Adminaddform({ hide }) {
  const [adminid, setAdminid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [empno, setEmpno] = useState("");
  const [language, setLanguage] = useState("");
  const [emailid, setEmailid] = useState("");
  const [role, setRole] = useState("");
  const [region, setRegion] = useState("");
  const [branch, setBranch] = useState("");
  const [contactno, setcontactno] = useState("");
  const [activate, setActivate] = useState(false);
  const roles = ["BranchAdmin", "RegionAdmin", "HQAdmin"];
  const languages = ["Japanese", "Korean", "English", "Hindi"];
  const branches = [
    "ibs-15",
    "ibs-13,ibs-15",
    "ibs-15,ibs-16",
    "ibs-13,ibs-12,ibs-15",
    "ibs-15,ibs-14",
    "ibs-15,ibs-16",
    "ibs-13,ibs-14",
  ];
  const regions = ["America", "Korea", "Japan"];

  const addAdmin = (e) => {
    const admin = {
      adminid,
      firstname,
      middlename,
      lastname,
      empno,
      language,
      emailid,
      role,
      region,
      branch,
      contactno,
      activate,
    };
    AdminService.createadmin(admin)
      .then((success) => {
        console.log(success.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const [idspan, setIdspan] = useState("");
  const [firstnamespan, setFirstnamespan] = useState("");
  const [lastnamespan, setLastnamespan] = useState("");
  const [empnospan, setEmpnospan] = useState("");
  const [languagespan, setLanguagespan] = useState("");
  const [emailspan, setEmailspan] = useState("");
  const [rolespan, setRolespan] = useState("");
  const [regionspan, setRegionspan] = useState("");
  const [branchspan, setBranchspan] = useState("");
  const [contactspan, setContactspan] = useState("");
  const validationcheck = (e) => {
    adminid === "" ? setIdspan("This field is required") : setIdspan(" ");

    firstname === ""
      ? setFirstnamespan("This field is Required")
      : setFirstnamespan("");
    lastname === ""
      ? setLastnamespan("This field is Required")
      : setLastnamespan(" ");
    empno.toString() === ""
      ? setEmpnospan("This field is Required")
      : setEmpnospan("");
    language === ""
      ? setLanguagespan("This field is Required")
      : setLanguagespan("");
    emailid === "" ? setEmailspan("This field is Required") : setEmailspan("");
    role === "" ? setRolespan("This field is Required") : setRolespan("");
    region === "" ? setRegionspan("This field is Required") : setRegionspan("");
    branch === "" ? setBranchspan("This field is Required") : setBranchspan("");
    contactno.toString() === ""
      ? setContactspan("This field is Required")
      : contactno.length < 10
      ? setContactspan(
          <label style={{ fontSize: "15px" }}>
            Contact Number should consists of atleast 10 Characters
          </label>
        )
      : setContactspan("");
    if (
      adminid !== "" &&
      firstname !== "" &&
      lastname !== "" &&
      empno !== "" &&
      language !== "" &&
      emailid !== "" &&
      role !== "" &&
      region !== "" &&
      branch !== "" &&
      contactno.length >= 10
    ) {
      addAdmin(e);
      window.location.reload();
    }
  };
  return (
    <div class="card m-5 addform" style={{ background: "white", opacity: 1 }}>
      <div class="formgrid grid mt-2">
        <div class="field col-12 md:col-3">
          <label for="firstname2">
            Admin ID <span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            id="firstname2"
            type="text"
            value={adminid}
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setAdminid(e.target.value)}
          />
          <span style={{ color: "red" }}>{idspan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            FirstName<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            id="lastname2"
            value={firstname}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <span style={{ color: "red" }}>{firstnamespan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">MiddleName</label>
          <input
            id="lastname2"
            type="text"
            value={middlename}
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setMiddlename(e.target.value)}
          />
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            LastName<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            id="lastname2"
            value={lastname}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setLastname(e.target.value)}
          />
          <span style={{ color: "red" }}>{lastnamespan}</span>
        </div>
      </div>

      <div class="formgrid grid">
        <div class="field col-12 md:col-3">
          <label for="firstname2">
            Employee Number<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            value={empno}
            id="firstname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setEmpno(e.target.value)}
          />
          <span style={{ color: "red" }}>{empnospan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            Language<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <Dropdown
            style={{ width: "100%", height: "37px" }}
            id="lastname2"
            value={language}
            options={languages}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <span style={{ color: "red" }}>{languagespan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            Email Id<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            value={emailid}
            id="lastname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setEmailid(e.target.value)}
          />
          <span style={{ color: "red" }}>{emailspan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            Role<span style={{ color: "#ff0000" }}>*</span>
          </label>

          <Dropdown
            style={{ width: "100%", height: "37px" }}
            id="lastname2"
            value={role}
            options={roles}
            onChange={(e) => setRole(e.target.value)}
          />
          <span style={{ color: "red" }}>{rolespan}</span>
        </div>
      </div>

      <div class="formgrid grid">
        <div class="field col-12 md:col-3">
          <label for="firstname2">
            Region<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <Dropdown
            style={{ width: "100%", height: "37px" }}
            id="lastname2"
            value={region}
            options={regions}
            onChange={(e) => setRegion(e.target.value)}
          />
          <span style={{ color: "red" }}>{regionspan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            Branch<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <Dropdown
            style={{ width: "100%", height: "37px" }}
            id="lastname2"
            value={branch}
            options={branches}
            onChange={(e) => setBranch(e.target.value)}
          />
          <span style={{ color: "red" }}>{branchspan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            Contact Number<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            value={contactno}
            id="lastname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setcontactno(e.target.value)}
          />
          <span style={{ color: "red" }}>{contactspan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <div className="mt-5">
            <div className="field-checkbox">
              <Checkbox
                onChange={() => setActivate(!activate)}
                checked={activate}
              />
              <label>Activate</label>
            </div>
            <div className="mt-3">
              <Button
                label="Add Admin"
                className="p-button-sm mr-3 "
                onClick={(e) => {
                  validationcheck(e);
                }}
              />

              <Button
                label="Cancel"
                className="p-button-sm p-button-outlined"
                onClick={() => hide("displayBasic")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminaddform;
