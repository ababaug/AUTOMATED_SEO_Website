export default function Page() {
    return (
        <main className="flex-1 w-full overflow-hidden">
{/* 1. HERO SECTION WITH SEARCH SIGNALS VISUAL & ACTION PLAN ENGINE */}
<section className="relative pt-12 pb-24 px-6 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
{/* Ambient Search Signals background grid */}
<div className="absolute inset-0 pointer-events-none opacity-40 select-none">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<path d="M -40,180 Q 300,80 700,220 T 1500,160" fill="none" stroke="#B6CDF6" strokeDasharray="6 6" strokeWidth="1.5"></path>
<path d="M 80,440 Q 480,260 920,400 T 1600,320" fill="none" stroke="#7BA3ED" strokeDasharray="4 4" strokeWidth="1.2"></path>
<circle cx="300" cy="80" fill="#4583E8" r="4.5"></circle>
<circle cx="700" cy="220" fill="#7BA3ED" r="6"></circle>
<circle cx="920" cy="400" fill="#4583E8" r="5"></circle>
<circle cx="1200" cy="180" fill="#B6CDF6" r="3.5"></circle>
</svg>
</div>
<div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
{/* Live Pill Badge */}
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold shadow-sm mb-6 transition-transform hover:scale-105" data-aos="fade-up" data-aos-duration="1000">
<span className="w-2 h-2 rounded-full bg-seotriks-blue animate-ping"></span>
<span className="tracking-wide uppercase">Search Signal Engine 4.2 Live • Instant Action Plans</span>
</div>
{/* Core Value Headline */}
<h1 className="text-4xl sm:text-6xl font-extrabold text-deep-navy tracking-tight max-w-4xl leading-tight mb-6" data-aos="fade-down" data-aos-delay="0">
        Stop guessing. <br className="hidden sm:inline"/>
<span className="text-seotriks-blue underline decoration-cloud-blue decoration-4 underline-offset-8">Start fixing</span> what matters.
      </h1>
{/* Supporting Statement */}
<p className="text-lg sm:text-xl text-secondary-text max-w-2xl mb-10 leading-relaxed font-normal" data-aos="fade-up" data-aos-delay="200">
        SEOtriks replaces confusing dashboards with prioritized, automated action plans. Uncover critical crawl anomalies, high-yield keyword vectors, and automated SERP defense.
      </p>
{/* Primary Action Cluster */}
<div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-seotriks-blue hover:bg-[#326ec8] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95" data-aos="fade-up" data-aos-delay="300" href="/pricing">
<span>Start Free Today</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-cloud-blue/50 text-primary-text border border-light-border font-semibold text-base px-7 py-3.5 rounded-lg shadow-sm transition-all" data-aos="fade-up" data-aos-delay="300" href="/services">
<span className="material-symbols-outlined text-seotriks-blue text-lg">play_circle</span>
<span>See How It Works</span>
</a>
</div>
<div className="flex flex-wrap items-center justify-center gap-6 text-secondary-text text-xs font-semibold mb-16">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-status-success text-base">verified</span> No credit card required</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-seotriks-blue text-base">timelapse</span> 14-day full access trial</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-seotriks-blue text-base">bolt</span> Connects in 60 seconds</span>
</div>
{/* High-Fidelity Interactive Hero Action Engine Card */}
<div className="w-full max-w-5xl rounded-2xl bg-white shadow-2xl border border-light-border overflow-hidden text-left" data-aos="fade-up" data-aos-duration="1000">
{/* Dashboard Top Bar */}
<div className="px-6 py-4 bg-ice-blue border-b border-light-border flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-status-critical/80"></span>
<span className="w-3 h-3 rounded-full bg-status-warning/80"></span>
<span className="w-3 h-3 rounded-full bg-status-success/80"></span>
</div>
<div className="ml-2 text-xs font-semibold text-secondary-text flex items-center gap-2">
<span className="material-symbols-outlined text-seotriks-blue text-base">domain</span>
<span className="text-deep-navy font-bold">app.acmegrowth.io</span>
<span className="px-2 py-0.5 rounded-full bg-cloud-blue text-seotriks-blue font-bold text-[10px]">CRAWLER SYNCED</span>
</div>
</div>
<div className="flex items-center gap-4 text-xs">
<span className="text-secondary-text">Crawler Speed: <strong className="text-deep-navy">1.2k pages/sec</strong></span>
<span className="h-3.5 w-px bg-soft-blue"></span>
<span className="text-status-success font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
              24/7 SEO Guard Active
            </span>
</div>
</div>
{/* Main Card Body */}
<div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Col 1: Health & Signal Metric */}
<div className="lg:col-span-4 flex flex-col gap-5">
<div className="p-6 rounded-xl bg-ice-blue border border-cloud-blue relative overflow-hidden">
<div className="flex justify-between items-start mb-3">
<span className="text-xs uppercase font-extrabold tracking-wider text-secondary-text">Health Index</span>
<span className="px-2.5 py-0.5 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">+12% MoM</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl font-black text-deep-navy">94</span>
<span className="text-xl text-secondary-text">/100</span>
</div>
<p className="text-xs text-secondary-text mb-4" data-aos="fade-up" data-aos-delay="200">6 critical resolutions recorded across 4,190 discovered URL pathways.</p>
<div className="w-full bg-soft-blue/40 rounded-full h-2 overflow-hidden">
<div className="bg-seotriks-blue h-2 rounded-full" style={{ width: '94%' }}></div>
</div>
</div>
{/* Signal Graph Preview */}
<div className="p-6 rounded-xl bg-ice-blue border border-cloud-blue">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-bold text-deep-navy">Crawl Efficiency Signal</span>
<span className="text-xs font-bold text-status-success">+38.4%</span>
</div>
<svg className="w-full h-16" fill="none" viewBox="0 0 240 60">
<path d="M 0 50 Q 40 45 70 30 T 140 38 T 200 12 T 240 8" fill="none" stroke="#4583E8" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M 0 50 Q 40 45 70 30 T 140 38 T 200 12 T 240 8 L 240 60 L 0 60 Z" fill="url(#sigHeroGradient)" opacity="0.15"></path>
<defs>
<linearGradient id="sigHeroGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#4583E8"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
</linearGradient>
</defs>
</svg>
<div className="flex justify-between items-center text-[10px] text-secondary-text font-medium mt-2">
<span>May 01</span>
<span>May 15</span>
<span className="text-seotriks-blue font-bold">Today (Realtime)</span>
</div>
</div>
</div>
{/* Col 2: Priority Action Queue */}
<div className="lg:col-span-8 flex flex-col gap-3.5">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-seotriks-blue text-xl">checklist_rtl</span>
<h3 className="text-lg font-bold text-deep-navy" data-aos="fade-up" data-aos-delay="100">Automated Priority Queue</h3>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">3 High Impact</span>
</div>
{/* Action Item 1 */}
<div className="p-4 rounded-xl bg-ice-blue border border-cloud-blue hover:border-seotriks-blue transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-critical mt-0.5 text-xl">error</span>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-deep-navy">Canonical mismatch loop detected</span>
<span className="px-2 py-0.2 rounded-full bg-red-100 text-status-critical text-[10px] font-bold">CRITICAL</span>
</div>
<p className="text-xs text-secondary-text mt-0.5" data-aos="fade-up" data-aos-delay="200">Route <code className="text-seotriks-blue font-semibold">/pricing/enterprise</code> claims self-canonical while sitemap targets <code className="text-seotriks-blue font-semibold">/pricing</code>.</p>
</div>
</div>
<button className="shrink-0 bg-seotriks-blue text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#326ec8] transition-colors shadow-sm" data-aos="fade-up" data-aos-delay="300">
                Apply Fix
              </button>
</div>
{/* Action Item 2 */}
<div className="p-4 rounded-xl bg-ice-blue border border-cloud-blue hover:border-seotriks-blue transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-warning mt-0.5 text-xl">warning</span>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-deep-navy">Missing primary H1 tag hierarchy</span>
<span className="px-2 py-0.2 rounded-full bg-amber-100 text-status-warning text-[10px] font-bold">REVENUE RISK</span>
</div>
<p className="text-xs text-secondary-text mt-0.5" data-aos="fade-up" data-aos-delay="200">Affects 14 high-volume product SKU catalog pages ranking between #4 and #8.</p>
</div>
</div>
<button className="shrink-0 bg-white text-seotriks-blue border border-soft-blue text-xs font-bold px-4 py-2 rounded-lg hover:bg-cloud-blue/50 transition-colors shadow-sm" data-aos="fade-up" data-aos-delay="300">
                Generate Tags
              </button>
</div>
{/* Action Item 3 */}
<div className="p-4 rounded-xl bg-ice-blue border border-cloud-blue hover:border-seotriks-blue transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-seotriks-blue mt-0.5 text-xl">speed</span>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-deep-navy">4.2s Mobile LCP degradation</span>
<span className="px-2 py-0.2 rounded-full bg-cloud-blue text-seotriks-blue text-[10px] font-bold">CORE WEB VITALS</span>
</div>
<p className="text-xs text-secondary-text mt-0.5" data-aos="fade-up" data-aos-delay="200">Uncompressed hero vector weights 1.9MB on template entry modules.</p>
</div>
</div>
<button className="shrink-0 bg-white text-seotriks-blue border border-soft-blue text-xs font-bold px-4 py-2 rounded-lg hover:bg-cloud-blue/50 transition-colors shadow-sm" data-aos="fade-up" data-aos-delay="300">
                Optimize Assets
              </button>
</div>
{/* Embedded AI Agent Suggestion Bar */}
<div className="mt-2 p-3.5 rounded-xl bg-cloud-blue/60 border border-soft-blue flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-seotriks-blue text-lg">psychology</span>
<span className="text-xs text-deep-navy font-semibold">SEOtriks AI Agent: "Executing these 3 fixes will recover an estimated +4,800 monthly visits."</span>
</div>
<span className="text-xs text-seotriks-blue font-bold hover:underline cursor-pointer shrink-0">Auto-Apply All</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 2. TRUST & SOCIAL VALIDATION STRIP */}
<section className="w-full bg-white border-y border-light-border py-12 px-6" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<p className="text-xs text-secondary-text tracking-widest uppercase font-extrabold mb-8 text-center" data-aos="fade-up" data-aos-delay="200">
        Trusted by over 4,200+ forward-thinking SEOs, agencies, and hyper-growth brands
      </p>
<div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
<div className="flex items-center gap-2 text-lg font-black text-deep-navy hover:text-seotriks-blue transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xl text-seotriks-blue">rocket_launch</span> Veloce
        </div>
<div className="flex items-center gap-2 text-lg font-black text-deep-navy hover:text-seotriks-blue transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xl text-seotriks-blue">layers</span> StackWave
        </div>
<div className="flex items-center gap-2 text-lg font-black text-deep-navy hover:text-seotriks-blue transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xl text-seotriks-blue">terminal</span> DevPulse
        </div>
<div className="flex items-center gap-2 text-lg font-black text-deep-navy hover:text-seotriks-blue transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xl text-seotriks-blue">analytics</span> MetricsOps
        </div>
<div className="flex items-center gap-2 text-lg font-black text-deep-navy hover:text-seotriks-blue transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xl text-seotriks-blue">all_inclusive</span> InfinityScale
        </div>
<div className="flex items-center gap-2 text-lg font-black text-deep-navy hover:text-seotriks-blue transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xl text-seotriks-blue">cloud_sync</span> CloudIndex
        </div>
</div>
</div>
</section>
{/* 3. BENEFIT PILLARS SECTION */}
<section className="w-full py-24 px-6 bg-ice-blue" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="text-xs text-seotriks-blue font-extrabold tracking-widest uppercase mb-3">Clarity Over Chaos</div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-deep-navy mb-4 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Engineered to cut through endless search noise
        </h2>
<p className="text-base sm:text-lg text-secondary-text" data-aos="fade-up" data-aos-delay="200">
          Legacy tools dump gigabytes of raw data in your lap. SEOtriks continuously triages, scores, and directs your team toward immediate revenue-generating adjustments.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Benefit 1 */}
<div className="p-8 rounded-2xl bg-white border border-light-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-12 h-12 rounded-xl bg-cloud-blue flex items-center justify-center text-seotriks-blue mb-6">
<span className="material-symbols-outlined text-2xl">filter_alt</span>
</div>
<h3 className="text-xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">Complexity to Clarity</h3>
<p className="text-sm text-secondary-text mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Automated triage distills 10,000+ crawl errors into the top 3 highest-leverage items to fix today. No more wading through spreadsheet graveyards.
            </p>
</div>
<div className="p-4 rounded-xl bg-ice-blue flex items-center justify-between border border-light-border">
<span className="text-xs font-semibold text-secondary-text">Avg. resolution velocity</span>
<span className="text-sm font-extrabold text-seotriks-blue">3.4x Faster</span>
</div>
</div>
{/* Benefit 2 */}
<div className="p-8 rounded-2xl bg-white border border-light-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-12 h-12 rounded-xl bg-cloud-blue flex items-center justify-center text-seotriks-blue mb-6">
<span className="material-symbols-outlined text-2xl">shield_with_heart</span>
</div>
<h3 className="text-xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">24/7 SEO Defense Guard</h3>
<p className="text-sm text-secondary-text mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Active algorithmic surveillance triggers instant webhooks when canonicals change, robots directives drop, or critical pages lose schema integrity.
            </p>
</div>
<div className="p-4 rounded-xl bg-ice-blue flex items-center justify-between border border-light-border">
<span className="text-xs font-semibold text-secondary-text">De-indexation prevention</span>
<span className="text-sm font-extrabold text-status-success">99.8% Safety</span>
</div>
</div>
{/* Benefit 3 */}
<div className="p-8 rounded-2xl bg-white border border-light-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-12 h-12 rounded-xl bg-cloud-blue flex items-center justify-center text-seotriks-blue mb-6">
<span className="material-symbols-outlined text-2xl">radar</span>
</div>
<h3 className="text-xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">Growth Opportunity Radar</h3>
<p className="text-sm text-secondary-text mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              High-intent keyword gaps and decaying legacy content are mathematically ranked by conversion value, making your next content sprint foolproof.
            </p>
</div>
<div className="p-4 rounded-xl bg-ice-blue flex items-center justify-between border border-light-border">
<span className="text-xs font-semibold text-secondary-text">Identified revenue lift</span>
<span className="text-sm font-extrabold text-seotriks-blue">+27% Avg</span>
</div>
</div>
</div>
</div>
</section>
{/* 4. SERVICES BENTO GRID */}
<section className="w-full py-20 px-6 bg-white border-t border-light-border" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
<div>
<span className="text-xs text-seotriks-blue font-extrabold tracking-widest uppercase">The SEOtriks Suite</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-deep-navy mt-2" data-aos="fade-up" data-aos-delay="100">Comprehensive Search Intelligence</h2>
</div>
<p className="text-sm sm:text-base text-secondary-text max-w-md" data-aos="fade-up" data-aos-delay="200">
          A coherent operational ecosystem configured for real-time organic discovery and technical durability.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Bento 1: Deep Crawler Diagnostics (8 Cols) */}
