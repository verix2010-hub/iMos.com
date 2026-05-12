export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white font-sans overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 text-center">

        <div className="inline-block px-5 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-sm mb-8 backdrop-blur-md">
          Официальное VK сообщество
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tight">
          iMos.com
          <span className="block text-blue-400 mt-2">
            Технологии • Ремонт • Сообщество
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-zinc-300 text-lg md:text-2xl leading-relaxed mb-12">
          Современное сообщество о ремонте техники, пайке, электронике,
          ноутбуках, смартфонах и технологиях.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">

          <a
            href="href="https://vk.com/imos_com""
            target="_blank"
            className="px-10 py-5 rounded-2xl bg-blue-500 hover:bg-blue-400 transition-all hover:scale-105 text-lg font-bold shadow-2xl"
          >
            Подписаться VK
          </a>

          <a
            href="#features"
            className="px-10 py-5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all text-lg"
          >
            Возможности
          </a>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Что есть в сообществе
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Полезный контент, общение, новости техники и помощь по ремонту.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-blue-500/10 transition-all hover:-translate-y-2 shadow-xl">
            <div className="text-5xl mb-6">📰</div>
            <h3 className="text-2xl font-bold mb-4">Новости</h3>
            <p className="text-zinc-300 leading-relaxed">
              Свежие новости техники, электроники и мира ремонта устройств.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-cyan-500/10 transition-all hover:-translate-y-2 shadow-xl">
            <div className="text-5xl mb-6">💬</div>
            <h3 className="text-2xl font-bold mb-4">Общение</h3>
            <p className="text-zinc-300 leading-relaxed">
              Общение участников сообщества, помощь и обсуждения ремонта.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-violet-500/10 transition-all hover:-translate-y-2 shadow-xl">
            <div className="text-5xl mb-6">🎥</div>
            <h3 className="text-2xl font-bold mb-4">Контент</h3>
            <p className="text-zinc-300 leading-relaxed">
              Фото, видео, обзоры, пайка, диагностика и полезные инструкции.
            </p>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Галерея
          </h2>

          <p className="text-zinc-400 text-lg">
            Фото проектов, ремонта и техники
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="group aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-5xl hover:scale-105 transition-all shadow-2xl"
            >
              🔧
            </div>
          ))}

        </div>
      </section>

      {/* VK Embed Section */}
      <section className="relative max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Присоединяйся к сообществу
        </h2>

        <p className="text-zinc-300 text-xl mb-10 max-w-2xl mx-auto">
          Подписывайся на VK сообщество и следи за новыми публикациями,
          обзорами и ремонтами техники.
        </p>

        <a
          href="https://vk.com"
          target="_blank"
          className="inline-block px-12 py-5 rounded-2xl bg-blue-500 hover:bg-blue-400 transition-all hover:scale-105 text-xl font-bold shadow-2xl"
        >
          Открыть VK сообщество
        </a>

      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-10 backdrop-blur-md">

        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <div className="text-2xl font-black mb-2">iMos.com</div>
            <div className="text-zinc-400">
              Сайт сообщества • Работает на React + Vercel
            </div>
          </div>

          <div className="flex gap-4">

            <a
              href="https://vk.com"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 transition-all font-semibold"
            >
              VK
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all font-semibold"
            >
              GitHub
            </a>

          </div>

        </div>

      </footer>

    </div>
  )
}
