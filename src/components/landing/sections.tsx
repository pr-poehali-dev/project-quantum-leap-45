import { ReactNode } from "react"

export interface SectionData {
  id: string
  title: string
  subtitle?: ReactNode
  content?: ReactNode
  showButton?: boolean
  buttonText?: string
  customRender?: boolean
}

export const sections: SectionData[] = [
  {
    id: 'hero',
    title: 'Две атмосферы',
    subtitle: (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--mo-gold)] text-[var(--mo-gold)] text-sm font-bold tracking-widest uppercase">
        ★ Шиномонтаж ★
      </div>
    ),
    content: (
      <div>
        <p className="text-5xl md:text-7xl font-black text-[var(--mo-red)] tracking-wider mt-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
          −15%
        </p>
        <p className="text-xl md:text-2xl text-[var(--mo-light)] mt-2 tracking-wide">
          на все работы по шиномонтажу
        </p>
        <p className="text-sm text-[var(--mo-gold)] mt-3 uppercase tracking-widest">
          для военнослужащих
        </p>
      </div>
    ),
  },
  {
    id: 'offer',
    title: 'Твоя льгота',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 max-w-3xl">
        {[
          { icon: '★', label: 'Скидка', value: '15% на работы' },
          { icon: '✦', label: 'Кому', value: 'Военнослужащим РФ' },
          { icon: '◆', label: 'Предъявить', value: 'Штрих-код из визитки' },
          { icon: '▲', label: 'Где', value: 'В мастерской «Две атмосферы»' },
        ].map((item) => (
          <div key={item.label} className="border border-[var(--mo-gold)]/40 p-4 bg-[var(--mo-dark)]/60">
            <div className="text-[var(--mo-gold)] text-lg mb-1">{item.icon} {item.label}</div>
            <div className="text-[var(--mo-light)] text-lg font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'barcode',
    title: 'Предъявите визитку',
    customRender: true,
    content: (
      <div className="flex flex-col items-start gap-6 mt-4">
        <div className="bg-white p-4 inline-block">
          <div className="flex gap-[2px] items-end h-16">
            {Array.from({ length: 60 }).map((_, i) => {
              const widths = [3, 1, 2, 1, 3, 2, 1, 2, 1, 3]
              const w = widths[i % widths.length]
              const h = i % 7 === 0 ? 64 : i % 3 === 0 ? 56 : 48
              return (
                <div
                  key={i}
                  style={{ width: w, height: h, backgroundColor: i % 2 === 0 ? '#000' : 'transparent' }}
                />
              )
            })}
          </div>
          <div className="text-black text-xs font-mono text-center mt-1 tracking-[0.3em]">
            2ATM-DISC-15
          </div>
        </div>
        <p className="text-xs text-[var(--mo-light)]/60 max-w-sm leading-relaxed">
          * Скидка действует только при предъявлении штрих-кода в мастерской «Две атмосферы».
          Скидка распространяется исключительно на работы по шиномонтажу.
          Для получения скидки необходимо предъявить документ, подтверждающий статус военнослужащего.
        </p>
      </div>
    ),
  },
]
