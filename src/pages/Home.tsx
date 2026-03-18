import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'

interface HomeProps {
  onAddToCart: () => void
  onAddToFav: () => void
}

export default function Home({ onAddToCart, onAddToFav }: HomeProps) {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={onAddToCart} onAddToFav={onAddToFav} />
    </>
  )
}