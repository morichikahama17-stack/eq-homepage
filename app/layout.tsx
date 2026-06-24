import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: {
    default: "Essential Qualities | 才能ではなく、再現性を設計する。",
    template: "%s | Essential Qualities",
  },
  description:
    "身体操作を科学・力学・神経学の視点から分析し、個々に最適な解決策を提供する。Essential Qualitiesは「進化を設計できる存在」です。大阪市福島区のパーソナルトレーニングジム DAY ONE。",
  keywords: ["パーソナルトレーニング","野球","身体操作","Essential Qualities","DAY ONE","大阪","ドラフト","球速アップ","パフォーマンス向上"],
  authors: [{ name: "濱 盛力", url: "https://www.instagram.com/morichika_hama_eq" }],
  creator: "Essential Qualities",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Essential Qualities",
    title: "Essential Qualities | 才能ではなく、再現性を設計する。",
    description: "身体操作を科学・力学・神経学の視点から分析し、個々に最適な解決策を提供する。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Qualities | 才能ではなく、再現性を設計する。",
    description: "身体操作を科学・力学・神経学の視点から分析し、個々に最適な解決策を提供する。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full bg-black text-white antialiased overflow-x-hidden">
        <LoadingScreen />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
