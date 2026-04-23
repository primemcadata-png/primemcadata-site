import { useMemo, useState } from 'react';
import { Globe, Mail, Phone, ShieldCheck, Database, BadgeCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PrimeMCADataWebsite() {
  const [selectedPackage, setSelectedPackage] = useState('Growth Package');
  const brand = {
    company: 'PrimeMCAData',
    legal: 'PrimeMCAData, Inc.',
    website: 'primemcadata.com',
    phone: '712-340-0326',
    email: 'sales@primemcadata.com',
  };
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    leadType: 'Fresh MCA Leads',
    volume: '2,000+',
    message: '',
  });

  const leadTypes = [
    {
      title: 'Fresh MCA Leads',
      badge: '0–48 hours old',
      description:
        'New merchant funding inquiries from businesses actively seeking capital right now. Best for speed-to-lead, connect rate, and immediate sales outreach.',
      points: ['Highest urgency', 'Verified contact data', 'Ideal for closers and call teams'],
    },
    {
      title: 'Aged MCA Leads',
      badge: '30–180 days old',
      description:
        'Cost-efficient lead files built for retargeting, email campaigns, SMS follow-up, and reactivation sequences.',
      points: ['Lower cost per record', 'Excellent for volume', 'Great for nurture campaigns'],
    },
    {
      title: 'Full Submission Leads',
      badge: 'Complete applications',
      description:
        'Detailed funding submissions with deeper business information so your team can qualify faster and work stronger opportunities.',
      points: ['High-intent merchants', 'Better qualification flow', 'Built for faster decisions'],
    },
    {
      title: 'Bank Statement Leads',
      badge: 'Premium underwriting-ready',
      description:
        'Premium MCA opportunities that include bank statement data to help accelerate underwriting and improve submission efficiency.',
      points: ['Premium inventory', 'Faster underwriting review', 'Ideal for serious buyers'],
    },
  ];

  const stats = [
    { value: '4', label: 'Core MCA lead categories' },
    { value: '24/7', label: 'Order inquiry availability' },
    { value: 'CSV', label: 'CRM-ready delivery' },
    { value: 'Custom', label: 'Targeting and volume options' },
  ];

  const trustBadges = [
    'SSL Secure Website',
    'CRM-Ready Data',
    'Built for Brokers & Funders',
    'Custom Quote Support',
  ];

  const trustIcons = [
    { icon: ShieldCheck, label: 'Buyer-first presentation' },
    { icon: Database, label: 'Organized lead categories' },
    { icon: BadgeCheck, label: 'Built for repeat buyers' },
  ];

  const features = [
    'Fresh, aged, full submission, and bank statement lead categories',
    'State, industry, revenue, and funding-amount targeting',
    'CSV / spreadsheet delivery for fast upload into dialers and CRMs',
    'Premium positioning for recurring buyers and custom volume deals',
    'Lead samples and quote request flow for qualified buyers',
    'Designed to support one-time orders and long-term buying relationships',
  ];

  const process = [
    {
      title: 'Tell us your buyer criteria',
      description:
        'Share the states, industries, lead types, and volumes your team wants to work so we can build the right package.',
    },
    {
      title: 'We match the inventory',
      description:
        'Choose from fresh leads, aged leads, full submissions, and bank statement files based on your goals and sales model.',
    },
    {
      title: 'Receive a quote or sample',
      description:
        'Qualified buyers can request pricing, volume details, and sample data previews before placing an order.',
    },
    {
      title: 'Import and start closing',
      description:
        'Your data is delivered in a clean format that is ready for your CRM, outreach stack, and underwriting workflow.',
    },
  ];

  const packages = [
    {
      name: 'Starter Volume',
      price: '$299+',
      description: 'For smaller teams testing aged data or building reactivation campaigns.',
      items: ['Entry-level order size', 'CSV delivery', 'Great for nurture campaigns'],
    },
    {
      name: 'Growth Package',
      price: '$499+',
      description: 'For teams that want stronger intent, fresher records, and better speed-to-lead.',
      items: ['Fresh lead focus', 'Targeting options', 'Built for outbound sales teams'],
      featured: true,
    },
    {
      name: 'Premium Buyer',
      price: 'Custom',
      description: 'For full submissions, bank statement leads, exclusive drops, and repeat buyers.',
      items: ['High-intent inventory', 'Custom volume plans', 'Priority quote handling'],
    },
  ];

  const industries = [
    'Restaurants',
    'Retail Stores',
    'Construction',
    'Auto Repair',
    'Medical & Dental',
    'Trucking & Logistics',
    'Ecommerce',
    'Professional Services',
  ];

  const locations = [
    'New York',
    'Florida',
    'Texas',
    'California',
    'Georgia',
    'New Jersey',
    'Pennsylvania',
    'Illinois',
  ];

  const testimonials = [
    {
      name: 'A. Reynolds',
      role: 'ISO Sales Manager',
      quote:
        'The site makes the offer feel premium right away. Buyers understand the lead types fast, and the quote flow is much cleaner than most MCA lead sites.',
    },
    {
      name: 'D. Carter',
      role: 'Funding Shop Owner',
      quote:
        'Having fresh, aged, and statement-based options clearly separated helps serious buyers move quicker and ask better questions from the start.',
    },
    {
      name: 'M. Patel',
      role: 'Broker Team Lead',
      quote:
        'This layout feels more credible than a typical data site. It looks like a real operator, not a random lead reseller page.',
    },
  ];

  const resources = [
    {
      title: 'MCA Lead Types Guide',
      description: 'Explain the difference between fresh leads, aged leads, full submissions, and bank statement files.',
    },
    {
      title: 'Lead Pricing & Custom Quotes',
      description: 'Break down how pricing varies by volume, freshness, targeting, and data depth.',
    },
    {
      title: 'Who These Leads Are Best For',
      description: 'Help buyers decide what to purchase based on their team size, budget, and sales process.',
    },
  ];

  const faq = [
    {
      q: 'What are the 4 main lead types available?',
      a: 'The main categories are Fresh MCA Leads, Aged MCA Leads, Full Submission Leads, and Bank Statement Leads.',
    },
    {
      q: 'Can buyers request targeting filters?',
      a: 'Yes. Orders can be customized by state, industry, revenue profile, volume, and general business criteria depending on availability.',
    },
    {
      q: 'How are the files delivered?',
      a: 'The site positions delivery in clean CSV or spreadsheet-ready formats so buyers can upload into CRMs, dialers, and sales workflows.',
    },
    {
      q: 'Can this site support recurring lead buyers?',
      a: 'Yes. The layout is designed for one-time buyers, repeat monthly buyers, and teams looking for custom quote workflows.',
    },
    {
      q: 'Can we add instant checkout later?',
      a: 'Yes. Stripe, GoHighLevel forms, embedded checkout, or custom order flows can all be added to this design later.',
    },
  ];

  const seoParagraphs = useMemo(
    () => [
      'PrimeMCAData is positioned as a premium source for merchant cash advance leads for brokers, funders, and sales teams looking for better buying options. The site is structured around high-intent MCA lead categories including fresh MCA leads, aged MCA leads, full submission leads, and bank statement leads.',
      'This website is built to rank and convert around terms buyers already search for, including merchant cash advance leads, MCA lead pricing, MCA bank statement leads, aged MCA leads, and fresh merchant cash advance data. The goal is to capture ready-to-buy traffic while making the offer look more trustworthy and premium than typical lead marketplace sites.',
    ],
    []
  );

  const handleChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-emerald-400/15 bg-emerald-400/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 text-sm text-emerald-100 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {brand.phone}</div>
            <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {brand.email}</div>
            <div className="inline-flex items-center gap-2"><Globe className="h-4 w-4" /> {brand.website}</div>
          </div>
          <div className="text-emerald-50/90">Premium merchant cash advance lead solutions for brokers, funders, and ISO teams</div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.18),transparent_22%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div>
              <span className="text-lg font-bold tracking-wide text-emerald-300">{brand.company}</span>
              <span className="ml-2 text-sm text-slate-300">Premium MCA Leads</span>
            </div>
            <div className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#lead-types" className="hover:text-white">Lead Types</a>
              <a href="#why-us" className="hover:text-white">Why Us</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#resources" className="hover:text-white">Resources</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                Merchant Cash Advance Leads for Brokers, Funders, and ISO Teams
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Buy premium MCA leads built to help your team close more funding deals.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Access fresh MCA leads, aged lead files, full submissions, and bank statement leads through a polished premium site built to attract serious buyers.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-0.5"
                >
                  Get Pricing & Sample Data
                </a>
                <a
                  href="#lead-types"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Explore Lead Categories
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div key={badge} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                    {badge}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {trustIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <Icon className="h-5 w-5 text-emerald-300" />
                      <div className="mt-3 text-sm font-medium text-slate-200">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Buyer Snapshot</div>
                      <div className="mt-2 text-2xl font-bold">Top Lead Types</div>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">Available</div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {leadTypes.map((lead, index) => (
                      <div key={lead.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-400/30">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-base font-semibold">{index + 1}. {lead.title}</div>
                            <div className="mt-1 text-sm text-slate-300">{lead.description}</div>
                          </div>
                          <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">
                            {lead.badge}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-sm text-slate-400">Best For</div>
                      <div className="mt-2 font-semibold">Brokers, funders, ISO teams</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-sm text-slate-400">Delivery Style</div>
                      <div className="mt-2 font-semibold">CSV / spreadsheet-ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lead-types" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Core Offerings</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            The 4 main MCA lead categories buyers already understand.
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            This section mirrors the core purchase logic used by leading MCA lead sites while making the presentation cleaner, more premium, and more conversion-focused for PrimeMCAData.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leadTypes.map((lead) => (
            <div key={lead.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                {lead.badge}
              </div>
              <h3 className="mt-5 text-2xl font-bold">{lead.title}</h3>
              <p className="mt-3 text-slate-300">{lead.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {lead.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="why-us" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Why PrimeMCAData</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Designed to look more credible, more premium, and easier to buy from.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                Instead of feeling like a generic lead broker page, this version is structured to make your business feel established, selective, and built for recurring B2B buyers.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-200">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">How It Works</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">A simple flow that helps buyers move fast.</h2>
            <div className="mt-8 space-y-4">
              {process.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-2 text-sm font-semibold text-emerald-300">Step {index + 1}</div>
                  <div className="text-xl font-bold">{step.title}</div>
                  <div className="mt-2 text-slate-300">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Popular Verticals & States</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Target the businesses and markets your team wants most.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-lg font-bold">Top Industries</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {industries.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-lg font-bold">Top States</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {locations.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Pricing & Packages</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Start with a package, then customize from there.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              These are polished placeholders for now. Later we can wire them into real checkout buttons, Stripe links, or GoHighLevel forms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[28px] border p-7 ${pkg.featured ? 'border-emerald-400/40 bg-emerald-400/10 shadow-2xl shadow-emerald-500/10' : 'border-white/10 bg-white/[0.04]'}`}
              >
                {pkg.featured && (
                  <div className="mb-4 inline-flex rounded-full bg-emerald-400 px-3 py-1 text-sm font-semibold text-slate-950">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <div className="mt-4 text-4xl font-black">{pkg.price}</div>
                <p className="mt-3 text-slate-300">{pkg.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`mt-8 w-full rounded-2xl px-5 py-4 font-semibold transition ${pkg.featured ? 'bg-emerald-400 text-slate-950 hover:-translate-y-0.5' : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'}`}
                >
                  Select {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Testimonials</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">A premium look builds more buyer confidence.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <div className="text-lg leading-8 text-slate-200">“{item.quote}”</div>
              <div className="mt-6 font-bold text-white">{item.name}</div>
              <div className="text-sm text-slate-400">{item.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="resources" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">SEO & Resources</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Content sections that help rankings and educate buyers.</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                {seoParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {resources.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="mt-2 text-slate-300">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-emerald-400/15 via-sky-400/10 to-white/5 p-8 md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Primary CTA</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Get pricing, request samples, and start your next order.</h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">
              This section is ready to become your main lead capture point. Right now it’s a styled front-end form. Later we can connect it to GoHighLevel, email, Stripe, Zapier, or a live CRM workflow.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
              <div className="text-sm text-slate-400">Selected package</div>
              <div className="mt-2 text-2xl font-bold">{selectedPackage}</div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div>• Request custom quote options</div>
                <div>• Ask for sample lead previews</div>
                <div>• Discuss volume, targeting, and repeat orders</div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="text-2xl font-black">Request Pricing & Sample Data</div>
            <div className="mt-2 text-slate-300">Use this form as the base for your real contact or quote flow.</div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Full name" className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
              <input value={form.company} onChange={(e) => handleChange('company', e.target.value)} placeholder="Company name" className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
              <input value={form.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="Email address" className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
              <input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="Phone number" className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500" />
              <select value={form.leadType} onChange={(e) => handleChange('leadType', e.target.value)} className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none md:col-span-1">
                {leadTypes.map((type) => (
                  <option key={type.title} value={type.title}>{type.title}</option>
                ))}
              </select>
              <select value={form.volume} onChange={(e) => handleChange('volume', e.target.value)} className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none md:col-span-1">
                {['500+', '1,000+', '2,000+', '5,000+', 'Custom Volume'].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us what you want: states, industries, lead freshness, budget, exclusivity, or bank statement needs." className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 md:col-span-2" />
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Submit Quote Request <ArrowRight className="h-4 w-4" />
            </button>
            <div className="mt-3 text-sm text-slate-400">
              Placeholder front-end form only. Connect this to GoHighLevel, your inbox, Zapier, or Stripe next.
            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-emerald-400/30 bg-emerald-400/5 p-5">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">GoHighLevel Embed Area</div>
              <div className="mt-3 text-slate-300">
                Replace this card with your GoHighLevel form embed, calendar widget, or funnel form code.
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs text-slate-400">
                {'<div id="ghl-form-embed">Paste your GoHighLevel form embed here</div>'}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                Buy Leads Now
              </button>
              <button className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-4 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/15">
                Book Sales Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">FAQ</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Questions MCA lead buyers usually ask.</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-lg font-semibold">{item.q}</div>
              <div className="mt-3 text-slate-300">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Checkout Path</div>
              <div className="mt-3 text-2xl font-black">Direct order buttons</div>
              <p className="mt-3 text-slate-300">Add Stripe payment links or checkout buttons here for aged lead packs, fresh lead packs, or custom invoices.</p>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Stripe payment links</div>
                <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Package checkout buttons</div>
                <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Custom invoice requests</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Compliance Pages</div>
              <div className="mt-3 text-2xl font-black">Launch essentials</div>
              <p className="mt-3 text-slate-300">Create separate Privacy Policy, Terms of Service, Refund Policy, and Contact pages before launch.</p>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div>• Privacy Policy</div>
                <div>• Terms & Conditions</div>
                <div>• Refund / Fulfillment Policy</div>
                <div>• Contact / Support Page</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Brand Setup</div>
              <div className="mt-3 text-2xl font-black">Swap in your real info</div>
              <p className="mt-3 text-slate-300">Update the phone, email, logo, testimonials, and package pricing with your real business details.</p>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div>• Upload your logo</div>
                <div>• Replace placeholder contact info</div>
                <div>• Insert real package pricing</div>
                <div>• Add real testimonials or remove them</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <div className="text-lg font-bold text-white">{brand.company}</div>
              <div className="mt-2 text-sm text-slate-400">
                Merchant cash advance lead marketplace built around fresh leads, aged leads, full submissions, and bank statement files for brokers and funders.
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
                <div className="inline-flex items-center gap-2"><Globe className="h-4 w-4" /> {brand.website}</div>
                <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {brand.email}</div>
                <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {brand.phone}</div>
              </div>
              <div className="mt-4 text-xs leading-6 text-slate-500">
                Disclaimer: This website is a marketing and inquiry platform for business-purpose data and lead solutions. Any stated pricing, examples, testimonials, and performance language shown here are placeholders unless replaced with your actual business information. Add your official business name, address, contact details, privacy policy, terms, compliance language, and real fulfillment policies before launch.
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Lead Types</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a href="#lead-types" className="block hover:text-white">Fresh MCA Leads</a>
                  <a href="#lead-types" className="block hover:text-white">Aged MCA Leads</a>
                  <a href="#lead-types" className="block hover:text-white">Full Submission Leads</a>
                  <a href="#lead-types" className="block hover:text-white">Bank Statement Leads</a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Company</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a href="#why-us" className="block hover:text-white">Why Us</a>
                  <a href="#pricing" className="block hover:text-white">Pricing</a>
                  <a href="#resources" className="block hover:text-white">Resources</a>
                  <a href="#contact" className="block hover:text-white">Contact</a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Next Integrations</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <div>GoHighLevel form embed</div>
                  <div>Stripe checkout buttons</div>
                  <div>Email / CRM routing</div>
                  <div>Privacy & terms pages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
