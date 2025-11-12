import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative container py-20 md:py-32">
      {/* Decorative bananas */}
      <div className="absolute left-8 top-20 text-6xl opacity-50 animate-float">🍌</div>
      <div className="absolute right-8 top-20 text-6xl opacity-50 animate-float" style={{ animationDelay: "0.5s" }}>
        🍌
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-banana-primary/20 bg-banana-primary/5 px-4 py-2 text-sm">
          <span className="text-xl">🍌</span>
          <span className="text-banana-primary font-medium">The AI model that outperforms Flux Kontext.</span>
          <span className="text-banana-primary font-semibold">Try Now →</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-banana-primary via-banana-secondary to-banana-primary bg-clip-text text-transparent">
            Nano Banana
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
          editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-banana-primary hover:bg-banana-primary/90 text-white px-8">
            Start Editing
            <span className="ml-2">✨</span>
          </Button>
          <Button size="lg" variant="outline">
            View Examples
          </Button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            <span className="text-foreground/80">One-shot editing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="text-foreground/80">Multi-image support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🗣️</span>
            <span className="text-foreground/80">Natural language</span>
          </div>
        </div>
      </div>
    </section>
  )
}
