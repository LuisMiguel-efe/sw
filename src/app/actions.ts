'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;
  const recipientEmail = 'luismiguelefe@gmail.com';

  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer
    // to recipientEmail.
    console.log(`New message from: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log(`Intended recipient: ${recipientEmail}`);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        message: `Thank you, ${name}! Your message has been sent successfully.`,
        success: true,
        errors: {},
     };
  } catch (error) {
    return {
        message: 'An unexpected error occurred. Please try again later.',
        success: false,
        errors: {},
    }
  }
}
