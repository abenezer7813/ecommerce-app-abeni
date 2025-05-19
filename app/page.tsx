import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import NewsLetter from "@/components/NewsLetter";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
   <main>
    <HeroSection  />
    <GallerySection />
    <ProductSection />
    <NewsLetter/>
    <TestimonialSection />
   </main>
  );
}
