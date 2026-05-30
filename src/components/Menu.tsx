import { useState, useEffect, useCallback } from "react"
import { dishes, type Dish } from "../data"

const DishCard = ({ dish, onClick }: { dish: Dish; onClick: () => void }) => (
  <button
    type="button"
    className="min-h-[420px] max-[980px]:min-h-0 grid grid-rows-[1fr_auto] border border-border bg-surface text-left cursor-pointer transition-[transform_180ms_ease,border-color_180ms_ease] hover:-translate-y-1 hover:border-wood focus-visible:-translate-y-1 focus-visible:border-wood focus-visible:outline-none [font:inherit] [color:inherit] p-0"
    onClick={onClick}
  >
    <div
      className="relative min-h-[230px] overflow-hidden bg-[radial-gradient(circle_at_50%_52%,var(--dish)_0_15%,transparent_16%),radial-gradient(circle_at_46%_48%,oklch(97%_0.012_80)_0_34%,transparent_35%),linear-gradient(135deg,oklch(33%_0.055_55_/_0.1),transparent)]"
      style={{ "--dish": dish.color } as React.CSSProperties}
    >
      <img
        src={dish.image}
        alt={dish.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-[28px] rounded-full border border-[oklch(33%_0.055_55_/_0.25)] bg-[radial-gradient(circle_at_32%_40%,oklch(42%_0.09_135)_0_9%,transparent_10%),radial-gradient(circle_at_64%_43%,oklch(70%_0.105_75)_0_8%,transparent_9%),radial-gradient(circle_at_52%_63%,oklch(58%_0.16_35)_0_7%,transparent_8%)]" />
    </div>
    <div className="p-6 border-t border-border">
      <h3 className="text-[30px] font-display font-normal leading-[1.02] tracking-[-0.035em]">{dish.title}</h3>
      <p className="mt-[14px] mb-[22px] text-muted text-[15px] leading-[1.6]">{dish.description}</p>
      <div className="flex justify-between gap-[14px] text-wood text-xs font-extrabold tracking-[0.08em] uppercase">
        <span>{dish.tag}</span>
        <span>{dish.origin}</span>
      </div>
    </div>
  </button>
)

const MenuModal = ({ dish, onClose }: { dish: Dish; onClose: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center p-6 bg-[oklch(20%_0.02_60_/_0.46)]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative grid grid-cols-[minmax(220px,0.45fr)_minmax(280px,0.55fr)] max-[980px]:grid-cols-1 w-[min(880px,100%)] max-h-[min(720px,calc(100vh-48px))] border border-wood bg-surface overflow-auto shadow-[0_24px_60px_oklch(20%_0.02_60_/_0.2)]">
        <button
          className="absolute top-[14px] right-[14px] z-[2] size-[42px] border border-border rounded-full bg-surface text-fg text-[22px] leading-none cursor-pointer flex items-center justify-center"
          onClick={onClose}
          aria-label="Close menu details"
        >
          ×
        </button>

        <div
          className="relative min-h-[420px] max-[980px]:min-h-[260px] overflow-hidden bg-[radial-gradient(circle_at_50%_52%,var(--modal-dish)_0_18%,transparent_19%),radial-gradient(circle_at_48%_50%,var(--color-cream)_0_41%,transparent_42%),linear-gradient(45deg,oklch(58%_0.16_35_/_0.14),transparent),var(--color-bg)]"
          style={{ "--modal-dish": dish.color } as React.CSSProperties}
          aria-hidden
        >
          <img
            src={dish.image}
            alt={dish.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-[clamp(28px,4vw,46px)]">
          <p className="mb-[22px] text-accent text-xs font-bold tracking-[0.1em] uppercase">{dish.tag}</p>
          <h3 id="modal-title" className="font-display font-normal leading-[1.02] tracking-[-0.035em] text-[clamp(38px,5vw,60px)]">{dish.title}</h3>
          <p className="mt-[18px] text-muted text-[17px] leading-[1.65]">{dish.description}</p>

          <div className="grid grid-cols-2 gap-3 my-7">
            <div className="border border-border p-[14px] bg-bg">
              <span className="block text-muted text-[11px] font-extrabold tracking-[0.08em] uppercase">Region</span>
              <strong className="block mt-1.5 text-fg font-display text-[22px] font-normal leading-[1.1] tracking-[-0.02em]">{dish.origin}</strong>
            </div>
            <div className="border border-border p-[14px] bg-bg">
              <span className="block text-muted text-[11px] font-extrabold tracking-[0.08em] uppercase">Flavor</span>
              <strong className="block mt-1.5 text-fg font-display text-[22px] font-normal leading-[1.1] tracking-[-0.02em]">{dish.spice}</strong>
            </div>
            <div className="border border-border p-[14px] bg-bg">
              <span className="block text-muted text-[11px] font-extrabold tracking-[0.08em] uppercase">Serving</span>
              <strong className="block mt-1.5 text-fg font-display text-[22px] font-normal leading-[1.1] tracking-[-0.02em]">{dish.serving}</strong>
            </div>
            <div className="border border-border p-[14px] bg-bg">
              <span className="block text-muted text-[11px] font-extrabold tracking-[0.08em] uppercase">Order type</span>
              <strong className="block mt-1.5 text-fg font-display text-[22px] font-normal leading-[1.1] tracking-[-0.02em]">Table / takeaway</strong>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center justify-center min-h-[46px] px-[18px] py-3 border border-wood rounded-full text-surface bg-wood text-[13px] font-bold tracking-[0.06em] uppercase" href="#reservations">
              Reserve / order
            </a>
            <button type="button" className="inline-flex items-center justify-center min-h-[46px] px-[18px] py-3 border border-wood rounded-full text-wood bg-transparent text-[13px] font-bold tracking-[0.06em] uppercase" onClick={onClose}>
              Back to menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  const closeModal = useCallback(() => setSelectedDish(null), [])

  return (
    <section id="menu" className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,64px)] py-[92px] max-[640px]:py-16">
      <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(280px,0.45fr)] max-[980px]:grid-cols-1 gap-[clamp(28px,5vw,72px)] items-end mb-[42px]">
        <div>
          <p className="mb-[22px] text-muted text-xs font-bold tracking-[0.1em] uppercase">Menu highlights</p>
          <h2 className="max-w-[760px] font-display font-normal leading-[1.02] tracking-[-0.035em] text-[clamp(40px,5.4vw,74px)] max-[640px]:text-[clamp(36px,12vw,52px)]">
            Regional classics with a Surabaya center of gravity.
          </h2>
        </div>
        <p className="text-muted text-[17px] leading-[1.6]">
          The menu keeps familiar Indonesian comfort food close: deep broth,
          coconut richness, fresh herbs, grilled smoke, and sambal served with
          restraint rather than spectacle.
        </p>
      </div>

      <div className="grid grid-cols-3 max-[980px]:grid-cols-1 gap-[18px]">
        {dishes.map((dish) => (
          <DishCard key={dish.title} dish={dish} onClick={() => setSelectedDish(dish)} />
        ))}
      </div>

      {selectedDish && <MenuModal dish={selectedDish} onClose={closeModal} />}
    </section>
  )
}

export default Menu
