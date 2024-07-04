import { Component } from 'react';

class CartPage extends Component {
    render() {
        const { cart, removeFromCart } = this.props;

        return (
            <div className='max-w-7xl mx-auto px-5'>
                {cart.length ? <h1 className='text-3xl mt-4'>Cart Products ({cart.length})</h1> : ''}
                <div className='flex flex-wrap gap-4 justify-evenly my-5'>
                    {
                        cart.length ? cart.map((product) => (
                            <div key={product.id} className="border shadow-xl w-[296px] mb-6 transition-all hover:shadow-2xl rounded-lg own-card overflow-hidden pt-3">
                                <div className='relative '>
                                    <img src={product.image} className='w-[220px] h-[220px] object-contain mx-auto' alt={product.title} />
                                    <div className='px-3 py-2 absolute bottom-0 bg-white border'><p className='text-[#9A9AB0] text-[14px] font-bold'>{product.category}</p></div>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-[16px] font-bold">{product.title.slice(0, 29)}</h2>
                                    <p className='text-blue-500 mt-1'>{product.description.slice(0, 90)}...</p>
                                    <div className="flex gap-1 mt-4 justify-between">
                                        <p className='text-[#ffffff] flex gap-1 px-2 py-1 text-[14px] rounded-lg bg-yellow-500 border'>Price <span>{product.price}$</span></p>
                                        <p className='text-[#ffffff] flex gap-1 px-2 py-1 text-[14px] rounded-lg bg-blue-500 border'>Rating <span>{product.rating.rate}</span></p>
                                        <p className='text-[#ffffff] flex gap-1 px-2 py-1 text-[14px] rounded-lg bg-green-500 border'>Count <span>{product.rating.count}</span></p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button onClick={() => removeFromCart(product.id)} className="btn w-full mt-4 btn-primary">Remove product</button>
                                    </div>
                                </div>
                            </div>
                        )) : <h2 className="text-[30px] font-semibold mb-2">Your Cart is Empty</h2>
                    }
                </div>
            </div>
        );
    }
}


export default CartPage

