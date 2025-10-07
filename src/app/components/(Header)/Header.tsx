import { NavigationMenuHeader } from "./_components/Navigation/NavigationMenu";

export default function Header() {
  return (
    <header className="w-full h-16 bg-yellow-400 dark:bg-gray-900 border-b border-yellow-500 dark:border-gray-800 shadow-lg transition-colors">
      <NavigationMenuHeader />
    </header>
  );
}
