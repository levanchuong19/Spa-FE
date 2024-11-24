import { useEffect } from "react";
import Carousel from "../../Components/Carousel";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Khởi tạo AOS với thời gian hiệu ứng là 2 giây
  }, []);
  return (
    <div>
      <Carousel />
      <div className="Home">
        <div className="home1">
          <div className="home__left" data-aos="fade-up">
            <h3 className="subject">
              Hành trình tái sinh, khơi nguồn sức khỏe tự nhiên
            </h3>
            <p className="content">
              "Trong nhịp sống bận rộn, đôi khi chúng ta quên đi việc chăm sóc
              bản thân, để rồi cơ thể lên tiếng với những cơn đau nhức, mệt mỏi.
              Tại <strong>Dưỡng Tâm Viên</strong>, chúng tôi mang đến cho bạn
              một không gian yên bình, nơi bạn có thể thư giãn, tái tạo năng
              lượng và tìm lại sự cân bằng trong cơ thể. 🌿 Với liệu pháp dưỡng
              sinh kết hợp tinh hoa thiên nhiên và kỹ thuật trị liệu hiện đại,
              bạn không chỉ cảm nhận sự thư thái mà còn cải thiện sức khỏe từ
              bên trong. Hãy để chúng tôi đồng hành trên hành trình giúp bạn
              khỏe hơn, đẹp hơn mỗi ngày."
            </p>
          </div>
          <div className="home__right" data-aos="fade-left">
            <img
              width={580}
              src="https://www.bongspa.com/images/users/images/28.png_tmp.png"
              alt=""
            />
          </div>
        </div>
        <div className="home">
          <div className="home__right">
            <img
              width={580}
              src="https://www.bongspa.com/images/users/images/44.png_tmp.png"
              alt=""
            />
          </div>
          <div className="home__right" data-aos="fade-right">
            <h3 className="subject">Giải phóng áp lực, khơi dậy sức sống</h3>
            <p className="content">
              "Những cơn đau nhức vùng cổ vai gáy, sự căng thẳng tích tụ lâu
              ngày không chỉ khiến cơ thể bạn mệt mỏi mà còn ảnh hưởng đến chất
              lượng cuộc sống. Hãy để <strong>Dưỡng Tâm Viên</strong> giúp bạn
              xua tan mọi căng thẳng với liệu pháp vật lý trị liệu chuyên sâu.
              💆‍♀️ Chúng tôi kết hợp kỹ thuật massage bấm huyệt cổ truyền và các
              phương pháp hiện đại, giúp máu lưu thông tốt hơn, giảm căng cứng
              cơ và cải thiện giấc ngủ. Không chỉ là liệu pháp, đó là món quà
              sức khỏe mà bạn xứng đáng nhận được."
            </p>
          </div>
        </div>
        <div className="home1">
          <div className="home__left" data-aos="fade-up">
            <h3 className="subject">Thư giãn sâu, tái tạo từ gốc rễ</h3>
            <p className="content">
              "Bạn có bao giờ dừng lại giữa bộn bề cuộc sống để lắng nghe cơ thể
              mình? Từng cơn đau mỏi, từng giấc ngủ không trọn vẹn là lời nhắc
              nhở rằng bạn cần chăm sóc bản thân nhiều hơn. 🌸 Tại{" "}
              <strong>Dưỡng Tâm Viên</strong>, liệu pháp dưỡng sinh toàn diện
              không chỉ giúp bạn thư giãn cơ bắp mà còn thanh lọc tâm trí. Từ
              đôi bàn chân được ngâm trong thảo dược đến vùng cổ vai gáy được
              massage chuyên sâu, mỗi bước đều hướng tới việc phục hồi năng
              lượng từ bên trong. Một cơ thể khỏe mạnh sẽ mang đến tâm hồn bình
              yên và sức sống mới."
            </p>
          </div>
          <div className="home__right" data-aos="fade-up">
            <img
              width={580}
              src="https://www.bongspa.com/images/users/images/3.png_tmp.png"
              alt=""
            />
          </div>
        </div>
        <div className="home">
          <div className="home__left">
            <img
              width={580}
              height={400}
              src="https://www.bongspa.com/images/products/pro2024101516117.png"
              alt=""
            />
          </div>
          <div className="home__right" data-aos="fade-right">
            <h3 className="subject">Nơi sức khỏe và sắc đẹp hòa quyện</h3>
            <p className="content">
              "Chăm sóc sức khỏe và sắc đẹp không chỉ là nhu cầu mà còn là hành
              trình trân trọng bản thân. Tại <strong>Dưỡng Tâm Viên</strong>,
              chúng tôi hiểu rằng mỗi người đều cần được nâng niu theo cách đặc
              biệt. 🌿 Với không gian spa ấm áp, liệu pháp trị liệu kết hợp tinh
              dầu thiên nhiên và đôi tay lành nghề, chúng tôi giúp bạn xóa tan
              mệt mỏi, cải thiện tuần hoàn máu và làm dịu những cơn đau nhức
              vùng cổ vai gáy. Hãy để chúng tôi giúp bạn sống khỏe hơn, đẹp hơn
              và yêu đời hơn mỗi ngày."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
