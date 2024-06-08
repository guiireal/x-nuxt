<script setup lang="ts">

definePageMeta({
  middleware: ["auth"]
});

const authStore = useAuthStore();

const handleLogout = async () => {
  await authStore.logout();
  navigateTo("/login");
};

</script>

<template>
  <div>
    Preciso estar autenticado
    Salve

    <button @click="handleLogout" class="border-2 p-2">Logout</button>
  </div>
</template>
