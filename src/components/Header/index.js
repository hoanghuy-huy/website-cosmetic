import React from 'react';
import './Header.scss';
import images from '~/assets/images';
function Header() {
    return (
        <div className="header-wrapper section">
            <div className="header-content">
                <h3>Công ty TNHH HAROLD</h3>
                <h1> Câu chuyện <br /> <span>" THƯƠNG HIỆU "</span></h1>
                <p>
                    Công ty TNHH HAROLD là một trong những thương hiệu nổi bật
                    trong ngành sản xuất mỹ phẩm chất lượng cao, với tất cả sản
                    phẩm được sản xuất tại nhà máy đạt tiêu chuẩn CGMP ASEAN,
                    chứng nhận bởi SGS. Nhà Harold luôn đặt niềm tin vào những
                    thành tựu của y học và khoa học dành cho ngành công nghiệp
                    sản xuất mỹ phẩm, vì lẽ đó mà đơn vị chúng tôi luôn chủ động
                    hợp tác cùng các Chuyên gia đầu ngành - Bác sĩ - Nhà nghiên
                    cứu để làm sao phát triển và tìm ra những hoạt chất mới, an
                    toàn, hiệu quả. Chúng tôi tự tin mang đến cho người tiêu
                    dùng những dòng sản phẩm cải tiến, chất lượng không thua kém
                    các thương hiệu quốc tế, từ đó tạo nền tảng vững chắc cho
                    việc khẳng định thương hiệu và mở ra cơ hội phát triển cùng
                    các đối tác tiềm năng trong tương lai.
                </p>
            </div>
            <div className="header-img">
                <img
                    src={images.banner}
                    alt="banner image"
                    className="banner-img"
                />
            </div>
        </div>
    );
}

export default Header;
