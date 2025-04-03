import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    background-color: #f9f9f9;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-width: 400px;
    margin: 20px auto;
`;

const Title = styled.h2`
  margin: 0;
  color: #333;
`;

const Paragraph = styled.p`
  color: #555;
  margin: 8px 0;
`;

function DiaryCard({ date, weather, content }){
    return(
        <div className="diary-card">
            <h2>{date}</h2>
            <p><strong>날씨 : </strong>{weather}</p>
            <p><strong>내용 : </strong>{content}</p>
        </div>
    );
}

export default DiaryCard; //자바스크립트에서 컴포넌트를 다른 파일에서 쓸 수 있게 내보내는 코드