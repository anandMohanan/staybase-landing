"use client"

import { useState, useEffect } from 'react'
import { BarChart3, Users, ShoppingCart, Zap, PieChart, Mail } from 'lucide-react'

const features = [
    {
        icon: BarChart3,
        title: "> CUSTOMER_ANALYTICS",
        description: "Risk scoring, profiles, behavior analysis.",
        detail: "Predict customer behavior with 94% accuracy using our advanced AI algorithms that analyze over 50+ data points including purchase history, browsing patterns, and engagement metrics. Our system automatically updates risk scores daily and alerts you to significant changes.",
        ascii: `
    📊 
   /|\\
  / | \\
 /  |  \\
/___|___\\
    `
    },
    {
        icon: ShoppingCart,
        title: "> SHOPIFY_INTEGRATION",
        description: "OAuth authentication, real-time sync.",
        detail: "Seamlessly connect your Shopify store and start analyzing data in under 5 minutes. Our platform syncs your historical data and maintains real-time updates for new orders, customer information, and product data. Compatible with all Shopify plans and supports multiple store connections.",
        ascii: `
   _____
  /     \\
 / SHOP  \\
/_________\\
   |   |
    `
    },
    {
        icon: PieChart,
        title: "> DASHBOARD",
        description: "Visualize metrics, risks, retention trends.",
        detail: "Get a bird's-eye view of your retention efforts with our intuitive, real-time dashboard. Track 15+ key metrics including customer lifetime value, churn risk distribution, and campaign ROI. Customize views with drag-and-drop widgets and export reports with one click.",
        ascii: `
    .---.
   /     \\
  |   |   |
   \\     /
    '---'
    `
    },
    {
        icon: Users,
        title: "> CUSTOMER_MANAGEMENT",
        description: "Detailed profiles, history, segmentation.",
        detail: "Segment your customers into 20+ pre-built categories or create custom segments using our powerful rules engine. Each profile includes purchase history, risk factors, engagement scores, and AI-powered recommendations for personalized retention strategies.",
        ascii: `


   _O_  _O_
  /|\\  /|\\
  / \\  / \\
    `
    },
    {
        icon: Zap,
        title: "> ACTION_CENTER",
        description: "Automated campaigns, re-engagement tools.",
        detail: "Automate up to 80% of your retention efforts with AI-powered campaigns. Create and launch targeted retention campaigns in minutes with our template library of 50+ proven strategies. Track campaign performance in real-time and let our AI optimize future campaigns based on results.",
        ascii: `
    /\\
   /  \\
  /____\\
    ||
    ||
    `
    },
    {
        icon: Mail,
        title: "> TEAM_COLLABORATION",
        description: "Multi-user access, shared insights.",
        detail: "Collaborate with unlimited team members and share insights in real-time. Set custom roles and permissions, create shared dashboards, and track team performance with detailed activity logs. Includes built-in commenting, task assignment, and notification systems.",
        ascii: `
   ___________
  |  _____    |
  | |     |   |
  | |_____|   |
  |___________|
    `
    }
]

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [expandedFeature, setExpandedFeature] = useState(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleFeatureClick = (index) => {
        if (isMobile) {
            setExpandedFeature(expandedFeature === index ? null : index);
        }
        setActiveFeature(index);
    };

    return (
        <div className="relative">
            <div className="absolute -top-10 left-0">
                <div className="text-sm text-green-500/80 ">{'> explore_features'}</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Feature List - Takes up 2 columns on desktop */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-lg border ${activeFeature === index ? 'border-green-500/50 bg-green-500/5' : 'border-zinc-800 bg-zinc-900/20'
                                } transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/[0.02]`}
                        >
                            <div
                                className="p-6 cursor-pointer h-full"
                                onClick={() => handleFeatureClick(index)}
                                onMouseEnter={() => !isMobile && setActiveFeature(index)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-green-500/20 transition-colors">
                                        <feature.icon className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-medium text-zinc-200 font-mono mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-zinc-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Expanded View */}
                                {isMobile && expandedFeature === index && (
                                    <div className="mt-4 pt-4 border-t border-zinc-800">
                                        <pre className="text-green-400 mb-4 text-xs whitespace-pre font-mono">
                                            {feature.ascii}
                                        </pre>
                                        <p className="text-sm text-zinc-300">{feature.detail}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Details - Takes up 1 column on desktop */}
                {!isMobile && (
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-center space-x-2 mb-6">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <h4 className="text-sm font-medium text-zinc-200 font-mono">
                                            {`> FEATURE_DETAILS`}
                                        </h4>
                                    </div>

                                    <pre className="text-green-400 mb-6 text-xs whitespace-pre font-mono bg-zinc-900/50 p-4 rounded-md border border-zinc-800">
                                        {features[activeFeature].ascii}
                                    </pre>

                                    <h3 className="text-lg font-medium text-green-500 font-mono mb-4">
                                        {features[activeFeature].title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-zinc-300">
                                        {features[activeFeature].detail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
