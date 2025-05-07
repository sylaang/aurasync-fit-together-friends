
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Clock, FlameIcon, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import WorkoutPlanCard from "@/components/workouts/WorkoutPlanCard";
import { Badge } from "@/components/ui/badge";

const StartWorkout = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample workout categories
  const categories = [
    { id: "all", name: "Tous" },
    { id: "strength", name: "Force" },
    { id: "cardio", name: "Cardio" },
    { id: "flexibility", name: "Flexibilité" },
    { id: "hiit", name: "HIIT" },
  ];

  // Sample quick workout options
  const quickWorkouts = [
    {
      title: "HIIT Express",
      duration: "15 min",
      intensity: "Intense",
      calories: "180",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
    },
    {
      title: "Stretching Complet",
      duration: "20 min",
      intensity: "Facile",
      calories: "80",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      title: "Circuit Training",
      duration: "30 min",
      intensity: "Modéré",
      calories: "240",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
  ];

  // Sample recommended programs
  const recommendedPrograms = [
    {
      title: "Programme perte de poids",
      description: "Combinaison optimale de cardio et renforcement pour maximiser la perte de poids",
      duration: "8 semaines",
      level: "Intermédiaire",
      category: "Perte de poids",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      progress: 35,
      recommended: true,
      id: "programme-perte-de-poids"
    },
    {
      title: "Prise de masse musculaire",
      description: "Plan de musculation progressif pour développer votre force et votre masse musculaire",
      duration: "12 semaines",
      level: "Intermédiaire/Avancé",
      category: "Musculation",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      progress: 0,
      recommended: true,
      id: "prise-de-masse-musculaire"
    },
  ];

  return (
    <Layout>
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Commencer un entraînement</h1>
          <p className="text-muted-foreground">
            Choisissez un entraînement rapide ou suivez un programme complet
          </p>
        </div>

        <Tabs defaultValue="quick" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="quick">Entraînement rapide</TabsTrigger>
            <TabsTrigger value="program">Programmes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="quick">
            <div className="grid gap-6 md:grid-cols-3">
              {quickWorkouts.map((workout, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-all duration-200">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={workout.image}
                      alt={workout.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg">{workout.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{workout.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dumbbell className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{workout.intensity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FlameIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{workout.calories} cal</span>
                      </div>
                    </div>
                    <Button className="w-full" onClick={() => navigate(`/workout-exercise/${index}`)}>
                      Démarrer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="program">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filtrer par:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge 
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommendedPrograms.map((program, index) => (
                <WorkoutPlanCard
                  key={index}
                  {...program}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Card className="bg-fitness-light border-none">
          <CardHeader>
            <CardTitle className="text-center text-fitness-primary">Vous ne trouvez pas ce que vous cherchez?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-muted-foreground">Explorez notre bibliothèque complète de plans d'entraînement</p>
            <Button onClick={() => navigate('/workout-plans')}>
              Voir tous les plans
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StartWorkout;
