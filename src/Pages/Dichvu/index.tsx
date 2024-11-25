import { useEffect, useState } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import api from "../../Config/api";
import { toast } from "react-toastify";
function Service() {
  const [form] = useForm();
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Khởi tạo AOS với thời gian hiệu ứng là 2 giây
  }, []);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await api.post("save", values);
      form.resetFields();
      setShowForm(false);
      toast.success("Chúng tôi đã nhận được thông tin của bạn!");
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Cập nhật lại thông tin chính xác của bạn nhé!");
    }
  };
  return (
    <div>
      <div className="content">
        <img
          width={"100%"}
          src="https://www.bongspa.com/images/general/banbanner%20(1)202481215403.png"
          alt=""
        />
        <div className="h1_content">
          <h1>Dưỡng Tâm Viên</h1>
        </div>
      </div>
      <div className="descreption">
        <p
          style={{
            color: "gray",
            width: "85%",
          }}
        >
          Các dịch vụ tại đây được thiết kế theo các bước trị liệu để điều trị
          các khuyết điểm, dấu hiệu lão hóa, mang lại cho bạn một làn da phục
          hồi, căng sáng và trẻ trung. Phong phú lựa chọn từ các sản phẩm thiên
          nhiên, hữu cơ đến chuyên nghiệp.
        </p>
      </div>
      <div>
        <div className="DichVu">
          <div className="dichvu1">
            <div className="dichvu__left" data-aos="fade-up">
              <h3 className="subject_content">Gội đầu dưỡng sinh</h3>
              <p className="dichvu_content">
                "Gội đầu dưỡng sinh là liệu pháp giúp thư giãn đầu óc và kích
                thích tuần hoàn máu, từ đó giúp tóc mọc khỏe mạnh, giảm căng
                thẳng, mệt mỏi. Các thảo dược thiên nhiên được sử dụng trong quá
                trình gội đầu giúp làm sạch da đầu, cải thiện sức khỏe tóc và
                tinh thần."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <img
                width={500}
                src="https://i.ibb.co/ZLLB4yr/fbfb068f-6590-4bef-9b7d-e79e35bd8c67.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="dichvu">
            <div className="dichvu__left" data-aos="fade-up">
              <img
                width={500}
                src="https://i.ibb.co/C1FCxdX/868ad290-72b8-4a77-b25e-bdeec4c95052.jpg"
                alt=""
              />
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <h3 className="subject_content">Đả thông kinh lạc</h3>
              <p className="dichvu_content">
                "Đả thông kinh lạc là phương pháp trị liệu cổ truyền giúp khai
                thông các đường kinh mạch, thúc đẩy lưu thông khí huyết trong cơ
                thể. Liệu pháp này giúp giảm căng thẳng, mệt mỏi, hỗ trợ làm dịu
                các cơn đau nhức và cải thiện sự linh hoạt của cơ thể."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
          </div>
          <div className="dichvu1">
            <div className="dichvu__left" data-aos="fade-up">
              <h3 className="subject_content">Lưu thông khí huyết</h3>
              <p className="dichvu_content">
                "Lưu thông khí huyết là phương pháp tăng cường tuần hoàn máu,
                giúp cơ thể hấp thụ dưỡng chất tốt hơn. Thông qua các kỹ thuật
                massage và xoa bóp đặc biệt, liệu pháp này giúp làm dịu các cơn
                đau, giảm căng thẳng, và nâng cao sức khỏe tổng thể."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <img
                width={500}
                src="https://wonderfulspa.vn/pl/img/36/vai-gay-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="dichvu">
            <div className="dichvu__left" data-aos="fade-up">
              <img
                width={500}
                height={450}
                src="https://i.ibb.co/cYNJpc0/906a3c12-eccd-4cdf-b019-e5dacf2c80e3.jpg"
                alt=""
              />
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <h3 className="subject_content">Xông hơi thảo dược</h3>
              <p className="dichvu_content">
                "Xông hơi thảo dược là liệu pháp thư giãn và thanh lọc cơ thể
                bằng hơi nước từ các loại thảo dược tự nhiên. Hơi thảo dược giúp
                mở lỗ chân lông, giải độc cơ thể, giảm căng thẳng và hỗ trợ làm
                dịu các vấn đề về da và hô hấp."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
          </div>
          <div className="dichvu1">
            <div className="dichvu__left" data-aos="fade-up">
              <h3 className="subject_content">Giác hơi trừ hàn</h3>
              <p className="dichvu_content">
                "Giác hơi trừ hàn là phương pháp truyền thống giúp giải quyết
                các vấn đề về cảm lạnh, tê bì và đau nhức cơ thể. Qua việc sử
                dụng cốc giác hơi, liệu pháp này giúp thúc đẩy lưu thông khí
                huyết, làm ấm cơ thể, loại bỏ độc tố và giảm các triệu chứng do
                nhiễm lạnh."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <img
                width={500}
                src="https://luaspa.vn/upload/post/16/60/22/cau-chuyen-ve-dich-vu-giac-hoi-thai-doc-danh-gio-gung-tai-lua-spa-20220911104232-730002.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="dichvu">
            <div className="dichvu__left" data-aos="fade-up">
              <img
                width={500}
                src="https://kbeauty.fpt.edu.vn/wp-content/uploads/2023/02/poly-k-beauty-2.jpg"
                alt=""
              />
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <h3 className="subject_content">Siết eo giảm mỡ</h3>
              <p className="dichvu_content">
                "Siết eo giảm mỡ là phương pháp giảm béo hiệu quả giúp định hình
                vòng eo và loại bỏ mỡ thừa. Thông qua các kỹ thuật massage và sử
                dụng các sản phẩm thiên nhiên, liệu pháp này giúp giảm thiểu mỡ
                bụng, mang lại làn da săn chắc và cơ thể thon gọn."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
          </div>
          <div className="dichvu1">
            <div className="dichvu__left" data-aos="fade-up">
              <h3 className="subject_content">Định hình cơ thể</h3>
              <p className="dichvu_content">
                "Định hình cơ thể là liệu pháp giúp cải thiện vóc dáng bằng các
                phương pháp massage chuyên sâu, kết hợp với chế độ ăn uống và
                chăm sóc da phù hợp. Liệu pháp này không chỉ giúp giảm béo mà
                còn giúp cơ thể trở nên săn chắc và dẻo dai."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <img
                width={500}
                src="https://i.ibb.co/6PxzGBR/f6345042-8110-4010-abdf-205a9c178cd1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="dichvu">
            <div className="dichvu__left" data-aos="fade-up">
              <img
                width={500}
                src="https://spamoclinhduong.com/public/media/images/pexels-photo-5240677.jpg"
                alt=""
              />
            </div>
            <div className="dichvu__right" data-aos="fade-left">
              <h3 className="subject_content">Giảm thiểu tê bì chân tay</h3>
              <p className="dichvu_content">
                "Giảm thiểu tê bì chân tay là liệu pháp giúp làm dịu các cảm
                giác tê bì, đau nhức do các vấn đề về tuần hoàn máu hoặc thần
                kinh. Các kỹ thuật xoa bóp và kích thích huyệt đạo được sử dụng
                để cải thiện lưu thông máu, giảm căng thẳng, mang lại cảm giác
                thoải mái cho cơ thể."
              </p>
              <Button
                onClick={() => setShowForm(true)}
                style={{ marginTop: "30px" }}
                type="primary"
                danger
              >
                Đăng kí tư vấn
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        onOk={() => setShowForm(false)}
        open={showForm}
        onCancel={() => setShowForm(false)}
        footer={null}
      >
        <Form
          labelCol={{ span: 24 }}
          form={form}
          style={{ margin: "27px", textAlign: "center" }}
        >
          <h1 style={{ color: "brown" }}>Thông Tin Tư Vấn</h1>
          <p>
            Vui lòng điền đầy đủ và chính xác thông tin vào biểu mẫu bên dưới.
          </p>
          <p style={{ marginTop: "7px", marginBottom: "25px" }}>
            <strong style={{ color: "orange" }}>Dưỡng Tâm Viên </strong> sẽ liên
            lạc với bạn ngay nhé!
          </p>
          <div style={{ display: "flex", gap: "30px" }}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập đầy đủ Họ và Tên" },
                { min: 2, message: "Tên phải có ít nhất 2 ký tự" },
              ]}
            >
              <Input placeholder="Họ và Tên (*)" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại của bạn",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Số điện thoại không hợp lệ (10 chữ số)",
                },
              ]}
            >
              <Input placeholder="Số điện thoại (*)" />
            </Form.Item>
          </div>
          <Form.Item name="email">
            <Input
              placeholder="Email"
              style={{ maxWidth: "395px", marginRight: "50px" }}
            />
          </Form.Item>
          <Button onClick={handleSubmit} type="primary">
            Liên Hệ Tư Vấn{" "}
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default Service;
