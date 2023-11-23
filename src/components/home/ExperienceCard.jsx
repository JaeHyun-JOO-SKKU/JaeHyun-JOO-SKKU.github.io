import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  // 각 카테고리별 테두리 색상 지정
  const borderColor = {
    'Band': '#87CEEB',  // 밴드 대회 입상 카테고리에 대한 색상
    'Album': '#E6E6FA', // 앨범 발매 카테고리에 대한 색상
    'Coding': '#98FF98', // 학업 관련 수상 카테고리에 대한 색상
  };

  return (
    <Col lg="6">
      <div className="pt-2 pb-2 mt-2 text-center" style={{ border: `5px solid ${borderColor[data.category]}`, borderRadius: '50px', padding: '20px' }}>
        <img className=" bg-white mt-3 mb-3" src={data.companylogo} alt="" style={{ width: '300px', height: '300px', borderRadius: '100%' }} />
        <p className="lead">
          {data.role}
          <br />
          <span style={{ fontWeight: 'bold' }}>
            {data.date}
          </span>
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;
