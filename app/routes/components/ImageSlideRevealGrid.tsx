import { motion } from "framer-motion";

const ImageSlideReveal = ({ imageSrc, altText, description }) => {
  return (
    <section id="competition">
      <div className="relative w-full aspect-video overflow-hidden group rounded-lg shadow-lg">
        <motion.div
          className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:translate-x-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={imageSrc}
            className="object-cover w-full h-full"
            alt={altText}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-semibold text-sm md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
};

const ImageSlideRevealGrid = () => {
  const images = [
    {
      src: "/images/work3.jpg",
      alt: "ROS",
      description: "Teaching ROS to my friend",
    },
    {
      src: "/images/work4.jpeg",
      alt: "WebApp com",
      description: "Got 2nd place on webAppcompetition",
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
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideRevealGrid;
