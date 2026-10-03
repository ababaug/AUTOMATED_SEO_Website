"use client";
export default function Page() {
    return (
        <main className="w-full flex-1 pt-16 bg-background relative overflow-hidden"><div className="flex flex-col w-full">
{/* Top Background Ambient Signals Accent */}
<div className="relative w-full overflow-hidden pb-space-xl">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[980px] h-[480px] bg-gradient-to-b from-primary/10 via-surface-container/30 to-transparent blur-3xl pointer-events-none rounded-full"></div>
{/* Header / Hero Introduction */}
<div className="relative max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg pt-10 sm:pt-14 pb-8">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto">
{/* Search Signal Trace Badge */}
<div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md mb-space-md shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span>Search Signals Dispatch • Global Response</span>
</div>
<h1 className="font-headline-lg text-headline-lg sm:text-display-hero sm:font-display-hero text-on-surface tracking-tight mb-space-sm" data-aos="fade-down" data-aos-delay="0">
          We’re here to help you unlock organic growth.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg" data-aos="fade-up" data-aos-delay="200">
          Whether you have questions about our enterprise crawl limits, need custom agency onboarding, or want a personalized product walkthrough, our team is ready.
        </p>
{/* Trust Indicators Strip */}
<div className="flex flex-wrap items-center justify-center gap-space-md text-on-surface-variant font-label-lg text-label-lg bg-surface-container-lowest/80 px-6 py-3 rounded-full shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>timer</span>
<span>Average response time: <strong className="text-on-surface font-bold">&lt; 15 minutes</strong></span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:inline-block"></span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
<span>Dedicated senior SEO engineers</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:inline-block"></span>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>lock</span>
<span>NDA protected site data</span>
</div>
</div>
</div>
</div>
{/* Main Contact Hub Grid */}
<div className="relative max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
{/* Column 1: Interactive Comprehensive Contact Form (7 cols) */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg sm:p-space-xl shadow-xl shadow-primary/5 relative" data-aos="fade-up" data-aos-duration="1000">
{/* Algorithmic Corner Node Motif */}
<div className="absolute top-0 right-0 p-6 pointer-events-none opacity-20">
<svg fill="none" height="72" viewBox="0 0 72 72" width="72">
<path d="M0 16H40C52 16 56 20 56 32V72" stroke="#0059ba" strokeDasharray="3 3" strokeWidth="1.5"></path>
<circle cx="56" cy="32" fill="#0059ba" r="4"></circle>
<circle cx="40" cy="16" fill="#325ea3" r="3"></circle>
</svg>
</div>
<div className="mb-space-lg">
<h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight" data-aos="fade-up" data-aos-delay="100">Initiate Signal Dispatch</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1" data-aos="fade-up" data-aos-delay="200">
              Tell us about your infrastructure or growth targets. We'll assemble the right technical team.
            </p>
</div>
<form className="space-y-space-md" id="contact-form" onSubmit={(e) => e.preventDefault()}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/* Full Name */}
<div className="space-y-space-xs">
<label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="full-name">
                  Full Name <span className="text-primary">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg pointer-events-none">person</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline transition-all" id="full-name" placeholder="Elena Rostova" required type="text"/>
</div>
</div>
{/* Work Email */}
<div className="space-y-space-xs">
<label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="work-email">
                  Work Email <span className="text-primary">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg pointer-events-none">mail</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline transition-all" id="work-email" placeholder="elena@enterprise.com" required type="email"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/* Phone Number (Optional) */}
<div className="space-y-space-xs">
<label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="phone-number">
                  Phone Number <span className="text-outline font-normal text-body-sm">(Optional)</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg pointer-events-none">call</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline transition-all" id="phone-number" placeholder="+1 (555) 019-2834" type="tel"/>
</div>
</div>
{/* Reason for Contact */}
<div className="space-y-space-xs">
<label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="contact-reason">
                  Reason for Contact <span className="text-primary">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg pointer-events-none">tune</span>
<select className="w-full pl-10 pr-8 py-2.5 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all appearance-none cursor-pointer" id="contact-reason" required>
<option disabled defaultValue="" value="">Select an objective...</option>
<option value="demo">Product Demo &amp; Platform Tour</option>
<option value="enterprise">Agency &amp; Enterprise Custom Plan</option>
<option value="support">Technical Support &amp; Crawler Debugging</option>
<option value="partnership">Partnership &amp; API Integration Inquiry</option>
<option value="general">General Question</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-outline text-lg pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/* Website URL for Free Audit */}
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="site-url">
                  Website URL
                </label>
