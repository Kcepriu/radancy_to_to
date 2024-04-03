import {
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { Modal } from "../components/Modal/Modal";

interface ICartComponentHook {
  MobileWindowComponent: JSX.Element; // or JSX.Element, depending on the type of Cart and Modal components
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

interface IParams {
  contentComponent: ReactNode;
}

export const useModalWindow = ({
  contentComponent,
}: IParams): ICartComponentHook => {
  const [showModal, setShowModal] = useState(false);

  const handlerCloseCard = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const MobileWindowComponent = (
    <>
      {showModal && (
        <Modal onClose={handlerCloseCard}>{contentComponent}</Modal>
      )}
    </>
  );

  return { MobileWindowComponent, setShowModal };
};
