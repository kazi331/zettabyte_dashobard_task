
export default function ErrorMessage({ message, onRetry }: { message: string; onRetry?: () => void }) {
    return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 mb-2">Error: {message}</p>
            {onRetry && (<button
                type="button"
                onClick={onRetry}
                className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
                Retry
            </button>)}
        </div>
    )
}
