import CoachingLocations from "@/components/CoachingLocation";
import CourseForm from "@/components/CourseForm";
import ExploreBatches from "@/components/ExploreBatches";
import FAQAndLocation from "@/components/FaqLocation";
import FeaturedCourses from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import FreeResources from "@/components/FreeResources";
import Header from "@/components/Header";
import HeroSlider from "@/components/Hero";
import TopHeader from "@/components/TopHeader";
import ToppersCarousel from "@/components/TopperCarousel";
import VideoCarousel from "@/components/VideoCarousel";

export default function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSlider />
      <CourseForm />
      <FreeResources />
      <ExploreBatches />
       <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <ToppersCarousel />
    </main>
    <FeaturedCourses/>
    <CoachingLocations/>
    <VideoCarousel/>
    <FAQAndLocation/>
      <Footer />
    </>
  );
}
