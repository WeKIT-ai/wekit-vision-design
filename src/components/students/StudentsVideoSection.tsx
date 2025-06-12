
const StudentsVideoSection = () => {
  return (
    <section className="py-16 px-6 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Stories, Real Success</h2>
          <p className="text-xl text-gray-600">Hear from students who transformed their careers with our guidance</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
              <iframe
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/aU3GS_QIPlw?controls=1&showinfo=1&rel=0&modestbranding=1"
                title="Student Success Stories"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsVideoSection;
