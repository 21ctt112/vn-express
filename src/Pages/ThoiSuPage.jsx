// Chu Ngọc Sơn
// Vũ Văn Phú
// Trần Gia Huy
// Nguyễn Sơn Phi Hoàng
// Đỗ Khắc Đức
import React, { useState, useRef } from 'react';
import './ThoiSuPage.css';

export default function ThoiSuPage() {
  return <>

    <div className="content">
      <h3>Thời sự</h3>
      <div>Chính trị</div>
      <div>Dân sinh</div>
      <div>Lao động - Việc làm</div>
      <div>Giao thông</div>
      <div>Mekong</div>
      <div>Quỹ Hy Vọng</div>
    </div>
    <hr />

    <div className="content-container">


      <div className="container">
        <div className="full">
          <div className="container1">
            <img className="top" src="/img/tlp.jpg" alt="" />
            <div className="title">
              <h3>Thủ tướng đồng ý nghỉ Tết 9 ngày từ 26 tháng chạp</h3>
              <p>Thủ tướng Phạm Minh Chính đồng ý nghỉ Tết Ất Tỵ 9 ngày, từ 26 tháng chạp đến hết mùng 5 tháng giêng (25/1-2/2/2025).
                <br />
                55' trước</p>
            </div>
          </div>
          <hr />
          <div className="three-img">
            <div className="first-img">
              <img src="/img/first-img.jpg" alt="" />
              <h3>Người dân 80 phường sáp nhập ở TP HCM không cần đổi giấy tờ ngay</h3>
            </div>
            <div className="first-img">
              <img src="/img/kho_khan.jpg" alt="" />
              <h3>Tháo gỡ khó khăn các dự án BOT thua lỗ</h3>
            </div>
            <div className="first-img">
              <img src="/img/cong_chuc.jpg" alt="" />
              <h3>Thủ tục công chứng di chúc sẽ được thực hiện ngay tại nhà</h3>
            </div>
          </div>
          <hr />
        </div>

        <div className='qc-right'>
          <img src="/img/qc-right.gif" alt="" />
        </div>
      </div>
    </div>

    <div className='container2'>
      <div className='col-left'>
        <div className='item-news'>


          <h3 class="title-news">
            <a href="https://vnexpress.net/bai-nuoi-hau-trai-phep-bua-vay-song-4820711.html"
              title="Bãi nuôi hàu trái phép bủa vây sông">Bãi nuôi hàu trái phép bủa vây sông
            </a>
          </h3>

          <div className='thumbart'>
            <a href="https://vnexpress.net/bai-nuoi-hau-trai-phep-bua-vay-song-4820711.html" title="Bãi nuôi hàu trái phép bủa vây sông">
              <img
                src="/img/bainuoihau.jpg"
                alt="Bãi nuôi hàu trái phép bủa vây sông"
                className='image'
              />
            </a>

            <div className='description'>
              <a href="https://vnexpress.net/bai-nuoi-hau-trai-phep-bua-vay-song-4820711.html" title="Bãi nuôi hàu trái phép bủa vây sông">
                <div className="location-stamp">Nghệ An</div>
                Lòng sông, cửa biển ở thị xã Hoàng Mai, huyện Quỳnh Lưu bị bủa vây bởi hàng nghìn cọc tre, bè mảng nuôi hàu khiến dòng chảy thay đổi, cản trở tàu thuyền.
              </a>
            </div>
          </div>
          <hr />

        </div>

        <div className='item-news'>

          <h3 class="title-news">
            <a href="https://vnexpress.net/thao-go-kho-khan-cac-du-an-bot-thua-lo-4820113.html"
              title="Tháo gỡ khó khăn các dự án BOT thua lỗ">Tháo gỡ khó khăn các dự án BOT thua lỗ
            </a>
          </h3>

          <div className='thumbart'>
            <a href="https://vnexpress.net/thao-go-kho-khan-cac-du-an-bot-thua-lo-4820113.html" title="Tháo gỡ khó khăn các dự án BOT thua lỗ">
              <img
                src="/img/botthualo.jpg"
                alt="Tháo gỡ khó khăn các dự án BOT thua lỗ"
                className='image'
              />
            </a>

            <div className='description'>
              <a href="https://vnexpress.net/thao-go-kho-khan-cac-du-an-bot-thua-lo-4820113.html" title="Tháo gỡ khó khăn các dự án BOT thua lỗ">
                Bộ Giao thông Vận tải đề xuất Luật PPP sửa đổi quy định có thể sử dụng vốn nhà nước để chấm dứt hợp đồng trước hạn, hoặc hỗ trợ dự án PPP triển khai trước năm 2021.
              </a>
            </div>
          </div>
          <hr />

        </div>

        <div className='item-news'>

          <h3 class="title-news">
            <a href="https://vnexpress.net/thu-tuc-cong-chung-di-chuc-se-duoc-thuc-hien-ngay-tai-nha-4820587.html"
              title="Thủ tục công chứng di chúc sẽ được thực hiện ngay tại nhà">Thủ tục công chứng di chúc sẽ được thực hiện ngay tại nhà
            </a>
          </h3>

          <div className='thumbart'>
            <a href="https://vnexpress.net/thu-tuc-cong-chung-di-chuc-se-duoc-thuc-hien-ngay-tai-nha-4820587.html" title="Thủ tục công chứng di chúc sẽ được thực hiện ngay tại nhà">
              <img
                src="/img/thutuccongchung.jpg"
                alt="Thủ tục công chứng di chúc sẽ được thực hiện ngay tại nhà"
                className='image'
              />
            </a>

            <div className='description'>
              <a href="https://vnexpress.net/thu-tuc-cong-chung-di-chuc-se-duoc-thuc-hien-ngay-tai-nha-4820587.html" title="Thủ tục công chứng di chúc sẽ được thực hiện ngay tại nhà">
                Chiều 26/11, Quốc hội thông qua luật Công chứng sửa đổi, trường hợp được công chứng ngoài trụ sở được mở rộng, trong đó có người lập di chúc tại chỗ ở.
              </a>
            </div>
          </div>
          <hr />

        </div>

        <div className='item-news'>

          <h3 class="title-news">
            <a href="https://vnexpress.net/tiem-kich-truc-thang-luyen-tap-trinh-dien-trong-trien-lam-quoc-phong-4820562.html"
              title="Tiêm kích, trực thăng luyện tập trình diễn trong triển lãm quốc phòng">Tiêm kích, trực thăng luyện tập trình diễn trong triển lãm quốc phòng
            </a>
          </h3>

          <div className='thumbart'>
            <a href="https://vnexpress.net/tiem-kich-truc-thang-luyen-tap-trinh-dien-trong-trien-lam-quoc-phong-4820562.html" title="Tiêm kích, trực thăng luyện tập trình diễn trong triển lãm quốc phòng">
              <img
                src="/img/tiemkich.jpg"
                alt="Tiêm kích, trực thăng luyện tập trình diễn trong triển lãm quốc phòng"
                className='image'
              />
            </a>

            <div className='description'>
              <a href="https://vnexpress.net/tiem-kich-truc-thang-luyen-tap-trinh-dien-trong-trien-lam-quoc-phong-4820562.html" title="Tiêm kích, trực thăng luyện tập trình diễn trong triển lãm quốc phòng">
                <div className="location-stamp">Hà Nội</div>
                14 chiếc trực thăng Mi các loại, Su-30MK2 chia đội hình lần lượt bay qua lễ đài trong tiếng nhạc, cờ hoa biểu diễn của 1.600 người đến từ các lực lượng trên sân bay Gia Lâm.
              </a>
            </div>
          </div>
          <hr />

        </div>

        <div className='item-news'>

          <h3 class="title-news">
            <a href="https://vnexpress.net/ham-chui-o-cua-ngo-phia-dong-tp-hcm-gan-8-nam-dang-do-4820601.html"
              title="Hầm chui ở cửa ngõ phía Đông TP HCM gần 8 năm dang dở">Hầm chui ở cửa ngõ phía Đông TP HCM gần 8 năm dang dở
            </a>
          </h3>

          <div className='thumbart'>
            <a href="https://vnexpress.net/ham-chui-o-cua-ngo-phia-dong-tp-hcm-gan-8-nam-dang-do-4820601.html" title="Hầm chui ở cửa ngõ phía Đông TP HCM gần 8 năm dang dở">
              <img
                src="/img/hamchui.jpg"
                alt="Hầm chui ở cửa ngõ phía Đông TP HCM gần 8 năm dang dở"
                className='image'
              />
            </a>

            <div className='description'>
              <a href="https://vnexpress.net/ham-chui-o-cua-ngo-phia-dong-tp-hcm-gan-8-nam-dang-do-4820601.html" title="Hầm chui ở cửa ngõ phía Đông TP HCM gần 8 năm dang dở">
                Hầm chui ở tuyến song hành xa lộ Hà Nội đoạn qua nút giao Trạm 2 gần 8 năm chưa thể hoàn thành vì vướng dãy nhà gần KDL Suối Tiên, xe phải đi vòng hơn một km.
              </a>
            </div>
          </div>
          <hr />

        </div>

        <div className='item-news'>

          <h3 class="title-news">
            <a href="https://vnexpress.net/cua-ngo-tp-hcm-un-tac-5-km-sau-tai-nan-4820469.html"
              title="Cửa ngõ TP HCM ùn tắc 5 km sau tai nạn">Cửa ngõ TP HCM ùn tắc 5 km sau tai nạn
            </a>
          </h3>

          <div className='thumbart'>
            <a href="https://vnexpress.net/cua-ngo-tp-hcm-un-tac-5-km-sau-tai-nan-4820469.html" title="Cửa ngõ TP HCM ùn tắc 5 km sau tai nạn">
              <img
                src="/img/cuangotphcm.jpg"
                alt="Cửa ngõ TP HCM ùn tắc 5 km sau tai nạn"
                className='image'
              />
            </a>

            <div className='description'>
              <a href="https://vnexpress.net/cua-ngo-tp-hcm-un-tac-5-km-sau-tai-nan-4820469.html" title="Cửa ngõ TP HCM ùn tắc 5 km sau tai nạn">
                Sau tai nạn giữa xe tải và ôtô 5 chỗ, đại lộ Nguyễn Văn Linh ùn tắc kéo dài 5 km trong hai giờ khiến phương tiện đi lại khó khăn, sáng 26/11.
              </a>
            </div>
          </div>
          <hr />

        </div>

        <div className='item-news'>

          <h3 class="title-news">
            <a href="https://yhoc.co/60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok?utm_source=Native32204&utm_medium=60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok&utm_campaign=60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok&utm_sma=13178%7C2000040985%7C2000313248%7Cdlg2l5aih0v1uc4f.1725987410.des"
              title="Bí quyết bỏ thuốc lá thành công chỉ sau 5 ngày">Bí quyết bỏ thuốc lá thành công chỉ sau 5 ngày
            </a>
          </h3>

          <div className='thumbart'>
            <a href="https://yhoc.co/60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok?utm_source=Native32204&utm_medium=60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok&utm_campaign=60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok&utm_sma=13178%7C2000040985%7C2000313248%7Cdlg2l5aih0v1uc4f.1725987410.des" title="Bí quyết bỏ thuốc lá thành công chỉ sau 5 ngày">
              <img
                src="/img/bainuoihau.jpg"
                alt="Bí quyết bỏ thuốc lá thành công chỉ sau 5 ngày"
                className='image'
              />
            </a>

            <div className='description'>
              <a href="https://yhoc.co/60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok?utm_source=Native32204&utm_medium=60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok&utm_campaign=60-nam-hut-thuoc-la-toi-da-bo-thanh-cong-sau-5-ngay-nho-boni-smok&utm_sma=13178%7C2000040985%7C2000313248%7Cdlg2l5aih0v1uc4f.1725987410.des" title="Bí quyết bỏ thuốc lá thành công chỉ sau 5 ngày">
                Giải pháp từ thảo dược giúp việc bỏ thuốc lá không còn là vấn đề nan giải.
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className="right-column-container">

        <div class="top-banner">
          <a href="https://vnexpress.net/thoi-su/huong-toi-ky-nguyen-moi"><img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9529/ldpr/1006103/logo-kynguyen.png" alt="" /></a>
          <div class="topics">
            <span class="topic">Việt Nam 2045</span>
            <span class="topic">Chống lãng phí</span>
            <span class="topic">Tháo gỡ thể chế</span>
          </div>
        </div>

        <div class="top-section">
          <div class="main-highlight">
            <div class="highlight-image">
              <img src="https://i1-vnexpress.vnecdn.net/2024/11/19/anh-1-1731982952-1731992263.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=TfXxeKhms9ltidMVwrFnZA" alt="Highlight" />
            </div>
            <div class="highlight-content">
              <h3>Dự án thủy sản rộng hơn 20 ha bỏ hoang</h3>
              <p><span>18</span> bình luận</p>
            </div>
          </div>
          <div class="side-links">
            <ul>
              <li><strong>Tổng Bí thư:</strong> Cần cơ chế sử dụng người năng lực nổi trội</li>
              <li><strong>'Không thay đổi cơ chế tài chính cho khoa học,</strong> Việt Nam sẽ tụt hậu'</li>
            </ul>
          </div>
        </div>

        <div className="Content2">
          {/* Cột bên trái */}
          <div className="left-column2">
            <div className="tab-menu2">
              <a href="https://vnexpress.net/giai-tri/gioi-sao" className="no-underline">
                <div className="tab-item active2">Chính trị</div>
              </a>
            </div>
            <a href="https://vnexpress.net/y-nhi-dien-mot-ao-giap-4819421.html" className="no-underline">
              <div className="news-item2">
                <img
                  src="https://i1-vnexpress.vnecdn.net/2024/11/27/ta-ng-duya-t-la-ha-i-bia-n-ss-4658-4281-1732675139.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=exYss3SngEztz-3OQYdGZQ"
                  alt="A person in a red academic gown holding a bouquet of flowers"
                />
                <div className="news-item-content2">
                  <h3>Quốc hội duyệt 122.000 tỷ đồng phát triển văn hóa</h3>
                  <p>
                    <span className="location">TP HCM - </span>
                    Theo Nghị quyết Quốc hội thông qua sáng 27/11, tổng nguồn vốn thực hiện Chương trình mục tiêu quốc gia phát triển văn hóa giai đoạn 2025-2030 tối thiểu 122.250 tỷ đồng.
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
                <h3>Tài chính công đoàn có thể dùng xây nhà ở xã hội</h3>
                <p>
                  Luật mới về công đoàn bổ sung nhiệm vụ chi tài chính công đoàn để đầu tư xây dựng nhà ở xã hội cho công nhân thuê, góp phần cải thiện điều kiện sống của người lao động.
                </p>
              </div>
            </a>
            <hr className="ngang-3" ></hr>
            <a href="https://vnexpress.net/thanh-thuy-va-dan-my-nhan-chung-dien-tren-tham-do-4819384.html" className="no-underline">
              <div className="news-list-item2">
                <h3>Người từ 18 tuổi mới được điều khiển drone, flycam</h3>
                <p>
                  Người điều khiển drone, flycam phải đủ 18 tuổi, có năng lực hành vi dân sự và có giấy phép điều khiển bay do cơ quan có thẩm quyền cấp. 20
                </p>
              </div>
            </a>
            <hr className="ngang-3" ></hr>
            <a href="https://vnexpress.net/thong-dong-voi-bong-nguon-cam-hung-cua-hong-nhung-4819030.html" className="no-underline">
              <div className="news-list-item2">
                <h3>Thủ tục công chứng di chúc sẽ được thực hiện ngay tại nhà</h3>
                <p>
                  Chiều 26/11, Quốc hội thông qua luật Công chứng sửa đổi, trường hợp được công chứng ngoài trụ sở được mở rộng, trong đó có người lập di chúc tại chỗ ở.
                </p>
              </div>
            </a>

          </div>
        </div>

        <hr class="ngang4"></hr>
        <div className="xanhla">
          <a href="https://vnexpress.net/gs-phan-van-truong-chi-can-lam-tu-te-san-pham-nao-cung-ban-duoc-4817253.html">
            <img src="./xanhla.png" alt="" />
          </a>
        </div>
        <hr class="ngang4"></hr>
        <div className="Content3">
          {/* Cột bên trái */}
          <div className="left-column2">
            <div className="tab-menu3">
              <a href="" className="no-underline">
                <div className="tab-item active3">Giao thông</div>
              </a>
            </div>
            <a href="https://vnexpress.net/quoc-hoi-duyet-122-000-ty-dong-phat-trien-van-hoa-4820837.html" className="no-underline">
              <div className="news-item2">
                <img
                  src="https://i1-vnexpress.vnecdn.net/2024/11/26/tram-thu-phi-7962-1572672055-5-9962-9613-1732612334.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=SxKwbBaWoskCSy7F2S27dQ"
                  alt="A person in a red academic gown holding a bouquet of flowers"
                />
                <div className="news-item-content2">
                  <h3>Tháo gỡ khó khăn các dự án BOT thua lỗ</h3>
                  <p>
                    Bộ Giao thông Vận tải đề xuất Luật PPP sửa đổi quy định có thể sử dụng vốn nhà nước để chấm dứt hợp đồng trước hạn, hoặc hỗ trợ dự án PPP triển khai trước năm 2021.
                  </p>
                </div>
              </div>
            </a>

          </div>

          {/* Cột bên phải */}
          <div className="right-column2">
            <a href="https://vnexpress.net/tai-chinh-cong-doan-co-the-dung-xay-nha-o-xa-hoi-4820815.html" className="no-underline">
              <div className="news-list-item2">
                <h3>Hầm chui ở cửa ngõ phía Đông TP HCM gần 8 năm dang dở</h3>
                <p>
                  Hầm chui ở tuyến song hành xa lộ Hà Nội đoạn qua nút giao Trạm 2 gần 8 năm chưa thể hoàn thành vì vướng dãy nhà gần KDL Suối Tiên, xe phải đi vòng hơn một km. 19
                </p>
              </div>
            </a>
            <hr className="ngang-3" ></hr>
            <a href="https://vnexpress.net/tang-ve-xem-phim-chien-dia-tu-thi-4818349.html" className="no-underline">
              <div className="news-list-item2">
                <h3>Bình Định xây đường băng số 2 sân bay Phù Cát</h3>
                <p>
                  Dự án đầu tư xây đường cất hạ cánh số 2 và các công trình đồng bộ tại Phù Cát có tổng mức đầu tư 3.010 tỷ đồng, do UBND tỉnh Bình Định là cơ quan chủ quản. 10
                </p>
              </div>
            </a>
            <hr className="ngang-3" ></hr>
            <a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/countdown-paul-vs-tyson-752" className="no-underline">
              <div className="news-list-item2">
                <h3>TP HCM sẽ làm Metro Bến Thành - Tham Lương bằng vốn ngân sách</h3>
                <p>
                  Thành phố sẽ triển khai tuyến Metro số 2, đoạn Bến Thành - Tham Lương dài hơn 11 km bằng ngân sách thay vì vốn ODA như kế hoạch. 91
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  </>
}
