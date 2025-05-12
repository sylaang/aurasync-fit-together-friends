// api.ts

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("L'URL de l'API n'est pas définie dans les variables d'environnement.");
}

export const fetchWorkoutData = async (planId: string, workoutId: string) => {
  const workoutUrl = `${apiUrl}/workout-plans/${planId}/workouts/${workoutId}/`;

  try {
    const response = await fetch(workoutUrl);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'exercice');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'exercice :', error);
    throw error;
  }
};
