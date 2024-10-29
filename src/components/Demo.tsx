import { FormEvent, useEffect, useState } from "react"
import { copy, linkIcon, loader } from "../assets"
import { useLazyGetSummaryQuery } from "../services/article"

interface Article {
  url: string
  description: string
}

const Demo = () => {
  const [article, setArticle] = useState<Article>({
    url: '',
    description: ''
  })
  const [allArticles, setAllArticles] = useState<Article[]>([])

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromStorage = localStorage.getItem('articles')
    if (articlesFromStorage) {
      setAllArticles(JSON.parse(articlesFromStorage))
    }
  }, [])
  

  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {data} = await getSummary({ url: article.url })
    if (data) {
      const newArticle = { ...article, description: data.summary }
      const updatedArticles = [newArticle, ...allArticles]
      setArticle(newArticle)
      setAllArticles(updatedArticles)
      localStorage.setItem('articles', JSON.stringify(updatedArticles))
    }
    alert(`Form Submitted ${article.url}`)
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
                    type="text"
                    pattern=".{2,}\..{2,}" 
                    placeholder="Paste the URL of the website" 
                    className="url_input peer"
                    value={article.url.toLowerCase()}
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
            <div className="flex flex-col gap-1 max-h-60 overscroll-y-auto">
              {allArticles.map((article, index) => (
                <div
                key={`link-${index}`}
                onClick={() => setArticle(article)}
                className="link_card"
                >
                  <div className="copy_btn">
                    <button 
                      onClick={() => navigator.clipboard.writeText(article.url)}
                      className="copy_btn"
                    >
                      <img
                        src={copy}
                        alt="copy icon"
                        className="w-[40%] h-[40%] object-contain"
                      />
                    </button>
                  </div>
                  
                  <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                      {article.url}
                  </p>
                </div>
              ))}
            </div>

        </div>

        {/* Result */}
        <div className="my-10 max-w-full flex justify-center items-center">
          {isFetching ? (
            <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
          ): error ? (
            <p className="font-inter font-bold text-black text-center "> 
              Something went wrong...
              <br />
              <span className="font-satoshi font-normal text-gray-700 ">

              </span>
            </p>
          ):(
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700"> 
                  {article.description}
                  <br />
                </p>
              </div>
            </div>
          )}
        </div>
    </section>
  )
}

export default Demo