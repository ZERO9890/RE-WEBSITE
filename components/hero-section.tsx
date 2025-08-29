"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToModels = () => {
    const modelsSection = document.querySelector("#models-section")
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/royal-enfield-mountain-road.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-6 flex justify-center">
          <div className="relative p-6">
            <Image
              src="/royal-enfield-logo-new.avif"
              alt="Royal Enfield"
              width={400}
              height={160}
              className="filter sepia saturate-150 hue-rotate-15 brightness-110"
              priority
            />
          </div>
        </div>
        <div className="mb-8 flex justify-center">
          <Image
            src="/old-school-logo-outline.png"
            alt="Old School"
            width={400}
            height={120}
            className="filter sepia saturate-200 hue-rotate-15 brightness-150 drop-shadow-lg"
          />
        </div>
        <div className="relative z-30 mt-6 pt-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg shadow-2xl"
            onClick={scrollToModels}
          >
            Explore Models
          </Button>
        </div>
      </div>
    </section>
  )
}
