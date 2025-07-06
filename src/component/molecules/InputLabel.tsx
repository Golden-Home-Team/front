import {Input} from "../atom/Input";
import type {InputProps} from "../atom/Input";
import {FC} from "react";
import type {LabelWrapProps} from "../atom/LabelWrap";
import {LabelWrap} from "../atom/LabelWrap";

export type InputLabelProps = InputProps & LabelWrapProps

export const InputLabel: FC<InputLabelProps> = ({label, bottomMessage, isShowBottomMessageSpace, isFullWidth, ...rest}) => {
    return (
        <LabelWrap
            label={label}
            bottomMessage={bottomMessage}
            isShowBottomMessageSpace={isShowBottomMessageSpace ?? false}
            isFullWidth={isFullWidth ?? false}
        >
            <Input
                {...rest}
            />
        </LabelWrap>
    );
};