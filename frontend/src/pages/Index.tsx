
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChartBar, Dumbbell, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import WorkoutMetricsChart from "@/components/charts/WorkoutMetricsChart";
import FriendActivityCard from "@/components/social/FriendActivityCard";
import NextWorkoutCard from "@/components/workouts/NextWorkoutCard";

const Index = () => {
  return (
    <Layout>
      <div className="container px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8 animate-fade-in">
          <div className="rounded-2xl bg-gradient-to-r from-fitness-primary to-fitness-secondary p-6 text-white md:p-8">
            <h1 className="mb-2 text-3xl font-bold">Bonjour, Marc</h1>
            <p className="mb-6 text-lg opacity-90">Prêt à atteindre vos objectifs aujourd'hui ?</p>
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl bg-white bg-opacity-20 p-4 backdrop-blur-sm">
                <p className="text-sm opacity-75">Séances cette semaine</p>
                <p className="text-2xl font-bold">4/5</p>
              </div>
              <div className="rounded-xl bg-white bg-opacity-20 p-4 backdrop-blur-sm">
                <p className="text-sm opacity-75">Minutes d'exercice</p>
                <p className="text-2xl font-bold">196</p>
              </div>
              <div className="rounded-xl bg-white bg-opacity-20 p-4 backdrop-blur-sm">
                <p className="text-sm opacity-75">Calories brûlées</p>
                <p className="text-2xl font-bold">1,248</p>
              </div>
              <div className="rounded-xl bg-white bg-opacity-20 p-4 backdrop-blur-sm">
                <p className="text-sm opacity-75">Défis actifs</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
            <Button asChild className="bg-white text-fitness-primary hover:bg-white hover:bg-opacity-90">
              <Link to="/start-workout">
                Commencer un entraînement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Statistics and Progress */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Votre progression</h2>
                <Link to="/progress" className="text-sm text-fitness-primary hover:underline">
                  Voir tout
                </Link>
              </div>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center gap-2">
                    <ChartBar className="h-5 w-5 text-fitness-primary" />
                    Activité des 7 derniers jours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <WorkoutMetricsChart />
                </CardContent>
              </Card>
            </section>

            {/* Next Workout */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Prochain entraînement</h2>
                <Link to="/workout-plans" className="text-sm text-fitness-primary hover:underline">
                  Voir tous les plans
                </Link>
              </div>
              <NextWorkoutCard />
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Today's Goals */}
            <section>
              <h2 className="mb-4 text-xl font-bold">Objectifs du jour</h2>
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    <li className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fitness-light text-fitness-primary">
                          <Dumbbell className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Séance d'entraînement</p>
                          <p className="text-sm text-muted-foreground">45 minutes</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Démarrer</Button>
                    </li>
                    <li className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fitness-light text-fitness-primary">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Planifier la semaine</p>
                          <p className="text-sm text-muted-foreground">Définir des objectifs</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Planifier</Button>
                    </li>
                    <li className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fitness-light text-fitness-primary">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Défi de la semaine</p>
                          <p className="text-sm text-muted-foreground">2.5km restants</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Voir</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Friend Activity */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Activité des amis</h2>
                <Link to="/social" className="text-sm text-fitness-primary hover:underline">
                  Voir tout
                </Link>
              </div>
              <div className="space-y-4">
                <FriendActivityCard
                  name="Sophie B."
                  avatar="/placeholder.svg"
                  activity="A terminé 30 min de yoga"
                  time="Il y a 20 min"
                />
                <FriendActivityCard
                  name="Thomas L."
                  avatar="/placeholder.svg"
                  activity="A battu son record de squat"
                  time="Il y a 1 heure"
                />
                <FriendActivityCard
                  name="Julie M."
                  avatar="/placeholder.svg"
                  activity="A commencé un défi de course"
                  time="Il y a 2 heures"
                />
              </div>
              <div className="mt-4">
                <Button className="w-full" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Inviter des amis
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
