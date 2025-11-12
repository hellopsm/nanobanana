"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Upload, ImageIcon } from "lucide-react"

export function EditorSection() {
  const [prompt, setPrompt] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section id="editor" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-banana-primary mb-3 uppercase tracking-wide">Get Started</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Try The AI Editor</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text
            commands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Prompt Engine Card */}
          <Card className="p-6 border-2 border-banana-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-banana-primary/10">
                <span className="text-xl">🍌</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Prompt Engine</h4>
                <p className="text-sm text-muted-foreground">Transform your image with AI-powered editing</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <span className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Reference Image
                  </span>
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-banana-primary/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {selectedImage ? (
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Uploaded"
                        className="max-h-40 mx-auto rounded-lg"
                      />
                    ) : (
                      <>
                        <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                        <p className="text-sm text-muted-foreground mb-1">Add Image</p>
                        <p className="text-xs text-muted-foreground">Max 50MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-base">😊</span>
                    Main Prompt
                  </span>
                </label>
                <Textarea
                  placeholder="A futuristic city powered by nano technology, golden hour lighting, ultra detailed..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button className="w-full bg-banana-primary hover:bg-banana-primary/90 text-white" size="lg">
                <span className="mr-2">⚡</span>
                Generate Now
              </Button>
            </div>
          </Card>

          {/* Output Gallery Card */}
          <Card className="p-6 border-2 border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Output Gallery</h4>
                <p className="text-sm text-muted-foreground">Your ultra-fast AI creations appear here instantly</p>
              </div>
            </div>

            <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg bg-muted/30">
              <div className="text-center">
                <ImageIcon className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-sm font-medium mb-1">Ready for instant generation</p>
                <p className="text-xs text-muted-foreground">Enter your prompt and unleash the power</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
