import { Prato, CategoriaPrato } from "@/types/pratos";
import Image from "next/image";

const pratos: Prato[] = [
  {
    id: "1",
    nome: "Beringela Grelhada",
    preco: 19.9,
    descricao: "Deliciosa beringela grelhada com temperos especiais",
    categoria: CategoriaPrato.PRATO_PRINCIPAL,
    imagem: "/images/beringela.jpg",
    ingredientes: ["beringela", "azeite", "alho", "ervas finas"],
    tempoPreparo: 15,
    disponivel: true,
    vegetariano: true,
    vegano: true,
  },
  {
    id: "2",
    nome: "Salmão Grelhado",
    preco: 32.9,
    descricao: "Salmão fresco grelhado com legumes da estação",
    categoria: CategoriaPrato.PRATO_PRINCIPAL,
    imagem: "/images/salmao.jpg",
    ingredientes: ["salmão", "brócolis", "cenoura", "limão", "azeite"],
    tempoPreparo: 20,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "3",
    nome: "Salada Caesar",
    preco: 16.5,
    descricao: "Salada clássica com alface, croutons e molho caesar",
    categoria: CategoriaPrato.SALADA,
    imagem: "/images/caesar.jpg",
    ingredientes: ["alface romana", "parmesão", "croutons", "molho caesar"],
    tempoPreparo: 8,
    disponivel: true,
    vegetariano: true,
    vegano: false,
  },
  {
    id: "4",
    nome: "Pizza Margherita",
    preco: 24.9,
    descricao: "Pizza tradicional com molho de tomate, mussarela e manjericão",
    categoria: CategoriaPrato.PIZZA,
    imagem: "/images/margherita.jpg",
    ingredientes: ["massa", "molho de tomate", "mussarela", "manjericão"],
    tempoPreparo: 12,
    disponivel: true,
    vegetariano: true,
    vegano: false,
  },
  {
    id: "5",
    nome: "Hambúrguer Artesanal",
    preco: 28.5,
    descricao: "Hambúrguer de carne bovina com queijo cheddar e bacon",
    categoria: CategoriaPrato.HAMBURGUER,
    imagem: "/images/hamburguer.jpg",
    ingredientes: ["carne bovina", "pão brioche", "cheddar", "bacon", "alface"],
    tempoPreparo: 18,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "6",
    nome: "Espaguete à Carbonara",
    preco: 22.9,
    descricao: "Massa italiana com molho cremoso, bacon e parmesão",
    categoria: CategoriaPrato.MASSA,
    imagem: "/images/carbonara.jpg",
    ingredientes: [
      "espaguete",
      "bacon",
      "ovos",
      "parmesão",
      "pimenta do reino",
    ],
    tempoPreparo: 15,
    disponivel: true,
    vegetariano: false,
    vegano: false,
  },
  {
    id: "7",
    nome: "Bruschetta Italiana",
    preco: 12.9,
    descricao: "Entrada tradicional com tomate, manjericão e queijo",
    categoria: CategoriaPrato.ENTRADA,
    imagem: "/images/bruschetta.jpg",
    ingredientes: ["pão italiano", "tomate", "manjericão", "alho", "azeite"],
    tempoPreparo: 10,
    disponivel: true,
    vegetariano: true,
    vegano: false,
  },
  {
    id: "8",
    nome: "Tiramisù",
    preco: 14.5,
    descricao: "Sobremesa italiana com café, mascarpone e cacau",
    categoria: CategoriaPrato.SOBREMESA,
    imagem: "/images/tiramisu.jpg",
    ingredientes: [
      "mascarpone",
      "café",
      "biscoito champagne",
      "cacau",
      "açúcar",
    ],
    tempoPreparo: 5,
    disponivel: true,
    vegetariano: true,
    vegano: false,
  },
  {
    id: "9",
    nome: "Suco de Laranja Natural",
    preco: 8.9,
    descricao: "Suco fresco de laranja espremida na hora",
    categoria: CategoriaPrato.BEBIDA,
    imagem: "/images/suco-laranja.jpg",
    ingredientes: ["laranja", "gelo"],
    tempoPreparo: 3,
    disponivel: true,
    vegetariano: true,
    vegano: true,
  },
];

export default function GridPratos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {pratos.map((prato) => (
        <div
          key={prato.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
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
            <h3 className="text-xl font-semibold mb-2">{prato.nome}</h3>
            <p className="text-gray-600 mb-3">{prato.descricao}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">
                R$ {prato.preco.toFixed(2).replace(".", ",")}
              </span>
              <div className="flex gap-1">
                {prato.vegetariano && (
                  <span className="text-green-500 text-sm">🌱</span>
                )}
                {prato.vegano && (
                  <span className="text-green-600 text-sm">🌿</span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Tempo de preparo: {prato.tempoPreparo} min
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
