import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar?: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </div>
      </Carousel>
    </div>
  );
}
