import React from "react";
import StatisticsCard from "../../Components/Ui/StaticsCard/StaticCard";
import { FaProductHunt, FaRedRiver, FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart3 } from "react-icons/bs";
import Chart from "./Chart";
import { CgWebsite } from "react-icons/cg";
import { useGetHome } from "../../api/home";
import LastUserTable from "./tables/LastUser/LastUserTable";
import LastWhatsappClickTable from "./tables/LastWhatsappClick/LastWhatsappClickTable";
import { BiSolidCategory, BiSolidCoupon } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";

export default function HomePage() {
  const { t } = useTranslation();
  
  const {data} = useGetHome()
  console.log(data);
  
  const cardsData = [
    {
      icon: <FaShoppingCart className="warning" size={20} />,
      count: data?.item_count, // Example count
      pathWhenClick: '/',
      titleKey: "item",
      contentKey: "item_in_your_Application"
    },
    {
      icon: <BiSolidCategory className="warning" size={20} />,
      count: data?.category_count, // Example count
      pathWhenClick: "/category",
      titleKey: "category",
      contentKey: "service_in_your_Application"
    },
    {
      icon: <BiSolidCoupon className="warning" size={20} />,
      count: data?.discount_count, // Example count
      pathWhenClick: "/",
      titleKey: "discount",
      contentKey: "discount_in_your_Application"
    }
  ];

  return (
    <>
      <Row xs={1} sm={1} md={1} lg={3} xl={3}>
        {cardsData.map((card, index) => (
          <Col key={index} style={{ padding: "0.5rem" }}>
            <div style={{ cursor: "pointer" }}>
              <StatisticsCard
                pathWhenClick={card.pathWhenClick}
                icon={card.icon}
                count={`${card.count ?? 1}`}
                CardContent={t(`You_have`) + "  " + ((card.count) ?? 1) + "  " + t(card.contentKey)}
                CardTitle={t(card.titleKey)}
              />
            </div>
          </Col>
        ))}
      </Row>

        
       {/*Chart Data  */}
      {/* <Row xs={1} sm={1} md={1} lg={2} xl={2} style={{ margin: "30px 0 " }}>
        <Chart dataMonth={data?.YOUR_DATA_AS_ARRAY_OBJECT}/>
      </Row> */}
    </>
  );
}
