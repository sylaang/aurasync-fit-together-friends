
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const SocialFeed = () => {
  return (
    <div className="space-y-6">
      {/* Post creation */}
      <Card>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Utilisateur" />
              <AvatarFallback className="bg-fitness-light text-fitness-primary">US</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground">Partagez vos progrès avec vos amis...</span>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <Textarea placeholder="Qu'est-ce que vous avez accompli aujourd'hui ?" className="h-24" />
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Ajouter une photo</Button>
            <Button variant="outline" size="sm">Exercice</Button>
          </div>
          <Button>Publier</Button>
        </CardFooter>
      </Card>

      {/* Posts */}
      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 p-4 pb-0">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Sophie B." />
              <AvatarFallback className="bg-fitness-light text-fitness-primary">SB</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Sophie B.</div>
              <div className="text-xs text-muted-foreground">Il y a 20 minutes</div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <p>J'ai terminé ma séance de yoga matinale ! 30 minutes de sérénité pour bien commencer la journée. 🧘‍♀️ #Yoga #BienÊtre</p>
            <div className="mt-4 rounded-lg bg-muted h-48 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Image de yoga</span>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  <span>12</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  <span>3</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 p-4 pb-0">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Thomas L." />
              <AvatarFallback className="bg-fitness-light text-fitness-primary">TL</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Thomas L.</div>
              <div className="text-xs text-muted-foreground">Il y a 1 heure</div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <p>Nouveau record personnel au squat aujourd'hui : 120kg ! 💪 Cela fait des mois que je travaille pour ça. Prochain objectif : 130kg.</p>
            <div className="mt-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Squat - Record personnel</div>
                    <div className="text-2xl font-bold text-fitness-primary">120kg</div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fitness-light text-fitness-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 22v-8.3a4 4 0 0 1 4 0V22"/><path d="M15 5.5V1"/><path d="M9 5.5V1"/><path d="M9 9c0 3.5 5.5 3.5 5.5 0"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                  <span>24</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                  <span>7</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SocialFeed;
