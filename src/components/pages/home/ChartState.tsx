import { Card } from "@/components/shared/Card";

export default function ChartState() {
    return (
        <section className="mt-6 sm:mt-8">
            <Card>
                <h3 id="chart-heading" className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Activity Chart
                </h3>
                <div
                    className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end justify-center space-x-1 sm:space-x-2 p-4"
                    role="img"
                >
                    <div className="w-6 sm:w-8 bg-primary rounded-t animate-grow-1" style={{ height: '60%' }}></div>
                    <div className="w-6 sm:w-8 bg-blue-400 rounded-t animate-grow-2" style={{ height: '80%' }}></div>
                    <div className="w-6 sm:w-8 bg-primary rounded-t animate-grow-3" style={{ height: '45%' }}></div>
                    <div className="w-6 sm:w-8 bg-primary rounded-t animate-grow-4" style={{ height: '70%' }}></div>
                    <div className="w-6 sm:w-8 bg-blue-400 rounded-t animate-grow-5" style={{ height: '90%' }}></div>
                    <div className="w-6 sm:w-8 bg-primary rounded-t animate-grow-6" style={{ height: '55%' }}></div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-2">
                    Weekly activity overview
                </div>
            </Card>
        </section>
    )
}
