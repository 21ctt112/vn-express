import moment from "moment";
import './Header.scss'
import { FaSearch, FaRegBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const listPage = [
    { name: "Thoi su", path: "/thoi-su" },
    { name: "Goc nhin", path: "/goc-nhin" },
    { name: "The gioi", path: "/the-gioi" },
    { name: "Video", path: "/video" },
    { name: "Podcasts", path: "/podcasts" },
    { name: "Kinh doanh", path: "/kinh-doanh" },
    { name: "Bat dong san", path: "/bat-dong-san" },
    { name: "Khoa hoc", path: "/khoa-hoc" },
    { name: "Giai tri", path: "/GiaiTriPage" },
    { name: "The thao", path: "/the-thao" },
    { name: "Phap luat", path: "/phap-luat" },
    { name: "Giao duc", path: "/giao-duc" },
    { name: "Suc khoe", path: "/suc-khoe" },
    { name: "Doi song", path: "/doi-song" },
    { name: "Du lich", path: "/du-lich" },
    { name: "So hoa", path: "/so-hoa" },
    { name: "Xe", path: "/xe" },
    { name: "Y kien", path: "/y-kien" },
    { name: "Tam su", path: "/tam-su" }
  ];

  return <>
    <div className="container d-flex justify-content-between py-2">
      <div className="d-flex">
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <div>
          {moment().format('dddd, ')}{moment().subtract(10, 'days').calendar()}
        </div>
        <div>
          TP. Bien Hoa

        </div>
      </div>
      <div>
        <FaSearch />
        <button>
          <CiUser />
          Dang nhap
        </button>
        <FaRegBell />
      </div>
    </div>
    <div className="container-fluid d-flex header-line2">
      <div className="d-flex" style={{ margin: '0 auto' }}>
        <div className="container-icon-home text-center"><IoMdHome size={20} /></div>
        {listPage.map((item, index) => {
          return <div className="mx-2" key={index}>
            <a style={{ textDecoration: 'none', color: '#000' }} href={item.path}>{item.name}</a>
          </div>
        })}
        <div><IoMenu /></div>
      </div>
    </div>
  </>
}
