import React from 'react';
import images from '~/assets/images';

const CardProduct = () => {
    return (
        <article className="product-item">
            <div className="image">
                <div className="flipper">
                    <img
                        src={images.product1}
                        alt="product-img"
                        className="lozad front"
                    />
                    <img
                        src={images.product2}
                        alt="product-img"
                        className="lozad back"
                    />
                </div>
            </div>
            <div className="caption">
                <h3 className="title">Kem Chống Nắng SPF 30+/PA++++</h3>
                <div className="desc">
                    Ánh nắng mặt trời với thành phần chủ yếu là các tia UV
                    A/B/C. Tiếp xúc với tia cực tím (tia UV) sẽ gây ra khoảng
                    90% các triệu chứng tổn thương da. Ánh nắng mặt trời là
                    nguyên nhân chính gây nên tình trạng: sạm – nám da, tàn
                    nhan, lão hoá da… nghiêm […]
                </div>
            </div>
        </article>
    );
};

export default CardProduct;