<span className="font-label-sm text-label-sm text-primary font-bold px-2 py-0.5 rounded-full bg-surface-container">Complimentary Mini-Audit Included</span>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-primary text-lg pointer-events-none">travel_explore</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline transition-all" id="site-url" placeholder="https://yourdomain.com" type="text"/>
</div>
</div>
{/* Message Area */}
<div className="space-y-space-xs">
<label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="message">
                Detailed Message <span className="text-primary">*</span>
</label>
<textarea className="w-full p-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline transition-all resize-y" id="message" placeholder="Outline your current crawl challenges, indexation bottlenecks, or scale needs..." required rows={4}></textarea>
</div>
{/* Submission Area with Security Assurance */}
<div className="pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-md hover:bg-primary-container active:scale-[0.98] transition-all" data-aos="fade-up" data-aos-delay="300" type="submit">
<span>Send Signal Request</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: '"FILL" 1' }}>security</span>
<span>Your domain data is 100% confidential and encrypted.</span>
</div>
</div>
{/* Success notification panel (toggled via JS) */}
<div className="hidden mt-4 p-4 rounded-lg bg-surface-container text-on-surface flex items-start gap-3" data-aos="fade-up" data-aos-duration="1000" id="form-feedback">
<span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
<div>
<p className="font-label-lg text-label-lg font-bold" data-aos="fade-up" data-aos-delay="200">Signal Received • Route Queued</p>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">Our senior technical analyst will review your domain signals and reply within 15 minutes.</p>
</div>
</div>
</form>
</div>
{/* Column 2: Direct Contact Channels & Human Team Presence (5 cols) */}
<div className="lg:col-span-5 space-y-space-lg">
{/* Specialist Card */}
<div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-md hover:shadow-xl transition-all relative overflow-hidden group" data-aos="fade-up" data-aos-duration="1000">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<img alt="SEO Solutions Specialist Headshot" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-sm ring-4 ring-surface-container" data-aos="zoom-in" data-aos-duration="800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdWdY4EzwtKMTLOPwdrXuARAz3cvuBTEn_sO0yFOZoz9Ayj5cxHsYxhhuF0yhOfYhGHNi_Y-NqXSAQsvyMBZbty9KXnGhLgjdrUpuXaK4ax5x7sNnWdiooLFD4GlfDpUpn7y4Sou6xsXV5bKZeddOE766ELPk2-rkAu1f41vLP5lbF453dPCH_1QkhAm3p3jp0bGrEO49ctjt1xAOZ-ZP77u6OF3L5zAz_cCx4wZJFJorZ9dUHaZ3r"/>
<span className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full ring-2 ring-surface-container-lowest" title="Available to audit"></span>
</div>
<div className="min-w-0">
<div className="inline-flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider mb-0.5">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  SEO Solutions Specialist
                </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate" data-aos="fade-up" data-aos-delay="100">Maya Lindqvist</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant" data-aos="fade-up" data-aos-delay="200">
                  “Talk to real SEO practitioners, not sales bots. We speak canonicals, log audits, and vector rankings.”
                </p>
