import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => props.checkClicked(props.id, props.clicked)} className="card remove text-center">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <h2 className="">{props.name}</h2>
      {/* <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul> */}
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default FriendCard;
