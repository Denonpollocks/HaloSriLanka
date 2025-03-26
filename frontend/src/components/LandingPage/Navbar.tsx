import { useState, useEffect } from "react";

const navItems = [
  { name: "Highlights", id: "highlights" },
  { name: "Itinerary", id: "itinerary" },
  { name: "Dates & Prices", id: "dates-prices" },
  { name: "Accommodation", id: "accommodation" },
  { name: "Reviews", id: "reviews" },
  { name: "Extensions", id: "extensions" },
  { name: "Important Info", id: "important-info" },
];

export default function StickyNavbar() {
  const [activeTab, setActiveTab] = useState("itinerary");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top <= 100 && top + height > 100) {
            setActiveTab(item.id);
          }
        }
      });

      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`bg-white w-full border-b transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 shadow-md z-50" : "relative"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex justify-between items-center py-3 space-x-6 text-gray-700 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              <span
                className={`${
                  activeTab === item.id ? "text-teal-500" : "text-gray-700"
                }`}
              >
                {item.name}
              </span>
              {activeTab === item.id && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-teal-500 transition-all duration-300" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
