import {
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import { MobileMenu } from "../components/MobileMenu/MobileMenu";

interface IUseMobileMenu {
  ModalMenuComponent: JSX.Element; // or JSX.Element, depending on the type of Cart and Modal components
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}

interface IParams {
  contentComponent: ReactNode;
  isShowButtonCloseWindow?: boolean;
  title?: string;
}

export const useMobileMenu = ({
  contentComponent,
  isShowButtonCloseWindow = true,
  title = "",
}: IParams): IUseMobileMenu => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
  }, [showMobileMenu]);

  const ModalMenuComponent = (
    <>
      {showMobileMenu && (
        <MobileMenu
          onClose={handleCloseMenu}
          isOpen={showMobileMenu}
          isShowButtonCloseWindow={isShowButtonCloseWindow}
          title={title}
        >
          {contentComponent}
        </MobileMenu>
      )}
    </>
  );

  return { ModalMenuComponent, setShowMobileMenu };
};
