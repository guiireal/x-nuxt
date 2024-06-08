import type { User } from "@/types";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);

  const isLoggedIn = computed(() => !!user.value);

  const setUser = (newUser: User) => user.value = newUser;

  const logout = async () => {
    await useApi("/sanctum/csrf-cookie");

    await useApi("/logout", {
      method: "POST",
    });

    user.value = null;
  };
  
  return {
    user,
    isLoggedIn,
    logout,
    setUser
  };
});
