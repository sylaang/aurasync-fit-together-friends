
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FriendsList = () => {
  const friends = [
    { id: 1, name: "Sophie B.", avatar: "/placeholder.svg", status: "En ligne", activity: "Course à pied - Il y a 3h" },
    { id: 2, name: "Thomas L.", avatar: "/placeholder.svg", status: "En ligne", activity: "Musculation - Il y a 1h" },
    { id: 3, name: "Julie M.", avatar: "/placeholder.svg", status: "Hors ligne", activity: "Yoga - Hier" },
    { id: 4, name: "Lucas P.", avatar: "/placeholder.svg", status: "Hors ligne", activity: "Natation - Il y a 2j" },
    { id: 5, name: "Émilie D.", avatar: "/placeholder.svg", status: "En ligne", activity: "HIIT - Il y a 5h" },
    { id: 6, name: "Antoine R.", avatar: "/placeholder.svg", status: "Hors ligne", activity: "Randonnée - Il y a 1s" },
  ];

  const pendingRequests = [
    { id: 1, name: "Marie L.", avatar: "/placeholder.svg" },
    { id: 2, name: "David S.", avatar: "/placeholder.svg" },
  ];

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <Input
            placeholder="Rechercher des amis"
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Tous ({friends.length})</TabsTrigger>
          <TabsTrigger value="online">En ligne (3)</TabsTrigger>
          <TabsTrigger value="requests">Demandes ({pendingRequests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="pt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {friends.map((friend) => (
              <Card key={friend.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback className="bg-fitness-light text-fitness-primary">{friend.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${friend.status === "En ligne" ? "bg-green-500" : "bg-gray-300"}`}></span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{friend.name}</p>
                      <p className="text-xs text-muted-foreground">{friend.activity}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Profil</Button>
                    <Button size="sm" className="flex-1">Message</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="online" className="pt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {friends
              .filter((friend) => friend.status === "En ligne")
              .map((friend) => (
                <Card key={friend.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={friend.avatar} alt={friend.name} />
                          <AvatarFallback className="bg-fitness-light text-fitness-primary">{friend.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{friend.name}</p>
                        <p className="text-xs text-muted-foreground">{friend.activity}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">Profil</Button>
                      <Button size="sm" className="flex-1">Message</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="pt-6">
          {pendingRequests.length > 0 ? (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={request.avatar} alt={request.name} />
                        <AvatarFallback className="bg-fitness-light text-fitness-primary">{request.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">{request.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Refuser</Button>
                      <Button size="sm">Accepter</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-muted-foreground"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h3 className="mt-4 text-lg font-medium">Aucune demande en attente</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Vous n'avez pas de demandes d'amis en attente pour le moment.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FriendsList;
