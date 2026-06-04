export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'Is this a real IQ test?',
    answer:
      'No. FreeIQCheck is an educational and entertainment quiz inspired by logical reasoning tasks. It is not a clinical or professionally normed IQ assessment and should not be used for medical, employment, or diagnostic purposes.',
  },
  {
    question: 'How long does the free IQ test take?',
    answer:
      'Most people finish our 25-question logical reasoning quiz in about 15 to 25 minutes. You can work at your own pace, and a timer is shown for reference only.',
  },
  {
    question: 'Do I need to sign up?',
    answer:
      'No account is required. Click "Start Free IQ Quiz," answer the questions, and view your instant results on the results page.',
  },
  {
    question: 'How is my score calculated?',
    answer:
      'Your score uses weighted performance across 25 questions—harder items count more toward your illustrative IQ-style result. This is not an official IQ score or clinical assessment.',
  },
  {
    question: 'Can I retake the online IQ test?',
    answer:
      'Yes. Use "Restart test" on the results page or return to the quiz page anytime to try again and compare your performance.',
  },
  {
    question: 'Is FreeIQCheck really free?',
    answer:
      'Yes. The quiz, results, and educational content on freeiqcheck.com are free to use. We do not charge for taking the test or viewing your outcome.',
  },
  {
    question: 'Will my answers be stored?',
    answer:
      'Your responses are processed in your browser to calculate your result. We do not require registration, and we do not sell personal data. See our Privacy Policy for details.',
  },
  {
    question: 'Who should use this brain test online?',
    answer:
      'Anyone curious about pattern recognition and logic puzzles for fun or practice. It is suitable for adults and teens who understand that results are for entertainment and learning only.',
  },
];
