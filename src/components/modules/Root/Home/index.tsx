import MyContainer from "@/components/common/MyContainer";
import HomeHeroSection from "./HomeHeroSection";
import WorkSection from "./WorkSection";
import Testimonial from "./Testimonial";
import SubscribeSection from "@/components/common/SubscribeSection";
import HomeEventSection from "./HomeEventSection";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <div className="md:space-y-36 space-y-8 md:pb-36 pb-12">
        <HomeEventSection />
        <MyContainer>
          <WorkSection />
        </MyContainer>
        <Testimonial />
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Home;
