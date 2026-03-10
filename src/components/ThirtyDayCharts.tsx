"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const dayLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

// Realistic 30-day energy pattern: dips mid-week, recovers on weekends
const energyData = [
  75, 65, 55, 70, 60, 85, 90, // Week 1
  80, 68, 58, 72, 62, 88, 82, // Week 2
  70, 60, 50, 65, 58, 80, 75, // Week 3
  68, 55, 60, 72, 63, 85, 78, // Week 4
  70, 74,                      // Days 29-30
];

const trendData = {
  labels: dayLabels,
  datasets: [
    {
      label: "Social Battery %",
      data: energyData,
      borderColor: "#10B981",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      borderWidth: 2,
      pointBackgroundColor: "#10B981",
      pointRadius: 3,
      tension: 0.4,
      fill: true,
    },
  ],
};

const trendOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: { parsed: { y: number | null } }) => ` Battery: ${ctx.parsed.y ?? 0}%`,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        color: "#94A3B8",
        callback: (value: number | string) => `${value}%`,
      },
      grid: { color: "#374151" },
    },
    x: {
      ticks: { color: "#94A3B8", maxRotation: 0, autoSkip: true, maxTicksLimit: 10 },
      grid: { color: "#374151" },
    },
  },
};

const activityLabels = [
  "Solo Morning Walk",
  "Coffee w/ Close Friend",
  "Creative Hobbies",
  "Reading / Quiet Time",
  "Large Group Meetings",
  "Obligatory Social Events",
  "Networking Events",
  "Noisy Parties",
];

const activityImpacts = [25, 20, 18, 15, -15, -18, -20, -25];

const activityData = {
  labels: activityLabels,
  datasets: [
    {
      label: "Avg Energy Impact",
      data: activityImpacts,
      backgroundColor: activityImpacts.map((v) =>
        v >= 0 ? "rgba(16, 185, 129, 0.7)" : "rgba(239, 68, 68, 0.7)"
      ),
      borderColor: activityImpacts.map((v) =>
        v >= 0 ? "#10B981" : "#EF4444"
      ),
      borderWidth: 1,
    },
  ],
};

const activityOptions = {
  responsive: true,
  indexAxis: "y" as const,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: { parsed: { x: number | null } }) => {
          const val = ctx.parsed.x ?? 0;
          return ` ${val > 0 ? "+" : ""}${val}% energy`;
        },
      },
    },
  },
  scales: {
    x: {
      min: -30,
      max: 30,
      ticks: {
        color: "#94A3B8",
        callback: (value: number | string) => `${Number(value) > 0 ? "+" : ""}${value}%`,
      },
      grid: { color: "#374151" },
    },
    y: {
      ticks: { color: "#94A3B8" },
      grid: { color: "#374151" },
    },
  },
};

export default function ThirtyDayCharts() {
  return (
    <div className="space-y-12">
      <div className="bg-[#0F172A] border border-[#374151] p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          My 30-Day Social Energy Trend
        </h3>
        <p className="text-[#94A3B8] text-sm mb-6 text-center">
          Energy levels over the experiment period — notice the weekend recovery spikes.
        </p>
        <Line data={trendData} options={trendOptions} />
      </div>

      <div className="bg-[#0F172A] border border-[#374151] p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          Average Energy Impact by Activity Type
        </h3>
        <p className="text-[#94A3B8] text-sm mb-6 text-center">
          Green = recharged me. Red = drained me.
        </p>
        <Bar data={activityData} options={activityOptions} />
      </div>
    </div>
  );
}
