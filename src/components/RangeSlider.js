import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Component } from "react";

class RangeSlider extends Component {
	constructor(props) {
		super(props);
		this.state = { value: { min: 0, max: 12000000 } };
	}
	render() {
		return (
			<InputRange
				step={250000}
				maxValue={12000000}
				minValue={0}
				value={this.state.value}
				onChange={(value) => this.setState({ value })}
			/>
		);
	}
}

export default RangeSlider;
