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

    // Handle window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
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
        <section className="py-20 bg-green-900/10">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold text-zinc-300 text-center mb-12">{`> KEY_FEATURES`}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="relative">
                                <div
                                    className={`border ${activeFeature === index ? 'border-green-500' : 'border-zinc-800'} p-4 cursor-pointer transition-colors duration-300`}
                                    onClick={() => handleFeatureClick(index)}
                                    onMouseEnter={() => handleFeatureClick(index)}
                                >
                                    <div className="flex items-center space-x-3">
                                        <feature.icon className="w-6 h-6 text-green-500" />
                                        <h3 className="text-sm font-semibold text-zinc-300">{feature.title}</h3>
                                    </div>
                                    <p className="text-xs text-zinc-500 mt-2">{feature.description}</p>
                                </div>

                                {/* Mobile expanded view */}
                                {isMobile && expandedFeature === index && (
                                    <div className="border border-zinc-800 p-4 mt-2 bg-zinc-900/50">
                                        <pre className="text-green-400 mb-4 font-mono text-xs whitespace-pre">
                                            {feature.ascii}
                                        </pre>
                                        <div className="text-green-400 text-xl mb-4">{feature.title}</div>
                                        <p className="text-zinc-400 text-sm">{feature.detail}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop feature highlight - only shown on non-mobile */}
                    {!isMobile && (
                        <div className="border border-zinc-800 p-6 h-full flex flex-col justify-center bg-zinc-900/50">
                            <h4 className="text-sm font-semibold text-zinc-300 mb-4">{`> FEATURE_HIGHLIGHT`}</h4>
                            <pre className="text-green-400 mb-4 font-mono text-xs whitespace-pre">
                                {features[activeFeature].ascii}
                            </pre>
                            <div className="text-green-400 text-2xl mb-4">{features[activeFeature].title}</div>
                            <p className="text-zinc-400 mb-4">{features[activeFeature].detail}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
