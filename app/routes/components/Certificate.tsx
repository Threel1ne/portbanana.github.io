export default function Cer() {
  const cer = [
    {
      src: "/images/Certificate/wrg2023.jpg",
      alt: "WRG2023",
      year: "2023",
      title: "WRG 2023",
    },
    {
      src: "/images/Certificate/wrg2023.jpg",
      alt: "WRG2023",
      year: "2023",
      title: "WRG 2023",
    },
  ];
  return (
    <>
      <section id="certificate">
        <div className="container mx-auto p-4">
          <h1 className="">Certificate</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full aspect-movie">
              {cer.map((certi, index) => (
                <img key={index} src={certi.src} alt={certi.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
