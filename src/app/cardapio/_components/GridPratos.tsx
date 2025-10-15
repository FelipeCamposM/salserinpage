"use client";

import { Prato, CategoriaPrato } from "@/types/pratos";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const pratos: Prato[] = [
  // PETISCOS
  {
    id: "1",
    nome: "Batata Simples",
    preco: 20.0,
    descricao: "Batata rústica temperada e crocante",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/batata-simples.jpg",
    ingredientes: ["batata", "temperos", "óleo"],
    tempoPreparo: 15,
    disponivel: true,
    vegetariano: true,
    vegano: true,
  },
  {
    id: "2",
    nome: "Batata Especial",
    preco: 35.0,
    descricao: "Batata com cobertura especial da casa",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/batata-especial.jpg",
    ingredientes: ["batata", "queijo", "bacon", "temperos especiais"],
    tempoPreparo: 20,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "3",
    nome: "Pastel de Carne e Queijo 8Und",
    preco: 35.0,
    descricao: "8 unidades de pastéis com recheio de carne e queijo",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/pastel-carne-queijo.jpg",
    ingredientes: ["massa", "carne", "queijo", "temperos"],
    tempoPreparo: 12,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "4",
    nome: "Pastel de Queijo e Presunto 8Und",
    preco: 35.0,
    descricao: "8 unidades de pastéis com recheio de queijo e presunto",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/pastel-presunto-queijo.jpg",
    ingredientes: ["massa", "queijo", "presunto", "temperos"],
    tempoPreparo: 12,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "5",
    nome: "Tulipinha 12Und",
    preco: 32.0,
    descricao: "12 unidades de tulipinha de frango crocante",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/tulipinha.jpg",
    ingredientes: ["frango", "temperos", "farinha"],
    tempoPreparo: 18,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "6",
    nome: "Frango Supremo",
    preco: 65.0,
    descricao: "Frango especial com molho supremo da casa",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/frango-supremo.jpg",
    ingredientes: ["frango", "molho supremo", "temperos especiais"],
    tempoPreparo: 25,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "7",
    nome: "Torresmo com Mandioca",
    preco: 38.0,
    descricao: "Torresmo crocante acompanhado de mandioca",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/torresmo-mandioca.webp",
    ingredientes: ["torresmo", "mandioca", "temperos"],
    tempoPreparo: 20,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "8",
    nome: "Bolinho de Linguiça Recheado",
    preco: 45.0,
    descricao: "Bolinhos crocantes recheados com linguiça",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/bolinho-linguica.jpg",
    ingredientes: ["linguiça", "massa", "temperos", "queijo"],
    tempoPreparo: 15,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "9",
    nome: "Disquinho de Carne",
    preco: 49.0,
    descricao: "Disquinhos de carne suculentos e temperados",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/disquinho-carne.webp",
    ingredientes: ["carne", "temperos especiais", "farinha"],
    tempoPreparo: 18,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "10",
    nome: "Coraçãozinho A Palito",
    preco: 40.0,
    descricao: "Coração de frango no palito temperado",
    categoria: CategoriaPrato.PETISCO,
    imagem: "/comidas/coracaozinho.jpg",
    ingredientes: ["coração de frango", "temperos", "palito"],
    tempoPreparo: 20,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  // CHAPAS
  {
    id: "11",
    nome: "Chapa Picanha",
    preco: 120.0,
    descricao: "Picanha grelhada na chapa com acompanhamentos",
    categoria: CategoriaPrato.CHAPA,
    imagem: "/comidas/chapa-picanha.jpg",
    ingredientes: ["picanha", "temperos", "acompanhamentos"],
    tempoPreparo: 30,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  // HAMBÚRGUERS
  {
    id: "12",
    nome: "Clássico",
    preco: 25.0,
    descricao: "Hambúrguer tradicional com ingredientes frescos",
    categoria: CategoriaPrato.HAMBURGUER,
    imagem: "/comidas/hamburguer-classico.webp",
    ingredientes: ["carne", "pão", "alface", "tomate", "queijo"],
    tempoPreparo: 15,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "13",
    nome: "Black Bacon",
    preco: 29.0,
    descricao: "Hambúrguer com bacon crocante e molho especial",
    categoria: CategoriaPrato.HAMBURGUER,
    imagem: "/comidas/black-bacon.jpeg",
    ingredientes: ["carne", "bacon", "pão preto", "queijo", "molho especial"],
    tempoPreparo: 18,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "14",
    nome: "Agridoce",
    preco: 32.0,
    descricao: "Hambúrguer com molho agridoce e ingredientes especiais",
    categoria: CategoriaPrato.HAMBURGUER,
    imagem: "/comidas/hamburguer-agridoce.jpg",
    ingredientes: ["carne", "molho agridoce", "pão", "queijo", "cebola"],
    tempoPreparo: 20,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  // CERVEJAS
  {
    id: "15",
    nome: "Corona 600ml",
    preco: 19.0,
    descricao: "Cerveja Corona gelada",
    categoria: CategoriaPrato.CERVEJA,
    imagem: "/bebidas/corona-600.webp",
    ingredientes: ["cerveja corona"],
    tempoPreparo: 2,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "600ml",
    temperatura: "gelada",
    teorAlcoolico: 4.5,
  },
  {
    id: "16",
    nome: "Spaten",
    preco: 17.0,
    descricao: "Cerveja Spaten premium",
    categoria: CategoriaPrato.CERVEJA,
    imagem: "/bebidas/spaten.png",
    ingredientes: ["cerveja spaten"],
    tempoPreparo: 2,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "600ml",
    temperatura: "gelada",
    teorAlcoolico: 5.2,
  },
  {
    id: "17",
    nome: "Stella Artois",
    preco: 18.0,
    descricao: "Cerveja Stella Artois premium",
    categoria: CategoriaPrato.CERVEJA,
    imagem: "/bebidas/stella-artois.png",
    ingredientes: ["cerveja stella artois"],
    tempoPreparo: 2,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "600ml",
    temperatura: "gelada",
    teorAlcoolico: 5.0,
  },
  {
    id: "18",
    nome: "Colorado",
    preco: 26.0,
    descricao: "Cerveja artesanal Colorado",
    categoria: CategoriaPrato.CERVEJA,
    imagem: "/bebidas/colorado.jpeg",
    ingredientes: ["cerveja colorado"],
    tempoPreparo: 2,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "600ml",
    temperatura: "gelada",
    teorAlcoolico: 4.8,
  },
  // CHOPP
  {
    id: "19",
    nome: "Chopp Brahma 330ml",
    preco: 13.0,
    descricao: "Chopp Brahma gelado e cremoso",
    categoria: CategoriaPrato.CHOPP,
    imagem: "/bebidas/chopp-brahma-330.webp",
    ingredientes: ["chopp brahma"],
    tempoPreparo: 3,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "330ml",
    temperatura: "gelada",
    teorAlcoolico: 4.8,
  },
  {
    id: "20",
    nome: "Chopp Brahma 550ml",
    preco: 18.0,
    descricao: "Chopp Brahma gelado e cremoso",
    categoria: CategoriaPrato.CHOPP,
    imagem: "/bebidas/chopp-brahma-550.jpeg",
    ingredientes: ["chopp brahma"],
    tempoPreparo: 3,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "550ml",
    temperatura: "gelada",
    teorAlcoolico: 4.8,
  },
  // CAIPIRINHAS
  {
    id: "21",
    nome: "Caipirinha Limão",
    preco: 23.0,
    descricao: "Caipirinha clássica de limão com cachaça",
    categoria: CategoriaPrato.CAIPIRINHA,
    imagem: "/bebidas/caipirinha-limao.webp",
    ingredientes: ["cachaça", "limão", "açúcar", "gelo"],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    teorAlcoolico: 38.0,
  },
  {
    id: "22",
    nome: "Caipirinha Uva",
    preco: 23.0,
    descricao: "Caipirinha refrescante de uva",
    categoria: CategoriaPrato.CAIPIRINHA,
    imagem: "/bebidas/caipirinha-uva.jpg",
    ingredientes: ["cachaça", "uva", "açúcar", "gelo"],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    teorAlcoolico: 38.0,
  },
  {
    id: "23",
    nome: "Caipirinha Açaí",
    preco: 23.0,
    descricao: "Caipirinha exótica de açaí",
    categoria: CategoriaPrato.CAIPIRINHA,
    imagem: "/bebidas/caipirinha-acai.webp",
    ingredientes: ["cachaça", "açaí", "açúcar", "gelo"],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    teorAlcoolico: 38.0,
  },
  {
    id: "24",
    nome: "Caipirinha Morango",
    preco: 23.0,
    descricao: "Caipirinha doce de morango",
    categoria: CategoriaPrato.CAIPIRINHA,
    imagem: "/bebidas/caipirinha-morango.jpg",
    ingredientes: ["cachaça", "morango", "açúcar", "gelo"],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    teorAlcoolico: 38.0,
  },
  // CAIPIRAÇÃO SABORES
  {
    id: "25",
    nome: "Caipirão Morango",
    preco: 26.0,
    descricao: "Cachaça Sagatiba, morango e xarope de açúcar",
    categoria: CategoriaPrato.CAIPIRINHA,
    imagem: "/bebidas/caipirao-morango.jpg",
    ingredientes: ["cachaça sagatiba", "morango", "xarope de açúcar"],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    teorAlcoolico: 38.0,
  },
  // DRINKS COPÃO
  {
    id: "26",
    nome: "N1 - Copão",
    preco: 19.0,
    descricao: "Vodka nacional, gelo de morango e energético tradicional",
    categoria: CategoriaPrato.COPAO,
    imagem: "/bebidas/copao-n1.jpg",
    ingredientes: [
      "vodka nacional",
      "gelo de morango",
      "energético tradicional",
    ],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    teorAlcoolico: 40.0,
  },
  {
    id: "27",
    nome: "N10 - Copão Premium",
    preco: 22.0,
    descricao: "Vodka premium, gelo de côco e energético tradicional",
    categoria: CategoriaPrato.COPAO,
    imagem: "/bebidas/copao-n10.jpg",
    ingredientes: ["vodka premium", "gelo de côco", "energético tradicional"],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    teorAlcoolico: 40.0,
  },
  // COMBOS
  {
    id: "28",
    nome: "Combo Absolut",
    preco: 320.0,
    descricao: "Combo premium com vodka Absolut",
    categoria: CategoriaPrato.COMBO,
    imagem: "/bebidas/combo-absolut.jpg",
    ingredientes: ["vodka absolut", "energético", "gelo", "acompanhamentos"],
    tempoPreparo: 10,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    itensInclusos: ["1 garrafa Absolut", "energéticos", "gelo", "petiscos"],
  },
  {
    id: "29",
    nome: "Combo Gin",
    preco: 250.0,
    descricao: "Combo especial com gin premium",
    categoria: CategoriaPrato.COMBO,
    imagem: "/bebidas/combo-gin.jpg",
    ingredientes: ["gin", "tônica", "gelo", "acompanhamentos"],
    tempoPreparo: 10,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    precoMinimo: 250.0,
    itensInclusos: ["1 garrafa gin", "tônicas", "gelo", "petiscos"],
  },
  // SEM ÁLCOOL
  {
    id: "30",
    nome: "Água Sem Gás",
    preco: 4.5,
    descricao: "Água mineral natural sem gás",
    categoria: CategoriaPrato.SEM_ALCOOL,
    imagem: "/bebidas/agua-sem-gas.jpeg",
    ingredientes: ["água mineral"],
    tempoPreparo: 1,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "500ml",
  },
  {
    id: "31",
    nome: "Água Com Gás",
    preco: 7.0,
    descricao: "Água mineral com gás gelada",
    categoria: CategoriaPrato.SEM_ALCOOL,
    imagem: "/bebidas/agua-com-gas.webp",
    ingredientes: ["água mineral com gás"],
    tempoPreparo: 1,
    disponivel: true,
    vegetariano: true,
    vegano: true,
    volume: "500ml",
  },
];

export default function GridPratos() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Controla a visibilidade do botão "voltar ao topo"
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Categorias disponíveis no cardápio
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

  // Função para agrupar pratos por categoria
  const pratosPorCategoria = (categoria: CategoriaPrato) => {
    return pratos.filter((prato) => prato.categoria === categoria);
  };

  return (
    <div className="w-full">
      {/* Seções por categoria */}
      <div className="space-y-12">
        {categorias.map((categoria) => {
          const pratosCategoria = pratosPorCategoria(categoria.key);
          if (pratosCategoria.length === 0) return null;

          return (
            <section
              key={categoria.key}
              id={`categoria-${categoria.key}`}
              className="scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2">
                  {categoria.label}
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {pratosCategoria.map((prato) => (
                  <div
                    key={prato.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                  >
                    {prato.imagem && (
                      <Image
                        src={prato.imagem}
                        alt={prato.nome}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {prato.nome}
                        </h3>
                        <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">
                          {prato.categoria.replace("_", " ").toUpperCase()}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                        {prato.descricao}
                      </p>

                      <div className="flex justify-between items-center mb-3">
                        <span className="text-2xl font-bold text-orange-600 dark:text-yellow-400">
                          {prato.precoMinimo
                            ? `A partir de R$ ${prato.precoMinimo
                                .toFixed(2)
                                .replace(".", ",")}`
                            : `R$ ${prato.preco.toFixed(2).replace(".", ",")}`}
                        </span>
                        <div className="flex gap-1 items-center">
                          {prato.vegetariano && (
                            <span
                              className="text-green-500 text-sm"
                              title="Vegetariano"
                            >
                              🌱
                            </span>
                          )}
                          {prato.vegano && (
                            <span
                              className="text-green-600 text-sm"
                              title="Vegano"
                            >
                              🌿
                            </span>
                          )}
                          {prato.teorAlcoolico && (
                            <span
                              className="text-red-500 text-sm"
                              title="Contém álcool"
                            >
                              🍺
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                        <div className="flex justify-between">
                          <span>Preparo:</span>
                          <span>{prato.tempoPreparo} min</span>
                        </div>

                        {prato.volume && (
                          <div className="flex justify-between">
                            <span>Volume:</span>
                            <span>{prato.volume}</span>
                          </div>
                        )}

                        {prato.teorAlcoolico && (
                          <div className="flex justify-between">
                            <span>Álcool:</span>
                            <span>{prato.teorAlcoolico}%</span>
                          </div>
                        )}

                        {prato.itensInclusos && (
                          <div className="mt-2">
                            <span className="font-medium">Incluso:</span>
                            <ul className="text-xs mt-1 space-y-1">
                              {prato.itensInclusos.map((item, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {!prato.disponivel && (
                        <div className="mt-3 text-center">
                          <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                            Indisponível
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Botão voltar ao topo */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

// Exporta as funções e dados para serem usados pela navegação
export { pratos };
export const categorias = [
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

export const pratosPorCategoria = (categoria: CategoriaPrato) => {
  return pratos.filter((prato) => prato.categoria === categoria);
};
