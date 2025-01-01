"use client"

import * as React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const screenshots = [
    {
        src: "/dashboard.png",
        alt: "Staybase Dashboard",
        title: "> DASHBOARD_VIEW",
        description: "Complete overview of your customer retention metrics and actions."
    },
    {
        src: "/integration.png",
        alt: "Shopify Integration",
        title: "> INTEGRATION_VIEW",
        description: "Seamless Shopify integration with automatic data sync."
    },
    {
        src: "/customers.png",
        alt: "Customer List",
        title: "> CUSTOMERS_VIEW",
        description: "Detailed customer insights with risk analysis."
    },
    {
        src: "/campaigns.png",
        alt: "Campaign Performance",
        title: "> CAMPAIGNS_VIEW",
        description: "Track and optimize your retention campaigns."
    }
]

export default function Screenshots() {
    return (
        <section className="py-20 bg-green-900/10">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold text-zinc-300 text-center mb-4">{`> PREVIEW_MODE`}</h2>
                <p className="text-sm text-zinc-500 text-center mb-12 max-w-2xl mx-auto">
                    {`// This is an early preview of the Staybase interface.`}
                    <br />
                    {`// The final product will include additional features and improvements.`}
                </p>

                <Carousel className="max-w-7xl mx-auto">
                    <CarouselContent>
                        {screenshots.map((screenshot, index) => (
                            <CarouselItem key={index}>
                                <Card className="border-zinc-800 bg-zinc-900/50">
                                    <CardContent className="p-0">
                                        <div className="relative aspect-[16/9] overflow-hidden rounded">
                                            <Image
                                                src={screenshot.src}
                                                alt={screenshot.alt}
                                                fill
                                                className=""
                                                quality={100}
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-lg text-green-400 mb-2">{screenshot.title}</h3>
                                            <p className="text-sm text-zinc-500">{screenshot.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300" />
                    <CarouselNext className="border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300" />
                </Carousel>
            </div>
        </section>
    )
}


