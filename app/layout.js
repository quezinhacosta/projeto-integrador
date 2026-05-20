import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Viva Mais Seguros",
  description: "Proteção inteligente para você, sua família e sua empresa. Corretora com 28 anos de mercado.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vivamais-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`
          }}
        />
        {children}
        <div className="aiNotice">
          As imagens utilizadas neste site foram geradas por inteligência artificial.
        </div>
      </body>
    </html>
  );
}
