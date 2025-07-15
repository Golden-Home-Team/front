import {Input, InputProps} from "../atom/Input";
import {FC} from "react";
import {commaizeNumber, decommaizeNumber} from "@toss/utils";

export type NumberInputProps = {
    value: number;
    onChange: (v: number) => void;
} & Omit<InputProps, "value" | "onChange">

export const NumberInput: FC<NumberInputProps> = ({value, onChange, ...rest}) => {
    const onInput = (v: string) => {
        onChange(decommaizeNumber(v))
    }
    return (
        <Input value={commaizeNumber(value)} onChange={onInput} {...rest}/>
    );
};