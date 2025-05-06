
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Exemple de données d'entraînement
const data = [
  {
    day: "Lun",
    duration: 45,
    calories: 320,
  },
  {
    day: "Mar",
    duration: 30,
    calories: 250,
  },
  {
    day: "Mer",
    duration: 60,
    calories: 450,
  },
  {
    day: "Jeu",
    duration: 0,
    calories: 0,
  },
  {
    day: "Ven",
    duration: 45,
    calories: 340,
  },
  {
    day: "Sam",
    duration: 90,
    calories: 680,
  },
  {
    day: "Dim",
    duration: 30,
    calories: 230,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border bg-background p-3 shadow-sm">
        <p className="mb-1 font-medium">{label}</p>
        <p className="text-sm text-fitness-primary">
          Durée: {payload[0].value} min
        </p>
        <p className="text-sm text-fitness-accent">
          Calories: {payload[1].value}
        </p>
      </div>
    );
  }

  return null;
};

const WorkoutMetricsChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8B5CF6"
            label={{ value: 'Min', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#F97316"
            label={{ value: 'Kcal', angle: 90, position: 'insideRight' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="duration" name="Durée (min)" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
          <Bar yAxisId="right" dataKey="calories" name="Calories" fill="#F97316" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkoutMetricsChart;
