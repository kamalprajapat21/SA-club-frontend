import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { Calendar, MapPin, IndianRupee } from "lucide-react";

export default function UpcomingEventHero() {
  const eventDate = new Date("2025-11-12T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const navigate = useNavigate();

  function getTimeLeft() {
    const diff = eventDate - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);



   const handleRegister = () => {
    navigate("/registration"); // ✅ this should match the route path of RegistrationPage
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-semibold text-slate-800 mb-4 tracking-tight">
          Abhyuthanam 2025
        </h1>
        <p className="text-xl text-slate-600 mb-6">
          A Youth Fest Celebrating Growth, Innovation, and Purpose
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-slate-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>12 November 2025</span>
          </div>
        <div className="flex items-center gap-2">
  <MapPin className="w-5 h-5 text-red-500" />
  <a
    href="https://www.google.com/maps/place/Your+Venue+Location"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    Venue
  </a>
</div>

        </div>

        <div className="flex items-center justify-center gap-2 mb-10 text-slate-700 text-lg">
          <IndianRupee className="w-5 h-5 text-slate-600" />
          <span>Registration Fee: ₹400 per person</span>
        </div>

        <div className="grid grid-cols-4 gap-3 text-slate-700 mb-10">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-semibold">
                {Object.values(timeLeft)[i]}
              </span>
              <span className="text-sm uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>

              <button
                  onClick={handleRegister}
                  className="rounded-full px-8 py-3 text-lg bg-slate-800 text-white hover:bg-slate-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                  Register Now
              </button>

        <p className="mt-6 text-sm text-slate-500">
          Organized by IYF Kota
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(100,100,255,0.08),transparent_60%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
}