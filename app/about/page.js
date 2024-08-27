const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to [Your Brand Name], where fashion meets passion. Founded in [Year], our journey began with a simple idea: to create fashion that reflects individuality and authenticity. We believe in the power of clothing to inspire confidence and express personal style. Our collections are curated with care, ensuring that every piece resonates with our commitment to quality, sustainability, and innovation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower people to feel their best through stylish, comfortable, and sustainable fashion. We strive to make a positive impact on the world by embracing eco-friendly practices and supporting ethical production methods. Every step we take is guided by our dedication to bringing you the best in fashion while caring for our planet and communities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where fashion is more than just clothing—it’s a movement. A movement that celebrates diversity, promotes sustainability, and encourages self-expression. Our goal is to be at the forefront of this change, leading by example and inspiring others to join us in our journey.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/path-to-image.jpg" // Replace with your image path
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            <div className="text-center">
              <img
                src="/path-to-image.jpg" // Replace with your image path
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>

            <div className="text-center">
              <img
                src="/path-to-image.jpg" // Replace with your image path
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
