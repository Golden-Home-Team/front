import {FC} from "react";
import {BaseAppBar} from "../atom/BaseAppBar";
import {IconButton} from "../atom/IconButton";
import {BsChevronLeft, BsSearch} from "react-icons/bs";

export type SearchAppBarProps = {
    onPrevClick: () => void;
    onSearch: (key: string) => void;
}

export const SearchAppBar: FC<SearchAppBarProps> = ({onSearch, onPrevClick}) => {
    return (
        <BaseAppBar
            left={(
                <IconButton
                    onClick={() => onPrevClick()}
                >
                    <BsChevronLeft/>
                </IconButton>
            )}
            center={
                <div>검색어</div>
            }
            right={(
                <IconButton onClick={() => onSearch("1")}>
                    <BsSearch/>
                </IconButton>
            )}
        />
    );
};