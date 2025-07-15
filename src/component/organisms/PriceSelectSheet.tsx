import {FC, useState} from "react";
import {NumberInput} from "../molecules/NumberInput";
import {Button} from "../atom/Button";
import {Space} from "../../style/Space";
import {Range} from "../atom/Range";
import styled from "styled-components";

export type PriceSelectSheetProps = {
    initialMinPrice?: number;
    initialMaxPrice?: number;
    onSelect: (minPrice: number, maxPrice: number) => void;
}
const PriceSelectSheetStyle = styled.div`

`
const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto;
  gap: 7px;
`
const Sim = styled.div`
  color: #666666;
  font-size: 14px;
  font-weight: 700;
  
  padding: 0 7px;
  
  display: flex;
  align-items: center;
`
export const PriceSelectSheet: FC<PriceSelectSheetProps> = ({initialMinPrice, initialMaxPrice, onSelect}) => {
    const [minValue, setMinValue] = useState(initialMinPrice ?? 0)
    const [maxValue, setMaxValue] = useState(initialMaxPrice ?? 5_720_000)

    return (
        <PriceSelectSheetStyle>
            <InputWrap>
                <NumberInput
                    value={minValue}
                    onChange={setMinValue}
                    placeholder={"10,000"}
                    min={0}
                    max={5_720_000}
                    borderRadius={"5px"}
                />
                <Sim>~</Sim>
                <NumberInput
                    value={maxValue}
                    onChange={setMaxValue}
                    placeholder={"10,000"}
                    min={0}
                    max={5_720_000}
                    borderRadius={"5px"}
                />
                <Button
                    onClick={() => onSelect(minValue, maxValue)}
                    color={"#666666"}
                    background={"#ffffff"}
                    borderColor={"#cfcfcf"}
                    borderRadius={"5px"}
                >적용</Button>
            </InputWrap>
            <Space v={16}/>
            <Range
                min={0}
                max={5_720_000}
                start={minValue}
                end={maxValue}
                onChange={(s: number, e: number) => {
                    setMinValue(s);
                    setMaxValue(e)
                }}
            />
        </PriceSelectSheetStyle>
    );
};