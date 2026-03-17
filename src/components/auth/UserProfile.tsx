import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { SignInGitHub, SignInGoogle, SignOut } from "./AuthButtons";

export default async function UserProfile() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <SignInGoogle />
        <SignInGitHub />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link href="/profile" className="flex items-center gap-2 p-1.5 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <div className="flex flex-col items-end hidden sm:flex text-right mr-1">
          <span className="text-xs font-bold text-gray-900 dark:text-gray-100 truncate max-w-[120px]">
            {session.user.name}
          </span>
          <span className="text-[10px] text-indigo-500 font-semibold uppercase tracking-wider">
            Meu Perfil
          </span>
        </div>
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name ?? "User"}
            width={34}
            height={34}
            className="rounded-xl ring-2 ring-indigo-500/20 shadow-sm"
          />
        ) : (
          <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-indigo-500/20 shadow-sm">
            {session.user.name?.charAt(0) ?? "U"}
          </div>
        )}
      </Link>
      <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block mx-1" />
      <SignOut />
    </div>
  );
}
