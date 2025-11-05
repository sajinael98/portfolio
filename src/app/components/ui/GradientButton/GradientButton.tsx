import { Button, ButtonProps } from "@mantine/core";
import React from "react";

interface GradientButtonProps extends ButtonProps {}

const GradientButton = (props: GradientButtonProps) => {
  return (
    <Button
      variant="gradient"
      gradient={{
        from: "#3A8DFF",
        to: "#8C52FF",
        deg: 90,
      }}
      bdrs="md"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default GradientButton;
