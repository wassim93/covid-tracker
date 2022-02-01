import numeral from "numeral";
import React from "react";
import "./table.css";

const Table = ({ data }) => {
  //console.log(data);
  return (
    <div className="table">
      <table>
        <tbody>
          {data.map(({ country, cases, countryInfo }) => (
            <tr key={`${countryInfo._id}_${country}`}>
              <td>{country}</td>
              <td>
                <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
