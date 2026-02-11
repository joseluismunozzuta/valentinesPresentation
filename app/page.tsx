"use client"
import { useState } from "react"
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import { ImagesChain } from "@/components/ImagesChain";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";

export default function Home() {

  const [position, setPosition] = useState({ top: 80, left: 80 })

  const moveButton = () => {
    const randomTop = Math.random() * (window.innerHeight - 80)
    const randomLeft = Math.random() * (window.innerWidth - 150)

    setPosition({
      top: randomTop,
      left: randomLeft,
    })
  }

  return (
    <>
      <div>
        <header className="relative w-full h-screen overflow-hidden">

          <img
            src="/bksun.jpg"
            alt="primeraCita"
            className="w-full h-full object-cover brightness-75" />

          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
            <h2 className="text-5xl md:text-8xl font-bold mb-4 drop-shadow-lg">Will you be my Valentine❤️</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">"Me enamoré de tu alma...🎵"</p>
            <button className="bg-red-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition"><a href="#valentine-section">❤️</a>

            </button>
          </div>
        </header>
      </div >

      <div id="valentine-section" className="relative flex flex-col h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <img
          src="/bk1.webp"
          alt="asthetic"
          className="w-full h-full object-cover brightness-80 opacity-30 absolute" />
        <h1 className="heartbeat text-2xl mx-10 my-3 text-center">De entre millones de personas en este mundo, eres la persona perfecta para celebrar el 14 de febrero. Eres tú❤️</h1>
        <AnimatedTestimonialsDemo />
        <button className="z-100 bg-lime-400 text-gray-900 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-lime-500"><a href="#reasons">Algunas razones para que seas mi San Valentín</a></button>
      </div>

      <div id="reasons" className="flex flex-col h-fit items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <ExpandableCardDemo />
        <button className="bg-red-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition my-16"><a href="#signals">Sigue aquí❤️</a></button>
      </div>

      <div id="signals" className="flex h-screen flex-col items-start justify-evenly bg-gray-800 font-sans dark:bg-black relative">
        <img
          src="/bk2.jpg"
          alt="astheticbk"
          className="w-full h-full object-cover brightness-80 opacity-30 absolute" />
        <div className="heartbeat text-center text-black bg-gray-100 dark:bg-neutral-800 rounded-lg px-6 py-3 mx-16 my-2">
          <h2 className="text-xl md:text-5xl font-bold mb-4 drop-shadow-lg">Señales de que debes decir que sí🤨</h2>
        </div>
        <div className="heartbeat z-100 text-center text-black bg-purple-200 dark:bg-neutral-800 rounded-xl px-4 mx-8 opacity-85">
          <p className="text-md opacity-90 my-4"> - Si estás leyendo esto, es porque así lo quiso el destino❤️</p>
          <p className="text-md opacity-90 my-4"> - Si ya sonreíste viendo esto, tienes que decir que sí😊</p>
          <p className="text-md opacity-90 my-4">Si te gusta la playita, mis besos, mis abrazos y las fotitos juntos, ES UN SÍ 100%😍</p>
        </div>
        <div className="heartbeat text-center text-black bg-cyan-300 dark:bg-neutral-800 rounded-xl px-3 py-3 mx-8 my-4 opacity-90">
          <h2 className="text-xl md:text-5xl font-bold mb-4 drop-shadow-lg">ENCIMA TE OFREZCO ESTOS CUPONES🤨</h2>
        </div>
        <img src="/tickets.png" alt="tickets" className="z-200 w-full mx-auto px-4 rounded-4xl" />
        <button className="z-100 bg-purple-300 mx-auto text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition my-5"><a href="#final">Siguiente</a></button>

      </div>

      <div id="final" className="flex h-screen flex-col items-start justify-end bg-whitefont-sans dark:bg-black relative">
        <ImagesChain />
        <div className="flex flex-col gap-6 h-fit items-center justify-center text-center z-100 mx-auto my-16 relative">
          <button className="h-16 w-full text-3xl z-200 bg-red-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition my-2 mx-auto"><a
            href="https://wa.me/51987570658?text=Soy%20tu%20San%20Valentin%20hoy%20y%20siempre%20,%20te%20quiero%20mucho%20mi%20amorcito%20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-3 rounded-lg"
          >Obvio mi amor❤️</a></button>
          <button id="escape-button"
            onMouseEnter={moveButton}
            onTouchStart={(e) => {
              e.preventDefault()
              moveButton()
            }}
            onClick={(e) => e.preventDefault()}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
            className="z-200 bg-gray-500 text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 transition my-2 mx-auto">Nop</button>
        </div>

        <ImagesChain />
        <img
          src="fondo.avif"
          alt="fondo"
          className="z-0 h-fit object-cover absolute inset-0" />
      </div>
    </>

  );
}
