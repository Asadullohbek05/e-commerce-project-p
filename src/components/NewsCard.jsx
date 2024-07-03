import { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsCard extends Component {
    render() {
        const { image, title, id, author, date, category } = this.props
        return (
            <Link to={`/news-detail/${id}`} key={id} className="shadow-xl w-[296px] mb-6 transition-all hover:shadow-2xl">
                <div className='relative'>
                    <img src={image} alt={title} />
                    <div className='px-4 py-3 absolute bottom-0 bg-white'><p className='text-[#9A9AB0] text-[15px] '>{category}</p></div>
                </div>
                <div className="p-4">
                    <h2 className="card-title text-[24px] leading-[28.8px] font-bold spas">{title}</h2>
                    <div className="flex gap-4 mt-4">
                        <span className='text-[#9A9AB0]'>{author}</span>
                        <span className='text-[#9A9AB0]'>{date}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default NewsCard