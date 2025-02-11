import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Classic Round",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80",
  },
  {
    id: 2,
    name: "Modern Square",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80",
  },
  {
    id: 3,
    name: "Retro Cat Eye",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
  },
  {
    id: 4,
    name: "Aviator Style",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
  },
  {
    id: 5,
    name: "Oversized Glam",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&q=80",
  },
  {
    id: 6,
    name: "Minimalist Rimless",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1633621641966-23836fcafd7f?w=500&q=80",
  },
  {
    id: 7,
    name: "Sporty Wrap",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1614715838608-dd527c46231f?w=500&q=80",
  },
  {
    id: 8,
    name: "Vintage Browline",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&q=80",
  },
  {
    id: 9,
    name: "Geometric Hexagon",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1625591341337-13dc6e871cee?w=500&q=80",
  },
  {
    id: 10,
    name: "Colorful Acetate",
    price: 144.99,
    image: "https://images.unsplash.com/photo-1602178856795-e8e310bd5d66?w=500&q=80",
  },
  {
    id: 11,
    name: "Sleek Metal",
    price: 154.99,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=500&q=80",
  },
  {
    id: 12,
    name: "Eco-friendly Bamboo",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?w=500&q=80",
  },
  {
    id: 13,
    name: "Designer Logo",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1604785846291-2ed23a472c4b?w=500&q=80",
  },
  {
    id: 14,
    name: "Blue Light Blocking",
    price: 134.99,
    image: "https://images.unsplash.com/photo-1616015046219-ea8a850c9d18?w=500&q=80",
  },
  {
    id: 15,
    name: "Foldable Travel",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=500&q=80",
  },
  {
    id: 16,
    name: "Clip-on Sunglasses",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
  },
  {
    id: 17,
    name: "Photochromic Lenses",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1587929501535-1e2d559e8f33?w=500&q=80",
  },
  {
    id: 18,
    name: "Luxury Gold Frame",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80",
  },
  {
    id: 19,
    name: "Kids' Durable",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
  },
  {
    id: 20,
    name: "Prescription Ready",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Spectacles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

