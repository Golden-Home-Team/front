import {FC, ReactNode} from "react";
import styled from "styled-components";
import {IconButton} from "../atom/IconButton";
import {BsXLg} from "react-icons/bs";
import {motion, AnimatePresence} from "framer-motion";

export type BottomSheetProps = {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const Background = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  background: #3535354D;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  backdrop-filter: blur(2px);
`

const Container = styled.div`
  width: 100%;
  max-width: ${p => p.theme.size.mobileMaxWidth};

  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 24px 17px 56px 17px;

  box-shadow: 0 0 20px 0 #47474740;

  position: relative;
`

const Title = styled.div`
  color: #666666;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
`

const CloseButton = styled.span`
  position: absolute;
  top: -40px;
  right: 0;
`

export const BottomSheet: FC<BottomSheetProps> = ({children, title, onClose, isOpen}) => {
    const onBackgroundClick = (e) => {
        if(e.target != e.currentTarget)
            return

        onClose();
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <Background
                    as={motion.div}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.1, ease: "easeIn"}}
                    onClick={onBackgroundClick}
                >
                    <Container
                        as={motion.div}
                        initial={{y: "180%"}}
                        animate={{y: 0}}
                        exit={{y: "100%"}}
                        transition={{duration: 0.1, ease: "easeInOut"}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloseButton>
                            <IconButton onClick={() => onClose()}>
                                <BsXLg/>
                            </IconButton>
                        </CloseButton>
                        <Title>{title}</Title>
                        {children}
                    </Container>
                </Background>
            )}
        </AnimatePresence>
    );
};