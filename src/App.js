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
    highscore: 0
  };

  currentScore = 0;
  currentHighScore = 0;

  // function for creating an array of friends from the JSON
  friendsList = this.state.friends.map(function (friends) {
    return friends.id;
  })

  shuffleFriends = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let newFriendsArr = this.state.friends
      .map(friend => [Math.random(), friend])
      .sort((friendOne, friendTwo) => friendOne[0] - friendTwo[0])
      .map(friend => friend[1]);
    this.setState({ friends: newFriendsArr });
  };

  // checks high score and updates the state
  checkScores = () => {
    if (this.state.score >= this.state.highscore) {
      this.setState({ highscore: this.currentScore });
    }
    if (this.currentScore === 12) {
      // trigger a modal when dismissed will reset the high score
      this.currentScore = 0;
      this.setState({ score: this.currentScore });
      console.log('you win');
    }
  }

  checkClicked = (id, clicked) => {
    let newFriends = this.state.friends;

    if (clicked) {
      alert("this has been clicked");
      this.currentScore = 0;
      newFriends.forEach((friend, index) => {
        newFriends[index].clicked = false;
        this.setState({ score: this.currentScore });
      })
    }

    if (!clicked) {
      this.currentScore++;
      newFriends.forEach((friend, index) => {
        if (friend.id === id) {
          newFriends[index].clicked = true;
          this.setState({ score: this.currentScore });
        }
      })
      this.checkScores();
    }
    this.shuffleFriends();
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="jumbotron">
          <div className="container">
            <div className="flex-container">
              <span className="score">Score: {this.state.score}</span>
              <span className="highscore">High Score: {this.state.highscore}</span>
            </div>
            <Title>CW Heroes</Title>
          </div>
        </div>
        {this.state.friends.map(friend => (
          <FriendCard
            checkClicked={this.checkClicked}
            // onMouseEnter={}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;


