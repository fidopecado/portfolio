import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Gambling Promotion Classification with IBM Granite — Case Study",
  description:
    "Research and benchmarking on detecting Indonesian online gambling promotional spam in YouTube comments using LLM prompting and IBM Granite 3.2.",
};

export default function GamblingClassificationCaseStudy() {
  const stack = ["Python", "IBM Granite 3.2", "LLM Prompting", "NLP", "Pandas", "Scikit-Learn", "Kaggle Dataset"];

  const largeScaleResults = [
    { n: "2,222", accuracy: "88.16%" },
    { n: "4,443", accuracy: "88.66%" },
    { n: "6,664", accuracy: "88.97%" },
    { n: "8,884", accuracy: "88.65%" },
  ];

  const promptComparison = [
    { model: "Deepseek V3", baseline: "90.00%", final: "96.67%", delta: "+6.67%" },
    { model: "Kimi K2", baseline: "86.67%", final: "96.67%", delta: "+10.00%" },
    { model: "Qwen 3", baseline: "90.00%", final: "96.67%", delta: "+6.67%" },
    { model: "IBM Granite 3.2 Instruct", baseline: "73.33%", final: "96.67%", delta: "+23.34%" },
    { model: "Claude 4 Sonnet", baseline: "90.00%", final: "93.33%", delta: "+3.33%" },
    { model: "GPT-5", baseline: "93.33%", final: "93.33%", delta: "0.00%" },
    { model: "IBM Granite 3.3", baseline: "73.33%", final: "43.33%", delta: "-30.00%" },
  ];

  return (
    <div className="paper-noise min-h-screen pb-24">
      {/* Top Bar */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/#work"
            className="font-mono text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to Selected Work
          </Link>
          <Badge variant="outline" className="font-mono text-[0.65rem] uppercase tracking-wider">
            Research Case Study
          </Badge>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-12 sm:px-8">
        {/* Header Section */}
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            LLM-Based NLP Research & Benchmarking
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Deteksi Komentar Judi Online pada YouTube (ID) dengan LLM IBM Granite
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Klasifikasi otomatis komentar YouTube berbahasa Indonesia untuk mendeteksi spam promosi judi online terselubung menggunakan teknik <strong>Few-Shot LLM Prompting</strong> dan <strong>Glossarium Leksikal Lokal</strong>.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((item) => (
              <Badge key={item} variant="secondary" className="font-mono text-[0.7rem]">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            01. Project Overview & Problem Statement
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Tantangan Moderasi</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Promosi judi online di kolom komentar YouTube Indonesia berkembang pesat dengan memanfaatkan variasi ejaan, gaul, leksikon terselubung (obfuscation), dan kombinasi angka-huruf.
                </p>
                <p>
                  Filter kata kunci tradisional (string matching) sering gagal menangkap manipulasi kata seperti <em>&quot;sgi88&quot;</em>, <em>&quot;weton88&quot;</em>, <em>&quot;sketer&quot;</em>, atau <em>&quot;maxwin&quot;</em>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Pendekatan Solution</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Menggunakan Large Language Model (LLM) seperti <strong>IBM Granite 3.2 8B Instruct</strong> tanpa <em>fine-tuning</em> berat, hanya melalui formulasi <strong>Prompt Engineering</strong> berstruktur khusus.
                </p>
                <p>
                  Menyusun glossarium istilah judi lokal serta <em>counter-glossary</em> untuk menekan angka False Positive (FP) dan False Negative (FN).
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* EDA Highlights */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            02. Exploratory Data Analysis (EDA) Highlights
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Analisis terhadap dataset Kaggle <em>Judionline (yaemico)</em> menunjukkan pola penyebaran komentar judi online yang sangat terkonsentrasi pada segmen konten tertentu.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border overflow-hidden">
              <div className="relative aspect-video w-full bg-muted">
                <Image
                  src="/projects/gambling-classification/Top10Channel.png"
                  alt="Top 10 Channels Targeted by Gambling Comments"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <CardContent className="p-4 text-xs text-muted-foreground">
                <strong className="text-foreground">Top 10 Channel Terpengaruh:</strong> Mayoritas komentar judi online mengincar channel bergenre <strong>Otomotif, Gadget, & Elektronik</strong> (e.g., Fitra Eri, Motomobi, GadgetIn).
              </CardContent>
            </Card>

            <Card className="border-border overflow-hidden">
              <div className="relative aspect-video w-full bg-muted">
                <Image
                  src="/projects/gambling-classification/Wordcloud.png"
                  alt="Wordcloud of Indonesian Gambling Spam Comments"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <CardContent className="p-4 text-xs text-muted-foreground">
                <strong className="text-foreground">Leksikon Spam Berulang:</strong> Istilah seperti <em>alexis17, weton88, maxwin, wd, slot, gacor, sketer</em> mendominasi dengan obfuscation karakter.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Methodology & Prompting */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            03. Prompt Engineering Methodology
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Eksperimen membandingkan performa inferensi antara <strong>Prompt Baseline (Awal)</strong> yang berinstruksi sederhana dengan <strong>Prompt Refined (Final)</strong> yang dilengkapi Few-Shot learning & Glossarium.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-sm font-mono uppercase text-muted-foreground">Prompt Awal (Baseline)</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <pre className="text-xs font-mono whitespace-pre-wrap leading-relaxed text-muted-foreground bg-muted/20 p-3 rounded border">
{`Tugas: Klasifikasikan komentar berikut apakah termasuk promosi judi online atau tidak.
Komentar: "{komentar_disini}"

Apakah komentar di atas merupakan promosi judi online? (Jawab hanya dengan 'ya' atau 'tidak')
Jawaban:`}
                </pre>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-sm font-mono uppercase text-foreground">Prompt Final (Few-Shot + Glossarium)</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <pre className="text-xs font-mono whitespace-pre-wrap leading-relaxed text-muted-foreground bg-muted/20 p-3 rounded border max-h-64 overflow-y-auto">
{`Peran Anda: Analis ahli deteksi promosi judi online di komentar YouTube.

== GLOSARIUM ISTILAH JUDI ==
- jp / jepe: jackpot / kemenangan besar
- wd: withdraw / penarikan dana
- gacor / gacir: situs sering memberi menang
- rtp: persentase teoretis kemenangan
- alexis17, sgi88, weton88: nama situs judi
- slot, sketer: istilah game slot
- cuan, rezeki, untung, maxwin: istilah finansial

== CONTOH-CONTOH KASUS (FEW-SHOT) ==
[Contoh Negatif 1] Komentar: "{neg_ex_1}" -> Jawaban: tidak
[Contoh Positif 1] Komentar: "{pos_ex_1}" -> Jawaban: ya
... (5 pasang contoh positif & negatif)

== TUGAS ANDA ==
Jawab HANYA dengan "ya" atau "tidak".
Komentar: "{komentar_baru}"
Jawaban:`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Results */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            04. Benchmark & Experimental Results
          </h2>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">A. IBM Granite 3.2 Instruct — Large Scale Evaluation (N = 8,884)</h3>
            <p className="text-sm text-muted-foreground">
              Evaluasi inferensi skala besar tanpa <em>retraining</em> menunjukkan tingkat akurasi yang konsisten dan stabil di kisaran ~88-89%.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-mono border border-border">
                <thead className="bg-muted text-muted-foreground uppercase text-[0.7rem] tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-border">N Samples Test</th>
                    <th className="p-3 border-b border-border">Akurasi (%)</th>
                    <th className="p-3 border-b border-border">Status Evaluation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {largeScaleResults.map((row) => (
                    <tr key={row.n} className="hover:bg-muted/10">
                      <td className="p-3">{row.n} Komentar</td>
                      <td className="p-3 font-semibold text-foreground">{row.accuracy}</td>
                      <td className="p-3 text-muted-foreground">Consistent (~88.5%)</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-medium">B. Perbandingan Performa Lintas Model (N = 30 Prompt Impact Test)</h3>
            <p className="text-sm text-muted-foreground">
              Efek signifikan dari formulasi Prompt Refined (Few-Shot + Glossarium) terhadap peningkatan akurasi di berbagai model open-source dan proprietary.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-mono border border-border">
                <thead className="bg-muted text-muted-foreground uppercase text-[0.7rem] tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-border">Model Name</th>
                    <th className="p-3 border-b border-border">Prompt Awal</th>
                    <th className="p-3 border-b border-border">Prompt Final</th>
                    <th className="p-3 border-b border-border">Accuracy Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {promptComparison.map((row) => (
                    <tr key={row.model} className={row.model.includes("IBM Granite 3.2") ? "bg-accent/10 font-bold" : ""}>
                      <td className="p-3">{row.model}</td>
                      <td className="p-3 text-muted-foreground">{row.baseline}</td>
                      <td className="p-3 text-foreground">{row.final}</td>
                      <td className={`p-3 ${row.delta.startsWith("+") ? "text-emerald-600 dark:text-emerald-400" : row.delta.startsWith("-") ? "text-rose-600 dark:text-rose-400" : "text-muted-foreground"}`}>
                        {row.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Confusion Matrix Showcase */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            05. Confusion Matrix Visualizations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="border-border p-3 text-center space-y-2">
              <div className="relative aspect-square w-full bg-muted rounded">
                <Image
                  src="/projects/gambling-classification/ConfusionMatrix - Prompt Refined - IBMGranite3.2 - Accuracy 88.65 - Data Test 8884 .png"
                  alt="IBM Granite 3.2 8884 test set confusion matrix"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground">IBM Granite 3.2 (N=8884, Acc: 88.65%)</p>
            </Card>

            <Card className="border-border p-3 text-center space-y-2">
              <div className="relative aspect-square w-full bg-muted rounded">
                <Image
                  src="/projects/gambling-classification/ConfusionMatrix - Prompt Refined - DeepseekV3 - Accuracy 96.67 - Data Training 30 .png"
                  alt="Deepseek V3 confusion matrix"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground">Deepseek V3 (Acc: 96.67%)</p>
            </Card>

            <Card className="border-border p-3 text-center space-y-2">
              <div className="relative aspect-square w-full bg-muted rounded">
                <Image
                  src="/projects/gambling-classification/ConfusionMatrix - Prompt Refined - Qwen3 - Accuracy 96.67 - Data Training 30 .png"
                  alt="Qwen 3 confusion matrix"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground">Qwen 3 (Acc: 96.67%)</p>
            </Card>
          </div>
        </section>

        {/* Dataset & Reference Footer */}
        <footer className="mt-20 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <div>
            Dataset Source: <a href="https://www.kaggle.com/datasets/yaemico/judionline" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Kaggle - Judionline (yaemico)</a>
          </div>
          <Link href="/#work" className="hover:text-foreground underline">
            Return to Main Portfolio Work Section
          </Link>
        </footer>
      </main>
    </div>
  );
}

