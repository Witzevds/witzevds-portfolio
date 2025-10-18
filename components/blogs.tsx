import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices and architectural patterns for building large-scale React applications that are maintainable and performant.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "React",
    image: "/react-code-on-screen.png",
  },
  {
    title: "The Future of Web Development",
    excerpt:
      "Exploring emerging trends in web development including AI integration, edge computing, and the evolution of JavaScript frameworks.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Web Development",
    image: "/futuristic-web-development.png",
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt:
      "A deep dive into TypeScript generics with practical examples and use cases that will level up your type-safe code.",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "TypeScript",
    image: "/typescript-code-editor.jpg",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt:
      "Understanding the differences between CSS Grid and Flexbox, and making the right choice for your layout needs.",
    date: "2024-12-28",
    readTime: "5 min read",
    category: "CSS",
    image: "/css-layout-design.jpg",
  },
  {
    title: "Optimizing Next.js Performance",
    excerpt:
      "Practical tips and techniques for improving the performance of your Next.js applications, from image optimization to caching strategies.",
    date: "2024-12-20",
    readTime: "7 min read",
    category: "Next.js",
    image: "/nextjs-performance-dashboard.jpg",
  },
  {
    title: "Design Systems That Scale",
    excerpt: "How to build and maintain design systems that grow with your product and keep your team aligned.",
    date: "2024-12-15",
    readTime: "9 min read",
    category: "Design",
    image: "/design-system-components.png",
  },
]

export function Blogs() {
  return (
    <section id="blogs" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-4 mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">Latest Articles</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Thoughts on web development, design, and building better digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <Badge variant="secondary" className="w-fit text-xs">
                  {blog.category}
                </Badge>

                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-balance">
                  {blog.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{blog.excerpt}</p>

                <Button variant="ghost" className="w-fit group/btn -ml-4 mt-2">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
