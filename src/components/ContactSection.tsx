import React, { useState, useEffect } from 'react';
import { ProjectTypeOption, ScopeAddon, LeadSubmission } from '../types';
import { CheckCircle2, Send, Clock, ShieldCheck, Mail, Phone, Building } from 'lucide-react';

interface ContactSectionProps {
  initialConfig?: {
    projectType: ProjectTypeOption;
    selectedAddons: ScopeAddon[];
    totalBRL: number;
    totalDays: number;
    urgency: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialConfig }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [currentSite, setCurrentSite] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialConfig) {
      const summaryText = `Gostaria de solicitar uma proposta oficial para o seguinte projeto:\n- Tipo: ${initialConfig.projectType.name}\n- Módulos: ${initialConfig.selectedAddons.map(a => a.name).join(', ') || 'Escopo base'}\n- Investimento estimado: R$ ${initialConfig.totalBRL.toLocaleString('pt-BR')}\n- Prazo estimado: ~${initialConfig.totalDays} dias úteis (${initialConfig.urgency})\n\nDetalhes adicionais sobre o negócio: `;
      setMessage(summaryText);
    }
  }, [initialConfig]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Por favor, informe seu nome completo.';
    if (!email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail corporativo.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'E-mail inválido. Utilize o formato nome@empresa.com.';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Informe seu telefone ou WhatsApp para contato.';
    } else if (phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Informe um telefone válido com DDD (mínimo 10 dígitos).';
    }
    if (!company.trim()) newErrors.company = 'Informe o nome da sua empresa ou projeto.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: LeadSubmission = {
        id: 'briefing_' + Date.now(),
        fullName,
        email,
        phone,
        company,
        currentSite,
        projectType: initialConfig?.projectType.name || 'Website Customizado',
        addons: initialConfig?.selectedAddons.map(a => a.name) || [],
        budgetEstimated: initialConfig?.totalBRL || 0,
        message,
        createdAt: new Date().toISOString(),
      };

      try {
        const stored = localStorage.getItem('vortex_briefings');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(newSubmission);
        localStorage.setItem('vortex_briefings', JSON.stringify(list));
      } catch (err) {
        console.error('Storage error', err);
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contato" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Trust */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
              <span>Início Imediato</span>
              <span aria-hidden="true">·</span>
              <span>Contato Direto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 text-balance">
              Vamos colocar seu novo website no ar.
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed mb-8">
              Preencha o formulário com as necessidades do seu projeto. Analisamos cada detalhe e respondemos com uma proposta comercial e técnica detalhada em até 24 horas úteis.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <Clock className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Resposta em até 24h</span>
                  <span className="text-xs text-neutral-400">Avaliação técnica sem compromisso</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Acordo de Confidencialidade (NDA)</span>
                  <span className="text-xs text-neutral-400">Total sigilo sobre suas ideias e estratégias</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <Mail className="w-4 h-4 text-neutral-400 mt-1 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Email Direto</span>
                  <span className="text-xs font-mono text-neutral-400">projetos@vortex.studio</span>
                </div>
              </div>
            </div>

            {initialConfig && (
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-xs font-semibold text-neutral-300 block mb-1">
                  Especificação anexada do simulador:
                </span>
                <p className="text-xs text-neutral-400 font-mono">
                  {initialConfig.projectType.name} · {initialConfig.totalDays} dias · ~R$ {initialConfig.totalBRL.toLocaleString('pt-BR')}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-neutral-900/60 border border-neutral-800/80 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Briefing Recebido com Sucesso!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Obrigado, <strong className="text-white">{fullName}</strong>. Nossa equipe técnica de engenharia está revisando o escopo para <strong className="text-white">{company}</strong> e entrará em contato em até 24 horas úteis via <strong className="text-white">{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setCompany('');
                      setCurrentSite('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    Enviar Outro Projeto
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="Ex: Gabriel Silveira"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:ring-white focus:border-neutral-700'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="gabriel@empresa.com.br"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:ring-white focus:border-neutral-700'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3 pointer-events-none" />
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="(11) 98765-4321"
                          className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:ring-white focus:border-neutral-700'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Nome da Empresa *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-neutral-500 absolute left-3 top-3 pointer-events-none" />
                        <input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => {
                            setCompany(e.target.value);
                            if (errors.company) setErrors({ ...errors, company: '' });
                          }}
                          placeholder="Ex: Nexo Inovação"
                          className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                            errors.company ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:ring-white focus:border-neutral-700'
                          }`}
                        />
                      </div>
                      {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Current website */}
                  <div>
                    <label htmlFor="currentSite" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Website Atual (opcional)
                    </label>
                    <input
                      id="currentSite"
                      type="url"
                      value={currentSite}
                      onChange={(e) => setCurrentSite(e.target.value)}
                      placeholder="https://suaempresa.com.br"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-neutral-700 transition-colors"
                    />
                  </div>

                  {/* Message / Briefing details */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Resumo do Projeto & Objetivos de Negócio
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descreva o objetivo principal do seu website, prazos ideais e público que deseja atingir..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-neutral-700 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 active:scale-98 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Enviando briefing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Solicitar Proposta de Desenvolvimento</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-2.5">
                      Ao enviar, você concorda em receber nossa análise técnica e contato direto.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
