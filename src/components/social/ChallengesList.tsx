
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ChallengesList = () => {
  const activeChallenges = [
    {
      id: 1,
      title: "10K en 30 jours",
      description: "Courez 10km sur une période de 30 jours",
      progress: 65,
      participants: [
        { name: "Sophie B.", avatar: "/placeholder.svg" },
        { name: "Thomas L.", avatar: "/placeholder.svg" },
        { name: "Julie M.", avatar: "/placeholder.svg" },
        { name: "Lucas P.", avatar: "/placeholder.svg" },
      ],
      daysLeft: 12,
    },
    {
      id: 2,
      title: "Challenge Pompes",
      description: "100 pompes par jour pendant 7 jours",
      progress: 42,
      participants: [
        { name: "Thomas L.", avatar: "/placeholder.svg" },
        { name: "Antoine R.", avatar: "/placeholder.svg" },
      ],
      daysLeft: 4,
    },
  ];

  const popularChallenges = [
    {
      id: 3,
      title: "30 jours de squat",
      description: "De 20 à 100 squats en un mois",
      participants: 152,
      difficulty: "Intermédiaire",
      duration: "30 jours",
    },
    {
      id: 4,
      title: "Défi planche",
      description: "Augmenter progressivement votre temps de planche",
      participants: 98,
      difficulty: "Tous niveaux",
      duration: "21 jours",
    },
    {
      id: 5,
      title: "Marathon virtuel",
      description: "Courez 42.2km sur 2 semaines",
      participants: 64,
      difficulty: "Avancé",
      duration: "14 jours",
    },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-xl font-bold">Vos défis actifs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {activeChallenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardHeader>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span className="font-medium">{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {challenge.participants.slice(0, 4).map((participant, i) => (
                      <Avatar key={i} className="border-2 border-background h-8 w-8">
                        <AvatarImage src={participant.avatar} alt={participant.name} />
                        <AvatarFallback className="text-xs bg-fitness-light text-fitness-primary">
                          {participant.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {challenge.participants.length > 4 && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                        +{challenge.participants.length - 4}
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {challenge.daysLeft} jours restants
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Voir détails</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Défis populaires</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {popularChallenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-medium">{challenge.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{challenge.description}</p>
                
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Participants</span>
                    <span>{challenge.participants}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Difficulté</span>
                    <span>{challenge.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Durée</span>
                    <span>{challenge.duration}</span>
                  </div>
                </div>
                
                <Button className="w-full">Rejoindre le défi</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy mb-4 text-muted-foreground"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 22v-8.3a4 4 0 0 1 4 0V22"/><path d="M15 5.5V1"/><path d="M9 5.5V1"/><path d="M9 9c0 3.5 5.5 3.5 5.5 0"/></svg>
            <h3 className="mb-2 text-xl font-medium">Créez votre propre défi</h3>
            <p className="mb-6 max-w-md text-muted-foreground">
              Créez un défi personnalisé et invitez vos amis à se joindre à vous pour atteindre vos objectifs ensemble
            </p>
            <Button>Créer un défi</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ChallengesList;
