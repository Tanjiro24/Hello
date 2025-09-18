import React, { useState } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  X,
} from "lucide-react";
import Card from "../components/Card";

// Import product images
import P1 from "../assets/Product images/p1.jpg";
import P2 from "../assets/Product images/p2.jpg";
import P3 from "../assets/Product images/p3.jpg";
import P4 from "../assets/Product images/p4.jpg";
import P5 from "../assets/Product images/p5.jpg";
import P6 from "../assets/Product images/p6.jpg";
import P7 from "../assets/Product images/p7.jpg";
import P8 from "../assets/Product images/p8.jpg";
import P9 from "../assets/Product images/p9.jpg";
import P10 from "../assets/Product images/p10.jpg";

const Products: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "skincare", name: "Skincare" },
    { id: "supplements", name: "Supplements" },
    { id: "treatments", name: "Treatments" },
  ];

  const products = [
    {
      id: 1,
      name: "CosmoQ AC Acne Sunscreen Gel",
      description:
        "CosmoQ AC is Acne Sunscreen Gel protecting from harmful UVA & UVB rays.",
      price: "$89.99",
      image: P1,
      hoverImage: P4,
      category: "skincare",
      badge: "HOT SELLER",
      badgeColor: "bg-orange-500",
      rating: 4.8,
      reviews: 245,
      benefits: [
        "Provides broad spectrum protection",
        "Non-comedogenic",
        "Fragrance free",
      ],
      ingredients: ["Zinc Oxide", "Niacinamide", "Aloe Vera"],
      usage:
        "Apply evenly 15 minutes before sun exposure. Reapply every 2 hours.",
      size: "60g tube",
    },
    {
      id: 2,
      name: "CosmoQ OC Acne Moisturing Gel",
      description: "CosmoQ OC is Acne Moisturing Gel providing Oil Control.",
      price: "$34.99",
      image: P2,
      hoverImage: P3,
      category: "skincare",
      badge: "NEW",
      badgeColor: "bg-blue-600",
      rating: 4.9,
      reviews: 187,
      benefits: [
        "Regulates sebum production",
        "Non-comedogenic",
        "Fragrance free",
      ],
      ingredients: ["Zinc Oxide", "Niacinamide", "Aloe Vera"],
      usage: "Apply evenly after cleansing. Use morning and evening.",
      size: "60g tube",
    },
    {
      id: 3,
      name: "CosmoQ Brightening Serum",
      description: "CosmoQ Brightening Serum for Brighter and lighter skin.",
      price: "$45.99",
      image: P5,
      hoverImage: P6,
      category: "skincare",
      rating: 4.6,
      reviews: 198,
      benefits: [
        "Lightens skin tone",
        "Reduces dark spots",
        "Improves texture",
      ],
      ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid"],
      usage: "Apply a few drops on cleansed face before moisturizer.",
      size: "30ml bottle",
    },
    {
      id: 4,
      name: "CosmoQ Deep Cleansing FaceWash",
      description:
        "Revitalization Simplified with CosmoQ Deep Cleansing Face Wash.",
      price: "$29.99",
      image: P7,
      hoverImage: P8,
      category: "skincare",
      rating: 4.8,
      reviews: 156,
      benefits: [
        "Deeply cleanses pores",
        "Maintains hydration",
        "Gentle on skin",
      ],
      ingredients: ["AHA", "Aquaxyl", "Vitamin E"],
      usage: "Use twice daily for clear and refreshed skin.",
      size: "100ml tube",
    },
    {
      id: 5,
      name: "CosmoQ Moisturizing Cream",
      description:
        "Next Generation Barrier Repair Therapy with 24hr hydration.",
      price: "$67.99",
      image: P9,
      hoverImage: P10,
      category: "skincare",
      rating: 4.7,
      reviews: 223,
      benefits: [
        "Hydrates for 24 hours",
        "Restores skin barrier",
        "pH balanced",
      ],
      ingredients: ["Ceramides", "Panthenol", "Shea Butter"],
      usage: "Apply morning and night on cleansed skin.",
      size: "50g jar",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Product Card for grid view
  const ProductCardGrid = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="overflow-hidden group hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
          />
        )}
        {product.badge && (
          <div
            className={`absolute top-4 left-4 ${product.badgeColor} text-white px-2 py-1 rounded text-sm font-semibold`}
          >
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        <button
          onClick={() => setSelectedProduct(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </Card>
  );

  // Product Card for list view
  const ProductCardList = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="overflow-hidden group hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex">
        <div className="relative w-64 aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={product.name}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
            />
          )}
          {product.badge && (
            <div
              className={`absolute top-4 left-4 ${product.badgeColor} text-white px-2 py-1 rounded text-sm font-semibold`}
            >
              {product.badge}
            </div>
          )}
        </div>
        <div className="p-6 flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button
            onClick={() => setSelectedProduct(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our complete range of scientifically-formulated health and
            wellness products
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search */}
          <div className="flex-1 lg:max-w-md relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${
                viewMode === "grid"
                  ? "bg-blue-700 text-white"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list"
                  ? "bg-blue-700 text-white"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          {filteredProducts.map((product) =>
            viewMode === "grid" ? (
              <ProductCardGrid key={product.id} product={product} />
            ) : (
              <ProductCardList key={product.id} product={product} />
            )
          )}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found.</p>
          </div>
        )}

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-20">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative h-96  z-0">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    {selectedProduct.badge && (
                      <div
                        className={`absolute top-4 left-4 ${selectedProduct.badgeColor} text-white px-3 py-1 rounded text-sm font-semibold`}
                      >
                        {selectedProduct.badge}
                      </div>
                    )}
                  </div>

                  {selectedProduct.hoverImage && (
                    <div className="relative">
                      <img
                        src={selectedProduct.hoverImage}
                        alt={`${selectedProduct.name} - alternate`}
                        className="w-full h-full max-h-96 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {selectedProduct.benefits?.map((b: string, i: number) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.ingredients?.map(
                        (ing: string, i: number) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {ing}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Usage */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">How to Use</h3>
                    <p className="text-gray-600">{selectedProduct.usage}</p>
                  </div>

                  {/* Size */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Size</h3>
                    <p className="text-gray-600">{selectedProduct.size}</p>
                  </div>
                </div>
              </div>

              {/* Extra Info */}
              {/* <div className="p-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">How to Purchase</h4>
                  <p className="text-sm text-gray-600">
                    Please contact us to place an order.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">30-Day Return</h4>
                  <p className="text-sm text-gray-600">Money-back guarantee</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Expert Support</h4>
                  <p className="text-sm text-gray-600">
                    Professional consultation
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
