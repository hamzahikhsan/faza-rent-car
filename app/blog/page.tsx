import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips rental mobil, panduan berkendara di Cikarang, dan info terbaru dari FAZA Rent Car.",
};

const ARTICLES = [
  {
    slug: "tips-sewa-mobil-cikarang",
    judul: "5 Tips Menyewa Mobil di Cikarang Agar Tidak Rugi",
    ringkasan: "Sebelum menyewa, ketahui tips penting ini agar pengalaman rental Anda mulus dan hemat.",
    tanggal: "1 Juni 2025",
    kategori: "Tips",
  },
  {
    slug: "perbedaan-lepas-kunci-dengan-driver",
    judul: "Perbedaan Rental Lepas Kunci vs Dengan Driver",
    ringkasan: "Bingung memilih antara lepas kunci atau dengan driver? Simak kelebihan dan kekurangan masing-masing.",
    tanggal: "15 Mei 2025",
    kategori: "Panduan",
  },
  {
    slug: "wisata-cikarang-bekasi",
    judul: "Rekomendasi Destinasi Wisata dari Cikarang & Bekasi",
    ringkasan: "Mau liburan tapi bingung mau ke mana? Ini 7 destinasi menarik yang bisa Anda kunjungi dari Cikarang.",
    tanggal: "1 Mei 2025",
    kategori: "Wisata",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface-100">
      <div className="bg-ink-900 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold mb-2">Blog & Artikel</h1>
          <p className="text-white/60">Tips, panduan, dan informasi seputar rental kendaraan</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block bg-white rounded-2xl border border-line-200 overflow-hidden hover:shadow-card-hover transition-shadow">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <span className="text-5xl">📰</span>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">{article.kategori}</span>
                <h2 className="text-base font-bold text-ink-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors leading-snug">{article.judul}</h2>
                <p className="text-sm text-ink-500 line-clamp-2 mb-3">{article.ringkasan}</p>
                <div className="flex items-center justify-between text-xs text-ink-500">
                  <span className="flex items-center gap-1"><Calendar size={12} />{article.tanggal}</span>
                  <span className="flex items-center gap-1 text-blue-600 font-medium">Baca <ArrowRight size={12} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
