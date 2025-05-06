
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FriendActivityCardProps {
  name: string;
  avatar: string;
  activity: string;
  time: string;
}

const FriendActivityCard = ({
  name,
  avatar,
  activity,
  time,
}: FriendActivityCardProps) => {
  return (
    <div className="flex items-start gap-3 rounded-lg border p-3 transition-all hover:bg-accent/30">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-fitness-light text-fitness-primary">{name.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-baseline justify-between">
          <p className="font-medium">{name}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground">{activity}</p>
        <div className="mt-2 flex gap-2">
          <Button variant="outline" size="sm" className="h-7 px-2">
            Féliciter
          </Button>
          <Button variant="outline" size="sm" className="h-7 px-2">
            Commenter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FriendActivityCard;
