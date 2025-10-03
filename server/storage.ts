import { 
  getModels,
  type ProjectType, 
  type InsertProject,
  type ContactSubmissionType,
  type InsertContact,
  type TestimonialType,
  type InsertTestimonial
} from "@shared/schema";
// import { connectDB } from "./db";

export interface IStorage {
  // Projects
  getProjects(): Promise<ProjectType[]>;
  getFeaturedProjects(): Promise<ProjectType[]>;
  getProjectById(id: string): Promise<ProjectType | undefined>;
  createProject(project: InsertProject): Promise<ProjectType>;
  
  // Contact Submissions
  getContactSubmissions(): Promise<ContactSubmissionType[]>;
  createContactSubmission(submission: InsertContact): Promise<ContactSubmissionType>;
  
  // Testimonials
  getTestimonials(): Promise<TestimonialType[]>;
  getFeaturedTestimonials(): Promise<TestimonialType[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<TestimonialType>;
}

export class MongoStorage implements IStorage {
  constructor() {
    // connectDB();
  }

  // Projects
  async getProjects(): Promise<ProjectType[]> {
    const { Project } = getModels();
    const projects = await Project.find().sort({ createdAt: -1 }).lean();
    return projects.map(this.formatProject);
  }

  async getFeaturedProjects(): Promise<ProjectType[]> {
    const { Project } = getModels();
    const projects = await Project.find({ featured: true }).sort({ createdAt: -1 }).lean();
    return projects.map(this.formatProject);
  }

  async getProjectById(id: string): Promise<ProjectType | undefined> {
    const { Project } = getModels();
    const project = await Project.findById(id).lean();
    return project ? this.formatProject(project) : undefined;
  }

  async createProject(insertProject: InsertProject): Promise<ProjectType> {
    const { Project } = getModels();
    const project = new Project(insertProject);
    const savedProject = await project.save();
    return this.formatProject(savedProject.toObject());
  }

  // Contact Submissions
  async getContactSubmissions(): Promise<ContactSubmissionType[]> {
    const { ContactSubmission } = getModels();
    const submissions = await ContactSubmission.find().sort({ createdAt: -1 }).lean();
    return submissions.map(this.formatContactSubmission);
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmissionType> {
    const { ContactSubmission } = getModels();
    // console.log("🧾 ContactSubmission schema:", ContactSubmission.schema.obj);

    // console.log("📥 Inserting contact into DB:", insertContact);

  try {
    const submission = new ContactSubmission(insertContact);
    const savedSubmission = await submission.save();

    // console.log("✅ Saved contact submission:", savedSubmission);

    return this.formatContactSubmission(savedSubmission.toObject());
  } catch (err) {
    console.error("❌ Error saving contact submission:", err);
    throw err;
  }

  }

  // Testimonials
  async getTestimonials(): Promise<TestimonialType[]> {
    const { Testimonial } = getModels();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }).lean();
    return testimonials.map(this.formatTestimonial);
  }

  async getFeaturedTestimonials(): Promise<TestimonialType[]> {
    const { Testimonial } = getModels();
    const testimonials = await Testimonial.find({ featured: true }).sort({ createdAt: -1 }).lean();
    return testimonials.map(this.formatTestimonial);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<TestimonialType> {
    const { Testimonial } = getModels();
    const testimonial = new Testimonial(insertTestimonial);
    const savedTestimonial = await testimonial.save();
    return this.formatTestimonial(savedTestimonial.toObject());
  }

  // Helper methods to format MongoDB documents
  private formatProject(project: any): ProjectType {
    return {
      _id: project._id.toString(),
      title: project.title,
      description: project.description,
      category: project.category,
      imageUrl: project.imageUrl,
      projectUrl: project.projectUrl,
      githubUrl: project.githubUrl,
      technologies: project.technologies,
      featured: project.featured,
      createdAt: project.createdAt,
    };
  }

  private formatContactSubmission(submission: any): ContactSubmissionType {
    return {
      _id: submission._id.toString(),
      firstName: submission.firstName,
      lastName: submission.lastName,
      email: submission.email,
      company: submission.company,
      projectType: submission.projectType,
      budget: submission.budget,
      timeline: submission.timeline,
      message: submission.message,
      newsletter: submission.newsletter,
      status: submission.status,
      createdAt: submission.createdAt,
    };
  }

  private formatTestimonial(testimonial: any): TestimonialType {
    return {
      _id: testimonial._id.toString(),
      name: testimonial.name,
      title: testimonial.title,
      company: testimonial.company,
      content: testimonial.content,
      rating: testimonial.rating,
      imageUrl: testimonial.imageUrl,
      featured: testimonial.featured,
      createdAt: testimonial.createdAt,
    };
  }
}

export const storage = new MongoStorage();
