import React, { FC, useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";

import { PiXSquare } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";

import { Overlay, ModalContainer, CloseBtn, Header } from "./Modal.styled";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  isDark?: boolean;
  closeAfterClickMouse?: boolean;
};

export const Modal: FC<Props> = ({
  children,
  onClose,
  isDark = false,
  closeAfterClickMouse = false,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleKeyPress = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = useCallback(
    (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (closeAfterClickMouse && evt.target === evt.currentTarget) {
        onClose();
      }
    },
    [onClose, closeAfterClickMouse]
  );

  useEffect(() => {
    setIsOpenModal(true);

    return () => {
      setIsOpenModal(false);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Check if document is available (i.e., running on the client side) before using createPortal
  if (typeof document !== "undefined") {
    return createPortal(
      <Overlay onClick={handleOverlayClick}>
        <ModalContainer data-is-open={isOpenModal}>
          <CloseBtn onClick={onClose} data-is-dark={isDark}>
            {!isDark ? <IoCloseSharp size="24px" /> : <PiXSquare size="24px" />}
          </CloseBtn>
          <Header />
          {children}
        </ModalContainer>
      </Overlay>,
      document.getElementById("modal-root")!
    );
  } else {
    // Handle the case where document is not available (e.g., during SSR)
    return null;
  }
};
