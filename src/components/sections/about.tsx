import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline">
          About Me
        </h2>
        <Card className="mt-12 overflow-hidden">
          <div className="grid md:grid-cols-3 items-center">
            <div className="md:col-span-1">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={headshot.imageHint}
                />
              )}
            </div>
            <div className="md:col-span-2">
              <CardContent className="p-8 md:p-12 space-y-4">
                <p className="text-lg text-muted-foreground">
                  Software Developer and Automation Engineer, soon to graduate with a degree in Electronic and Telecommunications Engineering, focused on backend development, process automation, and cloud deployment.
                </p>
                <p className="text-lg text-muted-foreground">
                  Proven experience in creating REST APIs, integrating LLMs, and optimizing workflows, achieving automation rates of over 90%. Proficient in Python (FastAPI), Node.js, Google Apps Script, Docker, and Render.
                </p>
                <p className="text-lg text-muted-foreground">
                  Solid experience in cybersecurity (firewalls, ACLs) and networking (SDN). Recognized for leadership, critical thinking, and adaptability, with an interest in software development, automation, and cloud computing.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
