import { motion } from "framer-motion";

const ImageSlideReveal = ({ imageSrc, altText, date, title, description }) => {
  return (
    <section id="competition">
      <div className="relative w-full aspect-square overflow-hidden group  shadow-lg">
        <motion.div
          className="absolute inset-0 transition-transform rounded-md duration-300 ease-in-out group-hover:translate-x-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={imageSrc}
            className="object-cover w-full h-full rounded-lg"
            alt={altText}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-semibold font-inter uppercase tracking-widest text-pink-400">
              {date}
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">{title} </p>
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white p-4 flex rounded-md items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-semibold font-prompt text-sm md:text-lg">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ImageSlideRevealGrid = () => {
  const images = [
    {
      src: "/images/present.jpg",
      alt: "ROS",
      date: "2025",
      title: "ERR 404",
      description: "I wanna die pls helpppp!!",
    },
    {
      src: "/images/present2.jpg",
      alt: "WebApp com",
      date: "2025",
      title: "python to hell",
      description: "I love CPP So much",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-md md:text-2xl font-bold mb-4">My competition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <ImageSlideReveal
            key={index}
            imageSrc={image.src}
            altText={image.alt}
            date={image.date}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideRevealGrid;
