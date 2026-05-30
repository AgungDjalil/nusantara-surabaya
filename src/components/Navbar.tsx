const Navbar = () => (
  <nav
    className="sticky top-0 z-10 grid grid-cols-[minmax(140px,1fr)_auto_minmax(140px,1fr)] max-[980px]:grid-cols-[1fr_auto] items-center gap-6 px-[clamp(20px,4vw,64px)] py-[18px] border-b border-border bg-[oklch(97%_0.012_80_/_0.92)] backdrop-blur-[14px]"
    aria-label="Main navigation"
  >
    <a className="inline-flex items-center gap-3 font-display text-2xl tracking-[-0.01em] whitespace-nowrap max-[640px]:text-xl" href="#home" aria-label="Nusantara Surabaya home">
      <span className="grid place-items-center size-[42px] max-[640px]:size-9 border border-wood rounded-full text-surface font-bold text-xs tracking-[0.08em] bg-[linear-gradient(135deg,transparent_42%,oklch(70%_0.105_75_/_0.65)_43%_57%,transparent_58%),var(--color-wood)]">
        NS
      </span>
      <span>Nusantara</span>
    </a>

    <div className="flex items-center gap-[clamp(16px,2.5vw,34px)] text-muted text-[13px] font-semibold tracking-[0.08em] uppercase max-[980px]:hidden">
      <a href="#home">Home</a>
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#location">Location</a>
    </div>

    <a className="justify-self-end px-4 py-2.5 max-[640px]:px-3 max-[640px]:py-2 max-[640px]:text-[11px] border border-wood rounded-full text-surface bg-wood text-[13px] font-bold tracking-[0.06em] uppercase" href="#reservations">
      Reservations
    </a>
  </nav>
)

export default Navbar
