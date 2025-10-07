import GridPratos from "./_components/GridPratos";

export default function CardapioPage() {
    return (
        <main className="bg-gray-100 dark:bg-yellow-800/10 text-gray-900 dark:text-white min-h-screen">
            <section className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Prove
            </h1>
            <p className="text-center text-lg mb-12">
                Confira nossa agenda e fique por dentro dos próximos eventos!
            </p>
            <GridPratos />
            </section>
        </main>
    );
}