import Image from "next/image";
import React from 'react';
import Link from "next/link";
import CustomPrevArrow from "./Homee/ProductSlider";
import Homee from "./Homee/Homee";
export default function Home() {
  return (
    <div>

      <Homee />
      <CustomPrevArrow
      />

    </div>
  );
}
