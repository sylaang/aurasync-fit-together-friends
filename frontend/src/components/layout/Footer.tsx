
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-fitness-primary text-white">
            <span className="font-bold">FTF</span>
          </div>
          <span className="text-lg font-bold text-fitness-primary">
            Fit Together Friends
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-fitness-primary transition-colors">
            À propos
          </Link>
          <Link to="/privacy" className="hover:text-fitness-primary transition-colors">
            Confidentialité
          </Link>
          <Link to="/terms" className="hover:text-fitness-primary transition-colors">
            Conditions d'utilisation
          </Link>
          <Link to="/contact" className="hover:text-fitness-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fit Together Friends
        </div>
      </div>
    </footer>
  );
};

export default Footer;
