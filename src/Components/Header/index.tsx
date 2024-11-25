import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./index.scss";
import { Input } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="header">
        <nav className="header__left">
          <ul>
            <img
              width={90}
              src="https://png.pngtree.com/png-clipart/20230806/original/pngtree-women-logo-vector-png-image_9441642.png"
              alt=""
            />
            <li>
              <Link className="link" to="/">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link className="link" to="/san-pham">
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link className="link" to="/bang-gia">
                Bảng giá
              </Link>
            </li>
            <li>
              <Link className="link" to="/dich-vu">
                Dịch vụ
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__right">
          <ShoppingCartOutlined />
          <p className="input-wrapper">
            <Input className="input_search" />
            <SearchOutlined className="search" />
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
