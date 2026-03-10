"use client";

import dynamic from "next/dynamic";

const ThirtyDayCharts = dynamic(() => import("./ThirtyDayCharts"), { ssr: false });

export default function ThirtyDayChartsClient() {
  return <ThirtyDayCharts />;
}
