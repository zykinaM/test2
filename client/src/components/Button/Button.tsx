import React from "react";
import { IButtonProps } from "./Button.props";
import { SButton } from "./styles";

const Button: React.FC<IButtonProps> = ({
  children,
  isActive = false,
  ...props
}: IButtonProps): JSX.Element => (
  <SButton onClick={props.onClick} isActive={isActive} id={props.id}>
    {children}
  </SButton>
);

export default React.memo(Button);
