import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'



export class Navbar extends Component {
    render() {
        const { cart } = this.props
        return (
            <div className='bg-[#109BE9] ' >
                <nav className='max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between  '>
                    <div className='md:hidden block'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    stroke="white">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-xl dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/electronics'>Electronics</NavLink></li>
                                <li><NavLink to='/jewelery'>Jewelery</NavLink></li>
                                <li><NavLink to='/mens-clothing'>Men&apos;s Clothing</NavLink></li>
                                <li><NavLink to='/womens-clothing'>Women&apos;s Clothing</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <ul className='flex justify-center items-center gap-8 '>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/'>Home</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/electronics'>Electronics</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/jewelery'>Jewelery</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/mens-clothing'>Men&apos;s Clothing</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/womens-clothing'>Women&apos;s Clothing</NavLink>
                        </li>
                    </ul>
                    <Link to='/cart' className=' relative'>
                        <svg width={23} height={23} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
                        <span className='absolute bg-primary px-1 text-[12px] text-white rounded-lg top-[-7px] right-[-7px]'>{cart.length}</span>
                    </Link>
                </nav >
            </div >
        )
    }
}

export default Navbar