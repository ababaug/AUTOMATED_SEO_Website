import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-light-border">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<Link className="flex items-center gap-3" href="/">
<img alt="SEOtriks Logo" className="h-8 w-auto object-contain" data-aos="zoom-in" data-aos-duration="800" src="https://lh3.googleusercontent.com/aida/AEtjO1VPP_Ei-L9LUBaiPtAxGIJOJp_B9mlaHqHGKP3VemSWAey25P3a0LjZvi8jHrgxIAhp_F3wtyfYCc10haNZj6wGSGtnuN0sfj6A9ZgH5K4OflFzdu6Sy3e3Hv2iUxTtropJ4VZNsL2p_KFp6erNvTcmL5humRlKv0THPeIOGecHo5sfIiykOkYNXyDRoq30wFrEVw5l5qxeiP60czvBQXcFnLa_QuRlpHnkEeo0qi8TyA2R-iFcwVCodS4"/>
</Link>
<nav className="hidden md:flex items-center gap-1 text-sm font-semibold">
<Link className="px-3.5 py-1.5 rounded-lg bg-cloud-blue text-seotriks-blue" data-aos="fade-up" data-aos-delay="300" href="/">Home</Link>
<Link className="px-3.5 py-1.5 rounded-lg text-secondary-text hover:text-seotriks-blue transition-colors" data-aos="fade-up" data-aos-delay="300" href="/about">About</Link>
<Link className="px-3.5 py-1.5 rounded-lg text-secondary-text hover:text-seotriks-blue transition-colors" data-aos="fade-up" data-aos-delay="300" href="/services">Services</Link>
<Link className="px-3.5 py-1.5 rounded-lg text-secondary-text hover:text-seotriks-blue transition-colors" data-aos="fade-up" data-aos-delay="300" href="/blog">Blog</Link>
<Link className="px-3.5 py-1.5 rounded-lg text-secondary-text hover:text-seotriks-blue transition-colors" data-aos="fade-up" data-aos-delay="300" href="/contact">Contact</Link>
<Link className="px-3.5 py-1.5 rounded-lg text-secondary-text hover:text-seotriks-blue transition-colors" data-aos="fade-up" data-aos-delay="300" href="/pricing">Pricing</Link>
</nav>
</div>
<div className="flex items-center gap-4">
<Link className="hidden sm:inline-block text-sm font-semibold text-secondary-text hover:text-seotriks-blue transition-colors" href="/login">Log In</Link>
<Link className="bg-seotriks-blue hover:bg-[#326ec8] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95" data-aos="fade-up" data-aos-delay="300" href="/pricing">Start Free</Link>
<div className="hidden sm:flex items-center pl-2">
<img alt="User Avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-cloud-blue" data-aos="zoom-in" data-aos-duration="800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdWdY4EzwtKMTLOPwdrXuARAz3cvuBTEn_sO0yFOZoz9Ayj5cxHsYxhhuF0yhOfYhGHNi_Y-NqXSAQsvyMBZbty9KXnGhLgjdrUpuXaK4ax5x7sNnWdiooLFD4GlfDpUpn7y4Sou6xsXV5bKZeddOE766ELPk2-rkAu1f41vLP5lbF453dPCH_1QkhAm3p3jp0bGrEO49ctjt1xAOZ-ZP77u6OF3L5zAz_cCx4wZJFJorZ9dUHaZ3r"/>
</div>
</div>
</div>
</header>
    );
}
