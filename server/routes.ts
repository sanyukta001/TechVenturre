import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  // Get featured projects
  app.get("/api/projects/featured", async (req, res) => {
    try {
      const projects = await storage.getFeaturedProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured projects" });
    }
  });

  // Get testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getFeaturedTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // console.log("📩 Received contact form data:", req.body);
      const validatedData = insertContactSchema.parse(req.body);
      // console.log("✅ Validated data:", validatedData);
      const submission = await storage.createContactSubmission(validatedData);
      // console.log("📦 Submission returned from storage:", submission);

      // TODO: Send email notification using nodemailer with techventurre@gmail.com
      // This would require setting up email credentials in environment variables
      
      res.json({ 
        message: "Contact form submitted successfully", 
        id: submission._id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("❌ Failed to submit contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
