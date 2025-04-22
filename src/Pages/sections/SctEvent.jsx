import React from "react";

const events = [
  {
    date: "Loading..",
    title: "Garba Night",
    link: "https://maps.google.com",
  },
  {
    date: "April 14th",
    title: "Alibaba Hooka Lounge ",
    link: "https://maps.google.com",
  },
  {
    date: "March 15th",
    title: "Biggest DFW Holi",
    link: "https://maps.google.com",
  },
];

export default function SctEvent() {
  return (
    <section className="w-full bg-black px-4 py-10 sm:py-12 flex justify-center">
      <div className="w-full max-w-6xl rounded-xl p-4 sm:p-6 md:p-8 shadow-xl backdrop-blur-md">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#333] rounded-lg p-4 sm:p-5 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-start sm:items-center space-x-3">
                <span className="bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                  {event.date}
                </span>
                <span className="text-white text-sm sm:text-base font-medium">{event.title}</span>
              </div>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline text-xs sm:text-sm mt-2 sm:mt-0 sm:ml-4"
              >
                Direction →
              </a>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
