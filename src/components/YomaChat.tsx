import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, Bot, User, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/yoma-chat`;

const QUICK_ACTIONS = [
  { label: 'Discover my career path', icon: '🧭' },
  { label: 'Find a mentor', icon: '🤝' },
  { label: 'Explore colleges and universities', icon: '🎓' },
  { label: 'Learn about WeKIT programs', icon: '📚' },
  { label: 'For parents and families', icon: '👨‍👩‍👧' },
  { label: 'For schools and institutions', icon: '🏫' },
];

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Message[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (error: string) => void;
}) {
  try {
    const resp = await fetch(CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok || !resp.body) {
      if (resp.status === 429) { onError("I'm a bit busy right now. Please try again in a moment."); return; }
      if (resp.status === 402) { onError("AI service temporarily unavailable. Please try again later."); return; }
      onError("Something went wrong. Please try again.");
      return;
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = '';
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);
        if (line.endsWith('\r')) line = line.slice(0, -1);
        if (line.startsWith(':') || line.trim() === '') continue;
        if (!line.startsWith('data: ')) continue;
        const jsonStr = line.slice(6).trim();
        if (jsonStr === '[DONE]') { streamDone = true; break; }
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          textBuffer = line + '\n' + textBuffer;
          break;
        }
      }
    }

    if (textBuffer.trim()) {
      for (let raw of textBuffer.split('\n')) {
        if (!raw || raw.startsWith(':') || raw.trim() === '') continue;
        if (!raw.startsWith('data: ')) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === '[DONE]') continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch { /* ignore */ }
      }
    }
    onDone();
  } catch (e) {
    console.error('YOMA stream error:', e);
    onError("Connection lost. Please try again.");
  }
}

const TypingDots = () => (
  <div className="flex items-center gap-1 px-1 py-1">
    {[0, 1, 2].map(i => (
      <span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[#0205F4]/50 animate-bounce"
        style={{ animationDelay: `${i * 150}ms` }}
      />
    ))}
  </div>
);

const YomaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      sendInitialGreeting();
    }
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 400);
  }, [isOpen]);

  const appendAssistant = (chunk: string, setMsg: typeof setMessages) => {
    setMsg(prev => {
      const last = prev[prev.length - 1];
      if (last?.role === 'assistant') {
        return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: last.content + chunk } : m);
      }
      return [...prev, { role: 'assistant', content: chunk }];
    });
  };

  const sendInitialGreeting = async () => {
    setIsLoading(true);
    await streamChat({
      messages: [{ role: 'user', content: 'Hello' }],
      onDelta: (chunk) => appendAssistant(chunk, setMessages),
      onDone: () => setIsLoading(false),
      onError: () => {
        setMessages([{ role: 'assistant', content: "Hello there! 👋 I'm **YOMA** — Your Online Mentor Assistant.\n\nI'm here to help you explore careers, discover your strengths, and connect with mentors and programs that can guide your future.\n\nHow can I help you today?" }]);
        setIsLoading(false);
      },
    });
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', content: text };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput('');
    setIsLoading(true);

    await streamChat({
      messages: allMessages,
      onDelta: (chunk) => appendAssistant(chunk, setMessages),
      onDone: () => setIsLoading(false),
      onError: (err) => {
        setMessages(prev => [...prev, { role: 'assistant', content: err }]);
        setIsLoading(false);
      },
    });
  };

  const showQuickActions = messages.length <= 1 && !isLoading;
  const isShowingTyping = isLoading && (messages.length === 0 || messages[messages.length - 1]?.role === 'user');

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0205F4] hover:bg-[#0104c8] text-white shadow-xl flex items-center justify-center transition-colors"
            aria-label="Open YOMA"
          >
            <MessageSquare size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 flex flex-col w-full h-full md:w-[400px] md:h-[620px] bg-white md:rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#0205F4] shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={18} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#00665B] border-2 border-[#0205F4]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight font-montserrat">YOMA</p>
                  <p className="text-white/70 text-xs leading-tight">Your Online Mentor Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${msg.role === 'assistant' ? 'bg-[#0205F4]' : 'bg-[#180205]'}`}>
                    {msg.role === 'assistant'
                      ? <Bot size={14} className="text-white" />
                      : <User size={14} className="text-white" />
                    }
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[78%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div className={`px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#0205F4] text-white rounded-2xl rounded-tr-sm'
                        : 'bg-white text-gray-800 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100'
                    }`}>
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5 prose-headings:my-2 prose-strong:text-gray-900 prose-a:text-[#0205F4] prose-a:no-underline hover:prose-a:underline">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isShowingTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0205F4] flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              {/* Quick actions */}
              {showQuickActions && messages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2.5"
                >
                  <p className="text-xs text-gray-400 font-medium px-0.5 flex items-center gap-1.5">
                    <Sparkles size={11} /> Quick start
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action.label}
                        onClick={() => sendMessage(action.label)}
                        className="flex items-center justify-between w-full px-3.5 py-2.5 text-left text-sm bg-white border border-gray-200 text-gray-700 rounded-xl hover:border-[#0205F4] hover:text-[#0205F4] hover:bg-[#0205F4]/5 transition-all duration-200 group"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-base">{action.icon}</span>
                          {action.label}
                        </span>
                        <ChevronRight size={14} className="text-gray-300 group-hover:text-[#0205F4] transition-colors shrink-0" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-white border-t border-gray-100 shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Message YOMA..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0205F4]/20 focus:border-[#0205F4] transition-all placeholder:text-gray-400 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-[#0205F4] text-white flex items-center justify-center hover:bg-[#0104c8] disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
                >
                  <Send size={15} />
                </button>
              </form>
              <p className="text-center text-[10px] text-gray-300 mt-2">WeKIT AI · YOMA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default YomaChat;
