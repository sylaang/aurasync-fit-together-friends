
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, ChevronRight, Dumbbell, Play, Timer, Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const WorkoutExercise = () => {
  const { id, workoutId } = useParams();
  const navigate = useNavigate();

  // Dans une application réelle, récupérer les données depuis une API
  const findWorkout = () => {
    const workoutPlans = {
      weeks: [
        {
          id: "week1",
          name: "Semaine 1: Introduction",
          workouts: [
            { 
              id: "w1d1", 
              name: "Jour 1: Haut du corps", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Pompes", sets: 3, reps: "10-12", rest: "60s", video: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b", description: "Position de planche, fléchissez les coudes pour descendre puis remontez" },
                { id: "ex2", name: "Développé haltères", sets: 3, reps: "8-10", rest: "90s", video: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61", description: "Assis sur un banc, poussez les haltères vers le haut puis redescendez lentement" },
                { id: "ex3", name: "Tractions assistées", sets: 3, reps: "8-10", rest: "90s", video: "https://images.unsplash.com/photo-1598971639058-a82585e1f9e9", description: "Utilisez une machine d'assistance ou des élastiques pour vous aider à réaliser les tractions" }
              ]
            },
            { 
              id: "w1d2", 
              name: "Jour 2: Bas du corps", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Squats", sets: 4, reps: "12-15", rest: "60s", video: "https://images.unsplash.com/photo-1574680096145-d05b474e2155", description: "Pieds écartés à la largeur des épaules, descendez comme pour s'asseoir puis remontez" },
                { id: "ex2", name: "Fentes avant", sets: 3, reps: "10 par jambe", rest: "60s", video: "https://images.unsplash.com/photo-1434608519344-49d77a124f9a", description: "Faites un grand pas en avant, fléchissez les genoux puis remontez" }
              ]
            },
            { 
              id: "w1d3", 
              name: "Jour 3: Cardio", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Course à pied", sets: 1, reps: "20 minutes", rest: "0s", video: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5", description: "Courez à un rythme modéré pendant 20 minutes" },
                { id: "ex2", name: "Jumping Jacks", sets: 3, reps: "45 secondes", rest: "30s", video: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e", description: "Sautez en écartant les jambes et en levant les bras au-dessus de la tête" }
              ]
            },
            { 
              id: "w1d4", 
              name: "Jour 4: Récupération active", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Étirements généraux", sets: 1, reps: "15 minutes", rest: "0s", video: "https://images.unsplash.com/photo-1506126613408-eca07ce68773", description: "Série d'étirements pour tout le corps, maintenez chaque position 30 secondes" },
                { id: "ex2", name: "Marche légère", sets: 1, reps: "20 minutes", rest: "0s", video: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8", description: "Marchez à un rythme léger pour favoriser la récupération" }
              ]
            }
          ]
        },
        {
          id: "week2",
          name: "Semaine 2: Progression",
          workouts: [
            { 
              id: "w2d1", 
              name: "Jour 1: Haut du corps intensif", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Pompes déclinées", sets: 3, reps: "10-12", rest: "60s", video: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b", description: "Pompes avec les pieds surélevés pour augmenter la difficulté" },
                { id: "ex2", name: "Développé incliné", sets: 4, reps: "8-10", rest: "90s", video: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61", description: "Sur un banc incliné, poussez les haltères vers le haut" }
              ]
            },
            { 
              id: "w2d2", 
              name: "Jour 2: Bas du corps intensif", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Squats sautés", sets: 4, reps: "10-12", rest: "60s", video: "https://images.unsplash.com/photo-1574680096145-d05b474e2155", description: "Réalisez un squat puis sautez en extension" },
                { id: "ex2", name: "Fentes sautées", sets: 3, reps: "8 par jambe", rest: "90s", video: "https://images.unsplash.com/photo-1434608519344-49d77a124f9a", description: "Alternez les jambes avec un saut entre chaque répétition" }
              ]
            },
            { 
              id: "w2d3", 
              name: "Jour 3: HIIT", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Burpees", sets: 4, reps: "45 secondes", rest: "15s", video: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e", description: "Mouvement complet: squat, planche, pompe, saut vertical" },
                { id: "ex2", name: "Mountain climbers", sets: 4, reps: "45 secondes", rest: "15s", video: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3", description: "En position de planche, ramenez alternativement les genoux vers la poitrine" }
              ]
            },
            { 
              id: "w2d4", 
              name: "Jour 4: Récupération", 
              completed: false,
              exercises: [
                { id: "ex1", name: "Yoga doux", sets: 1, reps: "20 minutes", rest: "0s", video: "https://images.unsplash.com/photo-1506126613408-eca07ce68773", description: "Séance de yoga axée sur la respiration et les étirements profonds" },
                { id: "ex2", name: "Automassage", sets: 1, reps: "10 minutes", rest: "0s", video: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1", description: "Utilisez un rouleau de massage pour détendre les muscles" }
              ]
            }
          ]
        }
      ]
    };

    // Trouver le bon entraînement dans les semaines
    let workout = null;
    for (const week of workoutPlans.weeks) {
      const found = week.workouts.find(w => w.id === workoutId);
      if (found) {
        workout = found;
        break;
      }
    }
    return workout;
  };

  const workout = findWorkout();

  if (!workout) {
    return (
      <Layout>
        <div className="container px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Entraînement non trouvé</h1>
          <Button onClick={() => navigate(`/workout-plans/${id}`)}>
            Retour au plan d'entraînement
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 py-8">
        <div className="mb-8 flex items-center">
          <Button 
            variant="ghost" 
            className="mr-4" 
            onClick={() => navigate(`/workout-plans/${id}`)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au plan
          </Button>
          <h1 className="text-3xl font-bold">{workout.name}</h1>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Aperçu de la séance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                      <Dumbbell className="h-6 w-6 mb-2 text-fitness-primary" />
                      <p className="text-muted-foreground text-sm">Exercices</p>
                      <p className="font-semibold">{workout.exercises.length}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                      <Timer className="h-6 w-6 mb-2 text-fitness-primary" />
                      <p className="text-muted-foreground text-sm">Durée estimée</p>
                      <p className="font-semibold">30-45 min</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                      <Calendar className="h-6 w-6 mb-2 text-fitness-primary" />
                      <p className="text-muted-foreground text-sm">Fréquence</p>
                      <p className="font-semibold">1x / semaine</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Exercices</h2>
              
              {workout.exercises.map((exercise, index) => (
                <Card key={exercise.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img 
                        src={exercise.video} 
                        alt={exercise.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exercise.name}</h3>
                          <p className="text-muted-foreground">Exercice {index + 1}/{workout.exercises.length}</p>
                        </div>
                        <Button size="sm" className="flex gap-1">
                          <Play className="h-4 w-4" />
                          Vidéo
                        </Button>
                      </div>
                      
                      <p className="mb-4">{exercise.description}</p>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-muted rounded p-2 text-center">
                          <p className="text-xs text-muted-foreground">Séries</p>
                          <p className="font-medium">{exercise.sets}</p>
                        </div>
                        <div className="bg-muted rounded p-2 text-center">
                          <p className="text-xs text-muted-foreground">Répétitions</p>
                          <p className="font-medium">{exercise.reps}</p>
                        </div>
                        <div className="bg-muted rounded p-2 text-center">
                          <p className="text-xs text-muted-foreground">Repos</p>
                          <p className="font-medium">{exercise.rest}</p>
                        </div>
                      </div>
                      
                      <Progress value={0} className="h-1.5 mb-2" />
                      <div className="flex justify-between text-xs">
                        <span>Progression</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="sticky top-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Commencer l'entraînement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Suivez votre séance en temps réel et enregistrez votre progression.
                  </p>
                  
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Démarrer la séance
                  </Button>
                  
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-medium">Conseils</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-fitness-primary shrink-0" />
                        <span>Hydratez-vous régulièrement</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-fitness-primary shrink-0" />
                        <span>Échauffez-vous pendant 5-10 minutes</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-fitness-primary shrink-0" />
                        <span>Respectez les temps de repos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkoutExercise;
