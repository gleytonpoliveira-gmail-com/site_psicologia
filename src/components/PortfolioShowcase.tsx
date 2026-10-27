import React, { useState } from 'react';
import { PORTFOLIO_CASES } from '../data/mockData';
import { ProjectCase, ProjectCategory } from '../types';
import { ArrowUpRight, CheckCircle2, Layers, TrendingUp } from 'lucide-react';

export const PortfolioShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos');
  const [activeModalCase, setActiveModalCase] = useState<ProjectCase | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'todos', label: 'Todos os Projetos' },
    { key: 'saas', label: 'Plataformas SaaS' },
    { key: 'institucional', label: 'Institucionais' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'landing', label: 'Landing Pages' },
  ];

  const filteredCases = selectedCategory === 'todos' 
    ? PORTFOLIO_CASES 
    : PORTFOLIO_CASES.filter(c => c.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
              <span>Evidências & Impacto Mensurável</span>
              <span aria-hidden="true">·</span>
              <span>Resultados Comprovados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Projetos recentes que aceleraram o crescimento de nossos clientes.
            </h2>
          </div>

          {/* Interactive Filter Tabs / Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/90 rounded-lg border border-neutral-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.key
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((project) => (
            <div
              key={project.id}
              className="group bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between"
            >
              {/* Visual Container / Bespoke High-Tech Mockup Preview */}
              <div className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-950 border-b border-neutral-800/80 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  {/* Clean unboxed metadata with separators (NO PILL BOXES) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <span className="text-xs text-neutral-400 font-mono">
                    {project.duration}
                  </span>
                </div>

                {/* Interactive Simulated Web Wireframe */}
                <div className="bg-neutral-950/90 rounded-lg border border-neutral-800 p-4 relative h-48 flex flex-col justify-between shadow-inner">
                  {/* Top Bar of the Mockup */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800/60">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: project.accentColor }} 
                      />
                      <span className="text-xs font-semibold text-neutral-200">{project.title}</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-12 h-2 rounded bg-neutral-800" />
                      <div className="w-8 h-2 rounded bg-neutral-800" />
                    </div>
                  </div>

                  {/* Middle content representation */}
                  <div className="grid grid-cols-3 gap-3 my-auto">
                    <div className="col-span-2 space-y-2">
                      <div className="w-4/5 h-3.5 rounded bg-neutral-800/80" />
                      <div className="w-full h-2 rounded bg-neutral-900" />
                      <div className="w-3/4 h-2 rounded bg-neutral-900" />
                    </div>
                    <div className="col-span-1 rounded bg-neutral-900/60 border border-neutral-800/60 p-2 flex flex-col justify-center items-center">
                      <TrendingUp className="w-4 h-4 text-emerald-400 mb-1" />
                      <span className="text-[11px] font-mono font-bold text-white tabular-nums">
                        {project.metrics[0]?.value}
                      </span>
                    </div>
                  </div>

                  {/* Bottom metrics bar in the wireframe */}
                  <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span>LCP: 0.8s</span>
                    <span>Core Web Vitals: A+</span>
                    <span>HTTPS / SSL</span>
                  </div>
                </div>
              </div>

              {/* Case Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Quantitative Evidence Metrics (Tabular Numbers) */}
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/60 mb-6">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <p className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums tracking-tight">
                          {m.value}
                        </p>
                        <p className="text-xs text-neutral-300 font-medium mt-0.5">{m.label}</p>
                        <p className="text-[11px] text-neutral-500 mt-0.5">{m.detail}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack (Unboxed Text with Separators) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400 mb-6">
                    <span className="text-neutral-500 font-medium">Stack:</span>
                    {project.techStack.map((tech, index) => (
                      <React.Fragment key={tech}>
                        <span className="text-neutral-300">{tech}</span>
                        {index < project.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Estudo de caso detalhado disponível
                  </span>
                  <button
                    onClick={() => setActiveModalCase(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    <span>Ver Estudo Completo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div>
                <span className="text-xs font-mono text-neutral-400">
                  {activeModalCase.client} · {activeModalCase.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{activeModalCase.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalCase(null)}
                className="text-neutral-400 hover:text-white p-2 rounded-md hover:bg-neutral-800 transition-colors text-sm font-medium"
              >
                ✕ Fechar
              </button>
            </div>

            {/* Quantitative Results Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {activeModalCase.metrics.map((metric, i) => (
                <div key={i} className="p-4 bg-neutral-950 rounded-lg border border-neutral-800">
                  <p className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">
                    {metric.value}
                  </p>
                  <p className="text-xs font-semibold text-neutral-200 mt-1">{metric.label}</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{metric.detail}</p>
                </div>
              ))}
            </div>

            {/* Challenge and Solution */}
            <div className="space-y-6 text-sm mb-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  O Desafio Inicial
                </h4>
                <p className="text-neutral-300 leading-relaxed bg-neutral-950/60 p-4 rounded-lg border border-neutral-800/60">
                  {activeModalCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  A Solução de Engenharia & Design
                </h4>
                <p className="text-neutral-300 leading-relaxed bg-neutral-950/60 p-4 rounded-lg border border-neutral-800/60">
                  {activeModalCase.solution}
                </p>
              </div>
            </div>

            {/* Deliverables and Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-neutral-800">
              <div>
                <h4 className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Entregáveis Desenvolvidos</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-400">
                  {activeModalCase.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-600 mt-0.5">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5 mb-3">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>Tecnologias Empregadas</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalCase.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono px-2.5 py-1 bg-neutral-950 border border-neutral-800 text-neutral-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => {
                  setActiveModalCase(null);
                  const sim = document.getElementById('simulador');
                  if (sim) sim.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors"
              >
                Quero um Projeto com essa Qualidade
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