</div>
</div>
</div>
{/* Channel Dispatch Modules */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md space-y-space-md" data-aos="fade-up" data-aos-duration="1000">
<div className="font-label-md text-label-md font-bold uppercase tracking-wider text-outline mb-1">
              Direct Communication Vectors
            </div>
{/* Email Support */}
<a className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group" data-aos="fade-up" data-aos-delay="300" href="mailto:support@seotriks.com">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-xl">contact_support</span>
</div>
<div>
<div className="font-label-lg text-label-lg font-bold text-on-surface">Email Technical Support</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">support@seotriks.com • 24/7 Availability</div>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
{/* Enterprise Sales */}
<a className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group" data-aos="fade-up" data-aos-delay="300" href="mailto:sales@seotriks.com">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-xl">corporate_fare</span>
</div>
<div>
<div className="font-label-lg text-label-lg font-bold text-on-surface">Enterprise Growth Desk</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">sales@seotriks.com • Custom crawl volume &amp; SLA</div>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-secondary group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
{/* Real-time Live Chat */}
<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group" data-aos="fade-up" data-aos-duration="1000" >
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-xl">forum</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Live Crawler Chat</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant px-2 py-0.5 rounded-full bg-surface-container">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online now
                    </span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Instant connectivity with on-duty engineers</div>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">north_east</span>
</div>
</div>
{/* Dual Office Geographic Signal Hubs */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md space-y-space-md" data-aos="fade-up" data-aos-duration="1000">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-outline">Global Node Hubs</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">2 Primary Clusters</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
{/* San Francisco Node */}
<div className="p-3.5 rounded-lg bg-surface-container-low flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center gap-1.5 text-on-surface font-label-lg text-label-lg font-bold">
<span className="material-symbols-outlined text-primary text-base">apartment</span>
<span>San Francisco</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1" data-aos="fade-up" data-aos-delay="200">
                    525 Market St, Suite 3400<br/>San Francisco, CA 94105
                  </p>
</div>
<div className="mt-3 pt-2 font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>PST • 08:00 - 18:00</span>
</div>
</div>
{/* London Node */}
<div className="p-3.5 rounded-lg bg-surface-container-low flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="flex items-center gap-1.5 text-on-surface font-label-lg text-label-lg font-bold">
<span className="material-symbols-outlined text-primary text-base">public</span>
<span>London</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1" data-aos="fade-up" data-aos-delay="200">
                    1 Poultry, Bank<br/>London EC2R 8EJ, UK
                  </p>
</div>
<div className="mt-3 pt-2 font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>GMT • 08:30 - 17:30</span>
</div>
</div>
</div>
{/* Regional Operations Map Trigger card */}
<div className="w-full h-32 rounded-lg bg-surface-container relative overflow-hidden flex items-end p-3 cursor-pointer group" data-aos="fade-up" data-aos-duration="1000" data-location="San Francisco, California" style={{  }}>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent z-10"></div>
{/* Simulated map SVG overlay lines for algorithmic vibe */}
<svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<path d="M 10 20 Q 80 40 180 30 T 320 80" fill="none" stroke="var(--color-soft-blue, #8cb3ff)" strokeDasharray="4 4" strokeWidth="1.5"></path>
<path d="M 40 100 Q 140 20 280 60" fill="none" stroke="var(--color-soft-blue, #8cb3ff)" strokeWidth="1.5"></path>
<circle cx="180" cy="30" fill="#0059ba" r="4"></circle>
<circle cx="280" cy="60" fill="#325ea3" r="4"></circle>
</svg>
<div className="relative z-20 flex items-center justify-between w-full text-inverse-on-surface">
<div className="flex items-center gap-2 font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-secondary-container">map</span>
<span>Interactive Map • Global Data Center Topology</span>
</div>
<span className="font-label-sm text-label-sm text-secondary-fixed bg-inverse-surface/60 px-2 py-0.5 rounded">View Nodes</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Self-Serve Support & Knowledge Center Cards */}
<section className="w-full bg-surface-container-low py-space-xl my-space-md" data-aos="fade-up" data-aos-duration="1000">
<div className="max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
<div>
<div className="font-label-md text-label-md font-bold uppercase tracking-wider text-primary mb-1">Accelerated Resolution</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold" data-aos="fade-up" data-aos-delay="100">Immediate Self-Serve Resources</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md" data-aos="fade-up" data-aos-delay="200">
          Explore instant step-by-step diagnostic workflows, platform health audits, and direct engineer office hours.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Card 1: Knowledge Base & Docs */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:scale-105 transition-transform" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">menu_book</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs" data-aos="fade-up" data-aos-delay="100">Knowledge Base &amp; Docs</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md" data-aos="fade-up" data-aos-delay="200">
              Instant documentation covering Google Search Console API synchronization, custom DNS verification, and headless JS crawler setup.
            </p>
<ul className="space-y-2 font-body-sm text-body-sm text-secondary mb-space-md">
<li className="flex items-center gap-2 hover:underline cursor-pointer">
<span className="material-symbols-outlined text-sm">chevron_right</span> Fast-track DNS TXT record authentication
              </li>
<li className="flex items-center gap-2 hover:underline cursor-pointer">
<span className="material-symbols-outlined text-sm">chevron_right</span> Rendering JavaScript SPAs in SEOtriks
              </li>
<li className="flex items-center gap-2 hover:underline cursor-pointer">
<span className="material-symbols-outlined text-sm">chevron_right</span> Webhook alarms for 404 spike anomalies
              </li>
</ul>
</div>
<a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:gap-2 transition-all" href="#">
<span>Browse Documentation</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/* Card 2: Status & Uptime Center */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:scale-105 transition-transform" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">monitor_heart</span>
</div>
<div className="flex items-center justify-between mb-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold" data-aos="fade-up" data-aos-delay="100">Status &amp; Uptime Center</h3>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-label-sm text-label-sm font-bold">99.98%</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md" data-aos="fade-up" data-aos-delay="200">
              Real-time cluster telemetry across 14 distributed crawler hubs worldwide. Zero degraded performance incidents in 90 days.
            </p>
{/* Inline Metric / Mini Visualizer */}
<div className="bg-surface-container-low p-space-sm rounded-lg mb-space-md space-y-2" data-aos="fade-up" data-aos-duration="1000">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>SERP Tracking Engine</span>
<span className="font-bold text-emerald-600">Operational</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden flex">
<div className="w-full bg-emerald-500 rounded-full"></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Dynamic JS Crawler</span>
<span className="font-bold text-emerald-600">Operational</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden flex">
<div className="w-full bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
<a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:gap-2 transition-all" href="#">
<span>View Live Cluster Metrics</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/* Card 3: Community Discord & Office Hours */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-aos="fade-up" data-aos-duration="1000">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:scale-105 transition-transform" data-aos="fade-up" data-aos-duration="1000">
<span className="material-symbols-outlined text-2xl">groups</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs" data-aos="fade-up" data-aos-delay="100">Office Hours &amp; Discord</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md" data-aos="fade-up" data-aos-delay="200">
              Connect directly with 3,400+ SEO directors, algorithm researchers, and our founding engineers in weekly live audit sessions.
            </p>
<div className="p-3 bg-surface-container-low rounded-lg mb-space-md flex items-center gap-3" data-aos="fade-up" data-aos-duration="1000">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs shrink-0">
                THU
              </div>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Weekly Core Algo Q&amp;A</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Every Thursday • 11:00 AM EST</div>
</div>
</div>
</div>
<a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:gap-2 transition-all" href="#">
<span>Join SEOtriks Community</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* Interactive FAQ Section */}
<section className="max-w-5xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg py-space-xl w-full" data-aos="fade-up" data-aos-duration="1000">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="font-label-md text-label-md font-bold uppercase tracking-wider text-primary mb-1">Frequently Addressed</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight" data-aos="fade-up" data-aos-delay="100">Onboarding &amp; Technical Demos</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2" data-aos="fade-up" data-aos-delay="200">
        Quick answers about platform demonstrations, data safety, crawler allowances, and migration assistance.
      </p>
