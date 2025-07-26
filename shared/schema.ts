import mongoose from "mongoose";
import { z } from "zod";

// Project Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  projectUrl: { type: String },
  githubUrl: { type: String },
  technologies: [{ type: String }],
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Contact Submission Schema
const contactSubmissionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  projectType: { type: String, required: true },
  budget: { type: String },
  timeline: { type: String },
  message: { type: String, required: true },
  newsletter: { type: Boolean, default: false },
  status: { type: String, default: "new" },
  createdAt: { type: Date, default: Date.now },
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, default: 5 },
  imageUrl: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Model creation function to avoid import order issues
export function getModels() {
  const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
  const ContactSubmission = mongoose.models.ContactSubmission || mongoose.model("ContactSubmission", contactSubmissionSchema);
  const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);
  
  return { Project, ContactSubmission, Testimonial };
}

// Zod Schemas for validation
export const insertProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  imageUrl: z.string().url("Must be a valid URL"),
  projectUrl: z.string().url("Must be a valid URL").optional(),
  githubUrl: z.string().url("Must be a valid URL").optional(),
  technologies: z.array(z.string()).min(1, "At least one technology is required"),
  featured: z.boolean().default(false),
});

export const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Must be a valid email"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  newsletter: z.boolean().default(false),
});

export const insertTestimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  content: z.string().min(1, "Content is required"),
  rating: z.number().min(1).max(5).default(5),
  imageUrl: z.string().url("Must be a valid URL").optional(),
  featured: z.boolean().default(false),
});

// TypeScript Types
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured: boolean;
  createdAt: Date;
};

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmissionType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
  newsletter: boolean;
  status: string;
  createdAt: Date;
};

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type TestimonialType = {
  _id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  imageUrl?: string;
  featured: boolean;
  createdAt: Date;
};
