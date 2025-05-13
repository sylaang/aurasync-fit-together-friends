// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, ChevronRight, Dumbbell, List } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const WorkoutPlanDetail = () => {
//   const { id } = useParams();
//   console.log("ID récupéré depuis l'URL :", id);
//   const navigate = useNavigate();
//   const [workoutPlan, setWorkoutPlan] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("ID récupéré:", id);  // <-- Vérifie l'ID ici
//     console.log("API URL utilisée :", import.meta.env.VITE_API_URL);
//       if (!id) {
//     setError("L'ID du programme est introuvable.");
//     setLoading(false);
//     return;
//   }
//     fetch(`${import.meta.env.VITE_API_URL}/workout-plans/${id}/`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Problème avec la récupération des données de l\'API');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Données récupérées:', data);
//         setWorkoutPlan(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Une erreur est survenue lors de la récupération du plan.');
//         setLoading(false);
//       });
//   }, [id]);

//     // Ici, on ajoute la vérification de l'état de chargement, de l'erreur et des données manquantes
//     if (loading) return <div>Chargement...</div>;
//     if (error) return <div>{error}</div>;
//     if (!workoutPlan || !workoutPlan.weeks || workoutPlan.weeks.length === 0) {
//       return <div>Aucune donnée disponible.</div>;
//     }

//   const startFirstWorkout = () => {
//     if (workoutPlan && workoutPlan.weeks.length > 0 && workoutPlan.weeks[0].workouts.length > 0) {
//       const firstWorkout = workoutPlan.weeks[0].workouts[0];
//       navigate(`/workout-plans/${id}/workout/${firstWorkout.id}`);
//     }
//   };

//   if (loading) return <div>Chargement...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <Layout>
//       <div className="container px-4 py-8">
//         <div className="mb-8 flex items-center">
//           <Button variant="ghost" className="mr-4" onClick={() => navigate(-1)}>
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Retour
//           </Button>
//           <h1 className="text-3xl font-bold">{workoutPlan.title}</h1>
//         </div>

//         <div className="mb-8 grid gap-6 md:grid-cols-3">
//           <div className="md:col-span-2">
//             <div className="mb-6 overflow-hidden rounded-lg">
//               <img src={workoutPlan.image} alt={workoutPlan.title} className="h-64 w-full object-cover" />
//             </div>
//             <div className="mb-6">
//               <h2 className="mb-2 text-xl font-semibold">À propos de ce plan</h2>
//               <p className="text-muted-foreground">{workoutPlan.description}</p>
//             </div>

//             <div className="mb-6">
//               <h2 className="mb-2 text-xl font-semibold">Structure du programme</h2>
//               <div className="space-y-4">
//                 {workoutPlan.weeks.map((week) => (
//                   <Card key={week.id}>
//                     <CardHeader className="p-4 pb-2">
//                       <CardTitle className="text-lg">{week.name}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-4">
//                       <ul className="space-y-2">
//                         {week.workouts.map((workout) => (
//                           <li key={workout.id}>
//                             <Button 
//                               variant="outline" 
//                               className="w-full justify-between"
//                               onClick={() => navigate(`/workout-plans/${id}/workout/${workout.id}`)}
//                             >
//                               <div className="flex items-center">
//                                 <List className="mr-2 h-4 w-4" />
//                                 <span>{workout.name}</span>
//                               </div>
//                               <ChevronRight className="h-4 w-4" />
//                             </Button>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div>
//             <Card>
//               <CardHeader className="p-4 pb-2">
//                 <CardTitle className="text-lg">Commencer</CardTitle>
//               </CardHeader>
//               <CardContent className="p-4">
//                 <div className="space-y-4">
//                   <p className="text-sm text-muted-foreground">Prêt à commencer ce programme d'entraînement? Cliquez sur le bouton ci-dessous pour démarrer votre premier entraînement.</p>
//                   <Button className="w-full" onClick={startFirstWorkout}>
//                     <Dumbbell className="mr-2 h-4 w-4" />
//                     Commencer l'entraînement
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default WorkoutPlanDetail;







import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, ChevronRight, Dumbbell, List } from "lucide-react";

const WorkoutPlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dans une application réelle, nous récupérerions les détails du plan d'entraînement
  // en fonction de l'ID depuis une base de données
  const workoutPlan = {
    id,
    title: "Plan d'entraînement",
    description: "Description détaillée du plan d'entraînement comprenant les objectifs, la méthodologie et les résultats attendus.",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d",
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
  };

  // Fonction pour démarrer le premier entraînement
  const startFirstWorkout = () => {
    if (workoutPlan.weeks.length > 0 && workoutPlan.weeks[0].workouts.length > 0) {
      const firstWorkout = workoutPlan.weeks[0].workouts[0];
      navigate(`/workout-plans/${id}/workout/${firstWorkout.id}`);
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
                        <span>8 semaines</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sessions:</span>
                        <span>24 entraînements</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Niveau:</span>
                        <span>Intermédiaire</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Équipement:</span>
                        <span>Minimal</span>
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

