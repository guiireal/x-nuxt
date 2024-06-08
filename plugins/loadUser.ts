export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();

  try {
    await authStore.fetchUser();
    navigateTo("/");
  } catch (error) {
    console.log(error);
    navigateTo("/login");
  }
});
