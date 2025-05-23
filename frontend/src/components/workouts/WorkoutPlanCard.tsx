
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface WorkoutPlanCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  image: string;
  progress?: number;
  recommended?: boolean;
  id?: string;
}

const WorkoutPlanCard = ({
  title,
  description,
  duration,
  level,
  category,
  image,
  progress,
  recommended = false,
  id,
}: WorkoutPlanCardProps) => {
  const navigate = useNavigate();
  
  // Générer un ID cohérent basé sur le titre si aucun ID n'est fourni
  const getPlanId = () => {
    if (id) return id;
    
    // Sinon, créer un ID basé sur le titre
    if (title.includes("perte de poids")) return "programme-perte-de-poids";
    if (title.includes("masse musculaire")) return "prise-de-masse-musculaire";
    if (title.includes("Débutant")) return "debutant-fitness";
    if (title.includes("Marathon")) return "marathon-preparation";
    if (title.includes("Yoga")) return "yoga-flexibilite";
    if (title.includes("HIIT")) return "hiit-challenge";
    
    // Si aucune correspondance, utiliser un ID par défaut basé sur le titre
    return title.toLowerCase().replace(/\s+/g, '-');
  };
  
  const handleViewPlan = () => {
    const planId = getPlanId();
    console.log(`Navigating to plan: ${planId}`);
    navigate(`/workout-plans/${planId}`);
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {recommended && (
          <Badge className="absolute right-2 top-2 bg-fitness-accent">Recommandé</Badge>
        )}
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Durée</p>
            <p className="font-medium">{duration}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Niveau</p>
            <p className="font-medium">{level}</p>
          </div>
          <div className="col-span-2">
            <p className="text-muted-foreground">Type</p>
            <p className="font-medium">{category}</p>
          </div>
        </div>
        
        {progress !== undefined && (
          <div className="mb-2 space-y-1">
            <div className="flex justify-between text-xs">
              <span>Progression</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={handleViewPlan}>
          {progress !== undefined ? "Continuer" : "Voir le plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutPlanCard;
