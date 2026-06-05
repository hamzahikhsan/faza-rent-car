import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildGeneralWaLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Artikel Blog" };

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="min-h-screen bg-surface-100">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft size={16} />
          Kembali ke Blog
        </Link>
        <div className="bg-white rounded-2xl border border-line-200 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">Artikel: {slug.replace(/-/g, " ")}</h1>
          <p className="text-ink-500 leading-relaxed">
            Konten artikel ini akan segera tersedia. Sementara itu, hubungi kami via WhatsApp untuk pertanyaan seputar rental.
          </p>
        </div>
        <div className="mt-6 text-center">
          <a href={buildGeneralWaLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg">
              <MessageCircle size={18} />
              Tanya via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
