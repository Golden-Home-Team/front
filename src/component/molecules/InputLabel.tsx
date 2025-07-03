import {Input} from "../atom/Input";
import type {InputProps} from "../atom/Input";
import {FC} from "react";
import {LabelWrap} from "../atom/LabelWrapProps";
import {GoCheck} from "react-icons/go";

export type InputLabelProps = InputProps & { label: string }

export const InputLabel: FC<InputLabelProps> = ({label, ...rest}) => {
    return (
        <LabelWrap label={label}>
            <Input
                {...rest}
            />
        </LabelWrap>
    );
};