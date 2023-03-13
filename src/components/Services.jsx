import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Design",
    desc: "My expertise lies in crafting fully automated, customized, and unique websites that reflect the individuality of each client and meet their expectations.",
    link: "Learn More",
  },
  {
    name: "Development",
    desc: "Using my Google recognized development tools, I have the ability to refine and perfect any type of website to meet your needs and expectations.",
    link: "Learn More",
  },
  {
    name: "SEO Enhancement",
    desc: "By utilizing both basic and advanced SEO practices and tools, I can enhance the visibility of your website, ensuring it reaches a wide audience and achieves high rankings on search engines such as Google.",
    link: "Learn More",
  },
  {
    name: "Optimization",
    desc: "Improving page performance speed is another one of my specialties. I can ensure that your website's speed is optimized to avoid any potential loss of clients due to slow loading times.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 4 years of React.js
              and React Native experience
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services list */}
            <div>
              {services.map((item, index) => (
                <div
                  className="lg:border lg:rounded-full lg:pl-12 lg:pt-6 lg:pr-10 border-b border-white/20 lg:h-[180px] h-[146px] mb-[38px] flex transition duration-300 lg:hover:bg-black/20"
                  key={index}
                >
                  <div className="lg:max-w-[400px] max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {item.name}
                    </h4>
                    <p className="font-secondary leading-tight">{item.desc}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {item.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
