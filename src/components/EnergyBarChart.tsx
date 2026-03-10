"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  title: string;
  labels: string[];
  introvertData: number[];
  extrovertData: number[];
  yLabel?: string;
}

export default function EnergyBarChart({
  labels,
  introvertData,
  extrovertData,
}: BarChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Introvert",
        data: introvertData,
        backgroundColor: "rgba(16, 185, 129, 0.7)",
        borderColor: "#10B981",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "Extrovert",
        data: extrovertData,
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "#3B82F6",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#94A3B8" },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: { color: "#94A3B8" },
        grid: { color: "#374151" },
      },
      x: {
        ticks: { color: "#94A3B8" },
        grid: { color: "#374151" },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
