import React from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import "Styles/Stars"

export const Stars = (props) => {
    const { randomNumberOfStars } = props;
    return(
      <Grid item xs={4}>
        {_.range(randomNumberOfStars).map((star, i) => (
          <i key={i} className="material-icons">star_border</i>
        ))}
      </Grid>
    )
}
