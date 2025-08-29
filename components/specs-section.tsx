import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SpecsSection() {
  const engineTypes = [
    {
      type: "Single Cylinder",
      description: "Classic thumper engine with distinctive character",
      models: ["Classic 350", "Bullet 350", "Himalayan", "Meteor 350"],
      features: ["Air-Oil Cooled", "4-Stroke", "SOHC", "2 Valves"],
    },
    {
      type: "Parallel Twin",
      description: "Smooth twin-cylinder performance with modern refinement",
      models: ["Continental GT 650", "Interceptor 650"],
      features: ["Air-Oil Cooled", "4-Stroke", "SOHC", "4 Valves"],
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Engine Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Royal Enfield engines are designed for reliability, character, and the pure joy of motorcycling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {engineTypes.map((engine, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{engine.type}</CardTitle>
                <p className="text-muted-foreground">{engine.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Available in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {engine.models.map((model, modelIndex) => (
                      <span key={modelIndex} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technical Features:</h4>
                  <ul className="space-y-1">
                    {engine.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground text-sm flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
