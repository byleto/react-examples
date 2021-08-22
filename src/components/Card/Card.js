import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div
      className={
        "discovery-card col mb-4 scrollable-discovery-card-spacing"
      }
      role={"group"}
      aria-label={props.name}
    >
      <a
        className={"discovery-card-link bg-white text-black"}
        href={"/course/programming-for-the-web-with-javascript"}
      >
        <div className={"d-flex flex-column d-card-wrapper"}>
          <div className={"d-card-hero"}>
            <img
              src={
                props.image
              }
              alt={""}
              className={"d-card-hero-image"}
            />
          </div>
          <div className={"partner-logo-wrapper"}>
            <img
              src={
                props.partnerLogo
              }
              className={"partner-logo"}
              alt={"University of Pennsylvania"}
            />
          </div>
          <div className={"pl-4 pt-4 mt-2"}>
            <h3 className={"h4 text-black"}>
              <span width={"230"}></span>
              <span>{props.name}</span>
            </h3>
            <div className={"text-gray-700 small provider"}>
              <span width={"220"}>
                  <span>{props.partnerName}</span>
              </span>
            </div>
          </div>
          <div
            className={
              "d-card-footer x-small ml-4 x-small d-flex flex-column mb-4"
            }
          >
            <div className="d-flex flex-column">
              <span className="program-badge d-flex justify-content-center align-items-center text-primary-500 mb-2 badge badge-light">
                <span className="pgn__icon badge-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    focusable="false"
                    aria-label=""
                    aria-hidden="true"
                  >
                    <path
                      d="M14.263 3H4v11.842h1.466V4.48h8.797V3z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M19 6.158H7.158v15H19v-15zm-10.362 1.5h3.7v6l-1.85-1.125-1.85 1.125v-6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>
                  MicroBachelors<sup className="superscript">®</sup> Program
                </span>
              </span>
              <span> 4 Courses</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
