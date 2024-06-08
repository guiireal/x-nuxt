import actions from "@/actions";

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();

  try {
    await actions.auth.fetchUser();
    navigateTo("/");
  } catch (error) {
    console.log(error);
    navigateTo("/login");
  }
});
