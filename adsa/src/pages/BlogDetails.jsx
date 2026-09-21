import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import postsData from '../data/posts.json'
import Footer from '../Footer'

function BlogDetails() {

  const { slug } = useParams()

  const post = postsData.posts.find(
    (post) => post.slug === slug
  )

  if (!post) {
    return (
      <>
        <Navbar />

        <div
          dir="rtl"
          className="pt-32 min-h-screen bg-[#0a0a0a] text-white text-center"
        >
          <h1 className="text-6xl font-bold mb-5">
            404
          </h1>

          <p className="text-neutral-400 mb-8">
            المقال غير موجود
          </p>

          <Link
            to="/"
            className="bg-orange-500 px-6 py-3 rounded-xl"
          >
            العودة للرئيسية
          </Link>
        </div>
      </>
    )
  }


  const contentParts = post.content.split('\n\n')

  const headings = contentParts
    .filter((part) => part.startsWith('## '))
    .map((part) => part.replace('## ', ''))

  const relatedPosts = postsData.posts
    .filter(
      (item) =>
        item.category === post.category &&
        item.id !== post.id
    )
    .slice(0, 3)


  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="pt-20 bg-[#0a0a0a] min-h-screen text-white"
      >

        

        <article>

          <div className="relative h-[60vh] min-h-[500px] overflow-hidden">

            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>


            

            <div className="absolute top-8 right-8 left-8">

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">

                <Link
                  to="/"
                  className="text-white/70 hover:text-white"
                >
                  الرئيسية
                </Link>

                <span className="text-white/30">
                  ‹
                </span>

                <Link
                  to="/blog"
                  className="text-white/70 hover:text-white"
                >
                  المدونة
                </Link>

                <span className="text-white/30">
                  ‹
                </span>

                <span className="text-orange-400">
                  {post.category}
                </span>

              </div>

            </div>


            

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">

              <div className="max-w-5xl mx-auto">

                <div className="flex flex-wrap items-center gap-3 mb-6">

                  <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-4 text-white/70 text-sm">

                    <span>
                      📅 {post.date}
                    </span>

                    <span>
                      ◷ {post.readTime}
                    </span>

                  </div>

                </div>


                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                  {post.title}
                </h1>


                

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">

                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  />

                  <div>

                    <p className="font-bold text-white">
                      {post.author.name}
                    </p>

                    <p className="text-sm text-white/60">
                      {post.author.role}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="grid lg:grid-cols-[1fr_300px] gap-12">


              

              <div className="order-2 lg:order-1">


                

                <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">

                  <p className="text-lg text-neutral-200 leading-relaxed italic">
                    "{post.excerpt}"
                  </p>

                </div>


                

                <div>

                  {contentParts.map((part, index) => {

                    if (part.startsWith('## ')) {

                      const title = part.replace('## ', '')

                      const sectionNumber =
                        headings.indexOf(title)

                      return (
                        <h2
                          id={`section-${sectionNumber}`}
                          key={index}
                          className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                        >

                          <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 text-orange-500">
                            📷
                          </span>

                          {title}

                        </h2>
                      )
                    }


                    return (
                      <p
                        key={index}
                        className="text-neutral-300 leading-relaxed mb-6 text-lg"
                      >
                        {part}
                      </p>
                    )

                  })}

                </div>


                

                <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      🏷
                    </div>

                    <h3 className="font-bold text-white">
                      الوسوم
                    </h3>

                  </div>


                  <div className="flex flex-wrap gap-2">

                    {post.tags.map((tag) => (

                      <span
                        key={tag}
                        className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition"
                      >
                        #{tag}
                      </span>

                    ))}

                  </div>

                </div>


                

                <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    />

                    <div className="text-center sm:text-right flex-1">

                      <span className="text-xs text-orange-500 font-semibold">
                        كاتب المقال
                      </span>

                      <h3 className="text-xl font-bold text-white mt-1">
                        {post.author.name}
                      </h3>

                      <p className="text-neutral-500 text-sm mb-3">
                        {post.author.role}
                      </p>

                      <p className="text-neutral-400 text-sm leading-relaxed">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              

              <aside className="order-1 lg:order-2">

                <div className="lg:sticky lg:top-24 space-y-6">


                  

                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                    <div className="flex items-center gap-3 mb-5">

                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        ☰
                      </div>

                      <h3 className="font-bold text-white">
                        محتويات المقال
                      </h3>

                    </div>


                    <nav className="space-y-2">

                      {headings.map((heading, index) => (

                        <a
                          key={index}
                          href={`#section-${index}`}
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition"
                        >

                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold">
                            {index + 1}
                          </span>

                          <span className="text-sm">
                            {heading}
                          </span>

                        </a>

                      ))}

                    </nav>

                  </div>


                  

                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                    <div className="grid grid-cols-2 gap-4">

                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                        <p className="text-orange-500 text-xl mb-2">
                          ◷
                        </p>

                        <p className="text-white font-bold text-sm">
                          {post.readTime}
                        </p>

                        <p className="text-neutral-500 text-xs">
                          وقت القراءة
                        </p>

                      </div>


                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                        <p className="text-orange-500 text-xl mb-2">
                          📅
                        </p>

                        <p className="text-white font-bold text-sm">
                          {post.date}
                        </p>

                        <p className="text-neutral-500 text-xs">
                          تاريخ النشر
                        </p>

                      </div>

                    </div>

                  </div>


                  

                  <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 text-center">

                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl">
                      ✉
                    </div>

                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>

                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>

                    <Link
                      to="/blog"
                      className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition"
                    >
                      تصفح المزيد
                    </Link>

                  </div>

                </div>

              </aside>

            </div>


            

            <div className="mt-20 pt-12 border-t border-[#262626]">

              <div className="flex items-center justify-between mb-10">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>

                  <p className="text-neutral-500 text-sm mt-2">
                    استكشف المزيد من المحتوى المميز
                  </p>

                </div>

                <Link
                  to="/blog"
                  className="text-orange-500"
                >
                  عرض الكل ←
                </Link>

              </div>


              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {relatedPosts.map((item) => (

                  <div
                    key={item.id}
                    className="bg-[#111111] rounded-2xl overflow-hidden border border-[#262626]"
                  >

                    <div className="relative h-48">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 rounded-full text-xs">
                        {item.category}
                      </span>

                    </div>


                    <div className="p-5">

                      <h3 className="font-bold text-white mb-3">
                        {item.title}
                      </h3>

                      <div className="flex items-center justify-between text-sm text-neutral-500">

                        <span className="flex items-center gap-2">

                          <img
                            src={item.author.avatar}
                            alt={item.author.name}
                            className="w-6 h-6 rounded-full"
                          />

                          {item.author.name}

                        </span>

                        <span>
                          {item.readTime}
                        </span>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </article>

      </main>
        <Footer />
    </>
  )
}

export default BlogDetails