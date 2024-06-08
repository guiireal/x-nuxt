export async function logout() {
  await useGet("/sanctum/csrf-cookie");
  await usePost("/auth/logout");

  useAuthStore().setUser(null);
}
