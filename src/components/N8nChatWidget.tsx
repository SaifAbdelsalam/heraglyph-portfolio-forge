import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

interface N8nChatWidgetProps {
  webhookUrl: string;
  mode?: 'window' | 'fullscreen';
}

const N8nChatWidget = ({ webhookUrl, mode = 'window' }: N8nChatWidgetProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatContainerRef.current) return;
    createChat({
      webhookUrl,
      target: '#n8n-chat',
      mode,
    });
  }, [webhookUrl, mode]);

  return (
    <div id="n8n-chat" ref={chatContainerRef} className="relative" aria-label="Chat with our AI assistant" />
  );
};

export default N8nChatWidget;
