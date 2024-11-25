// Tạ Ngọc Phi Phi 
// Nguyễn Thế Minh Thiện
// Nguyễn Huy Quang
// Nguyễn Tấn Tài

import React, {useState, useRef } from 'react';
import './GiaiTriPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';


function GioiThieu() {
   // Tạo các ref riêng biệt cho mỗi thanh cuộn
const scrollableRef1 = useRef(null);
const scrollableRef2 = useRef(null);

const [isLeftDisabled1, setIsLeftDisabled1] = useState(false);
const [isRightDisabled1, setIsRightDisabled1] = useState(false);
const [isLeftDisabled2, setIsLeftDisabled2] = useState(false);
const [isRightDisabled2, setIsRightDisabled2] = useState(false);

// Hàm cuộn cho thanh cuộn đầu tiên
const scrollLeft1 = () => {
  if (scrollableRef1.current) {
    console.log(scrollableRef1.current.scrollLeft); // Kiểm tra giá trị scrollLeft
    scrollableRef1.current.scrollBy({ left: -150, behavior: 'smooth' });
  }
};

const scrollRight1 = () => {
  if (scrollableRef1.current) {
    console.log(scrollableRef1.current.scrollLeft); // Kiểm tra giá trị scrollLeft
    scrollableRef1.current.scrollBy({ left: 150, behavior: 'smooth' });
  }
};


// Hàm cuộn cho thanh cuộn thứ hai
const scrollLeft2 = () => {
  if (scrollableRef2.current) {
    scrollableRef2.current.scrollBy({ left: -150, behavior: 'smooth' });
  }
};

const scrollRight2 = () => {
  if (scrollableRef2.current) {
    scrollableRef2.current.scrollBy({ left: 150, behavior: 'smooth' });
  }
};

const handleScroll1 = () => {
  if (scrollableRef1.current) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollableRef1.current;
    setIsLeftDisabled1(scrollLeft === 0);
    setIsRightDisabled1(scrollLeft + clientWidth >= scrollWidth - 1);
  }
};


