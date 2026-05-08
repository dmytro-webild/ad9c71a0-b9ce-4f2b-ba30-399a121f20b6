"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Destinations",
          id: "destinations",
        },
        {
          name: "Resort Hotels",
          id: "hotels",
        },
        {
          name: "Experiences",
          id: "experiences",
        },
        {
          name: "Dining",
          id: "dining",
        },
        {
          name: "Golf",
          id: "golf",
        },
        {
          name: "Events",
          id: "events",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      button={{
        text: "Call Now",
        href: "tel:+18005550123",
      }}
      brandName="Resort Luxury"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="The World’s Most Extraordinary Vacation Experiences"
      description="Luxury vacation experiences across the most beautiful destinations in Mexico."
      buttons={[
        {
          text: "Explore Destinations",
          href: "#destinations",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-relaxing-deck-chair-by-pool_342744-562.jpg",
          imageAlt: "Luxury resort pool palm trees ocean view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-relaxing-deck-chair-by-pool_342744-552.jpg",
          imageAlt: "Luxury resort pool palm trees ocean view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/umbrella-pool-chair_74190-1989.jpg",
          imageAlt: "Luxury resort pool palm trees ocean view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-swimwear-standing-with-hands-hip-near-poolside-backyard_107420-9819.jpg",
          imageAlt: "Luxury resort pool palm trees ocean view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-villa-with-pool-sunset-view_23-2151974409.jpg",
          imageAlt: "Luxury resort pool palm trees ocean view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/landscape-view-leisure-relaxation-summer_1203-4898.jpg",
          imageAlt: "Luxury resort pool palm trees ocean view",
        },
      ]}
    />
  </div>

  <div id="destinations" data-section="destinations">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        {
          title: "Nuevo Vallarta",
          description: "Tropical paradise meets modern luxury.",
          imageSrc: "http://img.b2bpic.net/free-photo/miami-bayside-marketplace_23-2151599509.jpg",
          imageAlt: "luxurious mexican beach resort coastal aerial",
        },
        {
          title: "Riviera Maya",
          description: "Experience the magic of the Caribbean coast.",
          imageSrc: "http://img.b2bpic.net/free-photo/umbrella-chair-beautiful-beach-sea-sunrise-time-travel-vacation_74190-7912.jpg",
          imageAlt: "luxurious mexican beach resort coastal aerial",
        },
        {
          title: "Los Cabos",
          description: "Where the desert meets the sea.",
          imageSrc: "http://img.b2bpic.net/free-photo/silhouette-coconut-palm-tree-around-swimming-pool_74190-711.jpg",
          imageAlt: "luxurious mexican beach resort coastal aerial",
        },
        {
          title: "Acapulco",
          description: "Classic glamour on the Pacific.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-palm-tree-landscape-against-sunset-sky_1048-18610.jpg",
          imageAlt: "luxurious mexican beach resort coastal aerial",
        },
        {
          title: "Mazatlán",
          description: "Colonial charm by the water.",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-beautiful-tropical-beach_74190-6871.jpg",
          imageAlt: "luxurious mexican beach resort coastal aerial",
        },
        {
          title: "Puerto Peñasco",
          description: "Untouched coastal beauty.",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-sandy-beach-with-tourists-swimming_335224-702.jpg",
          imageAlt: "luxurious mexican beach resort coastal aerial",
        },
      ]}
      title="Explore Our Destinations"
      description="Discover the finest luxury locations across Mexico."
    />
  </div>

  <div id="hotels" data-section="hotels">
      <ProductCardTwo
      animationType="opacity"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "Resort",
          name: "Grand Luxxe",
          price: "From $800",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/chair-bed-around-swimming-pool-hotel_74190-6668.jpg",
          imageAlt: "modern elegant luxury hotel lobby interior",
        },
        {
          id: "p2",
          brand: "Resort",
          name: "The Grand Bliss",
          price: "From $650",
          rating: 5,
          reviewCount: "900",
          imageSrc: "http://img.b2bpic.net/free-photo/japanese-traditional-wagasa-umbrella-background_23-2149661144.jpg",
          imageAlt: "modern elegant luxury hotel lobby interior",
        },
        {
          id: "p3",
          brand: "Resort",
          name: "The Grand Mayan",
          price: "From $500",
          rating: 4,
          reviewCount: "2.1k",
          imageSrc: "http://img.b2bpic.net/free-photo/seaside-view-with-sunbeds_23-2148249136.jpg",
          imageAlt: "modern elegant luxury hotel lobby interior",
        },
        {
          id: "p4",
          brand: "Resort",
          name: "Mayan Palace",
          price: "From $400",
          rating: 4,
          reviewCount: "1.8k",
          imageSrc: "http://img.b2bpic.net/free-photo/bed-beach_1203-305.jpg",
          imageAlt: "modern elegant luxury hotel lobby interior",
        },
        {
          id: "p5",
          brand: "Resort",
          name: "The Estates",
          price: "From $1200",
          rating: 5,
          reviewCount: "400",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-hallway-background_23-2149408809.jpg",
          imageAlt: "modern elegant luxury hotel lobby interior",
        },
        {
          id: "p6",
          brand: "Resort",
          name: "Signature Collection",
          price: "From $950",
          rating: 5,
          reviewCount: "600",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-infinity-pool-overlooking-ocean-sunset_23-2151993703.jpg",
          imageAlt: "modern elegant luxury hotel lobby interior",
        },
      ]}
      title="Our Resort Hotels"
      description="Choose your perfect stay from our premium collection."
    />
  </div>

  <div id="experiences" data-section="experiences">
      <FeatureCardOne
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Service",
          description: "Impeccable personalized attention.",
          imageSrc: "http://img.b2bpic.net/free-photo/massage-concept-with-woman-candles_23-2147816944.jpg",
          imageAlt: "gourmet dining experience resort outdoor",
        },
        {
          title: "Dining",
          description: "Gastronomic adventures.",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-candlestick-holiday-table_8353-9571.jpg",
          imageAlt: "gourmet dining experience resort outdoor",
        },
        {
          title: "Entertainment",
          description: "Nightly shows and events.",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-massage-concept-with-woman_23-2147817012.jpg",
          imageAlt: "gourmet dining experience resort outdoor",
        },
        {
          title: "Activities",
          description: "Endless ways to play.",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-beef-wooden-board_140725-741.jpg",
          imageAlt: "gourmet dining experience resort outdoor",
        },
      ]}
      title="Curated Experiences"
      description="Crafted moments to enrich your stay."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "The Premium ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/man-playing-guitar-woman_23-2148330462.jpg",
          alt: "gourmet dining experience resort outdoor",
        },
        {
          type: "text",
          content: " Vacation Experience",
        },
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Forbes Travel",
        "Condé Nast",
        "Travel + Leisure",
        "Luxury Awards",
        "AAA Five Diamond",
        "TripAdvisor",
        "World Travel Awards",
      ]}
      title="Recognized Excellence"
      description="Trusted by travelers worldwide."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Amazing Trip",
          quote: "The best resort experience I have ever had.",
          name: "Sarah Miller",
          role: "Traveler",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-tourist-man-takes-selfies-before-his-flight-photos-with-suitcase-uses-smartphone_1258-270453.jpg",
          imageAlt: "happy couple luxury resort beach vacation",
        },
        {
          id: "2",
          title: "Luxury Defined",
          quote: "Every detail was simply perfect.",
          name: "John Doe",
          role: "Businessman",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-two-women-have-dinner-with-white-wine-elegant-restaurant-chatting_8353-10577.jpg",
          imageAlt: "happy family resort vacation tropical setting",
        },
        {
          id: "3",
          title: "Unforgettable",
          quote: "We will definitely be coming back.",
          name: "Emily Chen",
          role: "Vacationer",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-loving-young-couple-kissing-terrace-sunny-morning-with-curtains-foreground_197531-3342.jpg",
          imageAlt: "guest enjoying vacation sunset poolside",
        },
        {
          id: "4",
          title: "Top Tier",
          quote: "Service beyond expectations.",
          name: "David Smith",
          role: "Adventurer",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-freelancer-seaside_23-2148968961.jpg",
          imageAlt: "satisfied traveler ocean view terrace",
        },
        {
          id: "5",
          title: "Dream Vacation",
          quote: "Beautiful place and great food.",
          name: "Anna Ross",
          role: "Traveler",
          imageSrc: "http://img.b2bpic.net/free-photo/interested-tanned-woman-white-shirt-drinking-cocktail-near-pool-summer-morning-lovely-blonde-woman-wears-hat-eating-fruits-weekend-resort_197531-20845.jpg",
          imageAlt: "vacation resort experience happy traveler",
        },
      ]}
      title="Guest Reflections"
      description="Stories from our valued guests."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Start Your Luxury Vacation Today"
      description="Join our newsletter for exclusive offers."
      tag="Exclusive Offers"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/starry-sky-town_23-2151642625.jpg"
      logoText="Resort Luxury"
      columns={[
        {
          title: "Resort",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Destinations",
              href: "#destinations",
            },
            {
              label: "Resort Hotels",
              href: "#hotels",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
            {
              label: "Sitemap",
              href: "#",
            },
            {
              label: "Help Center",
              href: "#",
            },
          ],
        },
      ]}
      imageAlt="serene tropical beach twilight view"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
