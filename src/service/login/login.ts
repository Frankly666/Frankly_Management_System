import hyRequest from "..";
import type { Account } from "@/type";

export function getuserInfo(account: Account) {
  return hyRequest.post({
    url: "/login",
    data: account
  });
}
