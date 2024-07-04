import { Component, Fragment } from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export class Layout extends Component {
    render() {
        const { cart } = this.props
        return (
            <Fragment>
                <Navbar cart={cart} />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default Layout