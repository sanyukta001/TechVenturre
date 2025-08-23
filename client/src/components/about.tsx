import { CheckCircle, Clock, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">About TechVenturre</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We're a passionate team of developers and designers dedicated to creating exceptional digital experiences. 
            What started as a freelancing venture is evolving into a comprehensive digital solutions company.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional team collaboration"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, 
                and create lasting value in an increasingly digital world.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Building TechVenturre into a leading digital solutions company that combines technical excellence 
                with creative innovation to solve complex business challenges.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 text-primary px-4 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="font-medium">Quality First</span>
              </div>
              <div className="flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-medium">On-Time Delivery</span>
              </div>
              <div className="flex items-center bg-purple-50 text-purple-600 px-4 py-2 rounded-lg">
                <Lightbulb className="w-4 h-4 mr-2" />
                <span className="font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
