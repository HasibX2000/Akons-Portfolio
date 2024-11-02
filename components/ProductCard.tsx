"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  demoUrl: string;
  downloadUrl: string;
  type?: "theme" | "plugin" | "saas";
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const isInternalLink = product.downloadUrl.startsWith("/");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-light-paper dark:bg-dark-paper rounded-xl overflow-hidden border border-light-border dark:border-dark-border group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-blue-500 hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
          <p className="text-text-light-secondary/70 dark:text-text-dark-secondary/70 mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-sm bg-light-border/40 dark:bg-dark-border/40 text-text-light-secondary/70 dark:text-text-dark-secondary/70 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-light-border/30 dark:border-dark-border/30 mt-auto">
          <span className="font-bold">{product.price === 0 ? "Free" : `$${product.price}`}</span>
          {isInternalLink ? (
            <Link
              href={product.downloadUrl}
              className="px-6 py-2 text-sm bg-blue-500/80 hover:bg-blue-500 text-white/80 hover:text-white/95 rounded-lg transition-all"
            >
              View Details
            </Link>
          ) : (
            <a
              href={product.downloadUrl}
              className="px-6 py-2 text-sm bg-blue-500/80 hover:bg-blue-500 text-white/80 hover:text-white/95 rounded-lg transition-all"
            >
              View Details
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
