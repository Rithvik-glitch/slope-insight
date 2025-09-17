import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  status: "safe" | "warning" | "danger" | "critical";
  trend?: string;
}

const StatusCard = ({ title, value, description, icon: Icon, status, trend }: StatusCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "safe": return "bg-success text-success-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      case "danger": return "bg-destructive text-destructive-foreground";
      case "critical": return "bg-critical text-critical-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "safe": return "SAFE";
      case "warning": return "CAUTION";
      case "danger": return "ALERT";
      case "critical": return "CRITICAL";
      default: return "UNKNOWN";
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-industrial">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Icon className="h-4 w-4 text-muted-foreground" />
          <Badge className={`text-xs font-semibold ${getStatusColor()}`}>
            {getStatusLabel()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
        {trend && (
          <p className="text-xs text-accent font-medium mt-2">
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusCard;