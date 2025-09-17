import { Button } from "@/components/ui/button";
import { Shield, Bell, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <Shield className="h-8 w-8 text-primary" />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-primary">RockWatch AI</h1>
            <p className="text-xs text-muted-foreground">Intelligent Rockfall Prediction System</p>
          </div>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <Button variant="ghost" className="text-sm font-medium" asChild>
            <a href="/dashboard">Dashboard</a>
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Monitoring
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Alerts
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Analytics
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Reports
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-warning rounded-full border-2 border-background"></span>
          </div>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;