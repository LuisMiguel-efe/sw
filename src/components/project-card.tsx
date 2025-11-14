import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image?: {
    imageUrl: string;
    description: string;
    imageHint: string;
  };
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {project.image && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            data-ai-hint={project.image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link href={project.link}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
