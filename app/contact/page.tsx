import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-lg">
            Name
          </label>
          <Input id="name" placeholder="Your name" className="w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <Input id="email" type="email" placeholder="Your email" className="w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-lg">
            Message
          </label>
          <Textarea id="message" placeholder="Your message" className="w-full" />
        </div>
        <Button type="submit" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}

