import ProductCard from "../../components/ProductCard";

const plugins = [
  {
    id: 1,
    title: "BD Payment Gateway",
    description:
      "Complete payment solution for WordPress and WooCommerce with all Bangladeshi payment gateways",
    price: 49,
    image: "/images/placeholder.svg",
    features: ["bKash", "Nagad", "Rocket", "Upay", "SSL Commerz", "WooCommerce Ready"],
    demoUrl: "#",
    downloadUrl: "/plugins/bdpayment",
    type: "plugin" as const,
  },
  {
    id: 2,
    title: "SEO Master",
    description: "Complete SEO solution with analytics and keyword tracking",
    price: 39,
    image: "/images/placeholder.svg",
    features: ["Keyword Analysis", "SEO Audit", "Analytics Integration", "Rank Tracking"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "plugin" as const,
  },
  {
    id: 3,
    title: "Security Shield",
    description: "Advanced security plugin with firewall and malware protection",
    price: 49,
    image: "/images/placeholder.svg",
    features: ["Firewall Protection", "Malware Scanner", "Login Security", "Real-time Monitoring"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "plugin" as const,
  },
  {
    id: 4,
    title: "Speed Optimizer",
    description: "Performance optimization plugin for faster loading times",
    price: 29,
    image: "/images/placeholder.svg",
    features: ["Cache System", "Image Optimization", "Code Minification", "Lazy Loading"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "plugin" as const,
  },
];

export default function PluginsPage() {
  return (
    <main className="min-h-screen pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">WordPress Plugins</h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Enhance your WordPress website with our powerful and easy-to-use plugins. Built with
            performance and user experience in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plugins.map((plugin, index) => (
            <ProductCard key={plugin.id} product={plugin} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
