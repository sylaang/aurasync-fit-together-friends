
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, ChevronRight, Dumbbell, List } from "lucide-react";
import { toast } from "sonner";

// Base de données fictive des plans d'entraînement
const workoutPlansData = {
  // Programme perte de poids
  "programme-perte-de-poids": {
    id: "programme-perte-de-poids",
    title: "Programme perte de poids",
    description: "Un programme d'entraînement de 8 semaines conçu pour maximiser la perte de graisse tout en maintenant votre masse musculaire. Ce plan combine des exercices cardiovasculaires et de renforcement dans un format HIIT (High-Intensity Interval Training) pour optimiser la dépense calorique.",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d",
    duration: "8 semaines",
    sessions: "24 entraînements",
    level: "Intermédiaire", 
    equipment: "Minimal",
    weeks: [
      {
        id: "week1",
        name: "Semaine 1: Préparation Cardio",
        workouts: [
          { id: "w1d1", name: "Jour 1: Cardio léger & Core", completed: false },
          { id: "w1d2", name: "Jour 2: HIIT débutant", completed: false },
          { id: "w1d3", name: "Jour 3: Circuit full body", completed: false },
          { id: "w1d4", name: "Jour 4: Récupération active", completed: false },
        ]
      },
      {
        id: "week2",
        name: "Semaine 2: Intensification",
        workouts: [
          { id: "w2d1", name: "Jour 1: HIIT intermédiaire", completed: false },
          { id: "w2d2", name: "Jour 2: Cardio & résistance", completed: false },
          { id: "w2d3", name: "Jour 3: Tabata brûle-graisses", completed: false },
          { id: "w2d4", name: "Jour 4: Yoga détox", completed: false },
        ]
      }
    ]
  },
  
  // Prise de masse musculaire
  "prise-de-masse-musculaire": {
    id: "prise-de-masse-musculaire",
    title: "Prise de masse musculaire",
    description: "Un programme progressif pour développer votre force et votre masse musculaire avec une approche scientifique. Ce plan utilise la surcharge progressive et périodisation pour maximiser vos gains.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    duration: "12 semaines",
    sessions: "48 entraînements",
    level: "Avancé",
    equipment: "Complet",
    weeks: [
      {
        id: "week1",
        name: "Semaine 1: Fondation",
        workouts: [
          { id: "w1d1", name: "Jour 1: Push (poitrine/épaules/triceps)", completed: false },
          { id: "w1d2", name: "Jour 2: Pull (dos/biceps)", completed: false },
          { id: "w1d3", name: "Jour 3: Jambes & abdos", completed: false },
          { id: "w1d4", name: "Jour 4: Récupération", completed: false },
        ]
      },
      {
        id: "week2",
        name: "Semaine 2: Volume",
        workouts: [
          { id: "w2d1", name: "Jour 1: Chest & triceps hypertrophie", completed: false },
          { id: "w2d2", name: "Jour 2: Dos & biceps hypertrophie", completed: false },
          { id: "w2d3", name: "Jour 3: Jambes intensives", completed: false },
          { id: "w2d4", name: "Jour 4: Épaules & abdos", completed: false },
        ]
      }
    ]
  },
  
  // Débutant Fitness
  "debutant-fitness": {
    id: "debutant-fitness",
    title: "Débutant Fitness",
    description: "Commencez votre parcours fitness avec ce programme adapté aux débutants. Ce plan vous introduit progressivement aux exercices de base et vous aide à construire une fondation solide.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    duration: "4 semaines",
    sessions: "12 entraînements",
    level: "Débutant",
    equipment: "Minimal",
    weeks: [
      {
        id: "week1",
        name: "Semaine 1: Introduction",
        workouts: [
          { id: "w1d1", name: "Jour 1: Introduction aux mouvements", completed: false },
          { id: "w1d2", name: "Jour 2: Cardio débutant", completed: false },
          { id: "w1d3", name: "Jour 3: Full body léger", completed: false },
        ]
      },
      {
        id: "week2",
        name: "Semaine 2: Construction",
        workouts: [
          { id: "w2d1", name: "Jour 1: Haut du corps simple", completed: false },
          { id: "w2d2", name: "Jour 2: Bas du corps simple", completed: false },
          { id: "w2d3", name: "Jour 3: Cardio & mobilité", completed: false },
        ]
      }
    ]
  },
  
  // Marathon - Préparation
  "marathon-preparation": {
    id: "marathon-preparation",
    title: "Marathon - Préparation",
    description: "Préparez-vous pour votre premier marathon avec ce plan d'entraînement progressif qui augmentera graduellement votre endurance et votre capacité cardiovasculaire.",
    image: "https://images.unsplash.com/photo-1504025468847-0e438279542c",
    duration: "16 semaines",
    sessions: "80 entraînements",
    level: "Intermédiaire",
    equipment: "Basique (chaussures adaptées)",
    weeks: [
      {
        id: "week1",
        name: "Semaine 1: Base d'endurance",
        workouts: [
          { id: "w1d1", name: "Jour 1: Course lente 5km", completed: false },
          { id: "w1d2", name: "Jour 2: Intervals courts", completed: false },
          { id: "w1d3", name: "Jour 3: Cross-training", completed: false },
          { id: "w1d4", name: "Jour 4: Course longue 8km", completed: false },
          { id: "w1d5", name: "Jour 5: Récupération active", completed: false },
        ]
      },
      {
        id: "week2",
        name: "Semaine 2: Construction volume",
        workouts: [
          { id: "w2d1", name: "Jour 1: Course rythmique 6km", completed: false },
          { id: "w2d2", name: "Jour 2: Intervals moyens", completed: false },
          { id: "w2d3", name: "Jour 3: Cross-training & renforcement", completed: false },
          { id: "w2d4", name: "Jour 4: Course longue 10km", completed: false },
          { id: "w2d5", name: "Jour 5: Récupération active", completed: false },
        ]
      }
    ]
  },
  
  // Yoga & Flexibilité
  "yoga-flexibilite": {
    id: "yoga-flexibilite",
    title: "Yoga & Flexibilité",
    description: "Améliorez votre flexibilité et réduisez le stress avec ce programme de yoga complet adapté à tous les niveaux. Focus sur la respiration, l'alignement et la pleine conscience.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    duration: "6 semaines",
    sessions: "18 séances",
    level: "Tous niveaux",
    equipment: "Tapis de yoga",
    weeks: [
      {
        id: "week1",
        name: "Semaine 1: Fondamentaux",
        workouts: [
          { id: "w1d1", name: "Jour 1: Yoga doux & respiration", completed: false },
          { id: "w1d2", name: "Jour 2: Flexibilité du bas du corps", completed: false },
          { id: "w1d3", name: "Jour 3: Yoga pour le dos", completed: false },
        ]
      },
      {
        id: "week2",
        name: "Semaine 2: Progression",
        workouts: [
          { id: "w2d1", name: "Jour 1: Vinyasa léger", completed: false },
          { id: "w2d2", name: "Jour 2: Ouverture des hanches", completed: false },
          { id: "w2d3", name: "Jour 3: Équilibre & focus", completed: false },
        ]
      }
    ]
  },
  
  // HIIT Challenge
  "hiit-challenge": {
    id: "hiit-challenge",
    title: "HIIT Challenge",
    description: "Brûlez un maximum de calories avec ces entraînements courts mais intensifs conçus pour repousser vos limites et transformer votre métabolisme.",
    image: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3",
    duration: "4 semaines",
    sessions: "16 entraînements",
    level: "Intermédiaire",
    equipment: "Minimal",
    weeks: [
      {
        id: "week1",
        name: "Semaine 1: Introduction HIIT",
        workouts: [
          { id: "w1d1", name: "Jour 1: Tabata corps entier", completed: false },
          { id: "w1d2", name: "Jour 2: AMRAP challenge", completed: false },
          { id: "w1d3", name: "Jour 3: Intervals pyramide", completed: false },
          { id: "w1d4", name: "Jour 4: Récupération active", completed: false },
        ]
      },
      {
        id: "week2",
        name: "Semaine 2: Intensification",
        workouts: [
          { id: "w2d1", name: "Jour 1: EMOM explosif", completed: false },
          { id: "w2d2", name: "Jour 2: Tabata double", completed: false },
          { id: "w2d3", name: "Jour 3: Défi métabolique", completed: false },
          { id: "w2d4", name: "Jour 4: Mobilité & récupération", completed: false },
        ]
      }
    ]
  },
  
  // Plan par défaut (utilisé si l'ID n'est pas trouvé)
  "default": {
    id: "default",
    title: "Plan d'entraînement",
    description: "Description détaillée du plan d'entraînement comprenant les objectifs, la méthodologie et les résultats attendus.",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d",
    duration: "8 semaines",
    sessions: "24 entraînements",
    level: "Intermédiaire",
    equipment: "Minimal",
    weeks: [
      {
        id: "week1",
        name: "Semaine 1: Introduction",
        workouts: [
          { id: "w1d1", name: "Jour 1: Haut du corps", completed: false },
          { id: "w1d2", name: "Jour 2: Bas du corps", completed: false },
          { id: "w1d3", name: "Jour 3: Cardio", completed: false },
          { id: "w1d4", name: "Jour 4: Récupération active", completed: false },
        ]
      },
      {
        id: "week2",
        name: "Semaine 2: Progression",
        workouts: [
          { id: "w2d1", name: "Jour 1: Haut du corps intensif", completed: false },
          { id: "w2d2", name: "Jour 2: Bas du corps intensif", completed: false },
          { id: "w2d3", name: "Jour 3: HIIT", completed: false },
          { id: "w2d4", name: "Jour 4: Récupération", completed: false },
        ]
      }
    ]
  }
};

const WorkoutPlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Déterminer quel plan d'entraînement afficher
  const getPlanById = (planId) => {
    // Vérifier si l'identifiant correspond à un plan connu
    // Sinon on cherche un plan dont l'ID commence par les mêmes caractères (pour les IDs générés aléatoirement)
    if (workoutPlansData[planId]) {
      return workoutPlansData[planId];
    }
    
    // Pour les IDs générés par l'application, essayons de faire correspondre avec un plan existant
    if (planId.includes("perte-de-poids") || planId.startsWith("programme")) {
      return workoutPlansData["programme-perte-de-poids"];
    } else if (planId.includes("masse") || planId.includes("muscle")) {
      return workoutPlansData["prise-de-masse-musculaire"];
    } else if (planId.includes("debutant") || planId.includes("debut")) {
      return workoutPlansData["debutant-fitness"];
    } else if (planId.includes("marathon") || planId.includes("course")) {
      return workoutPlansData["marathon-preparation"];
    } else if (planId.includes("yoga") || planId.includes("flex")) {
      return workoutPlansData["yoga-flexibilite"];
    } else if (planId.includes("hiit") || planId.includes("challenge")) {
      return workoutPlansData["hiit-challenge"];
    }
    
    // Si aucune correspondance n'est trouvée, utiliser le plan par défaut
    return workoutPlansData["default"];
  };

  const workoutPlan = getPlanById(id);

  // Fonction pour démarrer le premier entraînement
  const startFirstWorkout = () => {
    if (workoutPlan.weeks.length > 0 && workoutPlan.weeks[0].workouts.length > 0) {
      const firstWorkout = workoutPlan.weeks[0].workouts[0];
      navigate(`/workout-plans/${id}/workout/${firstWorkout.id}`);
      toast.success("C'est parti pour votre premier entraînement !");
    } else {
      toast.error("Impossible de démarrer l'entraînement");
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-8">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" className="mr-4" onClick={() => navigate('/workout-plans')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <h1 className="text-3xl font-bold">{workoutPlan.title}</h1>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img src={workoutPlan.image} alt={workoutPlan.title} className="h-64 w-full object-cover" />
            </div>
            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">À propos de ce plan</h2>
              <p className="text-muted-foreground">{workoutPlan.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Structure du programme</h2>
              <div className="space-y-4">
                {workoutPlan.weeks.map((week) => (
                  <Card key={week.id}>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">{week.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        {week.workouts.map((workout) => (
                          <li key={workout.id}>
                            <Button 
                              variant="outline" 
                              className="w-full justify-between"
                              onClick={() => navigate(`/workout-plans/${id}/workout/${workout.id}`)}
                            >
                              <div className="flex items-center">
                                <List className="mr-2 h-4 w-4" />
                                <span>{workout.name}</span>
                              </div>
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Commencer</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Prêt à commencer ce programme d'entraînement? Cliquez sur le bouton ci-dessous pour démarrer votre premier entraînement.</p>
                  
                  <Button className="w-full" onClick={startFirstWorkout}>
                    <Dumbbell className="mr-2 h-4 w-4" />
                    Commencer l'entraînement
                  </Button>
                  
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-medium">Détails du plan</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Durée:</span>
                        <span>{workoutPlan.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sessions:</span>
                        <span>{workoutPlan.sessions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Niveau:</span>
                        <span>{workoutPlan.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Équipement:</span>
                        <span>{workoutPlan.equipment}</span>
                      </div>
                    </div>
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

export default WorkoutPlanDetail;
