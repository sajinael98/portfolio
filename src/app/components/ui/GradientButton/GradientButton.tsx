import { Button, ButtonProps } from "@mantine/core";
import { forwardRef } from "react";

type GradientButtonProps = ButtonProps;

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  (props, ref) => (
    <Button
      ref={ref}
      variant="gradient"
      gradient={{
        from: "#3A8DFF",
        to: "#8C52FF",
        deg: 90,
      }}
      bdrs="md"
      {...props}
    />
  )
);

export default GradientButton;
