import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="hero" className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover -z-10 brightness-50"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="container z-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white">
          Luis Miguel Ortiz Muñoz
        </h1>
        <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl mt-6">
          Software Developer and Automation Engineer
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#contact">
              Ponte en Contacto <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
