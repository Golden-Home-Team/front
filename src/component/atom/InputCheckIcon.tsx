import {FC} from "react";
import {GoCheck, GoCheckCircle} from "react-icons/go";
import styled from "styled-components";

export type InputCheckIconProps = {
    isSuccess: boolean
}
const InputCheckIconStyle = styled.div<InputCheckIconProps>`
  font-size: 22px;
  color: ${p => p.isSuccess ? p.theme.color.active : p.theme.color.inactive};
`

export const InputCheckIcon: FC<InputCheckIconProps> = (p) => {
    return (
        <InputCheckIconStyle {...p}>
            <GoCheck/>
        </InputCheckIconStyle>
    );
};