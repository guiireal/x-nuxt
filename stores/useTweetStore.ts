import type { Tweet } from "@/types";

export const useTweetStore = defineStore("tweet", () => {
  const tweets = ref<Tweet[] | null>(null);

  const addTweet = (tweet: Tweet) => {
    if (!tweets.value) return;

    tweets.value.push(tweet);
  };

  return {
    tweets,
    addTweet
  };
});
