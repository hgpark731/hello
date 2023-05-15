import styled from "styled-components";

const ContainerImage = styled.div`
  width: 100%;

  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const MainImages = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  object-position: center;
`;

const MainTitle = styled.div`
  position: absolute;
  font-weight: 900;
  font-size: 90px;
  width: 1000px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 99;
  color: white;
  text-align: left;
`;

const SubTitle = styled.div`
  font-size: 20px;
  padding-left: 48px;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

export default function MainImage() {
  return (
    <div>
      <ContainerImage>
        <MainImages
          src="https://plus.unsplash.com/premium_photo-1668037381925-f5762cdbc1ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
          alt="메인이미지"
        />
        <MainTitle>
          <div>영진직업전문학교</div>
          <SubTitle>취업률 전국 최고</SubTitle>
        </MainTitle>
      </ContainerImage>
    </div>
  );
}
