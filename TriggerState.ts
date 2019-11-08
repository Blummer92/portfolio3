import { React }  from "react";
import Form from "../src/Form";


class triggerAddTripState extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true };
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    });
  }

  // class FirstComponent extends React.Component {
  //   state = {
  //     x: this.props.initialX,
  //     // You can even call functions and class methods:
  //     y: this.someMethod(this.props.initialY),
  //   };
  // }


const AddTripButton = props => () {
  return <Button onClick={this,props.addTrip}>Add a trip</Button>
}

render() {
  return (
    <div>
      {this.state.isEmptyState && <AddTripButton addTrip={this.triggerAddTripState(this.addTrip)} />}

      {this.state.isAddTripState && <Form />}
    </div>
  );
}


// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />

//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />

//       </fieldset>
//     );
//   }
// }