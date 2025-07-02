import {FC, useEffect, useRef} from "react";
import styled from "styled-components";

export type HeaderProps = {}

const HeaderStyle = styled.header`
  width: 100%;
  
  padding: 12px;
  
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Header: FC<HeaderProps> = () => {
    const headerRef = useRef<HTMLElement | null>(null);
    const menuItems = [
        {label: "Home", link: "/"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]

    const updateHeaderHeight = () => {
        const headerHeight = headerRef.current?.clientHeight || 0;
        document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
    }

    useEffect(() => {
        if (headerRef.current == null) {
            return
        }

        updateHeaderHeight()

        const resizeObserver = new ResizeObserver(updateHeaderHeight)
        resizeObserver.observe(headerRef.current as Element);

        return () => resizeObserver.disconnect()
    }, []);

    return (
        <HeaderStyle ref={headerRef}>
            <Title>헤더</Title>
            <Navigation>
                {menuItems.map((item, index) => (
                    <li>{item.label}</li>
                ))}
            </Navigation>
        </HeaderStyle>
    );
};