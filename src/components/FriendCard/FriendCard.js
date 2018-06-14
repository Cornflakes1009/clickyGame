import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="hvr-grow" onClick={() => props.checkClicked(props.id, props.clicked)} className="card remove text-center">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <h2 className="">{props.name}</h2>
    </div>
  </div>
);

export default FriendCard;
