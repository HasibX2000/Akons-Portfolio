import ProductCard from "../../components/ProductCard";

const themes = [
  {
    id: 1,
    title: "ShopMaster Pro",
    description: "Modern WooCommerce theme with advanced features and customization options",
    price: 59,
    image: "/images/placeholder.svg",
    features: ["Responsive Design", "WooCommerce Ready", "RTL Support", "SEO Optimized"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "theme" as const,
  },
  {
    id: 2,
    title: "BlogPress Elite",
    description: "Premium WordPress blog theme with multiple layouts and advanced typography",
    price: 49,
    image: "/images/placeholder.svg",
    features: ["Multiple Layouts", "Custom Typography", "Social Integration", "Speed Optimized"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "theme" as const,
  },
  {
    id: 3,
    title: "Portfolio Plus",
    description: "Showcase your work with this modern portfolio theme for creative professionals",
    price: 39,
    image: "/images/placeholder.svg",
    features: ["Project Showcase", "Gallery Support", "Contact Forms", "Custom Colors"],
    demoUrl: "#",
    downloadUrl: "#",
    type: "theme" as const,
  },
];

export default function ThemesPage() {
  return (
    <main className="min-h-screen pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">WordPress Themes</h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Premium WordPress themes crafted with attention to detail, performance, and user
            experience. Perfect for businesses, blogs, and creative professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <ProductCard key={theme.id} product={theme} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
