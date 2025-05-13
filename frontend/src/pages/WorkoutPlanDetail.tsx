import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Dumbbell, List } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkoutPlanDetail = () => {
  const { slug } = useParams();
  console.log("ID récupéré depuis l'URL :", slug);
  const navigate = useNavigate();
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("ID récupéré:", slug);  // <-- Vérifie l'ID ici
    console.log("API URL utilisée :", import.meta.env.VITE_API_URL);
      if (!slug) {
    setError("L'ID du programme est introuvable.");
    setLoading(false);
    return;
  }
    fetch(`${import.meta.env.VITE_API_URL}/workout-plans/${slug}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Problème avec la récupération des données de l\'API');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Données récupérées:', data);
        setWorkoutPlan(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Une erreur est survenue lors de la récupération du plan.');
        setLoading(false);
      });
  }, [slug]);

    // Ici, on ajoute la vérification de l'état de chargement, de l'erreur et des données manquantes
    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;
    if (!workoutPlan || !workoutPlan.weeks || workoutPlan.weeks.length === 0) {
      return <div>Aucune donnée disponible.</div>;
    }

  const startFirstWorkout = () => {
    if (workoutPlan && workoutPlan.weeks.length > 0 && workoutPlan.weeks[0].workouts.length > 0) {
      const firstWorkout = workoutPlan.weeks[0].workouts[0];
      navigate(`/workout-plans/${slug}/workout/${firstWorkout.id}`);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout>
      <div className="container px-4 py-8">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" className="mr-4" onClick={() => navigate(-1)}>
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
                              onClick={() => navigate(`/workout-plans/${slug}/workout/${workout.id}`)}
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
