import React from "react";
import "./Header.css";

import "primeicons/primeicons.css";

function Header() {
  return (
    <div className="headersection">
      <img
        style={{ width: "100px", height: "80px" }}
        src="https://media-exp1.licdn.com/dms/image/C510BAQHuSIsP8GsxQQ/company-logo_100_100/0/1580230230910?e=2147483647&v=beta&t=92liyUxin07otlrVlYs2g0HdQ4T4YED_shglDTv4BUo"
      ></img>
      <div className="titleandlogo">
        <h2>User Management</h2>
        <i
          className="pi pi-users ml-2"
          style={{
            fontSize: "2em",
            color: "#d90606",
            marginTop: "17px",
            marginLeft: "8px",
          }}
        ></i>
      </div>
    </div>
  );
}

export default Header;
