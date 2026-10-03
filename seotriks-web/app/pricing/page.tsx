export default function Page() {
    return (
        <main className="w-full flex-1 pt-16 bg-background relative overflow-hidden"><div className="flex flex-col w-full">
{/* Subtle Search Signal Ambient Grid */}
<div className="relative w-full overflow-hidden">
<div className="absolute inset-0 pointer-events-none opacity-40">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="60" id="pricing-grid-nodes" patternUnits="userSpaceOnUse" width="60">
<path d="M 60 0 L 0 0 0 60" fill="none" stroke="#abc7ff" strokeDasharray="3 3" strokeWidth="0.75"></path>
<circle cx="0" cy="0" fill="#3072d6" opacity="0.6" r="2"></circle>
</pattern>
</defs>
<rect fill="url(#pricing-grid-nodes)" height="100%" width="100%"></rect>
</svg>
</div>
{/* Hero Section */}
<section className="relative max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg pt-space-xl pb-space-lg text-center flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000">
<div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-space-md shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-[16px] text-primary">network_ping</span>
        Predictable Algorithmic Pricing
      </div>
<h1 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg lg:text-display-hero text-on-surface max-w-4xl tracking-tight leading-tight" data-aos="fade-down" data-aos-delay="0">
        Simple, predictable pricing for <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-8">actionable SEO.</span>
</h1>
<p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
        Choose the plan that fits your growth stage. All plans include automated priority scoring and instant search insights. Cancel or upgrade anytime.
      </p>
{/* Billing Toggle */}
<div className="mt-space-xl flex items-center justify-center gap-space-md">
<span className="font-label-lg text-label-lg font-bold text-on-surface transition-colors" id="monthly-label">Monthly Billing</span>
<button aria-label="Toggle annual billing" className="relative w-16 h-9 rounded-full bg-surface-container-high transition-colors p-1 flex items-center focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" data-aos="fade-up" data-aos-delay="300" id="billing-toggle" type="button">
<div className="w-7 h-7 rounded-full bg-primary shadow-md transform transition-transform translate-x-0 flex items-center justify-center text-on-primary" data-aos="fade-up" data-aos-duration="1000" id="toggle-knob">
<span className="material-symbols-outlined text-[14px]">tune</span>
</div>
</button>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-medium text-on-surface-variant transition-colors" id="yearly-label">Yearly Billing</span>
<span className="bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold shadow-sm">
            Save 20% on Annual
          </span>
</div>
</div>
</section>
{/* 4 Pricing Cards */}
<section className="max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg pb-space-xl" data-aos="fade-up" data-aos-duration="1000">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter items-stretch">
{/* Tier 1: FREE */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-lg text-label-lg text-on-surface-variant font-bold uppercase tracking-wider">Free</span>
<span className="material-symbols-outlined text-outline text-[20px]">explore</span>
</div>
<div className="flex items-baseline gap-1 my-space-sm">
<span className="font-headline-lg text-headline-lg font-extrabold text-on-surface">$0</span>
<span className="font-body-sm text-body-sm text-outline">/ mo</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pb-space-md min-h-[48px]" data-aos="fade-up" data-aos-delay="200">
              Solo site owners &amp; hobbyists exploring organic search health and basic index state.
            </p>
<div className="py-space-md space-y-space-sm">
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span><strong>1 Website</strong> audit scope</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span><strong>500</strong> crawled URLs / mo</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span>Weekly automated crawl run</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span>Basic priority issue score</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span>3 AI Action Suggestions / mo</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-outline shrink-0 mt-0.5">forum</span>
<span>Community Knowledge Base</span>
</div>
</div>
</div>
<div className="pt-space-md">
<a className="w-full inline-flex items-center justify-center font-label-lg text-label-lg px-space-md py-3 rounded-lg bg-surface-container text-primary font-bold hover:bg-surface-variant active:scale-[0.98] transition-all" data-aos="fade-up" data-aos-delay="300" data-path="signup" href="#">
              Start Free
            </a>
</div>
</div>
{/* Tier 2: STARTER */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-lg text-label-lg text-secondary font-bold uppercase tracking-wider">Starter</span>
<span className="material-symbols-outlined text-secondary text-[20px]">trending_up</span>
</div>
<div className="flex items-baseline gap-1 my-space-sm">
<span className="price-val font-headline-lg text-headline-lg font-extrabold text-on-surface" data-monthly="$9" data-yearly="$90">$9</span>
<span className="price-cycle font-body-sm text-body-sm text-outline">/ mo</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pb-space-md min-h-[48px]" data-aos="fade-up" data-aos-delay="200">
              Small businesses &amp; emerging bloggers aiming for steady organic search traffic.
            </p>
<div className="py-space-md space-y-space-sm">
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span><strong>3 Websites</strong> actively tracked</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span><strong>5,000</strong> crawled URLs / mo</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span>Daily automated crawl runs</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span>Core Web Vitals latency monitor</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span><strong>25</strong> AI recommendations / mo</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span>Competitor Radar (up to 3 rivals)</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check</span>
<span>Standard email support</span>
</div>
</div>
</div>
<div className="pt-space-md">
<a className="w-full inline-flex items-center justify-center font-label-lg text-label-lg px-space-md py-3 rounded-lg bg-secondary text-on-secondary font-bold hover:bg-primary-container active:scale-[0.98] transition-all shadow-sm" data-aos="fade-up" data-aos-delay="300" data-path="signup" href="#">
              Get Started
            </a>
</div>
</div>
{/* Tier 3: GROWTH (MOST POPULAR) */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-xl relative -mt-3 lg:-mt-4 bg-gradient-to-b from-surface-container-low to-surface-container-lowest" data-aos="fade-up" data-aos-duration="1000">
{/* Top Badge */}
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1 whitespace-nowrap" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span> MOST POPULAR • BEST FOR SCALE
          </div>
<div>
<div className="flex items-center justify-between mb-space-sm pt-2">
<span className="font-label-lg text-label-lg text-primary font-extrabold uppercase tracking-wider">Growth</span>
<span className="material-symbols-outlined text-primary text-[24px]">rocket_launch</span>
</div>
<div className="flex items-baseline gap-1 my-space-sm">
<span className="price-val font-headline-lg text-headline-lg font-extrabold text-primary" data-monthly="$19" data-yearly="$190">$19</span>
<span className="price-cycle font-body-sm text-body-sm text-outline">/ mo</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pb-space-md min-h-[48px]" data-aos="fade-up" data-aos-delay="200">
              Fast-growing brands, digital marketers, and e-commerce stores securing top positions.
            </p>
<div className="py-space-md space-y-space-sm">
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface font-semibold">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span><strong>10 Websites</strong> fully managed</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span><strong>50,000</strong> crawled URLs / mo</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span>Real-time SEO Guard drift alerts</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span><strong>Unlimited</strong> AI recommendations</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span>Full Search Priority scoring matrix</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span>AI Search Visibility (ChatGPT &amp; Gemini)</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span>Change Verification engine</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">verified</span>
<span>Priority 4-hour queue support</span>
</div>
</div>
</div>
<div className="pt-space-md">
<a className="w-full inline-flex items-center justify-center font-label-lg text-label-lg px-space-md py-3.5 rounded-lg bg-primary text-on-primary font-bold hover:bg-primary-container shadow-md active:scale-[0.98] transition-all" data-aos="fade-up" data-aos-delay="300" data-path="signup" href="#">
              Start 14-Day Free Trial
            </a>
</div>
</div>
{/* Tier 4: PRO */}
<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-lg flex flex-col justify-between shadow-lg relative" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-lg text-label-lg text-secondary-fixed font-bold uppercase tracking-wider">Pro</span>
<span className="material-symbols-outlined text-secondary-fixed text-[20px]">corporate_fare</span>
</div>
<div className="flex items-baseline gap-1 my-space-sm">
<span className="price-val font-headline-lg text-headline-lg font-extrabold text-inverse-on-surface" data-monthly="$39" data-yearly="$390">$39</span>
<span className="price-cycle font-body-sm text-body-sm text-outline-variant">/ mo</span>
</div>
<p className="font-body-sm text-body-sm text-outline-variant pb-space-md min-h-[48px]" data-aos="fade-up" data-aos-delay="200">
              Professional SEO agencies, consultancies, and multi-brand digital enterprise teams.
            </p>
<div className="py-space-md space-y-space-sm">
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">verified</span>
<span><strong>35 Websites</strong> managed</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">verified</span>
<span><strong>250,000</strong> crawled URLs / mo</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">verified</span>
<span>Unlimited instant SEO Guard alerts</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">verified</span>
<span>White-label client PDF audit reports</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">verified</span>
<span>Dedicated Crawl API access tokens</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">verified</span>
<span>Smart Content Refresh assistant</span>
</div>
<div className="flex items-start gap-space-sm font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">verified</span>
<span>Dedicated Account Manager &amp; Slack</span>
</div>
</div>
</div>
<div className="pt-space-md">
<a className="w-full inline-flex items-center justify-center font-label-lg text-label-lg px-space-md py-3 rounded-lg bg-primary-container text-on-primary-container font-bold hover:bg-primary active:scale-[0.98] transition-all shadow-sm" data-aos="fade-up" data-aos-delay="300" data-path="signup" href="#">
              Go Pro
            </a>
</div>
</div>
</div>
</section>
</div>
{/* Persona Guide: "Who Each Plan Is For" */}
<section className="max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg py-space-xl" data-aos="fade-up" data-aos-duration="1000">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Tailored Archetypes</span>
<h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs" data-aos="fade-up" data-aos-delay="100">Who Each Plan Is Crafted For</h2>
<p className="font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">Calibrated to match your workflow, crawl frequency, and team dynamics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* Persona 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-[20px]">person</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold">Solo Creators</div>
<div className="font-label-sm text-label-sm text-primary font-semibold mb-space-xs">Plan: Free ($0)</div>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">For developers, indie builders, or personal portfolios needing validation that Google indexes critical pages without 404 dead ends.</p>
</div>
<div className="mt-space-md pt-space-xs text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span> Weekly health pulse
        </div>
</div>
{/* Persona 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-[20px]">storefront</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold">Local Businesses</div>
<div className="font-label-sm text-label-sm text-secondary font-semibold mb-space-xs">Plan: Starter ($9/mo)</div>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">For boutique agencies and regional businesses monitoring localized search visibility, metadata hygiene, and page speed thresholds.</p>
</div>
<div className="mt-space-md pt-space-xs text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">radar</span> Competitor radar check
        </div>
</div>
{/* Persona 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-[20px]">shopping_bag</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold">Scaling Brands</div>
<div className="font-label-sm text-label-sm text-primary font-semibold mb-space-xs">Plan: Growth ($19/mo)</div>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">For e-commerce catalogs and SaaS growth marketers needing immediate SEO Guard protection against staging leakage and de-indexing risks.</p>
</div>
<div className="mt-space-md pt-space-xs text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">shield_with_heart</span> Real-time drift guard
        </div>
</div>
{/* Persona 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-[20px]">groups</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold">SEO Agencies</div>
<div className="font-label-sm text-label-sm text-primary font-semibold mb-space-xs">Plan: Pro ($39/mo)</div>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">For digital marketing agencies managing client retainers who require automated white-label diagnostics, raw API feeds, and shared workspaces.</p>
</div>
<div className="mt-space-md pt-space-xs text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">description</span> Client PDF export
        </div>
</div>
</div>
</section>
{/* Side-by-Side Detailed Comparison Matrix */}
<section className="max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg py-space-xl" data-aos="fade-up" data-aos-duration="1000">
<div className="text-center max-w-3xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Detailed Matrix</span>
<h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs" data-aos="fade-up" data-aos-delay="100">Comprehensive Feature Comparison</h2>
<p className="font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">Explore the algorithmic depth, audit frequencies, and automation layers of each tier.</p>
</div>
{/* Table Container */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-x-auto" data-aos="fade-up" data-aos-duration="1000">
<table className="w-full text-left border-collapse min-w-[720px]">
<thead>
<tr className="bg-surface-container-low text-on-surface">
<th className="p-space-md font-headline-sm text-headline-sm font-bold w-2/5">Capabilities</th>
<th className="p-space-md font-label-lg text-label-lg font-bold text-center w-[15%]">Free</th>
<th className="p-space-md font-label-lg text-label-lg font-bold text-center w-[15%]">Starter</th>
<th className="p-space-md font-label-lg text-label-lg font-bold text-center w-[15%] bg-surface-container text-primary">Growth</th>
<th className="p-space-md font-label-lg text-label-lg font-bold text-center w-[15%]">Pro</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface">
{/* Category 1: Crawling & Technical Audits */}
<tr className="bg-surface-container-high/50 font-bold text-on-surface">
<td className="px-space-md py-space-sm uppercase tracking-wider font-label-sm text-label-sm text-primary" colSpan={5}>
              Crawling &amp; Technical Audits
            </td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Domain / Property Capacity</td>
<td className="p-space-md text-center">1 Site</td>
<td className="p-space-md text-center">3 Sites</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">10 Sites</td>
<td className="p-space-md text-center font-bold">35 Sites</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Monthly Crawled URL Cap</td>
<td className="p-space-md text-center">500 URLs</td>
<td className="p-space-md text-center">5,000 URLs</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">50,000 URLs</td>
<td className="p-space-md text-center font-bold">250,000 URLs</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Crawl Frequency</td>
<td className="p-space-md text-center text-outline">Weekly</td>
<td className="p-space-md text-center">Daily</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">Hourly on change</td>
<td className="p-space-md text-center font-bold">Continuous Stream</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">JavaScript Rendering &amp; DOM Inspection</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center bg-surface-container/30"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Sitemap XML &amp; Canonical Loop Syncer</td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center bg-surface-container/30"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
</tr>
{/* Category 2: AI & Optimization */}
<tr className="bg-surface-container-high/50 font-bold text-on-surface">
<td className="px-space-md py-space-sm uppercase tracking-wider font-label-sm text-label-sm text-primary" colSpan={5}>
              AI &amp; Actionable Optimization
            </td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Automated Priority Scoring Engine</td>
<td className="p-space-md text-center">Basic</td>
<td className="p-space-md text-center">Standard</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">Deep Graph</td>
<td className="p-space-md text-center font-bold">Predictive ROI</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">"Fix It For Me" Code Recommendations</td>
<td className="p-space-md text-center">3 / mo</td>
<td className="p-space-md text-center">25 / mo</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">Unlimited</td>
<td className="p-space-md text-center font-bold">Unlimited</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Schema JSON-LD &amp; Breadcrumb Generator</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center bg-surface-container/30"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
</tr>
{/* Category 3: Monitoring & Intelligence */}
<tr className="bg-surface-container-high/50 font-bold text-on-surface">
<td className="px-space-md py-space-sm uppercase tracking-wider font-label-sm text-label-sm text-primary" colSpan={5}>
              Monitoring &amp; Intelligence
            </td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">SEO Guard Instant Drift Alerts (Noindex, 404, Title Drops)</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center text-outline">Email summary</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">Instant Webhook &amp; SMS</td>
<td className="p-space-md text-center font-bold">Custom Dispatch API</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Competitor SERP Radar</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center">3 Rivals</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">15 Rivals</td>
<td className="p-space-md text-center font-bold">Unlimited Rivals</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Google Search Console Direct Sync</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center bg-surface-container/30"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">AI Engine Search Visibility (ChatGPT &amp; Gemini Citations)</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center bg-surface-container/30"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
<td className="p-space-md text-center"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
</tr>
{/* Category 4: Support & Collaboration */}
<tr className="bg-surface-container-high/50 font-bold text-on-surface">
<td className="px-space-md py-space-sm uppercase tracking-wider font-label-sm text-label-sm text-primary" colSpan={5}>
              Support &amp; Collaboration
            </td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Team Member Seats</td>
<td className="p-space-md text-center">1 Seat</td>
<td className="p-space-md text-center">2 Seats</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">5 Seats</td>
<td className="p-space-md text-center font-bold">Unlimited</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">White-label PDF Reports with Agency Logo</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center text-outline">—</td>
<td className="p-space-md text-center bg-surface-container/30 text-outline">—</td>
<td className="p-space-md text-center font-bold"><span className="material-symbols-outlined text-primary text-[18px]">check</span></td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="p-space-md font-medium">Support Level</td>
<td className="p-space-md text-center text-outline">Community</td>
<td className="p-space-md text-center">Standard Email</td>
<td className="p-space-md text-center bg-surface-container/30 font-semibold text-primary">Priority 4hr SLA</td>
<td className="p-space-md text-center font-bold">Dedicated Rep &amp; Slack</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* Enterprise / Agency Custom Volume Banner */}
<section className="max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg py-space-lg" data-aos="fade-up" data-aos-duration="1000">
<div className="bg-gradient-to-r from-inverse-surface via-primary to-inverse-surface text-inverse-on-surface rounded-xl p-space-lg md:p-space-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg" data-aos="fade-up" data-aos-duration="1000">
<div className="space-y-space-xs text-center md:text-left">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
<span className="material-symbols-outlined text-[16px]">domain</span> Enterprise Architecture
        </span>
<h3 className="font-headline-md text-headline-md font-bold text-inverse-on-surface" data-aos="fade-up" data-aos-delay="100">Need over 1,000,000 crawled URLs or custom security agreements?</h3>
<p className="font-body-md text-body-md text-outline-variant max-w-2xl" data-aos="fade-up" data-aos-delay="200">
          Get dedicated crawler IPs, custom ingestion pipelines, SSO/SAML enforcement, and bespoke indexing service level agreements (SLAs).
        </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary font-label-lg text-label-lg px-6 py-3.5 rounded-lg font-bold hover:bg-surface-container active:scale-[0.98] transition-all shadow-md" data-aos="fade-up" data-aos-delay="300" data-path="contact" href="#">
          Talk to Enterprise
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</section>
{/* Frequently Asked Questions */}
<section className="max-w-4xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg py-space-xl" data-aos="fade-up" data-aos-duration="1000">
<div className="text-center mb-space-xl">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Answers</span>
<h2 className="font-headline-md text-headline-md text-on-surface mt-space-xs" data-aos="fade-up" data-aos-delay="100">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">Everything you need to know about our billing, crawl allotments, and guarantee.</p>
</div>
<div className="space-y-space-md">
{/* FAQ 1 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all" data-aos="fade-up" data-aos-duration="1000">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-headline-sm text-headline-sm font-semibold text-on-surface list-none">
<span>Can I change plans or cancel at any time?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Yes. You are never locked into an inflexible contract. You can upgrade, downgrade, or cancel your subscription straight from your account dashboard with a single click. Upgrades apply instantly with prorated billing.
          </p>
</details>
</div>
{/* FAQ 2 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all" data-aos="fade-up" data-aos-duration="1000">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-headline-sm text-headline-sm font-semibold text-on-surface list-none">
<span>How does the 14-day free trial on Growth work?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            The Growth plan trial gives you full, uninhibited access to all 10 websites, up to 50,000 URLs, and real-time SEO Guard drift alerts. You can cancel anytime before day 14 and you won’t be charged a single penny.
          </p>
</details>
</div>
{/* FAQ 3 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all" data-aos="fade-up" data-aos-duration="1000">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-headline-sm text-headline-sm font-semibold text-on-surface list-none">
<span>What happens if my site exceeds its crawled URL limit?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            We will never surprise you with unauthorized overage fees. If your site approaches its limit, we prioritize high-traffic priority URLs based on Search Console clicks and pause unranked nodes until your next cycle or until you choose to scale your crawl budget.
          </p>
</details>
</div>
{/* FAQ 4 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all" data-aos="fade-up" data-aos-duration="1000">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-headline-sm text-headline-sm font-semibold text-on-surface list-none">
<span>What is the "Change Verification Engine"?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            When your engineering team pushes a fix (such as resolving duplicate canonicals or adding missing structured data), you can trigger an on-demand micro-crawl. SEOtriks immediately verifies that the fix was applied properly before Googlebot recrawls the page.
          </p>
</details>
</div>
{/* FAQ 5 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all" data-aos="fade-up" data-aos-duration="1000">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-headline-sm text-headline-sm font-semibold text-on-surface list-none">
<span>What payment methods and currencies do you support?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            We support all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. Enterprise annual invoices can also be settled via automated ACH transfer or wire.
          </p>
</details>
</div>
</div>
</section>
{/* Final Call to Action */}
<section className="max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg pb-space-xl pt-space-md" data-aos="fade-up" data-aos-duration="1000">
<div className="bg-surface-container rounded-xl p-space-xl text-center flex flex-col items-center justify-center relative overflow-hidden shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary mb-space-sm shadow-md" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<h2 className="font-display-hero text-headline-lg-mobile sm:text-headline-lg text-on-surface max-w-2xl tracking-tight" data-aos="fade-up" data-aos-delay="100">
        Ready to stop guessing and start fixing?
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs max-w-xl" data-aos="fade-up" data-aos-delay="200">
        Join over 14,000 engineering and search marketing teams fixing critical algorithmic signals every day.
      </p>
<div className="mt-space-lg flex flex-col sm:flex-row items-center gap-space-md">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-md hover:bg-primary-container active:scale-[0.98] transition-all" data-aos="fade-up" data-aos-delay="300" data-path="signup" href="#">
          Start Free in 60 Seconds
        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-lowest text-on-surface font-label-lg text-label-lg px-6 py-3.5 rounded-lg hover:bg-surface-variant active:scale-[0.98] transition-all" data-aos="fade-up" data-aos-delay="300" data-path="contact" href="#">
          Schedule Team Demo
        </a>
</div>
<p className="font-body-sm text-body-sm text-outline mt-space-sm" data-aos="fade-up" data-aos-delay="200">No credit card required for Free tier • Instant activation</p>
</div>
</section>
{/* Interactive Billing Switch Script */}

</div></main>
    );
}
