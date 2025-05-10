
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="rounded-full bg-fitness-light p-6">
        <Dumbbell className="h-16 w-16 text-fitness-primary" />
      </div>
      <h1 className="mt-8 text-4xl font-bold text-fitness-primary">404</h1>
      <h2 className="mb-2 mt-4 text-2xl font-semibold">Page non trouvée</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        Oops ! La page que vous cherchez n'existe pas. Peut-être avez-vous fait une erreur de frappe ou la page a été déplacée.
      </p>
      <Button asChild size="lg">
        <Link to="/">Retour à l'accueil</Link>
      </Button>
    </div>
  );
};

export default NotFound;
