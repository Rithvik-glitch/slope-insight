import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, MapPin, Phone } from "lucide-react";

const AlertPanel = () => {
  const alerts = [
    {
      id: 1,
      severity: "critical",
      location: "Sector A-12",
      message: "High displacement detected - 15mm in 2 hours",
      time: "2 minutes ago",
      probability: "87%"
    },
    {
      id: 2,
      severity: "warning",
      location: "Sector B-05",
      message: "Increased seismic activity - Magnitude 2.1",
      time: "15 minutes ago",
      probability: "34%"
    },
    {
      id: 3,
      severity: "danger",
      location: "Sector C-08",
      message: "Weather alert - Heavy rainfall forecast",
      time: "1 hour ago",
      probability: "62%"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-critical text-critical-foreground";
      case "danger": return "bg-destructive text-destructive-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <span>Active Alerts</span>
          <Badge variant="secondary" className="ml-auto">
            {alerts.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="border-l-4 border-warning pl-4 py-2">
            <div className="flex items-start justify-between">
              <div className="space-y-1 flex-1">
                <div className="flex items-center space-x-2">
                  <Badge className={`text-xs ${getSeverityColor(alert.severity)}`}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <span className="text-sm font-medium">Risk: {alert.probability}</span>
                </div>
                <p className="text-sm text-foreground">{alert.message}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="ml-2">
                <Phone className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <Button className="w-full" variant="outline">
            View All Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertPanel;