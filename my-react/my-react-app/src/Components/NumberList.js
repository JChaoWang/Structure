import React from 'react';
class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    };
  }
  render() {
    // const listItems = this.state.numbers.map((number) =>
    //   <li key={number.toString()}>{number}</li>
    // );
    // return <ul>
    //   {listItems}
    // </ul>;
    return <ul>
      {this.state.numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
      )}
    </ul>
  }
}
export default NumberList;
