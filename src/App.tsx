
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkoutPlans from "./pages/WorkoutPlans";
import WorkoutPlanDetail from "./pages/WorkoutPlanDetail";
import WorkoutExercise from "./pages/WorkoutExercise";
import Progress from "./pages/Progress";
import Social from "./pages/Social";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/workout-plans" element={<WorkoutPlans />} />
            <Route path="/workout-plans/:id" element={<WorkoutPlanDetail />} />
            <Route path="/workout-plans/:id/workout/:workoutId" element={<WorkoutExercise />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/social" element={<Social />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
