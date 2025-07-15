/**
 * 시설 정보를 나타내는 타입입니다.
 */
export type Facility = {
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
    grade: string; // 시설 등금
    price: 15000; // 가격
    establishmentYear: 2024 // 설립 연도
};

export type FacilitySearchReq = {
    query?: string; // 시설명 검색
    address?: string; // 시설주소 검색
    facilityType?: FacilityType; // 시설종류 (e.g. 양로원, 요양원 등)
    grade?: string; // 시설등급
    minPrice?: number; // 최소가격 (default = 0)
    maxPrice?: number; // 최대가격 (default = 100000000)
    withinYears?: number; // 설립연도 N년 이내 (e.g. 1)
    page?: number; // 페이지 (default = 1)
    size?: number; // 페이지 크기 (default = 20)
};

export type FacilityType =
    | "요양원"
    | "요양병원"
    | "양로원"
    | "실버타운"
    | "단기보호"
    | "주야간보호"
    | "방문요양"
    | "방문간호"
    | "방문목욕";