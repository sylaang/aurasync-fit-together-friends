
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Exemple de données de progression de force
const data = [
  {
    date: "1 Mai",
    squat: 80,
    deadlift: 100,
    benchPress: 60,
  },
  {
    date: "8 Mai",
    squat: 85,
    deadlift: 105,
    benchPress: 62.5,
  },
  {
    date: "15 Mai",
    squat: 87.5,
    deadlift: 110,
    benchPress: 65,
  },
  {
    date: "22 Mai",
    squat: 90,
    deadlift: 115,
    benchPress: 67.5,
  },
  {
    date: "29 Mai",
    squat: 95,
    deadlift: 120,
    benchPress: 70,
  },
  {
    date: "5 Juin",
    squat: 100,
    deadlift: 125,
    benchPress: 72.5,
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
            {entry.name}: {entry.value} kg
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const StrengthProgressChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis 
            label={{ value: 'Poids (kg)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="squat"
            name="Squat"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="deadlift"
            name="Soulevé de terre"
            stroke="#F97316"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="benchPress"
            name="Développé couché"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StrengthProgressChart;
