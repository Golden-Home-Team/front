import {FC, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import styled, {css} from "styled-components";
import {Space} from "../../style/Space";

type AddressTree = Record<string, Record<string, string[]>>;
export type LocationSelectSheetProps = {}

const LocationSelectSheetStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

type Location = {
    sido: string | null;
    sigungu: string | null;
    dongeupmun: string | null;
}

const ColumnName = styled.div<{ isActive: boolean; isCenter?: boolean }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  padding: 4px;
  ${({isCenter, theme}) => isCenter && css`
    border-left: 2px solid ${theme.color.inactive};
    border-right: 2px solid ${theme.color.inactive};
  `};
  
  ${({isActive, theme}) => {
    return isActive ? css`
      color: ${theme.color.GoldenHome};
      border-bottom: 2px solid ${theme.color.GoldenHome};
    ` : css`
      color: ${theme.color.inactive};
      border-bottom: 2px solid ${theme.color.inactive};
    `
  }}
`

const List = styled.ul`
  max-height: 350px;
  overflow-y: scroll;
`

const SelectListItem = styled.li<{ isSelected: boolean }>`
  padding: 6px 16px;
  
  ${({isSelected, theme}) => {
    return isSelected ? css`
      color: ${theme.color.GoldenHome};
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;

      background-color: #FDE09D;
    ` : css`
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
    `
  }}
`

export const LocationSelectSheet: FC<LocationSelectSheetProps> = () => {
    //todo: 이걸 훅으로 분리할 수 있지 않을까?
    // 현재 선택된 값으로 알아서 하위 지역 목록을 주는 그런거
    const [select, setSelect] = useState<Location>({sido: null, sigungu: null, dongeupmun: null})
    const {data} = useQuery<AddressTree>({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch("/data/korean_address.json")
            return await res.json() as AddressTree
        },
        staleTime: 1000 * 60 * 10
    })

    //todo: 로딩창으로 대체
    if (!data)
        return null

    const onChangeSido = (sido: Location["sido"]) => {
        setSelect({sido, sigungu: null, dongeupmun: null})
    }

    const onChangeSigungu = (sigungu: Location["sigungu"]) => {
        setSelect({...select, sigungu, dongeupmun: null})
    }

    const onChangeDongsupmun = (dongeupmun: Location["dongeupmun"]) => {
        setSelect({...select, dongeupmun})
    }

    return (
        <LocationSelectSheetStyle>
            <div>
                <Space v={10} color={"#F1F1F2"}/>
                <ColumnName isActive={select.sido != null}>시 · 도</ColumnName>
                <List>
                    {Object.keys(data).map((sido) => (
                        <SelectListItem
                            isSelected={sido == select.sido}
                            onClick={() => onChangeSido(sido == select.sido ? null : sido)}
                        >
                            {sido}
                        </SelectListItem>
                    ))}
                </List>
            </div>
            <div>
                <Space v={10} color={"#F1F1F2"}/>
                <ColumnName isActive={select.sigungu != null} isCenter>시 · 군 · 구</ColumnName>
                <List>
                    {select.sido && Object.keys(data[select.sido]).map(sigungu => (
                        <SelectListItem
                            isSelected={sigungu == select.sigungu}
                            onClick={() => onChangeSigungu(sigungu == select.sigungu ? null : sigungu)}
                        >
                            {sigungu}
                        </SelectListItem>
                    ))}
                </List>
            </div>
            <div>
                <Space v={10} color={"#F1F1F2"}/>
                <ColumnName isActive={select.dongeupmun != null}>동 · 읍 · 면</ColumnName>
                <List>
                    {(select.sido && select.sigungu) && data[select.sido][select.sigungu].map(dong => (
                        <SelectListItem
                            isSelected={dong == select.dongeupmun}
                            onClick={() => onChangeDongsupmun(dong == select.dongeupmun ? null : dong)}
                        >
                            {dong}
                        </SelectListItem>
                    ))}
                </List>
            </div>
        </LocationSelectSheetStyle>
    );
};