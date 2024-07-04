import { Component } from 'react'

export class Empty extends Component {
    render() {
        return (
            <div className='w-full h-[300px] flex justify-center items-center'>
                <h1 className='text-[40px] text-red-500'>Product Not Found</h1>
            </div>
        )
    }
}

export default Empty