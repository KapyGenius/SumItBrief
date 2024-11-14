import { logo } from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="w-full flex justify-between items-center pt-4 pb-10">
          
          <div>
            <img src={logo} alt="logo sumitbrief kapygenius" className="w-96 object-contain" />
          </div>

          <div className="w-full flex justify-end">
            <button 
              type="button" 
              onClick={() => window.open('mailto:contact@kapygenius.com')}
              className="black_btn"
              >
              Contact Me
            </button>
          </div>
          
          
        </nav>

        <h1 className="head_text">
            Save Time and summarize any Website <br />
            <span className="orange_gradient">Quick and fast</span>
        </h1>

        <h2 className="desc">
            SumitBrief let's you summarize any article or blog post in seconds. <br />
            Paste the URL of the website, and let SumitBrief do the rest.
        </h2>
    </header>
  )
}

export default Hero
