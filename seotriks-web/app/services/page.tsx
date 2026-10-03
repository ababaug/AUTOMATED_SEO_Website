export default function Page() {
    return (
        <main className="w-full flex-1 pt-16 bg-background relative overflow-hidden"><div className="flex flex-col w-full">
{/* Top Hero & Navigation Filter Segment */}
<section className="relative w-full pt-12 pb-16 px-margin sm:px-margin-md lg:px-margin-lg bg-surface overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
{/* Algorithmic Nodes Background Decoration */}
<div className="absolute inset-0 pointer-events-none opacity-40">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient cx="50%" cy="30%" id="service-glow" r="50%">
<stop offset="0%" stop-color="#3072d6" stop-opacity="0.12"></stop>
<stop offset="100%" stop-color="#faf8ff" stop-opacity="0"></stop>
</radialGradient>
</defs>
<rect fill="url(#service-glow)" height="100%" width="100%"></rect>
<g stroke="#d9e2ff" strokeDasharray="3 3" strokeWidth="1.2">
<line x1="10%" x2="40%" y1="20%" y2="50%"></line>
<line x1="40%" x2="70%" y1="50%" y2="30%"></line>
<line x1="70%" x2="90%" y1="30%" y2="70%"></line>
<line x1="40%" x2="50%" y1="50%" y2="85%"></line>
</g>
<circle cx="10%" cy="20%" fill="#0059ba" r="4"></circle>
<circle cx="40%" cy="50%" fill="#3072d6" r="6"></circle>
<circle cx="70%" cy="30%" fill="#0059ba" r="5"></circle>
<circle cx="90%" cy="70%" fill="#8cb3ff" r="4"></circle>
<circle cx="50%" cy="85%" fill="#3072d6" r="5"></circle>
</svg>
</div>
<div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md mb-space-md shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>hub</span>
        Search Signals Suite v4.2
      </div>
<h1 className="font-display-hero text-headline-lg sm:text-display-hero text-on-surface max-w-4xl tracking-tight" data-aos="fade-down" data-aos-delay="0">
        The Complete Action-Oriented SEO Capability Suite
      </h1>
<p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-3xl" data-aos="fade-up" data-aos-delay="200">
        From automated root-cause audits to proactive rank defense and AI-assisted remediation, discover how SEOtriks powers modern organic search growth.
      </p>
{/* Category Filter Pills */}
<div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-surface-container-high/60 shadow-sm backdrop-blur-md" data-aos="fade-up" data-aos-duration="1000">
<button className="category-pill px-5 py-2 rounded-lg font-label-lg text-label-lg bg-primary text-on-primary transition-all shadow-sm" data-aos="fade-up" data-aos-delay="300" >
          All Capabilities (12)
        </button>
<button className="category-pill px-5 py-2 rounded-lg font-label-lg text-label-lg bg-transparent text-on-surface-variant hover:text-primary transition-all" data-aos="fade-up" data-aos-delay="300" >
          Technical SEO
        </button>
<button className="category-pill px-5 py-2 rounded-lg font-label-lg text-label-lg bg-transparent text-on-surface-variant hover:text-primary transition-all" data-aos="fade-up" data-aos-delay="300" >
          Search Performance
        </button>
<button className="category-pill px-5 py-2 rounded-lg font-label-lg text-label-lg bg-transparent text-on-surface-variant hover:text-primary transition-all" data-aos="fade-up" data-aos-delay="300" >
          AI &amp; Intelligence
        </button>
<button className="category-pill px-5 py-2 rounded-lg font-label-lg text-label-lg bg-transparent text-on-surface-variant hover:text-primary transition-all" data-aos="fade-up" data-aos-delay="300" >
          Automation &amp; Guard
        </button>
</div>
</div>
</section>
{/* 12 Service Capabilities Catalog */}
<section className="w-full py-12 px-margin sm:px-margin-md lg:px-margin-lg bg-surface-container-low" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="serviceGrid">
{/* 1. Technical SEO Audits */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="technical">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">account_tree</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Technical</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">Technical SEO Audits</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Deep crawler engine diagnosing indexability bottlenecks, Core Web Vitals regressions, and rendering failures across millions of URLs.
            </p>
{/* Visual Element: Interactive Tree Mini-Graph */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center justify-between text-xs font-label-md text-on-surface-variant mb-2">
<span>Crawl Depth Graph</span>
<span className="font-bold text-primary">99.4% Indexable</span>
</div>
<div className="flex items-center gap-1.5 h-6">
<div className="h-full w-1/4 rounded bg-primary flex items-center justify-center text-[10px] text-on-primary font-bold">L1</div>
<div className="h-full w-2/4 rounded bg-primary-container flex items-center justify-center text-[10px] text-on-primary-container font-bold">L2 Deep</div>
<div className="h-full w-1/4 rounded bg-secondary-container flex items-center justify-center text-[10px] text-on-secondary-container font-bold">L3</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t-0 font-label-md text-label-md text-primary font-semibold">
<span>Core Web Vitals &amp; Crawl Tree</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 2. AI SEO Recommendations */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="intelligence">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">auto_fix_high</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Intelligence</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">AI SEO Recommendations</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Direct, contextual instruction sets specifying exact schema markup, canonical directives, and H-tag reorganizations in ready-to-merge code.
            </p>
{/* Visual Element: Code Patch Preview */}
<div className="p-3 rounded-lg bg-inverse-surface text-inverse-on-surface mb-6 font-mono text-[11px] leading-relaxed">
<div className="flex items-center justify-between text-outline-variant mb-1 border-b-0 pb-1">
<span>fix_schema.jsonld</span>
<span className="text-primary-fixed-dim">JSON-LD</span>
</div>
<div className="text-primary-fixed">{`+ "@type": "SoftwareApplication"`}</div>
<div className="text-secondary-fixed-dim">{`+ "aggregateRating": {"ratingValue": "4.9"}`}</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Context-Aware Patches</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 3. SEO Priority Engine */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="automation">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">troubleshoot</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Automation</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">SEO Priority Engine</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Machine-driven triage that stacks every diagnostic finding by revenue yield, organic opportunity size, and engineering effort.
            </p>
{/* Visual Element: Impact Scoring Scale */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 space-y-2" data-aos="fade-up" data-aos-duration="1000">
<div className="flex justify-between text-xs font-label-md">
<span className="text-on-surface font-semibold">P0 - Canonical Loop Fix</span>
<span className="text-primary font-bold">+$18.4k ARR</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2" data-aos="fade-up" data-aos-duration="1000">
<div className="bg-primary h-2 rounded-full w-[88%]"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Algorithmic Triage Matrix</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 4. SEO Guard (24/7 Monitoring) */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="automation">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">shield</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Automation</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">SEO Guard</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Continuous real-time sentry monitoring robots.txt changes, rogue noindex tags, HTTP 5xx spikes, and canonical tampering every 5 minutes.
            </p>
{/* Visual Element: Live Status Pulse */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Sentry Pulse Live</span>
</div>
<span className="text-xs font-mono text-outline font-semibold">Checks every 300s</span>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Instant Incident Defense</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 5. Search Performance */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="performance">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">trending_up</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Performance</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">Search Performance</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Continuous sync with Google Search Console API. Discovers early decay signals, sudden CTR anomalies, and long-tail query surges.
            </p>
{/* Visual Element: CTR Sparkline SVG */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6" data-aos="fade-up" data-aos-duration="1000">
<div className="flex justify-between items-center text-xs font-label-md mb-2">
<span className="text-on-surface-variant">Impressions vs CTR</span>
<span className="text-primary font-bold">+28.3%</span>
</div>
<svg className="w-full h-8" preserveAspectRatio="none" viewBox="0 0 200 32">
<path d="M0,28 Q30,22 60,25 T120,12 T180,6 L200,4" fill="none" stroke="#0059ba" strokeWidth="2.5"></path>
<path d="M0,28 Q30,22 60,25 T120,12 T180,6 L200,4 L200,32 L0,32 Z" fill="#0059ba" fill-opacity="0.1"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>GSC Integration &amp; CTR Curves</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 6. Content Health */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="performance">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">layers</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Performance</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">Content Health</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Clustering models to detect thin pages, near-duplicate intents, cannibalized keywords, and low-engagement zombie articles.
            </p>
{/* Visual Element: Cannibalization Indicator */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="text-xs font-semibold text-on-surface">Target: "enterprise crm"</div>
<div className="text-[11px] text-outline">3 pages competing</div>
</div>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container-high text-primary font-bold">Resolved</span>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Intent Clustering Engine</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 7. Smart Content Refresh */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="intelligence">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">update</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Intelligence</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">Smart Content Refresh</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              AI-driven editorial delta identification. Pinpoints outdated entities, absent semantics, and competitor topic additions that reclaim SERP #1.
            </p>
{/* Visual Element: Semantic Delta Comparison */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center justify-between text-xs font-label-md mb-1.5">
<span className="text-on-surface-variant">Entity Coverage Depth</span>
<span className="font-bold text-primary">87 / 100</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5" data-aos="fade-up" data-aos-duration="1000">
<div className="bg-primary h-1.5 rounded-full w-[87%]"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Entity Enrichment Engine</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 8. SEO Opportunities */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="technical">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">diamond</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Technical</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">SEO Opportunities</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Automated internal linking graphs and keyword strike-zone detection (positions 4 to 12) needing only link equity transfers to rank top 3.
            </p>
{/* Visual Element: Internal Link Distribution */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">link</span>
<span className="font-label-sm text-label-sm text-on-surface">32 Internal Links Suggested</span>
</div>
<span className="text-xs font-bold text-secondary font-mono">+12 Pos Avg</span>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Link Graph Rebalancing</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 9. Competitor Radar */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="intelligence">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">radar</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Intelligence</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">Competitor Radar</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Track competitor programmatic moves, newly launched sitemaps, shifting backlink velocity, and organic rank takeover strategies in real time.
            </p>
{/* Visual Element: Competitor Comparison Pill */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 space-y-1.5" data-aos="fade-up" data-aos-duration="1000">
<div className="flex justify-between text-xs">
<span className="text-on-surface-variant">Competitor A (Velocity)</span>
<span className="text-error font-semibold">+140 URLs/wk</span>
</div>
<div className="flex justify-between text-xs font-bold text-primary">
<span>Our Counter-Pace</span>
<span>Optimal (Shielded)</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Competitive Velocity Intel</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 10. AI Visibility */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="intelligence">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">neurology</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Intelligence</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">AI Visibility (GEO)</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Monitor brand and domain citations across generative engines: ChatGPT Search, Perplexity Pro, and Google Gemini AI Overviews.
            </p>
{/* Visual Element: AI Engines Tracked */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 flex items-center justify-around" data-aos="fade-up" data-aos-duration="1000">
<div className="text-center">
<div className="font-headline-sm text-headline-sm text-primary">74%</div>
<div className="text-[10px] text-outline-variant font-bold uppercase">Perplexity</div>
</div>
<div className="text-center">
<div className="font-headline-sm text-headline-sm text-secondary">82%</div>
<div className="text-[10px] text-outline-variant font-bold uppercase">ChatGPT</div>
</div>
<div className="text-center">
<div className="font-headline-sm text-headline-sm text-primary-container">68%</div>
<div className="text-[10px] text-outline-variant font-bold uppercase">Gemini SGE</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Generative Engine Tracking</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 11. Change Verification */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="automation">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">verified</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Automation</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">Change Verification</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Automated post-deploy crawling. Closes tickets immediately when technical fixes hit production and triggers alerts if code breaks directives.
            </p>
{/* Visual Element: CI/CD Pipeline Badge */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="text-xs font-semibold text-on-surface">Commit #481d2a Verified</span>
</div>
<span className="font-mono text-[11px] text-outline">0 Errors</span>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>CI/CD Automated Re-Crawls</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/* 12. SEO Reporting */}
<div className="service-card flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group" data-aos="fade-up" data-aos-duration="1000" data-category="performance">
<div>
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">insert_chart</span>
</div>
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-bold uppercase tracking-wider">Performance</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2" data-aos="fade-up" data-aos-delay="100">SEO Reporting</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6" data-aos="fade-up" data-aos-delay="200">
              Executive white-label reporting with C-suite revenue attribution, direct Slack channel updates, and agency multi-client dashboards.
            </p>
{/* Visual Element: Multi-Channel Push Icons */}
<div className="p-3.5 rounded-lg bg-surface-container-low mb-6 flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">forward_to_inbox</span>
<span className="material-symbols-outlined text-primary text-sm">notifications</span>
<span className="material-symbols-outlined text-primary text-sm">download</span>
</div>
<span className="text-xs font-label-md font-bold text-on-surface">Automated Mon 9:00 AM</span>
</div>
</div>
<div className="flex items-center justify-between pt-3 font-label-md text-label-md text-primary font-semibold">
<span>Executive Client Dashboards</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/* Deep Feature Spotlight 1: "Fix It For Me" Showcase */}
<section className="w-full py-20 px-margin sm:px-margin-md lg:px-margin-lg bg-surface" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/* Content Side */}
<div className="lg:col-span-5 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-md text-label-md" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-base">bolt</span>
            Remediation Studio
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight" data-aos="fade-up" data-aos-delay="100">
            Stop generating endless audit spreadsheets. Start shipping fixes.
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
            SEOtriks goes beyond pointing out issues. Our "Fix It For Me" engine writes the production-ready code, validates semantic JSON-LD structures, and creates staging-ready CMS pull requests in seconds.
          </p>
<div className="space-y-4 pt-2">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-sm font-bold">check</span>
</div>
<p className="font-body-md text-body-md text-on-surface" data-aos="fade-up" data-aos-delay="200">
<strong>Structured Data Synthesis:</strong> Complete Schema.org Product, FAQ, and Breadcrumb code with dynamic parameters.
              </p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-sm font-bold">check</span>
</div>
<p className="font-body-md text-body-md text-on-surface" data-aos="fade-up" data-aos-delay="200">
<strong>Regex-Clean Redirect Maps:</strong> Clean 301 rules generated for Nginx, Apache, Netlify, and Cloudflare Workers.
              </p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-sm font-bold">check</span>
</div>
<p className="font-body-md text-body-md text-on-surface" data-aos="fade-up" data-aos-delay="200">
<strong>Meta Tag Refinement:</strong> Algorithmic titles and descriptions calibrated to historic highest-CTR query patterns.
              </p>
</div>
</div>
<div className="pt-4 flex items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all" data-aos="fade-up" data-aos-delay="300" data-path="signup" href="#">
<span>Try Automated Remediation</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</div>
{/* Interactive Mockup Side */}
<div className="lg:col-span-7">
<div className="rounded-2xl bg-surface-container-lowest shadow-xl overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
{/* IDE / Tool Topbar */}
<div className="bg-surface-container-high px-5 py-3.5 flex items-center justify-between" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-error"></div>
<div className="w-3 h-3 rounded-full bg-secondary-container"></div>
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="ml-3 font-mono text-xs text-on-surface-variant font-medium">SEOtriks // QuickFix Remediation Terminal</span>
</div>
<span className="px-2 py-0.5 rounded text-[11px] font-bold bg-primary text-on-primary">Active Suggestion</span>
</div>
<div className="p-6 space-y-6">
{/* Issue Card */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined">data_object</span>
</div>
<div>
<div className="font-headline-sm text-sm text-on-surface">Missing Organization &amp; Product Schema</div>
<div className="font-body-sm text-body-sm text-outline">Detected on 1,480 catalog category templates</div>
</div>
</div>
<span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wide">P0 Impact</span>
</div>
{/* Interactive Tab Content (Tabs simulation) */}
<div className="space-y-3">
<div className="flex items-center gap-2 border-b-0">
<button className="px-4 py-2 font-label-sm text-label-sm font-bold bg-surface-container text-primary rounded-t-lg" data-aos="fade-up" data-aos-delay="300">
                    Generated JSON-LD
                  </button>
<button className="px-4 py-2 font-label-sm text-label-sm font-bold text-on-surface-variant hover:text-primary rounded-t-lg" data-aos="fade-up" data-aos-delay="300">
                    Redirect Rules (.conf)
                  </button>
<button className="px-4 py-2 font-label-sm text-label-sm font-bold text-on-surface-variant hover:text-primary rounded-t-lg" data-aos="fade-up" data-aos-delay="300">
                    Robots Directives
                  </button>
</div>
<div className="p-4 rounded-xl bg-inverse-surface text-inverse-on-surface font-mono text-xs overflow-x-auto leading-relaxed">
<pre><span className="text-outline-variant">&lt;!-- Auto-generated by SEOtriks v4.2 --&gt;</span>
&lt;script type=<span className="text-primary-fixed-dim">"application/ld+json"</span>&gt;
{





}
&lt;/script&gt;</pre>
</div>
</div>
{/* Remediation Action Controls */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
<div className="flex items-center gap-2 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span>Syntax and Schema.org Validator Passed</span>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-surface-variant transition-colors" data-aos="fade-up" data-aos-delay="300">
                    Copy Snippet
                  </button>
<button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-sm transition-colors flex items-center justify-center gap-1.5" data-aos="fade-up" data-aos-delay="300">
<span className="material-symbols-outlined text-sm">publish</span>
                    Push to CMS / PR
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Deep Feature Spotlight 2: "SEO Guard in Action" */}
<section className="w-full py-20 px-margin sm:px-margin-md lg:px-margin-lg bg-surface-container-low" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md mb-4 shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-sm">notifications_active</span>
          Continuous Autonomous Protection
        </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight" data-aos="fade-up" data-aos-delay="100">
          How SEO Guard stops revenue bleeding at 02:14 AM
        </h2>
<p className="mt-4 font-body-lg text-body-lg text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
          Engineers push updates around the clock. SEO Guard catches breaking changes the minute they enter staging or production, dispatching immediate emergency remediations before Google recrawls.
        </p>
</div>
{/* Chronological Incident Flow Timeline */}
<div className="relative max-w-4xl mx-auto">
<div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-surface-container -translate-x-1/2 hidden sm:block" data-aos="fade-up" data-aos-duration="1000"></div>
<div className="space-y-10">
{/* Step 1: Rogue Push */}
<div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="w-full sm:w-[45%] text-left sm:text-right">
<span className="font-mono text-xs font-bold text-outline">02:14:02 AM UTC</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Faulty CI/CD Deploy Detected</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-2" data-aos="fade-up" data-aos-delay="200">
                A frontend release mistakenly adds <code className="bg-surface-container px-1 py-0.5 rounded text-xs text-error font-mono">&lt;meta name="robots" content="noindex"&gt;</code> to the high-converting <code className="text-xs font-mono">/products</code> subtree.
              </p>
</div>
<div className="w-10 h-10 rounded-full bg-error text-on-error flex items-center justify-center font-bold z-10 shrink-0 shadow-md" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-lg">warning</span>
</div>
<div className="w-full sm:w-[45%] p-4 rounded-xl bg-surface-container-lowest shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center justify-between text-xs font-mono text-outline mb-1">
<span>Deploy commit #83c0f7</span>
<span className="text-error font-bold">Severity: Critical</span>
</div>
<div className="text-xs font-mono text-error">Status: 200 OK with NOINDEX header</div>
</div>
</div>
{/* Step 2: Instant Triage & Webhook */}
<div className="relative flex flex-col sm:flex-row-reverse items-center justify-between gap-6">
<div className="w-full sm:w-[45%] text-left">
<span className="font-mono text-xs font-bold text-outline">02:14:18 AM UTC (16 seconds later)</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Multi-Channel Webhook Dispatched</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-2" data-aos="fade-up" data-aos-delay="200">
                SEO Guard sends an escalated alert directly into PagerDuty and the dedicated <code className="text-xs font-mono">#seo-alerts</code> Slack channel with a 1-click rollback snippet.
              </p>
</div>
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold z-10 shrink-0 shadow-md" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-lg">bolt</span>
</div>
<div className="w-full sm:w-[45%] p-4 rounded-xl bg-surface-container-lowest shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-2 mb-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Slack Alert: #seo-ops</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
                "URGENT: Noindex discovered on 4,120 URLs. Rollback PR generated #1842."
              </p>
</div>
</div>
{/* Step 3: Verified Remediation */}
<div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="w-full sm:w-[45%] text-left sm:text-right">
<span className="font-mono text-xs font-bold text-outline">02:22:40 AM UTC</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">Autonomous Verification</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-2" data-aos="fade-up" data-aos-delay="200">
                After the engineering team reverts the directive, SEO Guard re-crawls the exact affected URLs, confirms clean 200 indexable status, and updates incident metrics.
              </p>
</div>
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold z-10 shrink-0 shadow-md" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-lg">verified_user</span>
</div>
<div className="w-full sm:w-[45%] p-4 rounded-xl bg-surface-container-lowest shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center justify-between text-xs font-label-md mb-2">
<span className="text-primary font-bold">Zero De-indexing Recorded</span>
<span className="font-mono text-outline">Total incident: 8m 38s</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2" data-aos="fade-up" data-aos-duration="1000">
<div className="bg-primary h-2 rounded-full w-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* How It Works 5-Step Workflow */}
<section className="w-full py-20 px-margin sm:px-margin-md lg:px-margin-lg bg-surface" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
<div>
<span className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md uppercase tracking-wider font-bold">
            Execution Blueprint
          </span>
<h2 className="mt-4 font-headline-lg text-headline-lg text-on-surface tracking-tight" data-aos="fade-up" data-aos-delay="100">
            How SEOtriks Works Across Your Architecture
          </h2>
</div>
<p className="mt-4 md:mt-0 font-body-md text-body-md text-on-surface-variant max-w-md" data-aos="fade-up" data-aos-delay="200">
          A continuous lifecycle that transforms opaque search telemetry into verified, high-ranking production code.
        </p>
</div>
{/* 5-Step Horizontal Cards */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
{/* Step 1 */}
<div className="p-6 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="font-display-hero text-headline-lg font-black text-outline-variant/60 mb-4">01</div>
<h4 className="font-headline-sm text-sm text-on-surface mb-2 font-bold">Connect</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              Plug in your domain, CMS, GitHub repo, or Google Search Console in under 2 minutes.
            </p>
</div>
<div className="mt-6 flex items-center text-primary font-label-sm text-label-sm font-bold gap-1">
<span>OAuth &amp; API</span>
<span className="material-symbols-outlined text-sm">link</span>
</div>
</div>
{/* Step 2 */}
<div className="p-6 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="font-display-hero text-headline-lg font-black text-outline-variant/60 mb-4">02</div>
<h4 className="font-headline-sm text-sm text-on-surface mb-2 font-bold">Audit</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              Our bot parses rendering, robots, sitemaps, CWV, and index status across entire site graphs.
            </p>
</div>
<div className="mt-6 flex items-center text-primary font-label-sm text-label-sm font-bold gap-1">
<span>Headless Crawl</span>
<span className="material-symbols-outlined text-sm">search</span>
</div>
</div>
{/* Step 3 */}
<div className="p-6 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="font-display-hero text-headline-lg font-black text-outline-variant/60 mb-4">03</div>
<h4 className="font-headline-sm text-sm text-on-surface mb-2 font-bold">Prioritize</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              Algorithms rank diagnostics by potential revenue and traffic impact, filtering vanity errors.
            </p>
</div>
<div className="mt-6 flex items-center text-primary font-label-sm text-label-sm font-bold gap-1">
<span>Impact Matrix</span>
<span className="material-symbols-outlined text-sm">filter_list</span>
</div>
</div>
{/* Step 4 */}
<div className="p-6 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="font-display-hero text-headline-lg font-black text-outline-variant/60 mb-4">04</div>
<h4 className="font-headline-sm text-sm text-on-surface mb-2 font-bold">Remediate</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              Receive verified schema payloads, redirects, and meta content ready for CMS or git merge.
            </p>
</div>
<div className="mt-6 flex items-center text-primary font-label-sm text-label-sm font-bold gap-1">
<span>1-Click Fix</span>
<span className="material-symbols-outlined text-sm">code</span>
</div>
</div>
{/* Step 5 */}
<div className="p-6 rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="font-display-hero text-headline-lg font-black text-outline-variant/60 mb-4">05</div>
<h4 className="font-headline-sm text-sm text-on-surface mb-2 font-bold">Verify</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              Real-time post-deploy validation checks whether fixes are accepted and tracks ranking recovery.
            </p>
</div>
<div className="mt-6 flex items-center text-primary font-label-sm text-label-sm font-bold gap-1">
<span>Automated Proof</span>
<span className="material-symbols-outlined text-sm">verified</span>
</div>
</div>
</div>
</div>
</section>
{/* Technical Infrastructure & Architecture Overview Section */}
<section className="w-full py-16 px-margin sm:px-margin-md lg:px-margin-lg bg-surface-container-lowest" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto">
<div className="rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 sm:p-12 relative overflow-hidden">
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 space-y-4">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest/10 text-primary-fixed font-label-sm text-label-sm font-bold">
              Universal Ecosystem Compatibility
            </span>
<h3 className="font-headline-lg text-headline-lg tracking-tight text-surface-bright" data-aos="fade-up" data-aos-delay="100">
              Engineered for any stack. From static JAMstack to multi-million SKU monoliths.
            </h3>
<p className="font-body-md text-body-md text-outline-variant max-w-xl" data-aos="fade-up" data-aos-delay="200">
              SEOtriks integrates natively via reverse-proxy middleware, headless APIs, native WordPress &amp; Shopify plugins, or edge workers (Cloudflare, Fastly, AWS CloudFront).
            </p>
<div className="flex flex-wrap gap-3 pt-2">
<span className="px-3 py-1 rounded bg-inverse-surface border-0 text-xs font-mono text-outline-variant">Next.js</span>
<span className="px-3 py-1 rounded bg-inverse-surface border-0 text-xs font-mono text-outline-variant">Nuxt</span>
<span className="px-3 py-1 rounded bg-inverse-surface border-0 text-xs font-mono text-outline-variant">Shopify Plus</span>
<span className="px-3 py-1 rounded bg-inverse-surface border-0 text-xs font-mono text-outline-variant">WordPress &amp; VIP</span>
<span className="px-3 py-1 rounded bg-inverse-surface border-0 text-xs font-mono text-outline-variant">Webflow</span>
<span className="px-3 py-1 rounded bg-inverse-surface border-0 text-xs font-mono text-outline-variant">Cloudflare Workers</span>
</div>
</div>
<div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-container-lowest/5 backdrop-blur-sm" data-aos="fade-up" data-aos-duration="1000">
<div className="text-center space-y-2">
<div className="font-display-hero text-display-hero font-extrabold text-primary-fixed">99.98%</div>
<div className="font-label-lg text-label-lg text-surface-bright font-semibold">Crawl Fidelity Rate</div>
<p className="text-xs text-outline-variant max-w-xs" data-aos="fade-up" data-aos-delay="200">
                Rendered with Chromium instances replicating Googlebot Smartphone JS evaluation.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Interactive FAQ Accordion */}
<section className="w-full py-20 px-margin sm:px-margin-md lg:px-margin-lg bg-surface" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<span className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md uppercase tracking-wider font-bold">
          Platform Clarity
        </span>
<h2 className="mt-4 font-headline-lg text-headline-lg text-on-surface tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Frequently Asked Questions
        </h2>
<p className="mt-2 font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
          Everything you need to know about crawlers, integrations, and automated code generation.
        </p>
</div>
<div className="space-y-4">
{/* FAQ 1 */}
<div className="faq-item rounded-xl bg-surface-container-low transition-all" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full p-5 text-left flex items-center justify-between font-headline-sm text-sm text-on-surface font-bold focus:outline-none" data-aos="fade-up" data-aos-delay="300" >
<span>How does SEOtriks handle JavaScript-heavy SPAs and dynamic hydration?</span>
<span className="material-symbols-outlined text-primary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-300 px-5">
<p className="pb-5 font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              Our crawler utilizes headless Chromium clusters running the latest V8 engine. It renders client-side hydration, waits for network idle conditions, evaluates web components, and audits the final computed DOM exactly as Googlebot Smartphone does.
            </p>
</div>
</div>
{/* FAQ 2 */}
<div className="faq-item rounded-xl bg-surface-container-low transition-all" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full p-5 text-left flex items-center justify-between font-headline-sm text-sm text-on-surface font-bold focus:outline-none" data-aos="fade-up" data-aos-delay="300" >
<span>Can SEO Guard automatically push code changes without human approval?</span>
<span className="material-symbols-outlined text-primary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-300 px-5">
<p className="pb-5 font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              By default, SEOtriks operates in strict "Suggested Merge" mode, generating GitHub/GitLab Pull Requests or staging draft updates. If you explicitly enable Autonomous Shield on Edge Workers, emergency redirects or noindex removals can be applied immediately upon alert threshold triggers.
            </p>
</div>
</div>
{/* FAQ 3 */}
<div className="faq-item rounded-xl bg-surface-container-low transition-all" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full p-5 text-left flex items-center justify-between font-headline-sm text-sm text-on-surface font-bold focus:outline-none" data-aos="fade-up" data-aos-delay="300" >
<span>How does SEOtriks estimate the revenue impact of technical fixes?</span>
<span className="material-symbols-outlined text-primary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-300 px-5">
<p className="pb-5 font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              The Priority Engine correlates historical Search Console query volume, impression shares, current rank degradation percentages, and your average order value (or lead value) inputted during onboarding. This provides an algorithmic expected value for resolving each specific ticket.
            </p>
</div>
</div>
{/* FAQ 4 */}
<div className="faq-item rounded-xl bg-surface-container-low transition-all" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full p-5 text-left flex items-center justify-between font-headline-sm text-sm text-on-surface font-bold focus:outline-none" data-aos="fade-up" data-aos-delay="300" >
<span>What makes AI Visibility different from standard keyword rank trackers?</span>
<span className="material-symbols-outlined text-primary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-300 px-5">
<p className="pb-5 font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              Standard rank trackers monitor 10 blue links on traditional search engine results pages. SEOtriks AI Visibility monitors LLM generative answers (ChatGPT Search, Perplexity Pro, Google Gemini Overviews) to measure whether your brand entity is cited, recommended, or linked as a primary source.
            </p>
</div>
</div>
{/* FAQ 5 */}
<div className="faq-item rounded-xl bg-surface-container-low transition-all" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full p-5 text-left flex items-center justify-between font-headline-sm text-sm text-on-surface font-bold focus:outline-none" data-aos="fade-up" data-aos-delay="300" >
<span>Does crawling my site consume server resources or affect production latency?</span>
<span className="material-symbols-outlined text-primary faq-icon transition-transform">expand_more</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-300 px-5">
<p className="pb-5 font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
              SEOtriks crawlers respect your robots.txt crawl-delay settings and include dynamic adaptive throttling. If our bot senses response times rising above 300ms, it instantly scales back concurrency to ensure zero impact on end-user traffic.
            </p>
</div>
</div>
</div>
</div>
</section>
{/* Big Services CTA Banner */}
<section className="w-full py-16 px-margin sm:px-margin-md lg:px-margin-lg bg-surface-container-low" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto rounded-3xl bg-primary text-on-primary p-8 sm:p-14 relative overflow-hidden shadow-lg" data-aos="fade-up" data-aos-duration="1000">
{/* Glow Graphic */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/60 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="max-w-2xl text-center lg:text-left space-y-3">
<h2 className="font-headline-lg text-headline-lg tracking-tight text-on-primary" data-aos="fade-up" data-aos-delay="100">
            Start auditing and fixing your site today with SEOtriks.
          </h2>
<p className="font-body-lg text-body-lg text-primary-fixed-dim" data-aos="fade-up" data-aos-delay="200">
            Connect your domain in seconds. Run your first comprehensive search audit and experience automated remediation.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-4 rounded-xl shadow-md hover:bg-surface-bright active:scale-[0.98] transition-all font-bold" data-aos="fade-up" data-aos-delay="300" data-path="signup" href="#">
            Start 14-Day Free Trial
          </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container/80 text-on-primary font-label-lg text-label-lg px-6 py-4 rounded-xl hover:bg-primary-container transition-all" data-aos="fade-up" data-aos-delay="300" data-path="pricing" href="#">
            View All Plans
          </a>
</div>
</div>
</div>
</section>
{/* Inline Micro-Interaction Script */}

</div></main>
    );
}
