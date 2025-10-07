"use client";

import * as React from "react";
import Link from "next/link";
import {
  Home,
  UtensilsCrossed,
  Calendar,
  Users,
  Phone,
  MapPin,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const cardapioItems: { title: string; href: string; description: string }[] = [
  {
    title: "Pratos Principais",
    href: "/cardapio/pratos-principais",
    description: "Deliciosos pratos tradicionais e especiais da casa.",
  },
  {
    title: "Entradas",
    href: "/cardapio/entradas",
    description: "Aperitivos e entradas para começar bem a refeição.",
  },
  {
    title: "Bebidas",
    href: "/cardapio/bebidas",
    description: "Drinks especiais, vinhos, cervejas e bebidas sem álcool.",
  },
  {
    title: "Sobremesas",
    href: "/cardapio/sobremesas",
    description: "Doces irresistíveis para finalizar a experiência.",
  },
  {
    title: "Menu Executivo",
    href: "/cardapio/menu-executivo",
    description: "Opções rápidas e saborosas para o almoço.",
  },
  {
    title: "Promoções",
    href: "/cardapio/promocoes",
    description: "Ofertas especiais e combos com preços imperdíveis.",
  },
];

const eventosItems: { title: string; href: string; description: string }[] = [
  {
    title: "Shows ao Vivo",
    href: "/eventos/shows",
    description: "Apresentações musicais com artistas locais e convidados.",
  },
  {
    title: "Noite de Karaokê",
    href: "/eventos/karaoke",
    description: "Sextas-feiras de diversão com karaokê para toda família.",
  },
  {
    title: "Eventos Privados",
    href: "/eventos/privados",
    description: "Comemorações, aniversários e confraternizações.",
  },
  {
    title: "Agenda Completa",
    href: "/eventos/agenda",
    description: "Veja todos os eventos programados para este mês.",
  },
];

export function NavigationMenuHeader() {
  return (
    <div className="h-full flex items-center justify-between px-6 max-w-7xl mx-auto">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/salserin-logo.png"
          alt="Salserin Logo"
          width={40}
          height={40}
          className="rounded-full hover:scale-105 transition-all duration-300"
        />
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="space-x-2">
          {/* Home */}
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors`}
            >
              <Link href="/" className="flex items-center space-x-2">
                <span className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-gray-900 dark:text-white" />
                  Home
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Cardápio */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400 data-[active]:bg-gray-100 dark:data-[active]:bg-gray-800 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800 transition-colors">
              <UtensilsCrossed className="w-4 h-4 mr-2" />
              Cardápio
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                {cardapioItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Eventos */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400 data-[active]:bg-gray-100 dark:data-[active]:bg-gray-800 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800 transition-colors">
              <Calendar className="w-4 h-4 mr-2" />
              Eventos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-500/20 to-yellow-600/20 p-6 no-underline outline-none focus:shadow-md border border-yellow-400/20"
                      href="/eventos"
                    >
                      <Calendar className="h-6 w-6 text-yellow-400" />
                      <div className="mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-white">
                        Eventos Salserin
                      </div>
                      <p className="text-sm leading-tight text-gray-700 dark:text-gray-300">
                        Diversão garantida com shows, karaokê e eventos
                        especiais.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {eventosItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Sobre Nós */}
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors`}
            >
              <Link href="/sobre" className="flex items-center space-x-2">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-900 dark:text-white" />
                  Sobre Nós
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botões de Ação */}
      <div className="flex items-center space-x-3">
        <ThemeToggle />
        <Link
          href="/reservas"
          className="bg-gray-900 dark:bg-yellow-400 text-white dark:text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-yellow-500 transition-colors"
        >
          Fazer Reserva
        </Link>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400 text-gray-700 dark:text-gray-300"
        >
          <div className="text-sm font-medium leading-none text-gray-900 dark:text-white">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
