import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicalData';
import { MessageCircle, Instagram, Mail, Globe, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export const ClinicContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) newErrors.name = 'Por favor, informe seu nome.';
    if (!phone.trim()) newErrors.phone = 'Informe seu número para retorno.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Direct WhatsApp dispatch with user details
    const text = `Olá, Andréia! Meu nome é ${name}. Mensagem enviada pelo site:\n\n${message || 'Gostaria de agendar uma consulta.'}`;
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');

    setIsSent(true);
    setName('');
    setPhone('');
    setMessage('');
    setErrors({});
  };

  return (
    <section id="contato" className="py-20 bg-white border-b border-[#e6ecec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8a6d0b] uppercase tracking-wider mb-2">
              <span>Canais Oficiais</span>
              <span aria-hidden="true">·</span>
              <span>Atendimento Humanizado</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#354f50] mb-4 text-balance">
              Vamos conversar?
            </h2>

            <p className="text-base text-[#5f6b7c] leading-relaxed mb-8">
              Escolha o meio de contato mais confortável para você e dê início ao seu processo terapêutico.
            </p>

            <div className="space-y-3.5 max-w-md">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, Andréia! Gostaria de informações sobre atendimento psicológico.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#1a9b4b] hover:bg-[#14793b] text-white rounded-xl font-semibold text-sm transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp: {CLINIC_INFO.whatsappDisplay}</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>

              {/* Instagram Button */}
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#faf8f5] hover:bg-[#f0f4f4] text-[#2d3748] border border-[#d5dedd] rounded-xl font-semibold text-sm transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#8a6d0b]" />
                  <span>Instagram: {CLINIC_INFO.instagram}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8a6d0b]" />
              </a>

              {/* Linktree Button */}
              <a
                href={CLINIC_INFO.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#faf8f5] hover:bg-[#f0f4f4] text-[#2d3748] border border-[#d5dedd] rounded-xl font-semibold text-sm transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#4a6b6c]" />
                  <span>Central de Links (Linktree)</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8a6d0b]" />
              </a>

              {/* Google Profile Link */}
              <a
                href={CLINIC_INFO.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#faf8f5] hover:bg-[#f0f4f4] text-[#2d3748] border border-[#d5dedd] rounded-xl font-semibold text-sm transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#4a6b6c]" />
                  <span>Perfil Profissional no Google</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8a6d0b]" />
              </a>

              {/* Email Box */}
              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e2e8f0]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#354f50] mb-1">
                  <Mail className="w-4 h-4 text-[#4a6b6c]" />
                  <span>E-mail Corporativo</span>
                </div>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-xs sm:text-sm font-semibold text-[#4a6b6c] hover:underline break-all"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Contact Form */}
          <div className="lg:col-span-6 bg-[#faf8f5] p-6 sm:p-8 rounded-3xl border border-[#e2e8f0] shadow-sm">
            <h3 className="text-xl font-bold text-[#354f50] mb-2">
              Envie uma Mensagem Rápida
            </h3>
            <p className="text-xs sm:text-sm text-[#5f6b7c] mb-6">
              Prefere adiantar suas dúvidas? Preencha os campos abaixo e daremos prioridade no seu contato.
            </p>

            {isSent ? (
              <div className="p-6 bg-white rounded-2xl border border-emerald-200 text-center animate-in fade-in duration-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-base font-bold text-[#354f50] mb-1">
                  Mensagem Encaminhada!
                </h4>
                <p className="text-xs text-[#5f6b7c] mb-4">
                  Sua solicitação foi enviada para o WhatsApp da psicóloga Andréia. Caso a janela não tenha aberto, clique no botão abaixo.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="px-4 py-2 bg-[#4a6b6c] text-white text-xs font-semibold rounded-lg hover:bg-[#354f50]"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#354f50] mb-1">
                    Seu Nome *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Como prefere ser chamado(a)?"
                    className={`w-full p-3 bg-white border rounded-xl text-xs sm:text-sm text-[#2d3748] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4a6b6c]/30 ${
                      errors.name ? 'border-red-500' : 'border-[#d5dedd]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#354f50] mb-1">
                    WhatsApp ou Telefone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="(DDD) 99999-9999"
                    className={`w-full p-3 bg-white border rounded-xl text-xs sm:text-sm text-[#2d3748] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4a6b6c]/30 ${
                      errors.phone ? 'border-red-500' : 'border-[#d5dedd]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#354f50] mb-1">
                    Como a Dra. Andréia pode te ajudar? (Opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte brevemente sobre o que você ou seu familiar estão vivenciando..."
                    className="w-full p-3 bg-white border border-[#d5dedd] rounded-xl text-xs sm:text-sm text-[#2d3748] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4a6b6c]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#4a6b6c] hover:bg-[#354f50] active:scale-98 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar e Continuar no WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
