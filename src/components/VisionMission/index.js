import React from 'react';
import images from '~/assets/images';
import './VisionMission.scss';

const VisionMission = () => {
    return (
        <section className="vision-mission-wrapper section">
            <div className="vision-mission-content">
                <h2 className="title">Tầm nhìn - Sứ mệnh</h2>
                <div className="cover-img">
                    <img
                        src="https://unila.com.vn/wp-content/uploads/2024/06/tamnhinsumenh.png"
                        alt="product img"
                    />
                </div>
                <div>
                    <div className="text-content">
                        <div className="vision">
                            <h3>Tầm Nhìn</h3>
                            <div className="description">
                                <p>
                                    Trong tương lai chúng tôi mong muốn cùng các
                                    đối tác/ chủ thương hiệu mỹ phẩm chinh phục
                                    chặng đường kinh doanh. Mở ra các cơ hội hợp
                                    tác bền vững, tạo ra những thương hiệu cá
                                    nhân độc quyền, sản phẩm luôn được kiểm định
                                    chất lượng theo đúng quy trình và được cấp
                                    đầy đủ giấy tờ chứng nhận chất lượng - an
                                    toàn của sản phẩm Và hơn hết là trở thành
                                    một người bạn đồng hành đáng tin cậy trong
                                    lòng người tiêu dùng trên hành trình hoàn
                                    thiện vẻ đẹp của bản thân. Đồng thời sẽ là
                                    một trong những công ty chuyên sản xuất mỹ
                                    phẩm chất lượng cao tại Việt Nam có uy tín
                                    và vị thế trong khu vực và Quốc Tế.
                                </p>
                            </div>
                        </div>
                        <div className="mission">
                            <h3>Sứ mệnh</h3>
                            <div className="description">
                                <p>
                                    Nhà Harold không chỉ chú trọng tới việc chăm
                                    sóc sắc đẹp mà còn bảo vệ sức khoẻ người
                                    tiêu dùng. Chúng tôi luôn hướng tới 1 cộng
                                    đồng yêu cái đẹp bền vững. Harold tin rằng
                                    mỗi sản phẩm đều mang trong mình một câu
                                    chuyện và sứ mệnh của chúng tôi là giúp cho
                                    khách hàng/ đối tác và mỗi người tiêu dùng
                                    viết nên câu chuyện đẹp nhất của chính họ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
