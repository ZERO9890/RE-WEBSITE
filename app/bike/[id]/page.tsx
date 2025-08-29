"use client"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"

const royalEnfieldBikes = [
  {
    id: 1,
    name: "Classic 350",
    image: "/black-vintage-royal-enfield.png",
    engine: "Single Cylinder, 4-Stroke, Air-Oil Cooled",
    displacement: "349cc",
    torque: "27 Nm @ 4000 rpm",
    power: "20.2 bhp @ 6100 rpm",
    topSpeed: "104 km/h",
    mileage: "35-40 kmpl",
    fuelCapacity: "13 L",
    weight: "195 kg",
    price: "₹1,93,000",
    description: "The timeless Classic 350 embodies Royal Enfield's heritage with modern reliability.",
    thoughtfulDescription:
      "Born from decades of refinement, the Classic 350 whispers tales of endless highways and weekend adventures. Its chrome gleams with the promise of freedom, while the refined J-series engine delivers reliability that matches your wanderlust. This isn't just a motorcycle; it's your passport to discovering the soul of motorcycling.",
    features: ["Electric Start", "Dual Channel ABS", "Tripper Navigation Ready"],
    colors: ["Stealth Black", "Chrome Black", "Dark Green", "Halcyon Black"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/classic-350/",
    year: 2023,
    category: "new",
    detailedSpecs: {
      engineType: "Single Cylinder, 4-Stroke, SOHC",
      cooling: "Air-Oil Cooled",
      bore: "70mm",
      stroke: "90.5mm",
      compressionRatio: "9.5:1",
      maxTorque: "27 Nm @ 4000 rpm",
      maxPower: "20.2 bhp @ 6100 rpm",
      transmission: "5-Speed Manual",
      clutch: "Wet Multi-plate",
      frontSuspension: "Telescopic, 130mm travel",
      rearSuspension: "Twin gas-charged shock absorbers",
      frontBrake: "300mm disc with dual-channel ABS",
      rearBrake: "270mm disc with dual-channel ABS",
      frontTyre: "90/90-19",
      rearTyre: "120/80-18",
      seatHeight: "805mm",
      groundClearance: "170mm",
      wheelbase: "1370mm",
    },
  },
  {
    id: 2,
    name: "Bullet 350",
    image: "/royal-enfield-classic-black.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "28 Nm @ 4000 rpm",
    power: "19.1 bhp @ 5250 rpm",
    topSpeed: "95 km/h",
    mileage: "37-42 kmpl",
    fuelCapacity: "13.5 L",
    weight: "192 kg",
    price: "₹1,48,000",
    description: "The iconic Bullet 350 - where it all began. Pure, authentic motorcycling.",
    thoughtfulDescription:
      "The heartbeat of Royal Enfield's legacy pulses through every revolution of the Bullet 350's engine. Stripped of pretense, adorned with purpose, it represents the purest form of motorcycling philosophy. Each ride becomes a meditation, each mile a testament to the enduring power of simplicity over complexity.",
    features: ["Kick Start", "Single Channel ABS", "Classic Styling"],
    colors: ["Onyx Black", "Regal Red", "Royal Blue"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/bullet-350/",
    year: 2023,
    category: "new",
  },
  {
    id: 3,
    name: "Himalayan",
    image: "/royal-enfield-himalayan-adventure.png",
    engine: "Single Cylinder, 4-Stroke, Air-Oil Cooled",
    displacement: "411cc",
    torque: "32 Nm @ 4250 rpm",
    power: "24.3 bhp @ 6500 rpm",
    topSpeed: "120 km/h",
    mileage: "30-35 kmpl",
    fuelCapacity: "15 L",
    weight: "199 kg",
    price: "₹2,16,000",
    description: "Built for adventure, the Himalayan conquers every terrain with confidence.",
    thoughtfulDescription:
      "Forged in the crucible of adventure, the Himalayan stands as your unwavering companion against nature's challenges. Its rugged spirit transforms ordinary roads into extraordinary journeys, while its purposeful design speaks the language of exploration. This machine doesn't just take you places; it takes you beyond your limits.",
    features: ["Long Travel Suspension", "Dual Purpose Tyres", "Compass & Tripper Pod"],
    colors: ["Granite Black", "Mirage Silver", "Pine Green", "Rock Red"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/himalayan/",
    year: 2023,
    category: "new",
  },
  {
    id: 4,
    name: "Continental GT 650",
    image: "/royal-enfield-continental-gt-650-cafe-racer.png",
    engine: "Parallel Twin, 4-Stroke, Air-Oil Cooled",
    displacement: "648cc",
    torque: "52 Nm @ 4000 rpm",
    power: "47 bhp @ 7250 rpm",
    topSpeed: "160 km/h",
    mileage: "25-30 kmpl",
    fuelCapacity: "12.5 L",
    weight: "198 kg",
    price: "₹3,05,000",
    description: "The Continental GT 650 - a modern cafe racer with classic soul.",
    thoughtfulDescription:
      "Sculpted by speed and refined by passion, the Continental GT 650 embodies the rebellious spirit of 1960s cafe racers. Its twin-cylinder symphony harmonizes with your racing heart, while the aggressive stance promises thrills that transcend generations. This is where vintage aesthetics meet contemporary performance in perfect rebellion.",
    features: ["Twin Cylinder Engine", "Clip-on Handlebars", "Pirelli Tyres"],
    colors: ["Ventura Storm", "British Racing Green", "Mister Clean", "Rocker Red"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/continental-gt-650/",
    year: 2023,
    category: "new",
  },
  {
    id: 5,
    name: "Interceptor 650",
    image: "/royal-enfield-interceptor-650-orange.png",
    engine: "Parallel Twin, 4-Stroke, Air-Oil Cooled",
    displacement: "648cc",
    torque: "52 Nm @ 4000 rpm",
    power: "47 bhp @ 7250 rpm",
    topSpeed: "160 km/h",
    mileage: "25-30 kmpl",
    fuelCapacity: "13.7 L",
    weight: "202 kg",
    price: "₹2,98,000",
    description: "The Interceptor 650 delivers twin-cylinder performance with timeless style.",
    thoughtfulDescription:
      "The Interceptor 650 bridges eras with effortless grace, channeling the golden age of British motorcycling into modern reality. Its parallel-twin engine sings ballads of power and refinement, while the comfortable ergonomics invite endless miles of pure riding pleasure. This is motorcycling poetry written in steel and chrome.",
    features: ["Twin Cylinder Engine", "Comfortable Riding Position", "Chrome Finish"],
    colors: ["Orange Crush", "Baker Express", "Ravishing Red", "Mark Three Black"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/interceptor-650/",
    year: 2023,
    category: "new",
  },
  {
    id: 6,
    name: "Meteor 350",
    image: "/royal-enfield-meteor-350-fireball-red.png",
    engine: "Single Cylinder, 4-Stroke, Air-Oil Cooled",
    displacement: "349cc",
    torque: "27 Nm @ 4000 rpm",
    power: "20.2 bhp @ 6100 rpm",
    topSpeed: "115 km/h",
    mileage: "36-41 kmpl",
    fuelCapacity: "15 L",
    weight: "191 kg",
    price: "₹2,01,000",
    description: "The Meteor 350 - your gateway to easy cruising and endless highways.",
    thoughtfulDescription:
      "Designed for dreamers and highway philosophers, the Meteor 350 transforms every journey into a meditation on motion. Its relaxed cruiser stance invites contemplation, while modern technology ensures your adventures remain connected yet serene. This machine understands that sometimes the destination is less important than the peace found along the way.",
    features: ["Tripper Navigation", "LED Lighting", "Comfortable Cruiser Ergonomics"],
    colors: ["Fireball", "Stellar", "Supernova"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/meteor-350/",
    year: 2023,
    category: "new",
  },
  {
    id: 7,
    name: "Standard 350 (2024)",
    image: "/royal-enfield-standard-350-2024.png",
    engine: "Single Cylinder, 4-Stroke, Air-Oil Cooled",
    displacement: "349cc",
    torque: "27 Nm @ 4000 rpm",
    power: "20.2 bhp @ 6100 rpm",
    topSpeed: "100 km/h",
    mileage: "35-40 kmpl",
    fuelCapacity: "13 L",
    weight: "185 kg",
    price: "₹1,69,000",
    description: "The latest 2024 Standard 350 with enhanced reliability and modern touches.",
    features: ["Electric Start", "Minimalist Design", "Improved Engine", "Single Channel ABS"],
    colors: ["Jet Black", "Forest Green", "Ash Grey"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2024,
    category: "new",
  },
  {
    id: 8,
    name: "Standard 350 (2023)",
    image: "/royal-enfield-black-side.png",
    engine: "Single Cylinder, 4-Stroke, Air-Oil Cooled",
    displacement: "349cc",
    torque: "27 Nm @ 4000 rpm",
    power: "20.2 bhp @ 6100 rpm",
    topSpeed: "100 km/h",
    mileage: "35-40 kmpl",
    fuelCapacity: "13 L",
    weight: "185 kg",
    price: "₹1,64,000",
    description: "The no-nonsense Standard 350 - pure motorcycling essence without frills.",
    features: ["Kick Start", "Minimalist Design", "Authentic Royal Enfield Experience"],
    colors: ["Jet Black", "Forest Green"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2023,
    category: "new",
  },
  {
    id: 9,
    name: "Standard 350 (2022)",
    image: "/royal-enfield-green-classic.png",
    engine: "Single Cylinder, 4-Stroke, Air-Oil Cooled",
    displacement: "349cc",
    torque: "27 Nm @ 4000 rpm",
    power: "20.2 bhp @ 6100 rpm",
    topSpeed: "100 km/h",
    mileage: "35-40 kmpl",
    fuelCapacity: "13 L",
    weight: "185 kg",
    price: "₹1,59,000",
    description: "The 2022 Standard 350 with refined engineering and classic appeal.",
    features: ["Improved Reliability", "Classic Styling", "Affordable Entry Point"],
    colors: ["Battle Green", "Jet Black"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2022,
    category: "new",
  },
  {
    id: 10,
    name: "Standard 350 (2021)",
    image: "/royal-enfield-standard-350-2021.png",
    engine: "Single Cylinder, 4-Stroke, Air-Oil Cooled",
    displacement: "349cc",
    torque: "27 Nm @ 4000 rpm",
    power: "20.2 bhp @ 6100 rpm",
    topSpeed: "98 km/h",
    mileage: "35-40 kmpl",
    fuelCapacity: "13 L",
    weight: "183 kg",
    price: "₹1,54,000",
    description: "The 2021 Standard 350 - first year of the new generation engine.",
    features: ["New Generation Engine", "Improved Fuel Efficiency", "Classic Design"],
    colors: ["Jet Black", "Battle Green"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2021,
    category: "new",
  },
  {
    id: 11,
    name: "Standard 350 (2020)",
    image: "/royal-enfield-standard-350-2020.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "28 Nm @ 4000 rpm",
    power: "19.1 bhp @ 5250 rpm",
    topSpeed: "95 km/h",
    mileage: "37-42 kmpl",
    fuelCapacity: "13.5 L",
    weight: "187 kg",
    price: "₹1,45,000",
    description: "The 2020 Standard 350 with the classic UCE engine and traditional styling.",
    features: ["UCE Engine", "Kick Start", "Traditional Royal Enfield Feel"],
    colors: ["Jet Black", "Regal Red"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2020,
    category: "new",
  },
  {
    id: 12,
    name: "Standard 350 (2019)",
    image: "/royal-enfield-standard-350-2019.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "28 Nm @ 4000 rpm",
    power: "19.1 bhp @ 5250 rpm",
    topSpeed: "95 km/h",
    mileage: "37-42 kmpl",
    fuelCapacity: "13.5 L",
    weight: "187 kg",
    price: "₹1,39,000",
    description: "The 2019 Standard 350 maintaining the authentic Bullet character.",
    features: ["Classic UCE Engine", "Simple Design", "Reliable Performance"],
    colors: ["Jet Black", "Forest Green"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2019,
    category: "new",
  },
  {
    id: 13,
    name: "Standard 350 (2018)",
    image: "/royal-enfield-standard-350-2018.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "28 Nm @ 4000 rpm",
    power: "19.1 bhp @ 5250 rpm",
    topSpeed: "95 km/h",
    mileage: "37-42 kmpl",
    fuelCapacity: "13.5 L",
    weight: "187 kg",
    price: "₹1,34,000",
    description: "The 2018 Standard 350 with improved build quality and reliability.",
    features: ["Enhanced Build Quality", "Classic Styling", "Proven UCE Engine"],
    colors: ["Jet Black", "Bullet Silver"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2018,
    category: "new",
  },
  {
    id: 14,
    name: "Standard 350 (2017)",
    image: "/royal-enfield-standard-350-2017.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "28 Nm @ 4000 rpm",
    power: "19.1 bhp @ 5250 rpm",
    topSpeed: "95 km/h",
    mileage: "37-42 kmpl",
    fuelCapacity: "13.5 L",
    weight: "187 kg",
    price: "₹1,29,000",
    description: "The 2017 Standard 350 continuing the legacy of simple, honest motorcycling.",
    features: ["Time-tested UCE Engine", "Minimalist Approach", "Affordable Classic"],
    colors: ["Jet Black", "Forest Green"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2017,
    category: "new",
  },
  {
    id: 15,
    name: "Standard 350 (2016)",
    image: "/royal-enfield-standard-350-2016.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "28 Nm @ 4000 rpm",
    power: "19.1 bhp @ 5250 rpm",
    topSpeed: "95 km/h",
    mileage: "37-42 kmpl",
    fuelCapacity: "13.5 L",
    weight: "187 kg",
    price: "₹1,24,000",
    description: "The 2016 Standard 350 with refined UCE engine and classic appeal.",
    features: ["Refined UCE Engine", "Classic Chrome", "Traditional Design"],
    colors: ["Jet Black", "Maroon"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2016,
    category: "new",
  },
  {
    id: 16,
    name: "Electra 350",
    image: "/royal-enfield-electra-350.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "28 Nm @ 4000 rpm",
    power: "19.8 bhp @ 5250 rpm",
    topSpeed: "95 km/h",
    mileage: "37-42 kmpl",
    fuelCapacity: "13.5 L",
    weight: "193 kg",
    price: "Heritage Model",
    description: "The Electra 350 - combining classic Bullet DNA with electric start convenience.",
    features: ["Electric Start", "Classic Chrome", "Heritage Styling"],
    colors: ["Royal Blue", "Maroon", "Black"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 2010,
    category: "new",
  },
  {
    id: 17,
    name: "Bullet 350 (1970)",
    image: "/royal-enfield-vintage-bullet-1970.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "25 Nm @ 3500 rpm",
    power: "18 bhp @ 5000 rpm",
    topSpeed: "85 km/h",
    mileage: "30-35 kmpl",
    fuelCapacity: "12 L",
    weight: "180 kg",
    price: "Classic Heritage",
    description: "The legendary 1970 Bullet - pure vintage motorcycling with authentic character.",
    features: ["Kick Start Only", "Cast Iron Engine", "Classic Chrome Finish"],
    colors: ["Black", "Maroon"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1970,
    category: "vintage",
  },
  {
    id: 18,
    name: "Bullet 350 (1980)",
    image: "/royal-enfield-vintage-bullet-1980.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "26 Nm @ 3800 rpm",
    power: "18.5 bhp @ 5100 rpm",
    topSpeed: "90 km/h",
    mileage: "32-37 kmpl",
    fuelCapacity: "12.5 L",
    weight: "185 kg",
    price: "Vintage Collection",
    description: "The 1980s Bullet with improved reliability while maintaining classic appeal.",
    features: ["Improved Carburetor", "Better Electrics", "Traditional Styling"],
    colors: ["Black", "Blue", "Maroon"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1980,
    category: "vintage",
  },
  {
    id: 19,
    name: "Bullet Diesel Taurus (1990)",
    image: "/royal-enfield-diesel-bullet-1990.png",
    engine: "Single Cylinder, 4-Stroke, Diesel",
    displacement: "325cc",
    torque: "15 Nm @ 2500 rpm",
    power: "6.5 bhp @ 3600 rpm",
    topSpeed: "65 km/h",
    mileage: "72-85 kmpl",
    fuelCapacity: "11 L",
    weight: "175 kg",
    price: "Rare Heritage",
    description: "The unique diesel Bullet Taurus - an engineering marvel with incredible fuel efficiency.",
    features: ["Diesel Engine", "Exceptional Mileage", "Unique Sound Character"],
    colors: ["Black", "Green"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1990,
    category: "vintage",
  },
  {
    id: 20,
    name: "Bullet 350 (1955)",
    image: "/royal-enfield-bullet-1955.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "346cc",
    torque: "22 Nm @ 3200 rpm",
    power: "16 bhp @ 4800 rpm",
    topSpeed: "75 km/h",
    mileage: "28-32 kmpl",
    fuelCapacity: "11 L",
    weight: "170 kg",
    price: "Heritage Classic",
    description: "The original 1955 Bullet - where the legend began with authentic British engineering.",
    features: ["Cast Iron Engine", "Kick Start Only", "Original British Design"],
    colors: ["Black", "Maroon"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1955,
    category: "vintage",
  },
  {
    id: 21,
    name: "Bullet 500 (1960)",
    image: "/royal-enfield-bullet-500-1960.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "499cc",
    torque: "35 Nm @ 3000 rpm",
    power: "22 bhp @ 4500 rpm",
    topSpeed: "95 km/h",
    mileage: "25-30 kmpl",
    fuelCapacity: "12 L",
    weight: "185 kg",
    price: "Vintage Legend",
    description: "The powerful 1960 Bullet 500 - more displacement, more character.",
    features: ["Larger Engine", "Chrome Tank", "Classic British Styling"],
    colors: ["Black", "Blue", "Green"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1960,
    category: "vintage",
  },
  {
    id: 22,
    name: "Crusader 250 (1965)",
    image: "/royal-enfield-crusader-250-1965.png",
    engine: "Single Cylinder, 2-Stroke",
    displacement: "248cc",
    torque: "18 Nm @ 4000 rpm",
    power: "15 bhp @ 5500 rpm",
    topSpeed: "85 km/h",
    mileage: "35-40 kmpl",
    fuelCapacity: "10 L",
    weight: "140 kg",
    price: "Rare Classic",
    description: "The sporty 1965 Crusader 250 - Royal Enfield's venture into 2-stroke performance.",
    features: ["2-Stroke Engine", "Lightweight", "Sport Styling"],
    colors: ["Red", "Black", "Silver"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1965,
    category: "vintage",
  },
  {
    id: 23,
    name: "Continental GT (1965)",
    image: "/royal-enfield-continental-gt-1965.png",
    engine: "Single Cylinder, 4-Stroke, Air Cooled",
    displacement: "248cc",
    torque: "20 Nm @ 4500 rpm",
    power: "21 bhp @ 7000 rpm",
    topSpeed: "105 km/h",
    mileage: "30-35 kmpl",
    fuelCapacity: "11 L",
    weight: "155 kg",
    price: "Cafe Racer Legend",
    description: "The original 1965 Continental GT - the first cafe racer from Royal Enfield.",
    features: ["Clip-on Handlebars", "Racing Position", "High Performance"],
    colors: ["Racing Green", "Black", "Silver"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1965,
    category: "vintage",
  },
  {
    id: 24,
    name: "Interceptor 750 (1969)",
    image: "/royal-enfield-interceptor-750-1969.png",
    engine: "Parallel Twin, 4-Stroke, Air Cooled",
    displacement: "736cc",
    torque: "55 Nm @ 4000 rpm",
    power: "58 bhp @ 6500 rpm",
    topSpeed: "185 km/h",
    mileage: "20-25 kmpl",
    fuelCapacity: "15 L",
    weight: "210 kg",
    price: "Ultimate Classic",
    description: "The legendary 1969 Interceptor 750 - Royal Enfield's most powerful vintage twin.",
    features: ["Twin Cylinder", "High Performance", "Racing Heritage"],
    colors: ["Blue", "Black", "Red"],
    originalSiteUrl: "https://www.royalenfield.com/in/en/motorcycles/",
    year: 1969,
    category: "vintage",
  },
]

export default function BikeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [filter, setFilter] = useState<"all" | "new" | "vintage">("all")

  const bikeId = Number.parseInt(params.id as string)
  const bike = royalEnfieldBikes.find((b) => b.id === bikeId)

  if (!bike) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Bike Not Found</h1>
          <Button onClick={() => router.push("/")} className="btn-glass">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background page-transition">
      <Header onFilterChange={setFilter} currentFilter={filter} />

      <div className="pt-32 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="mb-6 relative z-50 border-2 border-white/40 bg-black/30 backdrop-blur-md hover:bg-black/50 transition-all duration-300 rounded-lg px-6 py-2 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] glow-red-subtle"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collection
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 stagger-animation">
              <Card className="glass-strong card-glow overflow-hidden rounded-xl border-white/20">
                <div className="relative aspect-[4/3]">
                  <img
                    src={bike.image || "/placeholder.svg"}
                    alt={`${bike.name}`}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Card>

              <div className="text-center p-6 glass-strong rounded-xl border-white/20">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <img
                    src="/royal-enfield-logo.svg"
                    alt="Royal Enfield"
                    className="h-8 w-auto filter brightness-0 invert"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                    }}
                  />
                </div>
                <p className="text-sm text-muted-foreground italic">Made like gun goes like bullet</p>
              </div>
            </div>

            {/* Bike Details */}
            <div className="space-y-6 stagger-animation">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2 glow-subtle">{bike.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{bike.description}</p>
                {bike.thoughtfulDescription && (
                  <div className="mb-6 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                    <p className="text-foreground/90 italic leading-relaxed">{bike.thoughtfulDescription}</p>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary border-2 border-white/40 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.4)] glow-red-subtle">
                    {bike.price}
                  </span>
                  <Badge
                    variant={bike.category === "new" ? "default" : "secondary"}
                    className="btn-glass stagger-animation"
                  >
                    {bike.category === "new" ? "Current Model" : "Vintage Classic"}
                  </Badge>
                </div>
              </div>

              {/* Key Specifications */}
              <Card className="glass-strong card-glow rounded-xl border-white/20 stagger-animation">
                <CardHeader>
                  <CardTitle className="glow-subtle">Key Specifications</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-foreground">Engine:</span>
                    <p className="text-muted-foreground text-sm">{bike.engine}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Displacement:</span>
                    <p className="text-muted-foreground text-sm">{bike.displacement}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Power:</span>
                    <p className="text-muted-foreground text-sm">{bike.power}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Torque:</span>
                    <p className="text-muted-foreground text-sm">{bike.torque}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Top Speed:</span>
                    <p className="text-muted-foreground text-sm">{bike.topSpeed}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Mileage:</span>
                    <p className="text-muted-foreground text-sm">{bike.mileage}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Fuel Capacity:</span>
                    <p className="text-muted-foreground text-sm">{bike.fuelCapacity}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Weight:</span>
                    <p className="text-muted-foreground text-sm">{bike.weight}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="glass-strong card-glow rounded-xl border-white/20 stagger-animation">
                <CardHeader>
                  <CardTitle className="glow-subtle">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {bike.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="btn-glass stagger-animation">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Available Colors */}
              {bike.colors && bike.colors.length > 0 && (
                <Card className="glass-strong card-glow rounded-xl border-white/20 stagger-animation">
                  <CardHeader>
                    <CardTitle className="glow-subtle">Available Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {bike.colors.map((color, index) => (
                        <Badge key={index} variant="outline" className="btn-glass border-white/20 stagger-animation">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 stagger-animation">
                {bike.originalSiteUrl && (
                  <Button asChild className="flex-1 bg-primary hover:bg-primary/90 glow-red btn-glass">
                    <a
                      href={bike.originalSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Official Site
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          {bike.detailedSpecs && (
            <Card className="glass-strong card-glow mt-8 rounded-xl border-white/20 stagger-animation">
              <CardHeader>
                <CardTitle className="glow-subtle">Detailed Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Engine</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span>{bike.detailedSpecs.engineType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cooling:</span>
                        <span>{bike.detailedSpecs.cooling}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bore x Stroke:</span>
                        <span>
                          {bike.detailedSpecs.bore} x {bike.detailedSpecs.stroke}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compression:</span>
                        <span>{bike.detailedSpecs.compressionRatio}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Transmission</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Gearbox:</span>
                        <span>{bike.detailedSpecs.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Clutch:</span>
                        <span>{bike.detailedSpecs.clutch}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Chassis</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Front Suspension:</span>
                        <span>{bike.detailedSpecs.frontSuspension}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rear Suspension:</span>
                        <span>{bike.detailedSpecs.rearSuspension}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Wheelbase:</span>
                        <span>{bike.detailedSpecs.wheelbase}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
