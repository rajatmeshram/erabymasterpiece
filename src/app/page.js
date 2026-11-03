import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import KitchenStrip from "@/components/KitchenStrip";
import RoomSlider from "@/components/RoomSlider";
import MenuSection from "@/components/MenuSection";
import NorthStory from "@/components/NorthStory";

export default function Home() {
  return (
    <>
      <Hero />
      <KitchenStrip />
      <Manifesto />
      <RoomSlider />
      <MenuSection />
      <NorthStory />
    </>
  );
}
