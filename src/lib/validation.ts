import { z } from 'zod';

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z.string()
    .trim()
    .max(200, "Company name must be less than 200 characters")
    .optional()
    .or(z.literal('')),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
});

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
});

// Mentor signup validation
export const mentorSignupSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .regex(/^[\+]?[1-9]?[\d\s\-\(\)]{10,15}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal('')),
  company: z.string()
    .trim()
    .max(200, "Company name must be less than 200 characters")
    .optional()
    .or(z.literal('')),
  industry: z.string()
    .trim()
    .max(100, "Industry must be less than 100 characters")
    .optional()
    .or(z.literal('')),
  experience: z.string()
    .trim()
    .max(50, "Experience must be less than 50 characters")
    .optional()
    .or(z.literal('')),
  expertise: z.string()
    .trim()
    .max(1000, "Expertise must be less than 1000 characters")
    .optional()
    .or(z.literal(''))
});

// Early access form validation
export const earlyAccessSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  userType: z.string()
    .min(1, "Please select a user type"),
  organization: z.string()
    .trim()
    .max(200, "Organization name must be less than 200 characters")
    .optional()
    .or(z.literal(''))
});

// Demo request form validation
export const demoRequestSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  organization: z.string()
    .trim()
    .max(200, "Organization name must be less than 200 characters")
    .optional()
    .or(z.literal('')),
  role: z.string()
    .min(1, "Please select a role"),
  numberOfStudents: z.string()
    .min(1, "Please select number of students")
});

// Partnership inquiry validation
export const partnershipInquirySchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  organization: z.string()
    .trim()
    .max(200, "Organization name must be less than 200 characters")
    .optional()
    .or(z.literal('')),
  partnershipType: z.string()
    .min(1, "Please select a partnership type"),
  details: z.string()
    .trim()
    .min(10, "Details must be at least 10 characters")
    .max(2000, "Details must be less than 2000 characters")
    .optional()
    .or(z.literal(''))
});

// White paper form validation
export const whitePaperSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  organization: z.string()
    .trim()
    .max(200, "Organization name must be less than 200 characters")
});
