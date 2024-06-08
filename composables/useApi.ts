import type { UseFetchOptions } from "#app";

function useBaseApi<T>(path: string, options: UseFetchOptions<T> = {}) {
  const headers: Record<string, string> = {};

  const token = useCookie("XSRF-TOKEN");

  if (token.value) {
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

export async function useApi<T>(path: string, options: UseFetchOptions<T> = {}) {
  const token = useCookie("XSRF-TOKEN");

  if (!token.value) {
    await useBaseApi("/sanctum/csrf-cookie");
  }

  return useBaseApi(path, options);
}

export async function useGet<T>(path: string, options: UseFetchOptions<T> = {}) {
  return await useApi(path, { method: "GET", ...options });
}

export async function usePost<T>(path: string, options: UseFetchOptions<T> = {}) {
  return await useApi(path, { method: "POST", ...options });
}

export async function usePut<T>(path: string, options: UseFetchOptions<T> = {}) {
  return await useApi(path, { method: "PUT", ...options });
}

export async function useDelete<T>(path: string, options: UseFetchOptions<T> = {}) {
  return await useApi(path, { method: "DELETE", ...options });
}
