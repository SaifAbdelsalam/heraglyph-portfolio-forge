import { useEffect, useRef, useState } from 'react';
import './n8nChatOverride.css'; // We'll create this file for custom styling

interface N8nChatWidgetProps {
  webhookUrl: string;
  mode?: 'window' | 'fullscreen';
}

const N8nChatWidget = ({ webhookUrl, mode = 'window' }: N8nChatWidgetProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Skip if already initialized or no container
    if (isInitialized.current || !chatContainerRef.current) return;
    
    // Add CSS to head
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add custom CSS variables for theming
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --n8n-chat-primary-color: #D4A017;
        --n8n-chat-primary-hover-color: #F0C75F;
        --n8n-chat-border-radius: 10px;
        --n8n-chat-bubble-border-radius: 18px;
        --n8n-chat-font-family: 'Inter', sans-serif;
        --n8n-chat-bot-bubble-bg: #1F1F1F;
        --n8n-chat-bot-bubble-color: #FFFFFF;
        --n8n-chat-user-bubble-bg: #D4A017;
        --n8n-chat-user-bubble-color: #121212;
        --n8n-chat-header-bg: #121212;
        --n8n-chat-header-color: #D4A017;
        --n8n-chat-window-bg: #121212;
        --n8n-chat-window-color: #FFFFFF;
        --n8n-chat-input-bg: #1F1F1F;
        --n8n-chat-input-color: #FFFFFF;
        --n8n-chat-input-border: 1px solid #D4A017;
        --n8n-chat-input-placeholder-color: #9CA3AF;
        --n8n-chat-scrollbar-thumb: #D4A017;
        --n8n-chat-scrollbar-track: #1F1F1F;
      }
    `;
    document.head.appendChild(style);

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
          messageDelay: 800,
          theme: {
            chat: {
              fontSize: '16px',
            },
            chatButton: {
              size: '60px',
              iconSize: '28px',
              bottom: '32px',
              left: '32px',
            },
            header: {
              title: 'Ask Heraglyph AI',
              subtitle: 'Our digital assistant is here to help',
            }
          }
        });
        isInitialized.current = true;
        
        // Apply custom styling to the chat window after it's initialized
        setTimeout(() => {
          const chatWindow = document.querySelector('.n8n-chat-window');
          if (chatWindow) {
            chatWindow.classList.add('heraglyph-chat-window');
          }
        }, 100);
        
      } catch (error) {
        console.error('Failed to initialize n8n chat:', error);
      }
    };
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [webhookUrl, mode]);

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Custom glow effect matching Heraglyph theme */}
      <div className="absolute inset-0 bg-heraglyph-accent/30 rounded-full blur-2xl transform scale-[2] opacity-50" />
      <div className="absolute inset-0 bg-heraglyph-gradient-end/20 rounded-full blur-3xl transform scale-[1.8] opacity-40" />
      
      {/* Custom button styling will be applied through n8nChatOverride.css */}
      <div 
        id="n8n-chat" 
        ref={chatContainerRef}
        className="relative"
        aria-label="Chat with our AI assistant"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default N8nChatWidget;
