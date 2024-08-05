"use server";

import { cookies } from "next/headers";

interface Session {
  isAuthenticated: boolean,
  data: unknown | null
}

export async function serializeCookies(): Promise<string> {
  const allCookies = cookies().getAll();
  return allCookies.map(({ name, value }) => `${name}=${value}`).join(",");
}

export async function getSelfData(): Promise<Session> {
  const session: Session = {
    isAuthenticated: false,
    data: null,
  };

  const cookieString = await serializeCookies();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/me`, {
      credentials: 'include',
      headers: {
        "cookie": cookieString
      }
    });

    const data = await res.json();

    if (res.status !== 200 && res.status !== 201) {
      return session;
    }

    session.data = data;
    session.isAuthenticated = true;

    return session;
  } catch (err) {
    console.log("Error while getting user session");
    return session;
  }
}