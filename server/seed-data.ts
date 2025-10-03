// import { connectDB } from "./db";
import { getModels } from "@shared/schema";

const sampleProjects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory management, payment processing, and analytics dashboard.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    projectUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/techventurre/ecommerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication, real-time notifications, and comprehensive financial management tools.",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    projectUrl: "https://play.google.com/store/apps/details?id=com.example.banking",
    technologies: ["React Native", "TypeScript", "Firebase", "Biometric API"],
    featured: true,
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive healthcare management platform for clinics and hospitals with appointment scheduling, patient records, and telemedicine features.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    projectUrl: "https://healthcare-demo.com",
    githubUrl: "https://github.com/techventurre/healthcare-system",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "AWS"],
    featured: false,
  },
  {
    title: "Real Estate Marketplace",
    description: "A modern real estate platform connecting buyers, sellers, and agents with advanced search filters, virtual tours, and integrated CRM.",
    category: "ecommerce",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    projectUrl: "https://realestate-demo.com",
    technologies: ["Next.js", "Prisma", "MySQL", "Cloudinary", "Mapbox"],
    featured: true,
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers to track performance across multiple platforms with automated reporting and insights.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    githubUrl: "https://github.com/techventurre/social-dashboard",
    technologies: ["React", "Chart.js", "Express.js", "Redis", "Social APIs"],
    featured: false,
  },
  {
    title: "Food Delivery Mobile App",
    description: "A complete food delivery solution with real-time tracking, payment integration, and restaurant management system.",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    projectUrl: "https://apps.apple.com/app/food-delivery/id123456789",
    technologies: ["Flutter", "Dart", "Google Maps", "Payment Gateways"],
    featured: false,
  }
];

const sampleTestimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechStart Inc.",
    content: "TechVenturre delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise helped us launch successfully and scale our business rapidly.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&face",
    featured: true,
  },
  {
    name: "Michael Chen",
    title: "CTO",
    company: "FinanceFlow",
    content: "The mobile banking app they developed for us is secure, user-friendly, and has received excellent feedback from our customers. Professional team with great communication throughout the project.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&face",
    featured: true,
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Medical Director",
    company: "HealthCare Plus",
    content: "TechVenturre transformed our clinic operations with their healthcare management system. The platform is intuitive, efficient, and has significantly improved our patient care workflow.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&face",
    featured: true,
  },
  {
    name: "David Thompson",
    title: "Founder",
    company: "PropTech Solutions",
    content: "Our real estate marketplace built by TechVenturre has revolutionized how we connect with clients. The platform is robust, scalable, and beautifully designed.",
    rating: 4,
    featured: false,
  },
  {
    name: "Lisa Wang",
    title: "Marketing Director",
    company: "Social Media Pro",
    content: "The analytics dashboard they created has become an essential tool for our team. It provides clear insights and has improved our decision-making process significantly.",
    rating: 5,
    featured: false,
  }
];

export async function seedDatabase() {
  try {
    // await connectDB();
    const { Project, Testimonial } = getModels();
    
    // Clear existing data
    await Project.deleteMany({});
    await Testimonial.deleteMany({});
    
    // Insert sample projects
    await Project.insertMany(sampleProjects);
    console.log("✅ Sample projects added successfully");
    
    // Insert sample testimonials
    await Testimonial.insertMany(sampleTestimonials);
    console.log("✅ Sample testimonials added successfully");
    
    console.log("🎉 Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}

// Run the seed function
seedDatabase().then(() => process.exit(0));