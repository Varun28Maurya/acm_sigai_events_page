import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Seminar = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      {/* Hero Section with Gradient */}
      <div className="gradient-blue-glow-left pt-24 pb-16 px-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Seminar on Cloud Computing and Microservices
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
            An exploration of modern cloud architectures
          </p>
        </div>
      </div>

      {/* Content Section with Floating Image */}
      <main className="flex-1 px-16 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">Event Overview</h2>
              <p className="text-foreground/80 leading-relaxed">
                Join us for an in-depth exploration of modern cloud architectures and microservices patterns. 
                This comprehensive seminar brings together industry experts and thought leaders to discuss the latest trends in cloud computing and distributed systems.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Key Topics Discussed</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Microservices architecture patterns and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Container orchestration with Kubernetes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Serverless computing and cloud-native development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>API gateway strategies and service mesh implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Monitoring, logging, and observability in distributed systems</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Who Should Attend</h2>
              <p className="text-foreground/80 leading-relaxed">
                This seminar is ideal for software developers, system architects, DevOps engineers, 
                and technology enthusiasts who want to stay ahead in the rapidly evolving world of cloud computing.
              </p>
            </section>
          </div>

          {/* Right Column - Floating Image */}
          <div className="lg:sticky lg:top-24">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:-translate-y-24"
              style={{ boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop"
                alt="Seminar audience"
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Seminar;
