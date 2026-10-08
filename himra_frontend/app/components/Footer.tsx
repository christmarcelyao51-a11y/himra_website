export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-20 text-zinc-600 text-xs tracking-widest uppercase font-mono">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-4">
          <span className="text-white font-black text-sm tracking-tighter">HIMRA [1X]</span>
          <span>© 2026</span>
        </div>
        <div className="flex space-x-8 text-[10px]">
          <a href="https://open.spotify.com/artist/39SBljHcUD66edvRmiRqlS" target="_blank" className="hover:text-white transition-colors">SPOTIFY</a>
          <a href="https://music.apple.com/fr/artist/himra/1197313464" target="_blank" className="hover:text-white transition-colors">APPLE MUSIC</a>
          <a href="#" className="hover:text-white transition-colors">MANAGEMENT</a>
        </div>
        <div className="text-[10px] text-zinc-700">
          DESIGNED FOR STAGIAIRE IT DEV ENV
        </div>
      </div>
    </footer>
  );
}