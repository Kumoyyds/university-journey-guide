
import { useEffect } from "react";
import { GraduationCap, MessageSquare, StarIcon, Users, Clock, Filter, School, MapPin } from "lucide-react";

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
    hourlyRate: 30,
    location: "California, USA",
    availability: ["Morning", "Evening"],
    specializations: ["Computer Science", "Data Science", "Application Essays"],
    languages: ["English", "Mandarin"],
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
    hourlyRate: 25,
    location: "Massachusetts, USA",
    availability: ["Afternoon", "Evening"],
    specializations: ["Engineering", "Mathematics", "Interview Prep"],
    languages: ["English", "Spanish"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
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

      {/* Filter and Mentors Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Filters Sidebar */}
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-card rounded-xl p-6 shadow-sm sticky top-4">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Filters</h3>
                </div>
                
                {/* University Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <School className="w-4 h-4" />
                    University
                  </h4>
                  <input
                    type="text"
                    placeholder="Search universities..."
                    className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Time Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Availability
                  </h4>
                  <div className="space-y-2">
                    {["Morning", "Afternoon", "Evening"].map((time) => (
                      <label key={time} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                        <span className="text-sm">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </h4>
                  <select className="w-full px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option value="">All Locations</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mentors.map((mentor) => (
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
                          <p className="text-sm text-secondary">{mentor.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end mb-1">
                            <StarIcon className="w-5 h-5 text-yellow-400" />
                            <span className="ml-1 font-medium">{mentor.rating}</span>
                            <span className="text-secondary text-sm ml-1">({mentor.reviews})</span>
                          </div>
                          <p className="text-lg font-semibold text-primary">${mentor.hourlyRate}/hr</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-secondary">
                          <span className="font-medium">Major:</span> {mentor.major}
                        </p>
                        <p className="text-secondary">
                          <span className="font-medium">Experience:</span> {mentor.experience}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {mentor.specializations.map((spec) => (
                            <span
                              key={spec}
                              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 flex gap-2">
                        <button className="flex-1 bg-primary text-white font-medium py-2 rounded-lg hover:bg-primary/90 transition-colors">
                          Book Session
                        </button>
                        <button className="flex-1 bg-primary/10 text-primary font-medium py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
