export type User = {
  id: number;
  name: string;
  email: string;
}

export type LoginData = {
  email: string;
  password: string;
}

export type CreateTweetData = {
  content: string;
}

export type Tweet = {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: number;
}
