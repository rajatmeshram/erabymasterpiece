import PageHero from "@/components/PageHero";
import { menu } from "@/data/site";

export const metadata = {
  title: "Menu · ERA by Masterpiece",
};

function Course({ title, items }) {
  return (
    <section className="bg-ivory px-6 py-12 text-ink sm:px-12">
      <h2 className="font-display text-center text-5xl text-gold">{title}</h2>
      <div className="gold-rule mx-auto mt-4 w-28" />
      <ul className="mt-12 space-y-10">
        {items.map((dish) => (
          <li key={dish.name} className="grid gap-6 sm:grid-cols-[112px_1fr_auto] sm:items-center">
            <img
              src={dish.image}
              alt={dish.name}
              className="h-28 w-28 rounded-full object-cover"
            />
            <div>
              <p className="font-roman text-[13px] tracking-[0.22em] uppercase">
                {dish.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-teal">{dish.copy}</p>
            </div>
            <p className="font-roman text-sm tracking-[0.16em]">{dish.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        roman="III · Menu"
        title="The house card"
        copy="Entrées and mains as written in the ERA folder — ivory paper, lounge teal, bust gold."
      />
      <div className="bg-teal px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.25)] md:grid-cols-2">
          <Course title="Entrées" items={menu.entrees} />
          <Course title="Mains" items={menu.mains} />
        </div>
      </div>
    </>
  );
}
