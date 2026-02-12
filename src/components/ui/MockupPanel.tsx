'use client';

/**
 * Decorative UI mockup panels used inside offering/service cards.
 * These are purely visual — they represent the kind of work Next Sketch does.
 */

/* ── Task Board Mockup ── */
export function TaskBoardMockup() {
  const tasks = [
    { label: 'Product strategy sprint', status: 'done' },
    { label: 'User flow validation', status: 'active' },
    { label: 'MVP scope definition', status: 'pending' },
    { label: 'AI feature mapping', status: 'pending' },
  ];

  return (
    <div className="mockup-panel">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">Sprint Board</span>
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400/30" />
        </div>
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.label}
            className="flex items-center gap-3 rounded-lg bg-black/30 px-3 py-2"
          >
            <div
              className={`h-3 w-3 flex-shrink-0 rounded-sm border ${
                task.status === 'done'
                  ? 'border-green-400/60 bg-green-400/20'
                  : task.status === 'active'
                    ? 'border-brand-primary/60 bg-brand-primary/20'
                    : 'border-neutral-700'
              }`}
            />
            <span
              className={`text-xs ${
                task.status === 'done'
                  ? 'text-neutral-400 line-through'
                  : 'text-neutral-300'
              }`}
            >
              {task.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Analytics Dashboard Mockup ── */
export function AnalyticsMockup() {
  const bars = [35, 55, 45, 70, 60, 80, 65];

  return (
    <div className="mockup-panel">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">Validation Metrics</span>
        <span className="rounded-full bg-green-400/10 px-2 py-0.5 text-[10px] text-green-400">
          +24%
        </span>
      </div>
      <div className="mockup-panel-inner">
        <div className="flex items-end gap-1.5" style={{ height: 60 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-primary/40 to-brand-accent/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-neutral-400">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

/* ── Code Editor Mockup ── */
export function CodeEditorMockup() {
  return (
    <div className="mockup-panel">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-400/50" />
          <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
          <div className="h-2 w-2 rounded-full bg-green-400/50" />
        </div>
        <span className="text-[10px] text-neutral-400">product-config.ts</span>
      </div>
      <div className="mockup-panel-inner font-mono text-[10px] leading-relaxed">
        <div>
          <span className="text-purple-400">export const</span>{' '}
          <span className="text-blue-300">config</span>{' '}
          <span className="text-neutral-400">=</span>{' '}
          <span className="text-yellow-300">{'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-green-300">strategy</span>
          <span className="text-neutral-400">:</span>{' '}
          <span className="text-orange-300">&apos;rapid&apos;</span>
          <span className="text-neutral-400">,</span>
        </div>
        <div className="pl-4">
          <span className="text-green-300">validation</span>
          <span className="text-neutral-400">:</span>{' '}
          <span className="text-cyan-300">true</span>
          <span className="text-neutral-400">,</span>
        </div>
        <div className="pl-4">
          <span className="text-green-300">aiFirst</span>
          <span className="text-neutral-400">:</span>{' '}
          <span className="text-cyan-300">true</span>
          <span className="text-neutral-400">,</span>
        </div>
        <div>
          <span className="text-yellow-300">{'}'}</span>
          <span className="text-neutral-400">;</span>
        </div>
      </div>
    </div>
  );
}

/* ── Roadmap Mockup ── */
export function RoadmapMockup() {
  const items = [
    { phase: 'Strategy', progress: 100, color: 'bg-brand-primary' },
    { phase: 'Build', progress: 65, color: 'bg-brand-accent' },
    { phase: 'Validate', progress: 20, color: 'bg-purple-400' },
  ];

  return (
    <div className="mockup-panel">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">Product Roadmap</span>
        <span className="text-[10px] text-neutral-400">Q1 2026</span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.phase}>
            <div className="mb-1 flex justify-between text-[10px]">
              <span className="text-neutral-300">{item.phase}</span>
              <span className="text-neutral-400">{item.progress}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-neutral-700/50">
              <div
                className={`h-full rounded-full ${item.color}/60`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Automation Flow Mockup ── */
export function AutomationFlowMockup() {
  const nodes = ['Trigger', 'Process', 'AI Analysis', 'Action'];

  return (
    <div className="mockup-panel">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">Automation Flow</span>
        <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-[10px] text-brand-primary">
          Active
        </span>
      </div>
      <div className="flex items-center gap-2">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-2">
            <div className="rounded-md border border-neutral-700/50 bg-black/40 px-2 py-1.5">
              <span className="text-[9px] text-neutral-300">{node}</span>
            </div>
            {i < nodes.length - 1 && (
              <svg className="h-3 w-3 flex-shrink-0 text-brand-primary/50" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Chat Interface Mockup ── */
export function ChatInterfaceMockup() {
  return (
    <div className="mockup-panel">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">AI Assistant</span>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-soft" />
          <span className="text-[9px] text-green-400">Online</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-lg bg-brand-primary/10 px-3 py-2 text-[10px] text-neutral-300">
          Analyze workflow bottlenecks in the onboarding pipeline
        </div>
        <div className="ml-4 rounded-lg bg-black/40 px-3 py-2 text-[10px] text-neutral-300">
          Found 3 friction points. Step 2 has a 40% drop-off rate. Recommending automated follow-up...
        </div>
      </div>
    </div>
  );
}

/* ── Team Dashboard Mockup ── */
export function TeamDashboardMockup() {
  const metrics = [
    { label: 'Tasks automated', value: '47', change: '+12' },
    { label: 'Hours saved', value: '156', change: '+23' },
    { label: 'Error rate', value: '0.3%', change: '-8%' },
  ];

  return (
    <div className="mockup-panel">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">Operations Overview</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg bg-black/30 p-2 text-center">
            <div className="text-sm font-semibold text-neutral-50">{m.value}</div>
            <div className="text-[8px] text-green-400">{m.change}</div>
            <div className="mt-0.5 text-[8px] text-neutral-400">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Integration Connectors Mockup ── */
export function IntegrationsMockup() {
  const tools = ['Slack', 'Notion', 'Linear', 'GitHub', 'Stripe'];

  return (
    <div className="mockup-panel">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-400">Integrations</span>
        <span className="text-[10px] text-neutral-400">{tools.length} connected</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <div
            key={tool}
            className="flex items-center gap-1.5 rounded-full border border-neutral-700/50 bg-black/30 px-2.5 py-1"
          >
            <div className="h-2 w-2 rounded-full bg-green-400/50" />
            <span className="text-[10px] text-neutral-300">{tool}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
