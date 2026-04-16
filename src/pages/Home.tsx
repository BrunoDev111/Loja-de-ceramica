import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'

interface HomeProps {
  onAddToFav: () => void
}

export default function Home({ onAddToFav }: HomeProps) {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts onAddToFav={onAddToFav} />
    </>
  )
}