import React from "react";
import "./LifeMembershipForm.css";
import avatar from "../Images/avatar-placeholder.png";
class LifeMemberShipForm extends React.Component {
  render() {
    return (
      <div class="Forms_first mr-5 ml-5">
        <div class="Forms_pic mb-1">
          <div className="form-row mt-4">
            <div className="col-md-2  no-gutters">
              <img src={avatar} alt="Avatar" className="Forms_avatar"></img>
            </div>
            <div className="col-md-6 offset-md-2 ">
              <p style={{ fontSize: "30px" }}>
                NIMA LIFE MEMBERSHIP APPLICATION FORM
              </p>
              <div className="row justify-content-center">
                4140 Parker Rd, Allentown, New Mexico 31134
              </div>
            </div>
          </div>
        </div>
        <form>
          <h4 className="Forms_title mb-4">Personal details</h4>
          <div class="form-row mb-3">
            <div class="col-sm-2">
              <input
                class="form-control"
                type="text"
                placeholder="First Name"
              ></input>
            </div>
            <div class="col-sm-2">
              <input
                class="form-control"
                type="text"
                placeholder="Middle Name"
              ></input>
            </div>
            <div class="col-sm-2">
              <input
                class="form-control"
                type="text"
                placeholder="Last Name"
              ></input>
            </div>
            <div class="col-sm-1">
              <select class="custom-select " id="inlineFormCustomSelectPref">
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Others</option>
              </select>
            </div>
            <div class="col-sm-1">
              <input
                class="form-control"
                type="text"
                placeholder="dd/mm/yyyy"
              ></input>
            </div>
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref">
                <option value="" disabled selected>
                  Blood Group
                </option>
                <option value="m">A+</option>
                <option value="f">A-</option>
                <option value="o">B+</option>
                <option value="m">B-</option>
                <option value="f">AB+</option>
                <option value="o">AB-</option>
                <option value="o">O+</option>
                <option value="o">O-</option>
              </select>
            </div>
            <div class="col-sm-2">
              <input
                class="form-control"
                type="text"
                placeholder="Alternate Number"
              ></input>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-6">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Residential Address"
                rows="3"
              ></textarea>
            </div>
            <div className="col-sm-3">
              <input
                class="form-control"
                type="text"
                placeholder="Alternate Number"
              ></input>
            </div>
          </div>

          <br />
          <h5>Qualification Details</h5>
          <br />
          <div class="form-row">
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Academic Qualification"
                name="Academic Qualification"
              ></input>
            </div>
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Examining Body"
                name="Examining Body"
              ></input>
            </div>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Year of Passing"
                name="Year of Passing"
              ></input>
            </div>
          </div>

          <br />
          <h5>Registration Details</h5>
          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Registration Number"
                name="Registration Number"
              ></input>
            </div>
            <div class="col-sm-2">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Date of Registration"
                name="Date of Registration"
              ></input>
            </div>
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Name of the Board/Council of Registration"
                name="Name of the Board"
              >
                {/* </input> */}
              </input>
            </div>
            <br />
          </div>
          <br />
          <h5>Professional Status</h5>
          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref">
                <option value="" disabled selected>
                  Practitioner
                </option>
                <option value="a">A</option>
                <option value="b">B</option>
              </select>
            </div>
            <div class="col-sm-2.5">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Hospital Attachment to"
                name="Hospital Attachment to"
              ></input>
            </div>
            <div class="col-sm-2.5">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="In what capacity"
                name="In what capacity"
              ></input>
            </div>
          </div>

          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref">
                <option value="" disabled selected>
                  Scientific Papers Published
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            <div class="col-sm-5">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Title of Paper"
                name="Title of Paper"
              ></input>
            </div>
            <button
              type="button"
              class="btn btn-link"
              style={{ color: "black" }}
            >
              + Add Another
            </button>
          </div>
          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref">
                <option value="" disabled selected>
                  NIMA Member Before ?
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref">
                <option value="" disabled selected>
                  Branch
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            <div class="col-sm-5">
              <textarea
                class="form-control"
                placeholder="Reason for Discontinue"
                rows="2"
                id="comment"
              ></textarea>
            </div>
          </div>

          <br />

          <div class="container">
            <div class="row">
              <div class="col text-center">
                <button class="button button1">View form</button>

                <button class="button button2">Submit form</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LifeMemberShipForm;
