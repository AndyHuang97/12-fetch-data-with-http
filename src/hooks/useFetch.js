import { useState, useEffect } from "react";

export function useFetch(fetchFunction, initialData) {

    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialData);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFunction();
                setFetchedData(data);
            } catch (error) {
                setError({
                    message:
                        error.message || "Could not fetch data, please try again later",
                });
            }
            setIsFetching(false);
        }

        fetchData();
    }, [fetchFunction]);

    return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
    };
}