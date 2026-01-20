import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Pause } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Wedding Ceremony Performance",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Corporate Gala Highlights",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "Concert Performance",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=450&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    title: "Private Event Showcase",
    thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=450&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const VideoCarousel = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlayPause = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="section-container bg-card/30">
      <div className="text-center mb-16">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
          Watch Us Perform
        </p>
        <h2 className="section-title">Performance Highlights</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Experience the magic of our live performances through these curated moments
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="group relative overflow-hidden rounded-lg bg-background">
                  <div className="aspect-video relative">
                    {playingId === video.id ? (
                      <video
                        src={video.videoUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        controls
                        onEnded={() => setPlayingId(null)}
                      />
                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/50">
                          <button
                            onClick={() => handlePlayPause(video.id)}
                            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
                            aria-label={`Play ${video.title}`}
                          >
                            <Play className="w-6 h-6 text-primary-foreground ml-1" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-foreground">{video.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary/30 hover:border-primary hover:bg-primary/10" />
          <CarouselNext className="border-primary/30 hover:border-primary hover:bg-primary/10" />
        </Carousel>
      </div>
    </section>
  );
};

export default VideoCarousel;
