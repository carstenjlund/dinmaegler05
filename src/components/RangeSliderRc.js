import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";

const Range = Slider.createSliderWithTooltip(Slider.Range);

const RangeSliderRc = () => {
	const [lowValue, setLowValue] = useState(0);
	const [highValue, setHighValue] = useState(12000000);

	useEffect(() => {
		console.log("Low value:", lowValue);
		console.log("High value:", highValue);
	}, [lowValue, highValue]);

	return (
		<>
			<Range
				min={0}
				max={12000000}
				step={250000}
				allowCross={false}
				handleStyle={[
					{ borderColor: "#ff0000", boxShadow: "0 0 0 5px orange" },
					{ borderColor: "#ff0000" },
				]}
				trackStyle={[{ backgroundColor: "#ff0000" }]}
				railStyle={{ backgroundColor: "darkgray" }}
				draggableTrack={false}
				defaultValue={[lowValue, highValue]}
				onChange={(value) => {
					setLowValue(value[0]);
					setHighValue(value[1]);
				}}
			/>
		</>
	);
};

export default RangeSliderRc;
