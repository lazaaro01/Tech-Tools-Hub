import { signIn, signOut } from "@/auth";

export async function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="text-sm font-medium bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors" type="submit">
        Entrar com Google
      </button>
    </form>
  );
}

export async function SignInGitHub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button className="text-sm font-medium bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded transition-colors" type="submit">
        Entrar com GitHub
      </button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" type="submit">
        Sair
      </button>
    </form>
  );
}
