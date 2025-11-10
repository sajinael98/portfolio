import { Button, ButtonProps, createPolymorphicComponent } from "@mantine/core";
import { forwardRef } from "react";

type _OutlineButtonProps = ButtonProps;

const _OutlineButton = forwardRef<HTMLButtonElement, _OutlineButtonProps>(
  ({ ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline"
      {...props}
    />
  )
);

const OutlineButton = createPolymorphicComponent<"button", _OutlineButtonProps>(
  _OutlineButton
);

export default OutlineButton;
