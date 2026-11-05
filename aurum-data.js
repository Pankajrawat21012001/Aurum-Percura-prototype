window.AURUM = (function () {
  const SEC = [
    { id: 'nav', name: 'Navigation', y: 0, h: 60, att: 0.3 },
    { id: 'hero', name: 'Hero', y: 60, h: 480, att: 0.92 },
    { id: 'cost', name: 'Cost calculator', y: 540, h: 380, att: 0.74 },
    { id: 'record', name: 'The record', y: 920, h: 360, att: 0.62 },
    { id: 'research', name: 'Research', y: 1280, h: 380, att: 0.58 },
    { id: 'ninety', name: 'The Ninety', y: 1660, h: 360, att: 0.81 },
    { id: 'club', name: 'OBL Club', y: 2020, h: 300, att: 0.36 },
    { id: 'tiers', name: 'Pricing tiers', y: 2320, h: 420, att: 0.86 },
    { id: 'founder', name: 'Founder note', y: 2740, h: 300, att: 0.47 },
    { id: 'cta', name: 'Pilot CTA', y: 3040, h: 260, att: 0.55 }
  ];
  const P = [
    { id: 'P01', role: 'CHRO', co: 'IT services · 40,000 staff', hue: 30, delay: 0, outcome: 'Requested pilot', steps: [
      [30, 200, 'read', 'Reading the hero headline'],
      [24, 430, 'hover', 'Hovering “See what the record looks like”'],
      [24, 440, 'click', 'Clicked “See what the record looks like”', 'Persona 01 clicked the primary CTA within 9 seconds — the “record” framing landed for a CHRO.', 'positive'],
      [40, 1010, 'read', 'Reading the sample ledger entries'],
      [62, 1180, 'evaluate', 'Evaluating “Sponsor follow-through: 84%”', 'Persona 01 questioned whether 84% is a real result — the “Sample data” label is small and easy to miss.', 'issue'],
      [30, 1760, 'read', 'Reading The Ninety stages'],
      [70, 1880, 'evaluate', 'Looking for leadership programme outcomes', 'Persona 01 is looking for leadership programme outcomes — stages are described, results are not.', 'issue'],
      [22, 2440, 'read', 'Comparing Signal and Diagnostic tiers'],
      [50, 2690, 'evaluate', 'Searching for a price', 'Persona 01 found no indicative price; “priced against one manager” read as evasive.', 'issue'],
      [40, 3170, 'click', 'Clicked “Let’s talk about a pilot”', 'Persona 01 requested a pilot conversation.', 'positive'],
      [40, 3170, 'done', 'Completed — requested pilot']] },
    { id: 'P02', role: 'HR Director', co: 'BFSI · 12,000 staff', hue: 250, delay: 1, outcome: 'Left', steps: [
      [60, 180, 'read', 'Skimming the hero'],
      [30, 640, 'click', 'Editing “Women in mid-career roles”'],
      [30, 700, 'click', 'Entering annual attrition rate'],
      [55, 810, 'evaluate', 'Reading the replacement estimate', 'Persona 02 spent 48 seconds in the cost calculator — the strongest engagement on the page.', 'positive'],
      [28, 860, 'click', 'Opened “Show the working”'],
      [50, 2420, 'read', 'Reading the pricing section', 'Persona 02 has spent time examining the pricing section, looking for a per-seat figure.', 'neutral'],
      [72, 2660, 'hover', 'Re-reading “annual licence, not per seat”'],
      [70, 2600, 'evaluate', 'Evaluating the Benchmark tier', 'Persona 02 read “Benchmark is not ready yet” as a maturity risk.', 'issue'],
      [45, 2120, 'read', 'Scrolled back to the OBL Club', 'Persona 02 is unsure whether the Club is part of the licence or a separate event series.', 'issue'],
      [55, 3160, 'hover', 'Hovering the pilot CTA — not clicked'],
      [55, 3160, 'done', 'Completed — left without converting']] },
    { id: 'P03', role: 'Founder', co: 'Series B SaaS · 400 staff', hue: 150, delay: 1, outcome: 'Requested pilot', steps: [
      [45, 150, 'read', 'Reading the headline', 'Persona 03 found the homepage headline unclear — read it as a women’s network, not a measurement product.', 'issue'],
      [40, 280, 'evaluate', 'Evaluating the value proposition'],
      [52, 30, 'click', 'Clicked “How it works” in the nav'],
      [25, 1390, 'read', 'Reading “The double bind”'],
      [78, 1460, 'read', 'Reading “The speaker swap”', 'Persona 03 rated the research section the most credible part of the page — cited studies build trust.', 'positive'],
      [40, 1110, 'evaluate', 'Back at the sample ledger'],
      [50, 1720, 'read', 'Reading The Ninety'],
      [40, 1900, 'evaluate', 'Understanding the mechanism', 'Persona 03 only understood what Aurum does at The Ninety — 1,600px below the fold.', 'issue'],
      [40, 2860, 'read', 'Reading the founder note'],
      [45, 3170, 'click', 'Clicked “Let’s talk about a pilot”', 'Persona 03 requested a pilot after the founder note.', 'positive'],
      [45, 3170, 'done', 'Completed — requested pilot']] },
    { id: 'P04', role: 'Talent Head', co: 'Pharma · 8,500 staff', hue: 330, delay: 2, outcome: 'Left', steps: [
      [50, 220, 'read', 'Reading the hero'],
      [55, 440, 'hover', 'Hovering “Or read the research”'],
      [50, 1350, 'read', 'Reading the research'],
      [20, 1700, 'read', 'Looking for programme details'],
      [80, 1820, 'evaluate', 'Looking for format and time commitment', 'Persona 04 is struggling to understand the programme’s value proposition — who attends, how long, what format.', 'issue'],
      [30, 2100, 'read', 'Reading the Club formats'],
      [70, 2210, 'evaluate', 'Looking for cities and frequency', 'Persona 04 liked the pottery and long-lunch formats but couldn’t find where or how often they run.', 'issue'],
      [50, 2450, 'read', 'Scanning the tiers'],
      [40, 2850, 'read', 'Skimming the founder note'],
      [40, 2850, 'done', 'Completed — exited at founder note']] },
    { id: 'P05', role: 'CEO', co: 'Manufacturing · 3,200 staff', hue: 200, delay: 3, outcome: 'Hesitant', steps: [
      [30, 160, 'evaluate', 'Evaluating credibility and trust'],
      [22, 90, 'hover', 'Hovering the “Pre-launch” badge', 'Persona 05 flagged “Pre-launch” as a risk — no client names, pilots or advisors on the page.', 'issue'],
      [30, 1000, 'read', 'Reading the sample record'],
      [30, 2820, 'read', 'Reading the founder note', 'Persona 05: the founder’s CFO background raised credibility noticeably.', 'positive'],
      [60, 2920, 'read', 'Reading the founder note'],
      [40, 2500, 'evaluate', 'Checking the ROI framing'],
      [50, 770, 'evaluate', 'Returned to the cost calculator', 'Persona 05 responded to the ₹60L replacement receipt — ROI framing resonated with a CEO.', 'positive'],
      [50, 3180, 'evaluate', 'Hesitating on the pilot CTA'],
      [50, 3180, 'done', 'Completed — hesitant']] },
    { id: 'P06', role: 'DEI Lead', co: 'Consulting · 2,100 staff', hue: 100, delay: 2, outcome: 'Requested pilot', steps: [
      [40, 190, 'read', 'Reading the hero'],
      [30, 1300, 'read', 'Reading “Change the speaker”', 'Persona 06 strongly agreed with “Change the speaker. Not the woman.”', 'positive'],
      [70, 1050, 'read', 'Reading the ledger entries'],
      [60, 1760, 'read', 'Reading The Ninety'],
      [25, 2480, 'evaluate', 'Looking for data handling', 'Persona 06 wants to know how data about individual women is protected — no privacy statement found.', 'issue'],
      [50, 2150, 'read', 'Reading the Club'],
      [50, 3130, 'click', 'Clicked “Let’s talk about a pilot”', 'Persona 06 requested a pilot, conditional on a privacy conversation.', 'positive'],
      [50, 3130, 'done', 'Completed — requested pilot']] }
  ];
  const PR = {
    P01: { impression: 'A measurement product for sponsorship, credible but early. Understood the “record” idea within 10 seconds.', attention: ['Primary hero CTA', 'Sample ledger', 'Diagnostic tier'], confusion: ['Is 84% follow-through a real result or sample?', 'No indicative price'], pos: ['“Evidenced, dated” language', 'Diagnostic tier metrics map to board reporting'], neg: ['Outcomes described as stages, not results', '“Priced against one manager” felt evasive'], motivation: 'Needs a defensible women-in-leadership number for the board before FY27 planning.', final: '“I’d take a call — but I’ll need a price range and one case before I take this to my CEO.”' },
    P02: { impression: 'A thoughtful programme with a calculator. Unsure what exactly is being bought.', attention: ['Cost calculator (48s)', 'Pricing tiers', 'OBL Club'], confusion: ['Is the Club included in the licence?', 'Benchmark “not ready” — what is ready?'], pos: ['Calculator made attrition cost concrete', '“Show the working” sources'], neg: ['No per-seat or range pricing', 'Product scope unclear'], motivation: 'Reduce mid-career attrition in branch leadership; needs procurement-friendly pricing.', final: '“Interesting, but I can’t put this in a budget line without a number.”' },
    P03: { impression: 'Read the headline as a women’s network. Understood the product only at The Ninety.', attention: ['Research studies', 'The Ninety', 'Founder note'], confusion: ['Headline doesn’t name the product category'], pos: ['Cited research', 'Founder’s CFO perspective', 'Matched control group'], neg: ['Value proposition arrives too late'], motivation: 'Wants a measurable way to keep senior women as the company scales past 500.', final: '“The mechanism is smart. Lead with it.”' },
    P04: { impression: 'Strong research, unclear programme logistics.', attention: ['Research', 'The Ninety', 'Club formats'], confusion: ['Who attends, how long, what format?', 'Where and how often do Club events run?'], pos: ['Pottery and long-lunch formats', 'Side-by-side conversation rationale'], neg: ['No time commitment for participants or sponsors'], motivation: 'Needs a programme L&D can schedule and staff across 4 sites.', final: '“I can’t pitch this internally without knowing the hours involved.”' },
    P05: { impression: 'Sharp ROI framing, worried about maturity.', attention: ['Pre-launch badge', 'Founder note', '₹60L receipt'], confusion: ['Who else has done this?'], pos: ['Replacement-cost receipt', 'Founder credibility'], neg: ['No proof points or advisors', '“Pre-launch” up top'], motivation: 'Cost avoidance on senior attrition in a tight-margin business.', final: '“Show me one company that’s done the 90 days and I’ll sign.”' },
    P06: { impression: 'Exactly the framing DEI has been missing.', attention: ['“Change the speaker”', 'Ledger', 'Tiers'], confusion: ['How is individual data protected?'], pos: ['Not “fixing women”', 'Named sponsor commitments'], neg: ['No privacy or consent statement'], motivation: 'Move DEI from reporting to measurable sponsorship.', final: '“Yes — once legal sees a data handling note.”' }
  };
  const RECS = [
    { pr: 'Critical', sec: 'Hero', problem: 'Headline does not name the product category; read as a women’s network.', ev: 'P03, P04 · 2 of 6 misread within 15s', why: 'Visitors who misclassify the product in the first screen judge everything below against the wrong expectation.', fix: 'Add a sub-line: “A 90-day sponsorship programme and evidence ledger, sold to employers.”', impact: 'Earlier comprehension; est. +1 converting persona' },
    { pr: 'Critical', sec: 'Pricing tiers', problem: 'No indicative price or range anywhere on the page.', ev: 'P01, P02 · searched tiers 40s+ each', why: 'HR buyers cannot raise a budget line without a number; both left the section unresolved.', fix: 'Add “Pilots from ₹X” or a range, plus what a pilot includes.', impact: 'Removes the #1 exit reason for HR personas' },
    { pr: 'High', sec: 'The record', problem: '“Sample data” label is small; 84% read as a real claim.', ev: 'P01, P05', why: 'An illustrative figure mistaken for a claim, then discovered, damages trust.', fix: 'Place “Illustrative” inline next to each figure.', impact: 'Protects credibility on first read' },
    { pr: 'High', sec: 'Hero / Founder', problem: 'Pre-launch with no proof points.', ev: 'P05 hovered the badge, ended hesitant', why: 'Executives need a reference point before committing a quarter.', fix: 'Add advisors, pilot commitments or a methodology one-pager near the CTA.', impact: 'Converts hesitant executive personas' },
    { pr: 'Medium', sec: 'The Ninety', problem: 'Stages explained, logistics missing.', ev: 'P04 · 2 evaluations, no answer found', why: 'L&D must schedule and staff the programme.', fix: 'Add a who / hours / format grid under the four stages.', impact: 'Makes the programme pitchable internally' },
    { pr: 'Medium', sec: 'Pricing tiers', problem: 'No data-handling or consent statement.', ev: 'P06 conditional conversion', why: 'Recording data about named women triggers legal review.', fix: 'Add a short privacy note and link near the Ledger and tiers.', impact: 'Shortens legal review' },
    { pr: 'Low', sec: 'OBL Club', problem: 'Relationship between the Club and the licence is unclear.', ev: 'P02 scrolled back to check', why: 'Buyers worry about hidden add-on costs.', fix: 'State “Included in every licence” under the Club heading.', impact: 'Minor clarity gain' }
  ];
  const PROS = [
    { id: 'p1', name: 'Meera Kulkarni', title: 'CHRO', co: 'Northwind Infotech', ind: 'IT services', size: '10,000+', conn: '1st', score: 92, pri: 'High', problem: 'Women’s leadership representation and succession pipeline.', use: 'The Ninety, with Diagnostic reporting for the board', intro: 'Personalised note referencing her retention panel talk', coo: '42,000-person IT services firm; women are 38% at entry, 17% in delivery leadership.', ctx: 'Spoke on mid-career retention at a 2026 HR summit; shared a post on sponsorship vs mentoring.', ch: ['Leak between delivery lead and account head', 'Board asking for evidence, not intent'], hist: [] },
    { id: 'p2', name: 'Ananya Iyer', title: 'Chief People Officer', co: 'Ledgerline Bank', ind: 'BFSI', size: '10,000+', conn: '1st', score: 88, pri: 'High', problem: 'Branch leadership attrition among mid-career women.', use: 'Signal tier pilot across two regions', intro: 'Lead with the replacement-cost receipt', coo: 'Private bank, 18,000 staff, 600 branches.', ctx: 'Recently promoted to CPO; publicly committed to 30% women branch heads.', ch: ['Regional managers control nominations', 'Procurement needs fixed pricing'], hist: ['Met at a CII roundtable, Aug 2026'] },
    { id: 'p3', name: 'Rohan Mehta', title: 'Head of L&D', co: 'Castell Pharma', ind: 'Pharma', size: '5,000–10,000', conn: '2nd', score: 84, pri: 'High', problem: 'Leadership programmes with no measured outcome.', use: 'The Ninety alongside existing leadership academy', intro: 'Warm intro via Kavya S. (mutual)', coo: 'Mid-size pharma, 4 manufacturing sites.', ctx: 'Runs a 200-person leadership academy; posting about ROI of L&D.', ch: ['Scheduling across shifts', 'Proving L&D ROI'], hist: [] },
    { id: 'p4', name: 'Sana Qureshi', title: 'Head of Leadership Development', co: 'Tessera Manufacturing', ind: 'Manufacturing', size: '5,000–10,000', conn: '1st', score: 81, pri: 'High', problem: 'Few women progressing past plant manager.', use: 'Sponsor commitments for plant leadership track', intro: 'Reference shared alumni network', coo: 'Industrial manufacturer, 7 plants.', ctx: 'Alumna of the same programme as Aurum’s founder.', ch: ['Plant culture', 'Sponsor availability'], hist: [] },
    { id: 'p5', name: 'Priya Raman', title: 'DEI Lead', co: 'Halden Consulting', ind: 'Consulting', size: '1,000–5,000', conn: '2nd', score: 79, pri: 'Medium', problem: 'DEI reporting without measurable sponsorship.', use: 'Ledger + Diagnostic tier', intro: 'Comment-first on her recent post, then connect', coo: 'Strategy consultancy, 2,400 staff.', ctx: 'Writes on moving DEI from reporting to outcomes.', ch: ['Partner-track attrition', 'Legal review of personal data'], hist: [] },
    { id: 'p6', name: 'Kabir Sethi', title: 'Founder & CEO', co: 'Orbital SaaS', ind: 'SaaS', size: '200–1,000', conn: '1st', score: 71, pri: 'Medium', problem: 'Keeping senior women as the company scales.', use: 'Single-cohort pilot', intro: 'Direct note, founder to founder', coo: 'Series B B2B SaaS, 420 staff.', ctx: 'Raised Series B in 2026; hiring first VP People.', ch: ['No HR function to run it'], hist: ['Exchanged messages, Jan 2026'] },
    { id: 'p7', name: 'Arjun Nair', title: 'Head of HR', co: 'Quill Fintech', ind: 'Fintech', size: '1,000–5,000', conn: '3rd', score: 64, pri: 'Medium', problem: 'Engineering manager pipeline lacks women.', use: 'Signal tier for engineering', intro: 'Wait for a warm path', coo: 'Payments fintech, 1,600 staff.', ctx: 'Hiring for engineering managers.', ch: ['Budget freeze till Q2'], hist: [] },
    { id: 'p8', name: 'Vikram Das', title: 'VP Talent Acquisition', co: 'Meridian Retail', ind: 'Retail', size: '10,000+', conn: '2nd', score: 58, pri: 'Low', problem: 'Store manager attrition.', use: 'Possible later fit', intro: 'Nurture; not a buyer for retention', coo: 'National retailer, 30,000 staff.', ctx: 'Focus is hiring volume, not development.', ch: ['Wrong buyer for Aurum'], hist: [] }
  ];
  const CL = [
    { name: 'CHROs / Chief People Officers', n: 18, interest: 86, ind: [['IT', 35], ['BFSI', 30], ['Pharma', 20], ['Other', 15]], size: [['10k+', 60], ['5–10k', 30], ['1–5k', 10]], mot: ['Board-ready evidence on women in leadership', 'Retention cost'], ch: ['Mid-career leak', 'Sponsor accountability'], obj: ['Pre-launch risk', 'Price unknown'] },
    { name: 'Heads of HR', n: 34, interest: 72, ind: [['BFSI', 30], ['IT', 25], ['Mfg', 25], ['Other', 20]], size: [['10k+', 25], ['5–10k', 35], ['1–5k', 40]], mot: ['Attrition reduction', 'Manager capability'], ch: ['Budget lines', 'Change fatigue'], obj: ['Needs CHRO sign-off'] },
    { name: 'DEI & Inclusion Leaders', n: 12, interest: 90, ind: [['Consulting', 40], ['IT', 30], ['Other', 30]], size: [['10k+', 40], ['1–5k', 60]], mot: ['Move from reporting to outcomes'], ch: ['Legal review of personal data'], obj: ['Privacy', 'Limited budget authority'] },
    { name: 'L&D Heads', n: 22, interest: 68, ind: [['Pharma', 30], ['Mfg', 30], ['IT', 40]], size: [['5–10k', 50], ['10k+', 50]], mot: ['Prove L&D ROI'], ch: ['Scheduling across sites'], obj: ['Time commitment unclear'] },
    { name: 'Leadership Development Heads', n: 15, interest: 77, ind: [['Mfg', 40], ['IT', 35], ['Other', 25]], size: [['10k+', 70], ['5–10k', 30]], mot: ['Succession pipeline'], ch: ['Sponsor availability'], obj: ['Overlap with existing academy'] },
    { name: 'Founders / CEOs', n: 29, interest: 61, ind: [['SaaS', 55], ['Fintech', 25], ['Other', 20]], size: [['200–1k', 70], ['1–5k', 30]], mot: ['Retain senior women while scaling'], ch: ['No HR function'], obj: ['Too early for us'] },
    { name: 'Talent Acquisition Leaders', n: 18, interest: 38, ind: [['Retail', 40], ['IT', 40], ['Other', 20]], size: [['10k+', 80], ['1–5k', 20]], mot: ['Employer brand'], ch: ['Hiring volume focus'], obj: ['Not the retention buyer'] }
  ];
  const MEM = [
    { id: 'm1', label: 'CHRO · Large enterprise', sub: 'IT services, 40k staff', interest: [42, 55, 68], sessions: [
      { date: '12 Sep', title: 'Discovery', items: ['Asked about women’s leadership representation', 'Discussed employee retention in delivery', 'Concerned about programme adoption by senior sponsors'] },
      { date: '3 Oct', title: 'Sponsor mechanics', items: ['Asked how sponsors are chosen and held to dates', 'Wanted to see a sample Ledger'] },
      { date: 'Today', title: 'Commercial', items: ['Wants to understand Aurum’s ROI', 'Asks about implementation timelines', 'Wants proof of enterprise outcomes'] }],
      mot: ['Board-ready evidence', 'Cost of losing delivery leaders'], obj: ['Sponsor adoption', 'Pre-launch proof'], open: ['What does a 90-day pilot cost?', 'Who has done this before?', 'How much sponsor time per week?'], next: 'Bring a pilot cost range, a sponsor time budget (≈45 min/week) and the matched-control method. Offer a 1-region pilot.' },
    { id: 'm2', label: 'L&D Head · Pharma', sub: '4 manufacturing sites', interest: [50, 48], sessions: [
      { date: '20 Sep', title: 'Discovery', items: ['Asked how The Ninety fits the leadership academy', 'Raised shift scheduling'] },
      { date: 'Today', title: 'Logistics', items: ['Wants hours per participant', 'Asks if sessions can run on-site'] }],
      mot: ['L&D ROI'], obj: ['Time commitment'], open: ['Hours per participant?'], next: 'Share a site-by-site schedule template.' },
    { id: 'm3', label: 'Founder · SaaS', sub: 'Series B, 420 staff', interest: [35, 52], sessions: [
      { date: '1 Oct', title: 'Discovery', items: ['Asked whether Aurum works without an HR team'] },
      { date: 'Today', title: 'Fit', items: ['Wants a single-cohort option'] }],
      mot: ['Retain senior women while scaling'], obj: ['No HR owner'], open: ['Who runs it day to day?'], next: 'Propose a founder-sponsored single cohort.' }
  ];
  const SURV = [
    { name: 'Sponsorship appetite — HR leaders', n: 120, status: 'Completed', date: '28 Oct' },
    { name: 'Pricing sensitivity — annual licence', n: 80, status: 'Completed', date: '14 Oct' },
    { name: 'Club format preference', n: 60, status: 'Draft', date: '—' }
  ];
  const RUNS = [
    { id: 'UX-014', type: 'UX Lab', name: 'aurumcareers.tech · overall evaluation', date: 'Today', n: 6, status: 'Live' },
    { id: 'SV-022', type: 'Survey', name: 'Sponsorship appetite — HR leaders', date: '28 Oct', n: 120, status: 'Completed' },
    { id: 'SI-007', type: 'Sales', name: 'CHRO memory session #3', date: '26 Oct', n: 1, status: 'Completed' },
    { id: 'UX-013', type: 'UX Lab', name: 'aurumcareers.tech/pilot · conversion', date: '19 Oct', n: 8, status: 'Completed' },
    { id: 'SV-021', type: 'Survey', name: 'Pricing sensitivity — annual licence', date: '14 Oct', n: 80, status: 'Completed' }
  ];
  const SV = {
    segs: [
      { id: 's1', name: 'Enterprise CHROs & Chief People Officers', fit: 91, fn: 'People leadership', sen: 'C-suite', size: '10,000+', region: 'Mumbai · Bengaluru', desc: 'Own the board conversation on women in leadership and need evidence rather than intent.' },
      { id: 's2', name: 'Mid-market HR Directors', fit: 84, fn: 'HR', sen: 'Director', size: '1,000–10,000', region: 'Pune · NCR', desc: 'Hold the budget line for retention and need procurement-friendly pricing.' },
      { id: 's3', name: 'L&D and Leadership Development Heads', fit: 79, fn: 'Learning', sen: 'Head', size: '5,000+', region: 'Hyderabad · Chennai', desc: 'Run leadership academies and are under pressure to prove programme ROI.' },
      { id: 's4', name: 'DEI & Inclusion Leaders', fit: 76, fn: 'DEI', sen: 'Lead / Head', size: '1,000+', region: 'Mumbai · NCR', desc: 'Want to move from reporting representation to measuring sponsorship.' },
      { id: 's5', name: 'Founder-CEOs of scaling companies', fit: 68, fn: 'Leadership', sen: 'Founder', size: '200–1,000', region: 'Bengaluru', desc: 'Want to keep senior women as they scale, often without an HR team.' }
    ],
    people: [
      { id: 'r1', n: 'Meera K.', m: '48 · CHRO · IT services', seg: 's1', tag: 'Evidence-seeker', r: ['Promotion rates only', 'Agree', 'Unproven vendor', 'One reference client and a sample of the board report.'] },
      { id: 'r2', n: 'Ananya I.', m: '44 · Chief People Officer · BFSI', seg: 's1', tag: 'Budget owner', r: ['Mentoring programme participation', 'Strongly agree', 'Budget', 'A fixed pilot price I can put through procurement.'] },
      { id: 'r3', n: 'Farah D.', m: '51 · CHRO · Pharma', seg: 's1', tag: 'Pragmatist', r: ['We don’t measure it', 'Agree', 'Sponsor time', 'How many hours a week each sponsor actually commits.'] },
      { id: 'r4', n: 'Rahul V.', m: '42 · HR Director · Manufacturing', seg: 's2', tag: 'Cost-led', r: ['Promotion rates only', 'Neutral', 'Budget', 'A cost-avoided figure using our own attrition data.'] },
      { id: 'r5', n: 'Neha P.', m: '39 · HR Director · Fintech', seg: 's2', tag: 'Risk-averse', r: ['We don’t measure it', 'Agree', 'Unproven vendor', 'Who else has done the 90 days, and what moved.'] },
      { id: 'r6', n: 'Rohan M.', m: '45 · Head of L&D · Pharma', seg: 's3', tag: 'Operator', r: ['Mentoring programme participation', 'Agree', 'Sponsor time', 'A schedule that works across shifts and four sites.'] },
      { id: 'r7', n: 'Sana Q.', m: '41 · Leadership Development · Manufacturing', seg: 's3', tag: 'Builder', r: ['Promotion rates only', 'Strongly agree', 'Sponsor time', 'Evidence it complements our academy rather than replacing it.'] },
      { id: 'r8', n: 'Priya R.', m: '37 · DEI Lead · Consulting', seg: 's4', tag: 'Advocate', r: ['Named sponsor commitments', 'Strongly agree', 'Data privacy', 'A clear consent and data-handling note for named employees.'] },
      { id: 'r9', n: 'Ishita B.', m: '40 · Head of Inclusion · IT services', seg: 's4', tag: 'Compliance-minded', r: ['Mentoring programme participation', 'Agree', 'Data privacy', 'Legal sign-off on recording sponsor commitments.'] },
      { id: 'r10', n: 'Kabir S.', m: '38 · Founder-CEO · SaaS', seg: 's5', tag: 'Founder', r: ['We don’t measure it', 'Neutral', 'Budget', 'A single-cohort option we can run without an HR team.'] }
    ],
    qs: [
      { t: 'multiple_choice', p: 'How does your organisation currently measure whether women are being sponsored for advancement?', o: ['We don’t measure it', 'Promotion rates only', 'Mentoring programme participation', 'Named sponsor commitments'] },
      { t: 'likert_5', p: '“A 90-day sponsorship programme measured against a matched control group would be credible to our board.”', o: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'] },
      { t: 'multiple_choice', p: 'What would most likely stop you from piloting a programme like Aurum?', o: ['Sponsor time', 'Budget', 'Unproven vendor', 'Data privacy'] },
      { t: 'long_text', p: 'What would you need to see before committing a quarter to a pilot?', o: [] }
    ],
    sums: [
      'Nine of ten cannot evidence sponsorship today — they rely on promotion rates or mentoring attendance. Only the DEI lead tracks named commitments.',
      '80% agree a matched-control design would be board-credible; the two neutral responses came from cost-led and founder profiles who want a price first.',
      'Blockers split evenly: sponsor time (L&D, Pharma), budget (HR Directors, founders), vendor maturity (CHROs) and data privacy (DEI leaders).',
      'Proof requests cluster into three asks: a reference client, a fixed pilot price, and a sponsor time budget. DEI leaders add a data-handling note.'
    ],
    exec: 'Aurum’s core premise lands: enterprise HR leaders agree they cannot evidence sponsorship today and find a matched-control design credible. The barrier is not belief but readiness — buyers need a reference, a price and a clear sponsor time commitment before committing a quarter.',
    recs: ['Publish an indicative pilot price for a single region or cohort.', 'Lead CHRO conversations with a sample board report from the Ledger.', 'State sponsor time per week (≈45 min) in every proposal.', 'Prepare a one-page consent and data-handling note for DEI and legal reviewers.']
  };
  return { SEC, P, PR, RECS, PROS, CL, MEM, SURV, RUNS, SV };
})();
