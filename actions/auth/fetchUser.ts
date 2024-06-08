import type { User } from "@/types";

export async function fetchUser() {
  const user = await useGet("/api/user");

  useAuthStore().setUser(user.data.value as User);
}
