"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Controls() {
  const [brightness, setBrightness] = useState<number>(0);

  const handleBrightnessChange = async (value: number[]) => {
    const brightness = value[0];
    setBrightness(brightness);

    await fetch("/api/brightness/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: brightness }),
    });
  };

  return (
    <div className="w-full max-w-md p-4 bg-card rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Light Brightness Control
      </h3>
      <Slider
        value={[brightness]}
        onValueChange={handleBrightnessChange}
        min={0}
        max={100}
        className="w-full"
      />
      <div className="text-center text-sm text-foreground font-medium mt-2">
        {brightness}%
      </div>
    </div>
  );
}