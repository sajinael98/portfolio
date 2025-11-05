"use client";

import React from "react";
import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <div className="orbital-layer"></div>
      <div className="orbital-layer layer2"></div>
      <div className="orbital-layer layer3"></div>
    </div>
  );
}
