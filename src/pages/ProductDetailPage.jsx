import axios from 'axios'
import { Component } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

export class ProductDetailPage extends Component {
    state = {
        product: {},
        loading: false
    }

    async getProduct() {
        try {
            this.setState({ loading: true })
            const productID = window.location.pathname.split('/')[2]
            const { data } = await axios(`https://fakestoreapi.com/products/${productID}`)
            this.setState({ product: data })
        } catch (err) {
            console.log(err)
        } finally {
            this.setState({ loading: false })
        }
    }

    componentDidMount() {
        this.getProduct()
    }

    render() {
        const { product, loading } = this.state
        console.log(product)
        return (
            <div>
                {loading ? <Loading /> : <div className='max-w-7xl mx-auto p-5'>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className='p-5'>
                            <img
                                className='lg:w-[450px] lg:h-[450px] md:w-[350px] w-[70%] object-contain'
                                src={product.image}
                                alt="Album" />
                        </figure>
                        <div className="card-body lg:w-[50%]">
                            <h2 className="card-title text-[30px]">{product.title}</h2>
                            <p className='text-[20px] h-auto mt-3'>{product.description}</p>
                            <span className='text-[20px] mt-5'>Category : {product.category}</span>
                            {
                                product.rating && (
                                    <div className='flex gap-5 mt-5'>
                                        <span className='text-[20px]'>Rating: {product.rating.rate}</span>
                                        <span className='text-[20px]'>Count: {product.rating.count}</span>
                                    </div>
                                )
                            }
                            <div className="card-actions justify-end">
                                <Link to='/' className="btn btn-primary mt-4 sm:w-[150px] w-full">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>


        )
    }
}

export default ProductDetailPage