const Reservation = () => (
  <section
    id="reservations"
    className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,64px)] py-[92px] max-[640px]:py-16 grid grid-cols-[minmax(0,0.65fr)_minmax(300px,0.35fr)] max-[980px]:grid-cols-1 gap-[clamp(28px,6vw,78px)] items-start"
  >
    <div>
      <p className="mb-[22px] text-muted text-xs font-bold tracking-[0.1em] uppercase">Reservations / orders</p>
      <h2 className="max-w-[760px] font-display font-normal leading-[1.02] tracking-[-0.035em] text-[clamp(40px,5.4vw,74px)] max-[640px]:text-[clamp(36px,12vw,52px)]">
        Book the table, order the feast, or ask about private dining.
      </h2>
      <p className="mt-6 text-muted text-[17px] leading-[1.6]">
        Use this area for WhatsApp ordering, table reservations, catering
        inquiries, or a delivery partner link. The form is intentionally simple
        so it can convert to a real booking flow later.
      </p>
    </div>

    <form className="border border-border p-7 bg-surface">
      <label className="block mb-2 text-muted text-xs font-bold tracking-[0.08em] uppercase" htmlFor="visit-date">
        Date
      </label>
      <input
        id="visit-date"
        name="visit-date"
        type="date"
        className="w-full min-h-[46px] mb-4 px-3 py-2.5 border border-border bg-bg text-fg text-inherit"
      />

      <label className="block mb-2 text-muted text-xs font-bold tracking-[0.08em] uppercase" htmlFor="party-size">
        Party size
      </label>
      <select
        id="party-size"
        name="party-size"
        className="w-full min-h-[46px] mb-4 px-3 py-2.5 border border-border bg-bg text-fg text-inherit"
      >
        <option>2 guests</option>
        <option>4 guests</option>
        <option>6 guests</option>
        <option>8+ guests</option>
      </select>

      <label className="block mb-2 text-muted text-xs font-bold tracking-[0.08em] uppercase" htmlFor="request-type">
        Request
      </label>
      <select
        id="request-type"
        name="request-type"
        className="w-full min-h-[46px] mb-4 px-3 py-2.5 border border-border bg-bg text-fg text-inherit"
      >
        <option>Table reservation</option>
        <option>Delivery / takeaway</option>
        <option>Private event</option>
      </select>

      <button
        type="button"
        className="w-full min-h-[48px] border border-wood text-surface bg-wood text-[13px] font-extrabold tracking-[0.08em] uppercase cursor-pointer [font:inherit]"
      >
        Continue on WhatsApp
      </button>
    </form>
  </section>
)

export default Reservation
