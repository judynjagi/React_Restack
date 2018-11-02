import React from "react";
import Button from "@material-ui/core/Button";

import "Styles/DoneFrame";

export const DoneFrame = props => {
  const { resetGame } = props;
  return (
    <div className="container">
      <h2 className="gameStatus">{props.doneStatus}</h2>
      <Button variant="outlined" className="submit" onClick={resetGame}>
        Play Again
      </Button>
    </div>
  );
};
