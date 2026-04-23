import { useMemo, useState } from 'react';
import {
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  Database,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Target,
  Layers,
  BarChart3,
  Clock3,
  FileSpreadsheet,
  CircleDollarSign,
  Lock,
  FileText,
  RefreshCcw,
} from 'lucide-react';

export default function PrimeMCADataWebsite() {
  const brand = {
    company: 'PrimeMCAData',
    legal: 'PrimeMCAData',
    website: 'primemcadata.com',
    phoneDisplay: '712-340-0326',
    phoneHref: '7123400326',
    email: 'primemcadata@gmail.com',
  };

  const monthlyPackages = [
    {
      name: 'Starter - Aged MCA Leads',
      price: '$300',
      suffix: '/month',
      description: 'A low-friction entry point for teams testing aged inventory and lower-cost outbound.',
      badge: '',
      featured: false,
      buttonText: 'Start with Aged Leads',
      link: 'https://buy.stripe.com/eVq5kv4dh6cm1cidts33W00',
      items: [
        '2,000 aged MCA records monthly',
        '31–180 day inquiry age',
        'CSV spreadsheet delivery',
        'Best for reactivation and broader volume',
      ],
    },
    {
      name: 'Growth - Fresh MCA Leads',
      price: '$375',
      suffix: '/month',
      description: 'The strongest starting package for active teams that want fresher, higher-intent lead flow.',
      badge: 'Most Popular',
      featured: true,
      buttonText: 'Start with Fresh Leads',
      link: 'https://buy.stripe.com/4gM00bh03fMW9IO4WW33W01',
      items: [
        '1,250 fresh MCA records monthly',
        'Recent funding inquiry activity',
        'CSV spreadsheet delivery',
        'Best balance of price and intent',
      ],
    },
    {
      name: 'Professional - Mixed MCA Leads',
      price: '$999',
      suffix: '/month',
      description: 'A stronger mixed-data package for teams that need more scale and stronger data composition.',
      badge: '',
      featured: false,
      buttonText: 'Start with Mixed Leads',
      link: 'https://buy.stripe.com/8x25kvh03asC3kq9dc33W02',
      items: [
        'Mixed lead inventory monthly',
        'Built for growing broker teams',
        'Higher-value package positioning',
        'Priority support lane',
      ],
    },
  ];

  const bulkPackages = [
    {
      name: '15,000 Aged MCA Leads (Bulk)',
      price: '$1,005',
      subtitle: 'One-time bulk aged data purchase',
      buttonText: 'Buy 15,000 Records',
      link: 'https://buy.stripe.com/cNieV5bFJ44ebQW1KK33W03',
      items: [
        '15,000 aged MCA records',
        'One-time delivery package',
        'CSV format included',
        'High-volume outreach friendly',
      ],
    },
    {
      name: '10,000 Fresh MCA Leads (Bulk)',
      price: '$1,400',
      subtitle: 'One-time fresh data package',
      buttonText: 'Buy 10,000 Records',
      link: 'https://buy.stripe.com/dRm6oz259asC6wC61033W05',
      items: [
        '10,000 fresh MCA records',
        'Recent inquiry activity',
        'CSV format included',
        'Built for higher-intent outreach',
      ],
    },
    {
      name: '10,000 Aged MCA Submissions',
      price: '$4,000',
      subtitle: 'One-time higher-depth data package',
      buttonText: 'Buy 10,000 Leads',
      link: 'https://buy.stripe.com/6oU6oz5hleIS5sydts33W06',
      items: [
        '10,000 aged submission records',
        'Higher data depth',
        'Built for experienced buyers',
        'One-time delivery package',
      ],
    },
    {
      name: '500 Full MCA Submissions',
      price: '$2,200',
      subtitle: 'Premium one-time package',
      buttonText: 'Buy 500 Leads',
      link: 'https://buy.stripe.com/00w3cndNRasCf38gFE33W07',
      items: [
        '500 full MCA submissions',
        'Premium lead quality',
        'Built for serious closers',
        'One-time delivery package',
      ],
    },
  ];

  const leadTypes = [
    {
      title: 'Fresh MCA Leads',
      badge: '0–48 hours old',
      description:
        'Recent business funding inquiries ideal for fast speed-to-lead, better connect rates, and active outbound teams.',
      points: ['Highest urgency', 'Stronger contact rates', 'Best for active closers'],
      icon: Clock3,
    },
    {
      title: 'Aged MCA Leads',
      badge: '30–180 days old',
      description:
        'Cost-efficient data for reactivation campaigns, dialer campaigns, SMS/email nurture, and broader list volume.',
      points: ['Lower cost per record', 'Great for volume buyers', 'Ideal for retargeting'],
      icon: Layers,
    },
    {
      title: 'Full Submission Leads',
      badge: 'Application depth',
      description:
        'Submission-level opportunities with more decision-making value for teams that want stronger qualification flow.',
      points: ['Higher intent', 'Better qualification', 'Built for experienced buyers'],
      icon: FileSpreadsheet,
    },
    {
      title: 'Premium / Statement-Level Data',
      badge: 'Premium inventory',
      description:
        'Higher-ticket opportunity class for teams that need more underwriting-ready opportunities and deeper data context.',
      points: ['Premium inventory', 'Faster review potential', 'Best for serious buyers'],
      icon: CircleDollarSign,
    },
  ];

  const stats = [
    { value: '4', label: 'Core lead categories' },
    { value: '7', label: 'Live checkout products' },
    { value: '24/7', label: 'Order availability' },
    { value: 'CSV', label: 'CRM-ready delivery' },
  ];

  const trustBadges = [
    'Instant Stripe Checkout',
    'CRM-Ready Data',
    'Built for Brokers & Funders',
    'Custom Quote Available',
  ];

  const features = [
    'Monthly subscriptions and one-time bulk packages',
    'Fresh, aged, submission, and premium data categories',
    'State, industry, and volume-based quote requests',
    'Premium positioning for serious B2B buyers',
    'Direct checkout for standard offers',
    'Designed for repeat buyers and larger upsells',
  ];

  const process = [
    {
      title: 'Choose your package',
      description: 'Start with a monthly plan or select a one-time bulk package based on your outreach goals.',
    },
    {
      title: 'Complete secure checkout',
      description: 'Use Stripe for instant payment on standard offers or submit a custom quote request below.',
    },
    {
      title: 'Receive your delivery',
      description: 'Orders are prepared for spreadsheet / CRM workflows so your team can start working immediately.',
    },
    {
      title: 'Scale into bigger volume',
      description: 'Move from starter packages into larger data buys as your team and demand increase.',
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
        'This looks like a premium data supplier, not a random lead page. The checkout structure makes buying faster.',
    },
    {
      name: 'D. Carter',
      role: 'Funding Shop Owner',
      quote:
        'Separating monthly plans from one-time bulk packages makes it much easier to buy exactly what we need.',
    },
    {
      name: 'M. Patel',
      role: 'Broker Team Lead',
      quote:
        'The presentation feels high-end, clear, and easy to trust. It looks like a serious operator built it.',
    },
  ];

  const faq = [
    {
      q: 'Are the monthly plans subscriptions?',
      a: 'Yes. The Starter, Growth, and Professional plans are recurring monthly subscriptions.',
    },
    {
      q: 'Are the bulk packages one-time payments?',
      a: 'Yes. The bulk packages are one-time purchases.',
    },
    {
      q: 'How are the files delivered?',
      a: 'Orders are delivered in clean CSV or spreadsheet-ready formats for CRM upload, dialers, and internal workflows.',
    },
    {
      q: 'Can I request custom targeting?',
      a: 'Yes. Use the built-in quote form for state targeting, industry selection, custom volume, or specialty requests.',
    },
    {
      q: 'Does PrimeMCAData provide credit repair services?',
      a: 'No. PrimeMCAData markets and delivers business-purpose lead and data products. It does not promise credit improvement, credit repair, or consumer credit file modification.',
    },
  ];

  const seoParagraphs = useMemo(
    () => [
      'PrimeMCAData is built for brokers, funders, and ISO teams that want premium merchant cash advance lead buying options. The offer structure centers on fresh MCA leads, aged MCA leads, full submissions, and premium high-intent data.',
      'The site is designed to convert buyers looking for merchant cash advance leads, MCA lead pricing, fresh funding inquiries, aged MCA lists, and submission-level data while keeping the presentation clean, premium, and direct-response focused.',
    ],
    []
  );

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    leadType: 'Fresh MCA Leads',
    volume: '2,000+',
    states: '',
    industries: '',
    details: '',
  });

  const [quoteStatus, setQuoteStatus] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const handleQuoteChange = (key, value) => {
    setQuoteForm((prev) => ({ ...prev, [key]: value }));
  };

  const submitQuoteForm = async (e) => {
    e.preventDefault();
    setQuoteStatus({ loading: true, success: '', error: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/primemcadata@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'PrimeMCAData Custom Quote Request',
          _template: 'table',
          _captcha: 'false',
          name: quoteForm.name,
          company: quoteForm.company,
          email: quoteForm.email,
          phone: quoteForm.phone,
          lead_type: quoteForm.leadType,
          volume: quoteForm.volume,
          states: quoteForm.states,
          industries: quoteForm.industries,
          details: quoteForm.details,
        }),
      });

      if (!response.ok) throw new Error('Quote form submit failed');

      setQuoteStatus({
        loading: false,
        success: 'Quote request sent successfully.',
        error: '',
      });

      setQuoteForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        leadType: 'Fresh MCA Leads',
        volume: '2,000+',
        states: '',
        industries: '',
        details: '',
      });
    } catch (error) {
      setQuoteStatus({
        loading: false,
        success: '',
        error: 'Automatic submission failed. Use the direct email link below as backup.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-emerald-400/15 bg-emerald-400/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 text-sm text-emerald-100 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <a href={`tel:${brand.phoneHref}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> {brand.phoneDisplay}
            </a>
            <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> {brand.email}
            </a>
            <a href={`https://${brand.website}`} className="inline-flex items-center gap-2 hover:text-white">
              <Globe className="h-4 w-4" /> {brand.website}
            </a>
          </div>
          <div className="text-emerald-50/90">Premium merchant cash advance lead solutions for brokers, funders, and ISO teams</div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(14,165,233,0.18),transparent_22%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-400/15 p-2">
                <Sparkles className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-wide text-emerald-300">{brand.company}</span>
                <span className="ml-2 text-sm text-slate-300">Premium MCA Data Marketplace</span>
              </div>
            </div>
            <div className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#lead-types" className="hover:text-white">Lead Types</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#bulk" className="hover:text-white">Bulk Data</a>
              <a href="#quote" className="hover:text-white">Quote</a>
              <a href="#legal" className="hover:text-white">Policies</a>
            </div>
          </div>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                Built for Brokers, Funders, ISO Teams, and High-Volume Lead Buyers
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                The premium MCA data marketplace built to look elite and convert serious buyers.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                PrimeMCAData offers fresh MCA leads, aged MCA leads, full submissions, and premium bulk data packages with instant Stripe checkout and custom quote capability.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="rounded-2xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-0.5"
                >
                  View Live Pricing
                </a>
                <a
                  href="#quote"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Request Custom Quote
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
            </div>

            <div>
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Live Offer Snapshot</div>
                      <div className="mt-2 text-2xl font-bold">Why buyers choose PrimeMCAData</div>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">Active</div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { icon: Building2, text: 'Built for professional funding shops and ISO teams' },
                      { icon: Target, text: 'Designed for recurring buyers and higher-ticket data orders' },
                      { icon: BarChart3, text: 'Structured for fast checkout and premium positioning' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.text} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="rounded-xl bg-emerald-400/10 p-2">
                            <Icon className="h-5 w-5 text-emerald-300" />
                          </div>
                          <div className="text-sm leading-6 text-slate-200">{item.text}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <a
                      href="https://buy.stripe.com/4gM00bh03fMW9IO4WW33W01"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-emerald-400 px-4 py-4 text-center font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Buy Fresh Leads
                    </a>
                    <a
                      href={`tel:${brand.phoneHref}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lead-types" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Lead Types</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            The 4 core MCA categories serious buyers already understand.
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Structured to feel premium, direct, and high-converting — not like a cheap lead marketplace.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leadTypes.map((lead) => {
            const Icon = lead.icon;
            return (
              <div
                key={lead.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-400/10 p-2">
                    <Icon className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                    {lead.badge}
                  </div>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{lead.title}</h3>
                <p className="mt-3 text-slate-300">{lead.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {lead.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Why PrimeMCAData</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Built to look like a premium data company, not a random reseller page.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                The site is positioned to make high-value buyers feel like they are purchasing from a real operator with systems, inventory, and scale.
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
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">A buying flow designed for speed and trust.</h2>
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Targeting</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Industries and states your buyers already care about.</h2>
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Monthly Pricing</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Choose a recurring subscription plan.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
              These plans are designed for teams that want consistent lead flow every month with direct Stripe checkout.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {monthlyPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[30px] border p-7 ${
                  pkg.featured
                    ? 'border-emerald-400/40 bg-emerald-400/10 shadow-2xl shadow-emerald-500/10'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                {pkg.badge ? (
                  <div className="mb-4 inline-flex rounded-full bg-emerald-400 px-3 py-1 text-sm font-semibold text-slate-950">
                    {pkg.badge}
                  </div>
                ) : null}
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <div className="mt-5 flex items-end gap-2">
                  <div className="text-5xl font-black">{pkg.price}</div>
                  <div className="pb-2 text-2xl text-slate-400">{pkg.suffix}</div>
                </div>
                <p className="mt-4 text-slate-300">{pkg.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block w-full rounded-2xl px-5 py-4 text-center font-semibold transition ${
                    pkg.featured
                      ? 'bg-emerald-400 text-slate-950 hover:-translate-y-0.5'
                      : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {pkg.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bulk" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Bulk Pricing</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            One-time bulk packages for higher-volume buyers.
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Built for teams that want immediate inventory, larger campaigns, or more aggressive scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {bulkPackages.map((item) => (
            <div key={item.name} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.subtitle}</div>
              <div className="mt-3 text-xl font-bold">{item.name}</div>
              <div className="mt-4 text-4xl font-black">{item.price}</div>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {item.items.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-2xl bg-white px-5 py-4 text-center font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Proof & Positioning</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">The site should feel expensive before the buyer ever checks out.</h2>
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

      <section id="quote" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-emerald-400/15 via-sky-400/10 to-white/5 p-8 md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Custom Quote</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Need a custom order instead of a standard package?</h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-200">
                Use the built-in quote form for state targeting, industry selection, custom volume, exclusives, or specialty requests.
              </p>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
                <div className="text-sm text-slate-400">Direct contact options</div>
                <div className="mt-5 space-y-4">
                  <a href={`mailto:${brand.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06]">
                    <Mail className="h-5 w-5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <div className="font-semibold">{brand.email}</div>
                    </div>
                  </a>
                  <a href={`tel:${brand.phoneHref}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06]">
                    <Phone className="h-5 w-5 text-emerald-300" />
                    <div>
                      <div className="text-sm text-slate-400">Phone</div>
                      <div className="font-semibold">{brand.phoneDisplay}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
              <div className="text-2xl font-black">Request Custom Pricing</div>
              <div className="mt-2 text-slate-300">
                This built-in form sends quote requests directly to {brand.email}.
              </div>

              <form onSubmit={submitQuoteForm} className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                  value={quoteForm.name}
                  onChange={(e) => handleQuoteChange('name', e.target.value)}
                  placeholder="Full name"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                  required
                />
                <input
                  value={quoteForm.company}
                  onChange={(e) => handleQuoteChange('company', e.target.value)}
                  placeholder="Company name"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                  required
                />
                <input
                  value={quoteForm.email}
                  onChange={(e) => handleQuoteChange('email', e.target.value)}
                  placeholder="Email address"
                  type="email"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                  required
                />
                <input
                  value={quoteForm.phone}
                  onChange={(e) => handleQuoteChange('phone', e.target.value)}
                  placeholder="Phone number"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                />
                <select
                  value={quoteForm.leadType}
                  onChange={(e) => handleQuoteChange('leadType', e.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none"
                >
                  {leadTypes.map((type) => (
                    <option key={type.title} value={type.title}>{type.title}</option>
                  ))}
                </select>
                <select
                  value={quoteForm.volume}
                  onChange={(e) => handleQuoteChange('volume', e.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none"
                >
                  {['500+', '1,000+', '2,000+', '5,000+', '10,000+', '15,000+', 'Custom Volume'].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <input
                  value={quoteForm.states}
                  onChange={(e) => handleQuoteChange('states', e.target.value)}
                  placeholder="States wanted"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 md:col-span-1"
                />
                <input
                  value={quoteForm.industries}
                  onChange={(e) => handleQuoteChange('industries', e.target.value)}
                  placeholder="Industries wanted"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 md:col-span-1"
                />
                <textarea
                  value={quoteForm.details}
                  onChange={(e) => handleQuoteChange('details', e.target.value)}
                  placeholder="Tell us what you want: states, industries, lead freshness, budget, exclusivity, or special data needs."
                  className="min-h-[160px] rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 md:col-span-2"
                />

                <button
                  type="submit"
                  disabled={quoteStatus.loading}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
                >
                  {quoteStatus.loading ? 'Sending Quote Request...' : 'Submit Quote Request'}
                  <ArrowRight className="h-4 w-4" />
                </button>

                {quoteStatus.success ? (
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-100 md:col-span-2">
                    {quoteStatus.success}
                  </div>
                ) : null}

                {quoteStatus.error ? (
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-4 text-sm text-red-100 md:col-span-2">
                    {quoteStatus.error}{' '}
                    <a href={`mailto:${brand.email}`} className="font-semibold underline">
                      Email us directly
                    </a>
                    .
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">FAQ</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Questions serious MCA buyers usually ask.</h2>
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

      <section id="legal" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Legal & Policy</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Terms, privacy, and refund policy built into the site.
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              These sections are drafted for a business-purpose data / lead marketplace and are not framed as credit repair services.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-emerald-300" />
                <h3 className="text-2xl font-bold">Terms & Conditions</h3>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  By accessing this website or purchasing any product from {brand.legal}, you agree to these Terms & Conditions.
                  These products are offered solely as business-purpose lead generation, data, and marketing support products.
                </p>
                <p>
                  You agree not to misuse, resell unlawfully, publish publicly, scrape, reproduce, or redistribute any purchased data in
                  violation of applicable law, carrier rules, privacy requirements, or platform terms. You are responsible for your own outreach,
                  marketing, telemarketing, text messaging, compliance, and business practices.
                </p>
                <p>
                  PrimeMCAData does not guarantee funding approvals, revenue outcomes, response rates, closing percentages, or profitability.
                  Any examples, descriptions, or categories on this site are informational only and do not constitute guarantees.
                </p>
                <p>
                  Purchases are for digital business data services. Delivery format may include CSV, spreadsheet, secure link, or similar digital delivery.
                  Because products are digital and may be delivered quickly after purchase, all sales are treated as final subject to the Refund Policy below.
                </p>
                <p>
                  PrimeMCAData may update product descriptions, pricing, package sizes, and website content at any time without notice. We reserve the right to
                  refuse service, cancel suspicious orders, or decline transactions that appear fraudulent, abusive, or non-compliant.
                </p>
                <p>
                  This website does not advertise, offer, or promise consumer credit repair services, consumer debt relief services, or direct consumer credit file
                  modification. If you separately operate any covered credit repair services, those services should be documented and disclosed under separate agreements and disclosures.
                </p>
                <p>
                  To the maximum extent permitted by law, PrimeMCAData disclaims implied warranties and will not be liable for indirect, incidental, special, or consequential damages
                  arising from use of the site, purchased products, or outreach performed by the buyer.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-emerald-300" />
                <h3 className="text-2xl font-bold">Privacy Policy</h3>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  PrimeMCAData collects information that you submit through quote forms, checkout interactions, contact actions, and site usage analytics.
                  This may include your name, business name, email address, phone number, requested lead type, targeting details, and order-related information.
                </p>
                <p>
                  We use this information to respond to inquiries, deliver purchased products, process transactions, provide support, improve site performance,
                  prevent fraud, and communicate about products or orders.
                </p>
                <p>
                  Payment information is processed by third-party payment processors such as Stripe. PrimeMCAData does not directly store full payment card details.
                </p>
                <p>
                  We may use third-party services for hosting, form delivery, analytics, email routing, payment processing, and business operations.
                  By using the site, you understand that information may be processed by such service providers in connection with operating the business.
                </p>
                <p>
                  We do not sell your submitted quote request information as consumer data. We may retain inquiries, order records, and support communications
                  as needed for business, legal, compliance, security, and recordkeeping purposes.
                </p>
                <p>
                  You are responsible for your own compliance when using any purchased data, including compliance with privacy laws, outreach laws,
                  telemarketing rules, texting rules, opt-out handling, and all other applicable requirements.
                </p>
                <p>
                  To request contact regarding your submitted inquiry data, email {brand.email}.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <div className="flex items-center gap-3">
                <RefreshCcw className="h-5 w-5 text-emerald-300" />
                <h3 className="text-2xl font-bold">Refund Policy</h3>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  All purchases are final due to the nature of digital data products and digital delivery.
                </p>
                <p>
                  PrimeMCAData does not offer refunds for delivered digital lead/data products, subscription charges already processed, partial use,
                  buyer non-performance, campaign results, response rates, closing percentages, or business outcomes.
                </p>
                <p>
                  If there is a verified issue involving substantial delivery failure, materially incorrect fulfillment versus the purchased package,
                  or a technical non-delivery directly caused by PrimeMCAData, we may review the issue and, at our discretion, provide replacement data,
                  corrective fulfillment, or another commercially reasonable resolution.
                </p>
                <p>
                  To request a review of an order issue, contact {brand.email} promptly with your order details, the issue identified, and supporting information.
                  Review of an issue does not guarantee a refund, credit, or replacement.
                </p>
                <p>
                  Chargebacks filed without first contacting us to attempt resolution may be contested using order records, checkout records, delivery records,
                  site policy language, and related business documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">SEO & Positioning</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Content that helps rankings while still feeling premium.</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                {seoParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <div className="text-xl font-bold">Instant Checkout</div>
                <div className="mt-2 text-slate-300">Standard monthly plans and bulk packages are live with Stripe checkout.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <div className="text-xl font-bold">Built-In Quote Form</div>
                <div className="mt-2 text-slate-300">Use the on-page form for custom targeting, large-volume orders, and specialty requests.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <div className="text-xl font-bold">Premium Presentation</div>
                <div className="mt-2 text-slate-300">Designed to look like a high-ticket, trustworthy operator from the first scroll.</div>
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
                Merchant cash advance lead marketplace built around fresh leads, aged leads, full submissions, and premium bulk data packages for brokers and funders.
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
                <a href={`https://${brand.website}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Globe className="h-4 w-4" /> {brand.website}
                </a>
                <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4" /> {brand.email}
                </a>
                <a href={`tel:${brand.phoneHref}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4" /> {brand.phoneDisplay}
                </a>
              </div>
              <div className="mt-4 text-xs leading-6 text-slate-500">
                PrimeMCAData markets business-purpose lead and data products. It does not promise consumer credit repair, consumer debt relief, or consumer credit file modification.
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Lead Types</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a href="#lead-types" className="block hover:text-white">Fresh MCA Leads</a>
                  <a href="#lead-types" className="block hover:text-white">Aged MCA Leads</a>
                  <a href="#lead-types" className="block hover:text-white">Full Submission Leads</a>
                  <a href="#lead-types" className="block hover:text-white">Premium Data</a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Pricing</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a href="#pricing" className="block hover:text-white">Monthly Plans</a>
                  <a href="#bulk" className="block hover:text-white">Bulk Packages</a>
                  <a href="#quote" className="block hover:text-white">Custom Quote</a>
                  <a href="#legal" className="block hover:text-white">Policies</a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a href={`mailto:${brand.email}`} className="block hover:text-white">Email Us</a>
                  <a href={`tel:${brand.phoneHref}`} className="block hover:text-white">Call Now</a>
                  <a href="#quote" className="block hover:text-white">Request Quote</a>
                  <a href="https://buy.stripe.com/4gM00bh03fMW9IO4WW33W01" target="_blank" rel="noreferrer" className="block hover:text-white">Buy Fresh Leads</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
