import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const getActualYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-4">
        <h3 className="text-3xl text-center font-bold text-yellow-600 dark:text-yellow-400">
          #VemProSalsero
        </h3>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações do Estabelecimento */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
              Salserin
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">R. 89, 630</p>
                  <p className="text-sm">St. Sul, Goiânia - GO</p>
                  <p className="text-sm">CEP: 74093-140</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <p className="text-sm">(62) 98108-6914</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <p className="text-sm">contato@salserin.com</p>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
              Horário de Funcionamento
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <div className="text-sm">
                  <p className="font-medium">Quinta</p>
                  <p>18:00 - 01:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <div className="text-sm">
                  <p className="font-medium">Sexta e Sábado</p>
                  <p>19:00 - 02:30</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <div className="text-sm">
                  <p className="font-medium">Domingo</p>
                  <p>17:00 - 00:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
              Links Úteis
            </h3>
            <div className="space-y-2">
              <a
                href="/cardapio"
                className="block text-sm hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                Cardápio
              </a>
              <a
                href="/eventos"
                className="block text-sm hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                Eventos
              </a>
              <a
                href="/reservas"
                className="block text-sm hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                Reservas
              </a>
              <a
                href="/sobre"
                className="block text-sm hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="/contato"
                className="block text-sm hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
              Siga-nos
            </h3>
            <div className="space-y-3">
              <Link
                href="https://www.instagram.com/salserin.go/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@salserin</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-yellow-300 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {getActualYear} Salserin. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="/politica-privacidade"
                className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-uso"
                className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
