export async function logout() {
  await usePost("/auth/logout");

  useAuthStore().setUser(null);
}
