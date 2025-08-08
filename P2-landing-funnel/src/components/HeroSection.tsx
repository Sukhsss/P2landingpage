const HeroSection = () => {
  return (
    <section className="bg-background px-4 pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide leading-tight">
            <span className="text-primary">COMPLETE CBSE ROADMAP</span>{" "}
            <span className="text-white">everything you'll</span>
            <br />
            <span className="text-white">NEED</span>{" "}
            <span className="text-primary">to score 100%!</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            For Physics, Chemistry, Maths and Biology – we’ve covered every chapter properly.
            Live classes, recorded lectures, notes, slides - everything in one place.
          </p>
          
          <div className="pt-4">
            <button   onClick={() => window.open('https://play.google.com/store/apps/details?id=com.prachand.prayas.pvt.ltd&hl=en_IN', '_blank')}
className="btn-primary text-lg px-10 py-5">
              Get  Full  Access – ₹1837 Only <span className="line-through opacity-60 ml-2">₹9999</span>
            </button>
    
          </div>
        </div>
        
        {/* Right Video Placeholder */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-video bg-card rounded-2xl border border-border/20 overflow-hidden relative">
            <video
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/media/Video.mp4" type="Video/mp4" />
  Your browser does not support the video tag.
</video>

            
            {/* Glass overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;