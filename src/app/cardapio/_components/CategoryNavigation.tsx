"use client";

import { CategoriaPrato, Prato } from "@/types/pratos";

interface CategoryNavigationProps {
  categorias: Array<{ key: CategoriaPrato; label: string }>;
  pratosPorCategoria?: (categoria: CategoriaPrato) => Prato[];
  scrollToSection: (categoria: string) => void;
}

// Dados dos pratos (simplificado para contagem)
const pratosData = [
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.PETISCO },
  { categoria: CategoriaPrato.CHAPA },
  { categoria: CategoriaPrato.HAMBURGUER },
  { categoria: CategoriaPrato.HAMBURGUER },
  { categoria: CategoriaPrato.HAMBURGUER },
  { categoria: CategoriaPrato.CERVEJA },
  { categoria: CategoriaPrato.CERVEJA },
  { categoria: CategoriaPrato.CERVEJA },
  { categoria: CategoriaPrato.CERVEJA },
  { categoria: CategoriaPrato.CHOPP },
  { categoria: CategoriaPrato.CHOPP },
  { categoria: CategoriaPrato.CAIPIRINHA },
  { categoria: CategoriaPrato.CAIPIRINHA },
  { categoria: CategoriaPrato.CAIPIRINHA },
  { categoria: CategoriaPrato.CAIPIRINHA },
  { categoria: CategoriaPrato.CAIPIRINHA },
  { categoria: CategoriaPrato.COPAO },
  { categoria: CategoriaPrato.COPAO },
  { categoria: CategoriaPrato.COMBO },
  { categoria: CategoriaPrato.COMBO },
  { categoria: CategoriaPrato.SEM_ALCOOL },
  { categoria: CategoriaPrato.SEM_ALCOOL },
];

export default function CategoryNavigation({
  categorias,
  scrollToSection,
}: CategoryNavigationProps) {
  // Função local para verificar se categoria tem pratos
  const temPratos = (categoria: CategoriaPrato) => {
    return pratosData.some((prato) => prato.categoria === categoria);
  };

  return (
    <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 py-6 mb-8 shadow-sm w-full">
      <div className="w-full px-4">
        {/* Desktop View */}
        <div className="hidden lg:flex justify-center w-full">
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-2 shadow-inner w-full max-w-7xl overflow-hidden">
            {categorias.map((categoria, index) => {
              if (!temPratos(categoria.key)) return null;

              return (
                <div key={categoria.key} className="flex items-center flex-1">
                  <button
                    onClick={() => scrollToSection(categoria.key)}
                    className="w-full px-3 py-4 text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 bg-transparent text-gray-700 dark:text-gray-300 hover:-translate-y-0.5 text-center overflow-hidden text-ellipsis"
                  >
                    {categoria.label}
                  </button>
                  {index <
                    categorias.filter((cat) => temPratos(cat.key)).length -
                      1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-500 to-transparent mx-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden w-full">
          <div className="overflow-x-auto scrollbar-hide w-full">
            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-2 min-w-max">
              {categorias.map((categoria, index) => {
                if (!temPratos(categoria.key)) return null;

                return (
                  <div key={categoria.key} className="flex items-center">
                    <button
                      onClick={() => scrollToSection(categoria.key)}
                      className="px-6 py-3 text-sm font-semibold whitespace-nowrap rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:shadow-md active:scale-95 bg-transparent text-gray-700 dark:text-gray-300 min-w-fit"
                    >
                      {categoria.label}
                    </button>
                    {index <
                      categorias.filter((cat) => temPratos(cat.key)).length -
                        1 && (
                      <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-500 to-transparent mx-2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
