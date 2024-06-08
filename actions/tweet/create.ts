import type { CreateTweetData } from "~/types";
import type { Tweet } from "@/types";

export async function create(tweet: CreateTweetData) {
  const response = await usePost("/tweets", { body: tweet });

  useTweetStore().addTweet(response.data.value as Tweet);
}
