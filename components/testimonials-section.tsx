import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Artist",
    avatar: "/professional-woman.png",
    content:
      "Nano Banana has completely transformed my workflow. The quality and consistency are unmatched. I can create variations in minutes that would have taken hours before.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    avatar: "/professional-man.png",
    content:
      "The natural language processing is incredible. I just describe what I want and it delivers exactly that. This is the future of image editing.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Content Creator",
    avatar: "/woman-creator.png",
    content:
      "As someone who creates content daily, this tool is a game-changer. The speed and quality allow me to experiment with so many more creative ideas.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Marketing Manager",
    avatar: "/business-man.png",
    content:
      "We use Nano Banana for all our marketing visuals now. The consistency in character editing is perfect for brand campaigns across multiple images.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Photographer",
    avatar: "/woman-photographer.png",
    content:
      "The scene preservation while making edits is phenomenal. I can enhance my photos in ways I never thought possible without losing the original essence.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Product Designer",
    avatar: "/man-designer.png",
    content:
      "The multi-image support is fantastic for creating product variations. Nano Banana saves us countless hours in the design iteration process.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-banana-primary mb-3 uppercase tracking-wide">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Loved by Creators</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See what professionals are saying about their experience with Nano Banana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-banana-primary text-banana-primary" />
                ))}
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
