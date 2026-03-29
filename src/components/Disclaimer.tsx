export default function Disclaimer() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto rounded-lg border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6">
        <h3 className="text-sm font-bold text-[var(--color-gold-400)] uppercase tracking-wider mb-3">
          Disclaimer
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          This is a <strong className="text-gray-300">purely numerical comparison</strong> based
          on publicly available data from the Global Firepower Index. It does{" "}
          <strong className="text-gray-300">not</strong> account for: nuclear
          weapons capability, alliance networks (NATO, etc.), technology quality
          or generation of equipment, terrain and defensive advantages, cyber
          warfare capability, troop morale and training quality, or economic
          sustainability of prolonged conflict. Real-world military outcomes
          depend on countless factors beyond raw numbers.
        </p>
      </div>
    </section>
  );
}
