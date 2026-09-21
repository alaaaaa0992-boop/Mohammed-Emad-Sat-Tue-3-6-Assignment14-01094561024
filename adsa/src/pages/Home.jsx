import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import postsData from '../data/posts.json'
import Footer from '../Footer'

function Home() {

  const featuredPosts = postsData.posts
    .filter((post) => post.featured)
    .slice(0, 3)

  const categories = postsData.categories
  const latestPosts = postsData.posts.filter((post) =>
  [4, 5, 6].includes(post.id)
)

  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="pt-20 bg-[#0a0a0a] text-white"
      >

        

        <section className="relative min-h-[90vh] flex items-center overflow-hidden">

          
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


          
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>


          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

            <div className="text-center max-w-4xl mx-auto">


              

              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">

                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>

                <span className="text-sm text-neutral-300">
                  مرحباً بك في عدسة
                </span>

              </div>


              

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">

                اكتشف{' '}

                <span className="text-orange-500">
                  فن
                </span>

                <br />

                التصوير الفوتوغرافي

              </h1>


              

              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>


              

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">

                <Link
                  to="/blog"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold transition"
                >
                  استكشف المقالات ←
                </Link>


                <a
                  href="#featured"
                  className="px-8 py-4 border border-[#333333] hover:border-orange-500 rounded-xl font-bold transition"
                >
                  ⓘ اعرف المزيد
                </a>

              </div>


              

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

                <div className="bg-[#161616] border border-[#262626] rounded-2xl p-5">

                  <p className="text-3xl font-bold text-orange-500">
                    +50
                  </p>

                  <p className="text-neutral-500 text-sm mt-1">
                    مقالة
                  </p>

                </div>


                <div className="bg-[#161616] border border-[#262626] rounded-2xl p-5">

                  <p className="text-3xl font-bold text-orange-500">
                    +10ألف
                  </p>

                  <p className="text-neutral-500 text-sm mt-1">
                    قارئ
                  </p>

                </div>


                <div className="bg-[#161616] border border-[#262626] rounded-2xl p-5">

                  <p className="text-3xl font-bold text-orange-500">
                    4
                  </p>

                  <p className="text-neutral-500 text-sm mt-1">
                    تصنيفات
                  </p>

                </div>


                <div className="bg-[#161616] border border-[#262626] rounded-2xl p-5">

                  <p className="text-3xl font-bold text-orange-500">
                    6
                  </p>

                  <p className="text-neutral-500 text-sm mt-1">
                    كاتب
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        

        <section
          id="featured"
          className="py-24 bg-[#0a0a0a]"
        >

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">

              <div>

                <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/30 bg-orange-500/10 rounded-full mb-4">

                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>

                  <span className="text-orange-500 text-sm">
                    مميز
                  </span>

                </div>


                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  مقالات مختارة
                </h2>


                <p className="text-neutral-400 mt-4 text-lg">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>

              </div>


              <Link
                to="/blog"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition"
              >
                عرض الكل ←
              </Link>

            </div>


            

            <div className="space-y-8">

              {featuredPosts.map((post) => (

                <article
                  key={post.id}
                  className="group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >

                  <Link to={`/blog/${post.slug}`}>

                    <div className="grid md:grid-cols-2">


                      

                      <div className="relative h-72 md:h-[400px] overflow-hidden">

                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />


                        <div className="absolute top-4 right-4">

                          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold px-3 py-2 rounded-full">
                            ★ مميز
                          </span>

                        </div>

                      </div>


                      

                      <div className="p-8 md:p-10 flex flex-col">

                        <div className="flex items-center gap-3 mb-5">

                          <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full border border-orange-500/20">
                            {post.category}
                          </span>

                          <span className="text-neutral-500 text-sm">
                            ◷ {post.readTime}
                          </span>

                        </div>


                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition">
                          {post.title}
                        </h3>


                        <p className="text-neutral-400 leading-relaxed mb-8">
                          {post.excerpt}
                        </p>


                        <div className="flex items-center justify-between mt-auto">


                          

                          <div className="flex items-center gap-3">

                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-[#262626]"
                            />


                            <div>

                              <p className="text-white font-semibold">
                                {post.author.name}
                              </p>

                              <p className="text-neutral-500 text-xs">
                                {post.date}
                              </p>

                            </div>

                          </div>


                          <span className="text-orange-500 font-semibold">
                            اقرأ المقال ←
                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>


        

        <section className="py-24 bg-[#111111] relative border-y border-[#262626]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            

            <div className="text-center mb-12">

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">

                <span className="relative flex h-2 w-2">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>

                </span>


                <span className="text-orange-500 text-sm font-medium">
                  التصنيفات
                </span>

              </div>


              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                استكشف حسب الموضوع
              </h2>


              <p className="text-neutral-400 text-lg">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>

            </div>


            

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

              {categories.map((item) => (

                <Link
                  key={item.name}
                  to={`/blog?category=${encodeURIComponent(item.name)}`}
                  className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                >

                  

                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                  <div className="relative z-10">


                    

                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 border border-orange-500/20 group-hover:border-transparent transition-all duration-300">

                      <svg
                        className="w-6 h-6 text-orange-500 group-hover:text-white transition"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>

                    </div>


                    

                    <h3 className="font-bold text-lg text-white mb-1">
                      {item.name}
                    </h3>


                    

                    <p className="text-sm text-neutral-500 group-hover:text-white/80 transition">
                      {item.count} مقالة
                    </p>


                    

                    <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">

                      <span className="text-white">
                        ←
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
              

<section className="py-24 bg-[#0a0a0a] relative overflow-hidden">

  
  <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>


  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


    

    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">

      <div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">

          <span className="relative flex h-2 w-2">

            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>

            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>

          </span>

          <span className="text-orange-500 text-sm font-medium">
            الأحدث
          </span>

        </div>


        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          أحدث المقالات
        </h2>


        <p className="text-neutral-400 text-lg">
          محتوى جديد طازج من المطبعة
        </p>

      </div>


      <Link
        to="/blog"
        className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition"
      >
        عرض جميع المقالات

        <span className="group-hover:-translate-x-1 transition">
          ←
        </span>

      </Link>

    </div>


    

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {latestPosts.map((post) => (

        <article
          key={post.id}
          className="group bg-[#161616] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500"
        >


          

          <div className="relative h-52 overflow-hidden">

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


            <div className="absolute top-4 right-4">

              <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                {post.category}
              </span>

            </div>

          </div>


          

          <div className="p-6">

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


              <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500 group-hover:border-transparent transition">

                <span className="text-orange-500 group-hover:text-white transition">
                  ←
                </span>

              </div>

            </div>

          </div>

        </article>

      ))}

    </div>

  </div>

</section>




<section className="py-24 relative overflow-hidden bg-[#0a0a0a]">

  
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>


  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">


      

      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">

        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

      </div>


      

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">

        اشترك في{' '}

        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
          نشرتنا الإخبارية
        </span>

      </h2>


      

      <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
        احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
      </p>


      

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
      >

        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
        />

        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
        >
          اشترك الآن
        </button>

      </form>


      

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">

        <div className="flex items-center gap-4">


          

          <div className="flex -space-x-2 space-x-reverse">

            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
              alt=""
              className="w-8 h-8 rounded-full border-2 border-[#161616]"
            />

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
              alt=""
              className="w-8 h-8 rounded-full border-2 border-[#161616]"
            />

            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt=""
              className="w-8 h-8 rounded-full border-2 border-[#161616]"
            />

          </div>


          <span>
            انضم لـ{' '}
            <span className="text-white font-medium">
              +10,000
            </span>{' '}
            مصور
          </span>

        </div>


        <span className="hidden sm:inline text-[#262626]">
          •
        </span>

        <span>
          بدون إزعاج
        </span>


        <span className="hidden sm:inline text-[#262626]">
          •
        </span>

        <span>
          إلغاء الاشتراك في أي وقت
        </span>

      </div>

    </div>

  </div>

</section>


      </main>
        <Footer />
    </>
  )
}

export default Home