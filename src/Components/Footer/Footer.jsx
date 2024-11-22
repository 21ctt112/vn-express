import { IoIosMail } from "react-icons/io";
import { FcAdvertising } from "react-icons/fc";

export default function Footer() {
  return <>
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="col_1">
          <div>
            <div>
              Trang chủ
            </div>
            <div>
              Video
            </div>
            <div>
              Podcasts
            </div>
            <div>
              Ảnh
            </div>
            <div>
              Infographics
            </div>
          </div>
          <div>
            <div>
              Mới nhất
            </div>
            <div>
              Xem nhiều
            </div>
            <div>
              Tin nóng
            </div>
            <div>
              Newsletter
            </div>
          </div>
        </div>
        <div className="col_2">
          <div>Thời sự</div>
          <div> Góc nhìn</div>
          <div>Thế giới</div>
          <div>Kinh doanh</div>
          <div>Bất động sản</div>
          <div>Giải trí</div>
        </div>
        <div className="col_3">
          <div>Thời sự</div>
          <div> Góc nhìn</div>
          <div>Thế giới</div>
          <div>Kinh doanh</div>
          <div>Bất động sản</div>
          <div>Giải trí</div>
        </div>
        <div className="col_4">
          <div>Thời sự</div>
          <div> Góc nhìn</div>
          <div>Thế giới</div>
          <div>Kinh doanh</div>
          <div>Bất động sản</div>
          <div>Giải trí</div>
        </div>
        <div className="col_5">
          <div>Thời sự</div>
          <div> Góc nhìn</div>
          <div>Thế giới</div>
          <div>Kinh doanh</div>
          <div>Bất động sản</div>
          <div>Giải trí</div>
        </div>
        <div>
          Tải ứng dụng
          <div className="d-flex gap-2">
            <button>VNExpress</button>
            <button>International</button>
          </div>
          Liên hệ
          <div className="d-flex gap-2">
            <button><IoIosMail /> Toa soan</button>
            <button><FcAdvertising /> Quang cao</button>
          </div>
          Đường dây nóng
          <div className="d-flex gap-2">
            <div>083.888.0123 <br /> Ha Noi</div>
            <div>082.233.3555 <br /> HCM</div>
          </div>
        </div>
      </div>
    </div>
  </>
}