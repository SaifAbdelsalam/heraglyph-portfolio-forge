import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GreekPage from './pages/el';
import 'aos/dist/aos.css';
import AOS from 'aos';
import WhatsAppButton from './components/WhatsAppButton';
import N8nChatWidget from './components/N8nChatWidget';

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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <WhatsAppButton />
        <N8nChatWidget webhookUrl="https://primary-production-e937.up.railway.app/webhook/1be5a202-2e86-4223-80b4-58ed406de545/chat" />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
