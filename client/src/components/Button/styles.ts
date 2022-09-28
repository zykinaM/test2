import styled from "styled-components";
import { IButtonProps } from "./Button.props";

type Button = Omit<IButtonProps, "label">;

export const SButton = styled.button<Button>`
  border: 1px solid black;
  padding: 8px;
  background: ${(props) => (props.isActive ? "green" : "white")};
`;