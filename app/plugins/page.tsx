import ProductCard from "../../components/ProductCard";

const plugins = [
  {
    id: 1,
    title: "BD Payment Gateway",
    description:
      "Complete payment solution for WordPress and WooCommerce with all Bangladeshi payment gateways",
    price: 49,
    image: "/images/bdpayment/BDPayment.png",
    features: ["bKash", "Nagad", "Rocket", "Upay", "SSL Commerz", "WooCommerce Ready"],
    demoUrl: "#",
    downloadUrl: "/plugins/bdpayment",
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
