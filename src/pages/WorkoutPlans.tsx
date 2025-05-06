
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChartBar, Dumbbell, Users } from "lucide-react";
import WorkoutPlanCard from "@/components/workouts/WorkoutPlanCard";

const WorkoutPlans = () => {
  return (
    <Layout>
      <div className="container px-4 py-8">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Plans d'entraînement</h1>
          <p className="text-muted-foreground">Trouvez le plan parfait pour atteindre vos objectifs ou créez le vôtre</p>
        </header>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">Tous les plans</TabsTrigger>
              <TabsTrigger value="my-plans">Mes plans</TabsTrigger>
              <TabsTrigger value="recommended">Recommandés</TabsTrigger>
            </TabsList>
            <Button>
              <Dumbbell className="mr-2 h-4 w-4" />
              Créer un plan
            </Button>
          </div>

          <div className="mt-6">
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <WorkoutPlanCard
                  title="Programme perte de poids"
                  description="Un programme d'entraînement de 8 semaines conçu pour maximiser la perte de graisse"
                  duration="8 semaines"
                  level="Intermédiaire"
                  category="Cardio & Force"
                  image="https://images.unsplash.com/photo-1594882645126-14020914d58d"
                />
                
                <WorkoutPlanCard
                  title="Prise de masse musculaire"
                  description="Un programme progressif pour développer votre force et votre masse musculaire"
                  duration="12 semaines"
                  level="Avancé"
                  category="Musculation"
                  image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
                />
                
                <WorkoutPlanCard
                  title="Débutant Fitness"
                  description="Commencez votre parcours fitness avec ce programme pour débutants"
                  duration="4 semaines"
                  level="Débutant"
                  category="Full Body"
                  image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
                />
                
                <WorkoutPlanCard
                  title="Marathon - Préparation"
                  description="Préparez-vous pour votre premier marathon avec ce plan d'entraînement progressif"
                  duration="16 semaines"
                  level="Intermédiaire"
                  category="Course à pied"
                  image="https://images.unsplash.com/photo-1504025468847-0e438279542c"
                />
                
                <WorkoutPlanCard
                  title="Yoga & Flexibilité"
                  description="Améliorez votre flexibilité et réduisez le stress avec ce programme de yoga"
                  duration="6 semaines"
                  level="Tous niveaux"
                  category="Yoga"
                  image="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                />
                
                <WorkoutPlanCard
                  title="HIIT Challenge"
                  description="Brûlez un maximum de calories avec ces entraînements courts mais intensifs"
                  duration="4 semaines"
                  level="Intermédiaire"
                  category="HIIT"
                  image="https://images.unsplash.com/photo-1434682772747-f16d3ea162c3"
                />
              </div>
            </TabsContent>

            <TabsContent value="my-plans" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <WorkoutPlanCard
                  title="Mon plan personnalisé"
                  description="Plan adapté à mes objectifs de remise en forme"
                  duration="En cours"
                  level="Personnalisé"
                  category="Mixte"
                  image="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3"
                  progress={65}
                />
              </div>
              
              <div className="mt-8 flex justify-center">
                <Card className="w-full max-w-md border-dashed">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Dumbbell className="mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="mb-2 text-xl font-medium">Créez votre plan d'entraînement</h3>
                    <p className="mb-6 text-center text-muted-foreground">
                      Personnalisez un plan qui correspond parfaitement à vos objectifs et préférences
                    </p>
                    <Button>Créer un nouveau plan</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="recommended" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <WorkoutPlanCard
                  title="Force & Endurance"
                  description="Recommandé pour vous basé sur vos objectifs actuels"
                  duration="6 semaines"
                  level="Intermédiaire"
                  category="Force & Cardio"
                  image="https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
                  recommended={true}
                />
                
                <WorkoutPlanCard
                  title="Entraînement de groupe 30/30"
                  description="Recommandé car vos amis ont rejoint ce plan"
                  duration="4 semaines"
                  level="Tous niveaux"
                  category="Groupe"
                  image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                  recommended={true}
                />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default WorkoutPlans;
