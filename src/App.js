import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore
  };

  // function for creating an array of friends from the JSON
  friendsList = this.state.friends.map(function (friends) {
    return friends.id;
  })

  // used to be called removeFriends
  shuffleFriends = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let newFriendsArr = this.state.friends
    .map(friend => [Math.random(), friend])
    .sort((friendOne, friendTwo) => friendOne[0] - friendTwo[0])
    .map(friend => friend[1]);
    console.log(newFriendsArr);
    this.setState({friends: newFriendsArr});
  };



  checkClicked = (id, clicked) => {

    if (clicked) {
      
    }
    let newFriends = this.state.friends;

    newFriends.forEach((friend, index) => {
      if (friend.id === id) {
        newFriends[index].clicked = true;
      }
    })
    this.setState({score: this.state.score++}); // increments score
    this.setState({ friends: newFriends });
    this.shuffleFriends();
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            checkClicked={this.checkClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          // occupation={friend.occupation}
          // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;
