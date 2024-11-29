// Lê Quốc Anh
// Lê Quốc Bảo
// Võ Đại Nhân
// Nguyễn Đình Phát
// Huỳnh Ngọc Nghị 
import { useState } from 'react';
export default function PodcastPage()
{
    return (
      <div>
        <title>Podcast tiếng Việt về Sức khỏe, Thời sự, Tư vấn tâm lý</title> <meta name="description" content="Nghe podcasts tiếng Việt hay trên VnExpress. Các nội dung Sức khỏe, Thời sự, Tư vấn tâm lý,...kênh podcast dành cho người Việt." />
        <meta name="keywords" content="podcast tiếng việt, podcast tiếng việt hay, kênh podcast tiếng việt hay" />
        <meta name="news_keywords" content="podcast tiếng việt, podcast tiếng việt hay, kênh podcast tiếng việt hay" />
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" name="viewport" />
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
        <meta property="og:url" itemProp="url" content="https://vnexpress.net/podcast" />
        <meta property="og:image" itemProp="thumbnailUrl" content="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logo_default.jpg" />
        <meta property="og:image:width" content={800} />
        <meta property="og:image:height" content={354} />
        <meta content="Podcast tiếng Việt về Sức khỏe, Thời sự, Tư vấn tâm lý" itemProp="headline" property="og:title" />
        <meta content="Nghe podcasts tiếng Việt hay trên VnExpress. Các nội dung Sức khỏe, Thời sự, Tư vấn tâm lý,...kênh podcast dành cho người Việt." itemProp="description" property="og:description" />
        {/* END META FOR FACEBOOK */}
        <meta content="news" itemProp="genre" name="medium" />
        <meta content="vi-VN" itemProp="inLanguage" />
        <meta content itemProp="articleSection" />
        <meta content="Tin nhanh VnExpress" itemProp="sourceOrganization" name="source" />
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
        <meta name="twitter:title" content="Podcast tiếng Việt về Sức khỏe, Thời sự, Tư vấn tâm lý" />
        <meta name="twitter:description" content="Nghe podcasts tiếng Việt hay trên VnExpress. Các nội dung Sức khỏe, Thời sự, Tư vấn tâm lý,...kênh podcast dành cho người Việt." />
        <meta name="twitter:image" content="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logo_default.jpg" />
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
        <link rel="apple-touch-icon-precomposed" href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon-precomposed" href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/114x114.png" sizes="144x144" />
        {/* iPhone and iPod touch icons */}
        <link rel="apple-touch-icon-precomposed" href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/57x57.png" sizes="57x57" />
        <link rel="apple-touch-icon-precomposed" href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/114x114.png" sizes="114x114" />
        {/* Nokia Symbian */}
        <link rel="nokia-touch-icon" href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/57x57.png" />
        {/* Android icon precomposed so it takes precedence */}
        <link rel="apple-touch-icon-precomposed" href="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/logos/114x114.png" sizes="1x1" />
        {/* GOOGLE SEARCH META GOOGLE SEARCH STRUCTURED DATA FOR ARTICLE && GOOGLE BREADCRUMB STRUCTURED DATA*/}
        {/* END GOOGLE SEARCH META GOOGLE SEARCH STRUCTURED DATA FOR ARTICLE && GOOGLE BREADCRUMB STRUCTURED DATA*/}
        <link type="image/x-icon" href="https://s1.vnecdn.net/vnexpress/restruct/images/favicon.ico" rel="shortcut icon" />
        <meta name="tt_page_ads" content={1} /><meta name="tt_page_special" content={0} />
        <style dangerouslySetInnerHTML={{__html: ".lazier{width:1px;height:1px}#_havien1_2.lazier,#_havien2_1.lazier,#_havien3_1.lazier{position:absolute;left:0;top:0}" }} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: ".icon_thumb_videophoto,.main-nav .parent,.wrap-all-menu .container,.top-header .right{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex}.flexbox{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex}.no-flexbox{display:inherit}.container:after{content:'';display:table;clear:both}.item-news .title-news,.list-sub-feature li .title_news,.title-folder,.wrapper-topstory-folder .list-sub-feature li .title_news,.info-author .meta-news .cat{font-feature-settings:'pnum' on , 'lnum' on;-webkit-font-feature-settings:'pnum' on , 'lnum' on;-moz-font-feature-settings:'pnum' on , 'lnum' on;-ms-font-feature-settings:'pnum' on , 'lnum' on}.ic{width:16px;height:16px;fill:#757575;display:inline-block;vertical-align:middle}.ic-in-title{width:12px;height:12px;fill:#757575;margin-right:5px;margin-top:-1.5%}.ic-male{fill:#0083D6 !important}.ic-fermale{fill:#D71450 !important}svg.ic-confide{fill:#9F224E}.title-news svg.ic-confide{width:20px;height:20px;margin-right:2px;margin-top:-5px}.ic-live{font-size:14px;display:inline-block}.ic-live:before{-webkit-border-radius:50%;border-radius:50%;display:block;position:relative;top:5px;width:8px;height:8px;content:'';background:#B52759;box-shadow:0 0 0 rgba(231,141,172,0.4);margin-right:5px;vertical-align:initial;-webkit-animation:live-pulse 1s infinite;-moz-animation:live-pulse 1s infinite;-o-animation:live-pulse 1s infinite;animation:live-pulse 1s infinite;float:left}.ic-live:after{content:'Trực tiếp';font-family:arial;font-style:normal;color:#9f224e}.ic-live.not-start:before{background:#757575;box-shadow:0 0 0 rgba(117,117,117,0.4);-webkit-animation:live-pulse-2 1s infinite;-moz-animation:live-pulse-2 1s infinite;-o-animation:live-pulse-2 1s infinite;animation:live-pulse-2 1s infinite}.ic-live.not-start:after{content:'Chưa bắt đầu';color:#222}.ic-live.the-end:before{background:#757575;box-shadow:0 0 0 rgba(117,117,117,0.4);-webkit-animation:live-pulse-2 1s infinite;-moz-animation:live-pulse-2 1s infinite;-o-animation:live-pulse-2 1s infinite;animation:live-pulse-2 1s infinite}.ic-live.the-end:after{content:'Đã kết thúc';color:#757575}.ic-live.ic-live-title{font-family:\"Merriweather\",serif;font-style:normal;color:#9F224E !important;margin-right:5px;vertical-align:middle;font-weight:700;position:relative;padding-left:13px;line-height:12px;margin-top:-4px}.ic-live.ic-live-title:after{content:''}.ic-live.ic-live-title:before{top:50%;margin-top:-4px;position:absolute;left:0}@-webkit-keyframes live-pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(231,141,172,0.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(231,141,172,0)}100%{-webkit-box-shadow:0 0 0 0 rgba(231,141,172,0)}}@keyframes live-pulse{0%{-moz-box-shadow:0 0 0 0 rgba(231,141,172,0.4);box-shadow:0 0 0 0 rgba(231,141,172,0.4)}70%{-moz-box-shadow:0 0 0 10px rgba(231,141,172,0);box-shadow:0 0 0 10px rgba(231,141,172,0)}100%{-moz-box-shadow:0 0 0 0 rgba(231,141,172,0);box-shadow:0 0 0 0 rgba(231,141,172,0)}}@-webkit-keyframes live-pulse-2{0%{-webkit-box-shadow:0 0 0 0 rgba(117,117,117,0.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(117,117,117,0)}100%{-webkit-box-shadow:0 0 0 0 rgba(117,117,117,0)}}@keyframes live-pulse-2{0%{-moz-box-shadow:0 0 0 0 rgba(117,117,117,0.4);box-shadow:0 0 0 0 rgba(117,117,117,0)}70%{-moz-box-shadow:0 0 0 10px rgba(117,117,117,0);box-shadow:0 0 0 10px rgba(117,117,117,0)}100%{-moz-box-shadow:0 0 0 0 rgba(117,117,117,0);box-shadow:0 0 0 0 rgba(117,117,117,0)}}html,body{text-rendering:optimizeLegibility}*{margin:0;padding:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;text-rendering:optimizeLegibility}body{color:#222;font:400 15px arial;min-height:100vh;overflow-x:hidden;overflow-y:scroll}html{-webkit-text-size-adjust:none}h1,h2,h3,h4,h5,h6{line-height:inherit;font-size:inherit;font-weight:inherit}.has_transition,.title-news a{transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}a:focus{outline:1 !important}a{color:inherit;text-decoration:none;outline:1}table{border-collapse:collapse}img{border:0;font-size:0;line-height:0;max-width:100%}ul,li{list-style-type:none}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"tel\"],input[type=\"number\"],textarea,select{background:#fff;width:100%;height:40px;border:1px solid #e5e5e5;font-size:15px;padding:0 12px;outline:none;font-family:arial;transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}input[type=\"text\"]:focus,input[type=\"password\"]:focus,input[type=\"email\"]:focus,input[type=\"tel\"]:focus,input[type=\"number\"]:focus,textarea:focus,select:focus{border:1px solid #4f4f4f}input[type=\"number\"]{-moz-appearance:textfield}input[type=\"number\"]::-webkit-outer-spin-button,input[type=\"number\"]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}button{border:none;outline:none;cursor:pointer}figure{margin:0 auto 20px;max-width:100%;clear:both}.clearfix:before,.clearfix:after{content:'';display:block;height:0;overflow:hidden}.clearfix:after{clear:both}.left{float:left !important}.right{float:right !important}.width_common{width:100%;float:left}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.no_wrap{white-space:nowrap}.txt_666{color:#666}.txt_10{font-size:10px}.txt_11{font-size:11px}.txt_14{font-size:14px}.txt_16{font-size:16px}.txt_vne{color:#9f224e}.mb0{margin-bottom:0 !important}.mb5{margin-bottom:5px}.mb10{margin-bottom:10px}.mb15{margin-bottom:15px}.mb20{margin-bottom:20px}.mb30{margin-bottom:30px}.mb35{margin-bottom:35px !important}.mt5{margin-top:5px}.mt10{margin-top:10px}.mt15{margin-top:15px}.mt20{margin-top:20px !important}.thumb-art{position:relative;margin-right:10px;float:left;width:140px}.thumb{display:block;overflow:hidden;height:0;position:relative;width:100%;background:#f4f4f4}.thumb img{-o-object-fit:cover;object-fit:cover;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%}.thumb iframe{width:100%;height:100%;position:absolute;left:0;top:0}.thumb-5x3{padding-bottom:60%}.thumb-5x2{padding-bottom:40%}.thumb-3x2{padding-bottom:66.66667%}.thumb-16x9{padding-bottom:56.25%}.thumb-1x1{padding-bottom:100%}.thumb-2x3{padding-bottom:150%}.thumb-video{width:100%;height:0;padding-bottom:56.25%;margin-bottom:0;position:relative;overflow:hidden}.thumb-video iframe{position:absolute;width:100%;height:100%;left:0;top:0}.icon_thumb_videophoto{width:24px;display:block;height:24px;line-height:24px;text-align:center;position:absolute;background:rgba(0,0,0,0.5);border-radius:3px;left:5px;bottom:5px;font-size:12px;color:#fff;font-weight:700;justify-content:center}.icon_thumb_videophoto .ic{align-self:center;fill:#fff;width:14px;height:14px}.title_news .icon_premium_vne,.title-news .icon_premium_vne{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='18' height='18' rx='2' fill='%23766123'/%3e%3cpath d='M5.35598 12.2754H12.6439C12.8079 12.2754 12.929 12.4287 12.8915 12.5883C12.7619 13.1401 12.6613 13.5687 12.6055 13.8044C12.5784 13.9192 12.476 13.9999 12.3581 13.9999H5.64231C5.52441 13.9999 5.42205 13.9193 5.39486 13.8046C5.33899 13.5688 5.23812 13.1402 5.10842 12.5884C5.07091 12.4287 5.19196 12.2754 5.35598 12.2754Z' fill='white'/%3e%3cpath d='M14.8044 4.42826C14.5147 5.66564 13.8644 8.44251 13.3372 10.6893C13.3103 10.8043 13.2078 10.8854 13.0896 10.8854H4.91036C4.79224 10.8854 4.68972 10.8043 4.66275 10.6893C4.13562 8.44251 3.48533 5.66564 3.19562 4.42826C3.14239 4.20092 3.39801 4.02838 3.58928 4.16228L6.94668 6.51247C7.06538 6.59556 7.22938 6.56289 7.30716 6.44066L8.78564 4.11779C8.88562 3.96072 9.11491 3.96074 9.21487 4.11782L10.6928 6.4406C10.7706 6.56284 10.9346 6.59553 11.0533 6.51244L14.4107 4.16228C14.602 4.02839 14.8576 4.20094 14.8044 4.42826Z' fill='white'/%3e%3c/svg%3e\");background-size:contain;width:18px;height:18px;display:inline-block;vertical-align:text-top;margin-right:3px}.box-player-video .item-news .title-news .icon_premium_vne{vertical-align:inherit}.thumb .icon_premium_vne{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='3' fill='%23A57F0B'/%3e%3cpath d='M6.89842 16.5854H17.1015C17.3312 16.5854 17.5006 16.8 17.4481 17.0236C17.2667 17.796 17.1258 18.396 17.0478 18.7261C17.0098 18.8868 16.8664 18.9998 16.7013 18.9998H7.29928C7.13423 18.9998 6.99092 18.8869 6.95285 18.7263C6.87464 18.3963 6.73342 17.7962 6.55184 17.0236C6.49933 16.8001 6.6688 16.5854 6.89842 16.5854Z' fill='white'/%3e%3cpath d='M20.1261 5.59956C19.7205 7.33189 18.8101 11.2195 18.0722 14.3651C18.0344 14.5261 17.8909 14.6395 17.7255 14.6395H6.27452C6.10916 14.6395 5.96563 14.5261 5.92787 14.3651C5.18988 11.2195 4.27949 7.33189 3.87389 5.59956C3.79937 5.28129 4.15723 5.03973 4.42502 5.2272L9.12537 8.51746C9.29155 8.63378 9.52115 8.58804 9.63004 8.41692L11.6999 5.1649C11.8399 4.94501 12.1609 4.94504 12.3008 5.16495L14.37 8.41683C14.4789 8.58797 14.7085 8.63373 14.8747 8.51741L19.575 5.2272C19.8428 5.03975 20.2007 5.28131 20.1261 5.59956Z' fill='white'/%3e%3c/svg%3e\");background-size:contain;width:24px;height:24px;position:absolute;bottom:10px;left:10px}.thumb .thumb-gif{width:100%;-webkit-filter:unset;filter:unset;-webkit-transition:opacity 1s ease-out;-o-transition:opacity 1s ease-out;transition:opacity 1s ease-out}.wrap-main-nav{background:#fff;position:sticky;position:-webkit-sticky;top:0;z-index:999}@media screen and (max-width: 1280px){.wrap-main-nav{min-height:auto !important}}.wrap-main-nav.show-all-menu .wrap-all-menu{top:calc(100% - 3px);visibility:visible;opacity:1}.wrap-main-nav.show-all-menu .wrap-all-menu:after{opacity:1;visibility:visible}.wrap-main-nav.show-all-menu .parent li{color:#bdbdbd}.wrap-main-nav.show-all-menu .all-menu{color:#9f224e !important}.wrap-main-nav.show-all-menu .hamburger{background:#9f224e !important}.wrap-main-nav.show-all-menu .hamburger:before,.wrap-main-nav.show-all-menu .hamburger:after{background:#9f224e !important}.wrap-main-nav.sticky{top:0;position:fixed}.main-nav{width:100%;float:left;clear:both;font-size:14px;overflow:hidden;border-bottom:1px solid #E5E5E5;transition-duration:300ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.main-nav:hover{overflow:visible}.main-nav .parent{justify-content:space-between;max-width:1440px;margin:0 auto;padding:0 15px}.main-nav .parent li{margin-right:12px;position:relative;font-weight:400;color:#222222;transition-duration:200ms;transition-property:color;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.main-nav .parent li a{padding:16.5px 0;display:block;white-space:nowrap}.main-nav .parent li:hover .sub{opacity:1;visibility:visible;top:100%;border-top:1px solid #9f224e}.main-nav .parent li.active a,.main-nav .parent li:hover a{color:#B52759}.main-nav .parent li.kinhdoanh:hover a,.main-nav .parent li.kinhdoanh.active a{color:#065E9D}.main-nav .parent li.giaitri:hover a,.main-nav .parent li.giaitri.active a{color:#EC326B}.main-nav .parent li.thethao:hover a,.main-nav .parent li.thethao.active a{color:#5FAE2E}.main-nav .parent li.phapluat:hover a,.main-nav .parent li.phapluat.active a{color:#923A3C}.main-nav .parent li.giaoduc:hover a,.main-nav .parent li.giaoduc.active a{color:#EB7600}.main-nav .parent li.suckhoe:hover a,.main-nav .parent li.suckhoe.active a{color:#049B93}.main-nav .parent li.doisong:hover a,.main-nav .parent li.doisong.active a{color:#309FC0}.main-nav .parent li.dulich:hover a,.main-nav .parent li.dulich.active a{color:#0083D6}.main-nav .parent li.khoahoc:hover a,.main-nav .parent li.khoahoc.active a{color:#AD9634}.main-nav .parent li.sohoa:hover a,.main-nav .parent li.sohoa.active a{color:#B88000}.main-nav .parent li.xe:hover a,.main-nav .parent li.xe.active a{color:#8392A0}.main-nav .parent li.cuoi:hover a,.main-nav .parent li.cuoi.active a{color:#E7776A}.main-nav .parent li.home{padding:12px 0}.main-nav .parent li.home a{width:24px;height:24px;border-radius:50%;background:#e5e5e5;justify-content:center;padding:0;position:relative;transition-duration:300ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.main-nav .parent li.home a .ic{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);transition-duration:300ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.main-nav .parent li.home a .ic.ic-evne{opacity:0;width:20px;height:20px}.main-nav .parent li.home:hover a,.main-nav .parent li.home.active a{background:#B52759}.main-nav .parent li.home:hover a .ic,.main-nav .parent li.home.active a .ic{fill:#fff}.main-nav .parent li.kinhdoanh .sub{border-top:1px solid #04416d}.main-nav .parent li.giaitri .sub{border-top:1px solid #d71450}.main-nav .parent li.thethao .sub{border-top:1px solid #498523}.main-nav .parent li.phapluat .sub{border-top:1px solid #6e2c2d}.main-nav .parent li.giaoduc .sub{border-top:1px solid #B75C00}.main-nav .parent li.suckhoe .sub{border-top:1px solid #03817B}.main-nav .parent li.doisong .sub{border-top:1px solid #2D96B5}.main-nav .parent li.dulich .sub{border-top:1px solid #0072bb}.main-nav .parent li.khoahoc .sub{border-top:1px solid #867428}.main-nav .parent li.sohoa .sub{border-top:1px solid #9c6d00}.main-nav .parent li.xe .sub{border-top:1px solid #5D6C79}.main-nav .parent li.cuoi .sub{border-top:1px solid #DC3926}.main-nav .parent li.newlest{opacity:0;visibility:hidden;width:0px;padding-right:0;margin-right:0;transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.main-nav .parent li.newlest a{color:#9f224e}.main-nav .parent li.newlest.active a,.main-nav .parent li.newlest:hover a{color:#B52759}.main-nav .parent li.newlest:after{content:\"\";width:1px;height:14px;background:#e5e5e5;position:absolute;top:18px;right:0}.main-nav .parent li.all-menu{font-size:0}.main-nav .parent li.li-myvne{opacity:0;visibility:hidden;width:0px;margin-right:0;margin-left:0;transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.main-nav .parent li.li-myvne a{padding:10px 0 8px 0;display:inline-block}.main-nav .sub{width:190px;background:#fff;opacity:0;visibility:hidden;position:absolute;z-index:2;left:0;top:calc(100% + 20px);box-shadow:0px 2px 8px rgba(0,0,0,0.1);transition-duration:200ms;transition-property:opacity,top,visible;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.main-nav .sub li{font-weight:normal;color:#222}.main-nav .sub li a{padding:10px 15px;color:#333 !important}.main-nav .sub li a:hover{text-decoration:underline}.main-nav .all-menu{margin-right:0 !important;color:#bdbdbd !important;font-weight:normal !important}.main-nav .all-menu a{display:-webkit-flex !important;display:-moz-flex !important;display:-ms-flex !important;display:-o-flex !important;display:flex !important}.main-nav .all-menu .hamburger{width:16px;height:2px;position:relative;background:#bdbdbd;display:block;top:2px;margin-left:8px}.main-nav .all-menu .hamburger:before,.main-nav .all-menu .hamburger:after{content:\"\";width:16px;height:2px;background:#bdbdbd;position:absolute}.main-nav .all-menu .hamburger:before{left:0;top:10px}.main-nav .all-menu .hamburger:after{left:0;top:5px}.main-nav .all-menu:hover .hamburger{background:#B52759}.main-nav .all-menu:hover .hamburger:before,.main-nav .all-menu:hover .hamburger:after{background:#B52759}@media screen and (max-width: 1369px){.main-nav .parent li{margin-right:10px}}.wrap-main-nav.sticky .main-nav{background:linear-gradient(180deg, #fff 0%, rgba(255,255,255,0) 100%),#fff;box-shadow:0px 2px 8px rgba(0,0,0,0.1)}.wrap-main-nav.sticky .main-nav .parent li.home a{background:none}.wrap-main-nav.sticky .main-nav .parent li.home a .ic-home{opacity:0}.wrap-main-nav.sticky .main-nav .parent li.home a .ic-evne{opacity:1}.wrap-main-nav.sticky .main-nav .parent li.newlest{opacity:1;visibility:visible;width:73.95px;padding-right:15px;margin-right:15px}.wrap-main-nav.sticky .main-nav .parent li.li-myvne{opacity:1;visibility:visible;width:61px;margin-left:8px;display:block !important}.wrap-main-nav.sticky .main-nav .parent li:nth-last-of-type(-n+4){display:none}.wrap-main-nav.sticky .main-nav .parent li.all-menu{display:block !important}.wrap-main-nav.sticky .main-nav .parent li ul.sub li:nth-last-of-type(-n+4){display:block}@media screen and (max-width: 1439px){.wrap-main-nav.sticky .main-nav .parent li:nth-last-of-type(-n+5){display:none}.wrap-main-nav.sticky .main-nav .parent li ul.sub li:nth-last-of-type(-n+5){display:block}}.wrap-all-menu{width:100%;float:left;background:#f7f7f7;position:absolute;top:calc(100% + 10px);opacity:0;visibility:hidden;transition-duration:200ms;transition-property:opacity,top,visible;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.wrap-all-menu:after{width:100%;height:300px;position:absolute;background:rgba(0,0,0,0.75);bottom:-300px;left:0;content:\"\";z-index:-1;opacity:0;visibility:hidden;transition-duration:700ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.wrap-all-menu .container{flex-wrap:wrap}.wrap-all-menu .header-menu{width:100%;float:left;border-bottom:1px solid #bdbdbd;padding:13px 0}.wrap-all-menu .header-menu .name-header{font-size:18px;line-height:23px;color:#4f4f4f;display:inline-block;font-family:\"Merriweather\",serif;font-weight:900}.wrap-all-menu .header-menu .close-menu{float:right;color:#076db6}.wrap-all-menu .header-menu .close-menu .icon-close{position:relative;width:14px;height:14px;display:block;float:right;top:3px;margin-left:10px}.wrap-all-menu .header-menu .close-menu .icon-close:before,.wrap-all-menu .header-menu .close-menu .icon-close:after{content:\"\";width:20px;height:2px;position:absolute;background:#076db6;left:-3px;top:6px}.wrap-all-menu .header-menu .close-menu .icon-close:before{transform:rotate(45deg)}.wrap-all-menu .header-menu .close-menu .icon-close:after{transform:rotate(-45deg)}.wrap-all-menu .content-left{width:calc(100% - 160px);float:left;padding-top:15px;padding-bottom:15px}.wrap-all-menu .content-left .scroll-menu-expand{max-height:calc(100vh - 130px);overflow:hidden}.wrap-all-menu .content-right{width:160px;padding-left:12px;float:right;padding-top:15px;border-left:1px solid #bdbdbd}.wrap-all-menu .content-right .scroll-menu-expand{max-height:calc(100vh - 130px);overflow:hidden}.wrap-all-menu .row-menu{font-size:0}.wrap-all-menu .cat-menu{display:inline-block;vertical-align:top;font-size:14px;width:150px;margin-bottom:30px}.wrap-all-menu .cat-menu li.hidden{display:none}.wrap-all-menu .cat-menu li:first-child{color:#9f224e;font-size:16px;font-weight:bold}.wrap-all-menu .cat-menu li:first-child a{padding-top:0}.wrap-all-menu .cat-menu li:first-child a:hover,.wrap-all-menu .cat-menu li:first-child a.active{text-decoration:underline;color:#B52759}.wrap-all-menu .cat-menu li.view-more{color:#757575;font-size:12px;position:relative;padding-top:3px}.wrap-all-menu .cat-menu li.view-more:hover{color:#087cce}.wrap-all-menu .cat-menu li.view-more:before{content:\"\";width:80px;height:1px;background:#bdbdbd;position:absolute;top:6px;left:0}.wrap-all-menu .cat-menu li a{padding:7.5px 0;display:inline-block}.wrap-all-menu .cat-menu li a:hover,.wrap-all-menu .cat-menu li a.active{text-decoration:underline}.wrap-all-menu .cat-menu li.kinhdoanh a:hover,.wrap-all-menu .cat-menu li.kinhdoanh a.active{color:#065E9D}.wrap-all-menu .cat-menu li.giaitri a:hover,.wrap-all-menu .cat-menu li.giaitri a.active{color:#EC326B}.wrap-all-menu .cat-menu li.thethao a:hover,.wrap-all-menu .cat-menu li.thethao a.active{color:#5FAE2E}.wrap-all-menu .cat-menu li.phapluat a:hover,.wrap-all-menu .cat-menu li.phapluat a.active{color:#923A3C}.wrap-all-menu .cat-menu li.giaoduc a:hover,.wrap-all-menu .cat-menu li.giaoduc a.active{color:#EB7600}.wrap-all-menu .cat-menu li.suckhoe a:hover,.wrap-all-menu .cat-menu li.suckhoe a.active{color:#049B93}.wrap-all-menu .cat-menu li.doisong a:hover,.wrap-all-menu .cat-menu li.doisong a.active{color:#309FC0}.wrap-all-menu .cat-menu li.dulich a:hover,.wrap-all-menu .cat-menu li.dulich a.active{color:#0083D6}.wrap-all-menu .cat-menu li.khoahoc a:hover,.wrap-all-menu .cat-menu li.khoahoc a.active{color:#AD9634}.wrap-all-menu .cat-menu li.sohoa a:hover,.wrap-all-menu .cat-menu li.sohoa a.active{color:#B88000}.wrap-all-menu .cat-menu li.xe a:hover,.wrap-all-menu .cat-menu li.xe a.active{color:#8392A0}.wrap-all-menu .cat-menu li.cuoi a:hover,.wrap-all-menu .cat-menu li.cuoi a.active{color:#E7776A}.wrap-all-menu .type-news{padding-bottom:12px;border-bottom:1px solid #bdbdbd;margin-bottom:20px}.wrap-all-menu .type-news .item-type{font-size:16px;font-weight:bold;margin-bottom:17px}.wrap-all-menu .type-news .item-type:hover a{text-decoration:underline}.wrap-all-menu .list-link{padding-bottom:12px;border-bottom:1px solid #bdbdbd;margin-bottom:20px}.wrap-all-menu .list-link .link{font-size:14px;margin-bottom:15px}.wrap-all-menu .list-link .link:hover a{text-decoration:underline}.wrap-all-menu .contact .ic{margin-right:5px}.wrap-all-menu .contact p{margin-bottom:10px}.wrap-all-menu .contact a{border:1px solid #e5e5e5;background:#fff;border-radius:3px;height:32px;line-height:32px;display:block;text-align:left;padding-left:12px;margin-bottom:10px;font-size:14px}.wrap-all-menu .contact a:hover{color:#087cce}.wrap-all-menu .contact .mail{background:none;border-radius:3px;height:20px;line-height:20px;padding-left:0;display:block;text-align:left;border:none}.wrap-all-menu .contact .mail .ic{fill:#bdbdbd;margin-top:-2px}.wrap-all-menu .contact .ads{background:none;border-radius:3px;height:20px;line-height:20px;padding-left:0;display:block;text-align:left;border:none}.wrap-all-menu .contact .ads .ic{fill:none}.wrap-all-menu .contact .ads .ic.ic-ads{width:13px;height:14px;background:url(https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/images/graphics/icon-eclick.svg) no-repeat 0 0;margin-top:-2px;margin-right:9px}.wrap-all-menu .contact .vlight{background:none;padding-left:0;border:none;height:20px;line-height:20px}.wrap-all-menu .contact .vlight .ic-vlight{width:14px;height:16px;display:inline-block;vertical-align:middle;background:url(https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/images/graphics/logo_vlight.svg) no-repeat 0 0/contain;margin-right:5px}.wrap-all-menu .contact .vlight:hover{color:#087cce}.wrap-all-menu .contact.downloadapp{padding-top:20px;margin-top:20px;border-top:1px solid #bdbdbd}.wrap-all-menu .contact.downloadapp a .ic{margin-top:-3px}.wrap-all-menu .contact.downloadapp a:hover{color:#222;background:#e5e5e5}.wrap-main-nav.sticky+.section{margin-top:50px}.lazy-blur{-webkit-filter:blur(2px);filter:blur(2px)}.lazy-unblur{opacity:0;-webkit-filter:unset;filter:unset;will-change:opacity;-webkit-transition:opacity 1s ease-out;-o-transition:opacity 1s ease-out;transition:opacity 1s ease-out}.lazier{width:1px;height:1px;clear:both}.thumb-art{position:relative}.lazy{position:absolute;top:0;left:0}.loaded{position:absolute;top:0;left:0;opacity:0;-webkit-filter:unset;filter:unset;-webkit-transition:opacity 1s ease-out;-o-transition:opacity 1s ease-out;transition:opacity 1s ease-out}@keyframes fadeInUp{from{-webkit-transform:translate3d(0, 5px, 0);transform:translate3d(0, 5px, 0)}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fadeInUp{from{-webkit-transform:translate3d(0, 5px, 0);transform:translate3d(0, 5px, 0)}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}.animated{animation-duration:1s;animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-fill-mode:both}.animatedFadeInUp{opacity:0}.fadeInUp{opacity:0;animation-name:fadeInUp;-webkit-animation-name:fadeInUp}.grecaptcha-badge{display:none !important}.banner-ads{width:100%;float:left;text-align:center;overflow:hidden}.banner-ads.banner-height-360{height:360px}.banner-ads.banner-height-360 img{height:360px}.banner-ads.banner-height-600{height:600px}.banner-ads.banner-height-600 img{height:600px}.banner-ads.banner-height-250{height:250px}.banner-ads.banner-height-250 img{height:250px}.banner-ads.banner-height-500{height:500px}.banner-ads.banner-height-500 img{height:500px}.banner-ads.banner-height-90{height:90px}.banner-ads.banner-height-90 img{height:90px}.section-ads-top{transition:all 0.6s ease-in-out;background:#f7f7f7;min-height:270px !important;flex-direction:column}.container{width:100%;max-width:1130px;padding:0 15px;margin:0 auto;position:relative}.extra-container{width:100%;max-width:1340px;padding:0 15px}.section{width:100%;float:left}.hidden{display:none !important}.top-header{padding:8.5px 0;border-bottom:1px solid #E5E5E5}.top-header .right{align-items:center}.top-header .search{position:relative;margin-left:10px;padding-left:10px;line-height:32px}.top-header .search input{height:32px;line-height:32px;border-radius:16px;border:1px solid #E5E5E5;padding:0 30px 0 14px;margin:0;width:160px}.top-header .search input:focus{border:1px solid #bdbdbd}.top-header .search button{background:none;position:absolute;right:0;top:0;width:32px;height:32px}.top-header .search button .ic{fill:#bdbdbd}.top-header .search:before{content:\"\";width:1px;height:24px;background:#e5e5e5;position:absolute;left:0;top:4px}.top-header .news-area{margin-top:-2px}.live-button{background:#ffffff;border:1px solid #e5e5e5;border-radius:3px;padding:6px 10px 7px 10px;display:inline-block;margin-right:15px;cursor:pointer;position:relative}.live-button .txt-live{text-transform:uppercase;color:#757575;font-size:14px;line-height:16px}.live-button .ic-live{display:none}.live-button .ic-live:after{content:\"\"}.live-button .ic-live:before{top:-1px;background:#ed1b24}.live-button.has-live{background:#fcf2f6;border:1px solid #ed1b24}.live-button.has-live .txt-live{color:#ed1b24}.live-button.living{background:rgba(237,27,36,0.1);border:1px solid #ed1b24}.live-button.living .txt-live{color:#ed1b24}.live-button.living .ic-live{display:inline-block}.all-menu-tablet{float:left;width:50px;height:33px;text-align:center;margin-left:-15px;margin-top:-2px;cursor:pointer;display:none}.all-menu-tablet .hamburger{width:20px;height:2px;background:#bdbdbd;display:inline-block;position:relative}.all-menu-tablet .hamburger:before,.all-menu-tablet .hamburger:after{content:\"\";width:20px;height:2px;background:#bdbdbd;position:absolute;left:0}.all-menu-tablet .hamburger:before{top:6px}.all-menu-tablet .hamburger:after{top:12px}.all-menu-tablet.close-menu-tablet{padding-top:5px}.all-menu-tablet.close-menu-tablet .hamburger{transform:rotate(45deg);-webkit-transform:rotate(45deg)}.all-menu-tablet.close-menu-tablet .hamburger:before{display:none}.all-menu-tablet.close-menu-tablet .hamburger:after{transform:rotate(-90deg);-webkit-transform:rotate(-90deg);top:0}.myvne_taskbar{margin-left:15px}.myvne_taskbar .log_txt{height:32px;line-height:32px;color:#4f4f4f}.myvne_taskbar .log_txt .ic-user{fill:#bdbdbd;margin-right:5px;margin-top:-2px}.myvne_taskbar .log_txt:hover{color:#087cce}.logo{display:inline-block;float:left;padding-top:2px}.btn24hqua,.evne{height:32px;line-height:30px;padding:0;border-radius:3px;font-size:14px;color:#757575;display:inline-block}.btn24hqua .ic,.evne .ic{margin-right:5px;margin-top:-1px}.btn24hqua:hover,.evne:hover{color:#4f4f4f}.btn24hqua{position:relative}.btn24hqua:after{width:1px;height:20px;background:#efefef;content:'';position:absolute;top:5px;right:-11px}.btn24hqua .ic{fill:#bdbdbd}.btn24hqua.active{color:#9f224e}.btn24hqua.active .ic{fill:#9f224e}.evne{margin-left:20px;position:relative}.evne:after{width:1px;height:20px;background:#efefef;content:'';position:absolute;top:5px;left:-11px}.time-now{font-size:14px;line-height:32px;color:#757575;position:relative;margin-left:20px;padding-left:15px;float:left}.time-now:before{content:\"\";width:1px;height:26px;background:#e5e5e5;position:absolute;left:0;top:2px}.news-area{position:relative;display:inline-block;margin-left:20px;cursor:pointer;z-index:1000;padding:8px 0}.news-area .txt-area{display:flex;align-items:center;color:#757575;font-size:14px;position:relative}.news-area .txt-area .dot-blue{width:4px;height:4px;background:#087ECA;position:absolute;border-radius:50%;top:-3px;left:13px}.news-area svg{margin-right:5px}.news-area:hover .sub-area{opacity:1;visibility:visible;top:100%}.news-area .hint-area{background:#E0F3FE;border-radius:4px;padding:10px 40px 10px 10px;position:absolute;top:100%;left:-15px;color:#076DB6;font-size:14px;white-space:nowrap;z-index:1}.news-area .hint-area:before{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid #E0F3FE;content:'';position:absolute;top:-7px;left:16px}.news-area .hint-area .close-hint{color:#076DB6;font-size:25px;font-family:-webkit-body;cursor:pointer;text-align:center;width:30px;height:30px;line-height:30px;position:absolute;top:3px;right:3px}.news-area .hint-area:hover+.sub-area{opacity:0}.sub-area{width:155px;background:#FFFFFF;box-shadow:0px 1px 4px rgba(0,0,0,0.2);border-radius:4px;position:absolute;left:0;opacity:0;visibility:hidden;top:120%;transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.sub-area li a{display:block;padding:12px 15px;color:#4F4F4F;font-size:14px;line-height:140%;font-weight:700}.sub-area li:hover a{color:#B42652}.sub-area li.disable a{color:#9F9F9F}.weather-page .sub-area,.top-header .sub-area{width:360px;padding:20px 15px;line-height:1.2}.weather-page .sub-area svg,.top-header .sub-area svg{fill:currentColor}.weather-page .sub-area .head,.top-header .sub-area .head{border-bottom:1px solid #E5E5E5;padding:0 10px 20px 15px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;color:#4F4F4F}.weather-page .sub-area .head .title,.top-header .sub-area .head .title{display:flex;align-items:center}.weather-page .sub-area .head .title .ic-weather,.top-header .sub-area .head .title .ic-weather{width:24px;height:24px;fill:#9F9F9F}.weather-page .sub-area .head .title .note-location,.top-header .sub-area .head .title .note-location{color:#9F9F9F;font-size:12px;margin-top:8px}.weather-page .sub-area .btn-on-off .switch,.top-header .sub-area .btn-on-off .switch{position:relative;display:inline-block;width:50px;height:30px;margin-left:4px}.weather-page .sub-area .btn-on-off .switch .slider,.top-header .sub-area .btn-on-off .switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:rgba(120,120,128,0.16);-webkit-transition:.4s;transition:.4s}.weather-page .sub-area .btn-on-off .switch .slider.round,.top-header .sub-area .btn-on-off .switch .slider.round{border-radius:34px}.weather-page .sub-area .btn-on-off .switch .slider.round::before,.top-header .sub-area .btn-on-off .switch .slider.round::before{border-radius:50%}.weather-page .sub-area .btn-on-off .switch .slider::before,.top-header .sub-area .btn-on-off .switch .slider::before{position:absolute;content:\"\";height:26px;width:25px;left:2px;top:2px;background-color:white;box-shadow:0px 1px 4px rgba(0,0,0,0.2);-webkit-transition:.4s;transition:.4s}.weather-page .sub-area .btn-on-off .switch input,.top-header .sub-area .btn-on-off .switch input{opacity:0;width:0;height:0}.weather-page .sub-area .btn-on-off .switch input:checked+.slider,.top-header .sub-area .btn-on-off .switch input:checked+.slider{background-color:#C92A57}.weather-page .sub-area .btn-on-off .switch input:checked+.slider::before,.top-header .sub-area .btn-on-off .switch input:checked+.slider::before{transform:translateX(21px)}.weather-page .sub-area .search,.top-header .sub-area .search{position:relative;margin-bottom:10px;margin-left:0;padding-left:0;line-height:1.3}.weather-page .sub-area .search::before,.top-header .sub-area .search::before{display:none !important}.weather-page .sub-area .search button,.top-header .sub-area .search button{position:absolute;width:35px;height:40px;background:none;left:2px;top:0}.weather-page .sub-area .search button svg,.top-header .sub-area .search button svg{width:20px;height:20px;fill:#9F9F9F}.weather-page .sub-area .search input,.top-header .sub-area .search input{float:none;border:1px solid #BDBDBD;border-radius:8px;padding-left:32px;width:100%;height:40px}.weather-page .sub-area .scroll-height,.top-header .sub-area .scroll-height{max-height:200px;overflow-y:auto;scrollbar-color:#E5E5E5 #fff;scrollbar-width:thin}.weather-page .sub-area .scroll-height::-webkit-scrollbar,.top-header .sub-area .scroll-height::-webkit-scrollbar{width:4px}.weather-page .sub-area .scroll-height::-webkit-scrollbar-thumb,.top-header .sub-area .scroll-height::-webkit-scrollbar-thumb{background-color:#E5E5E5;width:4px;border-radius:10px}.weather-page .sub-area .list-address .adrress,.top-header .sub-area .list-address .adrress{display:flex;justify-content:space-between;align-items:center;width:100%;position:relative;border-radius:8px;padding:6px 16px;transition-duration:300ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.weather-page .sub-area .list-address .adrress .location,.top-header .sub-area .list-address .adrress .location{font:400 14px Arial;color:#4F4F4F;padding:0;margin:0}.weather-page .sub-area .list-address .adrress .option,.top-header .sub-area .list-address .adrress .option{display:flex;opacity:0;visibility:hidden;transition-duration:300ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.weather-page .sub-area .list-address .adrress .option a,.top-header .sub-area .list-address .adrress .option a{background:#FFFFFF;border-radius:8px;color:#4F4F4F;font-size:12px;font-weight:400;padding:4px 6px;margin-left:8px;display:flex;align-items:center}.weather-page .sub-area .list-address .adrress .option a svg,.top-header .sub-area .list-address .adrress .option a svg{width:20px;height:20px;margin-right:4px}.weather-page .sub-area .list-address .adrress .option a:hover,.weather-page .sub-area .list-address .adrress .option a.active,.top-header .sub-area .list-address .adrress .option a:hover,.top-header .sub-area .list-address .adrress .option a.active{background:#757575;color:#fff}.weather-page .sub-area .list-address .adrress .option a span+svg,.top-header .sub-area .list-address .adrress .option a span+svg{margin-left:4px;margin-right:0}.weather-page .sub-area .list-address .adrress .option .default,.top-header .sub-area .list-address .adrress .option .default{display:none}.weather-page .sub-area .list-address .adrress.active .option,.top-header .sub-area .list-address .adrress.active .option{opacity:1;visibility:visible}.weather-page .sub-area .list-address .adrress.active .option a,.top-header .sub-area .list-address .adrress.active .option a{display:none}.weather-page .sub-area .list-address .adrress.active .option .default,.top-header .sub-area .list-address .adrress.active .option .default{display:flex}.weather-page .sub-area .list-address .adrress.active:hover a,.top-header .sub-area .list-address .adrress.active:hover a{display:flex}.weather-page .sub-area .list-address .adrress.active:hover .default,.top-header .sub-area .list-address .adrress.active:hover .default{display:none}.weather-page .sub-area .list-address .adrress.active:hover .default-check,.top-header .sub-area .list-address .adrress.active:hover .default-check{background:#757575;color:#fff}.weather-page .sub-area .list-address .adrress.active:hover .default-check svg,.top-header .sub-area .list-address .adrress.active:hover .default-check svg{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.03212 13.9072L3.56056 10.0017C3.28538 9.69214 2.81132 9.66425 2.50174 9.93944C2.19215 10.2146 2.16426 10.6887 2.43945 10.9983L6.43945 15.4983C6.72614 15.8208 7.2252 15.8355 7.53034 15.5303L18.0303 5.03033C18.3232 4.73744 18.3232 4.26256 18.0303 3.96967C17.7374 3.67678 17.2626 3.67678 16.9697 3.96967L7.03212 13.9072Z' fill='white'/%3e%3c/svg%3e\")}.weather-page .sub-area .list-address .adrress.active:hover .default-check svg use,.top-header .sub-area .list-address .adrress.active:hover .default-check svg use{display:none}.weather-page .sub-area .list-address .adrress:hover,.top-header .sub-area .list-address .adrress:hover{background:#EFEFEF}.weather-page .sub-area .list-address .adrress:hover .option,.top-header .sub-area .list-address .adrress:hover .option{opacity:1;visibility:visible}.weather-page .news-area,.top-header .news-area{overflow:hidden}.weather-page .news-area:hover,.top-header .news-area:hover{overflow:visible}.top-header .time-now.weather-day{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.top-header .time-now.weather-day .news-area{padding:0;margin-left:0;margin-top:0}.top-header .time-now.weather-day .news-area>span{position:relative;margin-right:18px}.top-header .time-now.weather-day .news-area>span::after{content:\"\";background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.85408 0.646008C9.80764 0.599445 9.75246 0.562502 9.69172 0.537296C9.63097 0.512089 9.56585 0.499115 9.50008 0.499115C9.43432 0.499115 9.36919 0.512089 9.30845 0.537296C9.2477 0.562502 9.19253 0.599445 9.14608 0.646008L5.00008 4.79301L0.854083 0.646008C0.760197 0.552121 0.632858 0.499376 0.500083 0.499376C0.367308 0.499376 0.239969 0.552121 0.146083 0.646008C0.0521965 0.739895 -0.000548379 0.867232 -0.000548385 1.00001C-0.00054839 1.13278 0.0521965 1.26012 0.146083 1.35401L4.64608 5.85401C4.69253 5.90057 4.7477 5.93751 4.80845 5.96272C4.86919 5.98793 4.93432 6.0009 5.00008 6.0009C5.06585 6.0009 5.13097 5.98793 5.19172 5.96272C5.25246 5.93751 5.30764 5.90057 5.35408 5.85401L9.85408 1.35401C9.90065 1.30756 9.93759 1.25239 9.9628 1.19164C9.988 1.1309 10.001 1.06578 10.001 1.00001C10.001 0.934241 9.988 0.86912 9.9628 0.808375C9.93759 0.74763 9.90065 0.692454 9.85408 0.646008Z' fill='%23757575'/%3e%3c/svg%3e\");width:10px;height:6px;position:absolute;top:6px;right:-16px}.top-header .time-now.weather-day .news-area.active>span::after,.top-header .time-now.weather-day .news-area:hover>span::after{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}.top-header .time-now.weather-day .weather{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:-1px 0 0 7px}.top-header .time-now.weather-day .weather svg{margin-right:3px}.top-header .time-now.weather-day .weather span{margin:-4px 0 0 0}.top-header .search input{width:0;padding:0;border:0}.top-header .search button{position:static;left:22px;top:6px;width:20px;height:20px}.top-header .search button svg{width:20px;height:20px}.top-header .search.active input{padding:0 10px 0 30px;width:180px;border-radius:16px;border:1px solid #E5E5E5}.top-header .search.active button{position:absolute}@media screen and (max-width: 979px){.top-header .news-area{display:none}}@media screen and (max-width: 768px){.top-header .time-now.weather-day{display:none}.top-header .news-area,.top-header .evne{margin-left:15px}}.box-category{width:100%;float:left;margin-bottom:20px}.box-category.has-border{padding-bottom:20px;border-bottom:1px solid #e5e5e5}.box-last{margin-bottom:0}.meta-news{color:#757575;font-size:12px;line-height:14px;font-weight:400 !important;font-family:Arial}.meta-news .time-public{display:inline-block;margin-right:10px}.meta-news .cat{display:inline-block;margin-right:10px}.meta-news .cat:hover{color:#087cce}.meta-news .count_cmt,.meta-news .icon_commend{font-size:12px;color:#076db6;display:inline-block;text-decoration:none !important}.meta-news .count_cmt .ic,.meta-news .icon_commend .ic{fill:#bdbdbd;width:12px;height:12px;margin-right:1px}.meta-news .count_cmt:hover,.meta-news .icon_commend:hover{color:#087cce}.meta-news .count_cmt:hover .ic,.meta-news .icon_commend:hover .ic{fill:#999}.meta-news .icon_commend .ic{margin-right:0}.meta-news .ic-time{vertical-align:top;width:14px;height:14px;margin-right:5px;fill:#bdbdbd}.icon_commend{font-size:12px;color:#076db6;display:inline-block;vertical-align:top;text-decoration:none}.icon_commend .ic{fill:#bdbdbd;width:12px;height:12px;margin-right:0}.icon_commend:hover{color:#087cce}.icon_commend:hover .ic{fill:#999}.location-stamp{color:#757575 !important;font-size:12px;text-transform:uppercase;margin-right:12px;letter-spacing:-0.5px;position:relative}.location-stamp:before{content:\"\";position:absolute;bottom:5px;width:7px;height:1px;background:#757575;right:-8px}.title-news a:hover{color:#087cce}.item-news{width:100%;float:left;padding-bottom:15px;margin-bottom:15px;border-bottom:1px solid #E5E5E5}.item-news .title-news{font-family:\"Merriweather\",serif;font-size:14px;line-height:160%;margin-bottom:4px}.item-news .title-news .meta-news{float:none;display:inline-block;vertical-align:middle;margin-left:8px;font-family:arial}.item-news .thumb-art{width:260px;float:left;margin-right:20px}.item-news.full-thumb .thumb-art{width:100%;margin:0 0 10px 0}.item-news.small-thumb .thumb-art{width:110px;margin-right:10px}.item-news .description{line-height:140%;font-size:14px;color:#4f4f4f}.item-news .description .meta-news{float:none;display:inline-block;vertical-align:middle;margin-left:5px}.title_news svg,.title-news svg{margin:-2px 5px 0 0px}.label_red{color:#9f224e}.section_topstory{padding-top:20px}.article-topstory{width:550px;padding-bottom:0;margin-bottom:0;border:none}.article-topstory .description{clear:both;font-size:14px;line-height:140%}.article-topstory .location-stamp{font-size:12px}.article-topstory .icon_thumb_videophoto{width:32px;height:32px;line-height:32px;bottom:10px;left:10px}.article-topstory .icon_thumb_videophoto .ic{width:18px;height:18px}.article-topstory .title-news{width:100%;float:left;font-size:24px;font-weight:400}.article-topstory.full-thumb .thumb-art{margin:0 0 15px 0}.related_news{margin-top:10px;font-size:12px;line-height:140%}.related_news a{color:#757575;position:relative;font-weight:700;padding-left:10px}.related_news a:before{width:5px;height:5px;background:#bdbdbd;content:\"\";border-radius:50%;position:absolute;top:4px;left:0}.related_news a:hover{color:#087cce}.sub-news-top{width:230px;padding-left:20px;position:relative}.sub-news-top .inner-sub-news-top{position:absolute;height:100%;top:0;left:20px;overflow:hidden}.sub-news-top .scroll-sub-featured{max-height:100%}.list-sub-feature{padding-right:15px}.list-sub-feature li{width:100%;float:left;margin-top:10px;padding-top:10px;border-top:1px solid #e5e5e5}.list-sub-feature li:first-child{margin-top:0;padding-top:0;border-top:none}.list-sub-feature li:last-child{margin-bottom:10px;padding-bottom:25px}.list-sub-feature li .title_news{font-size:14px;line-height:160%;font-family:\"Merriweather\",serif}.list-sub-feature li .title_news:hover{color:#087cce}.col-right-top{width:320px;padding-left:20px}.col-right-top .box-category:last-child{margin-bottom:0}.col-left-top-home-v2{padding-bottom:20px;border-bottom:1px solid #e5e5e5}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .article-topstory{background:none;padding-right:0}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .article-topstory .thumb-art{width:520px}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .article-topstory .title-news{padding-top:0}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .extend-lead a:before{background:linear-gradient(45deg, rgba(247,247,247,0) 0%, #fff 75.52%);background:-webkit-linear-gradient(45deg, rgba(247,247,247,0) 0%, #fff 75.52%)}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature{display:flex;justify-content:space-between;width:100%;margin-left:0;position:relative;padding-right:240px}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature li{display:flex;flex-wrap:wrap;align-items:end;align-content:space-between;width:100%;padding:0;margin-right:20px;position:relative}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature li>.thumb-art{width:100%;margin:0 0 0px 0;order:2}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature li .title_news{order:1;margin-bottom:6px;min-height:50px}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature .item-gocnhin{width:240px;padding:0 0 82px 0;margin-right:0;display:block;position:absolute;right:0;height:100%}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature .item-gocnhin .description{position:relative;z-index:1}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature .item-gocnhin .art-top-gn{position:initial}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature .item-gocnhin .info-author{position:absolute;right:0;bottom:0}@media screen and (max-width: 1129px){.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2{min-height:inherit}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .article-topstory .thumb-art{width:440px}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature .item-gocnhin{background:#F7F7F7;padding:16px;margin-right:0}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature .item-gocnhin .description{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;min-height:inherit}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home-v2 .sub-news-top .list-sub-feature .item-gocnhin .info-author{position:static}}.build-home-topic{border-bottom:1px solid #E5E5E5;background:#FCFAF6;padding:20px 8px 20px 0;display:flex}.build-home-topic::after{content:'';display:table;clear:both}.build-home-topic__left{width:630px;flex-shrink:0}.build-home-topic__left .item-news{border-bottom:0;padding-bottom:0;margin-bottom:0}.build-home-topic__left .item-news .thumb-art{width:400px}.build-home-topic__left .item-news .title-news{font-weight:700;font-size:18px}.build-home-topic__right{width:460px;position:relative}.build-home-topic__right .scroll-height{float:left;width:100%;max-height:240px;overflow-y:scroll;padding-right:8px}.build-home-topic__right .scroll-height::-webkit-scrollbar{width:4px}.build-home-topic__right .scroll-height::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.12);width:4px;border-radius:100px}.build-home-topic__right .item-news{margin-bottom:0;padding-bottom:15px;padding-left:30px;border-bottom:0;position:relative}.build-home-topic__right .item-news .meta-news{display:contents}.build-home-topic__right .item-news::after{display:block;content:\"\";background:#B42652;position:absolute;top:8px;left:13px;width:6px;height:6px;border-radius:50%}.build-home-topic__right .item-news::before{content:\"\";width:1px;background:#e5e5e5;position:absolute;top:10px;bottom:-10px;left:15px}.build-home-topic__right .item-news .thumb-art{width:145px;margin-right:10px;margin-top:4px}.build-home-topic__right .item-news .title-news{font-weight:400;font-size:15px;margin-bottom:0}.build-home-topic__right .item-news:first-child .title-news{font-weight:700}.build-home-topic__right .item-news:last-child{padding-bottom:0}.build-home-topic__right .item-news:last-child::before{display:none}.build-home-topic__right .gradient-layer-top{background:linear-gradient(180deg, rgba(252,250,246,0) 0%, #FCFAF6 100%);transform:rotate(180deg);height:30px;position:absolute;width:100%;top:0;left:0;z-index:1;display:none}.build-home-topic__right .gradient-layer-bottom{background:linear-gradient(180deg, rgba(252,250,246,0) 0%, #FCFAF6 100%);height:30px;position:absolute;width:100%;bottom:0;left:0;z-index:1}.build-home-topic__right .view-more{color:#9F9F9F;font-size:15px;text-decoration-line:underline}.build-home-topic .tag-key{color:#C92A57;text-transform:uppercase;font-size:12px;margin-bottom:5px;display:flex;line-height:18px}.build-home-topic .tag-key .icon{margin-right:5px;height:16px;width:16px;min-width:16px}.build-home-topic .tag-key .icon svg,.build-home-topic .tag-key .icon img{width:16px}.build-home-topic.folder{padding-top:10px;flex-wrap:wrap}.build-home-topic.folder .tag-key{text-transform:inherit;line-height:auto;margin-bottom:10px;padding-left:10px;font-size:14px;font-weight:700;color:#B42652;width:100%}.build-home-topic.folder .build-home-topic__left{width:660px}.build-home-topic.folder .build-home-topic__right{width:432px;width:calc(100% - 660px)}.build-home-topic.folder .build-home-topic__right .item-news{padding-left:40px}.build-home-topic.folder .build-home-topic__right .item-news::before{left:21px}.build-home-topic.folder .build-home-topic__right .item-news::after{left:19px}@media screen and (max-width: 1129px){.build-home-topic__left{width:60% !important}.build-home-topic__left .item-news .thumb-art{width:300px}.build-home-topic__right{width:40% !important}.build-home-topic__right .scroll-height{max-height:200px}}@media screen and (max-width: 768px){.build-home-topic .tag-key{width:100%}.build-home-topic__left{width:50% !important;padding-left:8px}.build-home-topic__left .item-news .thumb-art{width:100%;margin:0 0 10px 0}.build-home-topic__left .item-news .title-news{margin-bottom:0}.build-home-topic__left .item-news .description{display:none}.build-home-topic__right{width:50% !important}.build-home-topic__right .scroll-height{max-height:300px}}.build-home-topic.build-home-topic-v2{border-bottom:none;border:none;padding:0 0 12px 0;flex-wrap:wrap;background:none}.build-home-topic.build-home-topic-v2 .title-box-tp{width:100%;padding:0;margin-bottom:8px}.build-home-topic.build-home-topic-v2 .title-box-tp .txt{font-size:13px;font-weight:700;line-height:normal;color:#B42652}.build-home-topic.build-home-topic-v2 .build-home-topic__right{width:100%}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news{padding-right:0;padding-bottom:8px;padding-left:20px}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news .title-news{font-size:14px;font-weight:700}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news:before{left:5px}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news:after{left:3px}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news:first-child{padding-left:0}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news:first-child .title-news{margin-bottom:5px;font-size:15px}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news:first-child:before,.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news:first-child:after{display:none}.build-home-topic.build-home-topic-v2 .build-home-topic__right .item-news:last-child{padding-bottom:0}.build-home-topic.build-home-topic-v2 .build-home-topic__right .view-more{font-size:14px;color:#757575;text-decoration:none}.has_border{margin-top:20px;padding-top:20px}.has_border:before{width:calc(100% - 30px);background:#e5e5e5;height:1px;position:absolute;top:0;left:15px;content:\"\"}.col-left{padding-right:20px;position:relative}.col-left:after{content:\"\";width:1px;height:100%;background:#e5e5e5;position:absolute;top:0;right:0}@media screen and (max-width: 979px){.col-left::after{display:none}}.col-right{padding-left:20px}.col-small{width:400px}.col-medium{width:700px}.col-center{padding-left:15px;padding-right:15px;position:relative}.col-center:after{content:\"\";width:1px;height:100%;background:#e5e5e5;position:absolute;top:0;right:0}.col-335{width:365px}.item-news-common{border-top:1px solid #e5e5e5;margin-top:15px;padding-top:12px;border-bottom:none;margin-bottom:0;padding-bottom:0}.item-news-common:first-of-type{border-top:none;margin-top:0;padding-top:0}.item-news-common .title-news{font-size:15px;font-weight:700;margin-bottom:4px}.item-news-common .thumb-art{width:145px;margin-right:10px;margin-top:4px}.item-news-common .description{font-size:14px;line-height:140%}.item-news-common p.meta-news{margin-top:10px}.top-header-folder{padding:0;border:none}.top-header-folder .search{width:300px;margin-left:0;padding-left:0}.top-header-folder .search:before{display:none}.text-calendar{font-size:14px;line-height:16px;color:#757575;padding:3px 0 3px 0;cursor:pointer}.text-calendar .ic{fill:#bdbdbd;margin-right:8px;margin-top:-3px}.text-calendar:hover,.text-calendar.active{color:#087cce}.text-calendar:hover .ic,.text-calendar.active .ic{fill:#087cce}.top-folder{align-items:center;padding:20px 0 10px 0}.filter-date-search{margin-left:auto;align-items:center}.top-header-folder .filter-date-search .search input{width:100%}.title-folder{font-family:\"Merriweather\",serif;font-weight:700;color:#4f4f4f !important;font-size:28px;line-height:157%;white-space:nowrap;margin-right:20px;height:52px;flex-shrink:0}.nav-folder{padding-top:20px;align-items:flex-start;border-bottom:1px solid #e5e5e5;flex-wrap:wrap}.nav-folder .ul-nav-folder{width:100%;float:left;max-height:42px;overflow:hidden;width:auto;flex-grow:1;max-width:calc(100% - 170px)}.nav-folder .ul-nav-folder li{float:left;margin-right:20px}.nav-folder .ul-nav-folder li a{display:block;padding:19px 0 18px 0;font-size:14px;line-height:100%;color:#626262;font-weight:700;position:relative}.nav-folder .ul-nav-folder li:hover a{color:#B42652}.nav-folder .ul-nav-folder li.active a{color:#9f224e}.nav-folder .ul-nav-folder li.active a:after{background:#9f224e}.nav-folder .ul-nav-folder li:last-child{margin-right:0}.nav-folder .ul-nav-folder li.has-submn{position:relative}.nav-folder .ul-nav-folder li.has-submn a{position:relative;color:#9F9F9F;font-weight:400;padding-right:13px;display:inline-block}.nav-folder .ul-nav-folder li.has-submn a:before{border:solid #9F9F9F;border-width:0 1px 1px 0;display:inline-block;padding:3px;content:'';position:absolute;top:21px;right:0;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.nav-folder .ul-nav-folder li.has-submn .sub-more{background:#FFFFFF;box-shadow:0px 1px 4px rgba(0,0,0,0.2);width:160px;position:absolute;top:150%;left:0;z-index:2;opacity:0;visibility:hidden;transition-duration:300ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.nav-folder .ul-nav-folder li.has-submn .sub-more li{width:100%;float:left}.nav-folder .ul-nav-folder li.has-submn .sub-more li a{display:block;padding:11px 15px;font-weight:700;color:#626262;line-height:140%}.nav-folder .ul-nav-folder li.has-submn .sub-more li a::before{display:none}.nav-folder .ul-nav-folder li.has-submn .sub-more li.active a{color:#B42652}.nav-folder .ul-nav-folder li.has-submn .sub-more li.active a:after{display:none}.nav-folder .ul-nav-folder li.has-submn .sub-more li:hover a{color:#B42652}.nav-folder .ul-nav-folder li.has-submn:hover .sub-more{opacity:1;visibility:visible;top:100%}@media (max-width: 1129px){.nav-folder .ul-nav-folder{max-width:calc(100% - 184px)}}.nav-folder .ul-nav-folder.ul-subfolder{width:100%;border-top:1px solid #e5e5e5;max-width:100%;overflow:visible}.nav-folder .ul-nav-folder.ul-subfolder li{position:relative}.nav-folder .ul-nav-folder.ul-subfolder li a{font-weight:400;padding:12px 0}.nav-folder .ul-nav-folder.ul-subfolder li.active a{color:#9f224e}.nav-folder .ul-nav-folder.ul-subfolder li.active a:after{display:none}.nav-folder .ul-nav-folder.ul-subfolder li>.sub-2{width:190px;background:#fff;box-shadow:0px 1px 4px 0px rgba(0,0,0,0.2);position:absolute;top:200%;opacity:0;visibility:hidden;left:0;transition-duration:300ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.nav-folder .ul-nav-folder.ul-subfolder li>.sub-2 li{margin:0;width:100%}.nav-folder .ul-nav-folder.ul-subfolder li>.sub-2 li a{display:block;padding:8px 8px 8px 16px;font-size:14px;color:#626262}.nav-folder .ul-nav-folder.ul-subfolder li>.sub-2 li a:hover{color:#9f224e}.nav-folder .ul-nav-folder.ul-subfolder li:hover>.sub-2{opacity:1;visibility:visible;top:102%}@media (max-width: 1129px){.nav-folder .ul-nav-folder.ul-subfolder{max-width:100%}}.section_topstory_folder{padding-top:15px}.col-left-top{width:780px}.wrapper-topstory-folder .article-topstory{width:545px;padding-right:15px}.wrapper-topstory-folder .article-topstory .description{font-size:14px;line-height:140%}.wrapper-topstory-folder .article-topstory p:not(.description),.wrapper-topstory-folder .article-topstory p:not(.meta-news){margin-top:10px;font-size:14px;line-height:140%}.wrapper-topstory-folder .article-topstory .location-stamp{font-size:12px}.wrapper-topstory-folder .article-topstory .title-news{font-size:20px}.wrapper-topstory-folder .sub-news-top{width:235px;padding-left:15px;height:530px}.wrapper-topstory-folder .sub-news-top .inner-sub-news-top{left:15px}.wrapper-topstory-folder .sub-news-top:before{left:15px}.wrapper-topstory-folder .sub-news-top:after{content:\"\";width:1px;height:100%;background:#e5e5e5;position:absolute;top:0;left:0}.wrapper-topstory-folder .list-sub-feature li .title_news{font-size:16px;font-weight:400;font-family:\"Merriweather\",serif}.wrapper-topstory-folder .list-sub-feature li .description{font-size:14px;line-height:140%;margin-top:5px;color:#4f4f4f}.wrapper-topstory-folder .list-sub-feature li p.meta-news{margin-top:5px}.wrapper-topstory-folder.wrapper-topstory-folder-v2{flex-wrap:wrap;flex-direction:column;min-height:530px}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .article-topstory{width:100%;background:#f7f7f7;padding-right:20px}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .article-topstory .thumb-art{width:500px;margin:0 20px 0 0}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .article-topstory .title-news{width:auto;float:none;margin-bottom:10px;padding-top:20px;font-weight:700}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .article-topstory .description{clear:none}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .article-topstory p.meta-news{margin-top:5px}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .related_news{margin-top:15px}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .sub-news-top{margin-top:20px;padding-top:20px;border-top:1px solid #e5e5e5;width:100%;padding-left:0;height:auto}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .sub-news-top:after{display:none}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .sub-news-top .inner-sub-news-top{position:static}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .sub-news-top:before{display:none}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .scroll-sub-featured{width:100%;float:left}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .list-sub-feature{width:calc(100% + 20px);margin-left:-20px;font-size:0;padding-right:0}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .list-sub-feature li{width:33.333333%;float:none;padding-left:20px;display:inline-block;vertical-align:top;margin-top:0;padding-top:0;border-top:none}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .list-sub-feature li .description{margin-top:10px}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .list-sub-feature li .title_news{font-size:15px;font-weight:700}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .list-sub-feature li p.meta-news{margin-top:10px}.wrapper-topstory-folder.wrapper-topstory-folder-v2 .list-sub-feature li:last-child{margin-bottom:0;padding-bottom:0}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home{min-height:inherit}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home .article-topstory .thumb-art{width:520px}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home .article-topstory p.meta-news{margin-top:10px}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home .sub-news-top{padding-top:0;border-top:none}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home .list-sub-feature li{width:32.5%}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home .list-sub-feature li.item-gocnhin{width:35%;padding-left:40px;position:relative}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-home .list-sub-feature li.item-gocnhin:before{width:2px;height:100%;content:\"\";background:#e5e5e5;position:absolute;top:0;left:20px}.wrapper-topstory-folder.wrapper-topstory-folder-v2.wrapper-topstory-subfolder .article-topstory .thumb-art{width:500px}.wrapper-topstory-folder .extend-lead a{position:relative;display:table}.wrapper-topstory-folder .extend-lead a:before{width:100%;height:20px;content:\"\";background:linear-gradient(45deg, rgba(247,247,247,0) 0%, #f7f7f7 75.52%);background:-webkit-linear-gradient(45deg, rgba(247,247,247,0) 0%, #f7f7f7 75.52%);position:absolute;right:0;bottom:0}.col-left-subfolder .wrapper-topstory-folder-v2{height:auto;min-height:inherit}.pagination{align-items:center;margin-top:20px;padding-top:20px;border-top:1px solid #e5e5e5}.pagination .text-calendar{margin-right:0;padding-right:0;border-right:none}.pagination .paging{margin-left:auto}.pagination.pagination-folder{padding-right:430px}.pagination.pagination-subfolder{padding-right:360px}.paging{align-items:center}.paging .select-page{position:relative}.paging .select-page .selected-page{height:40px;border-radius:3px;line-height:40px;font-size:15px;color:#757575;position:relative;display:inline-block}.paging .select-page .box-open-select{width:100%;position:absolute;bottom:35px;left:0;background:#fff;height:215px;overflow:hidden;visibility:hidden;opacity:0;transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1);border:1px solid #e5e5e5;box-shadow:0px 2px 8px rgba(0,0,0,0.1);border-radius:3px}.paging .select-page .box-open-select .page-s{display:block;font-size:15px;padding:10px 15px}.paging .select-page .box-open-select .page-s:hover{background:#f7f7f7}.paging .select-page.active .box-open-select{bottom:45px;opacity:1;visibility:visible}.paging .select-page.active .selected-page{background:#f7f7f7}.paging .button-page{margin-left:20px;align-items:center}.paging .button-page .btn-page{width:40px;height:40px;text-align:center;line-height:36px;border:1px solid #e5e5e5;border-radius:3px;float:left;position:relative;margin-left:10px;color:#757575}.paging .button-page .btn-page .ic{fill:#4f4f4f;width:10px;height:10px}.paging .button-page .btn-page:hover{background:#f7f7f7}.paging .button-page .btn-page.active{border:1px solid #9f224e;background:#9f224e;color:#fff}.paging .button-page .btn-page.disable{background:#f7f7f7;border:1px solid #f7f7f7}.paging .button-page .btn-page.disable .ic{fill:#bdbdbd}.paging .button-page .btn-page.type_page{-moz-appearance:none;-webkit-appearance:none;padding:0;margin:0 5px;text-align:center;font-size:15px;font-weight:700;color:#222;min-width:40px !important;max-width:99.99% !important;transition:width 0.25s}.paging .button-page .btn-page.type_page:focus{border:1px solid #757575}.filter-date-search .pagination{margin-top:0;padding-top:0;border-top:none;position:relative;margin-right:15px;padding-right:15px}.filter-date-search .pagination:after{content:\"\";width:1px;height:22px;background:#e5e5e5;position:absolute;top:9px;right:0}.col-left-subfolder{width:780px;padding-right:20px;border-right:none}.col-left-subfolder .wrapper-topstory-folder{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #e5e5e5}.col-left-subfolder .wrapper-topstory-folder.no-border{padding-bottom:0;border-bottom:0}.col-right-subfolder{width:320px;padding-left:20px}.list-news-subfolder .item-news-common{padding-top:20px;margin-top:20px}.list-news-subfolder .item-news-common .title-news{margin-bottom:5px;font-size:18px;font-weight:bold}.list-news-subfolder .item-news-common .thumb-art{width:220px;margin-right:0;float:right;margin-left:40px}.list-news-subfolder .item-news-common .description{font-size:14px;line-height:140%;color:#4f4f4f !important}.list-news-subfolder .item-news-common.off-thumb .title-news,.list-news-subfolder .item-news-common.off-thumb .description{max-width:600px}.list-news-subfolder .item-news-common:first-of-type{margin-top:0;padding-top:0}.list-news-subfolder .item-news-common.thumb-left{padding-right:20px}.list-news-subfolder .item-news-common.thumb-left .thumb-art{float:left;width:240px;margin:0 20px 0 0}.col-left-new{width:780px;padding-right:20px}@media screen and (max-width: 979px){.col-left-new{width:100%;padding-right:0}}.col-right-new{padding-left:20px;width:320px}@media screen and (max-width: 979px){.col-right-new{display:none;width:100%;padding-left:0}}.block-grid-news{display:-ms-grid;display:grid;column-gap:20px;row-gap:20px;width:100%}.block-grid-news.grid__3{grid-template-columns:repeat(3, 1fr)}.block-grid-news .article-item .thumb-art{width:100%}.block-grid-news .article-item .thumb{margin-bottom:8px}.block-grid-news .article-item .title-news{font:bold 15px/1.6 \"Merriweather\",serif}.col-left-border{padding-right:20px;position:relative}.col-left-border:after{content:\"\";width:1px;height:100%;background:#e5e5e5;position:absolute;top:0;right:0}.wrapper-topstory-folder .sub-news-top-photo{height:auto}.wrapper-topstory-folder .sub-news-top-photo:before{display:none}.sub-news-top-photo .item-news:last-of-type{margin-bottom:0;padding-bottom:0;border-bottom:none}.list-news-folder-photo{font-size:0}.list-news-folder-photo .item-news{display:inline-block;vertical-align:top;border-bottom:none;padding-bottom:0;width:50%;float:none;margin-bottom:20px}.list-news-folder-photo .item-news:nth-child(even){padding-left:10px}.list-news-folder-photo .item-news:nth-child(odd){padding-right:10px}.list-news-folder-photo .item-news:nth-last-of-type(-n+2){margin-bottom:0}.list-news-folder-photo .item-news .title-news{font-size:15px;font-weight:700;line-height:160%}.list-news-folder-photo .item-news .icon_thumb_videophoto{width:28px;height:28px;line-height:28px}.top-header-folder-dateview .top-folder{padding-bottom:15px;border-bottom:1px solid #e5e5e5}.select-cate-date .text-calendar{margin-right:0;padding-right:0;border-right:none}.select-cate-date .cate-select{align-items:center;color:#4f4f4f;font-size:14px;margin-right:20px}.select-cate-date .cate-select span{padding-right:10px}.select-cate-date .option-cate{width:190px;font-size:14px;color:#4f4f4f;cursor:pointer}.select-cate-date .filter-date-search{margin-left:inherit}img:not([src]):not([srcset]){visibility:hidden}.tip{position:absolute;top:-30px;left:50%;transform:translateX(-50%);height:24px;line-height:24px;background:#17191a;color:#fff !important;font-size:12px !important;text-decoration:none !important;white-space:nowrap;padding:0 10px;border-radius:3px}.social_pin{width:65px;padding-top:150px;position:sticky;position:-webkit-sticky;top:0;left:0;height:100%;padding-bottom:20px;opacity:1;visibility:visible;z-index:1;transition-duration:250ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.social_pin.social_pin_folder{padding-top:0;width:70px;padding-left:38px;top:70px}.social_pin .social_left li{margin-top:10px;width:32px}.social_pin .social_left li a{width:32px;height:32px;align-items:center;border-radius:50%;background:#fff;justify-content:center;position:relative;border:1px solid #e5e5e5}.social_pin .social_left li a .ic{fill:#93908a;align-self:center}.social_pin .social_left li a:hover .ic{fill:#fff}.social_pin .social_left li a.social_fb:hover{background:#3b5999;border:1px solid #3b5999}.social_pin .social_left li a.social_zalo:hover{background:#02A8FE;border:1px solid #02A8FE}.social_pin .social_left li a.social_zalo:hover svg{fill:#fff}.social_pin .social_left li a.social_twit:hover{background:#55acee;border:1px solid #55acee}.social_pin .social_left li a.social_in:hover{background:#0A66C2;border:1px solid #0A66C2}.social_pin .social_left li a.social_save:hover{background:#087cce;border:1px solid #087cce}.social_pin .social_left li a.social_save.active{background:#076db6;border:1px solid #076db6}.social_pin .social_left li a.social_save.active .ic{fill:#fff}.social_pin .social_left li a.social_comment:hover{background:#b52759;border:1px solid #b52759}.social_pin .social_left li a .number_cmt{font-size:12px;color:#757575;position:absolute;bottom:-20px;left:50%;transform:translateX(-50%)}.social_pin .social_left li a.social_back{overflow:hidden}.social_pin .social_left li a.social_back .ic{transform:rotate(180deg)}.social_pin .social_left li a.social_back .tip{left:20px;transform:none;top:0;opacity:0;transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1);visibility:hidden}.social_pin .social_left li a.social_back:hover{background:#087cce;border:1px solid #087cce;overflow:visible}.social_pin .social_left li a.social_back:hover .tip{opacity:1;top:-15px;visibility:visible}.social_pin .social_left li.border{padding-top:10px;position:relative}.social_pin .social_left li.border:before{content:\"\";width:23px;height:1px;background:#e0e0e0;position:absolute;top:0;left:5px}.social_pin .social_left li.li_comment{padding-bottom:20px}.social_pin .social_left li:first-child{margin-top:0}.social_pin.hide_pin{opacity:0;visibility:hidden}.breadcrumb{float:left}.breadcrumb li{position:relative;display:inline-block;line-height:16px;font-size:14px;color:#757575;margin-right:25px}.breadcrumb li a{display:inline-block}.breadcrumb li:after{content:\"\";width:7px;height:7px;border-top:1px solid #bdbdbd;border-right:1px solid #bdbdbd;transform:rotate(45deg);position:absolute;left:-19px;top:5px}.breadcrumb li:first-child{color:#076db6}.breadcrumb li:first-child:after{content:none}.box-gocnhin{padding-bottom:15px !important;margin-bottom:15px}.box-gocnhin .item-news .description{font-size:14px;line-height:140%}.box-gocnhin .title-news{font-size:15px;font-weight:700}.box-gocnhin .meta-news{font-size:14px;line-height:16px;color:#4f4f4f}.art-top-gn{width:400px;padding-bottom:0;margin-bottom:0;border-bottom:none;padding-right:20px}.info-author{align-items:flex-end;margin-top:5px}.info-author .meta-news .cat{font-family:\"Merriweather\",serif;font-size:14px;color:#757575;font-style:italic;line-height:140%;margin-right:0}.info-author .meta-news .cat:hover{color:#087cce}.sub-art-gn{width:265px;padding-left:20px;border-left:1px solid #e5e5e5}.sub-art-gn .info-author{margin-top:0}.sub-art-gn .item-news{padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #e5e5e5}.sub-art-gn .item-news:last-of-type{padding-bottom:0;margin-bottom:0;border-bottom:none}.sub-art-gn .title-news{margin-bottom:0}.thumb-author-gn.thumb-art{width:90px;margin-left:15px;margin-right:0;margin-bottom:0;float:right}.thumb-author-gn.thumb-art .thumb{border-radius:50%}.item-gocnhin .title-link-gn{font-size:14px;line-height:16px;color:#9f224e;font-weight:bold;margin-bottom:5px;width:100%;float:left;margin-top:4px}.item-gocnhin .art-top-gn{width:100%;padding-right:0;position:relative}.item-gocnhin .art-top-gn .title-news{font-size:15px;font-weight:700;margin-bottom:0}.item-gocnhin .art-top-gn .description{min-height:57px;margin-top:5px !important}.item-gocnhin .info-author{margin-top:3px;display:flex;justify-content:space-between;align-items:center}.item-gocnhin .thumb-author-gn.thumb-art{width:72px;margin-left:0}.item-gocnhin p.meta-news{width:calc(100% - 72px);padding-right:15px;margin-top:0 !important}.item-gocnhin p.meta-news .count_cmt{margin-top:8px}.box-list-live{width:425px;background:#ffffff;border:1px solid #efefef;box-sizing:border-box;box-shadow:0px 0px 10px rgba(0,0,0,0.1);position:absolute;top:65px;left:-60px;z-index:1000;padding:20px;opacity:0;visibility:hidden;transition-duration:200ms;transition-property:all;transition-timing-function:cubic-bezier(0.7, 1, 0.7, 1)}.box-list-live:before{border:solid #efefef;border-width:0 1px 1px 0;display:inline-block;padding:7px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);background:#fff;content:\"\";position:absolute;top:-9px;left:85px}.box-list-live .item-news .thumb-art{float:right;margin:0 0 0 10px;width:140px}.box-list-live .item-news .title-news{color:#222;font-size:15px;font-weight:bold}.box-list-live .item-news .ic-live:before{top:5px}.box-list-live .item-news .ic-live.ic-live-title{font-size:12px;font-family:arial;text-transform:uppercase;color:#ed1b24 !important;font-weight:400;margin-top:1px}.box-list-live .more-live{font-size:16px;color:#222;height:40px;line-height:40px;text-align:center;width:100%;display:block;background:#f7f7f7;border-radius:3px;float:left}.open-live .box-list-live{opacity:1;top:45px;visibility:visible}.meta-live{margin-bottom:5px}.meta-live .label-time-live{font-size:12px;line-height:100%;background:rgba(91,192,222,0.3);border-radius:3px;display:inline-block;padding:5px}.meta-live .label-time-live.no-bg{font-size:14px;color:#757575;padding-left:0;padding-right:0;background:none}.top-folder-live{border-bottom:1px solid #e5e5e5}.top-folder-live .title-folder{font-size:24px;color:#222}.list-news-subfolder-live{padding-left:26px;position:relative}.list-news-subfolder-live:before{width:1px;height:100%;background:#e5e5e5;content:\"\";position:absolute;top:0;left:0}.list-news-subfolder-live .item-news{padding-top:0;margin-top:35px;border-top:none;position:relative}.list-news-subfolder-live .item-news .meta-live{margin-bottom:10px}.list-news-subfolder-live .item-news .title-news{font-weight:bold;font-size:18px;margin-bottom:10px}.list-news-subfolder-live .item-news .description{font-size:16px;line-height:150%}.list-news-subfolder-live .item-news:before{content:\"\";width:9px;height:9px;background:#9f224e;border-radius:50%;position:absolute;top:6px;left:-30px;z-index:1}.list-news-subfolder-live .item-news:after{content:\"\";width:1px;height:26px;background:#fff;position:absolute;top:-3px;left:-26px;z-index:0}.list-news-subfolder-live .ic-live{font-size:14px;font-family:arial;text-transform:uppercase;color:#ed1b24 !important;font-weight:400;font-style:normal}.list-news-subfolder-live .ic-live:before{background:#ed1b24;top:4px}.list-news-subfolder-live .ic-live:after{display:none}.box-placeholder{font-size:0;line-height:0}.box-placeholder .text{display:inline-block;background-color:#444;height:12px;border-radius:100px;margin:5px 0;min-width:100px;opacity:.1;animation:fading 1.5s infinite}.box-placeholder .text:first-child{margin-top:0}.box-placeholder .text:last-child{margin-bottom:0}.box-placeholder .text.link{background-color:var(--blue);opacity:.4}.box-placeholder .text.line{width:100%}.box-placeholder .text.category{width:100px;margin-bottom:10px}.box-placeholder h4.text{height:20px;margin:3px 0;opacity:.2}.box-placeholder .title-news .text{margin:0}.box-placeholder.item-news-common .title-news+.thumb-art+.text{width:calc(100% - 100px)}.box-placeholder.item-news-common .title-news+.thumb-art+.text+.text{width:calc(100% - 130px);clear:both}.box-placeholder.item-news-common .title-news+.text{width:100%}.box-placeholder.item-news-common .title-news+.text+.text{width:calc(100% - 30px);clear:both}.box-placeholder .title-box-category .text{height:20px}.box-placeholder.box-gocnhin .title-news .text{height:17px;width:calc(100% - 105px)}.box-placeholder.box-gocnhin .title-news+.text{width:calc(100% - 140px)}.box-placeholder.box-slide-topic{padding:0}.box-placeholder.box-slide-topic .text{height:25px;border-radius:100px;margin-top:11px}.section_video .box-placeholder .text.thumb-video{border-radius:0;margin-bottom:0}.section_video .box-placeholder .title-news{line-height:100%}.section_video .box-placeholder .title-news .text{height:17px}.section_video .box-placeholder .box-scroll-video .thumb-art+.text{width:calc(100% - 130px)}.section_video .box-placeholder .box-scroll-video .thumb-art+.text+.text{width:calc(100% - 160px);clear:both}.box-cate-featured-vertical.box-placeholder .sub-news-cate .thumb-art+.text{width:calc(100% - 86px)}.box-cate-featured-vertical.box-placeholder .sub-news-cate .thumb-art+.text+.text{width:calc(100% - 116px);clear:both}.box-placeholder .wrap-slide-photo .text{height:503px;border-radius:0;background-color:#aaa}.box-ebank-qt .box-placeholder .wrap-slide-bank-qt .text{height:140px;border-radius:0;background-color:#aaa}.box-news-other-site .box-placeholder .title-news{line-height:120%}.box-news-other-site .box-placeholder .title-news .text{width:calc(100% - 280px);height:17px}.box-news-other-site .box-placeholder .title-news .text+.text{width:20%;height:17px}.box-news-other-site .box-placeholder .title-news+.text{width:calc(100% - 280px);clear:both;margin-top:10px}.box-placeholder.box-info-company .wrap-slide-business .text{height:210px;border-radius:0;background-color:#aaa}.box-placeholder.box-shop-sell .wrap-slide-business .text{height:100px;border-radius:0;background-color:#aaa}.box-placeholder.box-shop-sell-vertical .wrap-slide-business .text{height:445px;border-radius:0;background-color:#aaa}.box-placeholder.box-wiki-kidlab .wrap-slide-business .text{height:212px}.list-news-subfolder .box-placeholder .title-news{line-height:130%}.list-news-subfolder .box-placeholder .title-news .text{width:calc(100% - 260px);height:15px}.list-news-subfolder .box-placeholder .title-news .text+.text{width:100px;height:15px}.list-news-subfolder .box-placeholder .title-news+.text{width:calc(100% - 260px)}.list-news-subfolder .box-placeholder .title-news+.text+.text{width:calc(100% - 260px);clear:both}.list-news-subfolder .box-placeholder .title-news+.text+.text+.text{width:100px}.box-news-banner.box-placeholder .content-box-category .text.line{height:56px;border-radius:0}.block-item.box-placeholder .title-block-live{margin-top:20px}.block-item.box-placeholder .title-block-live .text{height:20px}.block-item.box-placeholder .title-block-live .text+.text{width:80%}.block-item.box-placeholder .header-block+.text+.text{width:80%;clear:both}.block-item.box-placeholder .header-block+.text+.text+.text{width:60%;clear:both}.block-item.box-placeholder .header-block+.text+.text+.text+.text{width:40%;clear:both;margin-right:60%}.block-item.box-placeholder .header-block+.text+.text+.text+.text+.text{width:10%;clear:both}.block-item.box-placeholder .social-block{margin-top:25px}.block-item.box-placeholder .social-block .text{height:20px}.ds-dienbien .box-placeholder .text{height:17px}.ds-dienbien .box-placeholder .text+.text{height:12px}.banner-ads.box-placeholder .text{border-radius:10px;margin:0}.banner-ads.box-placeholder.banner-height-250 .text{height:250px}.banner-ads.box-placeholder.banner-height-500 .text{height:500px}.banner-ads.box-placeholder.banner-height-600 .text{height:600px}.banner-ads.box-placeholder.banner-height-90 .text{height:90px}.slide-table-tt.box-placeholder .text{height:134px;border-radius:0}.box-placeholder .colbox-left .title-news{line-height:29px;margin-bottom:10px}.box-placeholder .colbox-left .title-news .text{height:20px}.box-placeholder .colbox-right .title-news .text.line{width:calc(100% - 115px)}.box-placeholder.box-cate-featured-v2 .sub-news-cate .item-news:before{display:none}@keyframes fading{0%{opacity:.1}50%{opacity:.2}100%{opacity:.1}}\n" }} /><link rel="preload" href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/general-file.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
        <noscript>&lt;link rel="stylesheet" href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/general-file.css" crossorigin="anonymous"&gt;</noscript>
        <link rel="stylesheet" href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/podcast/audio-style-pc.css" media="all" />
        <link rel="stylesheet" href="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/podcast.css" media="all" />
        <style className="webfont" data-cache-name="Merriweather" data-cache-file-woff2="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/webfonts/Merriweather-woff2.css" data-cache-hash-woff2="fc2b038bec1f4b4d7dd2f8019a57a7ad" data-cache-file-woff="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/webfonts/Merriweather-woff.css" data-cache-hash-woff="cee538b68f8fa3400618e4a4f363a223" data-cache-file-ttf="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/webfonts/Merriweather-ttf.css" data-cache-hash-ttf="23fc73084560a7f6cc4057edce36ccd5" dangerouslySetInnerHTML={{__html: "" }} />
        {/* VIDEO VOD SCRIPT */}
        {/* END VIDEO VOD SCRIPT */}
        <meta name="facebook-domain-verification" content="wvm97b5u7iqh99xtqcj81z0955s2ha" />
        <div id="_ads_bg_top" className="lazier" /><section id="supper_masthead" className="section section-ads-top banner-ads banner-top-home" />
        <header className="section top-header" data-campaign="Header">
          <div className="container ">
            <a href="javascript:;" className="all-menu all-menu-tablet"><span className="hamburger" /></a>
            <a href="/" data-medium="Logo" className="logo" title="Báo VnExpress - Báo tiếng Việt nhiều người xem nhất" onclick="trackingLogoHome('logo-header', this.href)">
              <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/v2_2019/pc/graphics/logo.svg" alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
            </a>
            <span className="time-now">Thứ sáu, 29/11/2024</span>
            <div className="right">
              {/*<div id="_topLive" class=""></div>*/}
              <a href="/tin-tuc-24h" className="btn24hqua " title="Mới nhất" data-campaign="menu-MoiNhat" data-medium="Item-MoiNhat">
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
                  <li><a href="https://vnexpress.net/topic/ha-noi-26482" title="Hà Nội" data-medium="Item-TinKhuVuc_HaNoi">Hà Nội</a></li><li><a href="https://vnexpress.net/topic/tp-ho-chi-minh-26483" title="TP Hồ Chí Minh" data-medium="Item-TinKhuVuc_TPHoChiMinh">TP Hồ Chí Minh</a></li>	</ul>
              </div>
              <a href="https://e.vnexpress.net/" className="evne" title="VnExpress International" data-campaign="menu-English" data-medium="Item-English"><svg className="ic ic-evne"><use xlinkHref="#letter-E" /></svg>International</a>
              <form className="search search-vne" action="https://timkiem.vnexpress.net" id="formSearchHeader">
                <input id="keywordHeader" type="text" name="q" placeholder="Tìm kiếm" autoComplete="off" />
                <button type="submit" title="Tìm kiếm" className="btn-search-vne" id="buttonSearchHeader"><svg className="ic ic-search"><use xlinkHref="#Search" /></svg></button>
              </form>
              <a href="/myvne" title className="menu-myvn" data-medium="Logo-myvne">
                <img src="https://s1.vnecdn.net/vnexpress/restruct/c/v3086/v2_2019/pc/images/graphics/menu-myvne.svg" alt="" />
              </a>
              <div id="myvne_taskbar" />
            </div>
          </div>
        </header><section className="section wrap-main-nav" id="wrap-main-nav" data-campaign="Header">
          <nav className="main-nav">
            <ul className="parent">
              <li className="home">
                <a href="/" className="flexbox" title="Trang chủ" data-medium="Menu-Home" onclick="trackingLogoHome('logo-header-menu', this.href)">
                  <svg className="ic ic-home"><use xlinkHref="#Home" /></svg>
                  <svg className="ic ic-evne"><use xlinkHref="#letter-E" /></svg>
                </a>
              </li>
              <li className="newlest"><a data-medium="Menu-MoiNhat" href="/tin-tuc-24h" title="Mới nhất">Mới nhất</a></li>
              <li className="thoisu" data-id={1001005}>
                <a title="Thời sự" href="/thoi-su" data-medium="Menu-ThoiSu">
                  Thời sự </a>
              </li>
              <li className="gocnhin" data-id={1003450}>
                <a title="Góc nhìn" href="/goc-nhin" data-medium="Menu-GocNhin">
                  Góc nhìn </a>
              </li>
              <li className="thegioi" data-id={1001002}>
                <a title="Thế giới" href="/the-gioi" data-medium="Menu-TheGioi">
                  Thế giới </a>
              </li>
              <li className="video" data-id={1003834}>
                <a title="Video" href="https://video.vnexpress.net" data-medium="Menu-Video">
                  Video </a>
              </li>
              <li className="podcasts active" data-id={1004685}>
                <a title="Podcasts" href="/podcast" data-medium="Menu-Podcasts">
                  Podcasts </a>
              </li>
              <li className="kinhdoanh" data-id={1003159}>
                <a title="Kinh doanh" href="/kinh-doanh" data-medium="Menu-KinhDoanh">
                  Kinh doanh </a>
              </li>
              <li className="batdongsan" data-id={1005628}>
                <a title="Bất động sản" href="/bat-dong-san" data-medium="Menu-BatDongSan">
                  Bất động sản </a>
              </li>
              <li className="khoahoc" data-id={1001009}>
                <a title="Khoa học" href="/khoa-hoc" data-medium="Menu-KhoaHoc">
                  Khoa học </a>
              </li>
              <li className="giaitri" data-id={1002691}>
                <a title="Giải trí" href="/giai-tri" data-medium="Menu-GiaiTri">
                  Giải trí </a>
              </li>
              <li className="thethao" data-id={1002565}>
                <a title="Thể thao" href="/the-thao" data-medium="Menu-TheThao">
                  Thể thao </a>
              </li>
              <li className="phapluat" data-id={1001007}>
                <a title="Pháp luật" href="/phap-luat" data-medium="Menu-PhapLuat">
                  Pháp luật </a>
              </li>
              <li className="giaoduc" data-id={1003497}>
                <a title="Giáo dục" href="/giao-duc" data-medium="Menu-GiaoDuc">
                  Giáo dục </a>
              </li>
              <li className="suckhoe" data-id={1003750}>
                <a title="Sức khỏe" href="/suc-khoe" data-medium="Menu-SucKhoe">
                  Sức khỏe </a>
              </li>
              <li className="doisong" data-id={1002966}>
                <a title="Đời sống" href="/doi-song" data-medium="Menu-DoiSong">
                  Đời sống </a>
              </li>
              <li className="dulich" data-id={1003231}>
                <a title="Du lịch" href="/du-lich" data-medium="Menu-DuLich">
                  Du lịch </a>
              </li>
              <li className="sohoa" data-id={1002592}>
                <a title="Số hóa" href="/so-hoa" data-medium="Menu-SoHoa">
                  Số hóa </a>
              </li>
              <li className="xe" data-id={1001006}>
                <a title="Xe" href="/oto-xe-may" data-medium="Menu-Xe">
                  Xe </a>
              </li>
              <li className="ykien" data-id={1001012}>
                <a title="Ý kiến" href="/y-kien" data-medium="Menu-YKien">
                  Ý kiến </a>
              </li>
              <li className="tamsu" data-id={1001014}>
                <a title="Tâm sự" href="/tam-su" data-medium="Menu-TamSu">
                  Tâm sự </a>
              </li>
              <li className="all-menu has_transition"><a href="javascript:;">Tất cả <span className="hamburger" /></a></li>
            </ul>
          </nav>
          <section className="wrap-all-menu" />
        </section>
        <section className="section" />
        {/*end header*/}
        {/*main_menu menu PC*/}
        <section className="section center" id="sync_bgu_and_masthead" style={{display: 'none'}}>
          <div id="sis_bgu" />
        </section>
        {/* CONTENT  */}
        <style dangerouslySetInnerHTML={{__html: ".nav-folder .ul-nav-folder{max-width:calc(100% - 145px)}.nav-folder .ul-nav-folder li{margin-right:7px}" }} />
        <section className="section top-header top-header-folder ">
          <div className="container">
            <nav className="width_common flexbox nav-folder" style={{flexWrap: 'nowrap'}}>
              <div className="title-folder">
                <h1><a href="/podcast" title="Podcasts">Podcasts</a></h1> </div>
              <ul className="ul-nav-folder" data-campaign="Header">
                <li><a data-medium="Menu-VnexpressHomNay" href="https://vnexpress.net/podcast/vnexpress-hom-nay" title="VnExpress hôm nay">VnExpress hôm nay</a></li>
                <li><a data-medium="Menu-HoSoToiAc" href="https://vnexpress.net/podcast/ho-so-toi-ac" title="Hồ sơ tội ác">Hồ sơ tội ác</a></li>
                <li><a data-medium="Menu-GiaiMa" href="https://vnexpress.net/podcast/giai-ma" title="Giải mã">Giải mã</a></li>
                <li><a data-medium="Menu-HopDen" href="https://vnexpress.net/podcast/hop-den" title="Hộp đen">Hộp đen</a></li>
                <li><a data-medium="Menu-TaiChinhCaNhan" href="https://vnexpress.net/podcast/tai-chinh-ca-nhan" title="Tài chính cá nhân">Tài chính cá nhân</a></li>
                <li><a data-medium="Menu-BanOnKhong" href="https://vnexpress.net/podcast/ban-on-khong" title="Bạn ổn không?">Bạn ổn không?</a></li>
                <li><a data-medium="Menu-DiemTin" href="https://vnexpress.net/podcast/diem-tin" title="Điểm tin">Điểm tin</a></li>
                <li><a data-medium="Menu-NgheTuongLai" href="https://vnexpress.net/podcast/nghe-tuong-lai" title="Nghề Tương Lai">Nghề Tương Lai</a></li>
                <li><a data-medium="Menu-ThamThi" href="https://vnexpress.net/podcast/tham-thi" title="Thầm thì">Thầm thì</a></li>
                <li><a data-medium="Menu-TamDiemKinhTe" href="https://vnexpress.net/podcast/tam-diem-kinh-te" title="Tâm điểm kinh tế">Tâm điểm kinh tế</a></li>
                <li><a data-medium="Menu-ToiKe" href="https://vnexpress.net/podcast/toi-ke" title="Tôi kể">Tôi kể</a></li>
                <li><a data-medium="Menu-TienLamGi" href="https://vnexpress.net/podcast/tien-lam-gi" title="Tiền làm gì?">Tiền làm gì?</a></li>
                <li><a data-medium="Menu-HoNoiGi" href="https://vnexpress.net/podcast/ho-noi-gi" title="Họ nói gì?">Họ nói gì?</a></li>
                <li><a data-medium="Menu-LyHon" href="https://vnexpress.net/podcast/ly-hon" title="Ly hôn">Ly hôn</a></li>
                <li><a data-medium="Menu-NguoiTienPhong" href="https://vnexpress.net/podcast/nguoi-tien-phong" title="Người tiên phong">Người tiên phong</a></li>
                <li><a data-medium="Menu-KeHoachLacQuan" href="https://vnexpress.net/podcast/ke-hoach-lac-quan" title="Kế hoạch lạc quan">Kế hoạch lạc quan</a></li>
                <li><a data-medium="Menu-ToiTrongGuong" href="https://vnexpress.net/podcast/toi-trong-guong" title="Tôi trong gương">Tôi trong gương</a></li>
                <li><a data-medium="Menu-ChuyenDiLam" href="https://vnexpress.net/podcast/chuyen-di-lam" title="Chuyện đi làm">Chuyện đi làm</a></li>
                <li><a data-medium="Menu-UpMo18" href="https://vnexpress.net/podcast/up-mo-18" title="Úp mở 18+">Úp mở 18+</a></li>
                <li><a data-medium="Menu-NguyCo" href="https://vnexpress.net/podcast/nguy-co" title="Nguy - Cơ">Nguy - Cơ</a></li>
              </ul>
            </nav>
          </div>
        </section><section className="section podcast-new-v2">
          <div className="container">
            <div id="box_podcast_topnews" data-campaign="Stream">
              <div className="grid grid__2 buid-top line-bottom">
                <article className="item-news news-point">
                  <div className="thumb-art">
                    <a href="https://vnexpress.net/diem-tin-6h-5-thach-thuc-voi-tan-bo-truong-giao-thong-van-tai-israel-lan-dau-khong-kich-hezbollah-sau-lenh-ngung-ban-4821693.html" title="Điểm tin 6h: 5 thách thức với tân Bộ trưởng Giao thông Vận tải | Israel lần đầu không kích Hezbollah sau lệnh ngừng bắn" className="thumb thumb-1x1" data-medium="Item-1" data-thumb={1}>
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/29/95cf46baeef454aa0de51732783523-8599-3491-1732834696.jpg?w=180&h=180&q=100&dpr=1&fit=crop&s=w8BwEIuAbeAJwiZodNlo6g 1x, https://i1-vnexpress.vnecdn.net/2024/11/29/95cf46baeef454aa0de51732783523-8599-3491-1732834696.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=2ZmvJVX0sqJ0zKyHf8w7ig 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img itemProp="contentUrl" style={{transform: 'translateX(-50%)', left: '50%'}} loading="lazy" intrinsicsize="180x180" alt="Điểm tin 6h: 5 thách thức với tân Bộ trưởng Giao thông Vận tải | Israel lần đầu không kích Hezbollah sau lệnh ngừng bắn" className="lazy" src="https://i1-vnexpress.vnecdn.net/2024/11/29/95cf46baeef454aa0de51732783523-8599-3491-1732834696.jpg?w=180&h=180&q=100&dpr=1&fit=crop&s=w8BwEIuAbeAJwiZodNlo6g" />
                      </picture> </a>
                  </div>
                  <h3 className="title-news">
                    <a href="https://vnexpress.net/diem-tin-6h-5-thach-thuc-voi-tan-bo-truong-giao-thong-van-tai-israel-lan-dau-khong-kich-hezbollah-sau-lenh-ngung-ban-4821693.html" title="Điểm tin 6h: 5 thách thức với tân Bộ trưởng Giao thông Vận tải | Israel lần đầu không kích Hezbollah sau lệnh ngừng bắn" data-medium="Item-1" data-thumb={1}>Điểm tin 6h: 5 thách thức với tân Bộ trưởng Giao thông Vận tải | Israel lần đầu không kích Hezbollah sau lệnh ngừng bắn</a>
                  </h3>
                  <p className="description">
                    <a href="https://vnexpress.net/diem-tin-6h-5-thach-thuc-voi-tan-bo-truong-giao-thong-van-tai-israel-lan-dau-khong-kich-hezbollah-sau-lenh-ngung-ban-4821693.html" title="Điểm tin 6h: 5 thách thức với tân Bộ trưởng Giao thông Vận tải | Israel lần đầu không kích Hezbollah sau lệnh ngừng bắn" data-medium="Item-1" data-thumb={1}>
                      6 điểm mới nổi bật trong Luật BHYT sửa đổi; Cảnh sát đu dây trên vách núi cao 200 m đưa thi thể dưới vực lên...
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <span className="time-public"><span className="time-ago" dateTime="2024-11-29 06:00:00">2h trước</span></span>
                      <a className="cat" href="https://vnexpress.net/podcast/diem-tin" title="Điểm tin" data-medium="Menu-DiemTin">
                        Điểm tin
                      </a>
                      <a className="count_cmt" href="https://vnexpress.net/diem-tin-6h-5-thach-thuc-voi-tan-bo-truong-giao-thong-van-tai-israel-lan-dau-khong-kich-hezbollah-sau-lenh-ngung-ban-4821693.html#box_comment_vne" style={{whiteSpace: 'nowrap', display: 'none'}}>
                        <svg className="ic ic-comment"><use xlinkHref="#Comment-Reg" /></svg>
                        <span className="txt_num_comment font_icon" data-type="comment" data-objecttype={9} data-objectid={4821693} />
                      </a>
                    </p>
                    <a href="https://vnexpress.net/diem-tin-6h-5-thach-thuc-voi-tan-bo-truong-giao-thong-van-tai-israel-lan-dau-khong-kich-hezbollah-sau-lenh-ngung-ban-4821693.html" title="Điểm tin 6h: 5 thách thức với tân Bộ trưởng Giao thông Vận tải | Israel lần đầu không kích Hezbollah sau lệnh ngừng bắn" data-medium="Item-1" data-thumb={1} className="timer">
                      <span>7 phút</span>
                      <span className="icon"><svg className="ic"><use xlinkHref="#play-1" /></svg></span>
                    </a>
                  </div>
                </article>
                <article className="item-news ">
                  <div className="thumb-art">
                    <a href="https://vnexpress.net/thoa-thuan-ngung-ban-cua-lebanon-co-pha-vo-be-tac-o-gaza-4821678.html" title="Thỏa thuận ngừng bắn của Lebanon có phá vỡ bế tắc ở Gaza?" className="thumb thumb-1x1" data-medium="Item-2" data-thumb={1}>
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/28/afp2024111236m63z3v5highre6631-1367-7164-1732810832.jpg?w=180&h=180&q=100&dpr=1&fit=crop&s=ksD0l0qUccDvaNa0fcMcDg 1x, https://i1-vnexpress.vnecdn.net/2024/11/28/afp2024111236m63z3v5highre6631-1367-7164-1732810832.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=WgMoXQiR4hsBQ6AV4k94wQ 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img itemProp="contentUrl" style={{transform: 'translateX(-50%)', left: '50%'}} loading="lazy" intrinsicsize="180x180" alt="Thỏa thuận ngừng bắn của Lebanon có phá vỡ bế tắc ở Gaza?" className="lazy" src="https://i1-vnexpress.vnecdn.net/2024/11/28/afp2024111236m63z3v5highre6631-1367-7164-1732810832.jpg?w=180&h=180&q=100&dpr=1&fit=crop&s=ksD0l0qUccDvaNa0fcMcDg" />
                      </picture> </a>
                  </div>
                  <h3 className="title-news">
                    <a href="https://vnexpress.net/thoa-thuan-ngung-ban-cua-lebanon-co-pha-vo-be-tac-o-gaza-4821678.html" title="Thỏa thuận ngừng bắn của Lebanon có phá vỡ bế tắc ở Gaza?" data-medium="Item-2" data-thumb={1}>Thỏa thuận ngừng bắn của Lebanon có phá vỡ bế tắc ở Gaza?</a>
                  </h3>
                  <p className="description">
                    <a href="https://vnexpress.net/thoa-thuan-ngung-ban-cua-lebanon-co-pha-vo-be-tac-o-gaza-4821678.html" title="Thỏa thuận ngừng bắn của Lebanon có phá vỡ bế tắc ở Gaza?" data-medium="Item-2" data-thumb={1}>
                      Các chuyên gia chỉ ra nhiều điểm khác biệt trong đường lối của Israel với Hezbollah và Hamas, khiến một lệnh ngừng bắn ở Gaza là rất khó xảy ra.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <span className="time-public" />
                      <a className="cat" href="https://vnexpress.net/podcast/vnexpress-hom-nay" title="VnExpress hôm nay" data-medium="Menu-VnexpressHomNay">
                        VnExpress hôm nay
                      </a>
                      <a className="count_cmt" href="https://vnexpress.net/thoa-thuan-ngung-ban-cua-lebanon-co-pha-vo-be-tac-o-gaza-4821678.html#box_comment_vne" style={{whiteSpace: 'nowrap', display: 'none'}}>
                        <svg className="ic ic-comment"><use xlinkHref="#Comment-Reg" /></svg>
                        <span className="txt_num_comment font_icon" data-type="comment" data-objecttype={9} data-objectid={4821678} />
                      </a>
                    </p>
                    <a href="https://vnexpress.net/thoa-thuan-ngung-ban-cua-lebanon-co-pha-vo-be-tac-o-gaza-4821678.html" title="Thỏa thuận ngừng bắn của Lebanon có phá vỡ bế tắc ở Gaza?" data-medium="Item-2" data-thumb={1} className="timer">
                      <span>14 phút</span>
                      <span className="icon"><svg className="ic"><use xlinkHref="#play-1" /></svg></span>
                    </a>
                  </div>
                </article>
              </div>
              <div className="grid grid__3 line-bottom">
                <article className="item-news ">
                  <div className="thumb-art">
                    <a href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html" title="Có gì bên trong đường hầm bí mật của Hitler?" className="thumb thumb-1x1" data-medium="Item-3" data-thumb={1}>
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/28/Frame191-1732762840-3370-1732766309.png?w=100&h=100&q=100&dpr=1&fit=crop&s=HsuYF2UjaUka14hYG7kTzQ 1x, https://i1-vnexpress.vnecdn.net/2024/11/28/Frame191-1732762840-3370-1732766309.png?w=100&h=100&q=100&dpr=2&fit=crop&s=pBCls95QHoTOonX8quNLSQ 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img itemProp="contentUrl" style={{transform: 'translateX(-50%)', left: '50%'}} loading="lazy" intrinsicsize="100x100" alt="Có gì bên trong đường hầm bí mật của Hitler?" className="lazy" src="https://i1-vnexpress.vnecdn.net/2024/11/28/Frame191-1732762840-3370-1732766309.png?w=100&h=100&q=100&dpr=1&fit=crop&s=HsuYF2UjaUka14hYG7kTzQ" />
                      </picture> </a>
                  </div>
                  <h3 className="title-news">
                    <a href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html" title="Có gì bên trong đường hầm bí mật của Hitler?" data-medium="Item-3" data-thumb={1}>Có gì bên trong đường hầm bí mật của Hitler?</a>
                  </h3>
                  <p className="description">
                    <a href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html" title="Có gì bên trong đường hầm bí mật của Hitler?" data-medium="Item-3" data-thumb={1}>
                      Đường hầm xuyên núi khổng lồ của Hitler để lại các dấu vết cho thấy đây là nơi Đức Quốc xã sản xuất vũ khí huỷ diệt, cũng như thí nghiệm sinh học trên người.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <a className="cat" href="https://vnexpress.net/podcast/giai-ma" title="Giải mã" data-medium="Menu-GiaiMa">
                        Giải mã
                      </a>
                      <a className="count_cmt" href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html#box_comment_vne" style={{whiteSpace: 'nowrap', display: 'none'}}>
                        <svg className="ic ic-comment"><use xlinkHref="#Comment-Reg" /></svg>
                        <span className="txt_num_comment font_icon" data-type="comment" data-objecttype={9} data-objectid={4821360} />
                      </a>
                    </p>
                    <a href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html" title="Có gì bên trong đường hầm bí mật của Hitler?" data-medium="Item-3" data-thumb={1} className="timer">
                      <span>12 phút</span>
                      <span className="icon"><svg className="ic"><use xlinkHref="#play-1" /></svg></span>
                    </a>
                  </div>
                </article>
                <article className="item-news ">
                  <div className="thumb-art">
                    <a href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html" title="Giới trẻ Việt dốc túi đu idol quốc nội" className="thumb thumb-1x1" data-medium="Item-4" data-thumb={1}>
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/28/8f7ca99910844fc992c2177007b1cc-8612-8227-1732740761.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=08bfsCTNEOoaA3nTds3YOg 1x, https://i1-vnexpress.vnecdn.net/2024/11/28/8f7ca99910844fc992c2177007b1cc-8612-8227-1732740761.jpg?w=100&h=100&q=100&dpr=2&fit=crop&s=0HPx5n3U8K_-hbHQVG3Zig 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img itemProp="contentUrl" style={{transform: 'translateX(-50%)', left: '50%'}} loading="lazy" intrinsicsize="100x100" alt="Giới trẻ Việt dốc túi đu idol quốc nội" className="lazy" src="https://i1-vnexpress.vnecdn.net/2024/11/28/8f7ca99910844fc992c2177007b1cc-8612-8227-1732740761.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=08bfsCTNEOoaA3nTds3YOg" />
                      </picture> </a>
                  </div>
                  <h3 className="title-news">
                    <a href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html" title="Giới trẻ Việt dốc túi đu idol quốc nội" data-medium="Item-4" data-thumb={1}>Giới trẻ Việt dốc túi đu idol quốc nội</a>
                  </h3>
                  <p className="description">
                    <a href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html" title="Giới trẻ Việt dốc túi đu idol quốc nội" data-medium="Item-4" data-thumb={1}>
                      Bỏ hàng chục triệu xem 2 show liên tiếp, Nguyễn Anh, 29 tuổi, tại TP HCM, tiếp tục săn lùng mọi dịch vụ, sản phẩm có liên quan tới idol, chi tiền túi quảng bá hình ảnh thần tượng trên xe bus.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <a className="cat" href="https://vnexpress.net/podcast/vnexpress-hom-nay" title="VnExpress hôm nay" data-medium="Menu-VnexpressHomNay">
                        VnExpress hôm nay
                      </a>
                      <a className="count_cmt" href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html#box_comment_vne" style={{whiteSpace: 'nowrap', display: 'none'}}>
                        <svg className="ic ic-comment"><use xlinkHref="#Comment-Reg" /></svg>
                        <span className="txt_num_comment font_icon" data-type="comment" data-objecttype={9} data-objectid={4821211} />
                      </a>
                    </p>
                    <a href="https://vnexpress.net/gioi-tre-viet-doc-tui-du-idol-quoc-noi-4821211.html" title="Giới trẻ Việt dốc túi đu idol quốc nội" data-medium="Item-4" data-thumb={1} className="timer">
                      <span>11 phút</span>
                      <span className="icon"><svg className="ic"><use xlinkHref="#play-1" /></svg></span>
                    </a>
                  </div>
                </article>
                <article className="item-news ">
                  <div className="thumb-art">
                    <a href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html" title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'" className="thumb thumb-1x1" data-medium="Item-5" data-thumb={1}>
                      <picture>
                        {/*[if IE 9]><video style="display: none;"><![endif]*/}
                        <source srcSet="https://i1-vnexpress.vnecdn.net/2024/11/27/6b52bc2582c24719bae8b393323b92-7756-5428-1732677418.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=QnAyVydW-4K4sz3aI6xU2A 1x, https://i1-vnexpress.vnecdn.net/2024/11/27/6b52bc2582c24719bae8b393323b92-7756-5428-1732677418.jpg?w=100&h=100&q=100&dpr=2&fit=crop&s=Wed7t0hJhOWs_X9EXGP1QQ 2x" />
                        {/*[if IE 9]></video><![endif]*/}
                        <img itemProp="contentUrl" style={{transform: 'translateX(-50%)', left: '50%'}} loading="lazy" intrinsicsize="100x100" alt="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'" className="lazy" src="https://i1-vnexpress.vnecdn.net/2024/11/27/6b52bc2582c24719bae8b393323b92-7756-5428-1732677418.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=QnAyVydW-4K4sz3aI6xU2A" />
                      </picture> </a>
                  </div>
                  <h3 className="title-news">
                    <a href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html" title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'" data-medium="Item-5" data-thumb={1}>'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'</a>
                  </h3>
                  <p className="description">
                    <a href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html" title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'" data-medium="Item-5" data-thumb={1}>
                      Xem nhẹ việc hoạch định tài chính khi mở quán cafe, anh Trần Thanh Tùng, nhận ra mình "ném qua cửa sổ" hơn 10 tỷ khi nhìn lại 17 năm khởi nghiệp của mình.
                    </a>
                  </p>
                  <div className="meta-flex">
                    <p className="meta-news">
                      <a className="cat" href="https://vnexpress.net/podcast/tai-chinh-ca-nhan" title="Tài chính cá nhân" data-medium="Menu-TaiChinhCaNhan">
                        Tài chính cá nhân
                      </a>
                      <a className="count_cmt" href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html#box_comment_vne" style={{whiteSpace: 'nowrap', display: 'none'}}>
                        <svg className="ic ic-comment"><use xlinkHref="#Comment-Reg" /></svg>
                        <span className="txt_num_comment font_icon" data-type="comment" data-objecttype={9} data-objectid={4820858} />
                      </a>
                    </p>
                    <a href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html" title="'Thiếu kiến thức tài chính là sai lầm tai hại của nhiều chủ quán cafe'" data-medium="Item-5" data-thumb={1} className="timer">
                      <span>32 phút</span>
                      <span className="icon"><svg className="ic"><use xlinkHref="#play-1" /></svg></span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div className="box-program mfp-hide" id="box_list_show" data-campaign="Box-ChuongTrinh">
              <h2 className="title-cate">
                <span className="line">Các chương trình</span>
              </h2>
              <div className="slide-box-program ">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide" data-show-id={16}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/02/17/vnexpress-hom-nay-1645081742.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1pt9vKy3WBG17g-HkeLVmA" alt="VnExpress hôm nay" title="VnExpress hôm nay" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/02/17/vnexpress-hom-nay-1645081742.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1pt9vKy3WBG17g-HkeLVmA)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/vnexpress-hom-nay" title="VnExpress hôm nay" data-medium="Menu-VnexpressHomNay">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/02/17/vnexpress-hom-nay-1645081742.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1pt9vKy3WBG17g-HkeLVmA" alt="VnExpress hôm nay" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/vnexpress-hom-nay" title="VnExpress hôm nay" data-medium="Menu-VnexpressHomNay">VnExpress hôm nay</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/vnexpress-hom-nay" title="VnExpress hôm nay" data-medium="Menu-VnexpressHomNay">
                              Lý giải vấn đề thời sự qua tiếng nói của người trong cuộc. Xuất bản vào 4h sáng mỗi ngày. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/vnexpress-hom-nay" title="VnExpress hôm nay" data-medium="Menu-VnexpressHomNay">1501 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/thoa-thuan-ngung-ban-cua-lebanon-co-pha-vo-be-tac-o-gaza-4821678.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={53}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2024/08/22/ho-so-toi-ac-1724336077.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=FrHIjeuAIM2ja8boqmAgJg" alt="Hồ sơ tội ác" title="Hồ sơ tội ác" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2024/08/22/ho-so-toi-ac-1724336077.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=FrHIjeuAIM2ja8boqmAgJg)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/ho-so-toi-ac" title="Hồ sơ tội ác" data-medium="Menu-HoSoToiAc">
                              <img src="https://i1-vnexpress.vnecdn.net/2024/08/22/ho-so-toi-ac-1724336077.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=FrHIjeuAIM2ja8boqmAgJg" alt="Hồ sơ tội ác" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/ho-so-toi-ac" title="Hồ sơ tội ác" data-medium="Menu-HoSoToiAc">Hồ sơ tội ác</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/ho-so-toi-ac" title="Hồ sơ tội ác" data-medium="Menu-HoSoToiAc">
                              Nhìn lại những vụ án nghiêm trọng trong lịch sử hình sự Việt Nam </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/ho-so-toi-ac" title="Hồ sơ tội ác" data-medium="Menu-HoSoToiAc">14 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/vu-giet-nguoi-the-than-chiem-18-ty-tien-bao-hiem-4819111.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={33}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/08/30/giai-ma-1661875211.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=nOuB6XUhB56hzFgBABkQUA" alt="Giải mã" title="Giải mã" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/08/30/giai-ma-1661875211.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=nOuB6XUhB56hzFgBABkQUA)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/giai-ma" title="Giải mã" data-medium="Menu-GiaiMa">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/08/30/giai-ma-1661875211.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=nOuB6XUhB56hzFgBABkQUA" alt="Giải mã" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/giai-ma" title="Giải mã" data-medium="Menu-GiaiMa">Giải mã</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/giai-ma" title="Giải mã" data-medium="Menu-GiaiMa">
                              Tìm câu trả lời cho những hiện tượng bí ẩn. Xuất bản vào lúc 20h tối thứ 5 hàng tuần. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/giai-ma" title="Giải mã" data-medium="Menu-GiaiMa">139 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/co-gi-ben-trong-duong-ham-bi-mat-cua-hitler-4821360.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={30}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/05/16/hop-den-1652684483.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=15K4lhPyIm_wjaSqjWvwQQ" alt="Hộp đen" title="Hộp đen" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/05/16/hop-den-1652684483.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=15K4lhPyIm_wjaSqjWvwQQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/hop-den" title="Hộp đen" data-medium="Menu-HopDen">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/05/16/hop-den-1652684483.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=15K4lhPyIm_wjaSqjWvwQQ" alt="Hộp đen" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/hop-den" title="Hộp đen" data-medium="Menu-HopDen">Hộp đen</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/hop-den" title="Hộp đen" data-medium="Menu-HopDen">
                              Nơi lật tẩy những vụ án kinh điển. Xuất bản vào lúc 11h, trưa thứ 3 hàng tuần. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/hop-den" title="Hộp đen" data-medium="Menu-HopDen">133 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/sai-lam-khien-hacker-trom-3-ty-do-sa-luoi-sau-10-nam-4820418.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={32}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/08/23/tai-chinh-ca-nhan-1661229701.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=Ya5509pgGazuueVZAub4sQ" alt="Tài chính cá nhân" title="Tài chính cá nhân" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/08/23/tai-chinh-ca-nhan-1661229701.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=Ya5509pgGazuueVZAub4sQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/tai-chinh-ca-nhan" title="Tài chính cá nhân" data-medium="Menu-TaiChinhCaNhan">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/08/23/tai-chinh-ca-nhan-1661229701.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=Ya5509pgGazuueVZAub4sQ" alt="Tài chính cá nhân" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/tai-chinh-ca-nhan" title="Tài chính cá nhân" data-medium="Menu-TaiChinhCaNhan">Tài chính cá nhân</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/tai-chinh-ca-nhan" title="Tài chính cá nhân" data-medium="Menu-TaiChinhCaNhan">
                              Chuyên gia hướng dẫn cách quản lý tài chính cá nhân từ cơ bản tới chuyên sâu. Xuất bản vào 11h trưa thứ 4 hàng tuần. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/tai-chinh-ca-nhan" title="Tài chính cá nhân" data-medium="Menu-TaiChinhCaNhan">120 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/thieu-kien-thuc-tai-chinh-la-sai-lam-tai-hai-cua-nhieu-chu-quan-cafe-4820858.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={15}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/02/17/ban-on-khong-1645081753.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=k1W2yJqYZlidyL0OJzBKuw" alt="Bạn ổn không?" title="Bạn ổn không?" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/02/17/ban-on-khong-1645081753.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=k1W2yJqYZlidyL0OJzBKuw)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/ban-on-khong" title="Bạn ổn không?" data-medium="Menu-BanOnKhong">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/02/17/ban-on-khong-1645081753.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=k1W2yJqYZlidyL0OJzBKuw" alt="Bạn ổn không?" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/ban-on-khong" title="Bạn ổn không?" data-medium="Menu-BanOnKhong">Bạn ổn không?</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/ban-on-khong" title="Bạn ổn không?" data-medium="Menu-BanOnKhong">
                              Nơi thính giả được tâm sự với chuyên gia tâm lý của chương trình. Xuất bản 20h tối thứ bảy hàng tuần. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/ban-on-khong" title="Bạn ổn không?" data-medium="Menu-BanOnKhong">216 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/toi-co-dang-bi-khinh-thuong-vi-vuong-vao-ca-do-4818945.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={19}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/05/16/diem-tin-1652654852.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=iJrP97QDFP-QkJh_NaMCeQ" alt="Điểm tin" title="Điểm tin" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/05/16/diem-tin-1652654852.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=iJrP97QDFP-QkJh_NaMCeQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/diem-tin" title="Điểm tin" data-medium="Menu-DiemTin">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/05/16/diem-tin-1652654852.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=iJrP97QDFP-QkJh_NaMCeQ" alt="Điểm tin" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/diem-tin" title="Điểm tin" data-medium="Menu-DiemTin">Điểm tin</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/diem-tin" title="Điểm tin" data-medium="Menu-DiemTin">
                              Tổng hợp tin tức nổi bật nhất, xuất bản vào 6h sáng và 17h chiều hàng ngày. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/diem-tin" title="Điểm tin" data-medium="Menu-DiemTin">1608 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/diem-tin-6h-5-thach-thuc-voi-tan-bo-truong-giao-thong-van-tai-israel-lan-dau-khong-kich-hezbollah-sau-lenh-ngung-ban-4821693.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={52}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2024/07/10/nghe-tuong-lai-1720609627.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1kCgdP7e_x0pxP5m1SWvqQ" alt="Nghề Tương Lai" title="Nghề Tương Lai" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2024/07/10/nghe-tuong-lai-1720609627.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1kCgdP7e_x0pxP5m1SWvqQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/nghe-tuong-lai" title="Nghề Tương Lai" data-medium="Menu-NgheTuongLai">
                              <img src="https://i1-vnexpress.vnecdn.net/2024/07/10/nghe-tuong-lai-1720609627.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=1kCgdP7e_x0pxP5m1SWvqQ" alt="Nghề Tương Lai" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/nghe-tuong-lai" title="Nghề Tương Lai" data-medium="Menu-NgheTuongLai">Nghề Tương Lai</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/nghe-tuong-lai" title="Nghề Tương Lai" data-medium="Menu-NgheTuongLai">
                              Chuỗi podcast quy tụ các chuyên gia đầu ngành, phân tích xu hướng nghề tương lai giúp học sinh hiểu nhu cầu thị trường, trang bị kỹ năng trước khi chọn trường. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/nghe-tuong-lai" title="Nghề Tương Lai" data-medium="Menu-NgheTuongLai">5 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/tiktoker-co-phai-la-nghe-4785834.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={8}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/03/01/tham-thi-1646109866.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3aZaNXtUn-_w4OmSnTXlVw" alt="Thầm thì" title="Thầm thì" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/03/01/tham-thi-1646109866.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3aZaNXtUn-_w4OmSnTXlVw)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/tham-thi" title="Thầm thì" data-medium="Menu-ThamThi">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/03/01/tham-thi-1646109866.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3aZaNXtUn-_w4OmSnTXlVw" alt="Thầm thì" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/tham-thi" title="Thầm thì" data-medium="Menu-ThamThi">Thầm thì</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/tham-thi" title="Thầm thì" data-medium="Menu-ThamThi">
                              Bác sĩ giải đáp những vướng mắc về "chuyện chăn gối". Xuất bản 20h tối thứ 6 mỗi tuần. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/tham-thi" title="Thầm thì" data-medium="Menu-ThamThi">188 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/sex-co-giup-chua-lanh-4738864.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={51}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2024/03/25/tam-diem-kinh-te-1711300433.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=GwJoGvpqlQrF9lOVqPCaow" alt="Tâm điểm kinh tế" title="Tâm điểm kinh tế" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2024/03/25/tam-diem-kinh-te-1711300433.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=GwJoGvpqlQrF9lOVqPCaow)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/tam-diem-kinh-te" title="Tâm điểm kinh tế" data-medium="Menu-TamDiemKinhTe">
                              <img src="https://i1-vnexpress.vnecdn.net/2024/03/25/tam-diem-kinh-te-1711300433.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=GwJoGvpqlQrF9lOVqPCaow" alt="Tâm điểm kinh tế" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/tam-diem-kinh-te" title="Tâm điểm kinh tế" data-medium="Menu-TamDiemKinhTe">Tâm điểm kinh tế</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/tam-diem-kinh-te" title="Tâm điểm kinh tế" data-medium="Menu-TamDiemKinhTe">
                              Đi sâu vào vấn đề kinh tế "nóng" nhất tuần. Xuất bản mỗi 6h sáng thứ hai. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/tam-diem-kinh-te" title="Tâm điểm kinh tế" data-medium="Menu-TamDiemKinhTe">11 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/von-ngoai-do-vao-co-tao-cu-hich-cho-bat-dong-san-4753498.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={45}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2023/07/04/toi-ke-1688455882.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=NQabUdQa2Sw8kpvc5S3fQQ" alt="Tôi kể" title="Tôi kể" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2023/07/04/toi-ke-1688455882.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=NQabUdQa2Sw8kpvc5S3fQQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/toi-ke" title="Tôi kể" data-medium="Menu-ToiKe">
                              <img src="https://i1-vnexpress.vnecdn.net/2023/07/04/toi-ke-1688455882.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=NQabUdQa2Sw8kpvc5S3fQQ" alt="Tôi kể" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/toi-ke" title="Tôi kể" data-medium="Menu-ToiKe">Tôi kể</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/toi-ke" title="Tôi kể" data-medium="Menu-ToiKe">
                              Những con người có số phận đặc biệt, sống với những lựa chọn đặc biệt kể lại về cuộc đời chính mình. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/toi-ke" title="Tôi kể" data-medium="Menu-ToiKe">42 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/hanh-trinh-hoan-luong-cua-chang-trai-nghien-ma-tuy-tu-nam-15-tuoi-4738384.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={18}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/09/03/tien-lam-gi-1662199960.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=p9PF1fds21r41592hh0zVw" alt="Tiền làm gì?" title="Tiền làm gì?" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/09/03/tien-lam-gi-1662199960.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=p9PF1fds21r41592hh0zVw)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/tien-lam-gi" title="Tiền làm gì?" data-medium="Menu-TienLamGi">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/09/03/tien-lam-gi-1662199960.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=p9PF1fds21r41592hh0zVw" alt="Tiền làm gì?" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/tien-lam-gi" title="Tiền làm gì?" data-medium="Menu-TienLamGi">Tiền làm gì?</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/tien-lam-gi" title="Tiền làm gì?" data-medium="Menu-TienLamGi">
                              Nơi những người có kinh nghiệm thực chiến chia sẻ về cách kiếm, tiêu và quản lý tiền, đúc rút được từ "thành và bại". </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/tien-lam-gi" title="Tiền làm gì?" data-medium="Menu-TienLamGi">76 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/hoc-dau-tu-can-hoc-bang-trai-nghiem-thuc-te-4646304.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={26}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2021/12/09/ho-noi-gi-1639045395.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=pLV6CQmJ8l7rmcw6wVr_6g" alt="Họ nói gì?" title="Họ nói gì?" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2021/12/09/ho-noi-gi-1639045395.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=pLV6CQmJ8l7rmcw6wVr_6g)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/ho-noi-gi" title="Họ nói gì?" data-medium="Menu-HoNoiGi">
                              <img src="https://i1-vnexpress.vnecdn.net/2021/12/09/ho-noi-gi-1639045395.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=pLV6CQmJ8l7rmcw6wVr_6g" alt="Họ nói gì?" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/ho-noi-gi" title="Họ nói gì?" data-medium="Menu-HoNoiGi">Họ nói gì?</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/ho-noi-gi" title="Họ nói gì?" data-medium="Menu-HoNoiGi">
                              Nơi trò chuyện với những nhân vật trong sự kiện. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/ho-noi-gi" title="Họ nói gì?" data-medium="Menu-HoNoiGi">111 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/nguoi-viet-o-florida-gio-rit-nhu-tieng-dong-co-xe-f1-4802705.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={24}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/01/30/ly-hon-1643504712.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=hVEyuvwezxGkyWsMZoOmvQ" alt="Ly hôn" title="Ly hôn" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/01/30/ly-hon-1643504712.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=hVEyuvwezxGkyWsMZoOmvQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/ly-hon" title="Ly hôn" data-medium="Menu-LyHon">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/01/30/ly-hon-1643504712.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=hVEyuvwezxGkyWsMZoOmvQ" alt="Ly hôn" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/ly-hon" title="Ly hôn" data-medium="Menu-LyHon">Ly hôn</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/ly-hon" title="Ly hôn" data-medium="Menu-LyHon">
                              "Ly hôn" là nơi người trong cuộc chia sẻ về bài học sau đổ vỡ. Xuất bản 11h trưa chủ nhật hàng tuần </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/ly-hon" title="Ly hôn" data-medium="Menu-LyHon">52 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/tuong-co-the-duy-tri-hon-nhan-ca-doi-ma-khong-can-tinh-yeu-4560050.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={50}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2023/12/28/nguo-i-tien-phong-1703733517.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3Q0NM6HKI7LzXCh9DdoY2A" alt="Người tiên phong" title="Người tiên phong" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2023/12/28/nguo-i-tien-phong-1703733517.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3Q0NM6HKI7LzXCh9DdoY2A)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/nguoi-tien-phong" title="Người tiên phong" data-medium="Menu-NguoiTienPhong">
                              <img src="https://i1-vnexpress.vnecdn.net/2023/12/28/nguo-i-tien-phong-1703733517.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=3Q0NM6HKI7LzXCh9DdoY2A" alt="Người tiên phong" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/nguoi-tien-phong" title="Người tiên phong" data-medium="Menu-NguoiTienPhong">Người tiên phong</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/nguoi-tien-phong" title="Người tiên phong" data-medium="Menu-NguoiTienPhong">
                              Những câu chuyện bạn chưa từng nghe về thành công, thất bại và kinh nghiệm xương máu từ những doanh nhân hàng đầu. Mỗi câu chuyện là một bài học. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/nguoi-tien-phong" title="Người tiên phong" data-medium="Menu-NguoiTienPhong">1 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/ceo-acecook-lam-hoan-hao-tu-nhung-viec-binh-thuong-nhat-4694967.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={49}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2023/12/07/ke-hoach-lac-quan-1701914832.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=9xK3vINV6Hzo2IfuYogjeQ" alt="Kế hoạch lạc quan" title="Kế hoạch lạc quan" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2023/12/07/ke-hoach-lac-quan-1701914832.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=9xK3vINV6Hzo2IfuYogjeQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/ke-hoach-lac-quan" title="Kế hoạch lạc quan" data-medium="Menu-KeHoachLacQuan">
                              <img src="https://i1-vnexpress.vnecdn.net/2023/12/07/ke-hoach-lac-quan-1701914832.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=9xK3vINV6Hzo2IfuYogjeQ" alt="Kế hoạch lạc quan" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/ke-hoach-lac-quan" title="Kế hoạch lạc quan" data-medium="Menu-KeHoachLacQuan">Kế hoạch lạc quan</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/ke-hoach-lac-quan" title="Kế hoạch lạc quan" data-medium="Menu-KeHoachLacQuan">
                              Những bài học thực tế về cách xây dựng kế hoạch cuộc đời, qua mỗi trải nghiệm sẽ trở thành phiên bản tốt hơn, lạc quan hơn của chính mình mỗi ngày. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/ke-hoach-lac-quan" title="Kế hoạch lạc quan" data-medium="Menu-KeHoachLacQuan">8 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/lam-quang-nhat-hot-boy-lang-the-thao-tim-lai-dinh-cao-tu-day-vuc-4699767.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={25}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/02/24/toi-trong-guong-1645669044.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=t1kDcWynBkOnqf_CPFoG5Q" alt="Tôi trong gương" title="Tôi trong gương" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/02/24/toi-trong-guong-1645669044.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=t1kDcWynBkOnqf_CPFoG5Q)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/toi-trong-guong" title="Tôi trong gương" data-medium="Menu-ToiTrongGuong">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/02/24/toi-trong-guong-1645669044.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=t1kDcWynBkOnqf_CPFoG5Q" alt="Tôi trong gương" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/toi-trong-guong" title="Tôi trong gương" data-medium="Menu-ToiTrongGuong">Tôi trong gương</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/toi-trong-guong" title="Tôi trong gương" data-medium="Menu-ToiTrongGuong">
                              "Tôi trong gương" là nơi những người trẻ thành công tự nhìn nhận lại chặng đường trưởng thành của chính mình. Xuất bản 9h sáng thứ 5 hàng tuần. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/toi-trong-guong" title="Tôi trong gương" data-medium="Menu-ToiTrongGuong">27 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/ceo-dat-bike-thang-tien-qua-nhanh-o-silicon-toi-thay-vo-nghia-4503209.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={27}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/03/01/chuyen-di-lam-1646109841.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=vkpPgGfKYBIerHusK47_UQ" alt="Chuyện đi làm" title="Chuyện đi làm" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/03/01/chuyen-di-lam-1646109841.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=vkpPgGfKYBIerHusK47_UQ)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/chuyen-di-lam" title="Chuyện đi làm" data-medium="Menu-ChuyenDiLam">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/03/01/chuyen-di-lam-1646109841.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=vkpPgGfKYBIerHusK47_UQ" alt="Chuyện đi làm" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/chuyen-di-lam" title="Chuyện đi làm" data-medium="Menu-ChuyenDiLam">Chuyện đi làm</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/chuyen-di-lam" title="Chuyện đi làm" data-medium="Menu-ChuyenDiLam">
                              Mùa 2 sẽ là nơi các bạn trẻ "Úp-Mở" về vấn đề công việc, lên sóng vào 17h thứ 4 hàng tuần. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/chuyen-di-lam" title="Chuyện đi làm" data-medium="Menu-ChuyenDiLam">12 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/du-hoc-sinh-ve-hay-o-4445304.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={22}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/03/01/up-mo-1646109824.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=-ylzsXBDWkSiI5Le9m-jzA" alt="Úp mở 18+" title="Úp mở 18+" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/03/01/up-mo-1646109824.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=-ylzsXBDWkSiI5Le9m-jzA)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/up-mo-18" title="Úp mở 18+" data-medium="Menu-UpMo18">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/03/01/up-mo-1646109824.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=-ylzsXBDWkSiI5Le9m-jzA" alt="Úp mở 18+" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/up-mo-18" title="Úp mở 18+" data-medium="Menu-UpMo18">Úp mở 18+</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/up-mo-18" title="Úp mở 18+" data-medium="Menu-UpMo18">
                              "Úp - Mở" chuyện 18+ là nơi người trẻ bộc lộ về quan điểm, lối sống trong nhiều lĩnh vực </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/up-mo-18" title="Úp mở 18+" data-medium="Menu-UpMo18">14 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/gioi-thieu-chuong-trinh-up-mo-mua-2-4419652.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide" data-show-id={20}>
                      <div className="item-program">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/05/17/nguy-co-1652784563.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=ZJAZaj6Zcom_C5R-E6eYoA" alt="Nguy - Cơ" title="Nguy - Cơ" />
                        <div className="info item-news">
                          <span className="bg-img" style={{background: 'url(https://i1-vnexpress.vnecdn.net/2022/05/17/nguy-co-1652784563.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=ZJAZaj6Zcom_C5R-E6eYoA)'}} />
                          <div className="thumb-art">
                            <a className="thumb thumb-1x1" href="https://vnexpress.net/podcast/nguy-co" title="Nguy - Cơ" data-medium="Menu-NguyCo">
                              <img src="https://i1-vnexpress.vnecdn.net/2022/05/17/nguy-co-1652784563.jpg?w=180&h=180&q=100&dpr=2&fit=crop&s=ZJAZaj6Zcom_C5R-E6eYoA" alt="Nguy - Cơ" />
                            </a>
                          </div>
                          <h3 className="title-news">
                            <a href="https://vnexpress.net/podcast/nguy-co" title="Nguy - Cơ" data-medium="Menu-NguyCo">Nguy - Cơ</a>
                          </h3>
                          <p className="description">
                            <a href="https://vnexpress.net/podcast/nguy-co" title="Nguy - Cơ" data-medium="Menu-NguyCo">
                              Là nơi các doanh nghiệp chia sẻ câu chuyện của mình, phân tích vấn đề kinh doanh, cuộc chiến thương trường. Host là doanh nhân, diễn giả Nguyễn Phi Vân. </a>
                          </p>
                          <div className="meta-flex">
                            <div className="episodes">
                              <a href="https://vnexpress.net/podcast/nguy-co" title="Nguy - Cơ" data-medium="Menu-NguyCo">61 tập</a>
                            </div>
                            <a className="btn-play-podcast" href="https://vnexpress.net/thuong-mai-dien-tu-tang-suc-canh-tranh-nho-doi-moi-sang-tao-4559391.html" title="Nghe tập mới nhất" data-medium="Item-MoiNhat">
                              <svg className="ic"><use xlinkHref="#play-1" /></svg> Nghe tập mới nhất
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
                  Liên hệ ban Podcasts: 084 666 0123 hoặc <a href="mailto:podcast@vnexpress.net" rel="nofollow" title="Mail">podcast@vnexpress.net</a>.
                </div>
                <div className="box-category sticky" style={{top: '60px'}}>
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
                <ins className="adsbyeclick" data-zone={6258} data-ad-width={1} data-ad-height={1} />
              </div>
              <div id="rich-media-banner-ads">
                <div id="sis_richmedia">
                </div>
              </div>
              <div id="OverLapHiden" style={{width: '100%', height: '100%', left: '0px', top: '0px', position: 'fixed', display: 'none', backgroundColor: 'rgb(0, 0, 0)', opacity: '0.6', zIndex: 5000001}} />
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
        <div id="sis_slider" />
        <div id="_footer" className="lazier" />
        <footer className="footer container" data-component-runtime="js" data-component-function="initLayout" data-component-input="{}" id="wrapper_footer" data-campaign="Footer" />
        <a href="javascript:;" id="to_top" title="Lên đầu trang"><svg className="ic ic-arrow-up"><use xlinkHref="#Arrow-Up-1" /></svg></a>
        <div id="tt_end_page" style={{display: 'none'}} />
      </div>
    );
}
