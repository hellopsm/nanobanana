import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Nano Banana?",
    answer:
      "Nano Banana is an advanced AI image editing tool that allows you to transform any image using simple text prompts. Our model delivers consistent character editing and scene preservation that surpasses other AI models in the market.",
  },
  {
    question: "How does the image editing work?",
    answer:
      "Simply upload your image and describe the changes you want in natural language. Our AI model processes your prompt and generates a new version of the image with your requested modifications while preserving the original character and scene integrity.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "Nano Banana supports all common image formats including JPG, PNG, WebP, and HEIC. Maximum file size is 50MB per image. We recommend using high-resolution images for best results.",
  },
  {
    question: "Can I edit multiple images at once?",
    answer:
      "Yes! Nano Banana supports batch processing, allowing you to apply similar edits to multiple images simultaneously. This is perfect for maintaining consistency across a series of photos.",
  },
  {
    question: "How long does it take to generate an image?",
    answer:
      "Most image generations complete in under 10 seconds. Complex edits or higher resolution images may take slightly longer, but you will always see real-time progress updates.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! New users get 10 free credits to try Nano Banana. Each credit allows you to generate one image. After that, you can choose from our flexible pricing plans.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We take data privacy seriously. All uploaded images are encrypted in transit and at rest. We never use your images for model training without explicit permission, and you can delete your images at any time.",
  },
  {
    question: "What makes Nano Banana different from other AI image editors?",
    answer:
      "Nano Banana excels at consistent character editing and scene preservation. While other tools may change unintended aspects of your image, our model maintains the integrity of your original photo while applying only the edits you request.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-banana-primary mb-3 uppercase tracking-wide">FAQ</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h3>
          <p className="text-lg text-muted-foreground text-balance">Everything you need to know about Nano Banana</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
