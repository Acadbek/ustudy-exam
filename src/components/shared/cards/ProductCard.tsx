import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ProductBag, Scales } from '@/components/icons'
import { useAudio } from "react-use"
import mp3 from '/music/mp3.mp3'
import { Link } from "react-router-dom"
import React from "react"
import { ProductsContext } from "@/store/products"

type ProductTypes = {
    name: string,
    brand: string,
    price: number,
    image: string
}

const ProductCard = ({ data }: ProductTypes) => {
    const [audio, state, controls, ref] = useAudio({
        src: mp3,
        autoPlay: true,
    });

    const { addToCart } = React.useContext(ProductsContext)

    const link = () => {
        return data.name.replace('%20', ' ')
    }

    // React.useEffect(() => {
    //     console.log(link(), 'hello');
    // }, [])

    return (
        // <Link to={`/product/${link()}`}>
        <Card>
            <CardContent className="relative">
                <div className="flex items-center gap-2 absolute right-2 top-2">
                    <Scales className="product-svg cursor-pointer" width={20} />
                    <Heart className="product-svg cursor-pointer" width={20} />
                </div>
                <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fproducts%2FJuly2024%2F4w393Cj77Mb7CPgndp9l-medium.jpg&w=256&q=75" alt="" />
                <p className="font-bold text-[#20A752]">{data.price}</p>
                <h2 className="font-bold">{data.name}</h2>
                <p className="text-gray-500 font-bold text-[13px]">{data.brand}</p>

                <div className="grid grid-cols-4 gap-2 mt-4">
                    <Button variant="outline" className="col-span-3">Buy now</Button>
                    <Button onClick={() => addToCart(data)}> <ProductBag /> </Button>
                </div>
                {audio}
            </CardContent>
        </Card>
        // </Link>
    )
}

export default ProductCard