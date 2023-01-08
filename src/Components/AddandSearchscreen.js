import React, { useState } from "react";
import "./Getalladmin.css";
import "./Addandsearchscreen.css";

import Adminaddform from "./Adminaddform";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

function AddandSearchscreen({ obj }) {
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
          <label for="firstname2">Admin Id</label>
          <input
            onChange={(e) => obj.setFilteradminid(e.target.value)}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          />
        </div>
        <div class="field col-12 md:col-2">
          <label for="lastname2">Region</label>
          <input
            value={obj.region}
            onChange={(e) => obj.setFilterregion(e.target.value)}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          />
        </div>
        <div class="field col-12 md:col-2">
          <label for="lastname2">Emp No</label>
          <input
            value={obj.empno}
            onChange={(e) => obj.setFilterempno(e.target.value)}
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          />
        </div>
        <div class="field col-12 md:col-2">
          <Button
            label="Search"
            className="p-button-sm mt-4"
            onClick={obj.filter}
          ></Button>
        </div>

        <div class="field col-12 md:col-2 md:col-offset-2 mt-3">
          <Button
            label="Add Admin"
            icon="pi pi-plus"
            className="p-button-outlined addbutton"
            onClick={() => onClick()}
          />
          <Dialog
            header="Add admin"
            visible={displayBasic}
            style={{ width: "75vw" }}
            onHide={() => onHide()}
            headerStyle={{
              background: "#f9f9f9",
              borderBottom: "2px  solid rgba(223, 221, 221,1)",
            }}
          >
            <Adminaddform hide={onHide} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default AddandSearchscreen;
