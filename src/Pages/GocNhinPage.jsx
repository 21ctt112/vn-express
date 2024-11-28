// Nguyễn Duy Độ
// Hoàng Gia Huy
// Võ Tuấn Sĩ
import "../styles/GocNhinPage.css";
import ArticleCard from "../Components/ArticleCard/ArticleCard";

const GocNhinPage = () => {
  const authorName = [
    "Đỗ Thành Long",
    "Phạm Tuấn Hiệp",
    "Lâm Vũ",
    "Trần Thị Thủy",
    "Trần Long",
    "Đặng Hùng Võ",
    "Đức Nguyễn",
    "Trần Thế Công",
    "Hồng Phúc",
    "Nguyễn Minh Hoàng",
  ];
  const article = [
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
    {
      title: "Làm chủ đường sắt cao tốc",
      description:
        "Kỹ sư Việt Nam cần được 'nhúng' vào việc cùng đồng nghiệp nước ngoài trong mọi khâu xây dựng đường sắt cao tốc.",
      category: "Kinh doanh & quản trị",
      commentCount: 42,
      author: "Bùi Mẫn",
      authorImage:
        "https://i1-vnexpress.vnecdn.net/2023/07/03/manpng-1688317597.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pl53rQF2j-gHMUGW0nLCVQ",
    },
  ];
  return (
    <div>
      <section className="section top-header top-header-folder">
        <div className="container-GocNhinPage">
          <div className="width_common top-folder flexbox">
            <div className="tille-folder">Góc nhìn</div>
          </div>
        </div>
      </section>
      <section className="section section_container">
        <div className="container-GocNhinPage flexbox">
          <div className="col-left-home-gn">
            <div className="author-section">
              <h2 className="section-title">Tác giả</h2>
              <ul className="authors-list">
                {authorName.map((author, index) => (
                  <li key={index}>{author}</li>
                ))}
                <li className="see-more">Xem thêm »</li>
              </ul>
              <div className="submit-section">
                <button className="submit-button">Gửi bài viết</button>
                <div className="submit-email">gocnhin@vnexpress.net</div>
              </div>
            </div>
          </div>
          <div className="col-left-folder-v2 col-center-home-gn">
            {article.map((item, index) => (
              <ArticleCard
                key={index}
                title={item.title}
                description={item.description}
                category={item.category}
                commentCount={item.commentCount}
                author={item.author}
                authorImage={item.authorImage}
              />
            ))}
          </div>
          <div className="col-right-folder-v2 col-right-home-gn">
            <div className="topic-section">
              <h3 className="section-title">Chủ đề</h3>
              <ul className="topic-list">
                <li>Chính trị & chính sách</li>
                <li>Y tế & sức khỏe</li>
                <li>Kinh doanh & quản trị</li>
                <li>Giáo dục & tri thức</li>
                <li>Môi trường</li>
                <li>Văn hóa & lối sống</li>
                <li>Covid-19</li>
              </ul>
            </div>

            <div className="most-read-section">
              <h3 className="section-title">Đọc nhiều</h3>
              <div className="article-list">
                <div className="article-preview">
                  <a href="google.com" className="article-link">
                    <h4 className="article-title">
                      'Nhập khẩu' lao động châu Phi
                    </h4>
                    <p className="article-description">
                      Tôi không bất ngờ khi gần đây người dân Hà Nội nhận ra sự
                      hình thành của "xóm lao động châu Phi".
                    </p>
                    <div className="article-meta">
                      <span className="comment-count">78</span>
                      <span className="author">Võ Nhật Vinh</span>
                    </div>
                  </a>
                </div>

                <div className="article-preview">
                  <a href="google.com" className="article-link">
                    <h4 className="article-title">Lựa chọn của người Mỹ</h4>
                    <p className="article-description">
                      Bầu cử tổng thống Mỹ, thú vị thay, không chỉ khiến nước Mỹ
                      chia rẽ, mà người Việt Nam cũng chia phe tranh cãi.
                    </p>
                    <div className="article-meta">
                      <span className="comment-count">63</span>
                      <span className="author">Lâm Vũ</span>
                    </div>
                  </a>
                </div>

                <div className="article-preview">
                  <a href="google.com" className="article-link">
                    <h4 className="article-title">Mặc đồ yoga ra phố</h4>
                    <p className="article-description">
                      Trang phục đẹp trước hết phải phù hợp với không gian hoặc
                      tính chất của
                    </p>
                    <div className="article-meta">
                      <span className="comment-count">45</span>
                      <span className="author">Nguyễn Văn A</span>
                    </div>
                  </a>
                </div>
              </div>
              <button className="see-more-button">Xem thêm</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GocNhinPage;
