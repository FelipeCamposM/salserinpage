import Image from "next/image";

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Sobre o Salserin</h1>
            <p className="text-xl">
              O bar a céu aberto mais vibrante de Goiânia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Um pedacinho do céu em Goiânia
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              O <strong className="text-orange-600">Salserin</strong> nasceu com
              a proposta de criar um espaço único na capital goiana: um bar a
              céu aberto onde a energia jovem encontra o melhor da gastronomia e
              entretenimento.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Localizado no coração de Goiânia, nosso espaço foi pensado para
              quem busca momentos autênticos, sabores marcantes e uma atmosfera
              descontraída sob as estrelas.
            </p>
            <p className="text-lg text-gray-600">
              Aqui, cada noite é uma nova experiência, cada drink conta uma
              história e cada prato desperta sensações únicas.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-2">
            <Image
              src="/images/bar-ambiente.jpg"
              alt="Ambiente do Salserin"
              width={500}
              height={400}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Shows Ao Vivo
            </h3>
            <p className="text-gray-600">
              Agenda semanal com artistas locais e nacionais. Música ao vivo que
              embala suas noites.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🍹</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Drinks Exclusivos
            </h3>
            <p className="text-gray-600">
              Drinks autorais criados especialmente para o público jovem, com
              sabores únicos e apresentação incrível.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Comidas Saborosas
            </h3>
            <p className="text-gray-600">
              Cardápio variado com pratos que vão desde petiscos até refeições
              completas, sempre com muito sabor.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Proporcionar experiências inesquecíveis para o público jovem de
              Goiânia, combinando gastronomia de qualidade, entretenimento ao
              vivo e um ambiente único a céu aberto.
            </p>
            <p className="text-lg text-gray-700">
              Queremos ser o ponto de encontro onde amizades se fortalecem,
              novos relacionamentos nascem e memórias especiais são criadas.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">2019</div>
            <p className="text-gray-600">Ano de Fundação</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <p className="text-gray-600">Shows Realizados</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <p className="text-gray-600">Pratos no Cardápio</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
            <p className="text-gray-600">Clientes Felizes</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Venha Viver essa Experiência!
          </h2>
          <p className="text-xl mb-8">
            O Salserin te espera para noites inesquecíveis em Goiânia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Cardápio
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Agenda de Shows
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
