import { z } from "zod";

export const leadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  workEmail: z
    .string()
    .email("Please enter a valid work email")
    .refine(
      (email) => !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"].some((d) => email.endsWith(d)),
      { message: "Please use your work email address" }
    ),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-()]{8,15}$/, "Please enter a valid phone number"),
  teamSize: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"], {
    errorMap: () => ({ message: "Please select your team size" }),
  }),
  message: z
    .string()
    .max(500, "Message must be under 500 characters")
    .optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type AdminLoginData = z.infer<typeof adminLoginSchema>;