<div className="md:col-span-8 p-8 rounded-2xl bg-ice-blue border border-cloud-blue shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">Technical Architecture</span>
<span className="text-xs text-secondary-text font-semibold">Real-time Stream</span>
</div>
<h3 className="text-2xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">Continuous Search Signal Spider</h3>
<p className="text-sm text-secondary-text max-w-xl mb-6" data-aos="fade-up" data-aos-delay="200">
              Our headless crawler parses JavaScript execution, discovers orphan clusters, verifies hreflang parity, and graphs site depth down to level 10.
            </p>
</div>
{/* Crawl Topology Visualization */}
<div className="p-5 rounded-xl bg-white border border-light-border">
<div className="flex items-center justify-between text-xs font-bold mb-3">
<span className="text-deep-navy">Site Topology Depth Index</span>
<span className="text-seotriks-blue font-mono">12,482 Nodes Analyzed</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
<div className="p-3 bg-ice-blue rounded-lg">
<span className="block text-lg font-bold text-deep-navy">Level 1</span>
<span className="text-xs text-status-success font-semibold">100% Indexable</span>
</div>
<div className="p-3 bg-ice-blue rounded-lg">
<span className="block text-lg font-bold text-deep-navy">Level 2</span>
<span className="text-xs text-status-success font-semibold">98.4% Pass</span>
</div>
<div className="p-3 bg-ice-blue rounded-lg">
<span className="block text-lg font-bold text-deep-navy">Level 3</span>
<span className="text-xs text-status-warning font-semibold">91.2% Pass</span>
</div>
<div className="p-3 bg-ice-blue rounded-lg">
<span className="block text-lg font-bold text-deep-navy">Level 4+</span>
<span className="text-xs text-status-critical font-semibold">24 Deep Orphans</span>
</div>
</div>
</div>
</div>
{/* Bento 2: SERP Radar (4 Cols) */}
<div className="md:col-span-4 p-8 rounded-2xl bg-ice-blue border border-cloud-blue shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">Competitive Intel</span>
<span className="material-symbols-outlined text-seotriks-blue text-xl">query_stats</span>
</div>
<h3 className="text-2xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">SERP Fluctuation Radar</h3>
<p className="text-sm text-secondary-text mb-6" data-aos="fade-up" data-aos-delay="200">
              Track algorithm turbulence and preempt competitors capturing your prime snippet listings.
            </p>
