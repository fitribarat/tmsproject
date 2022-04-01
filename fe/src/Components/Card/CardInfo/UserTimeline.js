import React from "react";
import "./UserTimeline.css";

const UserTimeline = () => {
  return (
    // <div className="s">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div id="tracking">
            <div className="tracking-list">
              <div className="tracking-item">
                <div className="tracking-icon status-intransit">
                  <svg
                    className="svg-inline--fa fa-circle fa-w-16"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                    ></path>
                  </svg>
                </div>
                <div className="tracking-date">
                  Maret 10, 2022<span>05:01 PM</span>
                </div>
                <div className="tracking-content">
                  Add new task<span>Fitriyanti</span>
                </div>
              </div>
              <div className="tracking-item">
                <div className="tracking-icon status-intransit">
                  <svg
                    className="svg-inline--fa fa-circle fa-w-16"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                    ></path>
                  </svg>
                </div>
                <div className="tracking-date">
                  Maret 12, 2022<span>05:01 PM</span>
                </div>
                <div className="tracking-content">
                  Attached document<span>Fitriyanti</span>
                </div>
              </div>
              <div className="tracking-item">
                <div className="tracking-icon status-intransit">
                  <svg
                    className="svg-inline--fa fa-circle fa-w-16"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                    ></path>
                  </svg>
                </div>
                <div className="tracking-date">
                  Maret 20, 2022<span>05:01 PM</span>
                </div>
                <div className="tracking-content">
                  Solved task A<span>Fitriyanti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default UserTimeline;
