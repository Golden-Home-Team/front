import {FC} from "react";
import styled from "styled-components";

export type ChipSelectProps = {
    name: string;
    label: string;
    options: string[];
    onChange: (o: string) => void;
}
const ChipSelectStyle = styled.select`
    
`
const Option = styled.option`

`
export const ChipSelect: FC<ChipSelectProps> = ({options, label, onChange}) => {
    return (
        <ChipSelectStyle onChange={e => onChange(e.target.value)}>
            <Option disable>{label}</Option>
            {options.map(o => (
                <Option value={o}>{o}</Option>
            ))}
        </ChipSelectStyle>
    );
};