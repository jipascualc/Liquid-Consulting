import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function MinimalTestimonials() {
  const testimonials = [
    {
      quote: "We are now back up and running on all three Dryers and since the calibrations we are not having to address vacuum problems at the Dryers.",
      author: "Bill",
      role: "Controls Engineer"
    },
    {
      quote: "Liquid's Milk Fat Standardizer (MFS) is exceptionally consistent and precise. Its accuracy will save us millions of dollars by eliminating the need to overshoot regulatory standards just to ensure compliance. On top of that, Liquid truly delivers on their promises\u2014they're simply easy to work with.\n\nWe also chose Liquid for this project because they were able to complete the system switch in under 60 hours, significantly reducing our costly downtime.",
      author: "Aaron",
      role: "Automation Manager"
    },
    {
      quote: "Excellent service provided. We have total confidence in what was presented by Liquid.",
      author: "Sara C.",
      role: "Customer"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6B7A8D] text-sm uppercase tracking-wider mb-4 font-mono">Testimonials</p>
          <h2 className="text-4xl md:text-5xl text-[#0A1628] mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#2D4A6F] mb-4 opacity-40" />
              <p className="text-[#4B5563] leading-relaxed mb-6 whitespace-pre-line text-lg italic min-h-[160px]">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-[#0A1628] font-medium">— {testimonial.author}</p>
                <p className="text-[#6B7A8D] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