</div>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-white border border-light-border flex items-center justify-between">
<span className="text-xs font-semibold text-deep-navy truncate">"ai seo automation"</span>
<span className="px-2 py-0.5 rounded bg-cloud-blue text-seotriks-blue font-bold text-xs">#2 ↑ 3</span>
</div>
<div className="p-3 rounded-lg bg-white border border-light-border flex items-center justify-between">
<span className="text-xs font-semibold text-deep-navy truncate">"technical crawl audit"</span>
<span className="px-2 py-0.5 rounded bg-cloud-blue text-seotriks-blue font-bold text-xs">#1 HOLD</span>
</div>
</div>
</div>
{/* Bento 3: Content Intelligence (4 Cols) */}
<div className="md:col-span-4 p-8 rounded-2xl bg-ice-blue border border-cloud-blue shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">Semantic Coverage</span>
<span className="material-symbols-outlined text-seotriks-blue text-xl">edit_note</span>
</div>
<h3 className="text-2xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">Content Decay &amp; Refresh</h3>
<p className="text-sm text-secondary-text mb-6" data-aos="fade-up" data-aos-delay="200">
              Pinpoint high-performing articles that lost impression share and get AI-generated refresh briefs.
            </p>
</div>
<div className="p-4 rounded-xl bg-white border border-light-border flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-seotriks-blue text-white flex items-center justify-center font-bold">
<span className="material-symbols-outlined">update</span>
</div>
<div>
<div className="text-sm font-bold text-deep-navy">18 Evergreen Assets</div>
<div className="text-xs text-secondary-text">Ready for algorithmic refresh</div>
</div>
</div>
</div>
{/* Bento 4: Automated Schema & Edge Scripts (8 Cols) */}
<div className="md:col-span-8 p-8 rounded-2xl bg-ice-blue border border-cloud-blue shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">Edge Acceleration</span>
<span className="text-xs text-seotriks-blue font-bold">Cloudflare &amp; Fastly Ready</span>
</div>
<h3 className="text-2xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">Instant Schema &amp; Redirect Injection</h3>
<p className="text-sm text-secondary-text max-w-xl mb-6" data-aos="fade-up" data-aos-delay="200">
              Implement structured JSON-LD schemas and fix cascading redirect hops directly via CDN workers without waiting for standard sprint development deployments.
            </p>
