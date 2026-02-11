import { motion } from "motion/react";

export function MinimalAbout() {
  return (
    <section id="about" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#ff6c19] text-sm uppercase tracking-wider mb-4">About Liquid</p>
          <h2 className="text-4xl md:text-5xl text-[#0d1c36] mb-4 max-w-4xl mx-auto">
            Excellence in Food Industry Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl text-[#0d1c36] mb-4">What is Liquid</h3>
              <p className="text-gray-600 leading-relaxed">
                Liquid provides innovative, on-demand solutions and expert support to optimize and enhance food industry operations. Founded in 2006 in Sweden, Liquid has grown into a robust organization of approximately 100 dedicated professionals. We specialize in a wide range of services, including equipment upgrades, maintenance, and troubleshooting, tailored to meet the unique needs of each client. Our mission is to deliver exceptional results that boost efficiency, reduce costs, and ensure the highest standards of quality in your production processes. With Liquid, you gain a partner committed to your success and the seamless operation of your business.
              </p>
            </div>

            <div>
              <h3 className="text-3xl text-[#0d1c36] mb-4">What we offer</h3>
              <p className="text-gray-600 leading-relaxed">
                At Liquid, we provide a comprehensive range of services to optimize and enhance food industry operations. Our offerings include tailored long-term maintenance contracts, rapid-response troubleshooting, and turnkey engineering solutions for any customer demand. We have specialized expertise in aseptic knowledge, training, and troubleshooting, ensuring minimal downtime and maintaining product integrity. Our goal is to reduce operational costs, improve production line performance, and deliver innovative solutions tailored to your needs. Whether you need immediate assistance or long-term support, Liquid is your trusted partner in achieving operational excellence and profitability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl text-[#0d1c36] mb-4">Our Vision is to</h3>
              <p className="text-gray-600 leading-relaxed">
                Be the most agile partner for our customers
              </p>
            </div>

            <div>
              <h3 className="text-3xl text-[#0d1c36] mb-4">Our Mission is to</h3>
              <p className="text-gray-600 leading-relaxed">
                Make it easier for liquid food producers to drive profitable growth.
              </p>
            </div>

            <div>
              <h3 className="text-3xl text-[#0d1c36] mb-4">Why Liquid</h3>
              <p className="text-gray-600 leading-relaxed">
                Choosing Liquid means partnering with a team that puts your needs first, providing exceptional responsiveness and personalized attention with unwavering integrity. From the moment you start working with us, you'll experience our "make it easier" approach, ensuring a seamless and efficient process. We always strive to deliver the best solutions for your operational needs, ensuring you receive the highest level of care and professionalism. Discover the fun and easy way to elevate your operations with Liquid, and let us bring a smile to your face as we enhance your success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
