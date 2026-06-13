const About = () => (
  <section
    id="about"
    className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,64px)] py-[92px] max-[640px]:py-16 grid grid-cols-[minmax(280px,0.42fr)_minmax(0,0.58fr)] max-[980px]:grid-cols-1 gap-[clamp(32px,6vw,86px)] items-stretch"
  >
    <div
      className="relative min-h-[560px] max-[640px]:min-h-[340px] border border-wood overflow-hidden bg-[linear-gradient(45deg,transparent_0_18px,oklch(58%_0.16_35_/_0.14)_18px_20px,transparent_20px_38px),linear-gradient(-45deg,transparent_0_18px,oklch(42%_0.09_135_/_0.12)_18px_20px,transparent_20px_38px),var(--color-cream)] bg-[length:56px_56px]"
      aria-label="Batik and woven texture panel"
    >
      <img
        src="assets/tempat-makan.avif"
        alt="Restaurant interior"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
      />
    </div>

    <div className="self-center">
      <p className="mb-[22px] text-muted text-xs font-bold tracking-[0.1em] uppercase">About the house</p>
      <h2 className="max-w-[760px] font-display font-normal leading-[1.02] tracking-[-0.035em] text-[clamp(40px,5.4vw,74px)] max-[640px]:text-[clamp(36px,12vw,52px)]">
        A room for the food Indonesians grow up remembering.
      </h2>

      <p className="max-w-[68ch] mt-6 text-muted text-lg leading-[1.7]">
        Nusantara is imagined as a traditional restaurant in Surabaya: warm wood
        tables, cream walls, leaf-green details, gold glints in the signage,
        and woven textures that feel familiar without becoming theatrical.
      </p>
      <p className="max-w-[68ch] mt-6 text-muted text-lg leading-[1.7]">
        The cooking language is grounded in Indonesian hospitality. Dishes
        arrive for sharing, sauces stay close to the plate, and the visual
        rhythm lets the food, craft, and city do the talking.
      </p>

      <blockquote className="max-w-[780px] my-[52px] pl-7 border-l-4 border-accent font-display text-[clamp(30px,3.8vw,48px)] leading-[1.14] tracking-[-0.02em]">
        Not fusion. Not nostalgia as decoration. Just Indonesian food given the
        space and ceremony it deserves.
      </blockquote>

      <p className="max-w-[68ch] mt-6 text-muted text-lg leading-[1.7]">
        For locals, the experience should feel respectful and recognisable. For
        travellers, it should feel like an easy doorway into Surabaya's table
        culture.
      </p>
    </div>
  </section>
)

export default About
