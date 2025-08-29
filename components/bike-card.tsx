"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface Bike {
  id: number
  name: string
  image: string
  engine: string
  displacement: string
  torque: string
  power: string
  price: string
  description: string
  features: string[]
  topSpeed?: string
  mileage?: string
  fuelCapacity?: string
  weight?: string
  colors?: string[]
  originalSiteUrl?: string
}

interface BikeCardProps {
  bike: Bike
}

export function BikeCard({ bike }: BikeCardProps) {
  const router = useRouter()

  const handleViewDetails = () => {
    router.push(`/bike/${bike.id}`)
  }

  return (
    <Card className="glass-strong card-glow overflow-hidden border-2 border-white/30 rounded-xl glow-subtle w-full max-w-md mx-auto lg:max-w-none">
      <div className="aspect-[4/3] overflow-hidden cursor-pointer rounded-t-xl" onClick={handleViewDetails}>
        <img
          src={bike.image || "/placeholder.svg?height=300&width=400&query=Royal Enfield motorcycle"}
          alt={bike.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-t-xl"
        />
      </div>

      <CardHeader className="pb-4">
        <CardTitle
          className="text-xl font-bold cursor-pointer hover:text-primary transition-colors"
          onClick={handleViewDetails}
        >
          {bike.name}
        </CardTitle>
        <p className="text-muted-foreground text-sm font-medium leading-relaxed">{bike.description}</p>
      </CardHeader>

      <CardContent className="space-y-4 pb-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="font-semibold text-foreground">Engine:</span>
            <p className="text-muted-foreground text-xs">{bike.engine}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Displacement:</span>
            <p className="text-muted-foreground">{bike.displacement}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Power:</span>
            <p className="text-muted-foreground">{bike.power}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Torque:</span>
            <p className="text-muted-foreground">{bike.torque}</p>
          </div>
          {bike.topSpeed && (
            <div>
              <span className="font-semibold text-foreground">Top Speed:</span>
              <p className="text-muted-foreground">{bike.topSpeed}</p>
            </div>
          )}
          {bike.mileage && (
            <div>
              <span className="font-semibold text-foreground">Mileage:</span>
              <p className="text-muted-foreground">{bike.mileage}</p>
            </div>
          )}
          {bike.fuelCapacity && (
            <div>
              <span className="font-semibold text-foreground">Fuel Tank:</span>
              <p className="text-muted-foreground">{bike.fuelCapacity}</p>
            </div>
          )}
          {bike.weight && (
            <div>
              <span className="font-semibold text-foreground">Weight:</span>
              <p className="text-muted-foreground">{bike.weight}</p>
            </div>
          )}
        </div>

        <div>
          <span className="font-semibold text-foreground text-sm">Key Features:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {bike.features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs btn-glass">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {bike.colors && bike.colors.length > 0 && (
          <div>
            <span className="font-semibold text-foreground text-sm">Available Colors:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {bike.colors.map((color, index) => (
                <Badge key={index} variant="outline" className="text-xs btn-glass border-white/20">
                  {color}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6">
        <span className="text-2xl font-bold text-primary border-2 border-white/40 px-3 py-2 rounded-lg bg-black/30 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.3)] glow-red-subtle">
          {bike.price}
        </span>
        <Button
          variant="default"
          size="sm"
          onClick={handleViewDetails}
          className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red btn-glass border-0 w-full sm:w-auto"
        >
          <Eye className="w-3 h-3 mr-1" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
