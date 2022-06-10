import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Button, Box } from "@mui/material";
import ClubDetailTab from "../components/ClubDetail/ClubDetailTab";

function ClubDetail() {
  const WholeBox = styled(Box)`
    position: relative;
    margin: 0 auto;
    max-width: 1160px;
  `;

  const WholeCard = styled(Card)`
    display: flex;
    box-shadow: none;
    border-radius: 0;
    img {
      width: 550px;
    }
  `;

  const ContentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 45%;
    padding-left: 5%;
  `;

  const Title = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin: 30px 0 30px;
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
  `;

  const Text1 = styled.div`
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 24px;
    font-weight: 550;
  `;

  const Text2 = styled.div`
    margin-bottom: 20px;
    color: rgba(0, 0, 0);
    font-size: 16px;
  `;

  const Text3 = styled.div`
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
  `;

  const ButtonBox = styled(Box)`
    display: flex;
    align-items: center;
    pl: 1;
    pb: 1;
    justify-content: center;
  `;

  const MyButton1 = styled(Button)`
    width: 33.33%;
    margin: 0 2% 0 2%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: black;
    background-color: #ffc300;
    &:hover {
      background-color: #716847;
    }
  `;

  const MyButton2 = styled(Button)`
    width: 33.33%;
    margin: 0 2% 0 2%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: black;
  `;

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO);
      console.log(window.Kakao.isInitialized());
    }
  }, []);

  const sendKakaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "카카오톡 공유하기",
        description: "카카오톡 공유하기 기능입니다.",
        imageUrl: "https://cdn.imweb.me/thumbnail/20220501/559d862b36b34.jpg",
        link: {
          webUrl: window.location.href,
          mobileWebUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "사이트로 이동",
          link: {
            webUrl: window.location.href,
            mobileWebUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <WholeBox>
      <WholeCard>
        <img src='/images/testimage.PNG' alt='green iguana' />
        <ContentBox>
          <CardContent>
            <Title>MCU 톺아보기</Title>
            <Text1>
              마블 시네마틱 유니버스의 영화를 함께 샅샅이 분석해봐요!
            </Text1>
            <Text2>본 클럽은 온라인으로 진행됩니다.</Text2>
            <Text2>모집 마감까지 6자리 남았어요! (현재 14명 / 최대 20명)</Text2>
            <Text3>*클럽 사정에 따라 모집이 조기 마감될 수 있습니다.</Text3>
          </CardContent>
          <ButtonBox>
            <MyButton1>신청하기</MyButton1>
            <MyButton2>찜하기</MyButton2>
            <MyButton2 onClick={sendKakaoMessage}>공유하기</MyButton2>
          </ButtonBox>
        </ContentBox>
      </WholeCard>
      <ClubDetailTab />
    </WholeBox>
  );
}

export default ClubDetail;
