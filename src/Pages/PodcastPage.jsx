// Lê Quốc Anh
// Lê Quốc Bảo
// Võ Đại Nhân
// Nguyễn Đình Phát
// Huỳnh Ngọc Nghị 
import { useState } from 'react';
export default function PodcastPage()
{
        return <>
        <title>Podcast tiếng Việt về Sức khỏe, Thời sự, Tư vấn tâm lý</title>
        <meta
          name="description"
          content="Nghe podcasts tiếng Việt hay trên VnExpress. Các nội dung Sức khỏe, Thời sự, Tư vấn tâm lý,...kênh podcast dành cho người Việt."
        />
        <meta
          name="keywords"
          content="podcast tiếng việt, podcast tiếng việt hay, kênh podcast tiếng việt hay"
        />
        <meta
          name="news_keywords"
          content="podcast tiếng việt, podcast tiếng việt hay, kênh podcast tiếng việt hay"
        />
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=100" />
        <meta property="fb:app_id" content={1547540628876392} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Vnexpress.net" />
        <meta name="tt_article_id" content={1004685} />
        <meta name="tt_category_id" content={1004685} />
        <meta name="tt_site_id" content={1000000} />
        <meta name="tt_site_id_new" content={1004685} />
        <meta name="tt_list_folder" content="1000000,1004685" />
        <meta name="tt_list_folder_name" content="VnExpress,Podcasts" />
        <meta name="tt_page_type" content="folder" />
        <meta name="tt_page_type_new" content={2} />
        {/* add meta for pvtt3334 */}
        {/* end meta for pvtt */}
        {/* META FOR FACEBOOK */}
        <meta property="og:site_name" content="vnexpress.net" />
        <meta property="og:rich_attachment" content="true" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          itemProp="url"
          content="https://vnexpress.net/podcast"
        />
        <meta
          property="og:image"
          itemProp="thumbnailUrl"
          content="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logo_default.jpg"
        />
        <meta property="og:image:width" content={800} />
        <meta property="og:image:height" content={354} />
        <meta
          content="Podcast tiếng Việt về Sức khỏe, Thời sự, Tư vấn tâm lý"
          itemProp="headline"
          property="og:title"
        />
        <meta
          content="Nghe podcasts tiếng Việt hay trên VnExpress. Các nội dung Sức khỏe, Thời sự, Tư vấn tâm lý,...kênh podcast dành cho người Việt."
          itemProp="description"
          property="og:description"
        />
        {/* END META FOR FACEBOOK */}
        <meta content="news" itemProp="genre" name="medium" />
        <meta content="vi-VN" itemProp="inLanguage" />
        <meta content="" itemProp="articleSection" />
        <meta
          content="Tin nhanh VnExpress"
          itemProp="sourceOrganization"
          name="source"
        />
        <meta name="copyright" content="VnExpress" />
        <meta name="author" content="VnExpress" />
        <meta name="robots" content="index,follow" />
        <meta name="geo.placename" content="Ha Noi, Viet Nam" />
        <meta name="geo.region" content="VN-HN" />
        <meta name="geo.position" content="21.030624;105.782431" />
        <meta name="ICBM" content="21.030624, 105.782431" />
        <meta name="revisit-after" content="days" />
        {/* Twitter Card */}
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:url" content="https://vnexpress.net/podcast" />
        <meta
          name="twitter:title"
          content="Podcast tiếng Việt về Sức khỏe, Thời sự, Tư vấn tâm lý"
        />
        <meta
          name="twitter:description"
          content="Nghe podcasts tiếng Việt hay trên VnExpress. Các nội dung Sức khỏe, Thời sự, Tư vấn tâm lý,...kênh podcast dành cho người Việt."
        />
        <meta
          name="twitter:image"
          content="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logo_default.jpg"
        />
        <meta name="twitter:site" content="@VnEnews" />
        <meta name="twitter:creator" content="@VnEnews" />
        {/* End Twitter Card */}
        <link rel="canonical" href="https://vnexpress.net/podcast" />
        <link rel="alternate" href="https://vnexpress.net/podcast" hrefLang="vi-vn" />
        <link rel="dns-prefetch" href="https://s1.vnecdn.net" />
        <link rel="dns-prefetch" href="https://s.eclick.vn" />
        <link rel="dns-prefetch" href="https://gw.vnexpress.net" />
        <link rel="dns-prefetch" href="https://usi-saas.vnexpress.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://s1.vnecdn.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://gw.vnexpress.net" />
        <link rel="preconnect" href="https://usi-saas.vnexpress.net" />
        <link rel="preconnect" href="https://s.eclick.vn" />
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" />
        {/* iPad icons */}
        <link
          rel="apple-touch-icon-precomposed"
          href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/72x72.png"
          sizes="72x72"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/114x114.png"
          sizes="144x144"
        />
        {/* iPhone and iPod touch icons */}
        <link
          rel="apple-touch-icon-precomposed"
          href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/57x57.png"
          sizes="57x57"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/114x114.png"
          sizes="114x114"
        />
        {/* Nokia Symbian */}
        <link
          rel="nokia-touch-icon"
          href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/57x57.png"
        />
        {/* Android icon precomposed so it takes precedence */}
        <link
          rel="apple-touch-icon-precomposed"
          href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/114x114.png"
          sizes="1x1"
        />
        {/* GOOGLE SEARCH META GOOGLE SEARCH STRUCTURED DATA FOR ARTICLE && GOOGLE BREADCRUMB STRUCTURED DATA*/}
        {/* END GOOGLE SEARCH META GOOGLE SEARCH STRUCTURED DATA FOR ARTICLE && GOOGLE BREADCRUMB STRUCTURED DATA*/}
        <link
          type="image/x-icon"
          href="https://s1.vnecdn.net/vnexpress/restruct/images/favicon.ico"
          rel="shortcut icon"
        />
        <meta name="tt_page_ads" content={1} />
        <meta name="tt_page_special" content={0} />
        <link
          rel="preload"
          href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/general-file.css"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          &lt;link rel="stylesheet"
          href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/general-file.css"
          crossorigin="anonymous"&gt;
        </noscript>
        <link
          rel="stylesheet"
          href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/podcast/audio-style-pc.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/podcast.css"
          media="all"
        />
        <style
          className="webfont"
          data-cache-name="Merriweather"
          data-cache-file-woff2="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/webfonts/Merriweather-woff2.css"
          data-cache-hash-woff2="fc2b038bec1f4b4d7dd2f8019a57a7ad"
          data-cache-file-woff="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/webfonts/Merriweather-woff.css"
          data-cache-hash-woff="cee538b68f8fa3400618e4a4f363a223"
          data-cache-file-ttf="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/webfonts/Merriweather-ttf.css"
          data-cache-hash-ttf="23fc73084560a7f6cc4057edce36ccd5"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        {/* VIDEO VOD SCRIPT */}
        {/* END VIDEO VOD SCRIPT */}
        <meta
          name="facebook-domain-verification"
          content="wvm97b5u7iqh99xtqcj81z0955s2ha"
        />
        <div id="_ads_bg_top" className="lazier" />
        <section
          id="supper_masthead"
          className="section section-ads-top banner-ads banner-top-home"
        />
        <header className="section top-header" data-campaign="Header">
          <div className="container ">
            <a href="javascript:;" className="all-menu all-menu-tablet">
              <span className="hamburger" />
            </a>
            <a
              href="/"
              data-medium="Logo"
              className="logo"
              title="Báo VnExpress - Báo tiếng Việt nhiều người xem nhất"
              onclick="trackingLogoHome('logo-header', this.href)"
            >
              <img
                src="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/v2_2019/pc/graphics/logo.svg"
                alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"
              />
            </a>
            <span className="time-now">Thứ năm, 28/11/2024</span>
            <div className="right">
              {/*<div id="_topLive" class=""></div>*/}
              <a
                href="/tin-tuc-24h"
                className="btn24hqua "
                title="Mới nhất"
                data-campaign="menu-MoiNhat"
                data-medium="Item-MoiNhat"
              >
                {/* <svg class="ic ic-24h"><use xlink:href="#time"></use></svg> */}
                Mới nhất
              </a>
              <div className="news-area">
                <span className="txt-area">
                  {/* <span class="dot-blue dot-region-news hidden"></span> */}
                  {/* <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7ZM9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7ZM11.9497 11.955C14.6834 9.2201 14.6834 4.78601 11.9497 2.05115C9.21608 -0.683716 4.78392 -0.683716 2.05025 2.05115C-0.683418 4.78601 -0.683418 9.2201 2.05025 11.955L3.57128 13.4538L5.61408 15.4389L5.74691 15.5567C6.52168 16.1847 7.65623 16.1455 8.38611 15.4391L10.8223 13.0691L11.9497 11.955ZM2.75499 2.75619C5.09944 0.410715 8.90055 0.410715 11.245 2.75619C13.5294 5.04153 13.5879 8.71039 11.4207 11.0667L11.245 11.2499L9.92371 12.5539L7.69315 14.7225L7.60016 14.8021C7.24594 15.0699 6.7543 15.0698 6.40012 14.802L6.30713 14.7224L3.3263 11.817L2.75499 11.2499L2.57927 11.0667C0.412077 8.71039 0.47065 5.04153 2.75499 2.75619Z" fill="#9F9F9F"></path>
                                  </svg> */}
                  Tin theo khu vực
                </span>
                {/* <div class="hint-area hint-region-news hidden">
                                  Trang tin về 
                                                                                                                                  <strong>
                                              <a href="https://vnexpress.net/topic/ha-noi-26482" title="Hà Nội" class="gaBoxLinkDisplay" data-event-category="Article Link Display" data-event-action="Folder-Podcast-Item-TinKhuVuc_Hint_Desktop" data-event-label="Item-1">Hà Nội</a>
                                          </strong>
                                          và									
                                                                          <strong>
                                              <a href="https://vnexpress.net/topic/tp-ho-chi-minh-26483" title="TP Hồ Chí Minh" class="gaBoxLinkDisplay" data-event-category="Article Link Display" data-event-action="Folder-Podcast-Item-TinKhuVuc_Hint_Desktop" data-event-label="Item-2">TP Hồ Chí Minh</a>
                                          </strong>
                                                                              
                                                                                              <span class="close-hint gaBoxLinkDisplay" data-event-category="Article Link Click" data-event-action="Folder-Podcast-Item-TinKhuVuc_Hint_Desktop" data-event-label="Button-Close">×</span>
                              </div> */}
                <ul className="sub-area">
                  <li>
                    <a
                      href="https://vnexpress.net/topic/ha-noi-26482"
                      title="Hà Nội"
                      data-medium="Item-TinKhuVuc_HaNoi"
                    >
                      Hà Nội
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vnexpress.net/topic/tp-ho-chi-minh-26483"
                      title="TP Hồ Chí Minh"
                      data-medium="Item-TinKhuVuc_TPHoChiMinh"
                    >
                      TP Hồ Chí Minh
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="https://e.vnexpress.net/"
                className="evne"
                title="VnExpress International"
                data-campaign="menu-English"
                data-medium="Item-English"
              >
                <svg className="ic ic-evne">
                  <use xlinkHref="#letter-E" />
                </svg>
                International
              </a>
              <form
                className="search search-vne"
                action="https://timkiem.vnexpress.net"
                id="formSearchHeader"
              >
                <input
                  id="keywordHeader"
                  type="text"
                  name="q"
                  placeholder="Tìm kiếm"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  title="Tìm kiếm"
                  className="btn-search-vne"
                  id="buttonSearchHeader"
                >
                  <svg className="ic ic-search">
                    <use xlinkHref="#Search" />
                  </svg>
                </button>
              </form>
              <a
                href="/myvne"
                title=""
                className="menu-myvn"
                data-medium="Logo-myvne"
              >
                <img
                  src="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/images/graphics/menu-myvne.svg"
                  alt=""
                />
              </a>
              <div id="myvne_taskbar" />
            </div>
          </div>
        </header>
        <section
          className="section wrap-main-nav"
          id="wrap-main-nav"
          data-campaign="Header"
        >
          <nav className="main-nav">
            <ul className="parent">
              <li className="home">
                <a
                  href="/"
                  className="flexbox"
                  title="Trang chủ"
                  data-medium="Menu-Home"
                  onclick="trackingLogoHome('logo-header-menu', this.href)"
                >
                  <svg className="ic ic-home">
                    <use xlinkHref="#Home" />
                  </svg>
                  <svg className="ic ic-evne">
                    <use xlinkHref="#letter-E" />
                  </svg>
                </a>
              </li>
              <li className="newlest">
                <a data-medium="Menu-MoiNhat" href="/tin-tuc-24h" title="Mới nhất">
                  Mới nhất
                </a>
              </li>
              <li className="thoisu" data-id={1001005}>
                <a title="Thời sự" href="/thoi-su" data-medium="Menu-ThoiSu">
                  Thời sự{" "}
                </a>
              </li>
              <li className="gocnhin" data-id={1003450}>
                <a title="Góc nhìn" href="/goc-nhin" data-medium="Menu-GocNhin">
                  Góc nhìn{" "}
                </a>
              </li>
              <li className="thegioi" data-id={1001002}>
                <a title="Thế giới" href="/the-gioi" data-medium="Menu-TheGioi">
                  Thế giới{" "}
                </a>
              </li>
              <li className="video" data-id={1003834}>
                <a
                  title="Video"
                  href="https://video.vnexpress.net"
                  data-medium="Menu-Video"
                >
                  Video{" "}
                </a>
              </li>
              <li className="podcasts active" data-id={1004685}>
                <a title="Podcasts" href="/podcast" data-medium="Menu-Podcasts">
                  Podcasts{" "}
                </a>
              </li>
              <li className="kinhdoanh" data-id={1003159}>
                <a title="Kinh doanh" href="/kinh-doanh" data-medium="Menu-KinhDoanh">
                  Kinh doanh{" "}
                </a>
              </li>
              <li className="batdongsan" data-id={1005628}>
                <a
                  title="Bất động sản"
                  href="/bat-dong-san"
                  data-medium="Menu-BatDongSan"
                >
                  Bất động sản{" "}
                </a>
              </li>
              <li className="khoahoc" data-id={1001009}>
                <a title="Khoa học" href="/khoa-hoc" data-medium="Menu-KhoaHoc">
                  Khoa học{" "}
                </a>
              </li>
              <li className="giaitri" data-id={1002691}>
                <a title="Giải trí" href="/giai-tri" data-medium="Menu-GiaiTri">
                  Giải trí{" "}
                </a>
              </li>
              <li className="thethao" data-id={1002565}>
                <a title="Thể thao" href="/the-thao" data-medium="Menu-TheThao">
                  Thể thao{" "}
                </a>
              </li>
              <li className="phapluat" data-id={1001007}>
                <a title="Pháp luật" href="/phap-luat" data-medium="Menu-PhapLuat">
                  Pháp luật{" "}
                </a>
              </li>
              <li className="giaoduc" data-id={1003497}>
                <a title="Giáo dục" href="/giao-duc" data-medium="Menu-GiaoDuc">
                  Giáo dục{" "}
                </a>
              </li>
              <li className="suckhoe" data-id={1003750}>
                <a title="Sức khỏe" href="/suc-khoe" data-medium="Menu-SucKhoe">
                  Sức khỏe{" "}
                </a>
              </li>
              <li className="doisong" data-id={1002966}>
                <a title="Đời sống" href="/doi-song" data-medium="Menu-DoiSong">
                  Đời sống{" "}
                </a>
              </li>
              <li className="dulich" data-id={1003231}>
                <a title="Du lịch" href="/du-lich" data-medium="Menu-DuLich">
                  Du lịch{" "}
                </a>
              </li>
              <li className="sohoa" data-id={1002592}>
                <a title="Số hóa" href="/so-hoa" data-medium="Menu-SoHoa">
                  Số hóa{" "}
                </a>
              </li>
              <li className="xe" data-id={1001006}>
                <a title="Xe" href="/oto-xe-may" data-medium="Menu-Xe">
                  Xe{" "}
                </a>
              </li>
              <li className="ykien" data-id={1001012}>
                <a title="Ý kiến" href="/y-kien" data-medium="Menu-YKien">
                  Ý kiến{" "}
                </a>
              </li>
              <li className="tamsu" data-id={1001014}>
                <a title="Tâm sự" href="/tam-su" data-medium="Menu-TamSu">
                  Tâm sự{" "}
                </a>
              </li>
              <li className="all-menu has_transition">
                <a href="javascript:;">
                  Tất cả <span className="hamburger" />
                </a>
              </li>
            </ul>
          </nav>
          <section className="wrap-all-menu" />
        </section>
        <section className="section" />
        {/*end header*/}
        {/*main_menu menu PC*/}
        <section
          className="section center"
          id="sync_bgu_and_masthead"
          style={{ display: "none" }}
        >
          <div id="sis_bgu"></div>
        </section>
        {/* CONTENT  */}
        <section className="section top-header top-header-folder ">
          <div className="container">
            <nav
              className="width_common flexbox nav-folder"
              style={{ flexWrap: "nowrap" }}
            >
              <div className="title-folder">
                <h1>
                  <a href="/podcast" title="Podcasts">
                    Podcasts
                  </a>
                </h1>
              </div>
              <ul className="ul-nav-folder" data-campaign="Header">
                <li>
                  <a
                    data-medium="Menu-VnexpressHomNay"
                    href="https://vnexpress.net/podcast/vnexpress-hom-nay"
                    title="VnExpress hôm nay"
                  >
                    VnExpress hôm nay
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-HoSoToiAc"
                    href="https://vnexpress.net/podcast/ho-so-toi-ac"
                    title="Hồ sơ tội ác"
                  >
                    Hồ sơ tội ác
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-GiaiMa"
                    href="https://vnexpress.net/podcast/giai-ma"
                    title="Giải mã"
                  >
                    Giải mã
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-HopDen"
                    href="https://vnexpress.net/podcast/hop-den"
                    title="Hộp đen"
                  >
                    Hộp đen
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-TaiChinhCaNhan"
                    href="https://vnexpress.net/podcast/tai-chinh-ca-nhan"
                    title="Tài chính cá nhân"
                  >
                    Tài chính cá nhân
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-BanOnKhong"
                    href="https://vnexpress.net/podcast/ban-on-khong"
                    title="Bạn ổn không?"
                  >
                    Bạn ổn không?
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-DiemTin"
                    href="https://vnexpress.net/podcast/diem-tin"
                    title="Điểm tin"
                  >
                    Điểm tin
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-NgheTuongLai"
                    href="https://vnexpress.net/podcast/nghe-tuong-lai"
                    title="Nghề Tương Lai"
                  >
                    Nghề Tương Lai
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-ThamThi"
                    href="https://vnexpress.net/podcast/tham-thi"
                    title="Thầm thì"
                  >
                    Thầm thì
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-TamDiemKinhTe"
                    href="https://vnexpress.net/podcast/tam-diem-kinh-te"
                    title="Tâm điểm kinh tế"
                  >
                    Tâm điểm kinh tế
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-ToiKe"
                    href="https://vnexpress.net/podcast/toi-ke"
                    title="Tôi kể"
                  >
                    Tôi kể
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-TienLamGi"
                    href="https://vnexpress.net/podcast/tien-lam-gi"
                    title="Tiền làm gì?"
                  >
                    Tiền làm gì?
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-HoNoiGi"
                    href="https://vnexpress.net/podcast/ho-noi-gi"
                    title="Họ nói gì?"
                  >
                    Họ nói gì?
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-LyHon"
                    href="https://vnexpress.net/podcast/ly-hon"
                    title="Ly hôn"
                  >
                    Ly hôn
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-NguoiTienPhong"
                    href="https://vnexpress.net/podcast/nguoi-tien-phong"
                    title="Người tiên phong"
                  >
                    Người tiên phong
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-KeHoachLacQuan"
                    href="https://vnexpress.net/podcast/ke-hoach-lac-quan"
                    title="Kế hoạch lạc quan"
                  >
                    Kế hoạch lạc quan
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-ToiTrongGuong"
                    href="https://vnexpress.net/podcast/toi-trong-guong"
                    title="Tôi trong gương"
                  >
                    Tôi trong gương
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-ChuyenDiLam"
                    href="https://vnexpress.net/podcast/chuyen-di-lam"
                    title="Chuyện đi làm"
                  >
                    Chuyện đi làm
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-UpMo18"
                    href="https://vnexpress.net/podcast/up-mo-18"
                    title="Úp mở 18+"
                  >
                    Úp mở 18+
                  </a>
                </li>
                <li>
                  <a
                    data-medium="Menu-NguyCo"
                    href="https://vnexpress.net/podcast/nguy-co"
                    title="Nguy - Cơ"
                  >
                    Nguy - Cơ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="section podcast-new-v2">
          <div className="container">
            <div id="box_podcast_topnews" data-campaign="Stream">
              <div className="grid grid__2 buid-top line-bottom">
                <article className="item-news news-point">
                  <div className="thumb-art">
                    <a
                      href="https://vnexpress.net/diem-tin-17h-chot-tang-tuoi-nghi-huu-cua-si-quan-quan-doi-ha-noi-du-kien-xay-dung-nha-hat-sat-ho-tay-4821599.html"
                      title="Điểm tin 17h: Chốt tăng tuổi nghỉ hưu của sĩ quan quân đội | Hà Nội dự kiến xây dựng nhà hát sát Hồ Tây"
                      className="thumb thumb-1x1"
                      data-medium="Item-1"
                      data-thumb={1}
                    >
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/28/dieubinh129JPG41051732765046-1-3691-9550-1732787901.jpg?w=180&h=180&q=100&dpr=1&fit=crop&s=LfF2AOwbIbw1YCi7OSvGcA 1x, https://i1-vnexpress.vnecdn.net/2024/11/28/dieubinh129JPG41051732765046-1-3691-9550-1732787901.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=GBss-Mmocf_GTj1kEB-THg 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img
                          itemProp="contentUrl"
                          style={{ transform: "translateX(-50%)", left: "50%" }}
                          loading="lazy"
                          intrinsicsize="180x180"
                          alt="Điểm tin 17h: Chốt tăng tuổi nghỉ hưu của sĩ quan quân đội | Hà Nội dự kiến xây dựng nhà hát sát Hồ Tây"
                          className="lazy"
                          src="https://i1-vnexpress.vnecdn.net/2024/11/28/dieubinh129JPG41051732765046-1-3691-9550-1732787901.jpg?w=180&h=180&q=100&dpr=1&fit=crop&s=LfF2AOwbIbw1YCi7OSvGcA"
                        />
                      </picture>
                    </a>
                  </div>
                  <h3 className="title-news">
                    <a
                      href="https://vnexpress.net/diem-tin-17h-chot-tang-tuoi-nghi-huu-cua-si-quan-quan-doi-ha-noi-du-kien-xay-dung-nha-hat-sat-ho-tay-4821599.html"
                      title="Điểm tin 17h: Chốt tăng tuổi nghỉ hưu của sĩ quan quân đội | Hà Nội dự kiến xây dựng nhà hát sát Hồ Tây"
                      data-medium="Item-1"
                      data-thumb={1}
                    >
                      Điểm tin 17h: Chốt tăng tuổi nghỉ hưu của sĩ quan quân đội | Hà
                      Nội dự kiến xây dựng nhà hát sát Hồ Tây
                    </a>
                  </h3>
                  <p className="description">
                    <a
                      href="https://vnexpress.net/diem-tin-17h-chot-tang-tuoi-nghi-huu-cua-si-quan-quan-doi-ha-noi-du-kien-xay-dung-nha-hat-sat-ho-tay-4821599.html"
                      title="Điểm tin 17h: Chốt tăng tuổi nghỉ hưu của sĩ quan quân đội | Hà Nội dự kiến xây dựng nhà hát sát Hồ Tây"
                      data-medium="Item-1"
                      data-thumb={1}
                    >
                      Giá xăng lên sát 21.000 đồng một lít; Nhiều người gốc Việt ở Mỹ
                      có thể bị trục xuất dưới thời ông Trump...
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <span className="time-public">
                        <span className="time-ago" dateTime="2024-11-28 16:59:11">
                          1h trước
                        </span>
                      </span>
                      <a
                        className="cat"
                        href="https://vnexpress.net/podcast/diem-tin"
                        title="Điểm tin"
                        data-medium="Menu-DiemTin"
                      >
                        Điểm tin
                      </a>
                      <a
                        className="count_cmt"
                        href="https://vnexpress.net/diem-tin-17h-chot-tang-tuoi-nghi-huu-cua-si-quan-quan-doi-ha-noi-du-kien-xay-dung-nha-hat-sat-ho-tay-4821599.html#box_comment_vne"
                        style={{ whiteSpace: "nowrap", display: "none" }}
                      >
                        <svg className="ic ic-comment">
                          <use xlinkHref="#Comment-Reg" />
                        </svg>
                        <span
                          className="txt_num_comment font_icon"
                          data-type="comment"
                          data-objecttype={9}
                          data-objectid={4821599}
                        />
                      </a>
                    </p>
                    <a
                      href="https://vnexpress.net/diem-tin-17h-chot-tang-tuoi-nghi-huu-cua-si-quan-quan-doi-ha-noi-du-kien-xay-dung-nha-hat-sat-ho-tay-4821599.html"
                      title="Điểm tin 17h: Chốt tăng tuổi nghỉ hưu của sĩ quan quân đội | Hà Nội dự kiến xây dựng nhà hát sát Hồ Tây"
                      data-medium="Item-1"
                      data-thumb={1}
                      className="timer"
                    >
                      <span>7 phút</span>
                      <span className="icon">
                        <svg className="ic">
                          <use xlinkHref="#play-1" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>
                <article className="item-news ">
                  <div className="thumb-art">
                    <a
                      href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html"
                      title="Có gì bên trong đường hầm bí mật của Hitler?"
                      className="thumb thumb-1x1"
                      data-medium="Item-2"
                      data-thumb={1}
                    >
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/28/Frame191-1732762840-3370-1732766309.png?w=180&h=180&q=100&dpr=1&fit=crop&s=Vff1otAWQ_P8j8RXk_uxyg 1x, https://i1-vnexpress.vnecdn.net/2024/11/28/Frame191-1732762840-3370-1732766309.png?w=180&h=180&q=100&dpr=2&fit=crop&s=XetuExZQ6-11aygBIpCzKQ 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img
                          itemProp="contentUrl"
                          style={{ transform: "translateX(-50%)", left: "50%" }}
                          loading="lazy"
                          intrinsicsize="180x180"
                          alt="Có gì bên trong đường hầm bí mật của Hitler?"
                          className="lazy"
                          src="https://i1-vnexpress.vnecdn.net/2024/11/28/Frame191-1732762840-3370-1732766309.png?w=180&h=180&q=100&dpr=1&fit=crop&s=Vff1otAWQ_P8j8RXk_uxyg"
                        />
                      </picture>
                    </a>
                  </div>
                  <h3 className="title-news">
                    <a
                      href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html"
                      title="Có gì bên trong đường hầm bí mật của Hitler?"
                      data-medium="Item-2"
                      data-thumb={1}
                    >
                      Có gì bên trong đường hầm bí mật của Hitler?
                    </a>
                  </h3>
                  <p className="description">
                    <a
                      href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html"
                      title="Có gì bên trong đường hầm bí mật của Hitler?"
                      data-medium="Item-2"
                      data-thumb={1}
                    >
                      Đường hầm xuyên núi khổng lồ của Hitler để lại các dấu vết cho
                      thấy đây là nơi Đức Quốc xã sản xuất vũ khí huỷ diệt, cũng như
                      thí nghiệm sinh học trên người.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <span className="time-public" />
                      <a
                        className="cat"
                        href="https://vnexpress.net/podcast/giai-ma"
                        title="Giải mã"
                        data-medium="Menu-GiaiMa"
                      >
                        Giải mã
                      </a>
                      <a
                        className="count_cmt"
                        href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html#box_comment_vne"
                        style={{ whiteSpace: "nowrap", display: "none" }}
                      >
                        <svg className="ic ic-comment">
                          <use xlinkHref="#Comment-Reg" />
                        </svg>
                        <span
                          className="txt_num_comment font_icon"
                          data-type="comment"
                          data-objecttype={9}
                          data-objectid={4821360}
                        />
                      </a>
                    </p>
                    <a
                      href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html"
                      title="Có gì bên trong đường hầm bí mật của Hitler?"
                      data-medium="Item-2"
                      data-thumb={1}
                      className="timer"
                    >
                      <span>12 phút</span>
                      <span className="icon">
                        <svg className="ic">
                          <use xlinkHref="#play-1" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>
              </div>
              <div className="grid grid__3 line-bottom">
                <article className="item-news ">
                  <div className="thumb-art">
                    <a
                      href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html"
                      title="Giới trẻ Việt dốc túi đu idol quốc nội"
                      className="thumb thumb-1x1"
                      data-medium="Item-3"
                      data-thumb={1}
                    >
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/28/8f7ca99910844fc992c2177007b1cc-8612-8227-1732740761.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=08bfsCTNEOoaA3nTds3YOg 1x, https://i1-vnexpress.vnecdn.net/2024/11/28/8f7ca99910844fc992c2177007b1cc-8612-8227-1732740761.jpg?w=100&h=100&q=100&dpr=2&fit=crop&s=0HPx5n3U8K_-hbHQVG3Zig 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img
                          itemProp="contentUrl"
                          style={{ transform: "translateX(-50%)", left: "50%" }}
                          loading="lazy"
                          intrinsicsize="100x100"
                          alt="Giới trẻ Việt dốc túi đu idol quốc nội"
                          className="lazy"
                          src="https://i1-vnexpress.vnecdn.net/2024/11/28/8f7ca99910844fc992c2177007b1cc-8612-8227-1732740761.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=08bfsCTNEOoaA3nTds3YOg"
                        />
                      </picture>
                    </a>
                  </div>
                  <h3 className="title-news">
                    <a
                      href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html"
                      title="Giới trẻ Việt dốc túi đu idol quốc nội"
                      data-medium="Item-3"
                      data-thumb={1}
                    >
                      Giới trẻ Việt dốc túi đu idol quốc nội
                    </a>
                  </h3>
                  <p className="description">
                    <a
                      href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html"
                      title="Giới trẻ Việt dốc túi đu idol quốc nội"
                      data-medium="Item-3"
                      data-thumb={1}
                    >
                      Bỏ hàng chục triệu xem 2 show liên tiếp, Nguyễn Anh, 29 tuổi,
                      tại TP HCM, tiếp tục săn lùng mọi dịch vụ, sản phẩm có liên quan
                      tới idol, chi tiền túi quảng bá hình ảnh thần tượng trên xe bus.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <a
                        className="cat"
                        href="https://vnexpress.net/podcast/vnexpress-hom-nay"
                        title="VnExpress hôm nay"
                        data-medium="Menu-VnexpressHomNay"
                      >
                        VnExpress hôm nay
                      </a>
                      <a
                        className="count_cmt"
                        href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html#box_comment_vne"
                        style={{ whiteSpace: "nowrap", display: "none" }}
                      >
                        <svg className="ic ic-comment">
                          <use xlinkHref="#Comment-Reg" />
                        </svg>
                        <span
                          className="txt_num_comment font_icon"
                          data-type="comment"
                          data-objecttype={9}
                          data-objectid={4821211}
                        />
                      </a>
                    </p>
                    <a
                      href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html"
                      title="Giới trẻ Việt dốc túi đu idol quốc nội"
                      data-medium="Item-3"
                      data-thumb={1}
                      className="timer"
                    >
                      <span>11 phút</span>
                      <span className="icon">
                        <svg className="ic">
                          <use xlinkHref="#play-1" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>
                <article className="item-news ">
                  <div className="thumb-art">
                    <a
                      href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html"
                      title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'"
                      className="thumb thumb-1x1"
                      data-medium="Item-4"
                      data-thumb={1}
                    >
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/27/6b52bc2582c24719bae8b393323b92-7756-5428-1732677418.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=QnAyVydW-4K4sz3aI6xU2A 1x, https://i1-vnexpress.vnecdn.net/2024/11/27/6b52bc2582c24719bae8b393323b92-7756-5428-1732677418.jpg?w=100&h=100&q=100&dpr=2&fit=crop&s=Wed7t0hJhOWs_X9EXGP1QQ 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img
                          itemProp="contentUrl"
                          style={{ transform: "translateX(-50%)", left: "50%" }}
                          loading="lazy"
                          intrinsicsize="100x100"
                          alt="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'"
                          className="lazy"
                          src="https://i1-vnexpress.vnecdn.net/2024/11/27/6b52bc2582c24719bae8b393323b92-7756-5428-1732677418.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=QnAyVydW-4K4sz3aI6xU2A"
                        />
                      </picture>
                    </a>
                  </div>
                  <h3 className="title-news">
                    <a
                      href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html"
                      title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'"
                      data-medium="Item-4"
                      data-thumb={1}
                    >
                      'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán
                      cafe'
                    </a>
                  </h3>
                  <p className="description">
                    <a
                      href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html"
                      title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'"
                      data-medium="Item-4"
                      data-thumb={1}
                    >
                      Xem nhẹ việc hoạch định tài chính khi mở quán cafe, anh Trần
                      Thanh Tùng, nhận ra mình "ném qua cửa sổ" hơn 10 tỷ khi nhìn lại
                      17 năm khởi nghiệp của mình.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <a
                        className="cat"
                        href="https://vnexpress.net/podcast/tai-chinh-ca-nhan"
                        title="Tài chính cá nhân"
                        data-medium="Menu-TaiChinhCaNhan"
                      >
                        Tài chính cá nhân
                      </a>
                      <a
                        className="count_cmt"
                        href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html#box_comment_vne"
                        style={{ whiteSpace: "nowrap", display: "none" }}
                      >
                        <svg className="ic ic-comment">
                          <use xlinkHref="#Comment-Reg" />
                        </svg>
                        <span
                          className="txt_num_comment font_icon"
                          data-type="comment"
                          data-objecttype={9}
                          data-objectid={4820858}
                        />
                      </a>
                    </p>
                    <a
                      href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html"
                      title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'"
                      data-medium="Item-4"
                      data-thumb={1}
                      className="timer"
                    >
                      <span>32 phút</span>
                      <span className="icon">
                        <svg className="ic">
                          <use xlinkHref="#play-1" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>
                <article className="item-news ">
                  <div className="thumb-art">
                    <a
                      href="https://vnexpress.net/nhan-su-it-thay-khac-biet-gi-khi-lam-viec-cho-nha-nuoc-va-doanh-nghiep-4820750.html"
                      title="Nhân sự IT thấy khác biệt gì khi làm việc cho nhà nước và doanh nghiệp?"
                      className="thumb thumb-1x1"
                      data-medium="Item-5"
                      data-thumb={1}
                    >
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/27/232323232322396221700096010-17-9817-5476-1732646458.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=kRp_qTApCKLEQ1QlidhEOg 1x, https://i1-vnexpress.vnecdn.net/2024/11/27/232323232322396221700096010-17-9817-5476-1732646458.jpg?w=100&h=100&q=100&dpr=2&fit=crop&s=MuQkwFg8vizLr99ieN4Vng 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img
                          itemProp="contentUrl"
                          style={{ transform: "translateX(-50%)", left: "50%" }}
                          loading="lazy"
                          intrinsicsize="100x100"
                          alt="Nhân sự IT thấy khác biệt gì khi làm việc cho nhà nước và doanh nghiệp?"
                          className="lazy"
                          src="https://i1-vnexpress.vnecdn.net/2024/11/27/232323232322396221700096010-17-9817-5476-1732646458.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=kRp_qTApCKLEQ1QlidhEOg"
                        />
                      </picture>
                    </a>
                  </div>
                  <h3 className="title-news">
                    <a
                      href="https://vnexpress.net/nhan-su-it-thay-khac-biet-gi-khi-lam-viec-cho-nha-nuoc-va-doanh-nghiep-4820750.html"
                      title="Nhân sự IT thấy khác biệt gì khi làm việc cho nhà nước và doanh nghiệp?"
                      data-medium="Item-5"
                      data-thumb={1}
                    >
                      Nhân sự IT thấy khác biệt gì khi làm việc cho nhà nước và doanh
                      nghiệp?
                    </a>
                  </h3>
                  <p className="description">
                    <a
                      href="https://vnexpress.net/nhan-su-it-thay-khac-biet-gi-khi-lam-viec-cho-nha-nuoc-va-doanh-nghiep-4820750.html"
                      title="Nhân sự IT thấy khác biệt gì khi làm việc cho nhà nước và doanh nghiệp?"
                      data-medium="Item-5"
                      data-thumb={1}
                    >
                      Từng là một nhân tố nổi bật khi ra trường, sau gần 10 năm thâm
                      niên làm IT trong Sở, Bình Minh, 39 tuổi ở Hà Nội, quyết rời đi.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <a
                        className="cat"
                        href="https://vnexpress.net/podcast/vnexpress-hom-nay"
                        title="VnExpress hôm nay"
                        data-medium="Menu-VnexpressHomNay"
                      >
                        VnExpress hôm nay
                      </a>
                      <a
                        className="count_cmt"
                        href="https://vnexpress.net/nhan-su-it-thay-khac-biet-gi-khi-lam-viec-cho-nha-nuoc-va-doanh-nghiep-4820750.html#box_comment_vne"
                        style={{ whiteSpace: "nowrap", display: "none" }}
                      >
                        <svg className="ic ic-comment">
                          <use xlinkHref="#Comment-Reg" />
                        </svg>
                        <span
                          className="txt_num_comment font_icon"
                          data-type="comment"
                          data-objecttype={9}
                          data-objectid={4820750}
                        />
                      </a>
                    </p>
                    <a
                      href="https://vnexpress.net/nhan-su-it-thay-khac-biet-gi-khi-lam-viec-cho-nha-nuoc-va-doanh-nghiep-4820750.html"
                      title="Nhân sự IT thấy khác biệt gì khi làm việc cho nhà nước và doanh nghiệp?"
                      data-medium="Item-5"
                      data-thumb={1}
                      className="timer"
                    >
                      <span>14 phút</span>
                      <span className="icon">
                        <svg className="ic">
                          <use xlinkHref="#play-1" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div
              className="box-program mfp-hide"
              id="box_list_show"
              data-campaign="Box-ChuongTrinh"
            >
              <h2 className="title-cate">
                <span className="line">Các chương trình</span>
              </h2>
              <div className="slide-box-program ">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide" data-show-id={16}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/02/17/vnexpress-hom-nay-1645081742.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1pt9vKy3WBG17g-HkeLVmA"
                          alt="VnExpress hôm nay"
                          title="VnExpress hôm nay"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/02/17/vnexpress-hom-nay-1645081742.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1pt9vKy3WBG17g-HkeLVmA)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/vnexpress-hom-nay"
                              title="VnExpress hôm nay"
                              data-medium="Menu-VnexpressHomNay"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/02/17/vnexpress-hom-nay-1645081742.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1pt9vKy3WBG17g-HkeLVmA"
                                alt="VnExpress hôm nay"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/vnexpress-hom-nay"
                              title="VnExpress hôm nay"
                              data-medium="Menu-VnexpressHomNay"
                            >
                              VnExpress hôm nay
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/vnexpress-hom-nay"
                              title="VnExpress hôm nay"
                              data-medium="Menu-VnexpressHomNay"
                            >
                              Lý giải vấn đề thời sự qua tiếng nói của người trong
                              cuộc. Xuất bản vào 4h sáng mỗi ngày.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/vnexpress-hom-nay"
                                title="VnExpress hôm nay"
                                data-medium="Menu-VnexpressHomNay"
                              >
                                1500 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={53}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2024/08/22/ho-so-toi-ac-1724336077.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=FrHIjeuAIM2ja8boqmAgJg"
                          alt="Hồ sơ tội ác"
                          title="Hồ sơ tội ác"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2024/08/22/ho-so-toi-ac-1724336077.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=FrHIjeuAIM2ja8boqmAgJg)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/ho-so-toi-ac"
                              title="Hồ sơ tội ác"
                              data-medium="Menu-HoSoToiAc"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2024/08/22/ho-so-toi-ac-1724336077.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=FrHIjeuAIM2ja8boqmAgJg"
                                alt="Hồ sơ tội ác"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/ho-so-toi-ac"
                              title="Hồ sơ tội ác"
                              data-medium="Menu-HoSoToiAc"
                            >
                              Hồ sơ tội ác
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/ho-so-toi-ac"
                              title="Hồ sơ tội ác"
                              data-medium="Menu-HoSoToiAc"
                            >
                              Nhìn lại những vụ án nghiêm trọng trong lịch sử hình sự
                              Việt Nam{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/ho-so-toi-ac"
                                title="Hồ sơ tội ác"
                                data-medium="Menu-HoSoToiAc"
                              >
                                14 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/vu-giet-nguoi-the-than-chiem-18-ty-tien-bao-hiem-4819111.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={33}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/08/30/giai-ma-1661875211.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=nOuB6XUhB56hzFgBABkQUA"
                          alt="Giải mã"
                          title="Giải mã"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/08/30/giai-ma-1661875211.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=nOuB6XUhB56hzFgBABkQUA)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/giai-ma"
                              title="Giải mã"
                              data-medium="Menu-GiaiMa"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/08/30/giai-ma-1661875211.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=nOuB6XUhB56hzFgBABkQUA"
                                alt="Giải mã"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/giai-ma"
                              title="Giải mã"
                              data-medium="Menu-GiaiMa"
                            >
                              Giải mã
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/giai-ma"
                              title="Giải mã"
                              data-medium="Menu-GiaiMa"
                            >
                              Tìm câu trả lời cho những hiện tượng bí ẩn. Xuất bản vào
                              lúc 20h tối thứ 5 hàng tuần.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/giai-ma"
                                title="Giải mã"
                                data-medium="Menu-GiaiMa"
                              >
                                139 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={30}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/05/16/hop-den-1652684483.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=15K4lhPyIm_wjaSqjWvwQQ"
                          alt="Hộp đen"
                          title="Hộp đen"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/05/16/hop-den-1652684483.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=15K4lhPyIm_wjaSqjWvwQQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/hop-den"
                              title="Hộp đen"
                              data-medium="Menu-HopDen"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/05/16/hop-den-1652684483.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=15K4lhPyIm_wjaSqjWvwQQ"
                                alt="Hộp đen"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/hop-den"
                              title="Hộp đen"
                              data-medium="Menu-HopDen"
                            >
                              Hộp đen
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/hop-den"
                              title="Hộp đen"
                              data-medium="Menu-HopDen"
                            >
                              Nơi lật tẩy những vụ án kinh điển. Xuất bản vào lúc 11h,
                              trưa thứ 3 hàng tuần.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/hop-den"
                                title="Hộp đen"
                                data-medium="Menu-HopDen"
                              >
                                133 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/sai-lam-khien-hacker-trom-3-ty-do-sa-luoi-sau-10-nam-4820418.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={32}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/08/23/tai-chinh-ca-nhan-1661229701.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=Ya5509pgGazuueVZAub4sQ"
                          alt="Tài chính cá nhân"
                          title="Tài chính cá nhân"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/08/23/tai-chinh-ca-nhan-1661229701.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=Ya5509pgGazuueVZAub4sQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/tai-chinh-ca-nhan"
                              title="Tài chính cá nhân"
                              data-medium="Menu-TaiChinhCaNhan"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/08/23/tai-chinh-ca-nhan-1661229701.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=Ya5509pgGazuueVZAub4sQ"
                                alt="Tài chính cá nhân"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/tai-chinh-ca-nhan"
                              title="Tài chính cá nhân"
                              data-medium="Menu-TaiChinhCaNhan"
                            >
                              Tài chính cá nhân
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/tai-chinh-ca-nhan"
                              title="Tài chính cá nhân"
                              data-medium="Menu-TaiChinhCaNhan"
                            >
                              Chuyên gia hướng dẫn cách quản lý tài chính cá nhân từ
                              cơ bản tới chuyên sâu. Xuất bản vào 11h trưa thứ 4 hàng
                              tuần.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/tai-chinh-ca-nhan"
                                title="Tài chính cá nhân"
                                data-medium="Menu-TaiChinhCaNhan"
                              >
                                120 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={15}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/02/17/ban-on-khong-1645081753.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=k1W2yJqYZlidyL0OJzBKuw"
                          alt="Bạn ổn không?"
                          title="Bạn ổn không?"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/02/17/ban-on-khong-1645081753.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=k1W2yJqYZlidyL0OJzBKuw)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/ban-on-khong"
                              title="Bạn ổn không?"
                              data-medium="Menu-BanOnKhong"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/02/17/ban-on-khong-1645081753.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=k1W2yJqYZlidyL0OJzBKuw"
                                alt="Bạn ổn không?"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/ban-on-khong"
                              title="Bạn ổn không?"
                              data-medium="Menu-BanOnKhong"
                            >
                              Bạn ổn không?
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/ban-on-khong"
                              title="Bạn ổn không?"
                              data-medium="Menu-BanOnKhong"
                            >
                              Nơi thính giả được tâm sự với chuyên gia tâm lý của
                              chương trình. Xuất bản 20h tối thứ bảy hàng tuần.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/ban-on-khong"
                                title="Bạn ổn không?"
                                data-medium="Menu-BanOnKhong"
                              >
                                216 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/toi-co-dang-bi-khinh-thuong-vi-vuong-vao-ca-do-4818945.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={19}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/05/16/diem-tin-1652654852.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=iJrP97QDFP-QkJh_NaMCeQ"
                          alt="Điểm tin"
                          title="Điểm tin"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/05/16/diem-tin-1652654852.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=iJrP97QDFP-QkJh_NaMCeQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/diem-tin"
                              title="Điểm tin"
                              data-medium="Menu-DiemTin"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/05/16/diem-tin-1652654852.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=iJrP97QDFP-QkJh_NaMCeQ"
                                alt="Điểm tin"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/diem-tin"
                              title="Điểm tin"
                              data-medium="Menu-DiemTin"
                            >
                              Điểm tin
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/diem-tin"
                              title="Điểm tin"
                              data-medium="Menu-DiemTin"
                            >
                              Tổng hợp tin tức nổi bật nhất, xuất bản vào 6h sáng và
                              17h chiều hàng ngày.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/diem-tin"
                                title="Điểm tin"
                                data-medium="Menu-DiemTin"
                              >
                                1607 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/diem-tin-17h-chot-tang-tuoi-nghi-huu-cua-si-quan-quan-doi-ha-noi-du-kien-xay-dung-nha-hat-sat-ho-tay-4821599.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={52}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2024/07/10/nghe-tuong-lai-1720609627.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1kCgdP7e_x0pxP5m1SWvqQ"
                          alt="Nghề Tương Lai"
                          title="Nghề Tương Lai"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2024/07/10/nghe-tuong-lai-1720609627.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1kCgdP7e_x0pxP5m1SWvqQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/nghe-tuong-lai"
                              title="Nghề Tương Lai"
                              data-medium="Menu-NgheTuongLai"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2024/07/10/nghe-tuong-lai-1720609627.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1kCgdP7e_x0pxP5m1SWvqQ"
                                alt="Nghề Tương Lai"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/nghe-tuong-lai"
                              title="Nghề Tương Lai"
                              data-medium="Menu-NgheTuongLai"
                            >
                              Nghề Tương Lai
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/nghe-tuong-lai"
                              title="Nghề Tương Lai"
                              data-medium="Menu-NgheTuongLai"
                            >
                              Chuỗi podcast quy tụ các chuyên gia đầu ngành, phân tích
                              xu hướng nghề tương lai giúp học sinh hiểu nhu cầu thị
                              trường, trang bị kỹ năng trước khi chọn trường.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/nghe-tuong-lai"
                                title="Nghề Tương Lai"
                                data-medium="Menu-NgheTuongLai"
                              >
                                5 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/tiktoker-co-phai-la-nghe-4785834.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={8}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/03/01/tham-thi-1646109866.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3aZaNXtUn-_w4OmSnTXlVw"
                          alt="Thầm thì"
                          title="Thầm thì"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/03/01/tham-thi-1646109866.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3aZaNXtUn-_w4OmSnTXlVw)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/tham-thi"
                              title="Thầm thì"
                              data-medium="Menu-ThamThi"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/03/01/tham-thi-1646109866.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3aZaNXtUn-_w4OmSnTXlVw"
                                alt="Thầm thì"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/tham-thi"
                              title="Thầm thì"
                              data-medium="Menu-ThamThi"
                            >
                              Thầm thì
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/tham-thi"
                              title="Thầm thì"
                              data-medium="Menu-ThamThi"
                            >
                              Bác sĩ giải đáp những vướng mắc về "chuyện chăn gối".
                              Xuất bản 20h tối thứ 6 mỗi tuần.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/tham-thi"
                                title="Thầm thì"
                                data-medium="Menu-ThamThi"
                              >
                                188 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/sex-co-giup-chua-lanh-4738864.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={51}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2024/03/25/tam-diem-kinh-te-1711300433.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=GwJoGvpqlQrF9lOVqPCaow"
                          alt="Tâm điểm kinh tế"
                          title="Tâm điểm kinh tế"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2024/03/25/tam-diem-kinh-te-1711300433.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=GwJoGvpqlQrF9lOVqPCaow)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/tam-diem-kinh-te"
                              title="Tâm điểm kinh tế"
                              data-medium="Menu-TamDiemKinhTe"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2024/03/25/tam-diem-kinh-te-1711300433.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=GwJoGvpqlQrF9lOVqPCaow"
                                alt="Tâm điểm kinh tế"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/tam-diem-kinh-te"
                              title="Tâm điểm kinh tế"
                              data-medium="Menu-TamDiemKinhTe"
                            >
                              Tâm điểm kinh tế
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/tam-diem-kinh-te"
                              title="Tâm điểm kinh tế"
                              data-medium="Menu-TamDiemKinhTe"
                            >
                              Đi sâu vào vấn đề kinh tế "nóng" nhất tuần. Xuất bản mỗi
                              6h sáng thứ hai.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/tam-diem-kinh-te"
                                title="Tâm điểm kinh tế"
                                data-medium="Menu-TamDiemKinhTe"
                              >
                                11 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/von-ngoai-do-vao-co-tao-cu-hich-cho-bat-dong-san-4753498.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={45}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2023/07/04/toi-ke-1688455882.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=NQabUdQa2Sw8kpvc5S3fQQ"
                          alt="Tôi kể"
                          title="Tôi kể"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2023/07/04/toi-ke-1688455882.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=NQabUdQa2Sw8kpvc5S3fQQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/toi-ke"
                              title="Tôi kể"
                              data-medium="Menu-ToiKe"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2023/07/04/toi-ke-1688455882.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=NQabUdQa2Sw8kpvc5S3fQQ"
                                alt="Tôi kể"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/toi-ke"
                              title="Tôi kể"
                              data-medium="Menu-ToiKe"
                            >
                              Tôi kể
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/toi-ke"
                              title="Tôi kể"
                              data-medium="Menu-ToiKe"
                            >
                              Những con người có số phận đặc biệt, sống với những lựa
                              chọn đặc biệt kể lại về cuộc đời chính mình.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/toi-ke"
                                title="Tôi kể"
                                data-medium="Menu-ToiKe"
                              >
                                42 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/hanh-trinh-hoan-luong-cua-chang-trai-nghien-ma-tuy-tu-nam-15-tuoi-4738384.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={18}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/09/03/tien-lam-gi-1662199960.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=p9PF1fds21r41592hh0zVw"
                          alt="Tiền làm gì?"
                          title="Tiền làm gì?"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/09/03/tien-lam-gi-1662199960.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=p9PF1fds21r41592hh0zVw)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/tien-lam-gi"
                              title="Tiền làm gì?"
                              data-medium="Menu-TienLamGi"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/09/03/tien-lam-gi-1662199960.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=p9PF1fds21r41592hh0zVw"
                                alt="Tiền làm gì?"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/tien-lam-gi"
                              title="Tiền làm gì?"
                              data-medium="Menu-TienLamGi"
                            >
                              Tiền làm gì?
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/tien-lam-gi"
                              title="Tiền làm gì?"
                              data-medium="Menu-TienLamGi"
                            >
                              Nơi những người có kinh nghiệm thực chiến chia sẻ về
                              cách kiếm, tiêu và quản lý tiền, đúc rút được từ "thành
                              và bại".{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/tien-lam-gi"
                                title="Tiền làm gì?"
                                data-medium="Menu-TienLamGi"
                              >
                                76 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/hoc-dau-tu-can-hoc-bang-trai-nghiem-thuc-te-4646304.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={26}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2021/12/09/ho-noi-gi-1639045395.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=pLV6CQmJ8l7rmcw6wVr_6g"
                          alt="Họ nói gì?"
                          title="Họ nói gì?"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2021/12/09/ho-noi-gi-1639045395.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=pLV6CQmJ8l7rmcw6wVr_6g)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/ho-noi-gi"
                              title="Họ nói gì?"
                              data-medium="Menu-HoNoiGi"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2021/12/09/ho-noi-gi-1639045395.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=pLV6CQmJ8l7rmcw6wVr_6g"
                                alt="Họ nói gì?"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/ho-noi-gi"
                              title="Họ nói gì?"
                              data-medium="Menu-HoNoiGi"
                            >
                              Họ nói gì?
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/ho-noi-gi"
                              title="Họ nói gì?"
                              data-medium="Menu-HoNoiGi"
                            >
                              Nơi trò chuyện với những nhân vật trong sự kiện.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/ho-noi-gi"
                                title="Họ nói gì?"
                                data-medium="Menu-HoNoiGi"
                              >
                                111 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/nguoi-viet-o-florida-gio-rit-nhu-tieng-dong-co-xe-f1-4802705.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={24}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/01/30/ly-hon-1643504712.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=hVEyuvwezxGkyWsMZoOmvQ"
                          alt="Ly hôn"
                          title="Ly hôn"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/01/30/ly-hon-1643504712.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=hVEyuvwezxGkyWsMZoOmvQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/ly-hon"
                              title="Ly hôn"
                              data-medium="Menu-LyHon"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/01/30/ly-hon-1643504712.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=hVEyuvwezxGkyWsMZoOmvQ"
                                alt="Ly hôn"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/ly-hon"
                              title="Ly hôn"
                              data-medium="Menu-LyHon"
                            >
                              Ly hôn
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/ly-hon"
                              title="Ly hôn"
                              data-medium="Menu-LyHon"
                            >
                              "Ly hôn" là nơi người trong cuộc chia sẻ về bài học sau
                              đổ vỡ. Xuất bản 11h trưa chủ nhật hàng tuần{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/ly-hon"
                                title="Ly hôn"
                                data-medium="Menu-LyHon"
                              >
                                52 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/tuong-co-the-duy-tri-hon-nhan-ca-doi-ma-khong-can-tinh-yeu-4560050.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={50}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2023/12/28/nguo-i-tien-phong-1703733517.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3Q0NM6HKI7LzXCh9DdoY2A"
                          alt="Người tiên phong"
                          title="Người tiên phong"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2023/12/28/nguo-i-tien-phong-1703733517.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3Q0NM6HKI7LzXCh9DdoY2A)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/nguoi-tien-phong"
                              title="Người tiên phong"
                              data-medium="Menu-NguoiTienPhong"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2023/12/28/nguo-i-tien-phong-1703733517.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3Q0NM6HKI7LzXCh9DdoY2A"
                                alt="Người tiên phong"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/nguoi-tien-phong"
                              title="Người tiên phong"
                              data-medium="Menu-NguoiTienPhong"
                            >
                              Người tiên phong
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/nguoi-tien-phong"
                              title="Người tiên phong"
                              data-medium="Menu-NguoiTienPhong"
                            >
                              Những câu chuyện bạn chưa từng nghe về thành công, thất
                              bại và kinh nghiệm xương máu từ những doanh nhân hàng
                              đầu. Mỗi câu chuyện là một bài học.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/nguoi-tien-phong"
                                title="Người tiên phong"
                                data-medium="Menu-NguoiTienPhong"
                              >
                                1 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/ceo-acecook-lam-hoan-hao-tu-nhung-viec-binh-thuong-nhat-4694967.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={49}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2023/12/07/ke-hoach-lac-quan-1701914832.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=9xK3vINV6Hzo2IfuYogjeQ"
                          alt="Kế hoạch lạc quan"
                          title="Kế hoạch lạc quan"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2023/12/07/ke-hoach-lac-quan-1701914832.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=9xK3vINV6Hzo2IfuYogjeQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/ke-hoach-lac-quan"
                              title="Kế hoạch lạc quan"
                              data-medium="Menu-KeHoachLacQuan"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2023/12/07/ke-hoach-lac-quan-1701914832.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=9xK3vINV6Hzo2IfuYogjeQ"
                                alt="Kế hoạch lạc quan"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/ke-hoach-lac-quan"
                              title="Kế hoạch lạc quan"
                              data-medium="Menu-KeHoachLacQuan"
                            >
                              Kế hoạch lạc quan
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/ke-hoach-lac-quan"
                              title="Kế hoạch lạc quan"
                              data-medium="Menu-KeHoachLacQuan"
                            >
                              Những bài học thực tế về cách xây dựng kế hoạch cuộc
                              đời, qua mỗi trải nghiệm sẽ trở thành phiên bản tốt hơn,
                              lạc quan hơn của chính mình mỗi ngày.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/ke-hoach-lac-quan"
                                title="Kế hoạch lạc quan"
                                data-medium="Menu-KeHoachLacQuan"
                              >
                                8 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/lam-quang-nhat-hot-boy-lang-the-thao-tim-lai-dinh-cao-tu-day-vuc-4699767.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={25}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/02/24/toi-trong-guong-1645669044.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=t1kDcWynBkOnqf_CPFoG5Q"
                          alt="Tôi trong gương"
                          title="Tôi trong gương"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/02/24/toi-trong-guong-1645669044.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=t1kDcWynBkOnqf_CPFoG5Q)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/toi-trong-guong"
                              title="Tôi trong gương"
                              data-medium="Menu-ToiTrongGuong"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/02/24/toi-trong-guong-1645669044.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=t1kDcWynBkOnqf_CPFoG5Q"
                                alt="Tôi trong gương"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/toi-trong-guong"
                              title="Tôi trong gương"
                              data-medium="Menu-ToiTrongGuong"
                            >
                              Tôi trong gương
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/toi-trong-guong"
                              title="Tôi trong gương"
                              data-medium="Menu-ToiTrongGuong"
                            >
                              "Tôi trong gương" là nơi những người trẻ thành công tự
                              nhìn nhận lại chặng đường trưởng thành của chính mình.
                              Xuất bản 9h sáng thứ 5 hàng tuần.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/toi-trong-guong"
                                title="Tôi trong gương"
                                data-medium="Menu-ToiTrongGuong"
                              >
                                27 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/ceo-dat-bike-thang-tien-qua-nhanh-o-silicon-toi-thay-vo-nghia-4503209.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={27}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/03/01/chuyen-di-lam-1646109841.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=vkpPgGfKYBIerHusK47_UQ"
                          alt="Chuyện đi làm"
                          title="Chuyện đi làm"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/03/01/chuyen-di-lam-1646109841.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=vkpPgGfKYBIerHusK47_UQ)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/chuyen-di-lam"
                              title="Chuyện đi làm"
                              data-medium="Menu-ChuyenDiLam"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/03/01/chuyen-di-lam-1646109841.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=vkpPgGfKYBIerHusK47_UQ"
                                alt="Chuyện đi làm"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/chuyen-di-lam"
                              title="Chuyện đi làm"
                              data-medium="Menu-ChuyenDiLam"
                            >
                              Chuyện đi làm
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/chuyen-di-lam"
                              title="Chuyện đi làm"
                              data-medium="Menu-ChuyenDiLam"
                            >
                              Mùa 2 sẽ là nơi các bạn trẻ "Úp-Mở" về vấn đề công việc,
                              lên sóng vào 17h thứ 4 hàng tuần.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/chuyen-di-lam"
                                title="Chuyện đi làm"
                                data-medium="Menu-ChuyenDiLam"
                              >
                                12 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/du-hoc-sinh-ve-hay-o-4445304.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={22}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/03/01/up-mo-1646109824.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=-ylzsXBDWkSiI5Le9m-jzA"
                          alt="Úp mở 18+"
                          title="Úp mở 18+"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/03/01/up-mo-1646109824.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=-ylzsXBDWkSiI5Le9m-jzA)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/up-mo-18"
                              title="Úp mở 18+"
                              data-medium="Menu-UpMo18"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/03/01/up-mo-1646109824.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=-ylzsXBDWkSiI5Le9m-jzA"
                                alt="Úp mở 18+"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/up-mo-18"
                              title="Úp mở 18+"
                              data-medium="Menu-UpMo18"
                            >
                              Úp mở 18+
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/up-mo-18"
                              title="Úp mở 18+"
                              data-medium="Menu-UpMo18"
                            >
                              "Úp - Mở" chuyện 18+ là nơi người trẻ bộc lộ về quan
                              điểm, lối sống trong nhiều lĩnh vực{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/up-mo-18"
                                title="Úp mở 18+"
                                data-medium="Menu-UpMo18"
                              >
                                14 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/gioi-thieu-chuong-trinh-up-mo-mua-2-4419652.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={20}>
                      <div className="item-program">
                        <img
                          src="https://i1-vnexpress.vnecdn.net/2022/05/17/nguy-co-1652784563.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=ZJAZaj6Zcom_C5R-E6eYoA"
                          alt="Nguy - Cơ"
                          title="Nguy - Cơ"
                        />
                        <div className="info item-news">
                          <span
                            className="bg-img"
                            style={{
                              background:
                                "url(https://i1-vnexpress.vnecdn.net/2022/05/17/nguy-co-1652784563.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=ZJAZaj6Zcom_C5R-E6eYoA)"
                            }}
                          />
                          <div className="thumb-art">
                            <a
                              className="thumb thumb-1x1"
                              href="https://vnexpress.net/podcast/nguy-co"
                              title="Nguy - Cơ"
                              data-medium="Menu-NguyCo"
                            >
                              <img
                                src="https://i1-vnexpress.vnecdn.net/2022/05/17/nguy-co-1652784563.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=ZJAZaj6Zcom_C5R-E6eYoA"
                                alt="Nguy - Cơ"
                              />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a
                              href="https://vnexpress.net/podcast/nguy-co"
                              title="Nguy - Cơ"
                              data-medium="Menu-NguyCo"
                            >
                              Nguy - Cơ
                            </a>
                          </h3>
                          <p className="description">
                            <a
                              href="https://vnexpress.net/podcast/nguy-co"
                              title="Nguy - Cơ"
                              data-medium="Menu-NguyCo"
                            >
                              Là nơi các doanh nghiệp chia sẻ câu chuyện của mình,
                              phân tích vấn đề kinh doanh, cuộc chiến thương trường.
                              Host là doanh nhân, diễn giả Nguyễn Phi Vân.{" "}
                            </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a
                                href="https://vnexpress.net/podcast/nguy-co"
                                title="Nguy - Cơ"
                                data-medium="Menu-NguyCo"
                              >
                                61 tập
                              </a>
                            </div>
                            <a
                              className="btn-play-podcast"
                              href="https://vnexpress.net/thuong-mai-dien-tu-tang-suc-canh-tranh-nho-doi-moi-sang-tao-4559391.html"
                              title="Nghe tập mới nhất"
                              data-medium="Item-MoiNhat"
                            >
                              <svg className="ic">
                                <use xlinkHref="#play-1" />
                              </svg>{" "}
                              Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-control">
                    <div className="swiper-button-vne swiper-button-next-podcast">
                      <span className="opacity-layer">
                        <span className="btn-slide btn-slide-next">
                          <svg className="ic ic-arrow-right">
                            <use xlinkHref="#Arrow-Right-1" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="swiper-button-vne swiper-button-prev-podcast">
                      <span className="opacity-layer">
                        <span className="btn-slide btn-slide-prev">
                          <svg className="ic ic-arrow-left">
                            <use xlinkHref="#Arrow-Left-1" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="_podcast_list_show" className="lazier" />
            <div id="_podcast_top_listened" className="lazier" />
            <div className="mb40">
              <div id="_break_page_1" className="lazier" />
            </div>
            <div className="flexbox">
              <div className="col-left-new">
                <div id="_podcast_shows" className="lazier" />
              </div>
              <div className="col-right-new">
                <div className="box-category box-contact mfp-hide">
                  Liên hệ ban Podcasts: 084 666 0123 hoặc{" "}
                  <a href="mailto:podcast@vnexpress.net" rel="nofollow" title="Mail">
                    podcast@vnexpress.net
                  </a>
                  .
                </div>
                <div className="box-category sticky" style={{ top: 60 }}>
                  <div className="banner-ads">
                    <div id="_large_1" className="lazier" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section_container">
          <div className="container wrap-box-business">
            <div className="width_common inner-box-business">
              <div className="box-category box-shop-sell box-sponsor-noslide close_not_qc">
                <ins
                  className="adsbyeclick"
                  data-zone={6258}
                  data-ad-width={1}
                  data-ad-height={1}
                />
              </div>
              <div id="rich-media-banner-ads">
                <div id="sis_richmedia"></div>
              </div>
              <div
                id="OverLapHiden"
                style={{
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: 0,
                  position: "fixed",
                  display: "none",
                  backgroundColor: "rgb(0, 0, 0)",
                  opacity: "0.6",
                  zIndex: 5000001
                }}
              />
              {/* Fshop*/}
              <div className="container fs_box">
                <div>
                  <div id="_footer_ads" className="lazier" />
                </div>
              </div>
              <div id="_box_business" className="lazier" />
            </div>
            <div id="_ads_box_business" className="lazier" />
          </div>
          {/* BB AD */}
          <div className="container">
            <div className="banner-ads">
              <div id="_footer_ads_bb" className="lazier" />
            </div>
          </div>
        </section>
        {/* END CONTENT  */}
        {/* FOOTER */}
        <div id="sis_slider"></div>
        <div id="_footer" className="lazier" />
        <footer
          className="footer container"
          data-component-runtime="js"
          data-component-function="initLayout"
          data-component-input="{}"
          id="wrapper_footer"
          data-campaign="Footer"
        />
        <a href="javascript:;" id="to_top" title="Lên đầu trang">
          <svg className="ic ic-arrow-up">
            <use xlinkHref="#Arrow-Up-1" />
          </svg>
        </a>
        <div id="tt_end_page" style={{ display: "none" }} />
      </>    
}
