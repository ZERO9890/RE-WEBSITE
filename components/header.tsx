"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

interface HeaderProps {
  onFilterChange: (filter: "all" | "new" | "vintage") => void
  currentFilter: "all" | "new" | "vintage"
}

export function Header({ onFilterChange, currentFilter }: HeaderProps) {
  const scrollToModels = () => {
    const modelsSection = document.getElementById("models-section")
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getFilterLabel = () => {
    switch (currentFilter) {
      case "new":
        return "New Models"
      case "vintage":
        return "Vintage Models"
      default:
        return "All Models"
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong glow-subtle">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start space-y-1">
            <div className="w-48 h-16 flex items-center justify-start">
              <Image
                src="/royal-enfield-logo.svg"
                alt="Royal Enfield Logo"
                width={180}
                height={48}
                className="h-12 w-auto text-red-500"
              />
            </div>
            <p className="text-xs text-muted-foreground font-medium tracking-wider">Since 1955</p>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="btn-glass bg-transparent">
                  {getFilterLabel()}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-strong">
                <DropdownMenuItem onClick={() => onFilterChange("all")}>All Models</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onFilterChange("new")}>New Models (2000+)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onFilterChange("vintage")}>
                  Vintage Models (1955-1999)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={scrollToModels}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-red btn-glass"
            >
              Explore Models
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
