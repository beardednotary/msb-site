"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type EnergyBarChart from "./EnergyBarChart";

const EnergyBarChartDynamic = dynamic(() => import("./EnergyBarChart"), { ssr: false });

export default function EnergyBarChartClient(props: ComponentProps<typeof EnergyBarChart>) {
  return <EnergyBarChartDynamic {...props} />;
}
