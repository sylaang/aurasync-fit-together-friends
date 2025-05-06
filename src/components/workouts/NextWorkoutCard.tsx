
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dumbbell } from "lucide-react";

const NextWorkoutCard = () => {
  const exerciseList = [
    { name: "Squat", sets: 4, reps: "10-12", weight: "60kg" },
    { name: "Développé couché", sets: 3, reps: "8-10", weight: "50kg" },
    { name: "Soulevé de terre", sets: 3, reps: "10", weight: "80kg" },
    { name: "Rowing haltère", sets: 3, reps: "12", weight: "20kg" },
    { name: "Crunch", sets: 3, reps: "15", weight: "Corps" },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Entraînement du Jour</CardTitle>
          <Badge className="bg-fitness-primary">Dans 3h</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Musculation Full Body</h3>
            <p className="text-sm text-muted-foreground">45min · Intermédiaire</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fitness-light">
            <Dumbbell className="h-5 w-5 text-fitness-primary" />
          </div>
        </div>
        
        <div className="mt-4 space-y-1">
          <p className="font-medium text-sm">Exercices prévus:</p>
          <div className="rounded-md border">
            <div className="border-b bg-muted/50 px-4 py-2 grid grid-cols-5 text-sm font-medium">
              <div className="col-span-2">Exercice</div>
              <div className="text-center">Séries</div>
              <div className="text-center">Reps</div>
              <div className="text-center">Poids</div>
            </div>
            <div className="divide-y">
              {exerciseList.map((exercise, i) => (
                <div key={i} className="px-4 py-3 grid grid-cols-5 text-sm">
                  <div className="col-span-2">{exercise.name}</div>
                  <div className="text-center">{exercise.sets}</div>
                  <div className="text-center">{exercise.reps}</div>
                  <div className="text-center">{exercise.weight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Commencer l'entraînement</Button>
      </CardFooter>
    </Card>
  );
};

export default NextWorkoutCard;
