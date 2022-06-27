import './card.css'

function Card() {
    return (
        <div>
            <label className='card-wrap'>
                <input type="checkbox" className='flipcard'>
                    <div className='card'>
                        <div className='front card-face'>
                            <img src="https://images.unsplash.com/photo-1517374148673-a38e9dd4fe6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className='card-photo' />
                        </div>
                        <div className='back card-face'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </input>
            </label>
        </div>
    )
}

export default Card