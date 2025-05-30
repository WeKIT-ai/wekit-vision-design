
const AboutCTA = () => {
  return (
    <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Whether you're a student seeking guidance or a professional ready to mentor, 
          there's a place for you in the WeKIT community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-gray-100 transition-colors">
            Join as Student
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-black transition-colors">
            Become a Mentor
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
