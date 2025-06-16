import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import CollectionSection from "@/components/CollectionSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import ContactForm from "@/components/ContactForm";
import ShowRoom from "@/components/ShowRoom";

export default function page() {

  return (
    <main className="w-screen h-auto ">
      <Hero />
      {/* <NewArrivals/>
      <CollectionSection/>
      <WhyChooseUs/>
      <Categories/>
      <Testimonials/>
      <ShowRoom/>
      <InstagramGallery/>
      <ContactForm/> */}
    </main>
  );
}
