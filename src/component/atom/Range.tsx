import {FC} from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

export type RangeProps = {
    min: number;
    max: number;
    start: number;
    end: number;
    onChange: (s: number, e: number) => void;
}

export const Range: FC<RangeProps> = ({min, max, start, end, onChange}) => {
    return (
        <Slider
            range
            value={[start, end]}
            min={min}
            max={max}
            step={100}
            trackStyle={[{background: '#ffc400', height: 8}]}   // 노란 영역
            handleStyle={[
                {width: 30, height: 30, borderColor: '#cfcfcf', transform: "translate(-25%, -25%)"},
                {width: 30, height: 30, borderColor: '#cfcfcf', transform: "translate(-50%, -25%)"},
            ]}
            railStyle={{background: '#e0e0e0', height: 8}}
            onChange={([low, high]) => onChange(low, high)}
        />
    );
};