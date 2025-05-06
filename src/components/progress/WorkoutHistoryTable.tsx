
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const WorkoutHistoryTable = () => {
  const workouts = [
    {
      id: 1,
      date: "6 Juin 2023",
      name: "Musculation Full Body",
      duration: 45,
      calories: 320,
      exercises: 5,
      type: "Force",
    },
    {
      id: 2,
      date: "5 Juin 2023",
      name: "Course d'endurance",
      duration: 30,
      calories: 280,
      exercises: 1,
      type: "Cardio",
    },
    {
      id: 3,
      date: "3 Juin 2023",
      name: "Musculation Haut du corps",
      duration: 40,
      calories: 290,
      exercises: 6,
      type: "Force",
    },
    {
      id: 4,
      date: "2 Juin 2023",
      name: "HIIT Circuit",
      duration: 25,
      calories: 310,
      exercises: 8,
      type: "HIIT",
    },
    {
      id: 5,
      date: "1 Juin 2023",
      name: "Musculation Bas du corps",
      duration: 50,
      calories: 340,
      exercises: 5,
      type: "Force",
    },
    {
      id: 6,
      date: "31 Mai 2023",
      name: "Yoga Flow",
      duration: 60,
      calories: 220,
      exercises: 12,
      type: "Flexibilité",
    },
    {
      id: 7,
      date: "29 Mai 2023",
      name: "Course d'intervalle",
      duration: 35,
      calories: 300,
      exercises: 1,
      type: "Cardio",
    },
  ];

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Entraînement</TableHead>
            <TableHead className="hidden md:table-cell">Durée</TableHead>
            <TableHead className="hidden md:table-cell">Calories</TableHead>
            <TableHead className="hidden lg:table-cell">Type</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workouts.map((workout) => (
            <TableRow key={workout.id}>
              <TableCell>{workout.date}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{workout.name}</p>
                  <p className="text-xs text-muted-foreground md:hidden">
                    {workout.duration} min · {workout.calories} kcal
                  </p>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{workout.duration} min</TableCell>
              <TableCell className="hidden md:table-cell">{workout.calories} kcal</TableCell>
              <TableCell className="hidden lg:table-cell">
                <Badge 
                  variant="outline" 
                  className={
                    workout.type === "Force" ? "border-fitness-primary text-fitness-primary" :
                    workout.type === "Cardio" ? "border-fitness-accent text-fitness-accent" :
                    workout.type === "HIIT" ? "border-red-500 text-red-500" :
                    "border-green-500 text-green-500"
                  }
                >
                  {workout.type}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  Détails
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center pt-4">
        <Button variant="outline">Charger plus d'entraînements</Button>
      </div>
    </div>
  );
};

export default WorkoutHistoryTable;
