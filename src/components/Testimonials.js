import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCard = ({ name, role, company, image, quote }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-6 py-8">
      <div className="flex items-center mb-4">
        <img className="h-12 w-12 rounded-full mr-4" src={image} alt={name} />
        <div>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mette Jensen",
      role: "Partner",
      company: "Jensen & Co. Advokatfirma",
      image: "/dansk-pige.webp",
      quote: "Ailex har revolutioneret vores arbejdsgang. Vi sparer timevis af research-tid hver dag, hvilket giver os mulighed for at fokusere mere på at levere værdi til vores klienter."
    },
    {
      name: "Lars Nielsen",
      role: "Advokat",
      company: "Nielsen & Partners",
      image: "/person2.webp",
      quote: "Den AI-drevne præcedens analyse i Ailex har givet os en klar konkurrencefordel. Vi kan nu hurtigt identificere relevante mønstre og tendenser i retspraksis."
    },
    {
      name: "Sofia Andersen",
      role: "Juridisk direktør",
      company: "TechCorp A/S",
      image: "/person1.webp",
      quote: "Ailex's automatiserede dokumentgenerering har drastisk reduceret vores turnaround-tid for kontrakter. Det er et uundværligt værktøj for vores in-house juridiske team."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Hvad vores kunder siger
        </h2>
        <div className="relative">
          <div className="flex justify-center">
            <TestimonialCard {...testimonials[currentTestimonial]} />
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;