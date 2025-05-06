
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Dumbbell, ChartBar, Users, Timer } from "lucide-react";

const MetricsOverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardContent className="flex flex-col items-start justify-between p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fitness-light">
            <Dumbbell className="h-5 w-5 text-fitness-primary" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Séances d'entraînement</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">23</p>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <ArrowUp className="h-3 w-3" />
                <span>12%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">vs. mois précédent</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start justify-between p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fitness-light">
            <Timer className="h-5 w-5 text-fitness-primary" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Temps total d'exercice</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">18.5h</p>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <ArrowUp className="h-3 w-3" />
                <span>8%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">vs. mois précédent</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start justify-between p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fitness-light">
            <ChartBar className="h-5 w-5 text-fitness-primary" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Calories brûlées</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">7,845</p>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <ArrowUp className="h-3 w-3" />
                <span>5%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">vs. mois précédent</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start justify-between p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fitness-light">
            <Users className="h-5 w-5 text-fitness-primary" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Défis complétés</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">5</p>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <ArrowUp className="h-3 w-3" />
                <span>2</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">vs. mois précédent</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsOverviewCards;
