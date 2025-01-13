"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
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
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps'
    })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return

        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)

        return () => {
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="relative px-4 md:px-0">
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
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
                    
                    <Carousel ref={emblaRef} className="w-full">
                        <CarouselContent>
                            {screenshots.map((screenshot, index) => (
                                <CarouselItem key={index} className="pr-4 md:basis-2/3 lg:basis-1/2">
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
                        <CarouselPrevious className="hidden md:flex left-0 md:-left-12 border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200 backdrop-blur-sm">
                            <ChevronLeft className="h-4 w-4" />
                        </CarouselPrevious>
                        <CarouselNext className="hidden md:flex right-0 md:-right-12 border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200 backdrop-blur-sm">
                            <ChevronRight className="h-4 w-4" />
                        </CarouselNext>
                    </Carousel>

                    {/* Mobile Indicator */}
                    <div className="flex justify-center mt-4 md:hidden">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full mx-1 transition-colors duration-300 ${
                                    index === selectedIndex ? 'bg-green-500' : 'bg-zinc-600'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </div>
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


