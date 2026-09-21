import { Link } from 'react-router-dom' 
 
function Footer() { 
  return ( 
    <footer 
      dir="rtl" 
      className="relative bg-[#0a0a0a] border-t border-[#262626] overflow-hidden" 
    > 
 
      <div className="absolute inset-0 pointer-events-none"> 
 
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div> 
 
      </div> 
 
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> 
 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"> 
 
          <div> 
 
            <div className="flex items-center gap-3 mb-5"> 
 
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold"> 
                ع 
              </div> 
 
              <div> 
 
                <h2 className="text-xl font-bold text-white"> 
                  عدسة 
                </h2> 
 
                <p className="text-xs text-orange-500"> 
                  عالم التصوير الفوتوغرافي 
                </p> 
 
              </div> 
 
            </div> 
 
            <p className="text-sm text-neutral-500 leading-7 mb-6"> 
              مدونة متخصصة في فن التصوير الفوتوغرافي، 
              نشارك معكم أسرار المحترفين ونصائح عملية 
              لتطوير مهاراتكم. 
            </p> 
 
            <div className="flex items-center gap-3"> 
 
              <button className="w-11 h-11 bg-[#161616] border border-[#262626] rounded-xl text-neutral-500 hover:text-orange-500 hover:border-orange-500/30 transition"> 
                X 
              </button> 
 
              <button className="w-11 h-11 bg-[#161616] border border-[#262626] rounded-xl text-neutral-500 hover:text-orange-500 hover:border-orange-500/30 transition"> 
                GH 
              </button> 
 
              <button className="w-11 h-11 bg-[#161616] border border-[#262626] rounded-xl text-neutral-500 hover:text-orange-500 hover:border-orange-500/30 transition"> 
                in 
              </button> 
 
              <button className="w-11 h-11 bg-[#161616] border border-[#262626] rounded-xl text-neutral-500 hover:text-orange-500 hover:border-orange-500/30 transition"> 
                ▶ 
              </button> 
 
            </div> 
 
          </div> 
 
          <div> 
 
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2"> 
 
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span> 
 
              استكشف 
 
            </h3> 
 
            <ul className="space-y-4"> 
 
              <li> 
                <Link 
                  to="/" 
                  className="text-sm text-neutral-500 hover:text-orange-500 transition" 
                > 
                  الرئيسية 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/blog" 
                  className="text-sm text-neutral-500 hover:text-orange-500 transition" 
                > 
                  المدونة 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/about" 
                  className="text-sm text-neutral-500 hover:text-orange-500 transition" 
                > 
                  من نحن 
                </Link> 
              </li> 
 
            </ul> 
 
          </div> 
 
          <div> 
 
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2"> 
 
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span> 
 
              التصنيفات 
 
            </h3> 
 
            <ul className="space-y-4"> 
 
              <li> 
                <Link 
                  to="/blog?category=إضاءة" 
                  className="text-sm text-neutral-500 hover:text-orange-500 transition" 
                > 
                  إضاءة 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/blog?category=بورتريه" 
                  className="text-sm text-neutral-500 hover:text-orange-500 transition" 
                > 
                  بورتريه 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/blog?category=مناظر طبيعية" 
                  className="text-sm text-neutral-500 hover:text-orange-500 transition" 
                > 
                  مناظر طبيعية 
                </Link> 
              </li> 
 
              <li> 
                <Link 
                  to="/blog?category=تقنيات" 
                  className="text-sm text-neutral-500 hover:text-orange-500 transition" 
                > 
                  تقنيات 
                </Link> 
              </li> 
 
            </ul> 
 
          </div> 
 
          <div> 
 
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2"> 
 
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span> 
 
              ابقى على اطلاع 
 
            </h3> 
 
            <p className="text-sm text-neutral-500 mb-4 leading-6"> 
              اشترك للحصول على أحدث المقالات والتحديثات. 
            </p> 
 
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="space-y-3" 
            > 
 
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 transition placeholder-neutral-600" 
              /> 
 
              <button 
                type="submit" 
                className="w-full px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition" 
              > 
                اشترك 
              </button> 
 
            </form> 
 
          </div> 
 
        </div> 
 
      </div> 
 
      <div className="relative border-t border-[#262626]"> 
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> 
 
          <div className="flex flex-col md:flex-row justify-between items-center gap-4"> 
 
            <p className="text-sm text-neutral-600"> 
              © 2026 عدسة. صنع بكل{' '} 
              <span className="text-orange-500"> 
                ♥ 
              </span>{' '} 
              جميع الحقوق محفوظة. 
            </p> 
 
            <div className="flex gap-6"> 
 
              <Link 
                to="/privacy" 
                className="text-sm text-neutral-600 hover:text-orange-500 transition" 
              > 
                سياسة الخصوصية 
              </Link> 
 
              <Link 
                to="/terms" 
                className="text-sm text-neutral-600 hover:text-orange-500 transition" 
              > 
                شروط الخدمة 
              </Link> 
 
            </div> 
 
          </div> 
 
        </div> 
 
      </div> 
 
    </footer> 
  ) 
} 
 
export default Footer