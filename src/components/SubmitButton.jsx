import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "Styles/SubmitButton";

export const SubmitButton = props => {
  const {
    selectedNumbers,
    answerIsCorrect,
    checkCorrectAnswer,
    acceptAnswer,
    redraws,
    redraw
  } = props;

  let button;
  switch (answerIsCorrect) {
    case true:
      button = (
        <Button variant="outlined" className="success" onClick={acceptAnswer}>
          <i className="material-icons">check</i>
        </Button>
      );
      break;
    case false:
      button = (
        <Button variant="outlined" className="failure">
          <i className="material-icons">close</i>
        </Button>
      );
      break;
    default:
      button = (
        <Button
          variant="outlined"
          className="default"
          disabled={selectedNumbers.length <= 0}
          onClick={checkCorrectAnswer}
        >
          =
        </Button>
      );
  }
  return (
    <Grid item xs={2}>
      {button}
      <br />
      <br />
      <Button
        variant="outlined"
        className="submitButton"
        onClick={redraw}
        disabled={redraws === 0}
      >
        <i className="material-icons refresh">refresh</i>
        {redraws}
      </Button>
    </Grid>
  );
};
