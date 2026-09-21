import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../Navbar'
import postsData from '../data/posts.json'
import Footer from '../Footer'

function Blog() {

  const posts = postsData.posts

  const categories = [
    'جميع المقالات',
    'إضاءة',
    'بورتريه',
    'مناظر طبيعية',
    'تقنيات',
    'معدات'
  ]

  const [search, setSearch] = useState('')
  const [view, setView] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams()

  const category =
    searchParams.get('category') || 'جميع المقالات'



  const filteredPosts = posts.filter((post) => {

    const searchResult =
      post.title.includes(search) ||
      post.excerpt.includes(search)

    const categoryResult =
      category === 'جميع المقالات' ||
      post.category === category

    return searchResult && categoryResult
  })



  const postsPerPage = 6

  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  )

  const startIndex =
    (currentPage - 1) * postsPerPage

  const displayedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  )



  function handleSearch(e) {
    setSearch(e.target.value)
    setCurrentPage(1)
  }


  function handleCategory(selectedCategory) {

    setCurrentPage(1)

    if (selectedCategory === 'جميع المقالات') {

      setSearchParams({})

    } else {

      setSearchParams({
        category: selectedCategory
      })

    }
  }


  function clearCategory() {
    setSearchParams({})
    setCurrentPage(1)
  }


  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="pt-20 min-h-screen bg-[#0a0a0a] text-white"
      >

        

        <section className="relative py-20 overflow-hidden">

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(38,38,38,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(38,38,38,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>


          

          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>


          <div className="relative max-w-7xl mx-auto px-4 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/30 bg-orange-500/10 rounded-full mb-6">

              <span className="text-orange-500">
                ▣
              </span>

              <span className="text-sm text-neutral-300">
                مدونتنا
              </span>

            </div>


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">

              استكشف{' '}

              <span className="text-orange-500">
                مقالاتنا
              </span>

            </h1>


            <p className="text-xl text-neutral-400">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>

          </div>

        </section>


        

        <section className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">

          <div className="max-w-7xl mx-auto px-4 py-4">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">


              

              <div className="relative w-full md:w-80">

                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="ابحث في المقالات..."
                  className="w-full px-5 py-3 pr-5 pl-12 bg-[#161616] border border-[#262626] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                />


                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

              </div>


              

              <div className="flex flex-wrap justify-center gap-2">

                {categories.map((item) => (

                  <button
                    key={item}
                    onClick={() => handleCategory(item)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === item
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                        : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30'
                    }`}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          </div>

        </section>


        

        <section className="max-w-7xl mx-auto px-4 py-12">


          

          <div className="mb-8 flex items-center justify-between">


            

            <div>

              <p className="text-neutral-400">

                عرض{' '}

                <span className="font-bold text-white">
                  {filteredPosts.length}
                </span>

                {' '}مقالات

                {category !== 'جميع المقالات' && (
                  <>
                    {' '}في{' '}

                    <span className="text-orange-500 font-bold">
                      {category}
                    </span>
                  </>
                )}

              </p>

            </div>


            

            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">


              

              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg ${
                  view === 'grid'
                    ? 'bg-orange-500 text-white'
                    : 'text-neutral-400'
                }`}
              >

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>

              </button>


              

              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-lg ${
                  view === 'list'
                    ? 'bg-orange-500 text-white'
                    : 'text-neutral-400'
                }`}
              >

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

              </button>

            </div>

          </div>


          

          {category !== 'جميع المقالات' && (

            <div className="mb-8">

              <button
                onClick={clearCategory}
                className="text-neutral-500 hover:text-orange-500 text-sm transition"
              >
                ✕ مسح الفلتر
              </button>

            </div>

          )}


          

          {displayedPosts.length === 0 && (

            <div className="text-center py-20">

              <h2 className="text-2xl font-bold mb-3">
                لا توجد نتائج
              </h2>

              <p className="text-neutral-500">
                جرب البحث بكلمة أخرى
              </p>

            </div>

          )}


          

          <div
            className={
              view === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'flex flex-col gap-6'
            }
          >

            {displayedPosts.map((post) => (

              <article
                key={post.id}
                className={`group bg-[#161616] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 ${
                  view === 'list'
                    ? 'md:flex'
                    : ''
                }`}
              >


                

                <div
                  className={`relative overflow-hidden ${
                    view === 'list'
                      ? 'md:w-[350px] h-64 md:h-auto'
                      : 'h-52'
                  }`}
                >

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />


                  <div className="absolute top-4 right-4">

                    <span className="px-3 py-1 bg-[#0a0a0a]/80 text-white text-xs font-semibold rounded-full border border-[#333333]">
                      {post.category}
                    </span>

                  </div>

                </div>


                

                <div className="p-6 flex-1">

                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">

                    <span>
                      ◷ {post.readTime}
                    </span>

                    <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>

                    <span>
                      {post.date}
                    </span>

                  </div>


                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {post.title}
                  </h3>


                  <p className="text-neutral-400 mb-5 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>


                  

                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">

                    <div className="flex items-center gap-3">

                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      />


                      <div>

                        <p className="text-sm font-medium text-white">
                          {post.author.name}
                        </p>

                        <p className="text-xs text-neutral-500">
                          {post.author.role}
                        </p>

                      </div>

                    </div>


                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">

                      <span className="text-orange-500">
                        ←
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>


          

          {totalPages > 1 && (

            <>

              <div className="flex justify-center items-center gap-2 mt-12">


                

                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage(currentPage - 1)
                  }
                  className={`p-3 rounded-xl border border-[#262626] ${
                    currentPage === 1
                      ? 'text-neutral-600 cursor-not-allowed'
                      : 'bg-[#161616] text-white hover:border-orange-500'
                  }`}
                >
                  →
                </button>


                

                <div className="flex items-center gap-1">

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (

                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`min-w-[44px] h-11 rounded-xl text-sm font-medium ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                          : 'bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500'
                      }`}
                    >
                      {page}
                    </button>

                  ))}

                </div>


                

                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage(currentPage + 1)
                  }
                  className={`p-3 rounded-xl border border-[#262626] ${
                    currentPage === totalPages
                      ? 'text-neutral-600 cursor-not-allowed'
                      : 'bg-[#161616] text-white hover:border-orange-500'
                  }`}
                >
                  ←
                </button>

              </div>


              <p className="text-center text-neutral-500 mt-4 text-sm">

                صفحة {currentPage} من {totalPages}

              </p>

            </>

          )}

        </section>

      </main>
        <Footer />
    </>
  )
}

export default Blog