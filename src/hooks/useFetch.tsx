"use client";

import { useCallback, useEffect, useState } from "react";

interface UseFetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useFetch<T>(
    url: string | null,
    immediate: boolean = true
): UseFetchState<T> & { refetch: () => void } {
    const [state, setState] = useState<UseFetchState<T>>({
        data: null,
        loading: immediate ? true : false,
        error: null,
    });

    const fetchData = useCallback(async () => {
        if (!url) return;

        setState((prev) => ({ ...prev, loading: true, error: null }));

        try {
            const response = await fetch(url);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`Resource not found (404): ${url}`);
                } else if (response.status >= 500) {
                    throw new Error(
                        `Server error (${response.status}): Please try again later`
                    );
                } else if (response.status >= 400) {
                    throw new Error(`Client error (${response.status}): Invalid request`);
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }
            const data = await response.json();
            setState({ data, loading: false, error: null });
        } catch (error) {
            let errorMessage = "An unexpected error occurred";

            if (error instanceof TypeError && error.message.includes("fetch")) {
                errorMessage = "Network error: Please check your internet connection";
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }

            setState({
                data: null,
                loading: false,
                error: errorMessage,
            });
        }
    }, [url]);

    useEffect(() => {
        if (immediate) {
            fetchData();
        }
    }, [url, immediate]);



    return { ...state, refetch: fetchData };
}
