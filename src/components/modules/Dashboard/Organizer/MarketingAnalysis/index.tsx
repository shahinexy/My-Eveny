"use client";

import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";

// Import chart components dynamically to prevent SSR issues
const ResponsiveContainer = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);
const LineChart = dynamic(
  () => import("recharts").then((mod) => mod.LineChart),
  { ssr: false }
);
const Line = dynamic(() => import("recharts").then((mod) => mod.Line), {
  ssr: false,
});
const AreaChart = dynamic(
  () => import("recharts").then((mod) => mod.AreaChart),
  { ssr: false }
);
const Area = dynamic(() => import("recharts").then((mod) => mod.Area), {
  ssr: false,
});
const CartesianGrid = dynamic(
  () => import("recharts").then((mod) => mod.CartesianGrid),
  { ssr: false }
);
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), {
  ssr: false,
});
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), {
  ssr: false,
});
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), {
  ssr: false,
});

// Sample data for Monthly View Report
const monthlyViewData = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 1200 },
  { month: "Mar", value: 800 },
  { month: "Apr", value: 6500 },
  { month: "May", value: 1000 },
  { month: "Jun", value: 3500 },
];

// Sample data for Monthly Click Report
const monthlyClickData = [
  { month: "Jan", value: 500 },
  { month: "Feb", value: 800 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 3000 },
  { month: "May", value: 1500 },
  { month: "Jun", value: 7000 },
];

// Sample data for Conversion History (full year)
const conversionHistoryData = [
  { month: "Jan", value: 250 },
  { month: "Feb", value: 320 },
  { month: "Mar", value: 280 },
  { month: "Apr", value: 420 },
  { month: "May", value: 520 },
  { month: "Jun", value: 750 },
  { month: "Jul", value: 480 },
  { month: "Aug", value: 520 },
  { month: "Sep", value: 580 },
  { month: "Oct", value: 450 },
  { month: "Nov", value: 650 },
  { month: "Dec", value: 620 },
];

// Metric Card Component
function MetricCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <Card className="p-6 flex items-center gap-4 bg-white">
      <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-sm">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Marketing & Analysis
          </h1>
          <p className="text-gray-600">Here is Your Analytics</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard label="Event View" value="12050" icon="👁️" />
          <MetricCard label="Event Click" value="1,250" icon="🎯" />
          <MetricCard label="Conversion Rate" value="70%" icon="📊" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly View Report */}
          <Card className="p-6 bg-white">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Monthly View Report
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyViewData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#d8317c"
                  strokeWidth={3}
                  dot={{ fill: "#d8317c", r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Monthly Click Report */}
          <Card className="p-6 bg-white">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Monthly Click Report
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyClickData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6b46c1"
                  strokeWidth={3}
                  dot={{ fill: "#6b46c1", r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Conversion History */}
        <Card className="p-6 bg-white">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Conversion History
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={conversionHistoryData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d8317c" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#d8317c" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#d8317c"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </main>
  );
}
