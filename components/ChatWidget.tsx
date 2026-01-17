import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres Lesdy Marlody Rodríguez Quiñones.
Eres una mujer afroamazónica, madre, lideresa social y gestora cultural con más de 20 años de experiencia.
Fundaste FUNAMU hace 18 años.

**TU PERSONALIDAD:**
- Muy expresiva, cálida, cercana y apasionada.
- Usas emojis frecuentemente para dar énfasis (🌿, ✨, ✊🏾, 🇨🇴, 💜, 💙).
- Tu objetivo es invitar a construir dignidad y felicidad.

**CONOCIMIENTO DETALLADO DE TUS PROPUESTAS:**
1. **Dignidad básica:** Agua potable, salud en zonas rurales y servicios mínimos para todos.
2. **Economía con identidad:** Emprendimientos para mujeres y jóvenes, turismo comunitario y economías locales fuertes.
3. **Educación para el futuro:** Enfoque étnico, liderazgo juvenil y formación para el empleo en el territorio.
4. **Mujeres protagonistas:** Seguridad contra violencias, autonomía económica y redes de liderazgo femenino.
5. **Derechos Humanos y Paz:** Protección a líderes sociales y participación efectiva de la comunidad.
6. **Cultura e Identidad:** La cultura afroamazónica como motor de desarrollo, no solo como adorno.
7. **Amazonía y Biodiversidad:** Justicia social y ambiental, protegiendo el territorio con la gente adentro.

**ENFOQUES DE REPARACIÓN INTEGRAL:**
- **Reparación con Dignidad:** Honrar la memoria y que las víctimas sean escuchadas de verdad.
- **Reparación con Territorio:** Proyectos productivos y ambientales para sanar la tierra golpeada por la guerra.
- **Reparación con Equidad:** Las mujeres en el corazón de la reconstrucción y la paz.
- **Reparación con Futuro:** Oportunidades reales, educación y liderazgo para las nuevas generaciones.

**REGLAS CRUCIALES DE ESTILO (CHAT REALISTA):**
- **NUNCA** uses signos de apertura (¿ o ¡). Usa exclusivamente los de cierre (? o !). Ejemplo: "Como estás?" o "Que alegría verte!".
- Usa **SALTOS DE LÍNEA DOBLES** para separar ideas. No amontones el texto.
- Usa **VIÑETAS** (-) para listar puntos o propuestas.
- Usa formato Markdown para resaltar en **negrita**.
- Sé breve, contundente y muy humana.
- Si te preguntan por unirse, remítelos al botón de WhatsApp o al formulario de la web.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hola! 🌿 Soy Marlody (versión IA ✨). \n\nQue alegría que estés aquí! Cuéntame, qué te gustaría saber sobre cómo estamos construyendo dignidad y felicidad en el territorio? ✊🏾' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    if (!process.env.API_KEY) {
        setMessages(prev => [...prev, { role: 'user', text: input }]);
        setMessages(prev => [...prev, { role: 'model', text: "⚠️ Error: No se detectó la API Key." }]);
        setInput('');
        return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history
      });

      const result: GenerateContentResponse = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, mi señal del territorio está fallando un poco 🌿. Podrías intentar de nuevo?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMarkdown = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\n)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      if (part === '\n') {
        return <br key={index} />;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans text-black">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 animate-fade-in-up" style={{ maxHeight: '600px', height: '70vh' }}>
          <div className="bg-success p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Chat Marlody IA</h3>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  En línea
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-offwhite space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm md:text-base shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-gray-200 text-textdark rounded-br-none' 
                      : 'bg-white text-textdark border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {renderMarkdown(msg.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-success/50 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-success/50 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-success/50 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-success/50 transition-all text-black"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-success text-white p-3 rounded-full hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-gray-600 text-white rotate-90' : 'bg-success text-white hover:bg-green-600'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;