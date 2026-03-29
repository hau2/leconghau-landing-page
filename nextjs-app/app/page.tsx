import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import TypingText from '@/components/TypingText';
import HeroParticlesWrapper from '@/components/HeroParticlesWrapper';
import { TiltCard, Counter, Reveal, FaqItem, FloatingContacts, HeroTerminalTilt } from '@/components/ClientComponents';

export default function Home() {
  return (
    <>
      {/* LOADING SCREEN */}
      <Loader />

      {/* ANIMATED GRADIENT MESH BG */}
      <div className="mesh-bg">
        <div className="mesh-blob" />
        <div className="mesh-blob" />
        <div className="mesh-blob" />
        <div className="mesh-blob" />
      </div>
      <div className="noise-overlay" />

      {/* NAV + MOBILE MENU */}
      <Navbar />

      {/* FLOATING CONTACT */}
      <FloatingContacts />

      {/* HERO */}
      <section className="hero">
        <HeroParticlesWrapper />
        <div className="hero-grad" />
        <div className="hero-inner">
          <div>
            <div className="badge">
              <span className="badge-dot" />
              Sẵn sàng nhận dự án mới
            </div>
            <h1>
              Tăng Trưởng Doanh Số<br />
              Với <TypingText />
            </h1>
            <p className="hero-p">
              Tôi không chỉ viết code — tôi xây dựng hệ thống website &amp; quản lý chuyên sâu cho doanh nghiệp SME, giúp bạn tự động hóa vận hành và biến khách truy cập thành khách hàng thật sự.
            </p>
            <div className="hero-btns">
              <a href="#templates" className="btn btn-glow">
                <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>visibility</span>
                Xem Mẫu Web
              </a>
              <a href="#cases" className="btn btn-ghost">
                <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>trending_up</span>
                Hiệu Quả Thực Tế
              </a>
            </div>
            <div className="hero-stats">
              <div className="h-stat">
                <div className="h-stat-num"><Counter target={5} suffix="+" /></div>
                <div className="h-stat-label">Năm kinh nghiệm</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num"><Counter target={50} suffix="+" /></div>
                <div className="h-stat-label">Dự án thành công</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num"><Counter target={100} suffix="%" /></div>
                <div className="h-stat-label">Đúng deadline</div>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <HeroTerminalTilt>
              <div className="t-bar">
                <div className="t-dot r" />
                <div className="t-dot y" />
                <div className="t-dot g" />
                <span className="t-title">developer.json</span>
              </div>
              <div className="t-body">
                <div className="tl"><span className="cd">$</span> <span className="cc">cat</span> developer.json</div>
                <div className="tl"><span className="cd">{'{'}</span></div>
                <div className="tl">&nbsp;&nbsp;<span className="cb">&quot;name&quot;</span>: <span className="cs">&quot;Lê Công Hậu&quot;</span>,</div>
                <div className="tl">&nbsp;&nbsp;<span className="cb">&quot;role&quot;</span>: <span className="cs">&quot;Full Stack Developer&quot;</span>,</div>
                <div className="tl">&nbsp;&nbsp;<span className="cb">&quot;exp&quot;</span>: <span className="co">&quot;5+ năm&quot;</span>,</div>
                <div className="tl">&nbsp;&nbsp;<span className="cb">&quot;focus&quot;</span>: <span className="cs">&quot;Website cho SME&quot;</span>,</div>
                <div className="tl">&nbsp;&nbsp;<span className="cb">&quot;status&quot;</span>: <span className="cg">&quot;🟢 available&quot;</span></div>
                <div className="tl"><span className="cd">{'}'}</span></div>
                <div className="tl"><span className="cd">$</span> <span className="cc" style={{ animation: 'cursorBlink 1s step-end infinite' }}>▌</span></div>
              </div>
              <div className="t-profile">
                <Image src="/images/avatar.png" alt="Lê Công Hậu" className="t-avatar" width={50} height={50} />
                <div>
                  <div className="t-name">Lê Công Hậu</div>
                  <div className="t-role">Fullstack Developer &bull; Freelancer</div>
                </div>
              </div>
            </HeroTerminalTilt>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="industries">
        <div className="sec-container">
          <Reveal className="sec-header">
            <div className="sec-eyebrow">Lĩnh Vực Chuyên Ngành</div>
            <h2 className="sec-title">Giải Pháp Web Cho Ngành Của Bạn</h2>
            <p className="sec-desc">Mỗi ngành có đặc thù riêng — tôi thiết kế giải pháp &ldquo;may đo&rdquo; để tối ưu hiệu quả kinh doanh.</p>
          </Reveal>
          <div className="srv-grid">
            {[
              { icon: '🏠', file: 'real-estate.tsx', title: 'Bất Động Sản', items: ['Tích hợp bản đồ vị trí', 'Hình ảnh 360° / Virtual Tour', 'CRM quản lý khách hàng'] },
              { icon: '🍜', file: 'retail-fnb.tsx', title: 'Bán Lẻ & F&B', items: ['Menu điện tử QR Code', 'Tích hợp ví điện tử', 'Quản lý kho đơn giản'] },
              { icon: '💼', file: 'enterprise.tsx', title: 'Doanh Nghiệp & Dịch Vụ', items: ['Giao diện chuẩn doanh nhân', 'Đa ngôn ngữ (Việt - Anh)', 'Tối ưu SEO Top Google'] },
              { icon: '🚀', file: 'landing-page.tsx', title: 'Landing Page', items: ['Website công ty xây dựng', 'Website công ty BĐS', 'Tối ưu tỉ lệ chuyển đổi'] },
              { icon: '🧘', file: 'spa-booking.tsx', title: 'Website Tiệm Spa', items: ['Giao diện đẹp mắt', 'Đặt lịch hẹn online', 'Quản lý dịch vụ'] },
              { icon: '🏨', file: 'room-manager.tsx', title: 'Quản Lý Phòng Trọ', items: ['Quản lý cư dân', 'Điện nước tự động', 'Hoá đơn thông minh'] },
              { icon: '☯', file: 'phong-thuy.tsx', title: 'Website Phong Thuỷ', items: ['Tư vấn phong thủy online', 'Xem tử vi chuyên nghiệp', 'Giao diện truyền thống'] },
              { icon: '💒', file: 'wedding.tsx', title: 'Thiệp Cưới Online', items: ['Thiệp mời ấn tượng', 'QR chuyển khoản', 'Quản lý khách mời'] },
              { icon: '👔', file: 'laundry.tsx', title: 'Quản Lý Tiệm Giặt', items: ['Theo dõi đơn hàng', 'Quản lý khách hàng', 'Báo cáo doanh thu'] },
            ].map((srv) => (
              <Reveal key={srv.file}>
                <TiltCard className="srv-card">
                  <div className="srv-icon">{srv.icon}</div>
                  <div className="srv-file">{srv.file}</div>
                  <h3>{srv.title}</h3>
                  <ul className="srv-list">
                    {srv.items.map((item) => (
                      <li key={item}><span className="ck">✓</span>{item}</li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="templates">
        <div className="sec-container">
          <Reveal className="sec-header">
            <div className="sec-eyebrow">Thư Viện Mẫu</div>
            <h2 className="sec-title">Website Mẫu Theo Ngành</h2>
            <p className="sec-desc">Xem trước các giao diện hiện đại mà tôi đã phát triển.</p>
          </Reveal>
          <div className="tmpl-grid">
            {[
              { url: 'thiep-cuoi.leconghau.dev', icon: 'favorite', tag: 'wedding', tagLabel: 'Wedding', title: 'Thiệp Cưới Online', desc: 'Tích hợp QR chuyển khoản, RSVP và lời chúc trực tuyến.', sold: '✓ 12+ deployed', link: 'https://leconghau.id.vn/wedding-demo.html' },
              { url: 'vinhomes.leconghau.dev', icon: 'apartment', tag: 'realestate', tagLabel: 'Real Estate', title: 'Vinhomes Luxury', desc: 'Giao diện sang trọng cho dự án căn hộ cao cấp.', sold: '✓ 12+ deployed', link: '#' },
              { url: 'startup.leconghau.dev', icon: 'rocket_launch', tag: 'corporate', tagLabel: 'Corporate', title: 'Tech Startup Corp', desc: 'Giao diện hiện đại cho công ty công nghệ, startup.', sold: '✓ 25+ deployed', link: '#' },
            ].map((tmpl) => (
              <Reveal key={tmpl.url}>
                <TiltCard className="tmpl-card">
                  <div className="tmpl-bar">
                    <div className="tmpl-dots"><span className="r" /><span className="y" /><span className="g" /></div>
                    <div className="tmpl-url">{tmpl.url}</div>
                  </div>
                  <div className="tmpl-preview">
                    <span className="material-icons-round p-icon">{tmpl.icon}</span>
                  </div>
                  <div className="tmpl-body">
                    <span className={`tmpl-tag ${tmpl.tag}`}>{tmpl.tagLabel}</span>
                    <h4>{tmpl.title}</h4>
                    <p>{tmpl.desc}</p>
                    <div className="tmpl-foot">
                      <span className="tmpl-sold">{tmpl.sold}</span>
                      <a href={tmpl.link} target="_blank" rel="noopener noreferrer" className="tmpl-link">Live Demo →</a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases">
        <div className="sec-container">
          <Reveal className="sec-header">
            <div className="sec-eyebrow">Case Study</div>
            <h2 className="sec-title">Hiệu Quả Chứng Minh Bằng Con Số</h2>
            <p className="sec-desc">Những câu chuyện thành công từ khách hàng đã tin tưởng hợp tác.</p>
          </Reveal>
          <div className="case-grid">
            <Reveal>
              <TiltCard className="case-card">
                <div className="case-head">
                  <div className="case-emoji fnb">☕</div>
                  <div>
                    <div className="case-branch">feat/fnb-ordering-system</div>
                    <div className="case-loc">Chuỗi Cafe 5 CN &bull; TP.HCM</div>
                  </div>
                </div>
                <div className="case-body">
                  <h3>Hệ thống đặt món &amp; quản lý kho tự động</h3>
                  <div className="case-block">
                    <div className="case-label warn">⚠ Vấn đề</div>
                    <p>Nhân viên order thủ công sai sót nhiều, không kiểm soát tồn kho thời gian thực.</p>
                  </div>
                  <div className="case-block">
                    <div className="case-label ok">✓ Giải pháp</div>
                    <p>Web App order quét QR tại bàn, đồng bộ kho ngay khi thanh toán.</p>
                  </div>
                  <div className="case-nums">
                    <div>
                      <div className="case-num-val">-30%</div>
                      <div className="case-num-desc">Thời gian chờ</div>
                    </div>
                    <div>
                      <div className="case-num-val">0%</div>
                      <div className="case-num-desc">Sai sót order</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal>
              <TiltCard className="case-card">
                <div className="case-head">
                  <div className="case-emoji seo">🔍</div>
                  <div>
                    <div className="case-branch">feat/seo-optimization</div>
                    <div className="case-loc">Xưởng nội thất &bull; Đồng Nai</div>
                  </div>
                </div>
                <div className="case-body">
                  <h3>Website chuẩn SEO &amp; Phủ sóng Google</h3>
                  <div className="case-block">
                    <div className="case-label warn">⚠ Vấn đề</div>
                    <p>Phụ thuộc quảng cáo Facebook, khách tìm Google không thấy thương hiệu.</p>
                  </div>
                  <div className="case-block">
                    <div className="case-label ok">✓ Giải pháp</div>
                    <p>Website chuẩn SEO Semantic, tối ưu tốc độ tải trang dưới 1s.</p>
                  </div>
                  <div className="case-nums">
                    <div>
                      <div className="case-num-val">Top 3</div>
                      <div className="case-num-desc">Từ khóa chính</div>
                    </div>
                    <div>
                      <div className="case-num-val">x2.5</div>
                      <div className="case-num-desc">Khách hàng tự nhiên</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section>
        <div className="sec-container">
          <Reveal className="sec-header">
            <div className="sec-eyebrow">Quy Trình Làm Việc</div>
            <h2 className="sec-title">5 Bước Từ Ý Tưởng Đến Sản Phẩm</h2>
            <p className="sec-desc">Quy trình chuyên nghiệp, minh bạch — bạn luôn nắm rõ tiến độ.</p>
          </Reveal>
          <div className="pipe-grid">
            {[
              { num: '01', emoji: '☕', title: 'Tư Vấn', desc: 'Gặp gỡ, lắng nghe ý tưởng và nỗi đau doanh nghiệp.' },
              { num: '02', emoji: '📐', title: 'Hoạch Định', desc: 'Phương án kỹ thuật, wireframe, chốt deadline.' },
              { num: '03', emoji: '💻', title: 'Lập Trình', desc: 'Code sạch, tối ưu, bảo mật. Cập nhật liên tục.' },
              { num: '04', emoji: '🧪', title: 'Kiểm Thử', desc: 'Test kỹ trên mọi thiết bị.' },
              { num: '05', emoji: '🚀', title: 'Bàn Giao', desc: 'Triển khai, hướng dẫn & bảo hành trọn đời.' },
            ].map((stage) => (
              <Reveal key={stage.num}>
                <div className="pipe-stage">
                  <div className="pipe-num">{stage.num}</div>
                  <div className="pipe-emoji">{stage.emoji}</div>
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                  <div className="pipe-badge">● done</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="sec-container">
          <div className="about-grid">
            <Reveal>
              <TiltCard style={{ overflow: 'hidden' }}>
                <div className="t-bar">
                  <div className="t-dot r" /><div className="t-dot y" /><div className="t-dot g" />
                  <span className="t-title">README.md</span>
                </div>
                <div className="about-card-inner">
                  <Image src="/images/avatar.png" alt="Lê Công Hậu" className="about-av" width={110} height={110} />
                  <div className="about-nm">Lê Công Hậu</div>
                  <div className="about-hd">@leconghau.dev</div>
                  <div className="about-bgs">
                    <span className="about-bg">🏢 5+ Năm KN</span>
                    <span className="about-bg">💼 Freelancer</span>
                    <span className="about-bg">🇻🇳 Việt Nam</span>
                  </div>
                  <div className="about-qt">&ldquo;Tôi không chỉ viết code — tôi là đối tác công nghệ giúp bạn biến ý tưởng kinh doanh thành sản phẩm số sinh lời.&rdquo;</div>
                </div>
              </TiltCard>
            </Reveal>
            <div className="about-right">
              <Reveal>
                <div className="sec-eyebrow">Câu Chuyện Của Tôi</div>
              </Reveal>
              <Reveal>
                <h2 className="sec-title" style={{ marginBottom: 16 }}>Tại Sao Tôi Chọn Làm Freelancer?</h2>
              </Reveal>
              <Reveal>
                <p className="about-txt">Sau nhiều năm làm việc tại các công ty công nghệ lớn, tôi nhận ra một &ldquo;khoảng trống&rdquo;: Doanh nghiệp SME tại Việt Nam thường khó tiếp cận giải pháp công nghệ chất lượng cao với chi phí hợp lý.</p>
              </Reveal>
              <Reveal>
                <p className="about-txt">Tôi mang đến chất lượng code &ldquo;chuẩn Enterprise&rdquo; nhưng với sự linh hoạt và mức giá cá nhân — cắt giảm mọi chi phí trung gian.</p>
              </Reveal>
              <Reveal>
                <div className="val-grid">
                  <div className="val-item"><h4>✦ Tận Tâm</h4><p>Đặt lợi ích khách hàng lên trên hết.</p></div>
                  <div className="val-item"><h4>✦ Minh Bạch</h4><p>Rõ ràng chi phí và tiến độ.</p></div>
                  <div className="val-item"><h4>✦ Hiệu Quả</h4><p>Giải pháp tinh gọn, tối ưu chi phí.</p></div>
                  <div className="val-item"><h4>✦ Đồng Hành</h4><p>Hỗ trợ trọn đời sau bàn giao.</p></div>
                </div>
              </Reveal>
              <Reveal>
                <div className="tech-sec">
                  <div className="tech-lbl">{'// tech_stack'}</div>
                  <div className="tech-wrap">
                    {['ReactJS / NextJS', 'React Native', 'Swift', 'Tailwind CSS', 'NodeJS / NestJS', 'MongoDB', 'MySQL / PostgreSQL', 'Docker', 'AWS', 'Linux'].map((t) => (
                      <span className="tech-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="sec-container">
          <Reveal className="sec-header">
            <div className="sec-eyebrow">Bảng Giá</div>
            <h2 className="sec-title">Gói Dịch Vụ Phù Hợp Mọi Ngân Sách</h2>
            <p className="sec-desc">Minh bạch, rõ ràng — không phát sinh chi phí ẩn. Chọn gói phù hợp với nhu cầu của bạn.</p>
          </Reveal>
          <div className="pricing-grid">
            {/* Starter */}
            <Reveal>
              <TiltCard className="price-card">
                <div className="price-header">
                  <div className="price-name">Starter</div>
                  <div className="price-amount">
                    <span className="currency">~</span>
                    <span className="value">3tr</span>
                    <span className="unit">VND</span>
                  </div>
                  <div className="price-desc">Landing page đơn giản, phù hợp cá nhân &amp; startup.</div>
                </div>
                <div className="price-body">
                  <ul className="price-features">
                    <li><span className="feat-icon yes">✓</span> Thiết kế 1-3 trang</li>
                    <li><span className="feat-icon yes">✓</span> Responsive mọi thiết bị</li>
                    <li><span className="feat-icon yes">✓</span> Form liên hệ cơ bản</li>
                    <li><span className="feat-icon yes">✓</span> Hosting &amp; domain 1 năm</li>
                    <li><span className="feat-icon yes">✓</span> Bảo hành 3 tháng</li>
                    <li className="disabled"><span className="feat-icon no">✗</span> Quản trị nội dung CMS</li>
                    <li className="disabled"><span className="feat-icon no">✗</span> Tích hợp thanh toán</li>
                  </ul>
                  <a href="#contact" className="price-cta outline">
                    <span className="material-icons-round" style={{ fontSize: '1rem' }}>chat</span>
                    Tư Vấn Gói Này
                  </a>
                </div>
              </TiltCard>
            </Reveal>

            {/* Professional */}
            <Reveal>
              <TiltCard className="price-card featured">
                <div className="price-header">
                  <div className="price-popular">★ PHỔ BIẾN</div>
                  <div className="price-name">Professional</div>
                  <div className="price-amount">
                    <span className="currency">~</span>
                    <span className="value">8tr</span>
                    <span className="unit">VND</span>
                  </div>
                  <div className="price-desc">Website chuyên nghiệp với CMS, SEO, phù hợp doanh nghiệp SME.</div>
                </div>
                <div className="price-body">
                  <ul className="price-features">
                    <li><span className="feat-icon yes">✓</span> Thiết kế 5-10 trang</li>
                    <li><span className="feat-icon yes">✓</span> Responsive + tối ưu tốc độ</li>
                    <li><span className="feat-icon yes">✓</span> Quản trị nội dung CMS</li>
                    <li><span className="feat-icon yes">✓</span> SEO on-page chuẩn Google</li>
                    <li><span className="feat-icon yes">✓</span> Tích hợp Zalo, Messenger</li>
                    <li><span className="feat-icon yes">✓</span> Hosting &amp; domain 1 năm</li>
                    <li><span className="feat-icon yes">✓</span> Bảo hành 6 tháng</li>
                  </ul>
                  <a href="#contact" className="price-cta primary">
                    <span className="material-icons-round" style={{ fontSize: '1rem' }}>rocket_launch</span>
                    Chọn Gói Này
                  </a>
                </div>
              </TiltCard>
            </Reveal>

            {/* Enterprise */}
            <Reveal>
              <TiltCard className="price-card">
                <div className="price-header">
                  <div className="price-name">Enterprise</div>
                  <div className="price-amount">
                    <span className="currency">~</span>
                    <span className="value">15tr+</span>
                    <span className="unit">VND</span>
                  </div>
                  <div className="price-desc">Hệ thống web app tuỳ chỉnh, tích hợp sâu cho doanh nghiệp lớn.</div>
                </div>
                <div className="price-body">
                  <ul className="price-features">
                    <li><span className="feat-icon yes">✓</span> Tuỳ chỉnh không giới hạn</li>
                    <li><span className="feat-icon yes">✓</span> Web App / Dashboard quản lý</li>
                    <li><span className="feat-icon yes">✓</span> Tích hợp thanh toán, CRM</li>
                    <li><span className="feat-icon yes">✓</span> API &amp; tích hợp bên thứ ba</li>
                    <li><span className="feat-icon yes">✓</span> Tối ưu bảo mật nâng cao</li>
                    <li><span className="feat-icon yes">✓</span> DevOps, CI/CD, monitoring</li>
                    <li><span className="feat-icon yes">✓</span> Bảo hành 12 tháng + SLA</li>
                  </ul>
                  <a href="#contact" className="price-cta outline">
                    <span className="material-icons-round" style={{ fontSize: '1rem' }}>handshake</span>
                    Liên Hệ Báo Giá
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          </div>
          <Reveal>
            <p className="price-note">💡 Giá trên là <span>tham khảo</span> — liên hệ để nhận báo giá chính xác theo yêu cầu cụ thể của bạn.</p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="sec-container">
          <Reveal className="sec-header">
            <div className="sec-eyebrow">Khách Hàng Nói Gì</div>
            <h2 className="sec-title">Đánh Giá Từ Đối Tác Đã Hợp Tác</h2>
            <p className="sec-desc">Những phản hồi thật từ khách hàng đã tin tưởng và đồng hành.</p>
          </Reveal>
          <div className="testi-grid">
            {[
              { text: 'Hậu làm việc rất chuyên nghiệp, hiểu nhu cầu nhanh và bàn giao đúng hẹn. Website mới giúp tôi tăng 40% lượng khách hỏi mua qua Google chỉ sau 2 tháng.', initials: 'TN', name: 'Anh Thanh Nguyên', role: 'Giám đốc — Nội thất Đồng Nai' },
              { text: 'Trước đây tôi tốn rất nhiều tiền cho agency nhưng kết quả không như ý. Hậu giúp tôi tiết kiệm chi phí mà chất lượng còn tốt hơn, support nhiệt tình 24/7.', initials: 'ML', name: 'Chị Mỹ Linh', role: 'Chủ chuỗi Cafe — TP.HCM' },
              { text: 'Hệ thống quản lý phòng trọ Hậu làm giúp tôi tiết kiệm 3 tiếng mỗi ngày. Tính tiền điện nước, xuất hoá đơn tự động, quá tiện lợi!', initials: 'VP', name: 'Anh Văn Phú', role: 'Chủ 3 khu trọ — Bình Dương' },
            ].map((t) => (
              <Reveal key={t.initials}>
                <TiltCard className="testi-card">
                  <div className="testi-stars">
                    {[1, 2, 3, 4, 5].map((s) => <span className="testi-star" key={s}>★</span>)}
                  </div>
                  <div className="testi-text">{t.text}</div>
                  <div className="testi-author">
                    <div className="testi-avatar">{t.initials}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                    <span className="testi-badge">✓ verified</span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="sec-container">
          <Reveal className="sec-header" >
            <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="sec-eyebrow">FAQ</div>
              <h2 className="sec-title">Câu Hỏi Thường Gặp</h2>
              <p className="sec-desc" style={{ textAlign: 'center' }}>Giải đáp những thắc mắc phổ biến trước khi bạn quyết định hợp tác.</p>
            </div>
          </Reveal>
          <div className="faq-grid">
            <FaqItem
              question="Thời gian hoàn thành một website là bao lâu?"
              answer='Tuỳ theo độ phức tạp: Landing page đơn giản từ <strong>5-7 ngày</strong>, website doanh nghiệp từ <strong>2-3 tuần</strong>, và hệ thống web app tuỳ chỉnh từ <strong>1-2 tháng</strong>. Tôi luôn cam kết deadline rõ ràng ngay từ đầu.'
            />
            <FaqItem
              question="Tôi không biết gì về kỹ thuật, có làm việc được không?"
              answer="Hoàn toàn được! Đa số khách hàng của tôi không có nền tảng kỹ thuật. Tôi sẽ tư vấn, giải thích mọi thứ bằng ngôn ngữ dễ hiểu, và hướng dẫn bạn sử dụng tận tình sau khi bàn giao."
            />
            <FaqItem
              question="Chi phí thanh toán như thế nào?"
              answer='Thông thường chia làm <strong>2 đợt</strong>: 50% khi bắt đầu dự án và 50% khi bàn giao hoàn tất. Với dự án lớn có thể thoả thuận chia thành 3 đợt. Hỗ trợ thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử.'
            />
            <FaqItem
              question="Sau khi bàn giao, tôi có được hỗ trợ không?"
              answer='Có! Tất cả dự án đều được <strong>bảo hành miễn phí</strong> (3-12 tháng tuỳ gói). Sau thời gian bảo hành, tôi vẫn hỗ trợ bảo trì với chi phí rất hợp lý. Tôi cam kết đồng hành lâu dài.'
            />
            <FaqItem
              question="Website có chuẩn SEO để lên Google không?"
              answer='Mọi website tôi xây dựng đều được <strong>tối ưu SEO on-page</strong> theo tiêu chuẩn Google: cấu trúc semantic, tốc độ tải nhanh dưới 2s, mobile-friendly, schema markup. Gói Professional trở lên còn được tối ưu SEO chuyên sâu hơn.'
            />
            <FaqItem
              question="Tôi muốn thay đổi yêu cầu giữa chừng thì sao?"
              answer='Tôi hiểu rằng ý tưởng có thể thay đổi. Các thay đổi nhỏ trong phạm vi ban đầu được hỗ trợ <strong>miễn phí</strong>. Nếu thay đổi lớn ảnh hưởng đến scope, tôi sẽ trao đổi rõ ràng về chi phí và thời gian bổ sung trước khi thực hiện.'
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="sec-container">
          <div className="contact-wrap">
            <Reveal>
              <div className="cta-box">
                <h2>Sẵn sàng nâng tầm doanh nghiệp?</h2>
                <p>Chia sẻ ý tưởng — tôi luôn sẵn lòng tư vấn giải pháp tốt nhất, hoàn toàn miễn phí.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-panel">
                <h3>Liên Hệ Trực Tiếp</h3>
                <p className="sub">Phản hồi trong 2 giờ — chọn kênh bạn thích nhất:</p>
                <a href="tel:0358500195" className="c-row">
                  <div className="c-icon phone"><span className="material-icons-round" style={{ fontSize: '1.2rem' }}>call</span></div>
                  <div><div className="cl">Điện thoại</div><div className="cv">0358.500.195</div></div>
                </a>
                <a href="https://zalo.me/0358500195" target="_blank" rel="noopener noreferrer" className="c-row">
                  <div className="c-icon zalo"><span className="material-icons-round" style={{ fontSize: '1.2rem' }}>chat</span></div>
                  <div><div className="cl">Zalo</div><div className="cv">Chat ngay trên Zalo</div></div>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="c-row">
                  <div className="c-icon fb"><span className="material-icons-round" style={{ fontSize: '1.2rem' }}>forum</span></div>
                  <div><div className="cl">Facebook Messenger</div><div className="cv">Nhắn tin Messenger</div></div>
                </a>
                <a href="mailto:contact@leconghau.dev" className="c-row">
                  <div className="c-icon email"><span className="material-icons-round" style={{ fontSize: '1.2rem' }}>mail</span></div>
                  <div><div className="cl">Email</div><div className="cv">contact@leconghau.dev</div></div>
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="form-card">
                <div className="form-bar">
                  <div className="t-dot r" /><div className="t-dot y" /><div className="t-dot g" />
                  <span className="form-bar-t">Gửi yêu cầu tư vấn</span>
                </div>
                <div className="form-body">
                  <div className="fg"><label className="fl">Họ tên</label><input type="text" className="fi" placeholder="Nhập họ tên..." /></div>
                  <div className="fg"><label className="fl">Số điện thoại</label><input type="tel" className="fi" placeholder="Nhập số điện thoại..." /></div>
                  <div className="fg">
                    <label className="fl">Ngành nghề</label>
                    <select className="fs">
                      <option>-- Chọn ngành nghề --</option>
                      <option>Bất động sản</option>
                      <option>Bán lẻ / Shop Online</option>
                      <option>F&amp;B (Nhà hàng, Cafe)</option>
                      <option>Doanh nghiệp / Dịch vụ</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div className="fg"><label className="fl">Nội dung tư vấn</label><textarea className="ft" placeholder="Mô tả ý tưởng hoặc yêu cầu của bạn..." /></div>
                  <button className="form-submit-btn">
                    <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>send</span>
                    Gửi Yêu Cầu Tư Vấn
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-grid">
          <div>
            <div className="foot-logo"><span className="a">&lt;</span>Hậu.Dev<span className="a">/&gt;</span></div>
            <p className="foot-desc">Xây dựng giải pháp công nghệ thông minh, giúp doanh nghiệp SME tối ưu hóa vận hành và tăng trưởng bền vững.</p>
            <div className="foot-socials">
              <a href="#">FB</a><a href="#">ZL</a><a href="#">LI</a><a href="#">GH</a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Giải Pháp</h4>
            <ul>
              <li><a href="#">Thiết kế Web BĐS</a></li>
              <li><a href="#">Web Bán Hàng</a></li>
              <li><a href="#">Phần Mềm Quản Lý</a></li>
              <li><a href="#">SEO Tổng Thể</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Thông Tin</h4>
            <ul>
              <li><a href="#about">Về Lê Công Hậu</a></li>
              <li><a href="#cases">Case Studies</a></li>
              <li><a href="#contact">Liên Hệ</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">© 2026 leconghau.dev — Built with passion &amp; clean code</div>
      </footer>
    </>
  );
}
