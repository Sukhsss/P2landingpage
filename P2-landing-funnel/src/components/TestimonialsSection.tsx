const TestimonialsSection = () => {
  const testimonialScreenshots = [
    "/media/1.png",
    "/media/2.png",
    "/media/3.png",
    "/media/1.png" // Repeated or placeholder
  ];

  return (
    <section className="py-20 px-4 bg-card/10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">
            What Our <span className="text-primary">Customers</span> Say About Us
          </h2>
          <p className="text-muted-foreground text-xl">
            Real results from real students using our roadmap
          </p>
        </div>

        {/* Mobile Screenshot Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialScreenshots.map((src, i) => (
            <div
              key={i}
              className="animate-bounce-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative mx-auto max-w-[250px]">
                {/* iPhone Frame */}
                <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-black rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="bg-black h-6 flex justify-center items-start pt-1">
                      <div className="bg-gray-800 w-16 h-3 rounded-full"></div>
                    </div>

                    {/* Testimonial Image Content */}
                    <div className="aspect-[9/16] bg-black overflow-hidden">
                      <img
                        src={src}
                        alt={`Customer Review ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Home Indicator */}
                    <div className="bg-black h-6 flex justify-center items-end pb-1">
                      <div className="bg-white w-32 h-1 rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-primary mb-2">100000+</div>
            <p className="text-white font-poppins font-semibold">Happy Customers</p>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-secondary mb-2">94.59%</div>
            <p className="text-white font-poppins font-semibold">Average marks scored</p>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-primary mb-2">3 Hours</div>
            <p className="text-white font-poppins font-semibold">Average Time Spent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
