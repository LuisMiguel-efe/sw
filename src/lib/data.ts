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
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
];

const getPlaceholderImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id);
}

export const projects = [
  {
    id: '1',
    title: 'IoT Home Automation System',
    description: 'A comprehensive IoT solution for smart homes, enabling remote control of lighting, temperature, and security systems via a mobile app. Developed using Raspberry Pi, Python, and AWS IoT Core.',
    techStack: ['Python', 'Raspberry Pi', 'AWS IoT', 'MQTT', 'React Native'],
    link: '#',
    image: getPlaceholderImage('project1'),
  },
  {
    id: '2',
    title: 'Cloud-Based Network Monitoring',
    description: 'A scalable network monitoring tool built on AWS. It uses Lambda functions to process real-time network traffic data and visualizes metrics on a Grafana dashboard.',
    techStack: ['AWS Lambda', 'Grafana', 'Python', 'DynamoDB', 'Cloud'],
    link: '#',
    image: getPlaceholderImage('project2'),
  },
  {
    id: '3',
    title: '5G Signal Analysis Tool',
    description: 'A MATLAB-based application for analyzing 5G signal propagation and quality. The project involved simulating various environmental conditions to test signal robustness.',
    techStack: ['MATLAB', '5G NR', 'Signal Processing', 'Telecommunications'],
    link: '#',
    image: getPlaceholderImage('project3'),
  },
  {
    id: '4',
    title: 'Automated Robotic Arm Control',
    description: 'Designed and programmed a 6-axis robotic arm for pick-and-place operations. The control system was implemented using C++ and the Robot Operating System (ROS).',
    techStack: ['C++', 'ROS', 'Automation', 'Robotics', 'Computer Vision'],
    link: '#',
    image: getPlaceholderImage('project4'),
  },
];

export const skills = [
  { name: 'Automation', proficiency: 90, description: 'Design and implementation of automated systems using PLC, ROS, and scripting.' },
  { name: 'Cloud Computing', proficiency: 85, description: 'Experience with AWS services including EC2, S3, Lambda, and IoT Core for scalable applications.' },
  { name: 'Python', proficiency: 95, description: 'Advanced proficiency for backend development, scripting, and data analysis.' },
  { name: 'C/C++', proficiency: 80, description: 'Solid skills in embedded systems programming and performance-critical applications.' },
  { name: 'Telecommunications', proficiency: 88, description: 'Deep understanding of 4G/5G protocols, signal processing, and network architecture.' },
  { name: 'Embedded Systems', proficiency: 92, description: 'Expertise in microcontroller programming (ARM, AVR) and hardware interfacing.' },
];
