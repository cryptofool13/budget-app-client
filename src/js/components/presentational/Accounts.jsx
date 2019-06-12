import React from "react";

const Accounts = ({ accounts, renderRows }) => {
  return (
    <div className="accounts-table">
      <table>
        <thead>
          <tr>
            <th>account</th>
            <th>balance</th>
          </tr>
        </thead>
        <tbody>{renderRows(accounts)}</tbody>
      </table>
    </div>
  );
};

export default Accounts;
