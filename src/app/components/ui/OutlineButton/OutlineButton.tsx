import { forwardRef } from "react";
import { Button, ButtonProps } from "@mantine/core";

type OutlineButtonProps = ButtonProps;

const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  (props, ref) => (
    <Button ref={ref} variant="outline" color="white" {...props} />
  )
);

export default OutlineButton;
