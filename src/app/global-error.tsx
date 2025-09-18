'use client'
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    return (
        <html>
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                    <p className="text-lg font-semibold">Something went wrong!</p>
                    <p className="text-red-500 mt-4">{error.message}</p>
                    <button
                        className="text-sm text-primary border border-primary py-2 px-4 rounded cursor-pointer mt-4"
                        onClick={() => window.location.reload()}
                    >
                        Reload The page
                    </button>
                </div>
            </body>
        </html>
    )
}