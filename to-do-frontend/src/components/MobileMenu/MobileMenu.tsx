import React, { FC, useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";

import { PiXSquare } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";

import {
  Overlay,
  Container,
  ModalContainer,
  CloseBtn,
  Header,
  Title,
  Content,
} from "./MobileMenu.styled";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  isShowButtonCloseWindow?: boolean;
  title?: string;
};

export const MobileMenu: FC<Props> = ({
  children,
  onClose,
  isOpen,
  isShowButtonCloseWindow = true,
  title = "",
}) => {
  const isDark = false;

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(async () => {
    await setIsOpenModal(false);
    onClose();
    // setTimeout(onClose, 500);
  }, [onClose]);

  const handleKeyPress = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleOverlayClick = useCallback(
    (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (evt.target === evt.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Check if document is available (i.e., running on the client side) before using createPortal
  if (typeof document !== "undefined") {
    return createPortal(
      <Overlay onClick={handleOverlayClick} data-is-open={isOpenModal}>
        <Container onClick={handleOverlayClick}>
          <ModalContainer data-is-open={isOpenModal}>
            <Header>
              <Title>{title}</Title>
            </Header>
            {isShowButtonCloseWindow && (
              <CloseBtn onClick={handleClose} data-is-dark={isDark}>
                {!isDark ? (
                  <IoCloseSharp size="24px" />
                ) : (
                  <PiXSquare size="24px" />
                )}
              </CloseBtn>
            )}
            <Content>{children}</Content>
          </ModalContainer>
        </Container>
      </Overlay>,
      document.getElementById("modal-root")!
    );
  } else {
    // Handle the case where document is not available (e.g., during SSR)
    return null;
  }
};
