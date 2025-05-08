import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-lg mx-auto pt-16 pb-20">
        <div className="flex flex-col items-center mb-16">
          <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-8 rotate-3 bg-white p-1 hover:rotate-6 transition-transform duration-300 relative">
            <Image
              src="/img/profile.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          <h1 className="text-4xl font-black mb-3 bg-yellow-400 px-6 py-2 rounded-xl border-3 border-black transform -rotate-1 hover:rotate-2 transition-transform duration-300 hover:scale-105">kydo</h1>
          
          <p className="text-center max-w-sm mb-6 bg-lime-200 px-6 py-3 rounded-lg border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-indigo-800 font-bold text-lg hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            I like to gaming and make something with code.
          </p>
          
          <div className="absolute top-20 right-20 w-14 h-14 bg-yellow-400 rounded-full border-3 border-black hidden md:block animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-teal-300 rounded-md rotate-12 border-3 border-black hidden md:block hover:rotate-45 transition-transform duration-500"></div>
        </div>

        <div className="flex flex-col gap-6">
          {[
            { title: "My Personal Website", url: "https://jecky.id", icon: "🌐", color: "bg-teal-400" },
            { title: "Instagram", url: "#", icon: "📸", color: "bg-rose-400" },
            { title: "Twitter", url: "https://x.com/METALHEAD666", icon: "🐦", color: "bg-sky-400" },
            { title: "YouTube Channel", url: "https://www.youtube.com/@88JC", icon: "📺", color: "bg-red-400" },
            { title: "Discord", url: "https://discord.jecky.id", icon: "💬", color: "bg-emerald-400" },
            { title: "Discord Bots", url: "https://top.gg/bot/913029521815502869", icon: "🤖", color: "bg-purple-400" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className={`${link.color} border-4 border-black rounded-xl p-6 flex items-center justify-between transform transition-all duration-200 hover:-translate-y-2 hover:brightness-110 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            >
              <span className="text-2xl font-extrabold">{link.title}</span>
              <span className="text-4xl">{link.icon}</span>
              <div className="absolute -left-3 top-1/2 w-5 h-5 rounded-full border-2 border-black bg-white transform -translate-y-1/2"></div>
            </a>
          ))}
        </div>

        <footer className="mt-20 text-center">
          <p className="inline-block bg-black text-white px-6 py-4 rounded-xl transform rotate-2 font-bold shadow-[5px_5px_0px_0px_rgba(255,255,255,0.4)] text-lg hover:rotate-0 transition-transform duration-300">
            Made with ❤️ by <a href="https://github.com/88JC" className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300">88JC</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
