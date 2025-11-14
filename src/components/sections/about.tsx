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
                  I am an Electronics and Telecommunications Engineer with a profound interest in the intersection of hardware and software. My academic journey has equipped me with a strong foundation in automation, cloud computing, and embedded systems.
                </p>
                <p className="text-lg text-muted-foreground">
                  I thrive on solving complex problems and am constantly exploring new technologies to create efficient and scalable solutions. From designing IoT systems on AWS to programming robotic arms with ROS, I enjoy turning theoretical concepts into tangible projects.
                </p>
                <p className="text-lg text-muted-foreground">
                  My goal is to leverage my skills in a challenging role where I can contribute to cutting-edge technological advancements and continue to grow as an engineer.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
