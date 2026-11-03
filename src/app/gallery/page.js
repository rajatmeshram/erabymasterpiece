import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery · ERA by Masterpiece",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        roman="I · Gallery"
        title="Still lives of a living house"
        copy="Dummy photographs for now — dining, nights, interiors, events. Click a frame to open it."
        sculpture="/brand/lotus.png"
      />
      <section className="bg-oxblood px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
