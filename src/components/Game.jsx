import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import {
  Stars,
  Answer,
  SubmitButton,
  Numbers,
  DoneFrame,
} from 'Components';

import 'Styles/Game';

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

export class Game extends React.Component{
  static randomNumber = () => 1 + Math.floor(Math.random()*9);

  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null
  })

  state = Game.initialState()

  selectNumber = (selectedNumber) => {
    if(this.state.usedNumbers.indexOf(selectedNumber) >= 0 ){ return; }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
    }))
  }

  unSelectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number=> number !== clickedNumber)
    }))
  }

  checkCorrectAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, value) => acc + value, 0)
    }));
  }

  acceptAnswer = () => {
  	this.setState(prevState => ({
    	usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber(),
    }), this.updateDoneStatus);
};

  redraw = () => {
    if(this.redraws === 0) { return };
    this.setState(prevState => ({
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws -1
    }), this.updateDoneStatus)
  }

  possibleSolution = ({randomNumberOfStars, usedNumbers}) => {
    const possibleNumbers = _.range(1, 10).filter(num =>
      usedNumbers.indexOf(num) === -1
      )

      return possibleCombinationSum(possibleNumbers, randomNumberOfStars)
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if(prevState.usedNumbers.length === 9){
        return {
          doneStatus: "You won the game"
        }
      }

      if(prevState.redraws === 0 && ! this.possibleSolution(prevState)){
        return {
          doneStatus: "Game Over!"
        }
      }
    })
  }

  resetGame = () => {
    this.setState(Game.initialState())
  }

  render(){
    const {
      randomNumberOfStars,
      selectedNumbers,
      answerIsCorrect,
      usedNumbers,
      redraws,
      doneStatus,
    } = this.state;
    return(
      <div className="row">
      <Card className="game-card">
        <div className="game-name">
          <h1>Play Nine</h1>
        </div>
        <Grid container spacing={24}>
          <Stars randomNumberOfStars={randomNumberOfStars}/>
          <SubmitButton
            selectedNumbers={selectedNumbers}
            checkCorrectAnswer={this.checkCorrectAnswer}
            acceptAnswer={this.acceptAnswer}
            answerIsCorrect={answerIsCorrect}
            redraws={redraws}
            redraw={this.redraw}
          />
          <Answer
            selectedNumbers={selectedNumbers}
            unSelectNumber={this.unSelectNumber}
          />
        </Grid>
        </Card>
        <br/>
        <Card className="number-card">
        {
          doneStatus ? (
            <DoneFrame
              doneStatus={doneStatus}
              resetGame={this.resetGame}
            />
          ) : (
            <Numbers
          checkSelectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={usedNumbers}
        />
          )
        }
        </Card>
     </div>
    )
  }
}

