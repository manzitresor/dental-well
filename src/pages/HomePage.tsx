
import Header from "../components/layout/Header";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <HeroSection />
            <Features />
        </div>
  )
}