</div>
<div className="p-4 rounded-xl bg-deep-navy font-mono text-xs text-cloud-blue flex items-center justify-between">
          {`{"@context": "https://schema.org", "@type": "SoftwareApplication"}`}
<span className="px-2.5 py-1 rounded bg-seotriks-blue text-white font-sans text-xs font-bold shrink-0 ml-3">Verified JSON</span>
</div>
</div>
</div>
</div>
</section>
{/* 5. AI AGENT PRODUCT SHOWCASE */}
<section className="w-full py-24 px-6 bg-ice-blue" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">
<span className="material-symbols-outlined text-base">smart_toy</span>
          Autonomous SEO Engineer
        </div>
<h2 className="text-3xl sm:text-4xl font-extrabold text-deep-navy tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="100">
          Don't just find issues. Have our Agent write the fix.
        </h2>
<p className="text-base text-secondary-text leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          The SEOtriks Agent analyzes your entire stack, drafts exact pull requests, outputs validated JSON-LD schema payloads, and provides one-click edge worker configs.
        </p>
<ul className="space-y-3 pt-2 text-sm text-deep-navy font-medium">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-status-success text-xl">check_circle</span>
<span>One-click GitHub pull requests for missing canonicals &amp; meta data</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-status-success text-xl">check_circle</span>
<span>Generates error-free Schema.org JSON-LD definitions</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-status-success text-xl">check_circle</span>
<span>Synthesizes robots.txt rules that safeguard server crawl budget</span>
</li>
</ul>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-seotriks-blue hover:bg-[#326ec8] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-sm transition-all" data-aos="fade-up" data-aos-delay="300" href="/services">
<span>Explore Agent Capabilities</span>
<span className="material-symbols-outlined text-base">chevron_right</span>
</a>
</div>
</div>
{/* Agent Terminal Preview */}
<div className="lg:col-span-7 rounded-2xl bg-deep-navy text-white shadow-2xl p-6 sm:p-8 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-seotriks-blue flex items-center justify-center text-white font-bold">
<span className="material-symbols-outlined text-base">terminal</span>
</div>
<div>
<div className="text-sm font-bold text-white">SEOtriks Copilot Shell</div>
<div className="text-xs text-soft-blue">Session: Autonomous Audit Mode #382</div>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-seotriks-blue/20 text-cloud-blue text-xs font-mono">AGENT IDLE</span>
</div>
<div className="space-y-4 font-mono text-xs sm:text-sm">
<div className="flex items-start gap-2">
<span className="text-medium-blue font-bold">&gt; user:</span>
<p className="text-white" data-aos="fade-up" data-aos-delay="200">Check why Google isn't indexing our recent product release at /products/enterprise-v2.</p>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/10">
<div className="flex items-center gap-2 text-cloud-blue font-bold mb-2">
<span className="material-symbols-outlined text-base">neurology</span> SEOtriks Agent:
            </div>
<p className="text-white/80 font-sans text-xs mb-3" data-aos="fade-up" data-aos-delay="200">
              Identified blocker: The target URL contains <code className="text-medium-blue bg-white/10 px-1 py-0.5 rounded">&lt;meta name="robots" content="noindex"&gt;</code> inherited from the staging environment template.
            </p>
<div className="p-3 rounded bg-black/40 text-xs font-mono text-white/90 overflow-x-auto mb-3">
<span className="text-white/40">// Proposed Git Diff for page-header.tsx</span><br/>
<span className="text-status-critical">- &lt;meta name="robots" content="noindex, nofollow" /&gt;</span><br/>
<span className="text-status-success">+ &lt;meta name="robots" content="index, follow, max-image-preview:large" /&gt;</span>
</div>
<div className="flex items-center gap-3 font-sans">
<button className="bg-seotriks-blue hover:bg-[#326ec8] text-white text-xs font-bold px-4 py-1.5 rounded transition-all" data-aos="fade-up" data-aos-delay="300">
                Create Pull Request
              </button>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded transition-all" data-aos="fade-up" data-aos-delay="300">
                Copy Snippet
              </button>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 6. HOW IT WORKS WORKFLOW */}
