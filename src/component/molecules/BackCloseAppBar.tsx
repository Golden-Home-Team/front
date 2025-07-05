import {FC} from "react";
import {BaseAppBar} from "../atom/BaseAppBar";
import {IconButton} from "../atom/IconButton";
import {BsChevronLeft, BsXLg} from "react-icons/bs";

export type BackCloseAppBarProps = {
    onPrevClick: () => void;
    onXClick: () => void;
}
export const BackCloseAppBar: FC<BackCloseAppBarProps> = ({onPrevClick, onXClick}) => {
    return (
        <BaseAppBar
            left={(
                <IconButton
                    onClick={() => onPrevClick()}
                >
                    <BsChevronLeft/>
                </IconButton>
            )}
            right={(
                <IconButton
                    onClick={() => onXClick()}
                >
                    <BsXLg/>
                </IconButton>
            )}
            center={<span>Title</span>}></BaseAppBar>
    );
};