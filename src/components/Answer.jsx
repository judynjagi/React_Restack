import React from "react";
import Grid from "@material-ui/core/Grid";
import "Styles/Numbers";

export const Answer = props => {
  const { selectedNumbers, unSelectNumber } = props;
  return (
    <Grid item xs={3}>
      {selectedNumbers.map((number, i) => (
        <span
          key={i}
          className="numbers"
          onClick={() => unSelectNumber(number)}
        >
          {number}
        </span>
      ))}
    </Grid>
  );
};
