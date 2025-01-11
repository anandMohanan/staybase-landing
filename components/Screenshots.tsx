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
        <div className="relative">
            <div className="absolute -top-4 left-0">
                <div className="text-xs text-green-500/80">{'> preview_interface'}</div>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-200 font-mono mb-4">
                            {`> PREVIEW_MODE`}
                        </h2>
                        <div className="space-y-4">
                            <p className="text-sm text-zinc-400 font-mono">
                                {`// Early preview of the Staybase interface`}
                            </p>
                            <p className="text-sm text-zinc-500">
                                Experience our intuitive interface designed for maximum efficiency. 
                                Every pixel is crafted to help you make data-driven decisions faster.
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="border border-zinc-800 bg-zinc-900/50 rounded-lg p-6">
                            <div className="flex items-center space-x-2 text-zinc-400 text-sm font-mono">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>{`> INTERFACE_STATUS: BETA`}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
                    
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {screenshots.map((screenshot, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2">
                                    <Card className="border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-[16/9] overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent mix-blend-multiply z-10"></div>
                                                <Image
                                                    src={screenshot.src}
                                                    alt={screenshot.alt}
                                                    fill
                                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                                    quality={100}
                                                />
                                                <div className="absolute inset-0 ring-1 ring-inset ring-zinc-800/20"></div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center space-x-2 mb-3">
                                                    <div className="h-px flex-1 bg-zinc-800"></div>
                                                    <h3 className="text-sm font-medium text-green-400 font-mono">
                                                        {screenshot.title}
                                                    </h3>
                                                    <div className="h-px flex-1 bg-zinc-800"></div>
                                                </div>
                                                <p className="text-sm text-zinc-400 text-center">
                                                    {screenshot.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200 backdrop-blur-sm" />
                        <CarouselNext className="border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200 backdrop-blur-sm" />
                    </Carousel>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-mono text-zinc-500">
                    {screenshots.map((screenshot, index) => (
                        <div key={index} className="border border-zinc-800/50 bg-zinc-900/20 rounded p-3">
                            {screenshot.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
