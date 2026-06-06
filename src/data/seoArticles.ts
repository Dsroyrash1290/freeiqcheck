import type { FaqItem } from './faq';

export type ArticleSlug = 'what-is-iq' | 'average-iq-by-age' | 'iq-score-chart' | 'how-iq-tests-work';

export type ArticleSubsection = {
  heading: string;
  paragraphs: string[];
};

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  subsections?: ArticleSubsection[];
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
};

export type SeoArticle = {
  slug: ArticleSlug;
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
  sections: ArticleSection[];
  faq: FaqItem[];
};

const eduNote =
  'This article is for general education only. It does not provide medical, psychological, or diagnostic advice.';

export const seoArticles: Record<ArticleSlug, SeoArticle> = {
  'what-is-iq': {
    slug: 'what-is-iq',
    path: '/what-is-iq',
    linkLabel: 'What is IQ?',
    title: 'What Is IQ? — Intelligence Quotient Explained | FreeIQCheck',
    description:
      'Learn what IQ means, what intelligence tests measure, how scores are interpreted, and how online practice quizzes differ from clinical assessments.',
    h1: 'What Is IQ?',
    eyebrow: 'Educational guide',
    intro:
      'IQ stands for intelligence quotient—a score derived from standardized tests designed to measure certain cognitive abilities. Understanding what IQ is (and what it is not) helps you interpret practice quizzes and lifelong learning more wisely.',
    ctaLabel: 'Try Our Free IQ Test',
    ctaSubtext: 'Practice logical reasoning with 25 questions and instant illustrative results.',
    faqTitle: 'What is IQ? — FAQ',
    sections: [
      {
        heading: 'Defining intelligence quotient',
        paragraphs: [
          'In everyday language, IQ is a number meant to summarize performance on tests of reasoning, problem solving, memory, and related skills compared with a reference group. The term dates to early 20th-century psychology when researchers sought a practical index of mental ability.',
          'Modern professionals distinguish between narrow IQ scores from specific batteries and broader concepts like emotional intelligence, creativity, and practical know-how. No single number captures the full richness of how a person thinks, learns, or adapts in real life.',
          eduNote,
        ],
      },
      {
        heading: 'What IQ tests attempt to measure',
        subsections: [
          {
            heading: 'Fluid reasoning',
            paragraphs: [
              'Fluid ability involves solving novel problems without relying heavily on stored knowledge—pattern completion, analogies, and logic puzzles are classic examples. Many online practice quizzes emphasize this side of cognition because it transfers across puzzle formats.',
            ],
          },
          {
            heading: 'Crystallized knowledge',
            paragraphs: [
              'Crystallized intelligence reflects vocabulary, general knowledge, and skills accumulated over years of education and experience. Full clinical batteries often include both fluid and crystallized sections; short web quizzes may focus on one area.',
            ],
          },
          {
            heading: 'Processing speed and working memory',
            paragraphs: [
              'Some instruments measure how quickly you process information or how much you can hold in mind while working. Timed sections can influence scores, which is one reason testing conditions matter in professional settings.',
            ],
          },
        ],
      },
      {
        heading: 'How IQ scores are scaled',
        paragraphs: [
          'Many tests rescale raw performance so the population mean is set near 100 with a standard deviation around 15. That means roughly two-thirds of scores in a normed sample fall between 85 and 115—but only when the test was properly standardized on a representative group.',
          'Online practice tools may use illustrative scales that look similar but are not normed. Always read disclaimers before comparing your result to population charts.',
        ],
      },
      {
        heading: 'IQ is not destiny',
        subsections: [
          {
            heading: 'Environment and learning',
            paragraphs: [
              'Education quality, nutrition, sleep, stress, and motivation all influence performance on cognitive tasks. Scores can shift within a person’s range with practice, health changes, or different test formats.',
            ],
          },
          {
            heading: 'Ethics and misuse',
            paragraphs: [
              'IQ history includes harmful applications in discrimination and oversimplified ranking. Today, ethical use emphasizes supporting learning needs—not labeling worth. Reputable clinicians treat scores as one data point within a fuller evaluation.',
            ],
          },
        ],
      },
      {
        heading: 'Online practice vs. clinical testing',
        paragraphs: [
          'A free iq test online on sites like FreeIQCheck offers logical reasoning practice and illustrative feedback. Clinical IQ assessment requires trained examiners, controlled conditions, validated instruments, and interpretation in context—often for specific educational or clinical questions.',
          'If you want to explore how you perform on puzzles today, try our quiz. If you need evaluation for diagnosis or placement, consult qualified professionals.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does a high IQ mean someone is successful?',
        answer:
          'Not necessarily. Motivation, social skills, opportunity, and persistence matter enormously. IQ tests measure specific cognitive tasks, not life outcomes.',
      },
      {
        question: 'Can IQ change over time?',
        answer:
          'Skills measured by tests can improve with practice and education. Clinical full-scale IQ may shift modestly across childhood; adult scores are relatively stable but not fixed.',
      },
      {
        question: 'Is FreeIQCheck an official IQ score?',
        answer:
          'No. Our quiz is educational entertainment with an illustrative score, not a normed clinical result.',
      },
      {
        question: 'What is a normal IQ?',
        answer:
          'On properly normed tests, the average is near 100. “Normal” is often defined as a range around that mean, not a single cutoff.',
      },
    ],
  },

  'average-iq-by-age': {
    slug: 'average-iq-by-age',
    path: '/average-iq-by-age',
    linkLabel: 'Average IQ by age',
    title: 'Average IQ by Age — Educational Score Ranges | FreeIQCheck',
    description:
      'Understand how cognitive performance and IQ scores relate to age groups. Educational overview with tables—not medical norms for individuals.',
    h1: 'Average IQ by Age',
    eyebrow: 'Population patterns',
    intro:
      'People often wonder whether IQ should rise, fall, or stay flat across the lifespan. The answer depends on which abilities you measure, which test you use, and whether you mean group averages or one person’s trajectory.',
    ctaLabel: 'Take the Free IQ Test',
    ctaSubtext: 'See how you perform on today’s practice quiz—illustrative results only.',
    faqTitle: 'Average IQ by age — FAQ',
    sections: [
      {
        heading: 'Why age matters in cognitive testing',
        paragraphs: [
          'Different mental abilities follow different developmental curves. Childhood and adolescence bring rapid gains in reasoning and knowledge acquisition. Early adulthood is often a peak for speed-dependent tasks. Later decades may show stable wisdom and vocabulary even when raw puzzle speed slows slightly.',
          'Professional test manuals publish age-based norms so scores compare people to appropriate peers. Without those norms, raw counts of correct answers are hard to interpret.',
          eduNote,
        ],
      },
      {
        heading: 'Illustrative average ranges by life stage',
        paragraphs: [
          'The table below summarizes commonly cited population means on standardized instruments near 100 with SD 15. These are broad educational references—not predictions for any individual and not derived from FreeIQCheck quizzes.',
        ],
        table: {
          caption: 'Typical normed full-scale IQ means by age band (illustrative, standardized tests)',
          headers: ['Age band', 'Typical mean (SD 15 scale)', 'Notes'],
          rows: [
            ['Children 6–10', '~100 (by design)', 'Norms match age peers; wide developmental spread'],
            ['Adolescents 11–17', '~100 (by design)', 'Reasoning and knowledge grow quickly'],
            ['Young adults 18–29', '~100 (by design)', 'Often peak speed on novel tasks'],
            ['Adults 30–49', '~100 (by design)', 'Stable performance; experience aids crystallized skills'],
            ['Adults 50–64', '~100 (by design)', 'Vocabulary often strong; speed may vary'],
            ['Adults 65+', '~100 (by design)', 'Health and practice influence day-to-day performance'],
          ],
        },
      },
      {
        heading: 'Children and adolescents',
        subsections: [
          {
            heading: 'Development is uneven',
            paragraphs: [
              'A child strong in visual puzzles may still be developing verbal abstraction. Age norms exist precisely because comparing a 8-year-old to a 15-year-old on the same raw test would be meaningless without conversion.',
            ],
          },
          {
            heading: 'Avoid labeling from one online quiz',
            paragraphs: [
              'Parents curious about development should rely on teachers, school psychologists, and clinicians—not entertainment websites—for placement or gifted screening.',
            ],
          },
        ],
      },
      {
        heading: 'Adulthood and older age',
        paragraphs: [
          'Group averages stay near 100 when tests are re-normed because statisticians reset the scale. That does not mean an individual’s underlying speed never changes. It means the comparison group ages with them.',
          'Staying mentally active—reading, social engagement, learning skills—supports cognitive health. Physical exercise and sleep matter too. These habits help performance without obsessing over a single number.',
        ],
      },
      {
        heading: 'Using age context on practice sites',
        paragraphs: [
          'FreeIQCheck does not age-norm your illustrative score. Your result reflects today’s puzzle performance, not a population percentile by birth year. Treat comparisons across ages as informal curiosity, not science.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does IQ decline after 25?',
        answer:
          'Some speed-based tasks peak in young adulthood, while knowledge-based skills can grow for decades. Patterns vary by test subscale and individual health.',
      },
      {
        question: 'Should children take online IQ quizzes?',
        answer:
          'Light practice can be fun with parental guidance. High-stakes decisions require professional evaluation, not free web tools.',
      },
      {
        question: 'Are these averages from FreeIQCheck data?',
        answer: 'No. The table describes how clinical tests are normed near 100 by age group—not our quiz statistics.',
      },
      {
        question: 'Can older adults improve reasoning skills?',
        answer:
          'Practice with puzzles, learning new skills, and healthy lifestyle choices can support cognitive engagement at any age.',
      },
    ],
  },

  'iq-score-chart': {
    slug: 'iq-score-chart',
    path: '/iq-score-chart',
    linkLabel: 'IQ score chart',
    title: 'IQ Score Chart — Ranges, Percentiles & Labels | FreeIQCheck',
    description:
      'IQ score chart explained: ranges from 70 to 130+, percentile meaning, common labels, and why online practice scores differ from clinical norms.',
    h1: 'IQ Score Chart',
    eyebrow: 'Scores & percentiles',
    intro:
      'IQ score charts translate test performance into bands such as “average” or “superior.” Learning to read them helps you interpret research, media, and your own practice quiz results responsibly.',
    ctaLabel: 'Get Your Practice Score',
    ctaSubtext: 'Take our free iq test and see an illustrative score with a full breakdown.',
    faqTitle: 'IQ score chart — FAQ',
    sections: [
      {
        heading: 'The classic 100-point scale',
        paragraphs: [
          'Most familiar IQ scales set the population mean at 100 and standard deviation at 15. About 68% of people in a normed sample score between 85 and 115; about 95% fall between 70 and 130. Extreme scores are rare by design.',
          'Charts you see online often color-code these bands. Colors are pedagogical—they are not universal clinical labels.',
          eduNote,
        ],
      },
      {
        heading: 'IQ score range chart',
        table: {
          caption: 'Common IQ ranges on the SD 15 scale (normed clinical tests)',
          headers: ['Score range', 'Approx. percentile', 'Typical descriptor'],
          rows: [
            ['130+', '~98th+', 'Very superior / exceptionally high'],
            ['120–129', '~91st–97th', 'Superior'],
            ['110–119', '~75th–90th', 'High average'],
            ['90–109', '~25th–74th', 'Average'],
            ['80–89', '~9th–24th', 'Low average'],
            ['70–79', '~2nd–8th', 'Borderline (clinical context)'],
            ['Below 70', '<~2nd', 'Requires professional interpretation'],
          ],
        },
        paragraphs: [
          'Descriptors vary by publisher. Never diagnose from a chart alone—context, error margins, and subtest profiles matter.',
        ],
      },
      {
        heading: 'Percentiles vs. IQ points',
        subsections: [
          {
            heading: 'What percentiles mean',
            paragraphs: [
              'A percentile of 75 means you scored at or above 75% of the comparison group on that test. Percentiles depend entirely on who was in the norm sample.',
            ],
          },
          {
            heading: 'Standard error',
            paragraphs: [
              'Real tests have measurement error. A score of 105 might reflect a true range of roughly 100–110 depending on instrument reliability. Online quizzes rarely report error bands.',
            ],
          },
        ],
      },
      {
        heading: 'Subtests and profiles',
        paragraphs: [
          'Full clinical reports show strengths and weaknesses across verbal, perceptual, memory, and processing domains. A single full-scale number can hide a scatter of highs and lows. Charts of one number oversimplify.',
        ],
      },
      {
        heading: 'How FreeIQCheck scores fit in',
        paragraphs: [
          'Our illustrative IQ-style score maps weighted quiz performance to an educational range inspired by common charts. It is not normed on national populations and must not be read as a clinical percentile.',
          'Use our chart mentally as motivation to practice—not as identity. Compare your own retakes over time instead of chasing labels.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is 120 a good IQ score?',
        answer:
          'On a normed clinical test, 120 is above average. On a practice website, numbers are illustrative only—do not treat them as official.',
      },
      {
        question: 'What IQ is considered genius?',
        answer:
          'Media often use “genius” loosely. Psychometrics rarely use that term; very high scores (e.g., 130+) are statistically uncommon on normed tests.',
      },
      {
        question: 'Do all tests use mean 100?',
        answer:
          'Most modern IQ scales do, but some use SD 16 or different metrics. Always check which scale a chart references.',
      },
      {
        question: 'Where can I practice reasoning skills?',
        answer:
          'Try our free logical reasoning quiz for educational feedback and explanations after each attempt.',
      },
    ],
  },

  'how-iq-tests-work': {
    slug: 'how-iq-tests-work',
    path: '/how-iq-tests-work',
    linkLabel: 'How IQ tests work',
    title: 'How IQ Tests Work — Steps, Scoring & Online Quizzes | FreeIQCheck',
    description:
      'How IQ tests work: preparation, question types, timing, scoring, and how free online practice quizzes differ from professional assessments.',
    h1: 'How IQ Tests Work',
    eyebrow: 'Testing explained',
    intro:
      'Whether you sit with a psychologist or click through a browser quiz, IQ-style tests follow a recognizable pattern: structured tasks, rules, raw scores, and conversion to a scaled result. Here is how that process works.',
    ctaLabel: 'Start the Online Quiz',
    ctaSubtext: 'Experience a 25-question practice flow with instant illustrative scoring.',
    faqTitle: 'How IQ tests work — FAQ',
    sections: [
      {
        heading: 'The basic testing pipeline',
        subsections: [
          {
            heading: '1. Standardized tasks',
            paragraphs: [
              'Examiners present questions with fixed instructions and time limits. Standardization lets scores mean the same thing across people who took the same version under similar rules.',
            ],
          },
          {
            heading: '2. Raw scores',
            paragraphs: [
              'Initially you earn points for correct responses, completion speed, or quality rubrics. Raw counts are not yet “IQ numbers.”',
            ],
          },
          {
            heading: '3. Scaled scores and norms',
            paragraphs: [
              'Raw results convert to scaled scores using tables from norm groups matched by age (and sometimes other factors). This step produces IQ-style numbers and percentiles.',
            ],
          },
          {
            heading: '4. Interpretation',
            paragraphs: [
              'Professionals synthesize scores with observations, history, and other tests. A report explains strengths, weaknesses, and confidence intervals—not just a headline number.',
            ],
          },
        ],
      },
      {
        heading: 'Common question formats',
        paragraphs: [
          'Matrix reasoning, serial reasoning, vocabulary, digit span, and coding tasks appear across major batteries. Online practice quizzes usually subset these into multiple-choice logic, sequences, and analogies accessible without specialized materials.',
          eduNote,
        ],
      },
      {
        heading: 'Timing and environment',
        subsections: [
          {
            heading: 'Professional settings',
            paragraphs: [
              'Quiet rooms, trained proctors, and break rules reduce distraction. Fatigue and anxiety can affect outcomes; clinicians note this in interpretation.',
            ],
          },
          {
            heading: 'Online practice',
            paragraphs: [
              'Browser tests run on your schedule. FreeIQCheck shows a timer for awareness but encourages calm pacing. Results reflect casual conditions—not a proctored lab.',
            ],
          },
        ],
      },
      {
        heading: 'Scoring on FreeIQCheck',
        paragraphs: [
          'We use 25 multiple-choice items with increasing difficulty. Correct answers earn weighted credit toward an illustrative IQ-style score, plus accuracy by category, badges, and explanations.',
          'There is no manual grading step—your browser computes results instantly and sends you to a report page. That speed is convenient for learning but is not equivalent to psychometric review.',
        ],
      },
      {
        heading: 'When to seek professional testing',
        paragraphs: [
          'Consider formal evaluation when schools, clinicians, or employers require documented assessment—or when you need answers about learning differences, gifted programming, or cognitive changes after injury or illness.',
          'For everyday curiosity and brain training, an educational quiz and articles like this one are sufficient—provided you keep expectations realistic.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long do professional IQ tests take?',
        answer:
          'Full batteries may take 1–3 hours including breaks. Short online quizzes are usually 10–30 minutes.',
      },
      {
        question: 'Can you study for an IQ test?',
        answer:
          'Familiarity with puzzle formats can raise scores on similar items, especially practice tests. Clinical g tests aim to minimize coaching effects, but practice still helps reasoning fluency.',
      },
      {
        question: 'Why do online scores differ from clinic scores?',
        answer:
          'Different questions, norms, timing, and motivation all change results. Online illustrative scores are not interchangeable with WAIS or similar tools.',
      },
      {
        question: 'How do I try a free online version?',
        answer:
          'Visit our test page for 25 reasoning questions and instant educational feedback.',
      },
    ],
  },
};

export const allSeoArticles = Object.values(seoArticles);

export function getSeoArticle(slug: ArticleSlug): SeoArticle {
  return seoArticles[slug];
}
