
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Exemple de données de métriques corporelles
const data = [
  {
    date: "1 Mai",
    weight: 82.5,
    bodyFat: 22,
    muscle: 35.2,
  },
  {
    date: "8 Mai",
    weight: 82.1,
    bodyFat: 21.7,
    muscle: 35.3,
  },
  {
    date: "15 Mai",
    weight: 81.8,
    bodyFat: 21.2,
    muscle: 35.5,
  },
  {
    date: "22 Mai",
    weight: 81.2,
    bodyFat: 20.9,
    muscle: 35.7,
  },
  {
    date: "29 Mai",
    weight: 80.5,
    bodyFat: 20.4,
    muscle: 35.9,
  },
  {
    date: "5 Juin",
    weight: 80.1,
    bodyFat: 19.8,
    muscle: 36.2,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border bg-background p-3 shadow-sm">
        <p className="mb-1 font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={`item-${index}`}
            className="text-sm"
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value} {entry.name === "Poids" ? "kg" : entry.name === "Masse musculaire" ? "kg" : "%"}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const BodyMetricsChart = () => {
  const [timeframe, setTimeframe] = useState("1m");

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Select defaultValue={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sélectionner une période" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1w">1 semaine</SelectItem>
            <SelectItem value="1m">1 mois</SelectItem>
            <SelectItem value="3m">3 mois</SelectItem>
            <SelectItem value="6m">6 mois</SelectItem>
            <SelectItem value="1y">1 an</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis
              yAxisId="left"
              orientation="left"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="weight"
              name="Poids"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="bodyFat"
              name="% Graisse corporelle"
              stroke="#F97316"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="muscle"
              name="Masse musculaire"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BodyMetricsChart;
