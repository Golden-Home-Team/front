import {FC} from "react";
import {BaseAppBar} from "../atom/BaseAppBar";
import {IconButton} from "../atom/IconButton";
import {BsChevronLeft, BsXLg} from "react-icons/bs";

type CloseAppBarProps = {
    onXClick: () => void;
}
export const CloseAppBar: FC<CloseAppBarProps> = ({onXClick}) => {
    return (
        <BaseAppBar
            right={(
                <IconButton
                    onClick={() => onXClick()}
                >
                    <BsXLg/>
                </IconButton>
            )}
        />
    );
};