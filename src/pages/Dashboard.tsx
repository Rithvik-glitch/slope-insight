import Header from "@/components/layout/Header";
import StatusCard from "@/components/dashboard/StatusCard";
import AlertPanel from "@/components/dashboard/AlertPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Mountain, Thermometer, Gauge, TrendingUp, Zap } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Live Monitoring Dashboard</h1>
          <p className="text-muted-foreground">Real-time slope stability monitoring and rockfall prediction</p>
        </div>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatusCard
            title="Slope Stability"
            value="STABLE"
            description="All sectors within normal range"
            icon={Mountain}
            status="safe"
            trend="↓ 2.3% from yesterday"
          />
          <StatusCard
            title="Seismic Activity"
            value="1.8M"
            description="Current magnitude reading"
            icon={Activity}
            status="warning"
            trend="↑ 0.4M increase"
          />
          <StatusCard
            title="Weather Conditions"
            value="23°C"
            description="Clear, low precipitation"
            icon={Thermometer}
            status="safe"
            trend="Favorable for operations"
          />
          <StatusCard
            title="LiDAR Displacement"
            value="2.1mm"
            description="24-hour movement detected"
            icon={Gauge}
            status="warning"
            trend="↑ Above threshold"
          />
          <StatusCard
            title="Prediction Confidence"
            value="94.7%"
            description="AI model accuracy"
            icon={TrendingUp}
            status="safe"
            trend="↑ 1.2% improved"
          />
          <StatusCard
            title="System Health"
            value="ONLINE"
            description="All sensors operational"
            icon={Zap}
            status="safe"
            trend="99.8% uptime"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>LiDAR Displacement Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-data rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Real-time displacement chart placeholder</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seismic Activity Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-data rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Seismic activity chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts Panel */}
          <div className="space-y-6">
            <AlertPanel />
            
            <Card>
              <CardHeader>
                <CardTitle>AI Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-warning mb-2">34%</div>
                  <p className="text-sm text-muted-foreground">Rockfall probability (next 24h)</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Displacement Rate</span>
                    <span className="text-sm font-medium text-warning">HIGH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Weather Impact</span>
                    <span className="text-sm font-medium text-success">LOW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Seismic Stress</span>
                    <span className="text-sm font-medium text-warning">MEDIUM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Historical Pattern</span>
                    <span className="text-sm font-medium text-destructive">HIGH</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;