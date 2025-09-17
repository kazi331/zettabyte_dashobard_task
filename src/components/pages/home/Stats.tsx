import { Card } from "@/components/shared/Card";

export default function Stats() {
    return (
        <section aria-labelledby="stats-heading" className="mb-8 sm:mb-12">
            <h2 id="stats-heading" className="sr-only">Dashboard Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <Card className="text-center hover:scale-105 transition-transform">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 animate-pulse" aria-hidden="true">100</div>
                    <div className="text-gray-600 font-medium">Total Posts</div>
                    <div className="text-sm text-gray-500 mt-1">Available content</div>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 animate-bounce" aria-hidden="true">10</div>
                    <div className="text-gray-600 font-medium">Active Users</div>
                    <div className="text-sm text-gray-500 mt-1">Registered members</div>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2" aria-hidden="true">98%</div>
                    <div className="text-gray-600 font-medium">Uptime</div>
                    <div className="text-sm text-gray-500 mt-1">System reliability</div>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2" aria-hidden="true">24/7</div>
                    <div className="text-gray-600 font-medium">Support</div>
                    <div className="text-sm text-gray-500 mt-1">Always available</div>
                </Card>
            </div>
        </section>
    )
}
