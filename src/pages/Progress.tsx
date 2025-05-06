
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChartBar, Dumbbell, Calendar as CalendarIcon } from "lucide-react";
import WorkoutHistoryTable from "@/components/progress/WorkoutHistoryTable";
import MetricsOverviewCards from "@/components/progress/MetricsOverviewCards";
import WorkoutMetricsChart from "@/components/charts/WorkoutMetricsChart";
import StrengthProgressChart from "@/components/charts/StrengthProgressChart";
import BodyMetricsChart from "@/components/charts/BodyMetricsChart";

const Progress = () => {
  return (
    <Layout>
      <div className="container px-4 py-8">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Suivi de progression</h1>
          <p className="text-muted-foreground">Suivez vos résultats et votre évolution au fil du temps</p>
        </header>

        <MetricsOverviewCards />

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <ChartBar className="h-4 w-4" />
              <span>Aperçu</span>
            </TabsTrigger>
            <TabsTrigger value="body-metrics" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Métriques corporelles</span>
            </TabsTrigger>
            <TabsTrigger value="strength" className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4" />
              <span>Force</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span>Historique</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="pt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Activité hebdomadaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <WorkoutMetricsChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Évolution des performances</CardTitle>
                </CardHeader>
                <CardContent>
                  <StrengthProgressChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="body-metrics" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Métriques corporelles</CardTitle>
              </CardHeader>
              <CardContent>
                <BodyMetricsChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strength" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Progression de la force</CardTitle>
              </CardHeader>
              <CardContent>
                <StrengthProgressChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Historique des entraînements</CardTitle>
              </CardHeader>
              <CardContent>
                <WorkoutHistoryTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Progress;
