import React from "react";

interface Testimonial {
  title: string;
  content: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Brilliant house to rent",
    content:
      "All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer.",
    name: "Jane Cooper",
    position: "CEO at ABC Corporation",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    title: "Efficient customer support",
    content:
      "The customer support team at our service is incredibly responsive and helpful. They went above and beyond to assist me with my issue.",
    name: "Emily Smith",
    position: "Marketing Manager at ABC Company",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    title: "Seamless integration process",
    content:
      "Integrating our systems with our service was smooth and hassle-free. The support team guided us through every step of the process.",
    name: "Sarah Brown",
    position: "CTO at XYZ Corporation",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    title: "Reliable service uptime",
    content:
      "Our service has consistently maintained high uptime, ensuring that our operations run smoothly without any disruptions.",
    name: "James White",
    position: "COO at XYZ Corporation",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    title: "Great experience overall",
    content:
      "The service has exceeded our expectations in every way. Highly recommend to anyone looking for quality.",
    name: "Mark Johnson",
    position: "Founder at Tech Innovations",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    title: "User-friendly platform",
    content:
      "The platform is incredibly user-friendly and has significantly improved our team’s productivity.",
    name: "Lisa Adams",
    position: "Product Manager at Future Tech",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto w-full px-10 bg-white">
      <div className="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Testimonials
        </h2>
        <p className="text-lg font-medium text-slate-700/70">
          Discover how our service can benefit you
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`border p-7 rounded-xl bg-white drop-shadow-md border-neutral-200/50 ${
              index % 2 === 0 ? "col-span-2" : "col-span-3"
            } flex flex-col gap-y-10 justify-between`}
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl">{testimonial.title}</p>
              <p className="font-medium text-slate-700/90">
                {testimonial.content}
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full"
              />
              <p className="pt-2 text-sm font-semibold">{testimonial.name}</p>
              <p className="text-sm font-medium text-slate-700/70">
                {testimonial.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
