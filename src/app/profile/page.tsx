import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { User, Mail, FileText, ChevronLeft, Github, Chrome } from "lucide-react";
import ProfileFavorites from "@/components/profile/ProfileFavorites";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Você não está logado</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">Entre com sua conta para ver o seu perfil e gerenciar suas preferências.</p>
        <Link 
          href="/" 
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
        >
          Voltar para Home
        </Link>
      </div>
    );
  }

  const { name, email, image } = session.user;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition-colors group"
      >
        <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-0.5 transition-transform" />
        Voltar para Ferramentas
      </Link>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-[32px] blur-2xl opacity-10 dark:opacity-20 -z-10" />
        
        <div className="bg-white dark:bg-gray-800 rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative shrink-0">
              {image ? (
                <Image
                  src={image}
                  alt={name ?? "Usuário"}
                  width={120}
                  height={120}
                  className="rounded-[32px] ring-4 ring-indigo-500/10 shadow-xl"
                />
              ) : (
                <div className="w-[120px] h-[120px] rounded-[32px] bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  {name?.charAt(0) ?? "U"}
                </div>
              )}
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-700 p-2 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600">
                {email?.includes("gmail") ? (
                   <Chrome size={20} className="text-red-500" />
                ) : (
                   <Github size={20} className="text-gray-800 dark:text-white" />
                )}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Mail size={14} className="mr-2 text-indigo-500" />
                  {email}
                </div>
                <div className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full font-semibold">
                  Membro Hub
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 flex items-center">
                    <FileText size={14} className="mr-2" />
                    Sobre Mim
                  </h3>
                  <div className="relative group">
                    <textarea 
                      placeholder="Conte um pouco sobre suas tecnologias favoritas..."
                      className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none min-h-[120px] resize-none"
                    />
                    <div className="absolute top-2 right-4 text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Salvo localmente
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">🚀</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 mt-1">Nível Dev</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">✨</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 mt-1">Conquistas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProfileFavorites />
    </div>
  );
}
