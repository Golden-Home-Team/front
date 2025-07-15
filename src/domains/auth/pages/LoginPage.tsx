import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "../../../common/style/PageLayout";
import {Button} from "../../../component/atom/Button";
import Logo from "../../../common/assets/logo.png";
import {Space} from "../../../common/style/Space";
import {useAuth} from "../../../common/context/AuthContext";
import {LoginReq} from "../types/auth";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../../RoutePath";

export type LoginPageProps = {}

const LoginPageStyle = styled.div`
  height: calc(100 * var(--vh));

  padding: 16px;
  background-color: ${p => p.theme.color.GoldenHome};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const LogoWrap = styled.div`
  width: 66px;

  text-align: center;
`

const Input = styled.input`
  width: 100%;
  background-color: #FFFFFFB2;

  padding: 13px 16px;
  border: none;
  border-radius: ${p => p.theme.size.borderRadius};
  outline: none;

  &::placeholder {
    color: #665A4E;
    font-weight: 500;
    font-size: 14px;
  }
`

const LoginText = styled.span`
  font-weight: 700;
`
const LinkContainer = styled.div`
  display: flex;
  gap: 16px; /* 링크 간 간격 */
  align-items: center;
  font-size: 14px;
  color: white;
`;

const StyledLink = styled.span`
  cursor: pointer;
  position: relative;

  &::after {
    content: '|';
    position: absolute;
    right: -10px;
    color: white;
  }

  &:last-child::after {
    content: ''; /* 마지막은 | 제거 */
  }
`;

const DividerWrapper = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 14px;
`;

const Line = styled.span`
  flex: 1;
  height: 1px;
  background-color: white;
  opacity: 0.5;
`;

const Text = styled.span`
  padding: 0 12px;
  white-space: nowrap;
`;

export const LoginPage: FC<LoginPageProps> = () => {
    const navigation = useNavigate();
    const {login} = useAuth();
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onLogin = async () => {
        //todo: 로직을 tanstack-query로 변경
        try {
            const req : LoginReq = {
                loginId : id,
                password
            }

            const res = await login(req)
            alert("로그인 성공")
            navigation(RoutePath.main)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <PageLayout>
            <LoginPageStyle>
                <LogoWrap>
                    <img width={66} src={Logo}/>
                </LogoWrap>
                <Space v={84}/>
                <Input
                    value={id}
                    onChange={e => setId(e.target.value)}
                    placeholder={"아이디 입력"}
                />
                <Space v={12}/>
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={"비밀번호 입력"}
                    type={"password"}
                />
                <Space v={12}/>
                <Button
                    onClick={onLogin}
                    background={"#FDE09D"}
                    color={"GoldenHome"}
                    $isFullWidth
                >
                    <LoginText>로그인</LoginText>
                </Button>

                <Space v={26}/>

                <LinkContainer>
                    <StyledLink>아이디 찾기</StyledLink>
                    <StyledLink>비밀번호 찾기</StyledLink>
                    <StyledLink>회원가입</StyledLink>
                </LinkContainer>

                <Space v={42}/>

                <DividerWrapper>
                    <Line />
                    <Text>또는</Text>
                    <Line />
                </DividerWrapper>
            </LoginPageStyle>
        </PageLayout>
    );
};