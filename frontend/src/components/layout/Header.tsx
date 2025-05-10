
import React, { useState } from "react";
import { Bell, Menu, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-fitness-primary text-white">
              <span className="font-bold">FTF</span>
            </div>
            <span className="hidden text-lg font-bold text-fitness-primary md:block">
              Fit Together Friends
            </span>
          </Link>
        </div>
        
        <nav className={`${isMenuOpen ? 'absolute left-0 right-0 top-16 border-b bg-background p-4' : 'hidden'} flex-col space-y-2 md:static md:flex md:flex-row md:items-center md:space-x-6 md:space-y-0`}>
          <Link to="/" className="text-foreground hover:text-fitness-primary transition-colors">
            Accueil
          </Link>
          <Link to="/workout-plans" className="text-foreground hover:text-fitness-primary transition-colors">
            Plans d'entraînement
          </Link>
          <Link to="/progress" className="text-foreground hover:text-fitness-primary transition-colors">
            Progrès
          </Link>
          <Link to="/social" className="text-foreground hover:text-fitness-primary transition-colors">
            Social
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-fitness-accent"></span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-fitness-light text-fitness-primary">US</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
