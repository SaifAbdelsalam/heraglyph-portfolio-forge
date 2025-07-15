import { useEffect, useRef } from 'react';

interface N8nChatWidgetProps {
  webhookUrl: string;
  mode?: 'window' | 'fullscreen';
}

const N8nChatWidget = ({ webhookUrl, mode = 'window' }: N8nChatWidgetProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Skip if already initialized or no container
    if (isInitialized.current || !chatContainerRef.current) return;
    
    // Add CSS to head
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load script and initialize chat
    const script = document.createElement('script');
    script.type = 'module';
    script.onload = async () => {
      try {
        // @ts-ignore - importing from CDN
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
        createChat({
          webhookUrl,
          target: '#n8n-chat',
          mode,
        });
        isInitialized.current = true;
      } catch (error) {
        console.error('Failed to initialize n8n chat:', error);
      }
    };
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, [webhookUrl, mode]);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Similar glow effect as WhatsApp button but with different color */}
      <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl transform scale-[2] opacity-50" />
      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl transform scale-[1.8] opacity-40" />
      
      {/* The chat container - this is where n8n will mount the chat widget */}
      <div 
        id="n8n-chat" 
        ref={chatContainerRef}
        className="relative"
        aria-label="Chat with our AI assistant"
      />
    </div>
  );
};

export default N8nChatWidget;
