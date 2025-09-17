import { Card } from "@/components/shared/Card";

export default function ChartState() {
    return (
        <section aria-labelledby="chart-heading" className="mt-6 sm:mt-8">
            <Card>
                <h3 id="chart-heading" className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Activity Chart
                </h3>
                <div
                    className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end justify-center space-x-1 sm:space-x-2 p-4"
                    role="img"
                    aria-label="Bar chart showing weekly activity with 6 bars of different heights"
                >
                    <div className="w-6 sm:w-8 bg-primary rounded-t animate-grow-1" style={{ height: '60%' }} aria-label="Day 1: 60% activity"></div>
                    <div className="w-6 sm:w-8 bg-blue-400 rounded-t animate-grow-2" style={{ height: '80%' }} aria-label="Day 2: 80% activity"></div>
                    <div className="w-6 sm:w-8 bg-blue-600 rounded-t animate-grow-3" style={{ height: '45%' }} aria-label="Day 3: 45% activity"></div>
                    <div className="w-6 sm:w-8 bg-primary rounded-t animate-grow-4" style={{ height: '70%' }} aria-label="Day 4: 70% activity"></div>
                    <div className="w-6 sm:w-8 bg-blue-400 rounded-t animate-grow-5" style={{ height: '90%' }} aria-label="Day 5: 90% activity"></div>
                    <div className="w-6 sm:w-8 bg-blue-600 rounded-t animate-grow-6" style={{ height: '55%' }} aria-label="Day 6: 55% activity"></div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-2">
                    Weekly activity overview
                </div>
            </Card>
        </section>
    )
}
