import React from "react";
import Card from "@material-ui/core/Card";
import _ from "lodash";
import "Styles/Numbers";

export class Numbers extends React.Component {
  numbersClassName = number => {
    const { usedNumbers, checkSelectedNumbers } = this.props;
    if (checkSelectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
    if (usedNumbers.indexOf(number) >= 0) {
      return "used";
    }
    return "numbers";
  };

  render() {
    const { selectNumber } = this.props;
    return (
      <Card className="card">
        {Numbers.list.map((num, i) => (
          <span
            key={i}
            className={this.numbersClassName(num)}
            onClick={() => selectNumber(num)}
          >
            {num}
          </span>
        ))}
      </Card>
    );
  }
}

Numbers.list = _.range(1, 10);
