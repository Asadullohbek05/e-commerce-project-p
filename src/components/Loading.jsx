import { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div className=' w-full h-[300px] flex justify-center items-center '>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
}

export default Loading