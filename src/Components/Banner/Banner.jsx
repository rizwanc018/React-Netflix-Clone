import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Money Heist</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur nam error tenetur repellendus odit at maiores doloremque architecto</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner