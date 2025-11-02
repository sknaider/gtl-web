"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo GTL */}
            <div className="relative w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="GTL Consulting - Especialistas en Exportación de Valorados"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Texto */}
            <span className="text-2xl sm:text-3xl font-bold">
              <span className="text-brand-primary">GTL</span>{" "}
              <span className="text-gray-900">Consulting</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Nosotros
            </Link>
            <Link href="/servicios" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Servicios
            </Link>
            <Link href="/tracking" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Seguimiento
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-brand-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="/#contacto">
              <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90">
                Solicitar Cotización
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link href="/nosotros" className="text-sm font-medium">Nosotros</Link>
              <Link href="/servicios" className="text-sm font-medium">Servicios</Link>
              <Link href="/tracking" className="text-sm font-medium">Seguimiento</Link>
              <Link href="/contacto" className="text-sm font-medium">Contacto</Link>
              <a href="/#contacto" className="w-full">
                <Button size="sm" className="w-full">Solicitar Cotización</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
