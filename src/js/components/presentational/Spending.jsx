import React from "react";

const Spending = ({ expenses, renderRows }) => {
  return (
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>cost</th>
          </tr>
        </thead>
        <tbody>{renderRows(expenses)}</tbody>
      </table>
    </div>
  );
};

export default Spending;
