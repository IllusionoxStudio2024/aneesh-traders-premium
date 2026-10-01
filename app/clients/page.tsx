import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';

const groups = [
  [
    'Real Estate & Infrastructure Developers',
    [
      'Premier Builders',
      'Archana Projects',
      'Ujjwal Developers',
      'Aditi Builder',
      'Ashlesh Enterprises',
    ],
  ],
  [
    'Architects & Interior Design Consultants',
    [
      'ACS Consultants, Bangalore',
      'Vriksh Design',
      'Sketch S Associates',
      'Sankeerna Construction',
    ],
  ],
  [
    'Retail, Hospitality & Institutional',
    [
      'Abharan Jewellers & Motors',
      'Swadist Group of Hotels',
      'K K Fishnet',
    ],
  ],
  [
    'Regional & Out-of-Station Projects',
    ['Rafa Construction (Goa & Madikeri)'],
  ],
];

const brands = [
  'CenturyPly',
  'Sequence Surfaces',
  'Charms',
  'Advanced',
  'Indowud',
  'Hettich',
  'Olive',
  'Euro Pratik',
  'Ebco',
];

export default function Clients() {
  return (
    <>
      <section className="bg-[#11110f] pt-36 pb-24 text-white">
        <div className="container">
          <p className="eyebrow text-white/40">
            Clients & brand associations
          </p>

          <h1 className="serif mt-7 max-w-5xl text-6xl leading-[.9] md:text-[100px]">
            Trust is built
            <br />
            <span className="text-[#d7b37b]">project by project.</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            kicker="01 — Client groups"
            title="A network across projects, design and trade."
            copy="Client and project-partner names below are taken from the supplied project material. Use approved logos and photographs in the final production version."
          />

          <div className="mt-14 grid gap-px bg-black/10 md:grid-cols-2">
            {groups.map((g, i) => (
              <div key={i} className="bg-[#f3f0e9] p-8 md:p-10">
                <p className="eyebrow text-[#9b7443]">0{i + 1}</p>

                <h2 className="serif mt-7 text-4xl">
                  {g[0] as string}
                </h2>

                <div className="mt-8 space-y-3">
                  {(g[1] as string[]).map((x) => (
                    <div
                      key={x}
                      className="border-b border-black/10 pb-3 text-sm text-black/60"
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#e8e1d5]">
        <div className="container">
          <SectionTitle
            kicker="02 — Brand associations"
            title="Trusted material names, brought together."
          />

          <div className="mt-14 grid grid-cols-2 gap-px bg-black/10 md:grid-cols-3">
            {brands.map((b, i) => (
              <div key={b} className="bg-[#e8e1d5] p-8 md:p-10">
                <span className="eyebrow text-black/25">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <p className="serif mt-8 text-3xl">{b}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em]"
          >
            Discuss a project
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
