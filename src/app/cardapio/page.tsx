"use client";

import GridPratos from "./_components/GridPratos";
import CategoryNavigation from "./_components/CategoryNavigation";
import { CategoriaPrato } from "@/types/pratos";

export default function CardapioPage() {
  // Dados locais das categorias
  const categorias = [
    { key: CategoriaPrato.PETISCO, label: "Petiscos" },
    { key: CategoriaPrato.CHAPA, label: "Chapas" },
    { key: CategoriaPrato.HAMBURGUER, label: "Hambúrguers" },
    { key: CategoriaPrato.CERVEJA, label: "Cervejas" },
    { key: CategoriaPrato.CHOPP, label: "Chopp" },
    { key: CategoriaPrato.CAIPIRINHA, label: "Caipirinhas" },
    { key: CategoriaPrato.COPAO, label: "Copão" },
    { key: CategoriaPrato.COMBO, label: "Combos" },
    { key: CategoriaPrato.SEM_ALCOOL, label: "Sem Álcool" },
  ];

  // Função para rolar até a seção
  const scrollToSection = (categoria: string) => {
    const element = document.getElementById(`categoria-${categoria}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-gray-100 dark:bg-yellow-800/10 text-gray-900 dark:text-white min-h-screen">
      {/* Header com título e descrição dentro do container */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Cardápio</h1>
        <p className="text-center text-lg mb-12">
          Conheça nossos pratos, bebidas e combos especiais!
        </p>
      </section>

      {/* Navegação das categorias - largura total */}
      <CategoryNavigation
        categorias={categorias}
        scrollToSection={scrollToSection}
      />

      {/* Grid de pratos dentro do container */}
      <section className="max-w-7xl mx-auto px-4">
        <GridPratos />
      </section>
    </main>
  );
}
