import type { User } from "@/types/user";

type LoginData = {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);

  const isLoggedIn = computed(() => !!user.value);

  const login = async ({ email, password }: LoginData) => {
    await useApi("/sanctum/csrf-cookie");

    await useApi("/login", {
      method: "POST",
      body: {
        email,
        password,
      }
    });

    await fetchUser();
  };

  const logout = async () => {
    await useApi("/sanctum/csrf-cookie");

    await useApi("/logout", {
      method: "POST",
    });

    user.value = null;
  };

  const fetchUser = async () => {
    const { data } = await useApi("/api/user");

    user.value = data.value as User;
  };

  return {
    user,
    isLoggedIn,
    login,
    logout,
    fetchUser,
  };
});
