"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/agenda/capa.jpg", "/agenda/event1.jpg", "/agenda/event2.jpg"];

export default function CarrouselWithText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 p-8">
      {/* Carousel Section */}
      <div className="relative w-full lg:w-1/2 max-w-sm mx-auto group">
        <div className="overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 p-1">
          <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-900">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={images[currentIndex]}
                alt={`Evento ${currentIndex + 1}`}
                fill
                className="object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white p-3 rounded-full hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group/btn"
        >
          <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white p-3 rounded-full hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group/btn"
        >
          <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-500 scale-125 shadow-lg"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Próximos Eventos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Descubra os eventos mais animados do Salserin! Nossa agenda está
            sempre repleta de momentos especiais, com música ao vivo, dança e
            uma atmosfera única que só você encontra aqui.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              💃 Noites de salsa e bachata todos os fins de semana
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              🎵 Shows ao vivo com os melhores artistas locais
            </p>
          </div>

          <button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Ver Agenda Completa
          </button>
        </div>
      </div>
    </div>
  );
}
