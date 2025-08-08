import { CheckCircle, Code, Palette } from 'lucide-react';

const CalloutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Main Question */}
        <div className="animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-6xl uppercase text-white mb-6">
            This Roadmap Helps You <span className="text-primary">Study Smarter </span>!
          </h2>
        </div>
        
        {/* Highlight Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border/20 text-center space-y-4 hover:border-primary/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bebas text-2xl uppercase text-primary">
              Before (Like an NPC)
            </h3>
            <p className="text-white font-poppins font-semibold text-lg">
  Scattered notes ❌<br />
  Inconsistent classes ❌<br />
  Revision! woh kya hota hai ❌<br />
  Unresolved doubts ❌
</p>

            <p className="text-muted-foreground">
              AURA -1000000
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-border/20 text-center space-y-4 hover:border-primary/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto flex items-center justify-center">
              <Palette className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bebas text-2xl uppercase text-secondary">
              With this roadmap [Main character energy]
            </h3>
            <p className="text-white font-poppins font-semibold text-lg">
              Everything organised chapter-wise ✅<br />
              Live + recorded – never miss anything ✅<br />
              Notes + slides + cue cards = full revision kit ✅<br />
              Doubt clearance sessions ✅
            </p>
            <p className="text-muted-foreground">
              AURA 100000000000000
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="pt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button
  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.prachand.prayas.pvt.ltd&hl=en_IN', '_blank')}
  className="btn-primary text-xs md:text-sm"
>
  get full Lifetime Access NOW – ₹1837 Only<span className="line-through opacity-60">₹45,999</span>
</button>

        </div>
      </div>
    </section>
  );
};

export default CalloutSection;