<section className="w-full py-24 px-6 bg-white border-t border-light-border" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs text-seotriks-blue font-extrabold tracking-widest uppercase">The Operating Model</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-deep-navy mt-2 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          How SEOtriks powers your organic engine
        </h2>
<p className="text-base sm:text-lg text-secondary-text mt-3" data-aos="fade-up" data-aos-delay="200">
          Zero lengthy onboarding. Start generating verifiable crawl wins within 10 minutes of integration.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Step 1 */}
<div className="p-8 rounded-2xl bg-ice-blue border border-cloud-blue flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-5xl font-black text-soft-blue">01</span>
<div className="w-12 h-12 rounded-xl bg-cloud-blue flex items-center justify-center text-seotriks-blue">
<span className="material-symbols-outlined text-2xl">cable</span>
</div>
</div>
<h3 className="text-xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">Connect Your Domain</h3>
<p className="text-sm text-secondary-text leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Plug in your root domain, Google Search Console, or CDN endpoints. SEOtriks immediately generates a full crawl vector graph without rate-limiting your servers.
            </p>
</div>
<div className="mt-8 pt-4 flex items-center text-seotriks-blue text-xs font-bold">
<span>Takes &lt; 60 seconds</span>
</div>
</div>
{/* Step 2 */}
<div className="p-8 rounded-2xl bg-ice-blue border border-cloud-blue flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-5xl font-black text-soft-blue">02</span>
<div className="w-12 h-12 rounded-xl bg-cloud-blue flex items-center justify-center text-seotriks-blue">
<span className="material-symbols-outlined text-2xl">model_training</span>
</div>
</div>
<h3 className="text-xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">AI Prioritizes Value</h3>
<p className="text-sm text-secondary-text leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Our algorithmic engine eliminates trivial audit noise and filters directly to the 3-5 changes that will deliver measurable impression and traffic gains.
            </p>
