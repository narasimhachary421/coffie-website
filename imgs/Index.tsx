import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroCoffee from "@/assets/hero-coffee.jpg";
import coffeeDarkRoast from "@/assets/coffee-dark-roast.jpg";
import coffeeMediumRoast from "@/assets/coffee-medium-roast.jpg";
import coffeeLightRoast from "@/assets/coffee-light-roast.jpg";
import coffeeBrewing from "@/assets/coffee-brewing.jpg";

const categories = [
  {
    title: "Dark Roast",
    description: "Bold, smoky, and full-bodied with rich chocolate undertones.",
    image: coffeeDarkRoast,
  },
  {
    title: "Medium Roast",
    description: "Balanced and smooth with caramel sweetness and nutty notes.",
    image: coffeeMediumRoast,
  },
  {
    title: "Light Roast",
    description: "Bright and fruity with floral aromas and crisp acidity.",
    image: coffeeLightRoast,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroCoffee}
          alt="Premium coffee beans and espresso"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Crafted with
            <span className="block text-gradient-coffee">Passion & Precision</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover our curated selection of premium coffee beans sourced from the world's finest plantations.
          </p>
          <Link
            to="/catalogue"
            className="inline-block bg-accent text-accent-foreground font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-warm animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            View Catalogue
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Welcome to Coffie
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are passionate about bringing you the finest coffee from around the globe. Every bean in our collection is
            carefully selected, ethically sourced, and expertly roasted to bring out its unique character and flavor profile.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Coffee Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-500"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <img
          src={coffeeBrewing}
          alt="Coffee brewing process"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Explore?
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8">
            Browse our complete collection of premium coffees and find the perfect blend for your taste.
          </p>
          <Link
            to="/catalogue"
            className="inline-block bg-accent text-accent-foreground font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-warm"
          >
            View Full Catalogue
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
