import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-40 bg-card">
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
          Electronics & Telecommunications Engineer
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
          Specializing in automation and cloud computing. Passionate about building innovative solutions that bridge hardware and software.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
