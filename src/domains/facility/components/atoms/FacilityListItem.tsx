import {FC} from "react";
import styled from "styled-components";
import {Space} from "../../../../style/Space";
import {Facility} from "../../types/facility";

export type FacilityListItemProps = {
    facility: Facility
}

const FacilityListItemStyle = styled.li`
  padding: 22px 16px;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 9px;
`

const InfoSection = styled.div`
`

const Type = styled.div`
  color: #979797;

  font-weight: 400;
  font-size: 12px;
`

const Name = styled.div`
  font-weight: 600;
  font-size: 15px;

  line-height: 22px;
`

const Address = styled.div`
  color: #666666;

  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
`

const BedgeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const Bedge = styled.span`
  background: #FDE09D66;
  border-radius: 20px;
  padding: 10px;
  display: inline-block;
  white-space: nowrap;
`

const Image = styled.div`
  width: 127px;
  background-color: #e5e5e5;
`

export const FacilityListItem: FC<FacilityListItemProps> = ({facility}) => {
    //todo: 반응형, 이미지 크기가 줄어들게
    return (
        <FacilityListItemStyle>
            <InfoSection>
                <Type>{facility.facilityType}</Type>
                <Space v={5}/>
                <Name>{facility.name}</Name>
                <Address>{facility.address}</Address>
                <Space v={12}/>
                <BedgeWrap>
                    <Bedge>{facility.grade}등급</Bedge>
                    <Bedge>대형</Bedge>
                    <Bedge>{facility.establishmentYear}년</Bedge>
                    <Bedge>정원 {facility.currentMale}/{facility.currentFemale}명</Bedge>
                </BedgeWrap>
            </InfoSection>
            <Image/>
        </FacilityListItemStyle>
    );
};