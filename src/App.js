import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";


const sliderItems = [
  {
    backgroundImage: "./images/back-a.jpg",
    text: "Basic, Standard, and Premium packages to suit your needs.",
  },
  {
    backgroundImage: "./images/back-b.jpg",
    text: "Custom designs, front-end, and back-end development from A to Z.",
  },
  {
    backgroundImage: "./images/back-c.jpg",
    text: "Create applications for Android and iOS platforms.",
  },
  {
    backgroundImage: "./images/back-d.jpg",
    text: "Already have a website? Need a plugin, addon, or support? Contact us!",
  },
];

const portfolioItems = [
  {
    name: "Art Project",
    description: "Sell art, handmade items.",
    url: "https://art-project-ika.netlify.app",
    image: "./images/art.jpg",
  },
  {
    name: "Boqo Wines",
    description: "A classy e-commerce website for wine lovers.",
    url: "https://boqo-wines.netlify.app",
    image: "./images/boqo-wines.jpg",
  },
  {
    name: "Perfume Store",
    description: "A modern premium perfumes.",
    url: "https://perfume-ika.netlify.app",
    image: "./images/perfume.jpg",
  },
  {
    name: "Georgian Vine",
    description: "A PHP-powered website for wine promotion.",
    url: "https://georgianvine.ge",
    image: "./images/berika.jpg",
  },
  {
    name: "Nature Protection",
    description: "A modern page for nature protection.",
    url: "https://neatest.netlify.app",
    image: "./images/nea.jpg",
  },
];

const pricingPlans = [
  {
    name: "Basic Package",
    price: "$300",
    features: ["Single-page design", "Responsive layout", "Basic SEO"],
    image: "./images/basic.jpg",
  },
  {
    name: "Standard Package",
    price: "$600",
    features: ["Multi-page website", "Custom design", "Standard SEO"],
    image: "./images/standard.jpg",
  },
  {
    name: "Premium Package",
    price: "$1200",
    features: ["E-commerce functionality", "Advanced SEO", "1 year support"],
    image: "./images/premium.jpg",
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderItems.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 10000); // Change slides every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);


  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll event to toggle visibility of the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollPortfolio = (direction) => {
    const grid = document.getElementById("portfolio-grid");
    const scrollAmount = 300; // Adjust scroll distance as needed
    if (direction === "left") {
      grid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  

  return (
    <div className="App">
      <header className="header">
        <div className="logo-div">
          <img src="images/logo.png" className="logo" alt="Future Sky Logo" />
          <h1>Future Sky</h1>
        </div>
        <nav>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Slider Section */}
      <section className="slider">
        <div
          className="slides"
          style={{
            backgroundImage: `url(${sliderItems[currentSlide].backgroundImage})`,
          }}
        >
          <div className="slider-text">
            <p>{sliderItems[currentSlide].text}</p>
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="dots">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
  <h2>Portfolio</h2>
  <div className="portfolio-container">
    <div className="portfolio-grid" id="portfolio-grid">
      {portfolioItems.map((item, index) => (
        <div key={index} className="portfolio-item">
          <img
            src={item.image}
            alt={`${item.name} thumbnail`}
            className="portfolio-thumbnail"
          />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        </div>
      ))}
    </div>
    {/* Horizontal Scroll Buttons */}
    <div className="portfolio-scroll-buttons">
      <button
        className="scroll-button"
        onClick={() => scrollPortfolio("left")}
      >
        &#10094;
      </button>
      <button
        className="scroll-button"
        onClick={() => scrollPortfolio("right")}
      >
        &#10095;
      </button>
    </div>
  </div>
</section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="pricing-plan"
                style={{
                  backgroundImage: plan.image ? `url(${plan.image})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              > 
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div className="contact-info">
              <p>Contact Us:</p>
              <p>Email: <a href="mailto:info@futuresky.com">info@futuresky.com</a></p>
              <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
              <p className="pppp">&copy; 2025 Future Sky. All rights reserved.</p>

            </div>
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </div>
          </div>
        </footer>
        {showScroll && (
          <button
            className={`scroll-to-top ${showScroll ? "visible" : ""}`}
            onClick={scrollToTop}
          >
            ↑
          </button>
        )}
    </div>
  );
}

export default App;
