"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {

  return (
    <main>
      <nav className="fixed w-full z-50 top-0 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-20 items-center">
          <span className="font-bold text-xl">Lê Công Hậu.Dev</span>
        </div>
      </nav>
      <nav className="fixed w-full z-50 top-0 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a className="flex-shrink-0 flex items-center gap-2 group" href="#">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300">
                <span className="material-symbols-outlined text-white text-2xl">
                  code_blocks
                </span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Lê Công Hậu<span className="text-primary">.Dev</span>
              </span>
            </a>
            <div className="hidden lg:flex space-x-1 items-center bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-full border border-slate-200 dark:border-slate-700">
              <a
                className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
                href="#industries"
              >
                Lĩnh Vực
              </a>
              <a
                className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
                href="#templates"
              >
                Mẫu Web
              </a>
              <a
                className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
                href="#case-studies"
              >
                Hiệu Quả
              </a>
              <a
                className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
                href="#about"
              >
                Về Tôi
              </a>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 font-bold rounded-full hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 text-sm"
                href="#contact"
              >
                <span>Tư Vấn Ngay</span>
                <span className="material-symbols-outlined text-sm">
                  rocket_launch
                </span>
              </a>
              <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
                <span className="material-symbols-outlined text-2xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-20">
        <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background-dark">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] dark:bg-primary/10 pointer-events-none opacity-50 animate-pulse-slow"></div>
          <div
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] dark:bg-cyan-400/10 pointer-events-none opacity-50 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm animate-bounce-slow">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Lê Công Hậu - Full Stack Developer
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Tăng Trưởng Doanh Số Với <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-blue-600 animate-gradient-x bg-[length:200%_auto]">
                    Giải Pháp Web Tối Ưu
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl border-l-4 border-primary pl-6 bg-gradient-to-r from-slate-100/50 to-transparent dark:from-slate-800/30 p-4 rounded-r-xl">
                  Tôi không chỉ viết code. Tôi xây dựng hệ thống website và quản
                  lý chuyên sâu cho doanh nghiệp SME, giúp bạn tự động hóa vận
                  hành và biến khách truy cập thành khách hàng thật sự.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 gap-2 group"
                    href="#templates"
                  >
                    Xem Mẫu Web
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <a
                    className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 gap-2 hover:shadow-lg"
                    href="#case-studies"
                  >
                    <span className="material-symbols-outlined text-primary">
                      trending_up
                    </span>
                    Hiệu Quả Thực Tế
                  </a>
                </div>
                <div className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500">
                      verified
                    </span>
                    <span>Đối tác tin cậy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500">
                      verified
                    </span>
                    <span>Bàn giao đúng hạn</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                <div className="relative w-full max-w-md lg:max-w-lg animate-float">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative rounded-[2.5rem] overflow-hidden p-1 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 bg-[length:200%_200%] animate-gradient-rotate shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="rounded-[2.4rem] overflow-hidden relative bg-white dark:bg-slate-900">
                      <img
                        alt="Lê Công Hậu - Fullstack Dev"
                        className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                        src="/images/avatar.png"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent z-10"></div>
                      <div className="absolute bottom-6 left-6 z-20 text-white">
                        <p className="text-sm font-light opacity-90 tracking-widest uppercase">
                          Developer
                        </p>
                        <p className="text-3xl font-bold">Lê Công Hậu</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 dark:border-slate-700 animate-bounce-slow z-30"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-xl text-primary">
                      <span className="material-symbols-outlined text-2xl">
                        code_off
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                        Kinh nghiệm
                      </p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        5+ Năm
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute top-1/2 -right-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex flex-col items-center gap-2 border border-slate-100 dark:border-slate-700 transform translate-x-4 animate-bounce-slow z-30"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_czBtJir0oJzxHOKqjw_kCl4wtvCJLt6xqW5ySCkIPaFjeRQWUhKfyQbVfiQJDc2yPbfLruPOk_uVK9IqAFTikHX171v0bw5jQLEOfY92kGSKiVorSg5XKR7arElmvCuUA4KByYF6rW5JvNlwZeU4_Fq3S3YZO9iGhoCuAY8dDKKN5YA679Bp-dnYsnH1njLbgAEuB88TR86LI6wid8hvNw52dsJgredSmKByU27k9GyxvQ-sOlGEe-aR2nJQIZWjAqzpScPLq3Q" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800 overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2vsVdlj59vnlGoATXwtwUlvZOFIfiMWvvVVCmB5kB2IvJyDq1mpo05L9nsrDoEOL9IiVYsH38Wkk-Ew3FS0EAvB0EaJOhWUb_GR1KHsXAA61fJMgixmKgK36u2SSAwxCYCIdtUQAjstKmONlkJXawq7h3iE0dFNgdqnnKSgLOAczbsDZcyhtYekLbqqZDIiIsi27LepCPpbvQ6G7EFA3cZiMJESLSgkZ6ESWeZyaSvUphC-JGupj1efaDo4-Ou8IN6g3H2kUDB_c" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold text-white bg-primary">
                        +50
                      </div>
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Dự án thành công
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-white dark:bg-surface-dark relative scroll-mt-20"
          id="industries"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto reveal-on-scroll">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Lĩnh Vực Chuyên Ngành
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Giải Pháp Web &amp; Hệ Thống Cho Ngành Của Bạn
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Tôi hiểu rằng mỗi ngành nghề có đặc thù riêng. Dưới đây là các
                giải pháp được &quot;may đo&quot; để tối ưu hiệu quả kinh doanh.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Bất Động Sản
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Tích hợp bản đồ vị trí
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Hình ảnh 360 độ / Virtual Tour
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      CRM quản lý khách hàng
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-red-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">
                      storefront
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                    Bán Lẻ &amp; F&amp;B
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Menu điện tử QR Code
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Tích hợp ví điện tử
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Quản lý kho đơn giản
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">
                      business_center
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                    Doanh Nghiệp &amp; Dịch Vụ
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Giao diện chuẩn doanh nhân
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Đa ngôn ngữ (Việt - Anh)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Tối ưu SEO Top Google
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-rose-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">web</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                    Các trang Landing Page
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Website cho công ty xây dựng
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-base">
                        check
                      </span>{" "}
                      Website cho công ty BĐS
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-amber-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">balance</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    Website phong thuỷ
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Thiết kế website tư vấn phong thủy, xem tử vi chuyên nghiệp.
                  </p>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-rose-400 to-red-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">spa</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-500 transition-colors">
                    Website cho tiệm spa
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Giao diện đẹp mắt, tính năng đặt lịch hẹn dịch vụ trực
                    tuyến.
                  </p>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">
                      smartphone
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                    Website/ App quản lý phòng trọ thông minh
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Giải pháp quản lý cư dân, điện nước, hóa đơn tự động.
                  </p>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-300 to-red-300 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                    Website tạo thiệp cưới online
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Tạo thiệp mời ấn tượng, gửi lời chúc và quản lý khách mời.
                  </p>
                </div>
              </div>
              <div className="group relative bg-slate-50 dark:bg-slate-800/50 p-1 rounded-[2rem] hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-blue-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[1.9rem] h-full flex flex-col">
                  <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined">
                      local_laundry_service
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors">
                    Website quản lý tiệm giặt đồ thông minh
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Theo dõi đơn hàng, quản lý khách hàng và doanh thu hiệu quả.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-background-light dark:bg-background-dark relative scroll-mt-20 overflow-hidden"
          id="templates"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                  Thư Viện Mẫu
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Website Mẫu Theo Ngành
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                  Xem trước các giao diện hiện đại, tối ưu trải nghiệm người
                  dùng mà tôi đã phát triển.
                </p>
              </div>
              <a
                className="hidden md:inline-flex items-center text-primary font-bold hover:underline gap-1 group"
                href="#contact"
              >
                Xem tất cả mẫu
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img
                    alt="Real Estate Template"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCyASeDPMVYcoOlbL2WfySEHsRMblUx_BxwvdY68SqU-gvguIjQEPVBiY_exY7oEcUs4UhQizOl1WQi_BRlleIxARyuTZNtMxzbCwQ6qELpiAuUXVXokVHNMpaC0qiBhJNuWnMNXO0xyl-RLm75VjpXS-vAJSpmi_iEc9u8uIx6CQRn56zRICaf3hQ3QL__j3XY23TUSiSCMCkKqtdHbIp7VAaoGn6c2xbSxDgkCK1C-2l5WI043C_eVb5AmNZSu3kH2D0xU9bt2c"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold rounded-full text-slate-800 dark:text-white shadow-sm">
                      Bất Động Sản
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Thiệp cưới online
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    Thiệp cưới online có tích hợp QR chuyển khoản.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Đã bán: 12+
                    </span>
                    <a
                      href="/wedding-demo.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Xem Demo
                      <span className="material-symbols-outlined text-sm">
                        visibility
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img
                    alt="Real Estate Template"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCyASeDPMVYcoOlbL2WfySEHsRMblUx_BxwvdY68SqU-gvguIjQEPVBiY_exY7oEcUs4UhQizOl1WQi_BRlleIxARyuTZNtMxzbCwQ6qELpiAuUXVXokVHNMpaC0qiBhJNuWnMNXO0xyl-RLm75VjpXS-vAJSpmi_iEc9u8uIx6CQRn56zRICaf3hQ3QL__j3XY23TUSiSCMCkKqtdHbIp7VAaoGn6c2xbSxDgkCK1C-2l5WI043C_eVb5AmNZSu3kH2D0xU9bt2c"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold rounded-full text-slate-800 dark:text-white shadow-sm">
                      Bất Động Sản
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Vinhomes Luxury
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    Giao diện sang trọng cho dự án căn hộ cao cấp, tích hợp bộ
                    lọc tìm kiếm và form đăng ký tham quan.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Đã bán: 12+
                    </span>
                    <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Xem Demo{" "}
                      <span className="material-symbols-outlined text-sm">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img
                    alt="Corporate Template"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAub18Akpt3_gZ3LF9lQPPlgFeya6EhyzMBBiJRg1NrEDzzYyUQLPe5VNU-eIE9u0Bqgd5Ko4ZymUw0mZEks4VtzUKHxlf2iqAJ_TREO59Miuxg96XwgixbYu9hrHwVY8E-ndsk2sRlZ-_9VWa7A_uqv8kyceo1KZU5NKfHdsWpOCieu1_peuK6dgblCSWpKLiSpnIJKAVl1tTFMqrPggf-jIk1DWPfg6nZJR3Lb24viYN3QcTY8NDjQ37TC9GPyt4orKlG7D26b9Q"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold rounded-full text-slate-800 dark:text-white shadow-sm">
                      Doanh Nghiệp
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Tech Startup Corp
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    Giao diện hiện đại cho công ty công nghệ, startup với các
                    section giới thiệu dịch vụ và team.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Đã bán: 25+
                    </span>
                    <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Xem Demo{" "}
                      <span className="material-symbols-outlined text-sm">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img
                    alt="E-commerce Template"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz5Ve4_bXkDFOoxYtTAbcuT-D3wP6PIiaqERyyycouARfxxebr1E3-kJiQ7nP7Rez588oNq1BrdVzKutRzV4q14o2uJxgrMSn1xgGwvYh2UPHm3vk4rHzdMIe044-zRCFTK7jrIwVIXUnYRyax8SIVhBFEjwmBE7Hf1fBpdkPn77flyqFVYZBeIDF-nzXFwpj7422_vLeQFMJGVwN4U4wn9gOXt9ejC2cnVeAPgx2SwIaCVAi-sFNp_ruh8YTrTZQ9oYa6qJMvb9Y"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold rounded-full text-slate-800 dark:text-white shadow-sm">
                      Bán Lẻ / Shop
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Fashion Boutique
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    Giao diện shop thời trang tối giản, tập trung vào hình ảnh
                    sản phẩm và trải nghiệm mua hàng nhanh.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Đã bán: 40+
                    </span>
                    <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Xem Demo{" "}
                      <span className="material-symbols-outlined text-sm">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center md:hidden">
              <a
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                href="#contact"
              >
                Xem tất cả mẫu
              </a>
            </div>
          </div>
        </section>
        <section
          className="relative py-32 scroll-mt-20 overflow-hidden"
          id="case-studies"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 parallax-bg bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')]"></div>
            <div className="absolute inset-0 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/80"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 rounded-full border border-primary/50 bg-primary/20 backdrop-blur-md mb-4 shadow-lg shadow-primary/20">
                <span className="text-primary-300 font-bold tracking-wider uppercase text-xs">
                  Case Study Thực Tế
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Hiệu Quả Đã Được <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
                  Chứng Minh Bằng Con Số
                </span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Những câu chuyện thành công từ khách hàng đã tin tưởng hợp tác
                cùng Lê Công Hậu.
              </p>
            </div>
            <div className="space-y-12">
              <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      alt="Case Study 1"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSs1SvPP7a2PjdaQluGSSMoeshoctQtXPIZhc1XAlbqOCGDOiHf34Vi6NLtSfMYVU0B3mZc7gyNFItja9EG5LS0rmuh-pykvcj2JE5bxDqeKClTKoqbbKDcdDmgBjsX3w4HYq2PBEHvY1WuusIJ6opb7T8dWilJ_ecf8qx5e-i9YDvENBL-U0c41ytdgvaFAUN51Nhlz-yiylbIeHolxhDhg7giuKaoeZtbNLlx7_hTmRzUPG6LzGLYrb2c19yffkGaWhB7FQnfhc"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/0 to-slate-900/90 lg:bg-gradient-to-l lg:from-slate-900/0 lg:to-slate-900/0"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">
                        Ngành F&amp;B
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-slate-400 text-sm font-medium">
                        Chuỗi Cafe 5 chi nhánh
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                      <span className="text-slate-400 text-sm font-medium">
                        TP.HCM
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Hệ thống đặt món &amp; quản lý kho tự động
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-red-400 font-bold text-sm uppercase mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">
                            warning
                          </span>{" "}
                          Vấn đề
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Nhân viên order thủ công sai sót nhiều, không kiểm
                          soát được tồn kho nguyên liệu thời gian thực.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-bold text-sm uppercase mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">
                            check_circle
                          </span>{" "}
                          Giải pháp
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Xây dựng Web App order tại bàn quét QR, đồng bộ kho
                          ngay khi khách thanh toán.
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center gap-8">
                      <div>
                        <p className="text-3xl font-bold text-white">30%</p>
                        <p className="text-xs text-slate-400 uppercase">
                          Giảm thời gian chờ
                        </p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">0%</p>
                        <p className="text-xs text-slate-400 uppercase">
                          Sai sót order
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-slate-400 text-sm font-medium">
                        Xưởng nội thất
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                      <span className="text-slate-400 text-sm font-medium">
                        Đồng Nai
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Website chuẩn SEO &amp; Phủ sóng Google
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-red-400 font-bold text-sm uppercase mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">
                            warning
                          </span>{" "}
                          Vấn đề
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Phụ thuộc vào quảng cáo Facebook, khách hàng tìm kiếm
                          trên Google không thấy thương hiệu.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-bold text-sm uppercase mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">
                            check_circle
                          </span>{" "}
                          Giải pháp
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Thiết kế website chuẩn cấu trúc SEO Semantic, tối ưu
                          tốc độ tải trang dưới 1s.
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center gap-8">
                      <div>
                        <p className="text-3xl font-bold text-white">Top 3</p>
                        <p className="text-xs text-slate-400 uppercase">
                          Từ khóa chính
                        </p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">x2.5</p>
                        <p className="text-xs text-slate-400 uppercase">
                          Khách hàng tự nhiên
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden order-1 lg:order-2">
                    <img
                      alt="Case Study 2"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtcExUk9RtKgQcWuXkR6-oyF4ZlRo1q62FYAXz5VGeEfl21Bve7daSU-q8St2BC8CuJe3EfqnE41yxoVwqDXLLd86qlLQ1EzcU7oukjAs4sdU4nclocodI07G00AwoAH9xmZLB5LSGAJ2TnADJNFG1SMtQBZVbPSljVOP8zlUqRGphFD8EEy_7oZr8jembRXwVz-epmsH9bMNhgPxcbdUpbLOBIzc7hQyYBOo9pRZoCNML7vnV7r6iXcEbRFrEN-6uPj2PwlXGAEE"
                    />
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-lg shadow-lg">
                        Ngành Nội Thất
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden scroll-mt-20"
          id="process"
        >
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden lg:block"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Lộ Trình Hợp Tác
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Quy Trình 5 Bước Chuyên Nghiệp
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 mx-auto group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 relative shadow-lg">
                  <span className="material-symbols-outlined text-4xl">
                    coffee
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white border-2 border-white dark:border-slate-800 flex items-center justify-center font-bold text-sm shadow-sm">
                    1
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    Tư Vấn &amp; Cafe
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Gặp gỡ, lắng nghe ý tưởng và nỗi đau của doanh nghiệp bạn.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 mx-auto group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 relative shadow-lg">
                  <span className="material-symbols-outlined text-4xl">
                    architecture
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white border-2 border-white dark:border-slate-800 flex items-center justify-center font-bold text-sm shadow-sm">
                    2
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    Hoạch Định
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Lên phương án kỹ thuật, wireframe và chốt deadline.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 mx-auto group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 relative shadow-lg">
                  <span className="material-symbols-outlined text-4xl">
                    terminal
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white border-2 border-white dark:border-slate-800 flex items-center justify-center font-bold text-sm shadow-sm">
                    3
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    Lập Trình
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Code sạch, tối ưu, bảo mật và cập nhật tiến độ liên tục.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 mx-auto group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 relative shadow-lg">
                  <span className="material-symbols-outlined text-4xl">
                    bug_report
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white border-2 border-white dark:border-slate-800 flex items-center justify-center font-bold text-sm shadow-sm">
                    4
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    Kiểm Thử
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Test kỹ càng trên mọi thiết bị trước khi bạn nhìn thấy.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 mx-auto group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 relative shadow-lg">
                  <span className="material-symbols-outlined text-4xl">
                    rocket
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white border-2 border-white dark:border-slate-800 flex items-center justify-center font-bold text-sm shadow-sm">
                    5
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    Bàn Giao &amp; HD
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Triển khai, hướng dẫn sử dụng tận tình và bảo hành.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-background-dark dark:to-surface-dark scroll-mt-20"
          id="about"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-cyan-500 to-blue-600 rounded-[2.5rem] transform rotate-3 blur-sm opacity-60"></div>
                <div className="relative bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
                      <img
                        alt="Lê Công Hậu Avatar"
                        className="w-full h-full object-cover"
                        src="/images/avatar.png"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Lê Công Hậu
                      </h4>
                      <p className="text-primary font-medium">
                        Fullstack Developer
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-semibold text-slate-600 dark:text-slate-300">
                          5 Năm KN
                        </span>
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-semibold text-slate-600 dark:text-slate-300">
                          Freelancer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-primary pl-4">
                      &quot;Tôi không chỉ là một người viết code. Tôi là đối tác
                      công nghệ giúp bạn hiện thực hóa ý tưởng kinh doanh thành
                      sản phẩm số sinh lời.&quot;
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-1">
                          Tận Tâm
                        </h5>
                        <p className="text-xs text-slate-500">
                          Luôn đặt lợi ích khách hàng lên trên hết.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-1">
                          Minh Bạch
                        </h5>
                        <p className="text-xs text-slate-500">
                          Rõ ràng về chi phí và tiến độ dự án.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-1">
                          Hiệu Quả
                        </h5>
                        <p className="text-xs text-slate-500">
                          Giải pháp tinh gọn, tối ưu chi phí.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-1">
                          Đồng Hành
                        </h5>
                        <p className="text-xs text-slate-500">
                          Hỗ trợ trọn đời sau khi bàn giao.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                  Câu Chuyện Của Tôi
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Tại Sao Tôi Chọn Làm Freelancer Chuyên Nghiệp?
                </h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Xin chào! Tôi là Hậu. Sau nhiều năm làm việc tại các công ty
                    công nghệ lớn, tôi nhận ra một &quot;khoảng trống&quot; lớn:
                    Các doanh nghiệp vừa và nhỏ (SME) tại Việt Nam thường gặp
                    khó khăn trong việc tiếp cận các giải pháp công nghệ chất
                    lượng cao với chi phí hợp lý.
                  </p>
                  <p>
                    Họ thường phải chọn giữa: Agency đắt đỏ hoặc Website giá rẻ
                    nhưng chất lượng kém, bảo mật yếu.
                  </p>
                  <p>
                    Đó là lý do tôi trở thành một Freelancer chuyên nghiệp. Tôi
                    mang đến chất lượng code &quot;chuẩn Enterprise&quot; nhưng
                    với sự linh hoạt và mức giá của một cá nhân làm việc trực
                    tiếp với bạn, cắt giảm mọi chi phí trung gian.
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      handyman
                    </span>
                    Công Nghệ Tôi Sử Dụng
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      ReactJS / NextJS
                    </span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      Tailwind CSS
                    </span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      NodeJS / NestJS / Express
                    </span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      MongoDB / MySQL / PostgreSQL
                    </span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      Docker &amp; AWS
                    </span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      Linux
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-white dark:bg-surface-dark relative scroll-mt-20"
          id="contact"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  Sẵn sàng nâng tầm doanh nghiệp của bạn?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
                  Đừng ngần ngại chia sẻ ý tưởng của bạn. Tôi luôn sẵn lòng lắng
                  nghe và tư vấn giải pháp tốt nhất cho ngân sách của bạn (hoàn
                  toàn miễn phí).
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white mb-1">
                        Email
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400">
                        leconghau095@example.com
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Trả lời trong vòng 2 giờ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-green-500/30">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white mb-1">
                        Điện Thoại / Zalo
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400">
                        0358.500.195 (Lê Công Hậu)
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Hỗ trợ 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-gradient-border p-8 md:p-10 shadow-xl bg-white dark:bg-slate-900 rounded-[1.5rem]">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Liên Hệ Tư Vấn
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Họ Tên
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Nguyễn Văn A"
                        type="text"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Số Điện Thoại
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="09xxxxxxx"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Ngành Nghề Kinh Doanh
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                      <option>Bất động sản</option>
                      <option>Bán lẻ / Shop Online</option>
                      <option>F&amp;B (Nhà hàng, Cafe)</option>
                      <option>Doanh nghiệp / Dịch vụ</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nội Dung Cần Tư Vấn
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Tôi cần làm website giới thiệu dự án..."
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full py-4 px-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-hover hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
                    type="button"
                  >
                    Gửi Yêu Cầu Tư Vấn
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  code_blocks
                </span>
                <span className="font-bold text-2xl text-slate-900 dark:text-white">
                  Lê Công Hậu<span className="text-primary">.Dev</span>
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
                Xây dựng giải pháp công nghệ thông minh, giúp doanh nghiệp SME
                tối ưu hóa vận hành và tăng trưởng doanh thu bền vững.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="font-bold text-sm">FB</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="font-bold text-sm">Zalo</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="font-bold text-sm">Li</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">
                Giải Pháp
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    Thiết kế Web BĐS
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    Web Bán Hàng
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    Phần Mềm Quản Lý Kho
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    SEO Tổng Thể
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">
                Thông Tin
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#about"
                  >
                    Về Lê Công Hậu
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#case-studies"
                  >
                    Khách Hàng Tiêu Biểu
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    Quy Trình Làm Việc
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              © 2023 LeCongHau.Dev. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
              <span>Made with</span>
              <span className="material-symbols-outlined text-red-500 text-sm">
                favorite
              </span>
              <span>for Vietnam SMEs</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
