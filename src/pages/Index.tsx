
import { useEffect } from "react";
import { GraduationCap, MessageSquare, StarIcon, Users } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    university: "Stanford University",
    major: "Computer Science",
    year: "Senior",
    experience: "Former intern at Google, Research Assistant",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "James Wilson",
    university: "MIT",
    major: "Electrical Engineering",
    year: "Junior",
    experience: "Teaching Assistant, Robotics Club President",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  // Add more mentors as needed
];

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center reveal opacity-0 translate-y-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Connect with University Insiders
          </h1>
          <p className="text-secondary-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Get authentic insights from current students at your dream university. Make informed decisions about your academic future.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            Find Your Mentor
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: "Active Mentors", value: "500+" },
              { icon: GraduationCap, label: "Universities", value: "100+" },
              { icon: MessageSquare, label: "Successful Connections", value: "2000+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="reveal opacity-0 translate-y-10 flex flex-col items-center p-6 bg-card rounded-xl shadow-sm"
              >
                <stat.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12 reveal opacity-0 translate-y-10">
            Meet Our Featured Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={mentor.id}
                className="reveal opacity-0 translate-y-10 group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-primary font-medium">{mentor.university}</p>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 font-medium">{mentor.rating}</span>
                      <span className="text-secondary text-sm ml-1">({mentor.reviews})</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-secondary">
                      <span className="font-medium">Major:</span> {mentor.major}
                    </p>
                    <p className="text-secondary">
                      <span className="font-medium">Year:</span> {mentor.year}
                    </p>
                    <p className="text-secondary">
                      <span className="font-medium">Experience:</span> {mentor.experience}
                    </p>
                  </div>
                  <button className="mt-6 w-full bg-primary/10 text-primary font-medium py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
