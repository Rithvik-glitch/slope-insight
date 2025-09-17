import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Clock, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-mining.jpg";

const Home = () => {
  const stats = [
    { icon: Shield, label: "Alerts Generated", value: "1,247", description: "This month" },
    { icon: Users, label: "Lives Protected", value: "2,850", description: "Total workers" },
    { icon: TrendingUp, label: "Prediction Accuracy", value: "94.7%", description: "Last 30 days" },
    { icon: Clock, label: "Response Time", value: "< 2 min", description: "Average alert" },
  ];

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Advanced LiDAR, seismic, and weather sensors provide 24/7 slope monitoring with AI-powered analysis.",
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning algorithms analyze patterns to predict rockfall events 1-24 hours in advance.",
    },
    {
      title: "Instant Alerts",
      description: "Multi-channel notifications via SMS, email, and WhatsApp ensure immediate emergency response.",
    },
    {
      title: "Compliance Ready",
      description: "Automated reports for DGMS and Ministry of Mines ensure full regulatory compliance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI-Powered
            <span className="block text-secondary">Rockfall Prevention</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Protecting lives in open-pit mines with intelligent slope monitoring, 
            predictive analytics, and instant alert systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <a href="/dashboard">
                Start Monitoring
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Proven Results in Mine Safety
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI system has successfully protected thousands of workers and prevented 
              countless accidents across mining operations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 shadow-industrial hover:shadow-alert transition-all duration-300">
                <CardContent className="space-y-4">
                  <stat.icon className="h-12 w-12 text-accent mx-auto" />
                  <div>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Advanced Safety Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive monitoring and prediction system designed specifically 
              for the unique challenges of open-pit mining operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-data hover:shadow-industrial transition-all duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Enhance Mine Safety?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading mining companies worldwide in implementing 
            AI-powered rockfall prevention systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;