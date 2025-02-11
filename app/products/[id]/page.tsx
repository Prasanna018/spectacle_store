import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Classic Round",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80",
    description: "Timeless round frames that never go out of style.",
  },
  {
    id: 2,
    name: "Modern Square",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80",
    description: "Contemporary square frames for a bold, edgy look.",
  },
  {
    id: 3,
    name: "Retro Cat Eye",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
    description: "Vintage-inspired cat eye frames for a touch of glamour.",
  },
  {
    id: 4,
    name: "Aviator Style",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    description: "Classic aviator frames for a cool, confident appearance.",
  },
  {
    id: 5,
    name: "Oversized Glam",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&q=80",
    description: "Large, glamorous frames for a statement look.",
  },
  {
    id: 6,
    name: "Minimalist Rimless",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1633621641966-23836fcafd7f?w=500&q=80",
    description: "Sleek, rimless frames for a barely-there feel.",
  },
  {
    id: 7,
    name: "Sporty Wrap",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1614715838608-dd527c46231f?w=500&q=80",
    description: "Wrap-around frames perfect for active lifestyles.",
  },
  {
    id: 8,
    name: "Vintage Browline",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&q=80",
    description: "Retro-inspired browline frames for a sophisticated look.",
  },
  {
    id: 9,
    name: "Geometric Hexagon",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1625591341337-13dc6e871cee?w=500&q=80",
    description: "Unique hexagonal frames for those who dare to be different.",
  },
  {
    id: 10,
    name: "Colorful Acetate",
    price: 144.99,
    image: "https://images.unsplash.com/photo-1602178856795-e8e310bd5d66?w=500&q=80",
    description: "Vibrant acetate frames to add a pop of color to your style.",
  },
  {
    id: 11,
    name: "Sleek Metal",
    price: 154.99,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=500&q=80",
    description: "Thin metal frames for a refined, professional look.",
  },
  {
    id: 12,
    name: "Eco-friendly Bamboo",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?w=500&q=80",
    description: "Sustainable bamboo frames for the environmentally conscious.",
  },
  {
    id: 13,
    name: "Designer Logo",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1604785846291-2ed23a472c4b?w=500&q=80",
    description: "Luxury frames featuring designer logos for brand enthusiasts.",
  },
  {
    id: 14,
    name: "Blue Light Blocking",
    price: 134.99,
    image: "https://images.unsplash.com/photo-1616015046219-ea8a850c9d18?w=500&q=80",
    description: "Protective frames that filter out harmful blue light from screens.",
  },
  {
    id: 15,
    name: "Foldable Travel",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=500&q=80",
    description: "Convenient foldable frames perfect for travelers.",
  },
  {
    id: 16,
    name: "Clip-on Sunglasses",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
    description: "Versatile frames with detachable sun lenses.",
  },
  {
    id: 17,
    name: "Photochromic Lenses",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1587929501535-1e2d559e8f33?w=500&q=80",
    description: "Adaptive lenses that darken in sunlight for all-day comfort.",
  },
  {
    id: 18,
    name: "Luxury Gold Frame",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80",
    description: "Opulent gold-plated frames for a touch of luxury.",
  },
  {
    id: 19,
    name: "Kids' Durable",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
    description: "Sturdy, comfortable frames designed for active children.",
  },
  {
    id: 20,
    name: "Prescription Ready",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&q=80",
    description: "Versatile frames ready for your prescription lenses.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4 text-primary">${product.price.toFixed(2)}</p>
          <p className="mb-6 text-lg">{product.description}</p>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

