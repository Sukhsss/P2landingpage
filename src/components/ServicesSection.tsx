const ServicesSection = () => {
  const services = [
    { icon: "✅", title: "Daily live classes", description: "Till pre-boards!" },
    { icon: "✅", title: "Full recorded lectures", description: "for revisions :)" },
    { icon: "✅", title: "Handwritten notes", description: "that too chapter-wise" },
    { icon: "✅", title: "Toppers’ personal notes", description: "Do I even need to say something⁉️" },
    { icon: "✅", title: "Chapter-end cue cards", description: "We care about back benchers too 😉" },
    { icon: "✅", title: "Formula cheat sheet", description: "NOT! for backbenchers 😬" },
    { icon: "✅", title: "Concept slides used in class", description: "Perfect sync with classes" },
    { icon: "✅", title: "Doubt sessions", description: "Such that no doubt is left out" }
  ];

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white animate-fade-up">
              Take a look at what’s <span className="text-primary">Inside</span> this <span className="text-primary">ROADMAP</span>
            </h2>

            <div className="grid gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card/40 rounded-xl border border-border/20 hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 bg-transparent rounded-lg">
                    <span className="text-primary text-3xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card rounded-2xl p-4 border border-border/20 text-center">
              <div className="w-full max-w-[500px] mx-auto overflow-hidden rounded-2xl border border-border/20">
                <img
                  src="/media/Side.webp"
                  alt="Roadmap Bundle"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