const handleScroll2 = () => {
  if (scrollableRef2.current) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollableRef2.current;
    setIsLeftDisabled2(scrollLeft === 0);
    setIsRightDisabled2(scrollLeft + clientWidth >= scrollWidth - 1);
  }
};

  {/*---------------------------------------------------------------------------------------------------------------------------------------*/}
  
  const contentItems = [
    {
      title: "Hoa hậu Bảo Ngọc nói về biến đổi khí hậu tại COP 29",
      text: "Azerbaijan - Hoa hậu Bảo Ngọc dự nhiều hoạt động thuộc khuôn khổ Hội nghị thượng đỉnh về khí hậu lần thứ 29 của Liên Hợp Quốc (COP 29).",
      imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/22/HoahauBaoNgoctaiCOP2918JPG-173-1614-7865-1732245882.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=5o4SrsVkmZjqfcfl7n-9EA",
      altText: "A woman typing on a laptop at a conference",
      link: "https://vnexpress.net/hoa-hau-bao-ngoc-noi-ve-bien-doi-khi-hau-tai-cop-29-4818706.html"
    },
    {
      title: "Tác giả 104 tuổi được đề nghị trao giải Sách Quốc gia",
      text: "Ông Nguyễn Đình Tư, 104 tuổi, được đề nghị trao giải A với tập 'Gia Định - Sài Gòn - TP HCM dặm dài lịch sử'. ",
      imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/22/nha-nghien-cuu-nguyen-dinh-tu-6747-9581-1732266636.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=ZqU5kFY6-dq_cPqgYHPZOw",
      altText: "An elderly man in traditional attire smiling",
      link: "https://vnexpress.net/tac-gia-104-tuoi-duoc-de-nghi-trao-giai-sach-quoc-gia-4819210.html"
    },
    {
      title: "Angelina Jolie: Làm mẹ là điều quan trọng nhất",
      text: "Minh tinh Angelina Jolie cho rằng làm mẹ là niềm vui lớn nhất đời, sẵn sàng từ bỏ mọi thứ trừ các con.",
      imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/22/241121-gma-jolie2-hpmain-16x9-7188-1112-1732256267.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=gsmgDi3ILWOLEngXQS7mSA",
      altText: "A woman typing on a laptop at a conference",
      link: "https://vnexpress.net/angelina-jolie-lam-me-la-dieu-quan-trong-nhat-4819128.html"
    },
    {
      title: "Người mẫu Brazil mê áo dài, nón lá",
      text: "Jordan Goncalves, người mẫu lai Brazil và Italy, tên thường gọi là Đan, cho biết yêu thích văn hóa, con người Việt sau gần 10 năm định cư. ",
      imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/21/Jordan-Goncalves-18.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=FOrWfYFOBnomh_MLKx9UEA",
      altText: "A model wearing traditional Vietnamese áo dài",
      link: "https://vnexpress.net/nguoi-mau-brazil-me-ao-dai-non-la-4818857.html"
    },
    {
        title: "Multiverse - 'vũ trụ' âm nhạc của Tùng Dương",
        text: "Trong album 'Multiverse', Tùng Dương miêu tả hành trình khám phá bản thân của mỗi con người và khát khao vượt lên những quy luật về không gian, thời gian. ",
        imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/20/tung-duong-1-1732091788-6496-1732091842.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=WnCFmgDduUrtVHLa7iSgoQ",
        altText: "A model wearing traditional Vietnamese áo dài",
        link: "https://vnexpress.net/multiverse-vu-tru-am-nhac-cua-tung-duong-4817429.html"
      },
      {
        title: "Sao theo đuổi túi một gang tay",
        text: "Gigi Hadid, Elle Fanning, Kỳ Duyên, Đỗ Thị Hà lựa chọn túi mini dài bằng một gang tay, giúp phụ kiện này hot trở lại. ",
        imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/20/sao-tui-mini.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=FQmMEQsf_qjK0fKx_sl3LA",
        altText: "A model wearing traditional Vietnamese áo dài",
        link: "https://vnexpress.net/sao-theo-duoi-tui-mot-gang-tay-4818395.html"
      },
      {
        title: "Tặng vé xem phim 'Chiến địa tử thi'",
        text: "VnExpress tặng độc giả bốn cặp vé ra mắt phim Thái 'Chiến địa tử thi', có Chanon Santinatornkul đóng chính, vào tối 25/11. ",
        imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/20/operation-undead-1-jpeg-173209-5892-7484-1732091889.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=5nyv-eLb4rU8hy-XUr-BWQ",
        altText: "A model wearing traditional Vietnamese áo dài",
        link: "https://vnexpress.net/tang-ve-xem-phim-chien-dia-tu-thi-4818349.html"
      },
      {
        title: "Đồng hồ ghép dán thủ công duy nhất của Chopard",
        text: "Chopard Alpine Eagle 41 XP Time For Art là chiếc đồng hồ Alpine Eagle duy nhất có mặt số ghép dán thủ công, được thương hiệu dành tặng sự kiện đấu giá bảo trợ ... ",
        imageUrl: "https://i1-giaitri.vnecdn.net/2024/11/22/image31026736extractword0out-155862-1732260453-1732260828.jpeg?w=220&h=132&q=100&dpr=1&fit=crop&s=uLbv00XujzDdRC69kPVZLA",
        altText: "A model wearing traditional Vietnamese áo dài",
        link: "https://vnexpress.net/dong-ho-ghep-dan-thu-cong-duy-nhat-cua-chopard-4819195.html"
      }
  ];
  

  return (
    <div className="container">
      <div className="header">
        <h1>Giải trí</h1>
        <div className="nav">
  <a href="https://vnexpress.net/giai-tri/gioi-sao" target="_blank" rel="noopener noreferrer">Giới sao</a>
  <a href="https://vnexpress.net/giai-tri/sach" target="_blank" rel="noopener noreferrer">Sách</a>
  <a href="https://video.vnexpress.net/giai-tri?_gl=1*172t7sy*_gcl_au*MjI1NjAzOTg4LjE3MzIyNjkwODE." target="_blank" rel="noopener noreferrer">Video</a>
  <a href="https://vnexpress.net/giai-tri/phim" target="_blank" rel="noopener noreferrer">Phim</a>
  <a href="https://vnexpress.net/giai-tri/nhac" target="_blank" rel="noopener noreferrer">Nhạc</a>
  <a href="https://vnexpress.net/giai-tri/thoi-trang" target="_blank" rel="noopener noreferrer">Thời trang</a>
  <a href="https://vnexpress.net/giai-tri/lam-dep" target="_blank" rel="noopener noreferrer">Làm đẹp</a>
  <a href="https://vnexpress.net/giai-tri/san-khau-my-thuat" target="_blank" rel="noopener noreferrer">Sân khấu - Mỹ thuật</a>
</div>

      </div>
      <hr className="headerngang" />
      <div className="main-content">
      <div className="main-article">
  <a href="https://vnexpress.net/pham-tuan-ngoc-tu-nguoi-mau-den-a-vuong-the-gioi-4819752.html" target="_blank" rel="noopener noreferrer">
    <img alt="A banana taped to a wall with a person looking at it" src="banner.png" />
  </a>
</div>

        <div className="side-articles">
          <div className="article">
          <img
  alt="A person with a serious expression"
  src="https://i1-giaitri.vnecdn.net/2024/11/22/HUNHHIUMINHTOP-1732242234-2703-1732242267.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=PcBEjVNQWi3k1wdxqZQ2gg"
  onClick={() => window.open("https://vnexpress.net/huynh-hieu-minh-vat-va-vi-giam-cap-toc-15-kg-4819001.html", "_blank")}
  style={{ cursor: "pointer" }}
/>
            <h4>Huỳnh Hiểu Minh vật vã vì giảm cấp tốc 15 kg</h4>
            <p>Tài tử Trung Quốc Huỳnh Hiểu Minh nói hay bị rụng mình vì lạnh, tâm trạng u uất sau khi ép cân để đóng phim.</p>
          </div>
          <hr className="divider" />
          <div className="article">
          <img
  alt="A beauty queen smiling"
  src="https://i1-giaitri.vnecdn.net/2024/11/22/HoahauThanhThuy448857173224525-8697-2277-1732246159.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=i-bZcNlbHYI5AIUzuB6LEw"
  onClick={() => window.open("https://vnexpress.net/thanh-thuy-nu-sinh-chinh-phuc-vuong-mien-miss-international-4815309.html", "_blank")}
  style={{ cursor: "pointer" }}
/>
            <h4>Hoa hậu Thanh Thủy: 'Tôi không áp lực phải mua nhà, lấy chồng'</h4>
            <p className="description">
              Hoa hậu Quốc tế Thanh Thủy nói thích sống tự do, tận hưởng thanh xuân, làm gì cũng đóng góp cho cộng đồng thay vì vướng bận yêu đương ở tuổi 22.
              <span className="comments">
                <FontAwesomeIcon icon={faComment} /> <small>123</small>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-articles">
        <div className="article">
        <img
  alt="A beauty queen smiling"
  src="https://i1-giaitri.vnecdn.net/2024/11/22/HoahauThanhThuy448857173224525-8697-2277-1732246159.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=i-bZcNlbHYI5AIUzuB6LEw"
  onClick={() => window.open("https://vnexpress.net/thanh-thuy-nu-sinh-chinh-phuc-vuong-mien-miss-international-4815309.html", "_blank")}
  style={{ cursor: "pointer" }}
/>
          <h3>Hoa hậu Thanh Thủy: 'Tôi không áp lực phải mua nhà, lấy chồng'</h3>
        </div>
        <div className="article">
        <img
  alt="A person with a serious expression"
  src="https://i1-giaitri.vnecdn.net/2024/11/22/HUNHHIUMINHTOP-1732242234-2703-1732242267.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=PcBEjVNQWi3k1wdxqZQ2gg"
  onClick={() => window.open("https://vnexpress.net/huynh-hieu-minh-vat-va-vi-giam-cap-toc-15-kg-4819001.html", "_blank")}
  style={{ cursor: "pointer" }}
/>          <h3>Huỳnh Hiểu Minh vật vã vì giảm cấp tốc 15 kg</h3>
        </div>
        <div className="article">
        <img
  alt="An elderly person smiling"
  src="https://i1-giaitri.vnecdn.net/2024/11/22/nha-nghien-cuu-nguyen-dinh-tu-6747-9581-1732266636.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=jH1H-m_bMT2ZlEMy1bgKNQ"
  onClick={() => window.open("https://vnexpress.net/tac-gia-104-tuoi-duoc-de-nghi-trao-giai-sach-quoc-gia-4819210.html", "_blank")}
  style={{ cursor: "pointer" }}
/>
          <h3>Tác giả 104 tuổi được đề nghị trao giải Sách Quốc gia</h3>
        </div>
        <div className="article">
        <img
  alt="A person smiling in a red hat"
  src="https://i1-giaitri.vnecdn.net/2024/11/21/Jordan-Goncalves-18.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=IfUj0EYkzlMkcuO70f2ozQ"
  onClick={() => window.open("https://vnexpress.net/nguoi-mau-brazil-me-ao-dai-non-la-4818857.html", "_blank")}
  style={{ cursor: "pointer" }}
/>
          <h3>Người mẫu Brazil mê áo dài, nón lá</h3>
        </div>
      </div>
      <hr className="ngang" />
      <div className="scroll-container">
  <a href="#" className="topic-title">
    <img src="uptrend.png" alt="Uptrend Icon" />
    Chủ đề
  </a>
  <div className="scrollable" ref={scrollableRef2} onScroll={handleScroll2}>
  <a href="https://vnexpress.net/topic/ly-tu-that-hien-tuong-van-hoa-27823" target="_blank" rel="noopener noreferrer">Lý Tử Thất - hiện tượng văn hóa</a>
    <a href="https://vnexpress.net/topic/giai-ngoi-sao-cua-nam-2024-27800" target="_blank" rel="noopener noreferrer">Giải Ngôi sao của năm 2024</a>
    <a href="https://vnexpress.net/topic/tac-dong-cua-tri-tue-nhan-tao-ai-27786" target="_blank" rel="noopener noreferrer">Dự đoán của Trí tuệ nhân tạo AI</a>
    <a href="https://vnexpress.net/topic/thong-dong-voi-bong-27775" target="_blank" rel="noopener noreferrer">Thong dong với Bống</a>
    <a href="https://vnexpress.net/topic/show-chi-dep-dap-gio-2024-27682" target="_blank" rel="noopener noreferrer">Show "Chị đẹp đạp gió 2024"</a>
  </div>
  <button
    className={`scroll-button prev ${isLeftDisabled2 ? 'disabled' : ''}`}
    onClick={scrollLeft2}
    disabled={isLeftDisabled2}
  >
    &lt;
  </button>
  <button
    className={`scroll-button next ${isRightDisabled2 ? 'disabled' : ''}`}
    onClick={scrollRight2}
    disabled={isRightDisabled2}
  >
    &gt;
  </button>
</div>

      <hr className="ngang" />
{/*-------------------------------------------------bên trái---------------------------------------------------------------*/}
<hr className="nganglayout" />
<div className="layout-wrapper">
  {/* Cột bên trái */}

  <div className="left-column">
  {contentItems.map((item, index) => (
    <div key={index} className="content-item">
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="content-link">
        <div className="news-title">
          {item.title}
        </div>
        <div className="news-content">
          <div className="news-image">
            <img
              alt={item.altText}
              height="100"
              src={item.imageUrl}
              width="150"
            />
          </div>
          <div className="news-text">
            {item.text}
          </div>
        </div>
      </a>
      {index !== contentItems.length - 1 && <hr />}
    </div>
  ))}
</div>


  {/* Đường kẻ giữa */}
  <div className="divider-line"></div>
{/*------------------------------------------cột bên phải ---------------------------------------------------*/}
  {/* Cột bên phải */}
  <div className="right-column-container">
  {/* Phần bên trái */}
  <div className="left-part">
    <div className="right-column-left-section">
      <div className="navbar">
        <div className="navbar-title">Sách</div>
        <div className="navbar-links">
        <a href="https://vnexpress.net/giai-tri/sach/diem-sach" className="navbar-link">Điểm sách</a>
          <a href="https://vnexpress.net/giai-tri/sach/lang-van" className="navbar-link">Làng văn</a>
          <a href="https://vnexpress.net/giai-tri/sach/tac-gia" className="navbar-link">Tác giả</a>
        </div>
      </div>

      {/* Nội dung Stephen King */}
      <a href="https://vnexpress.net/nha-van-stephen-king-tu-bo-mang-xa-hoi-x-4816730.html" className="no-underline">
  <img
    src="https://i1-giaitri.vnecdn.net/2024/11/16/ap21056480405009-22a85758785af-6119-9498-1731725411.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=WONxEkQZcGaK2aGZk1lE-w"
    alt="Stephen King"
    className="right-column-small-image"
  />
  <div>
    <div className="right-column-article-title">
      Nhà văn Stephen King từ bỏ mạng xã hội X
    </div>
    <div className="right-column-article-content">
      "Ông hoàng truyện kinh dị" Mỹ Stephen King thông báo ngừng dùng
      mạng xã hội X vì cho rằng nền tảng này "đầy rẫy thông tin tiêu cực".
    </div>
  </div>
</a>

      <div className="ngang1"></div>

      {/* Nội dung Trung Trung Đỉnh */}
      <a href="https://vnexpress.net/nha-van-trung-trung-dinh-ra-mat-con-thieng-cua-rung-4817284.html" className="no-underline">
  <div className="right-column-left-section2">
    <div className="headerleft">
      <div className="right-column-article-title2">
        Nhà văn Trung Trung Đỉnh ra mắt 'Con thiêng của rừng'
      </div>
    </div>
    <div className="content-section">
      <img
        src="https://i1-giaitri.vnecdn.net/2024/11/18/con-thieng-cua-rung-1731904414-9484-1731904568.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=EwYfY2kRnu6gEJADu8bWVA"
        alt="Con thiêng của rừng"
        className="right-column-small-image2"
      />
      <div className="right-column-article-content2">
        "Nhà văn Trung Trung Đỉnh ra mắt "Con thiêng của rừng" - truyện lấy cảm hứng từ cuộc đời họa sĩ Xu Man."
      </div>
    </div>
  </div>
</a>

      <hr class="ngang2"></hr>
    </div>
    <hr className="vertical-line"></hr>
    {/* Phần bên phải */}
    <a href="https://vnexpress.net/su-that-tran-trui-nhung-cu-nga-cua-mike-tyson-4818545.html" className="no-underline">
  <div className="right-column-right-section">
    <img
      src="https://i1-giaitri.vnecdn.net/2024/11/21/fc6a7724-6ee6-11e7-9573-56c566-7806-7894-1732155063.jpg?w=330&h=495&q=100&dpr=1&fit=crop&s=jPPyXmpbuzN2cbuKhh4kyA"
      alt="Mike Tyson book cover 'Sự thật trần trụi'"
      className="right-column-large-image"
    />
    <div className="right-column-article-title">
      'Sự thật trần trụi' - những cú ngã của Mike Tyson
    </div>
  </div>
</a>

   
  </div>

{/*-------------------------------------------------------------------------------------------*/}
  <div className="Content2">
      {/* Cột bên trái */}
      <div className="left-column2">
        <div className="tab-menu2">
        <a href="https://vnexpress.net/giai-tri/gioi-sao" className="no-underline">
  <div className="tab-item active2">Giới sao</div>
</a>
          <a href="https://vnexpress.net/giai-tri/gioi-sao/trong-nuoc" className="no-underline">
  <div className="tab-item2">Trong nước</div>
</a>
<a href="https://vnexpress.net/giai-tri/gioi-sao/quoc-te" className="no-underline">
  <div className="tab-item2">Quốc tế</div>
</a>
        </div>
        <a href="https://vnexpress.net/y-nhi-dien-mot-ao-giap-4819421.html" className="no-underline">
  <div className="news-item2">
    <img
      src="https://i1-giaitri.vnecdn.net/2024/11/23/Nhi-1732328439-1740-1732329885.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=yxkQC1K4BAOBAZMzIVO9Pw"
      alt="A person in a red academic gown holding a bouquet of flowers"
    />
    <div className="news-item-content2">
      <h3>Ý Nhi diện mốt 'áo giáp'</h3>
      <p>
        <span className="location">TP HCM - </span>
        Hoa hậu Ý Nhi mặc kiểu áo giáp mô phỏng đường cong phụ nữ của nhà thiết kế Hà Thanh Việt dự show thời trang.
      </p>
      <p className="category">Quốc tế</p>
    </div>
  </div>
</a>

      </div>

      {/* Cột bên phải */}
      <div className="right-column2">
      <a href="https://vnexpress.net/vo-chong-lam-tam-nhu-co-vu-con-gai-bieu-dien-4819488.html" className="no-underline">
  <div className="news-list-item2">
    <h3>Vợ chồng Lâm Tâm Như cổ vũ con gái biểu diễn</h3>
    <p>
      Diễn viên Đài Loan Lâm Tâm Như và chồng, tài tử Hoắc Kiến Hoa, gây
      chú ý khi xem con gái - Amelia - múa hát.
    </p>
  </div>
</a>
        <hr className="ngang-3" ></hr>
        <a href="https://vnexpress.net/thanh-thuy-va-dan-my-nhan-chung-dien-tren-tham-do-4819384.html" className="no-underline">
  <div className="news-list-item2">
    <h3>Thanh Thủy và dàn mỹ nhân chứng diện trên thảm đỏ</h3>
    <p>
      TP HCM— Hoa hậu Quốc tế Thanh Thủy cùng các người đẹp Thiên Ân, Nhã
      Phương tạo dáng khi xem show của nhà thiết kế Hà Thanh Việt.
    </p>
  </div>
</a>
        <hr className="ngang-3" ></hr>
        <a href="https://vnexpress.net/thong-dong-voi-bong-nguon-cam-hung-cua-hong-nhung-4819030.html" className="no-underline">
  <div className="news-list-item2">
    <h3>'Thong dong với Bống': Nguồn cảm hứng của Hồng Nhung</h3>
    <p>
      Hồng Nhung cho biết học hỏi nhiều điều từ chuyên gia pilates, nhà
      thiết kế trong tập 5 "Nguồn cảm hứng" ở series "Thong dong với
      Bống".
    </p>
  </div>
</a>

      </div>
    </div>

    <hr class="ngang4"></hr>

{/*----------------------------------------------------------------------------------------------------------*/}

<div className="Content3">
      {/* Cột bên trái */}
      <div className="left-column2">
        <div className="tab-menu3">
        <a href="https://vnexpress.net/giai-tri/phim" className="no-underline">
  <div className="tab-item active3">Phim</div>
</a>
<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim" className="no-underline">
  <div className="tab-item3">
    <img
      src="https://s1.vnecdn.net/vnexpress/restruct/i/v9527/v2_2019/pc/graphics/e-phim.svg"
      alt="e-phim icon"
    />
  </div>
</a>
<a href="https://vnexpress.net/giai-tri/phim/sau-man-anh" className="no-underline">
  <div className="tab-item3">
    Chuyện màn ảnh
  </div>
</a>
        </div>
        <a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/gladiator-ii-753" className="no-underline">
  <div className="news-item2">
    <img
      src="https://i1-giaitri.vnecdn.net/2024/11/22/tnh-l-filmreview-gladiatorii-w-6971-3498-1732265981.png?w=300&h=180&q=100&dpr=1&fit=crop&s=ucVOntv3zY7Mkm0Ct47GVA"
      alt="A person in a red academic gown holding a bouquet of flowers"
    />
    <div className="news-item-content2">
      <h3>'Gladiator II' - đấu sĩ trỗi dậy</h3>
      <p>
        Lucius - Paul Mescal đóng - từ nô lệ thành đấu sĩ để báo thù cho người vợ bị quân đội La Mã sát hại, trong phim "Gladiator II".
      </p>
      <p className="category">Điểm phim</p>
    </div>
  </div>
</a>

      </div>

      {/* Cột bên phải */}
      <div className="right-column2">
      <a href="https://vnexpress.net/huynh-hieu-minh-vat-va-vi-giam-cap-toc-15-kg-4819001.html" className="no-underline">
  <div className="news-list-item2">
    <h3>Huỳnh Hiểu Minh vật vã vì giảm cấp tốc 15 kg</h3>
    <p>
      Tài tử Trung Quốc Huỳnh Hiểu Minh nói hay bị rùng mình vì lạnh, tâm trạng u uất sau khi ép cân để đóng phim.
    </p>
  </div>
</a>
        <hr className="ngang-3" ></hr>
        <a href="https://vnexpress.net/tang-ve-xem-phim-chien-dia-tu-thi-4818349.html" className="no-underline">
  <div className="news-list-item2">
    <h3>Tặng vé xem phim 'Chiến địa tử thi'</h3>
    <p>
      VnExpress tặng độc giả bốn cặp vé ra mắt phim Thái "Chiến địa tử thi", có Chanon Santinatornkul đóng chính, vào tối 25/11.
    </p>
  </div>
</a>
        <hr className="ngang-3" ></hr>
        <a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/countdown-paul-vs-tyson-752" className="no-underline">
  <div className="news-list-item2">
    <h3>'Countdown' - trước giờ so găng của Mike Tyson và Jake Paul</h3>
    <p>
      Mike Tyson muốn khẳng định vị thế bất bại, còn YouTuber Jake Paul chứng minh mình có thể thành võ sĩ chuyên nghiệp, trong "Countdown: Paul vs. Tyson".
    </p>
  </div>
</a>
      </div>
    </div>
    <div className="scroll-container1">
  <a href="#" className="topic-title1"> 
    Phim HOT
  </a>
  <div className="scrollable1" ref={scrollableRef1} onScroll={handleScroll1}>
  <a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/love-in-the-big-city-751" className="no-underline">
  Love in the Big City
</a>
<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/cu-li-khong-bao-gio-khoc-750">Cu li không bao giờ khóc</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/the-substance-747">The Substance</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/the-paradise-of-thorns-748">The Paradise of Thons</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/venom-the-last-dance-745">Venom: The Last Dance</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/ngay-xua-co-mot-chuyen-tinh-743">Ngày xưa có một chuyện tình</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/co-dau-hao-mon-741">Cô dâu hào môn</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/return-to-space-739">Return to Space</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/cam-733">Cám</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/joker-2-736">Joker 2</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/ky-uc-lo-to-muon-neo-duong-doi-737">Ký ức lô tô: Muôn nẻo đường đời</a>

<a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/shogun-732">Shogun</a>

  </div>
  <button
    className={`scroll-button1 prev1 ${isLeftDisabled1 ? 'disabled' : ''}`}
    onClick={scrollLeft1}
    disabled={isLeftDisabled1}
  >
    &lt;
  </button>
  <button
    className={`scroll-button1 next1 ${isRightDisabled1 ? 'disabled' : ''}`}
    onClick={scrollRight1}
    disabled={isRightDisabled1}
  >
    &gt;
  </button>
</div>

</div>
</div>
<hr className="ngang5" />




















    </div>
    
  );
}

export default GioiThieu;
