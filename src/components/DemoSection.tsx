const DemoSection = () => {
  const screenshots = ["public/media/1.png", "public/media/1c.png", "public/media/2.png", "public/media/3.png"]; // Add your actual paths here

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-8 animate-fade-up">
          What <span className="text-primary">Students </span> say about us
        </h2>

        {/* Mobile Mockups Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {screenshots.map((src, i) => (
            <div key={i} className="animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative mx-auto max-w-[200px]">
                {/* iPhone Frame */}
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="bg-black h-6 flex justify-center items-start pt-1">
                      <div className="bg-gray-800 w-16 h-3 rounded-full"></div>
                    </div>

                    {/* Screen Content */}
                    <div className="aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                      <img
                        src={src}
                        alt={`Demo ${i + 1}`}
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
      </div>
    </section>
  );
};

export default DemoSection;
