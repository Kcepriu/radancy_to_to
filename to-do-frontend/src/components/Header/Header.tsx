import { FC } from "react";
import ButtonHistory from "../ButtonHistory/ButtonHistory";
import ButtonAddList from "../ButtonAddList/ButtonAddList";
import { WrapHeader, WrapButton } from "./Header.styled";

const Header: FC = () => {
  return (
    <WrapHeader>
      <h1>My Task Board</h1>
      <WrapButton>
        <ButtonHistory />
        <ButtonAddList />
      </WrapButton>
    </WrapHeader>
  );
};

export default Header;
