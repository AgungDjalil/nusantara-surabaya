const Location = () => (
  <section id="location" className="mx-[clamp(20px,4vw,64px)] max-[980px]:mx-0 max-[980px]:px-[clamp(20px,4vw,64px)] border-y border-wood bg-wood text-surface">
    <div className="max-w-[1240px] mx-auto grid grid-cols-[minmax(0,0.9fr)_minmax(280px,0.5fr)] max-[980px]:grid-cols-1 gap-[clamp(28px,6vw,80px)] py-[70px]">
      <div>
        <p className="mb-[22px] text-[oklch(99%_0.005_80_/_0.72)] text-xs font-bold tracking-[0.1em] uppercase">Location</p>
        <h2 className="max-w-[760px] font-display font-normal leading-[1.02] tracking-[-0.035em] text-surface text-[clamp(40px,5.4vw,74px)] max-[640px]:text-[clamp(36px,12vw,52px)]">
          Surabaya, Jawa Timur.
        </h2>
      </div>

      <div className="self-end border border-[oklch(99%_0.005_80_/_0.28)] p-[26px] bg-[oklch(99%_0.005_80_/_0.08)]">
        <strong className="block mb-3 text-surface font-display text-[30px] font-normal tracking-[-0.02em]">
          Nusantara Surabaya
        </strong>
        <p className="text-[oklch(99%_0.005_80_/_0.78)] text-base leading-[1.6]">
          Traditional Indonesian dining room in Surabaya. This dummy map marks
          the intended place slot; replace it with the exact verified address
          when the restaurant listing is final.
        </p>
      </div>

      <div className="col-span-2 max-[980px]:col-span-1 grid grid-cols-[minmax(0,1fr)_minmax(240px,0.34fr)] max-[980px]:grid-cols-1 min-h-[360px] border border-[oklch(99%_0.005_80_/_0.28)] bg-[oklch(99%_0.005_80_/_0.08)] overflow-hidden">
        <div
          className="relative min-h-[360px] overflow-hidden bg-[linear-gradient(32deg,transparent_0_36%,oklch(99%_0.005_80_/_0.14)_36%_39%,transparent_39%),linear-gradient(112deg,transparent_0_48%,oklch(99%_0.005_80_/_0.18)_48%_51%,transparent_51%),linear-gradient(8deg,transparent_0_58%,oklch(70%_0.105_75_/_0.26)_58%_61%,transparent_61%),oklch(97%_0.012_80_/_0.16)]"
          role="img"
          aria-label="Dummy map illustration for Nusantara Surabaya"
        >
          <img
            src="https://loremflickr.com/1000/600/surabaya,restaurant,storefront,indonesian"
            alt="Restaurant location"
            className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay"
          />
          <span className="absolute w-[56%] h-[34%] left-[10%] top-[18%] -rotate-[10deg] border border-[oklch(99%_0.005_80_/_0.2)] rounded-full" />
          <span className="absolute w-[48%] h-[28%] right-[8%] bottom-[18%] rotate-[14deg] border border-[oklch(99%_0.005_80_/_0.2)] rounded-full" />

          <div className="absolute left-[52%] top-[42%] grid place-items-center size-[74px] border border-[oklch(99%_0.005_80_/_0.46)] rounded-[50%_50%_50%_0] bg-accent text-surface font-display text-[28px] tracking-[-0.02em] -translate-x-1/2 -translate-y-1/2 -rotate-45 shadow-[0_20px_34px_oklch(20%_0.02_60_/_0.18)]">
            <span className="rotate-45">NS</span>
          </div>

          <div className="absolute left-1/2 top-[calc(42%+58px)] -translate-x-1/2 min-w-[230px] py-[14px] px-4 border border-[oklch(99%_0.005_80_/_0.34)] bg-[oklch(20%_0.02_60_/_0.22)] text-surface text-center">
            Dummy Google Map Place<br />Surabaya, Jawa Timur
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 p-[26px] max-[980px]:border-l-0 max-[980px]:border-t border-l border-l-[oklch(99%_0.005_80_/_0.28)]">
          <p className="text-[oklch(99%_0.005_80_/_0.76)] text-[15px] leading-[1.6]">
            Dummy Google Maps place: <strong>Nusantara restaurant, Surabaya, Jawa Timur</strong>. Use this slot for the verified restaurant listing, delivery pin, or private dining arrival note.
          </p>
          <a className="inline-flex items-center justify-center min-h-[46px] px-4 py-3 border border-[oklch(99%_0.005_80_/_0.5)] text-surface text-xs font-extrabold tracking-[0.08em] uppercase" href="#reservations">
            Use for reservations
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Location
