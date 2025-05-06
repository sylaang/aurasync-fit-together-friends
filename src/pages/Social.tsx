
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Trophy, Users } from "lucide-react";
import FriendsList from "@/components/social/FriendsList";
import SocialFeed from "@/components/social/SocialFeed";
import ChallengesList from "@/components/social/ChallengesList";

const Social = () => {
  return (
    <Layout>
      <div className="container px-4 py-8">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Communauté</h1>
          <p className="text-muted-foreground">Connectez-vous avec des amis et relevez des défis ensemble</p>
        </header>

        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="feed">Fil d'actualité</TabsTrigger>
            <TabsTrigger value="friends">Amis</TabsTrigger>
            <TabsTrigger value="challenges">Défis</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="pt-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <SocialFeed />
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="h-5 w-5 text-fitness-primary" />
                      Suggestions d'amis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted" />
                          <div>
                            <p className="font-medium">Alexandre D.</p>
                            <p className="text-sm text-muted-foreground">3 amis en commun</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ajouter
                        </Button>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted" />
                          <div>
                            <p className="font-medium">Léa F.</p>
                            <p className="text-sm text-muted-foreground">5 amis en commun</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ajouter
                        </Button>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted" />
                          <div>
                            <p className="font-medium">Nicolas T.</p>
                            <p className="text-sm text-muted-foreground">1 ami en commun</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ajouter
                        </Button>
                      </li>
                    </ul>
                    <Button variant="link" className="mt-2 w-full">
                      Voir plus
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Trophy className="h-5 w-5 text-fitness-primary" />
                      Défis populaires
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">10K en 30 jours</p>
                          <span className="text-xs text-muted-foreground">243 participants</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Courez 10km sur une période de 30 jours
                        </p>
                        <Button size="sm" className="mt-2 w-full">
                          Rejoindre
                        </Button>
                      </li>
                      <li className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Challenge Pompes</p>
                          <span className="text-xs text-muted-foreground">129 participants</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          100 pompes par jour pendant 7 jours
                        </p>
                        <Button size="sm" className="mt-2 w-full">
                          Rejoindre
                        </Button>
                      </li>
                    </ul>
                    <Button variant="link" className="mt-2 w-full">
                      Voir tous les défis
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="friends" className="pt-6">
            <FriendsList />
          </TabsContent>

          <TabsContent value="challenges" className="pt-6">
            <ChallengesList />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Social;
