import { Component } from 'react'
import NewsData from '../constants/NewsData'

import arrowRight from "../assets/icon-next.svg"
import arrowLeft from "../assets/icon-previous.svg"
import { NewsCard } from './../components/NewsCard';

export class HomePage extends Component {
    render() {
        return (
            <div className='max-w-7xl mx-auto px-5'>
                <input type="text" placeholder="Searching..." className="input input-bordered w-full my-5" />
                <div className='flex flex-wrap gap-4 justify-evenly my-5 []'>
                    {
                        NewsData.map((item) => {
                            return (
                                <NewsCard key={item.id}  {...item} />
                            )
                        })
                    }
                </div>
                <div className='flex justify-center mb-10'>
                    <div className="join">
                        <button className="join-item btn bg-transparent border-none outline-none disabled">
                            <img src={arrowLeft} alt="" />
                        </button>
                        <div className='flex sm:gap-4 gap-1'>
                            <input className="btn btn-square rounded-md" type="radio" name="options" aria-label="1" defaultChecked />
                            <input className="btn btn-square rounded-md" type="radio" name="options" aria-label="2" />
                            <input className="btn btn-square rounded-md" type="radio" name="options" aria-label="3" />
                            <input className="btn btn-square rounded-md" type="radio" name="options" aria-label="4" />
                            <input className="btn btn-square rounded-md" type="radio" name="options" aria-label="5" />
                            {/* <button className='btn btn-square rounded-md active'>1</button>
                            <button className='btn btn-square rounded-md active'>2</button>
                            <button className='btn btn-square rounded-md active'>3</button>
                            <button className='btn btn-square rounded-md active'>4</button>
                            <button className='btn btn-square rounded-md active'>5</button> */}
                        </div>
                        <button className="join-item btn bg-transparent border-none outline-none">
                            <img src={arrowRight} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage


