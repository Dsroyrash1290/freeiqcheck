export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'Is FreeIQCheck a real clinical IQ test?',
    answer:
      'No. FreeIQCheck is an educational and entertainment quiz inspired by logical reasoning tasks. It is not a clinical or professionally normed IQ assessment and should not be used for medical, employment, or diagnostic purposes.',
  },
  {
    question: 'Where can I take a free IQ test online with instant results?',
    answer:
      'You can take our free iq test online at freeiqcheck.com/test. Complete 25 questions and receive instant illustrative results on the results page—no email required.',
  },
  {
    question: 'Is this a free IQ test with instant results and no email?',
    answer:
      'Yes. We do not ask for your email address to start the quiz or view your free iq test with instant results. Everything runs in your browser without creating an account.',
  },
  {
    question: 'What makes this one of the best free IQ tests?',
    answer:
      'We focus on transparency: scaled difficulty, varied question types, weighted scoring, clear disclaimers, and detailed explanations. Unlike spammy sites, we do not promise official IQ certification or use high-pressure upsells.',
  },
  {
    question: 'How long does the free IQ test take?',
    answer:
      'Most people finish our 25-question quiz in about 15 to 25 minutes. You can work at your own pace, and a timer is shown for reference only.',
  },
  {
    question: 'Do I get a free IQ test with results after finishing?',
    answer:
      'Yes. Every attempt includes a free iq test and results page with your illustrative score, accuracy, time, strengths, improvement tips, and a question-by-question review.',
  },
  {
    question: 'How is my score calculated?',
    answer:
      'Your score uses weighted performance across 25 questions—harder items count more toward your illustrative IQ-style result. This is not an official IQ score or clinical assessment.',
  },
  {
    question: 'Can I retake free IQ tests on your site?',
    answer:
      'Yes. Use "Restart test" on the results page or return to the quiz anytime. Many users retake our free iq tests to practice weak areas and compare progress.',
  },
  {
    question: 'Are free IQ tests accurate?',
    answer:
      'Short online quizzes measure a narrow slice of reasoning under casual conditions. They can be fun and useful for practice but are not as rigorous as professionally administered IQ batteries. Treat scores as illustrative feedback.',
  },
  {
    question: 'Is FreeIQCheck really free?',
    answer:
      'Yes. The quiz, instant results, and educational content are free to use. We do not charge for taking the test or viewing your outcome.',
  },
  {
    question: 'Will my answers be stored or sold?',
    answer:
      'Your responses are processed in your browser to calculate your result. We do not require registration, and we do not sell personal data. See our Privacy Policy for details.',
  },
  {
    question: 'Who should use this brain test online?',
    answer:
      'Anyone curious about pattern recognition and logic puzzles for fun or practice. It is suitable for adults and teens who understand that results are for entertainment and learning only.',
  },
];

/** Shorter set for homepage accordion (avoids overwhelming UI) */
export const homepageFaqItems = faqItems.slice(0, 8);
