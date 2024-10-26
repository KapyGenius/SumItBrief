import { FormEvent, useState } from "react"
import { linkIcon } from "../assets"

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    description: ''
  })

  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Form Submitted ${article.url}`)
  }

  const formatUrlHttps = (url: string) => {
    return url.includes('https://') || url.includes('http://') 
            ? url : `https://${url}`
  }

  return (
    <section className="mt-16 w-full max-w-xl">
        {/* Search */}
        <div className="flex flex-col w-full gap-2">
            <form 
                className="relative flex justify-center items-center"
                onSubmit={HandleSubmit}
            >
                <img 
                    src={linkIcon}
                    alt="link icon"
                    className="absolute left-0 my-2 ml-3 w-6"
                />
                <input 
                    type="url" 
                    placeholder="Paste the URL of the website" 
                    className="url_input peer"
                    value={formatUrlHttps(article.url)}
                    onChange={(e) => setArticle({ ...article, url: e.target.value })}
                    required
                />
                <button 
                    type="submit" 
                    className="submit_btn peer-focus:ring-2 peer-focus:text-gray-500 peer-focus:ring-gray-300"
                >
                    ↩️
                </button>
            </form>

            {/* Browse History */}

        </div>

        {/* Result */}

    </section>
  )
}

export default Demo