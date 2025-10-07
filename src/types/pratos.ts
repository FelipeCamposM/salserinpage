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
}

export enum CategoriaPrato {
  ENTRADA = "entrada",
  PRATO_PRINCIPAL = "prato_principal",
  SOBREMESA = "sobremesa",
  BEBIDA = "bebida",
  LANCHE = "lanche",
  SALADA = "salada",
  PIZZA = "pizza",
  HAMBURGUER = "hamburguer",
  MASSA = "massa",
  GRELHADOS = "grelhados",
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
};

export type CriarPrato = Omit<Prato, "id" | "avaliacoes">;

export type AtualizarPrato = Partial<CriarPrato>;
