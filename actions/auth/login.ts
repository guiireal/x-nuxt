import type { LoginData } from "@/types";
import actions from "@/actions";

export async function login(loginData: LoginData) {
  await useGet("/sanctum/csrf-cookie");

  await usePost("/login", {
    body: loginData,
  });

  await actions.auth.fetchUser();
}
