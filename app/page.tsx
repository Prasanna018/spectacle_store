"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredProducts = [
  {
    id: 1,
    name: "Classic Round",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80",
  },
  {
    id: 4,
    name: "Aviator Style",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
  },
  {
    id: 9,
    name: "Geometric Hexagon",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1625591341337-13dc6e871cee?w=500&q=80",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="text-center mb-8">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Elevate Your Vision
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover your perfect pair of spectacles from our curated collection of stylish and high-quality eyewear.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/products">Explore Collection</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <Button asChild className="w-full mt-4">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

