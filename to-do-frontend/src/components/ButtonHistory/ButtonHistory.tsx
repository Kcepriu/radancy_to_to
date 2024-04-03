import { FC } from "react";
import { FiRotateCcw } from "react-icons/fi";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { Button } from "./ButtonHistory.styled";
import HistoryListAll from "../HistoryListAll/HistoryListAll";

const ButtonHistory: FC = () => {
  const contentComponent = <HistoryListAll />;

  const { ModalMenuComponent, setShowMobileMenu } = useMobileMenu({
    contentComponent,
    title: "History",
  });

  return (
    <>
      <Button onClick={() => setShowMobileMenu(true)}>
        <FiRotateCcw size={24} />
        History
      </Button>
      {ModalMenuComponent}
    </>
  );
};

export default ButtonHistory;
