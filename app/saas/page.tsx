import ProductCard from "../../components/ProductCard";

const saasProducts = [
  {
    id: 1,
    title: "Email Marketing Pro",
    description: "Complete email marketing solution with automation and analytics",
    price: 29,
    image: "/images/placeholder.svg",
    features: ["Email Automation", "Analytics Dashboard", "Template Builder", "List Management"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "saas" as const,
  },
  {
    id: 2,
    title: "Invoice Manager",
    description: "Professional invoicing and billing software for businesses",
    price: 39,
    image: "/images/placeholder.svg",
    features: ["Invoice Generation", "Payment Tracking", "Client Management", "Financial Reports"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "saas" as const,
  },
  {
    id: 3,
    title: "Project Hub",
    description: "All-in-one project management and collaboration platform",
    price: 49,
    image: "/images/placeholder.svg",
    features: ["Task Management", "Team Chat", "File Sharing", "Time Tracking"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "saas" as const,
  },
];

export default function SaaSPage() {
  return (
    <main className="min-h-screen pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">SaaS Products</h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Cloud-based software solutions designed to streamline your business operations. Powerful
            features, easy integration, and scalable architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saasProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
