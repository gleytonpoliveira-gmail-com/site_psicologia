import React, { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, Code, CheckCircle, Sliders, Eye, RefreshCw, Trash2 } from 'lucide-react';
import { LeadSubmission } from '../types';

export const InteractiveStudio: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [themeMode, setThemeMode] = useState<'dark' | 'light' | 'midnight'>('dark');
  const [showCode, setShowCode] = useState(false);
  const [submissions, setSubmissions] = useState<LeadSubmission[]>([]);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    try {
      const stored = localStorage.getItem('vortex_briefings');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearSubmissions = () => {
    localStorage.removeItem('vortex_briefings');
    setSubmissions([]);
  };

  return (
    <section className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Laboratório de Prototipagem & Engenharia</span>
            <span aria-hidden="true">·</span>
            <span>Simulador Interativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Experimente a flexibilidade da arquitetura antes do lançamento.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Veja como componentes modulares se adaptam a diferentes formatos de tela, contrastes de cor e layouts sem perda de performance.
          </p>
        </div>

        {/* Sandbox Canvas Controls */}
        <div className="p-4 bg-neutral-900/90 border border-neutral-800 rounded-t-xl flex flex-wrap items-center justify-between gap-4">
          {/* Viewport Selectors */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                device === 'desktop' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop (1440px)</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                device === 'tablet' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (768px)</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                device === 'mobile' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (375px)</span>
            </button>
          </div>

          {/* Theme Palette Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Paleta do Protótipo:</span>
            <div className="flex items-center gap-1 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
              <button
                onClick={() => setThemeMode('dark')}
                className={`px-2.5 py-1 text-xs rounded transition-all ${
                  themeMode === 'dark' ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Obsidian Dark
              </button>
              <button
                onClick={() => setThemeMode('midnight')}
                className={`px-2.5 py-1 text-xs rounded transition-all ${
                  themeMode === 'midnight' ? 'bg-blue-950 text-blue-200 border border-blue-800/80 font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Deep Navy
              </button>
              <button
                onClick={() => setThemeMode('light')}
                className={`px-2.5 py-1 text-xs rounded transition-all ${
                  themeMode === 'light' ? 'bg-neutral-200 text-neutral-900 font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Studio Clean
              </button>
            </div>

            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 rounded-lg transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              <span>{showCode ? 'Ver Layout' : 'Inspecionar Stack'}</span>
            </button>
          </div>
        </div>

        {/* Sandbox Canvas Body */}
        <div className="bg-neutral-950 border-x border-b border-neutral-800 rounded-b-xl p-6 sm:p-12 flex justify-center items-start min-h-[460px] overflow-x-auto">
          {showCode ? (
            <div className="w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-lg p-6 font-mono text-xs text-neutral-300 overflow-x-auto">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4 text-neutral-400">
                <span>// Estrutura de Produção Recomendada</span>
                <span className="text-[11px]">Next.js 15 / React 19 / TypeScript 5.8</span>
              </div>
              <pre className="text-neutral-300 leading-relaxed">
{`// Arquitetura de Componentes do Website
import { Suspense } from 'react';
import { createServerClient } from '@vortex/engine';

export async function WebsitePage() {
  const metadata = await getPageSEO({ slug: 'home' });

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* 1. Header com Contrato de 3 Zonas estrito */}
      <Header brand="Sua Marca" navItems={NAV_ITEMS} />
      
      {/* 2. Hero com Carregamento Crítico Sub-segundo */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection title={metadata.headline} metrics={metadata.kpis} />
      </Suspense>

      {/* 3. Grid Assimétrica de Serviços & Entregáveis */}
      <BentoServices items={SERVICE_BLOCKS} />

      {/* 4. Prova Social & Métricas Quantitativas */}
      <CaseStudies metrics={AUDITED_RESULTS} />

      {/* 5. Conversão & Captação Direta de Leads */}
      <LeadCaptureForm endpoint="/api/briefing" />
    </main>
  );
}`}
              </pre>
            </div>
          ) : (
            <div
              className={`transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border ${
                device === 'desktop'
                  ? 'w-full max-w-4xl'
                  : device === 'tablet'
                  ? 'w-[720px]'
                  : 'w-[360px]'
              } ${
                themeMode === 'light'
                  ? 'bg-neutral-50 text-neutral-900 border-neutral-300'
                  : themeMode === 'midnight'
                  ? 'bg-slate-950 text-slate-100 border-blue-900/60'
                  : 'bg-neutral-950 text-neutral-100 border-neutral-800'
              }`}
            >
              {/* Mock browser chrome */}
              <div
                className={`px-4 py-2.5 border-b flex items-center justify-between text-xs ${
                  themeMode === 'light'
                    ? 'bg-neutral-200/80 border-neutral-300 text-neutral-600'
                    : 'bg-neutral-900/80 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                  <span className="ml-2 font-mono text-[11px]">
                    https://seu-website.com.br
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase">
                  {device} · {themeMode}
                </span>
              </div>

              {/* Mock site internal layout */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Mock Nav */}
                <div className="flex items-center justify-between pb-4 border-b border-current/10">
                  <span className="font-bold tracking-tight text-sm">Empresa Digital</span>
                  <div className="hidden sm:flex items-center gap-4 text-xs opacity-75">
                    <span>Sobre</span>
                    <span>Serviços</span>
                    <span>Cases</span>
                    <span>Contato</span>
                  </div>
                  <button className="px-3 py-1.5 text-[11px] font-semibold rounded bg-current/10 hover:bg-current/15 transition-colors">
                    Fale Conosco
                  </button>
                </div>

                {/* Mock Hero in preview */}
                <div className="space-y-3 py-4">
                  <div className="text-[11px] opacity-60 font-mono">
                    Lançamento 2026 · Soluções B2B
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                    Arquitetura digital projetada para acelerar faturamento comercial.
                  </h4>
                  <p className="text-xs opacity-75 leading-relaxed max-w-lg">
                    Construa autoridade com uma presença digital sob medida, código enxuto e carregamento em qualquer dispositivo.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <button className="px-4 py-2 rounded text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                      Conheça os Projetos
                    </button>
                    <button className="px-4 py-2 rounded text-xs font-medium border border-current/20 hover:bg-current/5 transition-colors">
                      Ver Demonstração
                    </button>
                  </div>
                </div>

                {/* Mock feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-current/10">
                  <div className="p-3.5 rounded bg-current/5 border border-current/10">
                    <span className="text-[11px] font-mono opacity-50 block">01</span>
                    <span className="text-xs font-semibold block mt-1">Carregamento Rápido</span>
                    <span className="text-[10px] opacity-70 block mt-0.5">Tempo LCP &lt; 1s</span>
                  </div>
                  <div className="p-3.5 rounded bg-current/5 border border-current/10">
                    <span className="text-[11px] font-mono opacity-50 block">02</span>
                    <span className="text-xs font-semibold block mt-1">Design System</span>
                    <span className="text-[10px] opacity-70 block mt-0.5">Identidade modular</span>
                  </div>
                  <div className="p-3.5 rounded bg-current/5 border border-current/10">
                    <span className="text-[11px] font-mono opacity-50 block">03</span>
                    <span className="text-xs font-semibold block mt-1">SEO & Analytics</span>
                    <span className="text-[10px] opacity-70 block mt-0.5">Rankeamento Google</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Submissions Panel if any briefings exist */}
        {submissions.length > 0 && (
          <div className="mt-8 p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Briefings Cadastrados Nesta Sessão ({submissions.length})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={loadSubmissions}
                  className="p-1 text-neutral-400 hover:text-white rounded"
                  title="Atualizar lista"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleClearSubmissions}
                  className="flex items-center gap-1 text-[11px] text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Limpar histórico</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {submissions.map((sub) => (
                <div key={sub.id} className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-white block">{sub.fullName} · {sub.company}</span>
                    <span className="text-neutral-400 block mt-0.5">{sub.email} · {sub.phone}</span>
                    <span className="text-neutral-500 text-[11px] block mt-0.5 font-mono">
                      {sub.projectType} {sub.budgetEstimated > 0 && `(R$ ${sub.budgetEstimated.toLocaleString('pt-BR')})`}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono shrink-0">
                    {new Date(sub.createdAt).toLocaleDateString('pt-BR')} às {new Date(sub.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
