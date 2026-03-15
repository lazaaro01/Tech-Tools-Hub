import { auth } from "@/auth";
import Image from "next/image";
import { SignInGitHub, SignInGoogle, SignOut } from "./AuthButtons";

export default async function UserProfile() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <SignInGitHub />
        <SignInGoogle />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end hidden sm:flex">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {session.user.name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {session.user.email}
        </span>
      </div>
      {session.user.image ? (
        <Image
          src={session.user.image}
          alt={session.user.name ?? "User"}
          width={36}
          height={36}
          className="rounded-full ring-2 ring-indigo-500/20"
        />
      ) : (
        <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
          {session.user.name?.charAt(0) ?? "U"}
        </div>
      )}
      <SignOut />
    </div>
  );
}
