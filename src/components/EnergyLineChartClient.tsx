"use client";

import dynamic from "next/dynamic";

const EnergyLineChart = dynamic(() => import("./EnergyLineChart"), { ssr: false });

export default function EnergyLineChartClient() {
  return <EnergyLineChart />;
}
