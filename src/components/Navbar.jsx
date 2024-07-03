import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className='bg-[#109BE9]'>
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
                                <li><Link to='/'>Business</Link></li>
                                <li><Link to='/'>Entertainment</Link></li>
                                <li><Link to='/'>General</Link></li>
                                <li><Link to='/'>Health</Link></li>
                                <li><Link to='/'>Science</Link></li>
                                <li><Link to='/'>Sports</Link></li>
                                <li><Link to='/'>Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className='flex justify-center items-center gap-8 '>
                        <li>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/'>Home</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/business'>Business</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/enter'>Entertainment</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/general'>General</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/science'>Science</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/sports'>Sports</NavLink>
                        </li>
                        <li className='md:block hidden'>
                            <NavLink className='text-white text-[18px] transition-all hover:text-blue-200' to='/technology'>Technology</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar