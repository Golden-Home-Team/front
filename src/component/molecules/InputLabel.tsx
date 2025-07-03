import {Input} from "../atom/Input";
import type {InputProps} from "../atom/Input";
import {FC} from "react";
import {LabelWrap} from "../atom/LabelWrapProps";
import type {LabelWrapProps} from "../atom/LabelWrapProps";

export type InputLabelProps = InputProps & LabelWrapProps

export const InputLabel: FC<InputLabelProps> = ({label, bottomMessage, isShowBottomMessageSpace, ...rest}) => {
    return (
        <LabelWrap
            label={label}
            bottomMessage={bottomMessage}
            isShowBottomMessageSpace={isShowBottomMessageSpace ?? false}>
            <Input
                {...rest}
            />
        </LabelWrap>
    );
};