</div>
<div className="mt-8 pt-4 flex items-center text-seotriks-blue text-xs font-bold">
<span>Zero manual spreadsheet work</span>
</div>
</div>
{/* Step 3 */}
<div className="p-8 rounded-2xl bg-ice-blue border border-cloud-blue flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-8">
<span className="text-5xl font-black text-soft-blue">03</span>
<div className="w-12 h-12 rounded-xl bg-cloud-blue flex items-center justify-center text-seotriks-blue">
<span className="material-symbols-outlined text-2xl">published_with_changes</span>
</div>
</div>
<h3 className="text-xl font-bold text-deep-navy mb-3" data-aos="fade-up" data-aos-delay="100">Deploy &amp; Verify Impact</h3>
<p className="text-sm text-secondary-text leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Ship recommended code or metadata fixes. The system instantly performs before/after recrawls and charts your organic ranking acceleration.
            </p>
</div>
<div className="mt-8 pt-4 flex items-center text-seotriks-blue text-xs font-bold">
<span>Automated re-crawl confirmations</span>
</div>
</div>
</div>
</div>
</section>
{/* 7. BEFORE / AFTER COMPARISON SECTION */}
<section className="w-full py-24 px-6 bg-ice-blue" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs text-seotriks-blue font-extrabold tracking-widest uppercase">The Paradigm Shift</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-deep-navy mt-2 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Legacy Dashboards vs. SEOtriks Action Engine
        </h2>
