export const getPasswordValidationResult = (password: string): { isValid: boolean; message: string } => {
    let passwordValidMessage: string | "사용가능한 비밀번호 입니다.";
    if (password == "") {
        passwordValidMessage = "영문, 숫자 조합 8~20자리로 입력해주세요."
    } else if (password.length < 8) {
        passwordValidMessage = "아직 8자리가 아니에요"
    } else if (password.length > 20) {
        passwordValidMessage = "20자리를 초과했어요"
    } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        passwordValidMessage = "영문과 숫자를 조합해주세요"
    } else {
        passwordValidMessage = "사용가능한 비밀번호 입니다.";
    }

    const isPasswordValid = passwordValidMessage == "사용가능한 비밀번호 입니다.";

    return {
        isValid: isPasswordValid,
        message: passwordValidMessage
    }
}