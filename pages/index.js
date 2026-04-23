import { useState } from "react";

export default function Home() {
  const brand = {
    company: "PrimeMCAData",
    website: "primemcadata.com",
    phoneDisplay: "712-340-0326",
    phoneHref: "7123400326",
    email: "primemcadata@gmail.com",
  };

  const quoteEmail = "primemcadata@gmail.com";

  const topStats = [
    { value: "14", label: "Live checkout products" },
    { value: "4", label: "Core data categories" },
    { value: "24/7", label: "Order access" },
    { value: "CSV", label: "CRM-ready delivery" },
  ];

  const trustPoints = [
    "Instant Stripe checkout",
    "Controlled batch releases",
    "Built for brokers and funders",
    "Custom quote support",
  ];

  const howDifferent = [
    "Not positioned like a generic cheap lead marketplace",
    "Batches released in controlled quantities",
    "Structured by freshness so buyers know exactly what they are getting",
    "Designed for conversion and deal flow, not just random volume",
    "Built for repeat buyers that need ongoing supply",
    "Fast checkout on standard packages and quote flow for larger custom orders",
  ];

  const leadTypes = [
    {
      title: "Aged MCA Leads",
      age: "30–180 days",
      desc: "Best for dialing, texting, and high-volume outreach.",
      bullets: [
        "Business + owner info",
        "Phone + email when available",
        "Industry + time in business",
        "Inquiry date",
      ],
    },
    {
      title: "Recent MCA Inquiries",
      age: "0–30 days",
      desc: "Higher-intent records for tighter targeting and better contact rates.",
      bullets: [
        "Cleaner contact rates",
        "More active deal flow",
        "Built for faster speed-to-lead",
        "Best for focused outreach",
      ],
    },
    {
      title: "Aged Submissions",
      age: "30–180 days",
      desc: "Deal-ready rework inventory for teams that want stronger file quality than standard leads.",
      bullets: [
        "Merchant submitted for funding",
        "Better deal flow potential",
        "Great for rework campaigns",
        "Priced for scale",
      ],
    },
    {
      title: "Fresh Submissions",
      age: "24–48 hours",
      desc: "Your premium money-maker. Recent submissions for operators focused on actual opportunities.",
      bullets: [
        "Recently submitted merchants",
        "Higher urgency tier",
        "Best premium offering on the site",
        "Built for serious buyers",
      ],
    },
  ];

  const sections = [
    {
      id: "aged-leads",
      eyebrow: "SECTION 1",
      title: "Aged MCA Leads (30–180 Days)",
      subtitle: "Best for dialing, texting, and high-volume outreach.",
      recommended: "Good for teams running high-volume outreach",
      featured: false,
      products: [
        {
          name: "Aged MCA Leads – 250",
          price: "$175",
          sub: "one-time",
          link: "https://buy.stripe.com/5kQ6oz39d0S23kq1KK33W08",
          button: "Buy 250 Leads",
          bullets: [
            "Business + owner info",
            "Phone + email when available",
            "Industry + time in business",
            "Inquiry date",
          ],
        },
        {
          name: "Aged MCA Leads – 1,000",
          price: "$650",
          sub: "one-time",
          link: "https://buy.stripe.com/3cI5kv115bwG9IO75433W09",
          button: "Buy 1,000 Leads",
          bullets: [
            "Lower cost per lead",
            "Built for volume teams",
            "CSV delivery included",
            "Best for dialer campaigns",
          ],
        },
      ],
      custom: "5,000+ leads — custom bulk pricing",
    },
    {
      id: "recent-inquiries",
      eyebrow: "SECTION 2",
      title: "Recent MCA Inquiries (0–30 Days)",
      subtitle: "Merchants who have recently shown interest in funding.",
      recommended: "Recommended for tighter targeting and better contact rates",
      featured: false,
      products: [
        {
          name: "Recent MCA Inquiries – 500",
          price: "$350",
          sub: "one-time",
          link: "https://buy.stripe.com/4gMcMX39dbwG5sy0GG33W0a",
          button: "Buy 500 Inquiries",
          bullets: [
            "Higher response rates",
            "More active deal flow",
            "Cleaner contact rates",
            "Better for focused outreach",
          ],
        },
        {
          name: "Recent MCA Inquiries – 1,000",
          price: "$700",
          sub: "one-time",
          link: "https://buy.stripe.com/bJe3cnh03dEO3kqcpo33W0b",
          button: "Buy 1,000 Inquiries",
          bullets: [
            "Higher-intent volume",
            "Built for active closers",
            "CSV delivery included",
            "Stronger contact potential",
          ],
        },
      ],
      custom: "2,500+ inquiries — custom pricing",
    },
    {
      id: "fresh-submissions",
      eyebrow: "PREMIUM MONEY MAKER",
      title: "Fresh Submissions (24–48 Hours)",
      subtitle: "Recent submitted merchant files designed for buyers who want stronger deal flow and premium positioning.",
      recommended: "Best for operators who want premium inventory and scalable volume",
      featured: true,
      products: [
        {
          name: "Fresh Submissions – 50 Pack (24–48 Hours)",
          price: "$250",
          sub: "one-time",
          link: "https://buy.stripe.com/00w28j39d0S2dZ49dc33W0i",
          button: "Buy 50 Pack",
          bullets: [
            "Recently submitted merchants",
            "Premium fresh tier",
            "Better urgency than older files",
            "Strong starter test batch",
          ],
        },
        {
          name: "Fresh Submissions – 100 Pack (24–48 Hours)",
          price: "$500",
          sub: "one-time",
          link: "https://buy.stripe.com/fZu5kvaBF0S2dZ4gFE33W0j",
          button: "Buy 100 Pack",
          bullets: [
            "Best-value core premium pack",
            "Designed for active buyers",
            "Consistent deal flow potential",
            "Premium file positioning",
          ],
        },
        {
          name: "Fresh Submissions – 250 Pack (24–48 Hours)",
          price: "$1,125",
          sub: "one-time",
          link: "https://buy.stripe.com/6oU9AL4dhgR0f389dc33W0l",
          button: "Buy 250 Pack",
          bullets: [
            "Scaling package",
            "Lower cost per file",
            "Ideal for aggressive campaigns",
            "Built for serious operators",
          ],
        },
        {
          name: "Fresh Submissions – 500 Pack (24–48 Hours)",
          price: "$2,000",
          sub: "one-time",
          link: "https://buy.stripe.com/5kQ7sD39deIScV0gFE33W0m",
          button: "Buy 500 Pack",
          bullets: [
            "Largest live premium package",
            "Built for high-volume buyers",
            "Best price per fresh file",
            "Great for teams that scale fast",
          ],
        },
      ],
      custom: "Need larger daily allocations? Request a custom ongoing supply quote.",
    },
    {
      id: "aged-submissions",
      eyebrow: "REWORK TIER",
      title: "Aged Submissions (30–180 Days)",
      subtitle: "These are submission-level files positioned for rework, follow-up, and deal placement efforts.",
      recommended: "Best for rework campaigns and mid-tier deal flow",
      featured: false,
      products: [
        {
          name: "Aged Submissions – 50 Pack (30–180 Days)",
          price: "$200",
          sub: "one-time",
          link: "https://buy.stripe.com/7sYcMX259cAKdZ4fBA33W0c",
          button: "Buy 50 Pack",
          bullets: [
            "Merchant submitted for funding",
            "Better than standard lead data",
            "Good for testing rework flow",
            "Lower-cost submission tier",
          ],
        },
        {
          name: "Aged Submissions – 100 Pack (30–180 Days)",
          price: "$350",
          sub: "one-time",
          link: "https://buy.stripe.com/dRmaEPeRV30a2gmblk33W0d",
          button: "Buy 100 Pack",
          bullets: [
            "Stronger value batch",
            "Great for active rework teams",
            "CSV delivery included",
            "Built for consistent outbound",
          ],
        },
        {
          name: "Aged Submissions – 250 Pack (30–180 Days)",
          price: "$900",
          sub: "one-time",
          link: "https://buy.stripe.com/7sYaEP7pt30abQW4WW33W0e",
          button: "Buy 250 Pack",
          bullets: [
            "Volume-focused package",
            "Lower cost per submission",
            "Designed for scaling buyers",
            "Best for bigger rework campaigns",
          ],
        },
      ],
      custom: "",
    },
    {
      id: "older-submissions",
      eyebrow: "LOWEST COST SUBMISSION TIER",
      title: "Older Submissions (180–360 Days)",
      subtitle: "Positioned as lower-cost volume rework inventory for buyers who care about cheap deal-file volume.",
      recommended: "Best for budget-focused volume rework",
      featured: false,
      products: [
        {
          name: "Older Submissions – 50 Pack (180–360 Days)",
          price: "$150",
          sub: "one-time",
          link: "https://buy.stripe.com/fZu14f39dcAKaMSfBA33W0f",
          button: "Buy 50 Pack",
          bullets: [
            "Lowest cost submission tier",
            "Good for aggressive volume testing",
            "Built for budget-conscious buyers",
            "CSV delivery included",
          ],
        },
        {
          name: "Older Submissions – 100 Pack (180–360 Days)",
          price: "$300",
          sub: "one-time",
          link: "https://buy.stripe.com/28E7sD7ptcAK5sygFE33W0g",
          button: "Buy 100 Pack",
          bullets: [
            "Value-first pricing",
            "Good for broader campaigns",
            "Lower-cost deal file volume",
            "Built for outreach scale",
          ],
        },
        {
          name: "Older Submissions – 250 Pack (180–360 Days)",
          price: "$750",
          sub: "one-time",
          link: "https://buy.stripe.com/fZu14ffVZeISdZ44WW33W0h",
          button: "Buy 250 Pack",
          bullets: [
            "Strong bulk value",
            "Best for larger rework buyers",
            "CSV delivery included",
            "Lowest cost at scale",
          ],
        },
      ],
      custom: "",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between leads and submissions?",
      a: "Leads are lighter-volume contact and inquiry data. Submissions are positioned as deeper merchant files and are structured as stronger deal-flow inventory than standard leads.",
    },
    {
      q: "What is the difference between the submission tiers?",
      a: "Fresh submissions are 24–48 hours old and positioned as the premium tier. Aged submissions are 30–180 days old and built for rework. Older submissions are 180–360 days old and positioned as the lowest-cost rework volume tier.",
    },
    {
      q: "How are orders delivered?",
      a: "Orders are delivered in spreadsheet / CSV-ready format for CRM upload, dialing, texting, and workflow use.",
    },
    {
      q: "Do you offer custom pricing?",
      a: "Yes. Larger volume, repeat-buyer allocations, industry targeting, state targeting, and custom requests should go through the quote form.",
    },
    {
      q: "Are there refunds?",
      a: "All sales are final due to the nature of digital business data products. Verified fulfillment issues may be reviewed for replacement or corrective fulfillment at our discretion.",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Fresh Submissions (24–48 Hours)",
    volume: "100 Pack",
    details: "",
  });

  const [formState, setFormState] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const onChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, success: "", error: "" });

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${quoteEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "PrimeMCAData Quote Request",
          _template: "table",
          _captcha: "false",
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          volume: form.volume,
          details: form.details,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setFormState({
        loading: false,
        success: "Quote request sent successfully.",
        error: "",
      });

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        interest: "Fresh Submissions (24–48 Hours)",
        volume: "100 Pack",
        details: "",
      });
    } catch (err) {
      setFormState({
        loading: false,
        success: "",
        error: "Form submission failed. Use the direct email button below as backup.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_24%),radial-gradient(circle_at_left,rgba(14,165,233,0.14),transparent_20%)]" />

      <section className="border-b border-emerald-400/15 bg-emerald-400/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 text-sm text-emerald-100 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <a href={`tel:${brand.phoneHref}`} className="hover:text-white">📞 {brand.phoneDisplay}</a>
            <a href={`mailto:${brand.email}`} className="hover:text-white">✉️ {brand.email}</a>
            <a href={`https://${brand.website}`} className="hover:text-white">🌐 {brand.website}</a>
          </div>
          <div className="text-emerald-50/90">Clean MCA data and deal-ready submissions for brokers, funders, and funding teams.</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-400/15 px-3 py-2 text-emerald-300">✦</div>
            <div>
              <span className="text-lg font-bold tracking-wide text-emerald-300">{brand.company}</span>
              <span className="ml-2 text-sm text-slate-300">Premium MCA Data Marketplace</span>
            </div>
          </div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#offers" className="hover:text-white">Offers</a>
            <a href="#premium" className="hover:text-white">Premium</a>
            <a href="#quote" className="hover:text-white">Quote</a>
            <a href="#legal" className="hover:text-white">Policies</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              Designed for serious buyers, repeat volume, and premium deal flow
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Clean MCA data and premium submission batches structured to look and sell like a real eight-figure operator.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              PrimeMCAData gives buyers a clear ladder: volume aged leads, more active recent inquiries, rework-focused aged submissions, low-cost older submissions, and premium 24–48 hour fresh submissions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#premium"
                className="rounded-2xl bg-emerald-400 px-6 py-4 text-center font-semibold text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:-translate-y-0.5"
              >
                View Premium Inventory
              </a>
              <a
                href="#quote"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Request Custom Quote
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {topStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Top positioning</div>
                  <div className="mt-2 text-2xl font-bold">How the site sells better</div>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">Live</div>
              </div>

              <div className="mt-6 space-y-4">
                {leadTypes.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-semibold">{item.title}</div>
                      <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">{item.age}</div>
                    </div>
                    <div className="mt-2 text-sm text-slate-300">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="https://buy.stripe.com/fZu5kvaBF0S2dZ4gFE33W0j"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-emerald-400 px-4 py-4 text-center font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Buy Fresh 100 Pack
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
      </section>

      <section id="offers" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Offer Structure</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Built in a real value ladder, not one generic leads page.
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              Cheap volume sits lower. Higher-intent and premium deal-flow sits higher. That keeps the brand feeling expensive while still letting buyers enter at different levels.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {leadTypes.map((lead) => (
              <div key={lead.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/20">
                <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                  {lead.age}
                </div>
                <h3 className="mt-5 text-2xl font-bold">{lead.title}</h3>
                <p className="mt-3 text-slate-300">{lead.desc}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {lead.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.featured ? "bg-gradient-to-b from-emerald-500/10 to-transparent" : ""} ${section.id === "fresh-submissions" ? "border-y border-emerald-400/20" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className={`text-sm font-semibold uppercase tracking-[0.25em] ${section.featured ? "text-emerald-300" : "text-sky-300"}`}>
                {section.eyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">{section.title}</h2>
              <p className="mt-5 text-lg text-slate-300">{section.subtitle}</p>
              <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                👉 {section.recommended}
              </div>
            </div>

            <div className={`mt-12 grid gap-6 ${section.featured ? "xl:grid-cols-4 lg:grid-cols-2" : "lg:grid-cols-3"}`}>
              {section.products.map((product) => (
                <div
                  key={product.name}
                  className={`rounded-[30px] border p-7 ${section.featured ? "border-emerald-400/30 bg-emerald-400/10 shadow-2xl shadow-emerald-500/10" : "border-white/10 bg-white/[0.04]"}`}
                >
                  {section.featured ? (
                    <div className="mb-4 inline-flex rounded-full bg-emerald-400 px-3 py-1 text-sm font-semibold text-slate-950">
                      Premium Inventory
                    </div>
                  ) : null}

                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <div className="mt-5 flex items-end gap-2">
                    <div className="text-5xl font-black">{product.price}</div>
                    <div className="pb-2 text-xl text-slate-400">{product.sub}</div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {product.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-8 block w-full rounded-2xl px-5 py-4 text-center font-semibold transition ${
                      section.featured
                        ? "bg-white text-slate-950 hover:-translate-y-0.5"
                        : "bg-emerald-400 text-slate-950 hover:-translate-y-0.5"
                    }`}
                  >
                    {product.button}
                  </a>
                </div>
              ))}
            </div>

            {section.custom ? (
              <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-5 text-slate-300">
                {section.custom}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">How Our Data Is Different</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Positioned for trust, not like a cheap oversold marketplace.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                This site is designed so buyers understand why they should pay more for cleaner structure, clearer freshness tiers, and controlled batch releases.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {howDifferent.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-200">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-emerald-400/15 via-sky-400/10 to-white/5 p-8 md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Repeat Buyers / Partners</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Consistent volume access for ongoing buyers.</h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">
              For buyers looking to run consistently:
            </p>

            <div className="mt-8 space-y-3 text-slate-200">
              <div>✔ Priority batch access</div>
              <div>✔ Cleaner allocations</div>
              <div>✔ Flexible volume scaling</div>
              <div>✔ Ongoing supply conversations</div>
            </div>

            <a
              href="#quote"
              className="mt-8 inline-flex rounded-2xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Contact for Ongoing Supply
            </a>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Fast Contact</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Request a batch or get started today.</h2>

            <div className="mt-8 grid gap-4">
              <a
                href={`tel:${brand.phoneHref}`}
                className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg font-semibold text-white transition hover:bg-slate-800"
              >
                📞 Call / Text: {brand.phoneDisplay}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg font-semibold text-white transition hover:bg-slate-800"
              >
                ✉️ Email: {brand.email}
              </a>
              <a
                href="#quote"
                className="rounded-2xl bg-emerald-400 px-5 py-4 text-center text-lg font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Submit Quote Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-emerald-400/15 via-sky-400/10 to-white/5 p-8 md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Custom Quote</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Need something outside the live checkout offers?</h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-200">
                Use this form for custom volume, larger allocations, ongoing supply, targeting requests, or anything not listed above.
              </p>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <div className="text-sm text-slate-400">Direct contact options</div>
                <div className="mt-5 space-y-4">
                  <a href={`mailto:${brand.email}`} className="block rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06]">
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="font-semibold">{brand.email}</div>
                  </a>
                  <a href={`tel:${brand.phoneHref}`} className="block rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06]">
                    <div className="text-sm text-slate-400">Phone</div>
                    <div className="font-semibold">{brand.phoneDisplay}</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
              <div className="text-2xl font-black">Request Custom Pricing</div>
              <div className="mt-2 text-slate-300">
                This built-in form sends quote requests directly to {quoteEmail}.
              </div>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                  value={form.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  placeholder="Full name"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                  required
                />
                <input
                  value={form.company}
                  onChange={(e) => onChange("company", e.target.value)}
                  placeholder="Company name"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                  required
                />
                <input
                  value={form.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  placeholder="Email address"
                  type="email"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                  required
                />
                <input
                  value={form.phone}
                  onChange={(e) => onChange("phone", e.target.value)}
                  placeholder="Phone number"
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500"
                />
                <select
                  value={form.interest}
                  onChange={(e) => onChange("interest", e.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none"
                >
                  <option>Aged MCA Leads (30–180 Days)</option>
                  <option>Recent MCA Inquiries (0–30 Days)</option>
                  <option>Aged Submissions (30–180 Days)</option>
                  <option>Older Submissions (180–360 Days)</option>
                  <option>Fresh Submissions (24–48 Hours)</option>
                  <option>Ongoing Supply / Repeat Buyer</option>
                  <option>Custom Targeting Request</option>
                </select>
                <select
                  value={form.volume}
                  onChange={(e) => onChange("volume", e.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none"
                >
                  <option>50 Pack</option>
                  <option>100 Pack</option>
                  <option>250 Pack</option>
                  <option>500 Pack</option>
                  <option>1,000+</option>
                  <option>Custom Volume</option>
                </select>
                <textarea
                  value={form.details}
                  onChange={(e) => onChange("details", e.target.value)}
                  placeholder="Tell us what you want: states, industries, freshness, daily volume, repeat buying, or special requests."
                  className="min-h-[160px] rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 md:col-span-2"
                />

                <button
                  type="submit"
                  disabled={formState.loading}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-400 px-5 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:opacity-70 md:col-span-2"
                >
                  {formState.loading ? "Sending Quote Request..." : "Submit Quote Request"}
                </button>

                {formState.success ? (
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-100 md:col-span-2">
                    {formState.success}
                  </div>
                ) : null}

                {formState.error ? (
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-4 text-sm text-red-100 md:col-span-2">
                    {formState.error}{" "}
                    <a href={`mailto:${quoteEmail}`} className="font-semibold underline">
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
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Questions buyers will ask before ordering.</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
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
              Tight policy language without making the site feel weak.
            </h2>
          </div>

          <div className="mt-12 grid gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-2xl font-bold">Terms & Conditions</h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  By using this website or purchasing any product from {brand.company}, you agree to these terms.
                  All products offered on this website are business-purpose lead and data products for brokers,
                  funders, and commercial users.
                </p>
                <p>
                  PrimeMCAData does not guarantee approvals, funding, response rates, closing percentages, or business outcomes.
                  Buyers are responsible for their own outreach, compliance, marketing, and business practices.
                </p>
                <p>
                  Purchased data may not be used unlawfully, redistributed unlawfully, or used in violation of applicable outreach,
                  texting, telemarketing, privacy, or platform rules.
                </p>
                <p>
                  We reserve the right to update products, pricing, descriptions, and batch structure at any time, and to refuse or cancel suspicious orders.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-2xl font-bold">Privacy Policy</h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  We collect information submitted through quote requests, checkout activity, and contact actions,
                  including name, business name, email, phone number, requested products, and order-related details.
                </p>
                <p>
                  This information is used to process orders, respond to inquiries, improve operations, and communicate about products and support.
                </p>
                <p>
                  Payments are processed by third-party processors such as Stripe. We do not directly store full payment card information.
                </p>
                <p>
                  For privacy-related questions, contact {brand.email}.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-2xl font-bold">Refund Policy</h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  All sales are final due to the nature of digital business data products.
                </p>
                <p>
                  Refunds are not offered for delivered digital data, processed subscription orders, response rates, outcomes,
                  buyer campaign performance, or business results.
                </p>
                <p>
                  If there is a verified material fulfillment issue, PrimeMCAData may review the issue and provide replacement data
                  or another reasonable resolution at its discretion.
                </p>
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
                Clean MCA data and structured submission inventory for brokers, funders, and serious funding operators.
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
                <a href={`https://${brand.website}`} className="hover:text-white">🌐 {brand.website}</a>
                <a href={`mailto:${brand.email}`} className="hover:text-white">✉️ {brand.email}</a>
                <a href={`tel:${brand.phoneHref}`} className="hover:text-white">📞 {brand.phoneDisplay}</a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Offers</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a href="#aged-leads" className="block hover:text-white">Aged Leads</a>
                  <a href="#recent-inquiries" className="block hover:text-white">Recent Inquiries</a>
                  <a href="#aged-submissions" className="block hover:text-white">Aged Submissions</a>
                  <a href="#fresh-submissions" className="block hover:text-white">Fresh Submissions</a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Actions</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a href="#quote" className="block hover:text-white">Request Quote</a>
                  <a href={`mailto:${brand.email}`} className="block hover:text-white">Email Us</a>
                  <a href={`tel:${brand.phoneHref}`} className="block hover:text-white">Call Now</a>
                  <a href="#legal" className="block hover:text-white">Policies</a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Premium CTA</div>
                <div className="mt-4 space-y-3 text-sm text-slate-400">
                  <a
                    href="https://buy.stripe.com/fZu5kvaBF0S2dZ4gFE33W0j"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-white"
                  >
                    Buy Fresh 100 Pack
                  </a>
                  <a
                    href="https://buy.stripe.com/00w28j39d0S2dZ49dc33W0i"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-white"
                  >
                    Buy Fresh 50 Pack
                  </a>
                  <a href="#premium" className="block hover:text-white">View Premium Section</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
