<script setup lang="ts">

import actions from "~/actions";
import { type CreateTweetData } from "@/types";

definePageMeta({
  middleware: ["auth"]
});

const handleLogout = async () => {
  await actions.auth.logout();
  navigateTo("/login");
};

const form = ref<CreateTweetData>({
  content: ""
});

const handleTweet = async () => await actions.tweet.create(form.value);

</script>

<template>
  <div>
    <form @submit.prevent="handleTweet" class="flex flex-col w-1/4">
      <textarea v-model="form.content" class="border-2 p-2"></textarea>
      <button type="submit" class="border-2 p-2">Tweet 🐦</button>
    </form>

    <button @click="handleLogout" class="border-2 p-2">Logout</button>
  </div>
</template>