<p className="text-base sm:text-lg text-secondary-text mt-3" data-aos="fade-up" data-aos-delay="200">
          See why modern growth leaders are migrating away from static tables and passive monitoring.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
{/* Legacy Side */}
<div className="p-8 sm:p-10 rounded-2xl bg-white border border-light-border shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary-text text-2xl">cancel</span>
<h3 className="text-xl font-bold text-deep-navy" data-aos="fade-up" data-aos-delay="100">Traditional SEO Tools</h3>
</div>
<ul className="space-y-4 text-sm text-secondary-text">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-critical text-base mt-0.5">close</span>
<span>Endless 50,000-row CSV exports that overwhelm your engineering squad</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-critical text-base mt-0.5">close</span>
<span>No context on which crawl warning actually hurts search revenue</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-critical text-base mt-0.5">close</span>
<span>Manual re-verification required weeks after code has deployed</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-critical text-base mt-0.5">close</span>
<span>Fragmented tools for rankings, crawlers, content, and schemas</span>
</li>
</ul>
</div>
<div className="mt-8 p-4 rounded-xl bg-ice-blue border border-light-border text-xs text-secondary-text font-bold text-center">
            Outcome: Analysis paralysis &amp; stalled sprints
          </div>
</div>
{/* SEOtriks Side */}
<div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-seotriks-blue shadow-lg flex flex-col justify-between relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
<div className="absolute top-0 right-0 w-32 h-32 bg-cloud-blue/50 rounded-full blur-2xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-seotriks-blue text-2xl">check_circle</span>
<h3 className="text-xl font-bold text-deep-navy" data-aos="fade-up" data-aos-delay="100">SEOtriks Action Engine</h3>
</div>
<span className="px-3 py-1 rounded-full bg-cloud-blue text-seotriks-blue text-xs font-bold">THE NEW STANDARD</span>
</div>
<ul className="space-y-4 text-sm text-deep-navy font-medium">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-success text-base mt-0.5">done</span>
<span><strong>Prioritized 3-item queues</strong> ranked directly by algorithmic leverage</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-success text-base mt-0.5">done</span>
<span><strong>AI Code Generation:</strong> Copy-ready PRs, JSON-LD, and robots directives</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-success text-base mt-0.5">done</span>
<span><strong>Instant post-deploy spider</strong> triggers automatically upon URL release</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-status-success text-base mt-0.5">done</span>
<span><strong>Real-time 24/7 Shield:</strong> Defends against meta alterations &amp; index drops</span>
</li>
</ul>
</div>
<div className="mt-8 p-4 rounded-xl bg-seotriks-blue text-white text-xs font-bold text-center shadow-sm" data-aos="fade-up" data-aos-duration="1000">
            Outcome: 3x faster fix velocity &amp; +64% organic growth
          </div>
