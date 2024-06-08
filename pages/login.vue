<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import { type LoginData } from "@/types";
import actions from "@/actions";

definePageMeta({
  layout: "guest",
  middleware: ["guest"]
});

const form = ref<LoginData>({
  email: "test@example.com",
  password: "password",
});

const authStore = useAuthStore();

const submit = async () => {
  await actions.auth.login(form.value);

  navigateTo("/");
};

const getUser = async () => {
  console.log(authStore.user);
};

</script>

<template>
  <div>
    Login page
  </div>
  <form @submit.prevent="submit" class="text-black flex flex-col w-1/4 space-y-4">
    <input v-model="form.email" type="email" placeholder="Email"/>
    <input v-model="form.password" type="password" placeholder="Password"/>
    <button type="submit" class="bg-gray-50 text-black">Login</button>
    <button @click="getUser" class="bg-gray-50 text-black">Get User</button>
  </form>
</template>
