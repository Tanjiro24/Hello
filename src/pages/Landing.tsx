import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users, Star, User, X } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import P1 from "../assets/Product images/p1.jpg";
import P4 from "../assets/Product images/p4.jpg";
import P2 from "../assets/Product images/p2.jpg";
import P3 from "../assets/Product images/p3.jpg";
import P5 from "../assets/Product images/p5.jpg";
import P6 from "../assets/Product images/p6.jpg";
import bgvideo from "../assets/Product Video/V1.mp4";
import { Helmet } from "react-helmet";

const Landing: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

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
  ];

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     role: "Verified Customer",
  //     avatar: "SJ",
  //     content:
  //       "The Cosmo Q Facial Serum has completely transformed my skin. After just two weeks, my fine lines were visibly reduced and my skin felt incredibly smooth.",
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Thompson",
  //     role: "Health Professional",
  //     avatar: "MT",
  //     content:
  //       "The VitalBoost Complex is in my daily routine - I recommend it to all my patients. The quality is exceptional and the results speak for themselves.",
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Amanda Lee",
  //     role: "Skincare Enthusiast",
  //     avatar: "AL",
  //     content:
  //       "The RejuvaMax Treatment Set is worth every penny for dermatologist-grade skincare! I've never seen such remarkable results from a home treatment kit.",
  //     rating: 5,
  //   },
  // ];

  // const articles = [
  //   {
  //     id: 1,
  //     title: "The Science Behind Effective Skincare",
  //     excerpt:
  //       "Discover the key ingredients and research that makes skincare products truly effective...",
  //     image:
  //       "https://images.pexels.com/photos/5938344/pexels-photo-5938344.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     date: "Dec 15, 2024",
  //     category: "Research",
  //   },
  //   {
  //     id: 2,
  //     title: "5 Ways to Boost Your Immune System",
  //     excerpt:
  //       "Learn science-backed methods to strengthen your immune system naturally...",
  //     image:
  //       "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     date: "Dec 10, 2024",
  //     category: "Health Tips",
  //   },
  //   {
  //     id: 3,
  //     title: "Behind the Scenes: Our Manufacturing Process",
  //     excerpt:
  //       "Take a look inside our state-of-the-art facilities and learn how we ensure quality in every product...",
  //     image:
  //       "https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     date: "Dec 5, 2024",
  //     category: "Company",
  //   },
  // ];

  const reasons = [
    {
      icon: Shield,
      title: "Science-Based Formulations",
      description:
        "All our products are developed using the latest scientific research and cutting-edge technology.",
    },
    {
      icon: Award,
      title: "FDA Registered",
      description:
        "Our facilities maintain the highest safety standards required by the FDA.",
    },
    {
      icon: Users,
      title: "Dermatologist Tested",
      description:
        "Every product is rigorously tested by certified dermatologists for safety and efficacy.",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description:
        "We maintain a 100% satisfaction guarantee.",
    },
  ];

  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
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

  return (
    <>
    <Helmet>
      <title>Elixir Pharma - Enriching Health. Empowering Lives</title>
      <meta name="description" content="Innovative skincare and wellness solutions, backed by science." />
      <meta name="keywords" content="Pharmaceuticals, Skincare, Wellness, Health, Derma, Respi, Critical Care, Onco, Probiotics, Multivitamins" />
      <meta name="author" content="Elixir Pharma" />
      <link rel="canonical" href="https://www.elixirpharma.ph/" />
    </Helmet>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Background Video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}

        {/* Existing background image fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Enriching Health.
              <br />
              <span className="text-yellow-400">Empowering Lives</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Innovative skincare and wellness solutions, backed by science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Products
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-blue-400 text-blue-600 bg-blue-100 hover:bg-blue-200"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Elixir Pharma"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Elixir Pharma
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Elixir Pharma, we are dedicated to enriching health and
                wellness through innovative, science-backed solutions. Our
                commitment to excellence drives us to create products that not
                only meet the highest quality standards but also deliver real
                results for healthier, happier lives. We specialize in Derma,
                Respi, Critical Care, Onco, Probiotics, and Multivitamins,
                ensuring a comprehensive approach to health across diverse
                therapeutic areas.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2019, we've grown from a small research team to a
                leading pharmaceutical company committed to changing lives and
                empowering free-through groundbreaking formulations and
                pharmaceutical care.
              </p>
              <Link to="/about">
                <Button variant="primary" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain bg-blue-50"
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and effective products, each
              scientifically formulated to deliver exceptional results.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Modal */}
         {selectedProduct && (
                   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
                     <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                       {/* Header */}
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
                         {/* Image */}
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
                             {/* <div className="flex items-center mb-2">
                               <div className="flex text-yellow-400 mr-2">
                                 {[...Array(5)].map((_, i) => (
                                   <Star
                                     key={i}
                                     className={`w-5 h-5 ${
                                       i < Math.floor(selectedProduct.rating)
                                         ? "fill-current"
                                         : ""
                                     }`}
                                   />
                                 ))}
                               </div>
                               <span className="text-gray-600">
                                 ({selectedProduct.reviews} reviews)
                               </span>
                             </div>
                             <div className="text-3xl font-bold text-blue-700 mb-4">
                               {selectedProduct.price}
                             </div> */}
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
         
                           {/* Actions */}
                           {/* <div className="flex space-x-4 pt-4">
                             <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                               <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                             </button>
                             <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
                               <Heart className="w-5 h-5 text-gray-600" />
                             </button>
                           </div> */}
                         </div>
                       </div>
         
                       {/* Extra Info */}
                       {/* <div className="p-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="bg-gray-50 p-4 rounded-lg">
                           <h4 className="font-semibold mb-2">Free Shipping</h4>
                           <p className="text-sm text-gray-600">On orders over $50</p>
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
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the
              pharmaceutical industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center p-6" hover>
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real customers who have transformed their health and wellness journey with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6" hover>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Latest Articles */}
      {/* <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-lg text-gray-600">
                Stay informed with the latest health and wellness insights from our experts.
              </p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} hover className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold mr-2">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Have Questions? We're Here to Help
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team of experts is ready to answer your questions and
                provide personalized recommendations for your health needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span>Expert consultation available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span>Safe and secure communication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span>Personalized product recommendations</span>
                </div>
              </div>
            </div>
            <ContactForm className="bg-white text-gray-900" />
          </div>
        </div>
      </section>
    </div>
</>
  );
};
export default Landing;
