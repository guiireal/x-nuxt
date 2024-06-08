import type { UseFetchOptions } from "#app";

export function useApi<T>(path: string, options: UseFetchOptions<T> = {}) {
  const headers: Record<string, string> = {};

  const token = useCookie("XSRF-TOKEN");

  if (token) {
    headers["X-XSRF-TOKEN"] = token.value as string;
  }

  return useFetch(`http://localhost:8000${path}`, {
    credentials: "include",
    watch: false,
    headers: {
      "Content-Type": "application/json",
      ...headers,
      ...options?.headers,
    },
    ...options,
  });
}

export function useGet<T>(path: string, options: UseFetchOptions<T> = {}) {
  return useApi(path, { method: "GET", ...options });
}

export function usePost<T>(path: string, options: UseFetchOptions<T> = {}) {
  return useApi(path, { method: "POST", ...options });
}

export function usePut<T>(path: string, options: UseFetchOptions<T> = {}) {
  return useApi(path, { method: "PUT", ...options });
}

export function useDelete<T>(path: string, options: UseFetchOptions<T> = {}) {
  return useApi(path, { method: "DELETE", ...options });
}
