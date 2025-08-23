import { Linkedin, Twitter, Github, Dribbble, Mail, Clock, Send } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TV</span>
              </div>
              <span className="text-xl font-bold">TechVenturre</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences. Your trusted partner for web development, mobile apps, and digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("services")} className="text-slate-300 hover:text-white transition-colors text-left">Web Development</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-slate-300 hover:text-white transition-colors text-left">Mobile Apps</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-slate-300 hover:text-white transition-colors text-left">UI/UX Design</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-slate-300 hover:text-white transition-colors text-left">E-commerce</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-slate-300 hover:text-white transition-colors text-left">Digital Consulting</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("about")} className="text-slate-300 hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection("projects")} className="text-slate-300 hover:text-white transition-colors text-left">Our Work</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-slate-300 hover:text-white transition-colors text-left">Contact</button></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-accent w-4 h-4" />
                <a href="mailto:techventurre@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  techventurre@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-accent w-4 h-4" />
                <span className="text-slate-300">Mon-Fri: 9AM-6PM IST</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Subscribe to Updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate-400"
                />
                <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 TechVenturre. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
