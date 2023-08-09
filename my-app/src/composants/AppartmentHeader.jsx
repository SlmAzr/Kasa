import React from "react";
import "./AppartmentHeader.scss";

function AppartmentHeader(props) {
  const Appart = props.Appart;
  const { name } = Appart.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="appartment-header">
      <div className="appartment-title">
        <h1> {Appart.title}</h1>
        <h2> {Appart.location}</h2>
        <div className="appartment-tags">
          {Appart.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="appartment-owner">
        <div className="owner-details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="badge">
            <img src={Appart.host.picture} alt="" />
          </div>
        </div>
        <div className="appartment-stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={props.Appart.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppartmentHeader;
