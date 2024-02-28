import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null
}

export default function useFetch<T>(url: RequestInfo | URL, options?: RequestInit): FetchState<any> {
  const [data, setData] = React.useState<T | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const optionsRef = React.useRef(options)
  optionsRef.current = options

  React.useEffect(() => {
    setLoading(true)
    setError(null)
    setData(null)

    const controller = new AbortController()
    const { signal } = controller

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal, ...optionsRef.current })
        if (!response.ok) throw new Error(`Erro de API ${response.status}`)

        const json = await response.json() as T
        !signal.aborted && setData(json)
      } catch (err) {
        if (err instanceof Error && !signal.aborted) setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()

    return () => { controller.abort() }
  }, [url])



  return {
    data: data,
    error: error,
    loading: loading
  }
}