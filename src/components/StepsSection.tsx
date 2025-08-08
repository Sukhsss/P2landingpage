import { Download, Palette, Rocket } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Download the app",
      description: "Prachand Prayas app, by clicking the button below"
    },
    {
      number: "2", 
      icon: Palette,
      title: "Sign up for your class",
      description: "Choose your respective class you're in"
    },
    {
      number: "3",
      icon: Rocket,
      title: "FREE entry to 'Vidyarthi Banega Lakhpati'",
      description: "Get a chance to win upto 5 lakhs in cash, our team will connect with you"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">
            <span className="text-primary">Still not convinced?</span> Win 5 lakhs of cash prizes
          </h2>
          <p className="text-muted-foreground text-xl">
            An offer that no one in the industry dares to give
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center space-y-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center neon-glow">
                  <span className="font-bebas text-3xl text-white">{step.number}</span>
                </div>
                
                {/* Connecting Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-primary to-secondary transform translate-x-10"></div>
                )}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-card rounded-2xl mx-auto flex items-center justify-center border border-border/20">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-bebas text-2xl uppercase text-white">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button   onClick={() => window.open('https://play.google.com/store/apps/details?id=com.prachand.prayas.pvt.ltd&hl=en_IN', '_blank')}
className="btn-primary text-xl px-12 py-6">
            This is your last chance For Just ₹1837 <span className="line-through opacity-60 ml-2">₹45,999</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;