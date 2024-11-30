import React from "react";

const Setting = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* First from Container */}
        <div className="col-lg-8 mb-3">
          <div className="card h-100 border rounded-lg">
            <div className="bg-light mx-2 mt-2 rounded">
              <div className="rounded hp-div justify-content-left py-2 w-75 my-3 mx-3 d-flex flex-column flex-md-row">
                <button
                  type="button"
                  className="btn btn-light mx-3 mb-2 mb-md-0"
                >
                  Application
                </button>
                <button className="btn btn-light mx-4 mb-2 mb-md-0">
                  Hiring Pipeline
                </button>
                <button className="btn btn-light mx-1 mb-2 mb-md-0">
                  Score Card
                </button>
              </div>
            </div>
            <div className="card-body mt-3 bg-light">
              <div className="bg-light py-2 text-white rounded d-flex flex-column flex-md-row justify-content-between align-items-center px-3">
                <h5 className="font-weight-bold text-dark mb-2 mb-md-0">
                  Customize your application form
                </h5>
                <div className="d-flex flex-column flex-md-row">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mb-2 mb-md-0 mx-md-1"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary mb-2 mb-md-0 mx-md-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary mx-md-1"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="mt-3 mx-3 border border-secondary p-3">
                <form className="justify-content-between">
                  <div className="form-row d-flex">
                    <div className="form-group flex-grow-1 col-md-6">
                      <label>Full Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your full name"
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div
                      className="form-group col-md-6"
                      style={{ marginLeft: "10px" }}
                    >
                      <label>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-2 col-md-6">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your phone number"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label>Portfolio:</label>
                    <textarea
                      className="form-control"
                      placeholder="Drag and drop"
                      disabled
                      style={{ width: "85%" }}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <h5>Gender</h5>
                    <div className="form-row d-flex">
                      <div className="form-check me-1 col-md-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="femaleCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="femaleCheck"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check col-md-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="maleCheck"
                        />
                        <label className="form-check-label" htmlFor="maleCheck">
                          Male
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row mt-3 d-flex">
                    <div className="form-group flex-grow-1 col-md-6">
                      <label>Zip Code:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your zip code"
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Country:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select country"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label>Address:</label>
                    <input
                      type="text"
                      placeholder="Your address"
                      style={{ width: "70%" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Second from Container */}
        <div className="col-lg-4 mb-3">
          <div className="card h-100 border rounded-lg">
            <div className="d-flex rounded bg-light justify-content-left py-3 mt-2 mx-3">
              <div className="mx-3 py-2 text-center text-dark rounded">
                <h5 className="font-weight-bold mb-0">Configure</h5>
              </div>
            </div>
            <div className="card-body mt-3 bg-light">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Add Group Field"
                />
              </div>
              <div className="border py-3 mx-3">
                <h5>Drag and drop fields</h5>
                <div className="d-flex mx-3 my-3 flex-wrap">
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      T Paragraph
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Form Field
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Text Area
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Radio Button
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Checkbox
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Date Picker
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Dropdown
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Attachment
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Hyperlink
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      List Item
                    </button>
                  </div>
                </div>
                <h5 className="mt-4">Suggested Fields</h5>
                <div className="d-flex mx-3 my-3 flex-wrap">
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      T Paragraph
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Form Field
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Text Area
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Radio Button
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Checkbox
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Date Picker
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Dropdown
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Attachment
                    </button>
                  </div>
                  <div className="d-flex me-3 mb-2 w-100">
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      Hyperlink
                    </button>
                    <button className="btn btn-outline-secondary m-1 flex-grow-1">
                      List Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
