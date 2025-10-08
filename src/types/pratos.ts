export interface Prato {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: CategoriaPrato;
  imagem?: string;
  ingredientes: string[];
  tempoPreparo: number; // em minutos
  disponivel: boolean;
  promocao?: {
    ativo: boolean;
    precoPromocional: number;
    dataInicio: Date;
    dataFim: Date;
  };
  avaliacoes?: {
    media: number;
    total: number;
  };
  informacoesNutricionais?: {
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gorduras: number;
  };
  alergenos?: string[];
  vegetariano?: boolean;
  vegano?: boolean;
  semGluten?: boolean;
  // Propriedades específicas para bebidas
  teorAlcoolico?: number; // porcentagem de álcool
  volume?: string; // ex: "600ml", "550ml"
  temperatura?: "gelada" | "ambiente" | "quente";
  // Para combos
  itensInclusos?: string[];
  precoMinimo?: number; // para "A partir de:"
}

export enum CategoriaPrato {
  PETISCO = "petisco",
  CHAPA = "chapa",
  HAMBURGUER = "hamburguer",
  CERVEJA = "cerveja",
  CHOPP = "chopp",
  CAIPIRINHA = "caipirinha",
  COPAO = "copao",
  DOSE = "dose",
  COMBO = "combo",
  SEM_ALCOOL = "sem_alcool",
}

export type FiltrosPrato = {
  categoria?: CategoriaPrato;
  precoMinimo?: number;
  precoMaximo?: number;
  vegetariano?: boolean;
  vegano?: boolean;
  semGluten?: boolean;
  disponivel?: boolean;
  busca?: string;
  comAlcool?: boolean;
  semAlcool?: boolean;
  volume?: string;
};

export type CriarPrato = Omit<Prato, "id" | "avaliacoes">;

export type AtualizarPrato = Partial<CriarPrato>;
