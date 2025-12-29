/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Import chart types dynamically to prevent SSR issues
const ResponsiveContainer = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);
const BarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), {
  ssr: false,
});
const Bar = dynamic(() => import("recharts").then((mod) => mod.Bar), {
  ssr: false,
});
const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), {
  ssr: false,
});
const Pie = dynamic(() => import("recharts").then((mod) => mod.Pie), {
  ssr: false,
});
const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), {
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
const Legend = dynamic(
  () => import("recharts").then((mod) => mod.Legend) as any,
  {
    ssr: false,
  }
);

const weeklyActivityData = [
  { day: "Sat", activeUsers: 400, newSignUp: 240 },
  { day: "Sun", activeUsers: 300, newSignUp: 140 },
  { day: "Mon", activeUsers: 320, newSignUp: 220 },
  { day: "Tue", activeUsers: 480, newSignUp: 290 },
  { day: "Wed", activeUsers: 200, newSignUp: 200 },
  { day: "Thu", activeUsers: 350, newSignUp: 210 },
  { day: "Fri", activeUsers: 380, newSignUp: 250 },
];

const eventVenueData = [
  { name: "Private Event", value: 30, fill: "#06b6d4" },
  { name: "Free Event", value: 15, fill: "#f97316" },
  { name: "Venue 1", value: 35, fill: "#7c3aed" },
  { name: "Venue 2", value: 20, fill: "#2563eb" },
];

const salesHistoryData = [
  { month: "Jan", sales: 200 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 250 },
  { month: "Apr", sales: 400 },
  { month: "May", sales: 600 },
  { month: "Jun", sales: 500 },
  { month: "Jul", sales: 350 },
  { month: "Aug", sales: 300 },
  { month: "Sep", sales: 250 },
  { month: "Oct", sales: 400 },
  { month: "Nov", sales: 550 },
  { month: "Dec", sales: 650 },
];

const revenueHistoryData = [
  { month: "Jan", revenue: 250 },
  { month: "Feb", revenue: 350 },
  { month: "Mar", revenue: 300 },
  { month: "Apr", revenue: 450 },
  { month: "May", revenue: 700 },
  { month: "Jun", revenue: 550 },
  { month: "Jul", revenue: 400 },
  { month: "Aug", revenue: 350 },
  { month: "Sep", revenue: 300 },
  { month: "Oct", revenue: 500 },
  { month: "Nov", revenue: 600 },
  { month: "Dec", revenue: 650 },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Good Morning</h1>
          <p className="text-gray-500">Here is your analytics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white">
            <CardHeader className="flex justify-between items-center pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Event
              </CardTitle>
              <div className="text-purple-600">📅</div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">2050</div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex justify-between items-center pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Venue
              </CardTitle>
              <div className="text-purple-600">
                <MapPin />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">250</div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex justify-between items-center pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Active Users
              </CardTitle>
              <div className="text-purple-600">👤</div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">5</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekly Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Weekly Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="activeUsers"
                      fill="#06b6d4"
                      name="Active Users"
                    />
                    <Bar
                      dataKey="newSignUp"
                      fill="#7c3aed"
                      name="New Sign-Up"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Event / Venue Pie Chart */}
          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Event / Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={eventVenueData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ value }) => `${value}%`}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {eventVenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sales History */}
        <div className="mb-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Sales History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={salesHistoryData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#ec4899"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorSales)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Revenue History */}
        <div>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Revenue History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueHistoryData}>
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#d946ef" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#d946ef" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#d946ef"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
