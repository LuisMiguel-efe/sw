import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/luismiguelplus', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
];

const getPlaceholderImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id);
}

export const projects = [
  {
    id: '1',
    title: 'Virtual Assistant (PIET-Bot) with Cloud Deployment',
    description: 'Designed and deployed a Telegram bot for student support, using a microservices architecture with FastAPI and Python. Implemented a web scraping system for extracting and caching information. Integrated an LLM for natural language processing and configured a CI/CD workflow on Render.',
    techStack: ['FastAPI', 'Python', 'Web Scraping', 'Hugging Face', 'Docker', 'Render'],
    link: '#',
    image: getPlaceholderImage('project1'),
  },
  {
    id: '2',
    title: 'Smart Assistant for Academic Triage',
    description: 'Design and implementation of an automation system (Google Apps Script) for the triage and classification of emails, using the Google Gemini (LLM) API and the Gmail API. Achieved automation of over 90% of manual classification.',
    techStack: ['Google Apps Script', 'Gemini API', 'Gmail API', 'Automation'],
    link: '#',
    image: getPlaceholderImage('project2'),
  },
  {
    id: '3',
    title: 'SDN Web Application for Simulation and Management',
    description: 'Developed a web application for network visualization and real-time configuration of OpenFlow rules. It featured a frontend in HTML5/CSS3 and a Python backend. Reduced SDN configuration time by 40%.',
    techStack: ['HTML5/CSS3', 'Python', 'OpenFlow', 'SDN', 'Ryu'],
    link: '#',
    image: getPlaceholderImage('project3'),
  },
  {
    id: '4',
    title: 'Biometric Access System',
    description: 'Implemented a secure biometric access system with a web platform. The system used REST APIs (FastAPI) and managed up to 100 users, reducing validation time by 45%.',
    techStack: ['FastAPI', 'Python', 'REST API', 'Full Stack', 'Machine Learning'],
    link: '#',
    image: getPlaceholderImage('project4'),
  },
];

export const skills = [
  { name: 'Python/FastAPI', proficiency: 95 },
  { name: 'Node.js/JavaScript', proficiency: 85 },
  { name: 'AI & Automation', proficiency: 90 },
  { name: 'Cloud & DevOps', proficiency: 88 },
  { name: 'Cybersecurity', proficiency: 80 },
  { name: 'Databases (SQL/NoSQL)', proficiency: 85 },
];
