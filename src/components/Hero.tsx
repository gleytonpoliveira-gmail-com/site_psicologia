import React, { useState } from 'react';
import { ArrowRight, Monitor, Tablet, Smartphone, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartSimulation: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSimulation, onExploreWork }) => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'stack'>('overview');

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-neutral-900">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Editorial Subtitle / Kicker (No pills!) */}
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-6">
          <span>Estúdio de Engenharia Digital & Design</span>
          <span aria-hidden="true">·</span>
          <span>Arquitetura Web de Alto Desempenho</span>
          <span aria-hidden="true">·</span>
          <span>Projetos 2026</span>
        </div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.08] mb-6">
              Construímos websites que transformam tráfego em receita tangível.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
              Desenvolvemos landing pages de alta conversão, portais corporativos e e-commerces ultrarrápidos. Combinamos rigor técnico, design autoral e otimização cirúrgica de Core Web Vitals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onStartSimulation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 active:scale-98 rounded-lg transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
              >
                <span>Simular Meu Projeto de Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-all whitespace-nowrap shrink-0"
              >
                Explorar Portfólio de Cases
              </button>
            </div>

            {/* Adjacent Proof Badges (Unboxed clean layout) */}
            <div className="pt-6 border-t border-neutral-900 w-full grid grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">&lt; 0.9s</p>
                <p className="text-xs text-neutral-400 mt-1">Tempo médio LCP</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">99/100</p>
                <p className="text-xs text-neutral-400 mt-1">Lighthouse Score</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">+140%</p>
                <p className="text-xs text-neutral-400 mt-1">Média de conversão</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Browser Frame Preview */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Browser Window Header */}
              <div className="px-4 py-3 bg-neutral-950/80 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="ml-2 text-xs font-mono text-neutral-500 truncate max-w-[140px]">
                    vortex.studio/live
                  </span>
                </div>

                {/* Device switchers (interactive controls, allowed with click handlers) */}
                <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-md border border-neutral-800">
                  <button
                    onClick={() => setActiveDevice('desktop')}
                    className={`p-1.5 rounded transition-colors ${
                      activeDevice === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                    title="Visualização Desktop"
                    aria-label="Desktop"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveDevice('tablet')}
                    className={`p-1.5 rounded transition-colors ${
                      activeDevice === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                    title="Visualização Tablet"
                    aria-label="Tablet"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveDevice('mobile')}
                    className={`p-1.5 rounded transition-colors ${
                      activeDevice === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                    title="Visualização Smartphone"
                    aria-label="Smartphone"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Viewport content */}
              <div className="p-5 bg-neutral-950/50 min-h-[380px] flex flex-col justify-between">
                {/* Mock Viewport Header */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400">
                        VS
                      </div>
                      <span className="text-xs font-semibold text-neutral-200">Sua Empresa Digital</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 font-mono">React 19 + Tailwind v4</span>
                  </div>

                  {/* Interactive Tab Switcher inside demo */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`text-xs px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'overview'
                          ? 'bg-neutral-800 text-white font-medium'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      Visão Geral
                    </button>
                    <button
                      onClick={() => setActiveTab('metrics')}
                      className={`text-xs px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'metrics'
                          ? 'bg-neutral-800 text-white font-medium'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      Métricas em Produção
                    </button>
                    <button
                      onClick={() => setActiveTab('stack')}
                      className={`text-xs px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'stack'
                          ? 'bg-neutral-800 text-white font-medium'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      Stack Tecnológico
                    </button>
                  </div>

                  {/* Dynamic Tab Body */}
                  {activeTab === 'overview' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/80">
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200 mb-1">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>Arquitetura Zero Bloatware</span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Páginas sem scripts pesados de terceiros. Seu website carrega instantaneamente no 4G e 5G em qualquer região do Brasil.
                        </p>
                      </div>

                      <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/80">
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200 mb-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Acessibilidade WCAG AA & SEO 100%</span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Estrutura semântica que garante conformidade legal e indexação prioritária pelos robôs de busca do Google.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'metrics' && (
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="p-2.5 bg-neutral-900/60 rounded border border-neutral-800/80">
                        <span className="text-[11px] text-neutral-400 block">Performance</span>
                        <span className="text-base font-bold text-emerald-400 font-mono tabular-nums">100 / 100</span>
                      </div>
                      <div className="p-2.5 bg-neutral-900/60 rounded border border-neutral-800/80">
                        <span className="text-[11px] text-neutral-400 block">Acessibilidade</span>
                        <span className="text-base font-bold text-emerald-400 font-mono tabular-nums">100 / 100</span>
                      </div>
                      <div className="p-2.5 bg-neutral-900/60 rounded border border-neutral-800/80">
                        <span className="text-[11px] text-neutral-400 block">Boas Práticas</span>
                        <span className="text-base font-bold text-emerald-400 font-mono tabular-nums">100 / 100</span>
                      </div>
                      <div className="p-2.5 bg-neutral-900/60 rounded border border-neutral-800/80">
                        <span className="text-[11px] text-neutral-400 block">SEO Técnico</span>
                        <span className="text-base font-bold text-emerald-400 font-mono tabular-nums">100 / 100</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/80 space-y-2 text-xs text-neutral-300">
                      <div className="flex justify-between py-1 border-b border-neutral-800/50">
                        <span className="text-neutral-400">Core Framework</span>
                        <span className="font-mono text-neutral-200">React 19 / Next.js</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-neutral-800/50">
                        <span className="text-neutral-400">Design & Estilização</span>
                        <span className="font-mono text-neutral-200">Tailwind CSS v4</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-neutral-800/50">
                        <span className="text-neutral-400">Tipagem & Testes</span>
                        <span className="font-mono text-neutral-200">TypeScript Strict</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-neutral-400">Hospedagem & CDN</span>
                        <span className="font-mono text-neutral-200">Edge Network Global</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer of the frame */}
                <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Pronto para produção</span>
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">Deploy automatizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
