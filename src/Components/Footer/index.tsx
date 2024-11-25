/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import "./index.scss";
import api from "../../Config/api";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
function Footer() {
  const [form] = useForm();
  const handleSubmit = async (values: any) => {
    console.log("values", values);
    try {
      const response = await api.post("save", values);
      console.log(response.data);
      form.resetFields();
      toast.success("Chúng tôi đã nhận được thông tin của bạn!");
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Cập nhật lại thông tin chính xác của bạn nhé!");
    }
  };
  return (
    <div className="Footer">
      <div className="footer">
        <div className="content1">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              width={100}
              src="https://png.pngtree.com/png-clipart/20230806/original/pngtree-women-logo-vector-png-image_9441642.png"
              alt=""
            />
            <h3>Dưỡng Tâm Viên</h3>
          </div>
          <p>
            <strong>Địa chỉ:</strong> Huyện Đô Lương, Tỉnh Nghệ An, Việt Nam
          </p>
          <p>
            <strong>Số điện thoại liên hệ:</strong> 0336651896
          </p>
          <p>
            <strong>Email:</strong> duongsinhspa@gmail.com
          </p>
          <div>
            <a href="https://www.facebook.com/nuthan.banggia.79">
              <img
                src="https://aquafield.vinwonders.com/themes/aqf/images/icon/img-fb.png"
                alt=""
              />
            </a>

            <img
              src="https://aquafield.vinwonders.com/themes/aqf/images/icon/img-insta.png"
              alt=""
            />
            <img
              width={23}
              src="https://static.vecteezy.com/system/resources/previews/023/741/129/non_2x/tiktok-logo-icon-social-media-icon-free-png.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="footer__reight">
            <h2 style={{ marginBottom: "25px" }}>
              Để lại thông tin để được tư vấn và hỗ trợ trải nghiệm thực tế
            </h2>
            <Form form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                className="form"
                // label="Điền tên của bạn:"
                name="name"
                rules={[
                  { required: true, message: "Vui lòng nhập đầy đủ Họ và Tên" },
                ]}
              >
                {/* <p>Điền tên của bạn:</p> */}
                <Input placeholder="Họ và tên" className="input" />
              </Form.Item>
              <Form.Item
                className="form"
                // label="Điền số điện thoại của bạn:"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại của bạn",
                  },
                ]}
              >
                {/* <p>Điền số điện thoại của bạn:</p> */}
                <Input placeholder="Số điện thoại" className="input" />
              </Form.Item>
              <Button htmlType="submit" className="gui">
                Gửi
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div>
        <div className="footer_line">
          <div className="line_footer"></div>
        </div>
        <div className="content_end">
          <a href="">© 2024 Spa. All rights reserved.</a>
          <a href="">Quyền riêng tư</a>
          <a href="">Điều khoản sử dụng</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
