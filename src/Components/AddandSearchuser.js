import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import "./Getalladmin.css";
import { Button } from "primereact/button";
import Useraddform from "./Useraddform";
import { Dialog } from "primereact/dialog";
function AddandSearchuser({
  userId,
  setUserId,
  privilege,
  setPrivilege,
  agentCode,
  setAgentCode,
  search,
}) {
  const [displayBasic, setDisplayBasic] = useState(false);

  const onClick = () => {
    setDisplayBasic(true);
  };
  const onHide = () => {
    setDisplayBasic(false);
  };

  return (
    <div class="card">
      <div class="formgrid grid">
        <div class="field col-12 md:col-2">
          <label for="firstname2">Agent Id</label>
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          />
        </div>
        <div class="field col-12 md:col-2">
          <label for="lastname2">privilege</label>
          <input
            value={privilege}
            onChange={(e) => setPrivilege(e.target.value)}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          />
        </div>
        <div class="field col-12 md:col-2">
          <label for="lastname2">Agent code</label>
          <input
            value={agentCode}
            onChange={(e) => setAgentCode(e.target.value)}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          />
        </div>
        <div class="field col-12 md:col-2">
          <Button
            label="Search"
            className="p-button-sm mt-4"
            onClick={search}
          ></Button>
        </div>

        <div class="field col-12 md:col-offset-2 md:col-2 mt-3">
          <Button
            label="Add Agent User"
            icon="pi pi-plus"
            className="p-button-outlined addbutton"
            onClick={() => onClick()}
          />
          <Dialog
            header="Add User"
            visible={displayBasic}
            style={{ width: "75vw" }}
            onHide={() => onHide()}
            headerStyle={{
              background: "#f9f9f9",
              borderBottom: "2px  solid rgba(223, 221, 221,1)",
            }}
          >
            <Useraddform hide={onHide} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default AddandSearchuser;
