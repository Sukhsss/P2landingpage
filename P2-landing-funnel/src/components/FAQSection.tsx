import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
  {
    question: "Are these classes live or recorded?",
    answer: "Live classes happen every week, and all are recorded. So you can watch anytime."
  },
  {
    question: "Will I get notes for each chapter?",
    answer: "Yes, handwritten notes and slides are shared after each topic."
  },
  {
    question: "Is this for CBSE board only?",
    answer: "Yes, it’s based completely on the CBSE syllabus and NCERT books."
  },
  {
    question: "Do I have to pay again next year?",
    answer: "No. It’s a one-time payment. Lifetime access."
  },
  {
    question: "Can I ask doubts?",
    answer: "Yes. We have weekly doubt sessions and support group."
  },
  {
    question: "How will I get access after payment?",
    answer: "We’ll send you full access on WhatsApp right after payment."
  }
];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Everything you need to know about our roadmap
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="faq-item bg-card border border-border/20 rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-trigger w-full flex items-center justify-between p-6 hover:bg-card/50 transition-colors duration-200"
              >
                <span className="text-left font-poppins font-semibold text-white text-lg">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="faq-content px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <button   onClick={() => window.open('https://play.google.com/store/apps/details?id=com.prachand.prayas.pvt.ltd&hl=en_IN', '_blank')}
className="btn-primary text-xl px-12 py-6">
            Become a topper and lakhpati NOW!
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;