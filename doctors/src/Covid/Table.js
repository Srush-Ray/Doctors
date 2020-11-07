import React, { Fragment } from "react";
import "./Table.css";
import { doctorDetails } from "./DoctorDetails";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorDetails: doctorDetails,
    };
  }
  render() {
    return (
      <div className="Table__Container">
        <div className="Table__header">
          <div className="row">
            <div className="col-md-6 col-sm-12 Table__headerCol">
              <div className="row Table__records">
                <div className="col-6 Table__totalRecords">
                  <p className="Table__totalRecordsText">Total Records</p>
                </div>
                <div className="col-6 Table__recordCount">
                  <p className="Table__recordCountText">424/ 10 states</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 Table_headerCol">
              <div className="Table__SelectMenu">
                <select name="Table__states" id="state">
                  <option value="" disabled selected>
                    Select State
                  </option>
                  <optgroup label="Maharashtra">
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Nagpur">Nagpur</option>
                  </optgroup>
                  <optgroup label="Gujarat">
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="Table__tableContainer">
          <table className="Table__table">
            <tr className="Table__tableHeadingRow">
              <th className="Table__tableComponents"></th>
              <th className="Table__tableComponents">State</th>
              <th className="Table__tableComponents">District</th>
              <th className="Table__tableComponents">Place</th>
              <th className="Table__tableComponents">Doctor name</th>
              <th className="Table__tableComponents">Contact</th>
              <th className="Table__tableComponents"></th>
            </tr>
            {this.state.doctorDetails.map((doctor, index) => (
              <tr className="Table__tableDataRow">
                <td className="Table__tableComponents srNo">{index + 1}</td>
                <td className="Table__tableComponents">{doctor.state}</td>
                <td className="Table__tableComponents">{doctor.district}</td>
                <td className="Table__tableComponents">{doctor.place}</td>
                <td className="Table__tableComponents">{doctor.name}</td>
                <td className="Table__tableComponents">{doctor.contact}</td>
                <td className="Table__tableComponents">
                  <div className="Table__aContainer">
                    <a className="Table__a" href="#">
                      Read More
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="Table__cards">
          {this.state.doctorDetails.map((doctor, index) => (
            <div className="Table__cardContainer">
              <p className="Table__cardNumber" style={{ marginBottom: "0" }}>
                {index + 1}
              </p>
              <div className="row Table__cardRow">
                <div className="col-6">State</div>
                <div className="col-6" style={{ color: "black" }}>
                  {doctor.state}
                </div>
              </div>
              <div className="row Table__cardRow">
                <div className="col-6">District</div>
                <div className="col-6" style={{ color: "black" }}>
                  {doctor.district}
                </div>
              </div>
              <div className="row Table__cardRow">
                <div className="col-6">Place</div>
                <div className="col-6" style={{ color: "black" }}>
                  {doctor.place}
                </div>
              </div>
              <div className="row Table__cardRow">
                <div className="col-6">Doctor name</div>
                <div className="col-6" style={{ color: "black" }}>
                  {doctor.name}
                </div>
              </div>
              <div className="row Table__cardRow">
                <div className="col-6">Contact</div>
                <div className="col-6" style={{ color: "black" }}>
                  {doctor.contact}
                </div>
              </div>
              <div className="row Table__cardRow">
                <div className="Table__aContainer">
                  <a className="Table__a" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
