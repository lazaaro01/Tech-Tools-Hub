"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Github, Chrome, MapPin, Globe, Linkedin, Save, User, Briefcase, AlignLeft } from "lucide-react";
import ProfileFavorites from "@/components/profile/ProfileFavorites";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profileData, setProfileData] = useState({
    fullName: "",
    title: "",
    bio: "",
    location: "",
    website: "",
    linkedin: ""
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tech-tools-profile");
    if (saved) {
      setProfileData(JSON.parse(saved));
    } else if (session?.user) {
      setProfileData(prev => ({ ...prev, fullName: session.user?.name || "" }));
    }
  }, [session]);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem("tech-tools-profile", JSON.stringify(profileData));
    setTimeout(() => setIsSaving(false), 800);
  };

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

  const isGithub = session.user.email?.includes("github") || true; // Simplificado para o exemplo, idealmente checar provider

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-8 transition-colors group"
      >
        <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-0.5 transition-transform" />
        Voltar para Home
      </Link>

      {/* Header com Avatar Centralizado */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative mb-6">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative">
                {session.user.image ? (
                    <Image
                        src={session.user.image}
                        alt={session.user.name ?? "Usuário"}
                        width={140}
                        height={140}
                        className="rounded-full ring-4 ring-gray-900 shadow-2xl relative z-10"
                    />
                ) : (
                    <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl relative z-10">
                        {session.user.name?.charAt(0) ?? "U"}
                    </div>
                )}
            </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <Github size={16} />
            Conectado via GitHub como <span className="text-white">@{session.user.name?.replace(/\s+/g, '').toLowerCase()}</span>
        </div>
      </div>

      {/* Formulário Estilo Cartão */}
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl space-y-8">
        
        {/* Nome Completo */}
        <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-200 uppercase tracking-wide">
                Nome completo
            </label>
            <input 
                type="text"
                value={profileData.fullName}
                onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                placeholder="Seu nome"
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
            />
        </div>

        {/* Título Profissional */}
        <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-200 uppercase tracking-wide">
                Título profissional
            </label>
            <input 
                type="text"
                value={profileData.title}
                onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                placeholder="Ex: Desenvolvedor Full Stack"
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
            />
        </div>

        {/* Bio */}
        <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-200 uppercase tracking-wide">
                Bio
            </label>
            <textarea 
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                placeholder="Conte um pouco sobre você..."
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
            />
        </div>

        {/* Localização */}
        <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-200 uppercase tracking-wide">
                <MapPin size={16} /> Localização
            </label>
            <input 
                type="text"
                value={profileData.location}
                onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                placeholder="Ex: Fortaleza, Ceará, Brasil"
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
            />
        </div>

        {/* Website e LinkedIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-200 uppercase tracking-wide">
                    <Globe size={16} /> Website
                </label>
                <input 
                    type="url"
                    value={profileData.website}
                    onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                    placeholder="https://seusite.com"
                    className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                />
            </div>
            <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-200 uppercase tracking-wide">
                    <Linkedin size={16} /> LinkedIn
                </label>
                <input 
                    type="text"
                    value={profileData.linkedin}
                    onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                    placeholder="seu-perfil"
                    className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                />
            </div>
        </div>

        {/* Botão Salvar Alterações */}
        <button 
            onClick={handleSave}
            disabled={isSaving}
            className="w-full py-5 bg-[#ffea00] hover:bg-[#ffe100] text-black rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-yellow-500/10"
        >
            {isSaving ? (
                "Salvando..."
            ) : (
                <>
                    <Save size={20} />
                    Salvar Alterações
                </>
            )}
        </button>
      </div>

      <div className="mt-16">
          <ProfileFavorites />
      </div>
    </div>
  );
}
