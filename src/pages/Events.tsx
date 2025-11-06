import { Navigation } from "@/components/Navigation";
import { TypewriterText } from "@/components/TypewriterText";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const events2025 = [
  {
    title: "Technologia 1",
    date: "25th September 2025",
    image: "https://www.w3schools.com/aws/images/awslogo.png",
    link: "/seminar",
  },
  {
    title: "Technologia 2",
    date: "15th October 2025",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg",
    link: "/seminar",
  },
  {
    title: "Technologia 3",
    date: "5th November 2025",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1200&fit=crop",
    link: "/seminar",
  },
  {
    title: "Technologia 4",
    date: "20th November 2025",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1200&fit=crop",
    link: "/seminar",
  },
];

const events2024 = [
  {
    title: "Technologia 5",
    date: "10th March 2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1200&fit=crop",
    link: "/seminar",
  },
  {
    title: "Technologia 6",
    date: "22nd April 2024",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=1200&fit=crop",
    link: "/seminar",
  },
  {
    title: "Technologia 7",
    date: "8th June 2024",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=1200&fit=crop",
    link: "/seminar",
  },
];

const Events = () => {
  useEffect(() => {
  const layer = document.createElement("div");
  layer.id = "splash-layer";
  layer.className = "fixed inset-0 z-[999] pointer-events-none overflow-hidden";
  document.body.appendChild(layer);

  const aurora = document.querySelector(".aurora-bg") as HTMLElement;

  // ✅ Apply transition ONCE
  if (aurora) {
    aurora.style.transition = "transform 0.08s ease-out";
    aurora.style.willChange = "transform"; // optimization
  }

  const handleParallax = (e) => {
    if (!aurora) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    aurora.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.15)`;
  };

  window.addEventListener("mousemove", handleParallax);

  let lastTime = 0;
  const throttleDelay = 50;

  const createSplash = (x, y) => {
    const splash = document.createElement("div");
    splash.className = "splash-advanced";

    const size = Math.max(window.innerWidth, window.innerHeight) * 0.12;
    splash.style.width = `${size}px`;
    splash.style.height = `${size}px`;
    splash.style.left = `${x}px`;
    splash.style.top = `${y + window.scrollY}px`;

    const inner = document.createElement("div");
    inner.className = "splash-inner";
    splash.appendChild(inner);

    const outer = document.createElement("div");
    outer.className = "splash-outer";
    splash.appendChild(outer);

    layer.appendChild(splash);
    setTimeout(() => splash.remove(), 1200);
  };

  const handleMove = (e) => {
    const now = Date.now();
    if (now - lastTime < throttleDelay) return;
    lastTime = now;
    createSplash(e.clientX, e.clientY);
  };

  window.addEventListener("mousemove", handleMove);

  return () => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mousemove", handleParallax);
    layer.remove();
  };
}, []);

  return (
    <div className="relative min-h-screen bg-black overflow-visible">
      <div className="absolute inset-0 z-0">
        <div className="aurora-bg"></div>
      </div>

      <div className="relative z-20">
        <Navigation />

        <section className="flex items-start justify-start px-8 sm:px-12 md:px-16 pt-32 pb-20 min-h-screen overflow-visible">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-8xl md:text-[14rem] lg:text-[18rem] font-extrabold mb-10 tracking-tighter leading-none">
              EVENTS
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-foreground/90 font-light">
              <TypewriterText
                text="Hands-on workshops, competitions, and seminars."
                speed={50}
              />
            </div>
          </div>
        </section>

        <section className="py-12 overflow-visible">
          <div className="mb-16 overflow-visible">
            <h2 className="text-6xl font-bold px-8 mb-8">2025 EVENTS</h2>

            {/* ✅ FIXED: No vertical clipping */}
            <div className="overflow-x-auto overflow-y-visible overflow-visible">
              <div className="flex gap-6 px-8 pb-4 overflow-visible">
                {events2025.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-visible">
            <h2 className="text-6xl font-bold px-8 mb-8">2024 EVENTS</h2>

            {/* ✅ FIXED: No vertical clipping */}
            <div className="overflow-x-auto overflow-y-visible overflow-visible">
              <div className="flex gap-6 px-8 pb-4 overflow-visible">
                {events2024.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Events;
