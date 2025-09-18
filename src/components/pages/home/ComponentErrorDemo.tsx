"use client"
import { Card } from "@/components/shared/Card";
import { useState } from "react";

export default function ComponentErrorDemo() {
    const [showComponentError, setShowComponentError] = useState(false)
    const ErrorThrowingComponent = () => {
        if (showComponentError) {
            throw new Error("This is an intentional component error for demonstration purposes")
        }
        return <p className="text-green-600">Component is working normally</p>
    }
    return (
        <Card>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Component Error Demo</h3>
                    <p className="text-sm text-gray-600">Simulate component rendering errors</p>
                </div>
                <button
                    onClick={() => setShowComponentError(true)}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus:ring-offset-2"
                >
                    Trigger Component Error
                </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
                <ErrorThrowingComponent />
            </div>
        </Card >
    )
}
