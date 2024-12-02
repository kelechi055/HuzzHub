import React from "react";

const classNames = {
  container: "max-w-7xl mx-auto",
  header: "text-center",
  grid: "grid max-w-md mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none",
  card: "bg-gray-100 rounded-2xl p-8",
  footer:
    "flex items-center justify-between pt-5 mt-5 border-t border-gray-200",
};

const testimonials = [
  {
    quote: '"HuzzHub has significantly improved my rizz. Im more charismatic now."',
    name: "Blig Blorpington III",
    role: "Chill Alien Guy",
    logoSrc: "favicon.ico",
    avatarSrc: "chillguy1.png",
  },
  {
    quote:
      '"After trying to get on the winter arc, it didnt work. I joined HuzzHub. Idk how they did it but I have a sigma grindset now."',
    name: "Ligma Jones",
    role: "Ex-Winter Archer",
    logoSrc: "favicon.ico",
    avatarSrc: "chillguy2.png",
  },
  {
    quote: '"Lets just say im a lot more chill now, im a huzz magnet!"',
    name: "Jenny Rizzo",
    role: "Just a chill gal :)",
    logoSrc: "favicon.ico",
    avatarSrc: "chillguy4.png",
  },
  {
    quote: '"Hawktuah is a thing of the past, HuzzHub is the future. I talked tuah chill guy and my life changed."',
    name: "Spitton Datt Faang IV ",
    role: "Ex-Rizz Consultant @ RizzCo Podcast",
    logoSrc: "favicon.ico",
    avatarSrc: "chillguy3.png",
    audio: "brainrot1.mp3",
  },
  {
    quote:
      '"Salsa y picante! HuzzHub? Best decision of my life. Now, I’m the King of Rizz. ¡Nos fuimos! Wazaaahhhhhhh"',
    name: "Don Pollo ",
    role: "King of Ohio",
    logoSrc: "favicon.ico",
    avatarSrc: "donpollo.jpg",
    audio: "/donpollo.mp3",
  },
];

function Testimonial1() {
  const playAudio = (audioSrc) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className={`px-4 sm:px-6 lg:px-8 ${classNames.container}`}>
        <div className={`max-w-3xl mx-auto ${classNames.header}`}>
          <h2 className="text-xl font-semibold tracking-tight text-white-900 sm:text-4xl lg:text-5xl">
            Don&apos;t just take our words for it. Over 100+ chill guys and gals trust us.
          </h2>
        </div>

        <div className={`grid-cols-1 gap-5 ${classNames.grid}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${classNames.card} ${
                index % 2 === 0 ? "xl:-rotate-2" : "xl:rotate-2"
              } group relative transition-all duration-300 ease-out transform hover:scale-105 hover:rotate-0 hover:shadow-2xl`}
              onMouseEnter={() => {
                if (testimonial.audio) {
                  playAudio(testimonial.audio);
                }
              }}
            >
              <blockquote>
                <p className="text-xl font-medium leading-9 text-gray-900">
                  {testimonial.quote}
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-gray-900 group-hover:text-[#C0A252] transition-colors duration-300">
                {testimonial.name}
              </p>
              <p className="mt-1 text-base font-normal text-gray-600">
                {testimonial.role}
              </p>
              <div className={`${classNames.footer} group-hover:opacity-80`}>
                <img
                  className="w-auto h-7"
                  src={testimonial.logoSrc}
                  alt={`${testimonial.name} logo`}
                />
                <img
                  className="object-cover w-10 h-10 rounded-full group-hover:scale-110 transition-transform duration-300"
                  src={testimonial.avatarSrc}
                  alt={`${testimonial.name} avatar`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial1;
