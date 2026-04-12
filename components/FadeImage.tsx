"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function FadeImage({ className, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      priority
      {...props}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      className={`transition-all duration-500 ease-in-out ${
        loaded ? "opacity-10 scale-100" : "opacity-0 scale-0"
      } ${className ?? ""}`}
      onLoad={() => setLoaded(true)}
    />
  );
}
