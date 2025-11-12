import { Card } from "@/components/ui/card"

const examples = [
  {
    title: "Portrait Enhancement",
    description: "Transform portraits with natural lighting and professional quality",
    prompt: "Add golden hour lighting, professional studio quality",
    image: "/professional-portrait-golden-hour.jpg",
  },
  {
    title: "Scene Transformation",
    description: "Change environments while preserving subject consistency",
    prompt: "Change background to futuristic cityscape at sunset",
    image: "/futuristic-city-sunset.jpg",
  },
  {
    title: "Style Transfer",
    description: "Apply artistic styles while maintaining character features",
    prompt: "Convert to watercolor painting style, vibrant colors",
    image: "/watercolor-painting-vibrant.jpg",
  },
  {
    title: "Object Addition",
    description: "Seamlessly add objects with natural integration",
    prompt: "Add floating balloons in the sky, colorful and playful",
    image: "/colorful-balloons-sky.jpg",
  },
  {
    title: "Weather Effects",
    description: "Add realistic weather conditions to any scene",
    prompt: "Add gentle snow falling, winter atmosphere",
    image: "/winter-snow-scene.png",
  },
  {
    title: "Time of Day",
    description: "Shift lighting conditions with natural results",
    prompt: "Change to night scene with city lights and stars",
    image: "/night-city-lights-stars.jpg",
  },
]

export function ExamplesSection() {
  return (
    <section id="examples" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-banana-primary mb-3 uppercase tracking-wide">Showcase</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">See What's Possible</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore stunning examples of AI-powered image transformations. From simple edits to complex scene changes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={example.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">{example.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{example.description}</p>
                <div className="bg-muted rounded-md p-3">
                  <p className="text-xs text-muted-foreground mb-1">Prompt:</p>
                  <p className="text-sm font-mono italic">"{example.prompt}"</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
