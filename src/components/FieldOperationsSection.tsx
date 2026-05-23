import img1 from "@/assets/field-ops-1.jpeg";
import img2 from "@/assets/field-ops-2.jpeg";
import img3 from "@/assets/field-ops-3.jpeg";
import img4 from "@/assets/field-ops-4.jpeg";

const images = [
  { src: img1, alt: "Engineering team coordinating on-site transmission line survey" },
  { src: img2, alt: "Transmission tower inspection with surveying equipment" },
  { src: img3, alt: "Site evaluation and stakeholder coordination at tower base" },
  { src: img4, alt: "Technical feasibility discussion during field assessment" },
];

const FieldOperationsSection = () => {
  return (
    <section id="field-operations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Field Operations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our engineering and inspection team conducting detailed on-site transmission line surveys,
            utility infrastructure assessment, and technical feasibility analysis. These field operations
            include tower inspections, site evaluation, route assessment, and coordination with project
            stakeholders to ensure safe, efficient, and reliable power infrastructure development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-shadow"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldOperationsSection;
