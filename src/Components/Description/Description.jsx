import React, { useState } from 'react';
import './Description.css'

export const Description = () => {
    const [activeTab, setActiveTab] = useState('description');

    const changeTab = (tab) => {
      setActiveTab(tab);
    };

  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div
          className={`description-nav-box ${activeTab === 'description' ? '' : 'fade'}`}
          onClick={() => changeTab('description')}
        >
          상세설명
        </div>
        <div
          className={`description-nav-box ${activeTab === 'reviews' ? '' : 'fade'}`}
          onClick={() => changeTab('reviews')}
        >
          상품평 (211)
        </div>
        <div
          className={`description-nav-box ${activeTab === 'detailInfo' ? '' : 'fade'}`}
          onClick={() => changeTab('detailInfo')}
        >
          상품문의 (211)
        </div>
        <div
          className={`description-nav-box ${activeTab === 'changeProduct' ? '' : 'fade'}`}
          onClick={() => changeTab('changeProduct')}
        >
          교환/반품 (211)
        </div>
      </div>

      <div className='descriptionbox-description'>
        {activeTab === 'description' && (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?
            </p>
          </>
        )}
        {activeTab === 'reviews' && (
          <>
           <p>
              dsdsdsLorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus ipsa quae voluptas nulla non officia
              adipisci inventore, neque, accusantium id illum enim voluptatem fugiat natus amet ea delectus molestiae?
            </p>
          </>
        )}
        {activeTab === 'detailInfo' && (
          <>
           <p>d언론·출판은 타인의 명예나 권리 또는 공중도덕이나 사회윤리를 침해하여서는 아니된다. 언론·출판이 타인의 명예나 권리를 침해한 때에는 피해자는 이에 대한 피해의 배상을 청구할 수 있다.

누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.

대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이 공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할 때에는 국회의장이 이를 공포한다.

모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 정부는 예산에 변경을 가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수 있다.

국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다.

모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.

대한민국은 민주공화국이다. 국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다.

제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다.
            </p>
          </>
        )}
        {activeTab === 'changeProduct' && (
          <>
           <p>
           교환/반품 요청이 기간이 지난 경우
소비자의 책임 있는 사유로 상품 등이 분실/파손/훼손된 경우 (단, 확인을 위한 포장 훼손 제외)
소비자의 사용/소비에 의해 상품 등의 가치가 현저히 감소한 경우 (예 : 식품, 화장품, 향수, 음반)
제품을 설치 또는 장착하였거나 개통한 경우 (예 : 전자제품, 컴퓨터, 휴대폰 등)
시간의 경과에 의해 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우 (신선식품과 같이 유통기한이 정해져 있는 상품)
복제가 가능한 상품 등의 포장을 훼손한 경우 (CD/DVD/GAME/BOOK의 경우 포장 개봉 시)
주문제작 상품 중 상품제작에 들어간 경우 (주문접수 후 개별생산, 맞춤 제작 등)

            </p>
          </>
        )}
      </div>
    </div>
  );
};