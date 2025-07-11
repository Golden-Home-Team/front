/**
 * 시설 정보를 나타내는 타입입니다.
 */
type Facility = {
    id: number; // 시설 아이디
    districtName: string; // 시/군/구
    name: string; // 시설명
    director: string; // 관리자명
    capacity: number; // 정원
    currentTotal: number; // 현원 - 계
    currentMale: number; // 현원 - 남
    currentFemale: number; // 현원 - 여
    staffTotal: number; // 종사자수 - 계
    staffMale: number; // 종사자수 - 남
    staffFemale: number; // 종사자수 - 여
    address: string; // 소재지
    phoneNumber: string; // 전화번호
    facilityType: string; // 시설 종류
};
