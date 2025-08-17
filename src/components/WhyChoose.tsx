"use client";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Expert Faculty",
      desc: "Ex-officers & top educators",
    },
    {
      id: 2,
      title: "Structured Plan",
      desc: "Daily targets & analytics",
    },
    {
      id: 3,
      title: "Test Series",
      desc: "Prelims & Mains mocks",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 text-center flex flex-col items-center"
            >
              <h3 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
