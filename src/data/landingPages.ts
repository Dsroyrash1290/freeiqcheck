import type { FaqItem } from './faq';

export type LandingSlug =
  | 'free-iq-test'
  | 'free-iq-test-online'
  | 'free-iq-test-with-results'
  | 'free-iq-test-instant-results'
  | 'free-iq-test-with-instant-results'
  | 'free-iq-test-no-email'
  | 'best-free-iq-test';

export type LandingSection = {
  heading: string;
  paragraphs: string[];
};

export type LandingPageData = {
  slug: LandingSlug;
  path: string;
  linkLabel: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  ctaLabel: string;
  ctaSubtext: string;
  faqTitle: string;
  sections: LandingSection[];
  faq: FaqItem[];
};

const sharedDisclaimerNote =
  'FreeIQCheck is for education and entertainment only—not a clinical IQ test administered by a psychologist.';

export const landingPages: Record<LandingSlug, LandingPageData> = {
  'free-iq-test': {
    slug: 'free-iq-test',
    path: '/free-iq-test',
    linkLabel: 'Free IQ test guide',
    title: 'Free IQ Test — Logical Reasoning Quiz | FreeIQCheck',
    description:
      'Looking for a free IQ test? Take a 25-question logical reasoning quiz with instant illustrative results, no email, and clear educational disclaimers.',
    h1: 'Free IQ Test',
    eyebrow: 'Educational reasoning quiz',
    intro:
      'A quality free IQ test should be honest about what it measures, respect your time, and never hide results behind paywalls. FreeIQCheck offers exactly that—a structured practice quiz for curious minds.',
    ctaLabel: 'Start Free IQ Test',
    ctaSubtext: 'Begin your 25-question practice quiz and see illustrative results immediately.',
    faqTitle: 'Free IQ test FAQ',
    sections: [
      {
        heading: 'What people mean by a “free IQ test”',
        paragraphs: [
          'When someone searches for a free IQ test, they usually want a short cognitive challenge: pattern puzzles, logic questions, and maybe a score at the end. True IQ assessments used in clinics are standardized, timed by professionals, and interpreted with caution. Online versions are simplified cousins—useful for practice, not diagnosis.',
          'That distinction matters. A free IQ test on the web can sharpen reasoning skills and satisfy curiosity, but it cannot tell you your “real” IQ with medical precision. The best experiences say so upfront and focus on learning rather than sensational claims.',
        ],
      },
      {
        heading: 'How FreeIQCheck approaches the free IQ test',
        paragraphs: [
          'Our quiz contains 25 multiple-choice items spanning sequences, analogies, deduction, spatial reasoning, and numerical problems. Difficulty scales from approachable warm-up questions to harder multi-step logic in the final section—so the session feels like a real mental workout, not a gimmick.',
          'Scoring uses weighted performance: harder questions influence your illustrative IQ-style number more than easy ones. You also receive accuracy, time taken, category strengths, and explanations for every item. That turns a single sitting into feedback you can actually use on a retake.',
          sharedDisclaimerNote,
        ],
      },
      {
        heading: 'Who benefits from taking a free IQ test?',
        paragraphs: [
          'Students preparing for exams that reward logical thinking often use practice puzzles to build stamina. Professionals revisiting brain-training routines appreciate a quick benchmark before diving into books or apps. Others are simply curious—and a well-designed free IQ test is a low-risk way to explore how you think under mild time awareness.',
          'If you are comparing services, look for transparent disclaimers, varied question types, and results you can view without creating an account. Avoid sites that promise official certification or demand payment before showing any score.',
        ],
      },
      {
        heading: 'Tips before you start',
        paragraphs: [
          'Find a quiet spot and read each question fully before answering. Use paper for the hardest logic items if it helps—you are practicing reasoning, not memorizing tricks. After you finish, review missed explanations and note which categories felt weakest.',
          'Retakes are encouraged. Many users take our free IQ test multiple times over weeks to see whether accuracy improves on hard items, independent of the illustrative score number.',
        ],
      },
      {
        heading: 'Free IQ test vs. professional assessment',
        paragraphs: [
          'Licensed psychologists may administer batteries such as WAIS or WISC under controlled conditions. Those tools undergo rigorous norming and ethical guidelines. A browser quiz cannot replicate that environment or legal use case.',
          'Treat your FreeIQCheck outcome as a snapshot of puzzle performance today—a starting point for study, not a label. If you need evaluation for learning disabilities, gifted placement, or clinical concerns, consult a qualified professional.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is your free IQ test clinically accurate?',
        answer:
          'No. It is an educational logical reasoning quiz with an illustrative score. It is not normed like professional IQ batteries and must not be used for diagnosis or hiring decisions.',
      },
      {
        question: 'How many questions are in the free IQ test?',
        answer: 'The quiz has 25 questions with easy, medium, and hard sections. Most people finish in 15 to 25 minutes.',
      },
      {
        question: 'Do I need to pay or register?',
        answer: 'No payment or email is required. Start the quiz, finish, and view results in your browser.',
      },
      {
        question: 'Can I retake the free IQ test?',
        answer: 'Yes. Restart from the results page or return to the quiz anytime to practice again.',
      },
    ],
  },

  'free-iq-test-online': {
    slug: 'free-iq-test-online',
    path: '/free-iq-test-online',
    linkLabel: 'Free IQ test online',
    title: 'Free IQ Test Online — Online IQ Test, Instant Results | FreeIQCheck',
    description:
      'Take a free IQ test online in your browser. Fast online IQ test with 25 reasoning questions, scaled difficulty, instant results, and no email signup.',
    h1: 'Free IQ Test Online',
    eyebrow: 'Browser-based · Mobile friendly',
    intro:
      'The best free IQ test online runs wherever you are—phone, tablet, or laptop—without installing software or creating an account. FreeIQCheck was built for that modern, frictionless experience.',
    ctaLabel: 'Take Free IQ Test Online',
    ctaSubtext: 'Open the quiz in your browser and get instant illustrative results when you finish.',
    faqTitle: 'Free IQ test online FAQ',
    sections: [
      {
        heading: 'Why take an IQ test online instead of on paper?',
        paragraphs: [
          'Online delivery means immediate scoring, interactive progress indicators, and explanations linked to each question. You can pause between items, revisit previous answers in our quiz flow, and retake the session days later to compare improvement.',
          'Paper practice tests still exist in puzzle books, but they lack timed feedback loops and category analytics. A free IQ test online bridges practice and reflection in one sitting—especially when you want results without mailing answers to a scoring service.',
        ],
      },
      {
        heading: 'What makes a trustworthy free IQ test online',
        paragraphs: [
          'Look for clear educational disclaimers, visible privacy practices, and no forced email gate before scores appear. The interface should be readable on mobile screens, with buttons large enough to tap comfortably and text that respects dark mode preferences.',
          'Question variety matters too. Pure math drills alone do not reflect the breadth of many reasoning assessments. FreeIQCheck mixes patterns, verbal analogies, spatial items, and deduction so the online session feels rounded rather than repetitive.',
          sharedDisclaimerNote,
        ],
      },
      {
        heading: 'Technical requirements and accessibility',
        paragraphs: [
          'You only need a modern browser and a stable connection for the initial page load. The quiz itself processes answers locally to generate your result summary, which keeps the flow simple and avoids unnecessary account systems.',
          'We use semantic HTML landmarks, skip links, and readable contrast so the free IQ test online remains usable with keyboard navigation and screen readers. If animations bother you, your operating system’s reduced-motion setting is honored sitewide.',
        ],
      },
      {
        heading: 'Online safety and privacy expectations',
        paragraphs: [
          'Be cautious on unknown sites that ask for excessive personal data or push unexpected downloads. FreeIQCheck does not require your name, age, or email to begin the quiz.',
          'Read our Privacy Policy for details on hosting logs and browser storage used for theme preference and temporary result display between the quiz and results pages.',
        ],
      },
      {
        heading: 'From online quiz to real skill building',
        paragraphs: [
          'Treat each attempt as practice data: which categories were strongest, where you rushed, and which explanations surprised you. Pair weekly online sessions with offline habits—reading, sleep, and classic logic puzzles—to support general cognitive health.',
          'If you also want a results-focused overview, compare this guide with our pages on instant results and tests that include full score breakdowns—each emphasizes a different part of the same honest experience.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I take the free IQ test online on my phone?',
        answer: 'Yes. The layout is responsive and designed for mobile browsers as well as desktop.',
      },
      {
        question: 'Do I need to download an app?',
        answer: 'No app is required. Everything runs on freeiqcheck.com in your web browser.',
      },
      {
        question: 'Is an internet connection required?',
        answer: 'You need connectivity to load the site. Answers are scored when you complete the quiz in the browser.',
      },
      {
        question: 'Are online IQ scores official?',
        answer:
          'No online practice quiz provides an official clinical IQ score. Ours is illustrative and educational only.',
      },
    ],
  },

  'free-iq-test-with-results': {
    slug: 'free-iq-test-with-results',
    path: '/free-iq-test-with-results',
    linkLabel: 'Free IQ test with results',
    title: 'Free IQ Test With Results — Scores & Explanations | FreeIQCheck',
    description:
      'Get a free IQ test with results: illustrative score, accuracy, strengths, badges, and per-question explanations. No paywall after you finish.',
    h1: 'Free IQ Test With Results',
    eyebrow: 'Full report · No paywall',
    intro:
      'Many sites advertise a free IQ test with results but lock the score behind email forms or paid upgrades. FreeIQCheck shows your complete illustrative report the moment you finish—all 25 questions, no surprise fees.',
    ctaLabel: 'Get Your Free Results',
    ctaSubtext: 'Complete the quiz and open your full performance report instantly.',
    faqTitle: 'Free IQ test with results FAQ',
    sections: [
      {
        heading: 'What “results” should include',
        paragraphs: [
          'A meaningful free IQ test with results goes beyond a single number. You should see how many questions you answered correctly, how long you took, and which reasoning types drove your performance. Without explanations, missed questions become guesswork instead of learning opportunities.',
          'Ideally, results also clarify limitations: whether the score is normed, illustrative, or purely for entertainment. FreeIQCheck labels outcomes as educational so you never confuse practice feedback with a clinical report.',
        ],
      },
      {
        heading: 'Inside the FreeIQCheck results report',
        paragraphs: [
          'After the final question, you receive an illustrative IQ-style score on a ring visualization, an estimated percentile for context, and accuracy broken down by easy, medium, and hard sections. We highlight reasoning strengths by category—pattern recognition, logic, numerical items, and more.',
          'Achievement-style badges celebrate milestones like efficient completion or strong hard-section performance without pretending to be scientific awards. Motivational tips point you toward weak categories and healthy study habits.',
          'Every question appears in a review list marked correct or incorrect, with a concise explanation of the right reasoning path. That makes the free IQ test with results a study tool you can revisit before your next attempt.',
          sharedDisclaimerNote,
        ],
      },
      {
        heading: 'Results without email or accounts',
        paragraphs: [
          'We do not require registration to view your report. Your session data is stored temporarily in the browser to render the results page, which keeps the experience fast and private for casual users.',
          'If you clear browser storage or open results without finishing the quiz, you will be prompted to take the test first—there is no empty paywall page fishing for contact information.',
        ],
      },
      {
        heading: 'How to use your results productively',
        paragraphs: [
          'Compare accuracy on hard items separately from your overall score. Weighted scoring means a few tough puzzles can move the illustrative number noticeably—that is intentional, because real reasoning often hinges on complex items.',
          'Schedule a retake after reviewing explanations rather than immediately chasing a higher number. The goal of a free IQ test with results is insight, not competition.',
        ],
      },
      {
        heading: 'Results vs. certificates',
        paragraphs: [
          'Some websites sell printable certificates implying official recognition. FreeIQCheck does not sell credentials or claim professional validation. Your results are for personal feedback and practice tracking only.',
          'For workplace or educational testing, use services designated by the institution—not a free online quiz, regardless of how detailed the results appear.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are results really free?',
        answer: 'Yes. The full report—including score, review, and tips—is shown without payment.',
      },
      {
        question: 'What score will I see?',
        answer:
          'An illustrative IQ-style number mapped from weighted correct answers, plus accuracy and category strengths. It is not a clinical IQ score.',
      },
      {
        question: 'Can I share my results?',
        answer:
          'You can screenshot or discuss your report personally, but remember it is not an official document for employers or schools.',
      },
      {
        question: 'Where do results appear?',
        answer: 'After the quiz you are taken to our results page with the complete breakdown.',
      },
    ],
  },

  'free-iq-test-instant-results': {
    slug: 'free-iq-test-instant-results',
    path: '/free-iq-test-instant-results',
    linkLabel: 'Free IQ test instant results',
    title: 'Free IQ Test Instant Results — No Email, Immediate Score | FreeIQCheck',
    description:
      'Free IQ test with instant results and no email. Finish 25 questions and see your illustrative score, percentile, and explanations immediately.',
    h1: 'Free IQ Test Instant Results',
    eyebrow: 'Immediate feedback · No waiting',
    intro:
      'Waiting days for scantron scoring is a relic of the past for casual practice. If you want a free IQ test with instant results, you should see your outcome the second you submit the last answer—without inbox verification or artificial delays.',
    ctaLabel: 'Start Quiz — Instant Results',
    ctaSubtext: 'No email step. Your report appears as soon as you complete question 25.',
    faqTitle: 'Instant results FAQ',
    sections: [
      {
        heading: 'What “instant results” should mean',
        paragraphs: [
          'Instant should mean automated scoring in seconds, not “we will email you in 24 hours.” It should also mean the core metrics are visible without upgrading to premium. Delay tactics erode trust, especially when the site marketed itself as free.',
          'True instant feedback helps you learn while memory of each question is fresh. That is when explanations matter most—right after you commit to an answer path.',
        ],
      },
      {
        heading: 'How FreeIQCheck delivers instant results',
        paragraphs: [
          'When you tap “See Results” on the final item, the browser calculates weighted performance across all 25 answers, maps that to an illustrative score band, and navigates to your report page. The animated score ring and difficulty bars render immediately.',
          'There is no manual review queue because this is an educational quiz, not a proctored exam. The trade-off is transparency: instant illustrative feedback replaces the false promise of laboratory precision.',
          sharedDisclaimerNote,
        ],
      },
      {
        heading: 'Instant results with no email required',
        paragraphs: [
          'Many competitors use email capture as a tollbooth before showing any number. We skip that step entirely. You can take the entire free IQ test with instant results and never type an address—reducing spam risk and respecting your privacy.',
          'Optional future newsletters are not part of the core flow. Your practice session stands alone.',
        ],
      },
      {
        heading: 'Instant vs. accurate—holding both ideas',
        paragraphs: [
          'Fast scoring does not magically make a short web quiz clinically accurate. Instant tells you how you performed today on these puzzles; it does not measure every facet of intelligence or predict life outcomes.',
          'Use instant results to guide practice: retake when refreshed, drill weak categories, and read explanations even for questions you guessed correctly.',
        ],
      },
      {
        heading: 'Who values instant feedback most',
        paragraphs: [
          'Teachers demonstrating logic units, students cramming between classes, and curious adults on a coffee break all benefit from immediate closure. If you need a detailed breakdown beyond the score, our results page still includes per-question review—not just a headline number.',
          'Pair this guide with our overview of tests that emphasize full written results if you want the complete picture of what appears after the timer stops.',
        ],
      },
    ],
    faq: [
      {
        question: 'How fast are results delivered?',
        answer: 'Typically within a second of submitting your last answer—handled locally in your browser.',
      },
      {
        question: 'Do instant results require email verification?',
        answer: 'No email is required at any stage.',
      },
      {
        question: 'Can I see results without creating an account?',
        answer: 'Yes. There is no account system for the quiz or results.',
      },
      {
        question: 'Will instant results match a doctor’s IQ test?',
        answer:
          'No. Speed does not make the quiz clinical. Results are illustrative practice feedback only.',
      },
    ],
  },

  'best-free-iq-test': {
    slug: 'best-free-iq-test',
    path: '/best-free-iq-test',
    linkLabel: 'Best free IQ test',
    title: 'Best Free IQ Test — Compare Online IQ Tests Honestly | FreeIQCheck',
    description:
      'What makes the best free IQ test? Compare transparency, question quality, instant IQ scores, no-email policies, and disclaimers before you choose.',
    h1: 'Best Free IQ Test',
    eyebrow: 'Honest comparison guide',
    intro:
      'Searching for the best free IQ test can feel overwhelming—countless lists, bold claims, and hidden paywalls. This guide explains what actually matters so you can choose—or use FreeIQCheck—with clear expectations.',
    ctaLabel: 'Try FreeIQCheck',
    ctaSubtext: 'See how our 25-question quiz balances depth, speed, and honest disclaimers.',
    faqTitle: 'Best free IQ test FAQ',
    sections: [
      {
        heading: 'There is no single “best” for everyone',
        paragraphs: [
          'The best free IQ test for a teenager curious about puzzles may differ from what a professional wants—and neither should be a clinical instrument without a psychologist. Start by defining your goal: entertainment, study practice, or serious evaluation. Only the last category requires licensed testing.',
          'Ranking sites often earn affiliate revenue by praising partners. Independent criteria help you filter noise: transparency, item quality, UX ethics, and post-quiz education.',
        ],
      },
      {
        heading: 'Criteria we recommend evaluating',
        paragraphs: [
          'Transparency first. Does the site state clearly that results are not medical or hiring credentials? Avoid platforms comparing your score to celebrities or promising impossible precision.',
          'Question depth second. A handful of easy items cannot approximate broad reasoning. Look for varied formats—sequences, spatial, verbal, deduction—and difficulty that increases through the session.',
          'Results ethics third. The best free IQ test shows outcomes immediately without email blackmail, explains scoring simply, and teaches through answer keys.',
          'Privacy fourth. Minimize data collection. If a quiz demands extensive personal information for a casual practice score, reconsider.',
          sharedDisclaimerNote,
        ],
      },
      {
        heading: 'Where FreeIQCheck fits',
        paragraphs: [
          'We aim to be among the best free IQ test options for honest practice—not by claiming impossible accuracy, but by combining 25 scaled items, weighted illustrative scoring, instant detailed results, mobile-friendly design, and zero email requirement.',
          'We publish educational guides, FAQs, and clear disclaimers because trust compounds. Users return when they feel respected, not manipulated.',
        ],
      },
      {
        heading: 'Red flags when comparing tests',
        paragraphs: [
          'Beware countdown timers that pressure impulsive payments, pop-ups insisting your score is “exceptional” for everyone, and certificates implying official status. Skepticism is healthy.',
          'Also question tests that never explain wrong answers. Without feedback, “best” is just a number generator.',
        ],
      },
      {
        heading: 'Making the most of whichever test you choose',
        paragraphs: [
          'Take one session under calm conditions, review every explanation, note weak categories, and retake weeks later after deliberate practice. Compare trends in accuracy—not just illustrative scores—to see real progress.',
          'If instant turnaround matters most, read our dedicated instant-results guide; if you care about full reports, explore our results-focused page. Different keywords, same commitment to clarity.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is FreeIQCheck the best free IQ test for clinical use?',
        answer:
          'No. It is best suited for educational practice. Clinical assessment requires a qualified professional and standardized batteries.',
      },
      {
        question: 'What makes FreeIQCheck competitive among free tests?',
        answer:
          '25 varied questions, scaled difficulty, weighted scoring, instant detailed results, no email, and strong disclaimers.',
      },
      {
        question: 'Should I trust “IQ 140” pop-up ads?',
        answer:
          'Be skeptical of sensational marketing. Practice quizzes should focus on learning, not flattery designed to sell upgrades.',
      },
      {
        question: 'How often should I retake the best free test I find?',
        answer:
          'Occasional retakes are fine for practice. Daily obsession with scores is unnecessary—focus on explanations and skills.',
      },
    ],
  },

  'free-iq-test-with-instant-results': {
    slug: 'free-iq-test-with-instant-results',
    path: '/free-iq-test-with-instant-results',
    linkLabel: 'Free IQ test with instant results',
    title: 'Free IQ Test With Instant Results — No Email | FreeIQCheck',
    description:
      'Take a free IQ test with instant results online. Get an illustrative score, percentile estimate, and explanations immediately—no email, no paywall.',
    h1: 'Free IQ Test With Instant Results',
    eyebrow: 'Instant IQ score · No waiting',
    intro:
      'Looking for a free IQ test with instant results? FreeIQCheck scores your 25-question session in the browser the moment you finish—delivering an immediate IQ-style score, accuracy breakdown, and learning-focused explanations without an inbox tollbooth.',
    ctaLabel: 'Get Instant IQ Results',
    ctaSubtext: 'Complete the quiz and see your illustrative instant IQ score in seconds.',
    faqTitle: 'Free IQ test with instant results FAQ',
    sections: [
      {
        heading: 'What you get with instant results',
        paragraphs: [
          'A quality free IQ test with instant results should show more than a headline number. On FreeIQCheck you receive an illustrative IQ-style score, estimated percentile, category strengths, time taken, and a question-by-question review with explanations—all rendered immediately after question 25.',
          'Instant does not mean clinical. It means fast educational feedback while the reasoning paths are still fresh in memory—the best time to learn from mistakes.',
        ],
      },
      {
        heading: 'Instant results vs. delayed email scores',
        paragraphs: [
          'Many sites advertise instant IQ testing but hide the score behind email verification or paid unlocks. That adds friction and often leads to marketing spam. We skip both: your instant IQ score appears on our results page with no account creation.',
          'If you want to compare services, read <a href="/blog/are-free-iq-tests-accurate">are free IQ tests accurate</a> for an honest validity overview.',
          sharedDisclaimerNote,
        ],
      },
      {
        heading: 'Who benefits from instant IQ testing',
        paragraphs: [
          'Students warming up before logic-heavy exams, professionals squeezing practice into a break, and curious adults exploring cognitive puzzles all value immediate closure. Pair your instant IQ score with our <a href="/iq-percentile-calculator">IQ percentile calculator</a> to understand where a number sits in population context.',
          'Retake the quiz after reviewing explanations—many users track accuracy on hard items across weeks rather than obsessing over a single instant score.',
        ],
      },
      {
        heading: 'From instant score to real skill growth',
        paragraphs: [
          'Use instant results as a snapshot, not a label. Read <a href="/blog/can-you-increase-your-iq">can you increase your IQ</a> for science-backed habits that support reasoning performance over time.',
          'For a broader overview of online formats, see our <a href="/free-iq-test-online">free IQ test online</a> guide or start the <a href="/test">quiz</a> directly.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this really a free IQ test with instant results?',
        answer: 'Yes. Scoring happens in your browser immediately after you submit the final answer.',
      },
      {
        question: 'Do I need email for instant results?',
        answer: 'No email is required at any step. See our dedicated free IQ test no email page for privacy details.',
      },
      {
        question: 'What is included in the instant IQ score report?',
        answer: 'Illustrative IQ-style number, percentile estimate, accuracy, strengths, badges, and per-question explanations.',
      },
      {
        question: 'Will my instant IQ score match a clinical test?',
        answer: 'No. Speed and convenience do not make a practice quiz clinical. Results are educational only.',
      },
    ],
  },

  'free-iq-test-no-email': {
    slug: 'free-iq-test-no-email',
    path: '/free-iq-test-no-email',
    linkLabel: 'Free IQ test no email',
    title: 'Free IQ Test No Email — Instant Results, No Signup | FreeIQCheck',
    description:
      'Take a free IQ test with no email required. Instant illustrative results, 25 reasoning questions, and zero signup—privacy-friendly cognitive practice.',
    h1: 'Free IQ Test — No Email Required',
    eyebrow: 'Privacy-first · Zero signup',
    intro:
      'Tired of IQ sites that demand your inbox before showing a score? FreeIQCheck is a free IQ test with no email gate—start the quiz, finish 25 questions, and view your full illustrative report without creating an account or subscribing to marketing lists.',
    ctaLabel: 'Start Quiz — No Email',
    ctaSubtext: 'No forms, no verification links, no surprise newsletters.',
    faqTitle: 'Free IQ test no email FAQ',
    sections: [
      {
        heading: 'Why “no email” matters for IQ practice',
        paragraphs: [
          'Email gates are common on IQ test sites because contact lists are valuable—not because your score requires verification. For casual cognitive practice, asking for an address adds risk (spam, data resale) without improving the quiz itself.',
          'A free IQ test no email policy respects your time and privacy: you get instant results because the scoring is automated, not because someone manually emails a PDF hours later.',
        ],
      },
      {
        heading: 'How FreeIQCheck works without signup',
        paragraphs: [
          'Open the quiz in your browser, answer 25 multiple-choice reasoning items, and submit. Your session is scored locally to generate the results page—illustrative IQ-style score, percentile context, and explanations included.',
          'We do not require names, ages, or addresses. Theme preference may be stored in your browser; see our Privacy Policy for hosting and analytics details.',
          sharedDisclaimerNote,
        ],
      },
      {
        heading: 'No email vs. no data collection',
        paragraphs: [
          'No email does not mean zero technical logs—hosting providers may record standard server data for security. It does mean we will not force you through marketing funnels to see your score.',
          'Compare with our <a href="/free-iq-test-with-instant-results">free IQ test with instant results</a> overview if you care most about speed, or <a href="/best-free-iq-test">best free IQ test</a> for selection criteria.',
        ],
      },
      {
        heading: 'What to do after your no-email test',
        paragraphs: [
          'Review missed explanations, note weak categories, and retake when rested. Explore <a href="/blog/what-is-a-good-iq-score">what is a good IQ score</a> to keep perspective, or use the <a href="/iq-percentile-calculator">IQ percentile calculator</a> to interpret numbers responsibly.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is FreeIQCheck really a free IQ test with no email?',
        answer: 'Yes. You can complete the quiz and view results without entering an email address.',
      },
      {
        question: 'Will you email my results later?',
        answer: 'No. Results appear on screen immediately. We do not send score emails.',
      },
      {
        question: 'Do I need to create an account?',
        answer: 'No account or password is required for the quiz or results page.',
      },
      {
        question: 'Is a no-email IQ test less accurate?',
        answer:
          'Email collection does not improve test validity. Accuracy depends on question design and norms—not whether you typed an address.',
      },
    ],
  },
};

export const allLandingPages = Object.values(landingPages);

export function getLandingPage(slug: LandingSlug): LandingPageData {
  return landingPages[slug];
}
