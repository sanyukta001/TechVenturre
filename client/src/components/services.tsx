import { Code, Smartphone, Paintbrush, ShoppingCart, Server, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      technologies: ["React Native", "Flutter", "Swift"]
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.",
      technologies: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      technologies: ["Shopify", "WooCommerce", "Custom"]
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust server-side solutions with APIs, databases, and cloud infrastructure for scalable applications.",
      technologies: ["Express.js", "Python", "AWS"]
    },
    {
      icon: Rocket,
      title: "Digital Consulting",
      description: "Strategic guidance on digital transformation, technology stack selection, and project planning.",
      technologies: ["Strategy", "Architecture", "Optimization"]
    }
  ];

  const getGradientClass = (index: number) => {
    const gradients = [
      "from-primary to-blue-600",
      "from-accent to-cyan-600", 
      "from-green-500 to-emerald-600",
      "from-purple-500 to-indigo-600",
      "from-orange-500 to-red-600",
      "from-teal-500 to-green-600"
    ];
    return gradients[index % gradients.length];
  };

  const getTechColors = (index: number) => {
    const colors = [
      ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
      ["bg-cyan-100 text-cyan-800", "bg-indigo-100 text-indigo-800", "bg-orange-100 text-orange-800"],
      ["bg-green-100 text-green-800", "bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800"],
      ["bg-purple-100 text-purple-800", "bg-red-100 text-red-800", "bg-blue-100 text-blue-800"],
      ["bg-orange-100 text-orange-800", "bg-gray-100 text-gray-800", "bg-blue-100 text-blue-800"],
      ["bg-teal-100 text-teal-800", "bg-indigo-100 text-indigo-800", "bg-green-100 text-green-800"]
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">Our Services</h2>
          <p className="text-xl text-slate-600">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const techColors = getTechColors(index);
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${getGradientClass(index)} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${techColors[techIndex]} px-3 py-1 rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
