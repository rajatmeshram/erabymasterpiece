import PageHero from "@/components/PageHero";
import WatchAndShop from "@/components/WatchAndShop";
import EventList from "@/components/EventList";

export const metadata = {
  title: "Events · ERA by Masterpiece",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        roman="I · Events"
        title="Nights written in gold"
        copy="Suppers, balls, brunches, after-hours. Filter the calendar. Shop the house table from the reels."
        sculpture="/brand/candles.png"
      />
      <WatchAndShop />
      <EventList />
    </>
  );
}
