import {FC} from "react";
import styled from "styled-components";
import {Space} from "../../style/Space";

export type FacilityListItemProps = {
    facility: Facility
}

const FacilityListItemStyle = styled.li`
  padding: 22px 16px;

  display: flex;
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
  gap: 4px;
`

const Bedge = styled.span`
  background: #FDE09D66;
  border-radius: 20px;
  padding: 10px;
  display: inline-block;
`

const Image = styled.div`
  width: 127px;
  background-color: #e5e5e5;
`

export const FacilityListItem: FC<FacilityListItemProps> = ({facility}) => {
    return (
        <FacilityListItemStyle>
            <InfoSection>
                <Type>{facility.facilityType}</Type>
                <Space v={5}/>
                <Name>{facility.name}</Name>
                <Address>{facility.address}</Address>
                <Space v={12}/>
                <BedgeWrap>
                    <Bedge>1등급</Bedge>
                    <Bedge>대형</Bedge>
                    <Bedge>2025년</Bedge>
                    <Bedge>정원 {facility.currentMale}/{facility.currentFemale}명</Bedge>
                </BedgeWrap>
            </InfoSection>
            <Image/>
        </FacilityListItemStyle>
    );
};