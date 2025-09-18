"use client"
import { Card } from "@/components/shared/Card";
import ErrorMessage from "@/components/shared/ErrorMessage";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

export default function ErrorHandleDemo() {
    const [showErrorDemo, setShowErrorDemo] = useState(false);
    const { loading, error, refetch } = useFetch<unknown[]>(showErrorDemo ? 'https://jsonplaceholder.typicode.com/invalid-endpoint' : '');
    const handleErrorDemo = () => {
        setShowErrorDemo(true);
    };

    const handleResetDemo = () => {
        setShowErrorDemo(false);
    };
    return (
        <section className="mb-6 sm:mb-8 mt-6">
            <Card >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h2 id="error-demo-heading" className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                        Error Handling Demo
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-2">
                        {!showErrorDemo ? (
                            <button
                                onClick={handleErrorDemo}
                                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus:ring-offset-2"
                            >
                                Test Error Handling
                            </button>
                        ) : (
                            <button
                                onClick={handleResetDemo}
                                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus:ring-offset-2"
                            >
                                Reset Demo
                            </button>
                        )}
                    </div>
                </div>

                {showErrorDemo ? (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg" role="status" aria-live="polite">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                            Error Handling Demonstration
                        </h3>
                        <p className="text-yellow-700 text-sm mb-4">
                            This demonstrates how the application gracefully handles API errors.
                            Click the button above to trigger an intentional error by calling an invalid endpoint.
                        </p>

                        {loading && (
                            <div className="flex items-center gap-2 mb-4" role="status" aria-live="polite">
                                <LoadingSpinner size="sm" />
                                <span className="text-yellow-700 text-sm">
                                    Attempting to fetch from invalid endpoint...
                                </span>
                            </div>
                        )}

                        {error && (
                            <div role="alert" aria-live="assertive">
                                <ErrorMessage
                                    message={`Demonstration Error: ${error}`}
                                    onRetry={refetch}
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <p id="error-demo-description" className="text-gray-600">
                            Click the &ldquo;Test Error Handling&rdquo; button above to see how the application handles API errors gracefully.
                            This feature demonstrates proper error states, user feedback, and retry functionality.
                        </p>
                    </div>
                )}
            </Card>
        </section>
    )
}
