const Hero = () => (
  <section
    id="home"
    className="min-h-[calc(100vh-80px)] max-[640px]:min-h-0 grid grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] max-[980px]:grid-cols-1 gap-[clamp(36px,6vw,92px)] items-center max-w-[1240px] mx-auto px-[clamp(20px,4vw,64px)] py-[clamp(44px,7vw,90px)] max-[640px]:pt-[38px] pb-11"
  >
    <div>
      <p className="mb-[22px] text-accent text-xs font-bold tracking-[0.1em] uppercase">
        Traditional Indonesian restaurant · Surabaya
      </p>
      <h1 className="max-w-[760px] font-display font-normal leading-[1.02] tracking-[-0.035em] text-[clamp(58px,8.8vw,118px)] max-[640px]:text-[clamp(48px,16vw,68px)]">
        Masakan Nusantara, served with East Java warmth.
      </h1>
      <p className="max-w-[610px] mt-7 text-muted text-[clamp(18px,2vw,22px)] leading-[1.45]">
        A Surabaya dining room for rawon, satay, sambal, grilled fish, and
        family-style Indonesian dishes built around slow spice pastes, banana
        leaf, wood, and woven craft.
      </p>
      <div className="flex flex-wrap gap-3 mt-[38px]" aria-label="Primary actions">
        <a className="inline-flex items-center justify-center min-h-[46px] px-[18px] py-3 border border-wood rounded-full text-surface bg-wood text-[13px] font-bold tracking-[0.06em] uppercase" href="#reservations">
          Reserve a table
        </a>
        <a className="inline-flex items-center justify-center min-h-[46px] px-[18px] py-3 border border-wood rounded-full text-wood bg-transparent text-[13px] font-bold tracking-[0.06em] uppercase" href="#menu">
          View menu
        </a>
      </div>
    </div>

    <div
      className="relative min-h-[620px] max-[980px]:min-h-[520px] max-[640px]:min-h-[420px] border border-wood shadow-[0_18px_44px_var(--color-shadow)] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(assets/rawon-fav.png)" }}
      aria-label="Rawon Surabaya dish photo"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(20%_0.02_60_/_0.55)] via-[oklch(20%_0.02_60_/_0.08)] to-transparent" />
      <div className="absolute inset-5 border border-[oklch(99%_0.005_80_/_0.28)] pointer-events-none" />

      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-surface font-display text-[clamp(36px,6vw,56px)] tracking-[-0.025em] whitespace-nowrap drop-shadow-[0_2px_12px_oklch(20%_0.02_60_/_0.5)]">
        Rawon Surabaya
      </span>

      <div className="absolute inset-x-11 max-[640px]:inset-x-[26px] bottom-[38px] grid grid-cols-3 max-[640px]:grid-cols-1 gap-[14px] max-[640px]:gap-2.5 border-t border-[oklch(99%_0.005_80_/_0.22)] pt-6">
        <div>
          <span className="block text-[oklch(97%_0.012_80_/_0.7)] text-[11px] font-bold tracking-[0.1em] uppercase">Region</span>
          <strong className="block mt-1.5 text-surface font-display text-2xl max-[640px]:text-xl font-normal leading-[1.1] tracking-[-0.02em]">Jawa Timur</strong>
        </div>
        <div>
          <span className="block text-[oklch(97%_0.012_80_/_0.7)] text-[11px] font-bold tracking-[0.1em] uppercase">Style</span>
          <strong className="block mt-1.5 text-surface font-display text-2xl max-[640px]:text-xl font-normal leading-[1.1] tracking-[-0.02em]">Family table</strong>
        </div>
        <div>
          <span className="block text-[oklch(97%_0.012_80_/_0.7)] text-[11px] font-bold tracking-[0.1em] uppercase">Kitchen</span>
          <strong className="block mt-1.5 text-surface font-display text-2xl max-[640px]:text-xl font-normal leading-[1.1] tracking-[-0.02em]">Spice-led</strong>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