</div>
<div className="space-y-space-sm" id="faq-accordion">
{/* FAQ Item 1 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full flex items-center justify-between text-left gap-4" data-aos="fade-up" data-aos-delay="300"  type="button">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">What actually happens during a live 30-minute product tour?</span>
<span className="material-symbols-outlined text-on-surface-variant arrow-icon transition-transform">expand_more</span>
</button>
<div className="pt-3 font-body-md text-body-md text-on-surface-variant">
          We plug your actual domain into the SEOtriks deep-crawler in real-time. You'll observe site architecture trace paths, discover cannibalized keywords, inspect orphan pages, and see concrete ranking acceleration opportunities mapped out by our solutions engineers.
        </div>
</div>
{/* FAQ Item 2 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full flex items-center justify-between text-left gap-4" data-aos="fade-up" data-aos-delay="300"  type="button">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Can we configure custom enterprise crawl frequency and white-label reporting?</span>
<span className="material-symbols-outlined text-on-surface-variant arrow-icon transition-transform">expand_more</span>
</button>
<div className="pt-3 font-body-md text-body-md text-on-surface-variant hidden">
          Yes. Enterprise plans support dedicated proxies, scheduled daily or continuous multi-million URL crawls, custom rendering bypasses for Cloudflare/Akamai, and full agency white-label portals mapped to your custom CNAME subdomains.
        </div>
</div>
{/* FAQ Item 3 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full flex items-center justify-between text-left gap-4" data-aos="fade-up" data-aos-delay="300"  type="button">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Will the SEOtriks crawler place excessive load on our production web servers?</span>
<span className="material-symbols-outlined text-on-surface-variant arrow-icon transition-transform">expand_more</span>
</button>
<div className="pt-3 font-body-md text-body-md text-on-surface-variant hidden">
          Never. SEOtriks features automated adaptive throttling. Our bots calculate server response times and naturally lower concurrency if latency rises by more than 8%. You also have complete manual control over crawl speeds, concurrency caps, and robots.txt honoring rules.
        </div>
</div>
{/* FAQ Item 4 */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm" data-aos="fade-up" data-aos-duration="1000">
<button className="w-full flex items-center justify-between text-left gap-4" data-aos="fade-up" data-aos-delay="300"  type="button">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">How quickly can we migrate historical data from Ahrefs or Semrush?</span>
<span className="material-symbols-outlined text-on-surface-variant arrow-icon transition-transform">expand_more</span>
</button>
<div className="pt-3 font-body-md text-body-md text-on-surface-variant hidden">
          Our automated CSV and JSON ingestion pipelines allow seamless keyword position history, competitor tracking lists, and backlink audit histories to be uploaded in seconds. Dedicated migration managers assist all enterprise agency accounts.
        </div>
</div>
</div>
</section>
{/* Final Contact Page Conversion Footer CTA */}
<section className="max-w-7xl mx-auto px-margin sm:px-margin-md lg:px-margin-lg py-space-xl w-full" data-aos="fade-up" data-aos-duration="1000">
<div className="relative bg-gradient-to-r from-primary via-primary-container to-secondary rounded-2xl p-8 sm:p-14 text-on-primary overflow-hidden shadow-2xl" data-aos="fade-up" data-aos-duration="1000">
{/* Algorithmic Nodes Background Watermark */}
<div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none">
<svg fill="none" height="400" viewBox="0 0 400 400" width="400">
<circle cx="200" cy="200" r="160" stroke="#ffffff" strokeDasharray="8 8" strokeWidth="2"></circle>
<circle cx="200" cy="200" r="100" stroke="#ffffff" strokeWidth="1.5"></circle>
<circle cx="200" cy="200" fill="#ffffff" r="40"></circle>
<line stroke="#ffffff" strokeWidth="2" x1="40" x2="360" y1="200" y2="200"></line>
<line stroke="#ffffff" strokeWidth="2" x1="200" x2="200" y1="40" y2="360"></line>
</svg>
</div>
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-primary/10 text-on-primary font-label-md text-label-md mb-4 backdrop-blur-md">
<span className="material-symbols-outlined text-base">rocket_launch</span>
<span>Zero Obligation Technical Assessment</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-primary font-extrabold tracking-tight mb-space-sm" data-aos="fade-up" data-aos-delay="100">
          Ready to diagnose your ranking blind spots?
        </h2>
<p className="font-body-lg text-body-lg text-primary-fixed mb-space-lg" data-aos="fade-up" data-aos-delay="200">
          Join over 12,000 engineering-led growth teams using SEOtriks to turn ambiguous search traffic into exact algorithmic directives.
        </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
<a className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-lg hover:bg-surface-container-high transition-all active:scale-[0.98]" data-aos="fade-up" data-aos-delay="300" href="#">
<span>Start 14-Day Free Trial</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary font-label-lg text-label-lg px-6 py-3.5 rounded-lg transition-colors" data-aos="fade-up" data-aos-delay="300" href="#contact-form">
<span>Schedule Engineer Call</span>
</a>
</div>
</div>
</div>
</section>
</div></main>
    );
}
