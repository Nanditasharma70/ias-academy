import AboutSection from "@/components/AboutSection";
import CoachingLocations from "@/components/CoachingLocation";
import CourseForm from "@/components/CourseForm";
import ExploreBatches from "@/components/ExploreBatches";
import FAQAndLocation from "@/components/FaqLocation";
import FeatureCourse from "@/components/FeatureCourse";
import FeaturedCourses from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import FreeResources from "@/components/FreeResources";
import Header from "@/components/Header";
import HeroSlider from "@/components/Hero";
import TopHeader from "@/components/TopHeader";
import ToppersCarousel from "@/components/TopperCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSlider />
      <FeatureCourse />
      <CourseForm />
      <FreeResources />
      <ExploreBatches />
      <AboutSection />
      <FeaturedCourses />
      <ToppersCarousel />
      <CoachingLocations />
      <WhyChoose/>
      <VideoCarousel />
      <FAQAndLocation />
      <Footer />
    </>
  );
}
