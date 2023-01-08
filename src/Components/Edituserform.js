import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import UserService from "../Services/UserService";
function Edituserform({ hide, uid }) {
  const [userId, setuserId] = useState("");
  const [firstName, setFirstname] = useState("");
  const [middleName, setMiddlename] = useState("");
  const [lastName, setLastname] = useState("");
  const [language, setLanguage] = useState("");
  const [emailId, setEmailid] = useState("");
  const [userType, setUsertype] = useState("");
  const [privilege, setPrivilege] = useState("");
  const [agentCode, setAgentcode] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [address, setAddress] = useState("");
  const [contactNum, setcontactno] = useState("");
  const [activate, setActivate] = useState(false);
  const languages = ["Japanese", "Korean", "English", "Hindi"];
  const usertypes = ["Agent 1", "Agent 2", "Agent 3", "Agent 4"];
  const privileges = ["Supervisor 1", "Supervisor 2", "Supervisor 3"];
  useEffect(() => {
    UserService.gatuserbyid(uid)
      .then((success) => {
        setuserId(success.data.userId);
        setFirstname(success.data.firstName);
        setMiddlename(success.data.middleName);
        setLastname(success.data.lastName);
        setLanguage(success.data.language);
        setEmailid(success.data.emailId);
        setUsertype(success.data.userType);
        setPrivilege(success.data.privilege);
        setAgentcode(success.data.agentCode);
        setCompanyname(success.data.companyName);
        setAddress(success.data.address);
        setcontactno(success.data.contactNum);
        setActivate(success.data.activate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateUser = (e) => {
    const user = {
      userId,
      firstName,
      middleName,
      lastName,
      language,
      emailId,
      userType,
      privilege,
      agentCode,
      companyName,
      address,
      contactNum,
      activate,
    };
    UserService.updateuser(uid, user)
      .then((success) => {
        console.log(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [idspan, setIdspan] = useState("");
  const [firstnamespan, setFirstnamespan] = useState("");
  const [lastnamespan, setLastnamespan] = useState("");
  const [languagespan, setLanguagespan] = useState("");
  const [emailspan, setEmailspan] = useState("");
  const [usertypespan, setUsertypespan] = useState("");
  const [agentcodespan, setAgentcodespan] = useState("");
  const [contactnumberspan, setContactnumberspan] = useState("");
  const validate = (e) => {
    userId === "" ? setIdspan("This field is Required") : setIdspan("");
    firstName === ""
      ? setFirstnamespan("This field is Required")
      : setFirstnamespan("");
    lastName === ""
      ? setLastnamespan("This field is Required")
      : setLastnamespan("");
    language === ""
      ? setLanguagespan("This field is Required")
      : setLanguagespan("");
    emailId === "" ? setEmailspan("This field is Required") : setEmailspan("");
    userType === ""
      ? setUsertypespan("This field is Required")
      : setUsertypespan("");
    agentCode === ""
      ? setAgentcodespan("This field is Required")
      : setAgentcodespan("");
    contactNum === ""
      ? setContactnumberspan("This field is required")
      : contactNum.length < 10
      ? setContactnumberspan(
          <label style={{ fontSize: "15px" }}>
            Contact Number should consists of atleast 10 Characters
          </label>
        )
      : setContactnumberspan("");
    if (
      firstName !== "" &&
      lastName !== "" &&
      language !== "" &&
      userType !== "" &&
      agentCode !== "" &&
      contactNum.toString().length >= 10
    ) {
      updateUser(e);
      window.location.reload();
    } else {
      console.log("error");
    }
  };
  return (
    <div class="card m-5">
      <div class="formgrid grid mt-2">
        <div class="field col-12 md:col-3">
          <label for="firstname2">
            User ID<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            readOnly
            id="firstname2"
            type="text"
            value={userId}
            class="disable-icon text-base text-color  p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setuserId(e.target.value)}
          />
          <span style={{ color: "red" }}>{idspan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            FirstName<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            id="lastname2"
            value={firstName}
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
            value={middleName}
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
            value={lastName}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setLastname(e.target.value)}
          />
          <span style={{ color: "red" }}>{lastnamespan}</span>
        </div>
      </div>

      <div class="formgrid grid">
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
            readOnly
            value={emailId}
            id="lastname2"
            type="text"
            class="disable-icon text-base text-color  p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setEmailid(e.target.value)}
          />
          <span style={{ color: "red" }}>{emailspan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            User Type<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <Dropdown
            style={{ width: "100%", height: "37px" }}
            id="lastname2"
            value={userType}
            options={usertypes}
            onChange={(e) => setUsertype(e.target.value)}
          />
          <span style={{ color: "red" }}>{usertypespan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">Privilege</label>
          <Dropdown
            style={{ width: "100%", height: "37px" }}
            id="lastname2"
            value={privilege}
            options={privileges}
            onChange={(e) => setPrivilege(e.target.value)}
          />
        </div>
      </div>

      <div class="formgrid grid">
        <div class="field col-12 md:col-3">
          <label for="firstname2">
            Agent Code<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            value={agentCode}
            id="firstname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setAgentcode(e.target.value)}
          />
          <span style={{ color: "red" }}>{agentcodespan}</span>
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">Company Name</label>
          <input
            value={companyName}
            id="lastname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setCompanyname(e.target.value)}
          />
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">Address</label>
          <input
            value={address}
            id="lastname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div class="field col-12 md:col-3">
          <label for="lastname2">
            Contact Number<span style={{ color: "#ff0000" }}>*</span>
          </label>
          <input
            value={contactNum}
            id="lastname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            onChange={(e) => setcontactno(e.target.value)}
          />
          <span style={{ color: "red" }}>{contactnumberspan}</span>
        </div>
      </div>
      <div class="formgrid grid">
        <div class="field col-12 md:col-3">
          <div className="field-checkbox">
            <Checkbox
              onChange={() => setActivate(!activate)}
              checked={activate}
            />
            <label>Activate</label>
          </div>
        </div>
      </div>
      <div class="formgrid grid">
        <div class="field md:col-offset-9 col-12 md:col-4">
          <Button
            label="Update User"
            className="p-button-sm mr-3"
            onClick={(e) => {
              validate(e);
            }}
          />
          <Button
            label="Cancel"
            className="p-button-sm p-button-outlined"
            onClick={() => {
              hide("displayBasic");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Edituserform;
