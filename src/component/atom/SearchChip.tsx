import {FC} from "react";
import {BiChevronDown} from "react-icons/bi";
import styled from "styled-components";

export type SearchChipProps = {
    label: string;
    value: string | undefined;
    onClick: () => void;
}
const SearchChipStyle = styled.div<{ isActive: boolean }>`
  color: ${p => p.theme.color.GoldenHome};

  padding: 9px 12px;
  border: 1px solid ${p => p.isActive ? p.theme.color.active : p.theme.color.GoldenHome};
  border-radius: 40px;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
  white-space: nowrap;
`
export const SearchChip: FC<SearchChipProps> = ({label, value, onClick}) => {
    return (
        <SearchChipStyle isActive={value != undefined} onClick={onClick}>
            {value ? value : label}
            <BiChevronDown/>
        </SearchChipStyle>
    );
};