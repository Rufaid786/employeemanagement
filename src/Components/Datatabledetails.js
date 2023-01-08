import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { InputSwitch } from "primereact/inputswitch";
import { Column } from "primereact/column";

function Datatabledetails({
  details,
  headerid,
  headername,
  headerempnooragentcode,
  headerlanguage,
  headeremailid,
  headercontactno,
  headerroleorusertype,
  headerregionorprivilege,
  headerbranchoraddress,
  headercompanyname,
  update,
  del,
}) {
  const [colshow, setColshow] = useState(false);
  const idfield = (rowData) => {
    if (rowData.adminid) {
      setColshow(true);
    } else {
      setColshow(false);
    }
    return rowData.adminid || rowData.userId;
  };

  const name = (rowData) => {
    return (
      <span>
        {rowData.firstName} {rowData.middleName} {rowData.lastName}
        {rowData.firstname} {rowData.middlename} {rowData.lastname}
      </span>
    );
  };
  const email = (rowData) => {
    return rowData.emailid || rowData.emailId;
  };
  const contactnum = (rowData) => {
    return rowData.contactNum || rowData.contactno;
  };
  const roleorusertype = (rowData) => {
    return rowData.role || rowData.userType;
  };
  const empnooragentcode = (rowData) => {
    return rowData.empno || rowData.agentCode;
  };
  const regionorprivilege = (rowData) => {
    return rowData.region || rowData.privilege;
  };
  const branchoraddress = (rowData) => {
    return rowData.address || rowData.branch;
  };
  return (
    <div>
      <DataTable value={details} paginator key="adminid" rows={5} scrollable>
        <Column
          header={headerid}
          frozen
          style={{ width: "200px", zIndex: 2 }}
          field={idfield}
        />
        <Column
          header={headername}
          frozen
          style={{ width: "250px", zIndex: 2 }}
          field={name}
        />
        <Column
          header={headerempnooragentcode}
          style={{ width: "250px" }}
          field={empnooragentcode}
        />

        <Column
          header={headerlanguage}
          style={{ width: "200px" }}
          field="language"
        />
        <Column
          header={headeremailid}
          style={{ width: "200px" }}
          body={email}
        />
        <Column
          header={headerroleorusertype}
          style={{ width: "200px" }}
          field={roleorusertype}
        />
        <Column
          header={headerregionorprivilege}
          style={{ width: "200px" }}
          field={regionorprivilege}
        />
        <Column
          header={headerbranchoraddress}
          style={{ width: "200px" }}
          field={branchoraddress}
        />
        <Column
          hidden={colshow}
          header={headercompanyname}
          style={{ width: "200px" }}
          field={(rowData) => {
            return rowData.companyName;
          }}
        />
        <Column
          header={headercontactno}
          style={{ width: "200px" }}
          body={contactnum}
        />

        <Column
          style={{ width: "50px" }}
          header=""
          body={(rowData) => {
            return (
              <InputSwitch checked={rowData.activate} style={{ zIndex: 1 }} />
            );
          }}
        ></Column>
        <Column
          style={{ width: "50px" }}
          header=""
          body={(rowData) => {
            return (
              <>
                <i
                  className="pi pi-external-link mr-3 deleteupdate-icon"
                  onClick={() => update(rowData.adminid)}
                ></i>

                <i
                  className="pi pi-trash deleteupdate-icon"
                  onClick={() => {
                    del(rowData.adminid);
                  }}
                ></i>
              </>
            );
          }}
        ></Column>
      </DataTable>
    </div>
  );
}

export default Datatabledetails;
