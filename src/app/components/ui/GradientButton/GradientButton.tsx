"use client"

import { Button, ButtonProps, createPolymorphicComponent } from "@mantine/core";
import { forwardRef } from "react";
import styles from "./GradientButton.module.css";

type _GradientButtonProps = ButtonProps;

const _GradientButton = forwardRef<HTMLButtonElement, _GradientButtonProps>(
  ({ className, gradient, ...props }, ref) => (
    <Button
      ref={ref}
      variant="gradient"
      gradient={{
        from: "#3A8DFF",
        to: "#8C52FF",
        deg: 90,
        ...gradient,
      }}
      className={`${styles.button} ${className ?? ""}`}
      bdrs="md"
      {...props}
    />
  )
);

// ✅ هون السحر — نفس اللي Mantine بيعمله داخلياً
const GradientButton = createPolymorphicComponent<"button", _GradientButtonProps>(
  _GradientButton
);

export default GradientButton;
