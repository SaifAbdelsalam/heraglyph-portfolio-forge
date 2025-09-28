import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GreekPage from './pages/el';
const PrivacyPolicy = React.lazy(() => import('./pages/privacy-policy'));
const TermsOfService = React.lazy(() => import('./pages/terms-of-service'));
const CookiePolicy = React.lazy(() => import('./pages/cookie-policy'));
import 'aos/dist/aos.css';
import AOS from 'aos';
import WhatsAppButton from './components/WhatsAppButton';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => { AOS.init({ once: true }); }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/el" element={<GreekPage />} />
            <Route path="/privacy-policy" element={
              <Suspense fallback={<div>Loading...</div>}>
                <PrivacyPolicy />
              </Suspense>
            } />
            <Route path="/terms-of-service" element={
              <Suspense fallback={<div>Loading...</div>}>
                <TermsOfService />
              </Suspense>
            } />
            <Route path="/cookie-policy" element={
              <Suspense fallback={<div>Loading...</div>}>
                <CookiePolicy />
              </Suspense>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