</div>
</div>
</div>
</section>
{/* 8. TESTIMONIALS & SOCIAL PROOF */}
<section className="w-full py-24 px-6 bg-white border-t border-light-border" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs text-seotriks-blue font-extrabold tracking-widest uppercase">Verified Results</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-deep-navy mt-2 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          What search leaders achieve with SEOtriks
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Review 1 */}
<div className="p-8 rounded-2xl bg-ice-blue border border-cloud-blue flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-status-warning mb-4">
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
<p className="text-sm text-primary-text italic mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              "We retired a 4-tool stack for SEOtriks. The Priority Queue alone saved our engineering team 30 hours of meaningless debugging last month."
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-cloud-blue">
<div className="w-10 h-10 rounded-full bg-seotriks-blue text-white flex items-center justify-center font-bold text-sm">SL</div>
<div>
<div className="text-sm font-bold text-deep-navy">Sarah Lindqvist</div>
<div className="text-xs text-secondary-text">VP Growth, Veloce Labs</div>
</div>
</div>
</div>
{/* Review 2 */}
<div className="p-8 rounded-2xl bg-ice-blue border border-cloud-blue flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-status-warning mb-4">
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
<p className="text-sm text-primary-text italic mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              "SEO Guard caught a staging meta robots tag that made it to our live catalog at 2 AM. That single notification prevented a catastrophe."
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-cloud-blue">
<div className="w-10 h-10 rounded-full bg-medium-blue text-white flex items-center justify-center font-bold text-sm">DR</div>
<div>
<div className="text-sm font-bold text-deep-navy">David Rivera</div>
<div className="text-xs text-secondary-text">Head of SEO, StackWave</div>
</div>
</div>
</div>
{/* Review 3 */}
<div className="p-8 rounded-2xl bg-ice-blue border border-cloud-blue flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-status-warning mb-4">
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
<p className="text-sm text-primary-text italic mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              "The automatic GitHub Pull Request generator is magic. Our dev team actually merges SEO tickets now because the code diff is already written."
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-cloud-blue">
<div className="w-10 h-10 rounded-full bg-deep-navy text-white flex items-center justify-center font-bold text-sm">MK</div>
<div>
<div className="text-sm font-bold text-deep-navy">Markus Keller</div>
<div className="text-xs text-secondary-text">Founder, DevPulse Digital</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 9. FINAL HIGH-IMPACT CONVERSION CTA */}
<section className="w-full py-20 px-6 bg-gradient-to-r from-medium-blue via-seotriks-blue to-deep-navy text-white text-center relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
<div className="relative max-w-4xl mx-auto space-y-6">
<div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-white">
<span className="material-symbols-outlined text-2xl">rocket_launch</span>
</div>
<h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight" data-aos="fade-up" data-aos-delay="100">
        Ready to diagnose and fix your ranking blind spots?
      </h2>
<p className="text-base sm:text-lg text-cloud-blue max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
        Join over 12,000 engineering-led growth teams using SEOtriks to turn ambiguous search traffic into high-converting revenue.
      </p>
<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-seotriks-blue hover:bg-cloud-blue font-bold px-8 py-3.5 rounded-lg shadow-lg transition-all active:scale-95 text-base" data-aos="fade-up" data-aos-delay="300" href="/pricing">
          Start 14-Day Free Trial
        </a>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg border border-white/20 transition-all text-base" data-aos="fade-up" data-aos-delay="300" href="/contact">
          Schedule Engineer Call
        </a>
</div>
<p className="text-xs text-cloud-blue/80 pt-2" data-aos="fade-up" data-aos-delay="200">No credit card required • Connects in 60 seconds • Cancel anytime</p>
</div>
</section>
</main>
    );
}
