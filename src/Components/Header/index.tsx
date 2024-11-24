import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./index.scss";
import { Input } from "antd";
function Header() {
  return (
    <div className="Header">
      <div className="header">
        <div className="header__left">
          <ul>
            <img
              width={90}
              src="https://png.pngtree.com/png-clipart/20230806/original/pngtree-women-logo-vector-png-image_9441642.png"
              alt=""
            />
            <a href="/">
              <li>Trang chủ</li>
            </a>
            <a href="/san-pham">
              <li>Sản phẩm</li>
            </a>
            <a href="/bang-gia">
              <li>Bảng giá</li>
            </a>
            <a href="/dich-vu">
              <li>Dịch vụ</li>
            </a>
          </ul>
        </div>
        <div className="header__right">
          <ShoppingCartOutlined />
          <p className="input-wrapper">
            <Input className="input_search" />
            <SearchOutlined className="search" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
