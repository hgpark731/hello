import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding: 64px 0;
`;

const InnerContainer = styled.div`
  width: 1000px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

const MainBox = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 500px;
  border-radius: 50px 0 50px 50px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  &:hover {
    background-color: #b71c1c;
  }
`;

const RedBox = styled.div`
  background-color: #b71c1c;
  border-radius: 50px 0 50px 50px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;

export default function Profile() {
  return (
    <Container>
      <div>
        <InnerContainer>
          {/* {1000px 중앙정렬} */}
          <div>
            <GridContainer>
              {/*그리드*/}
              {/*박스*/}
              <MainBox>
                <div></div>
              </MainBox>
              <RedBox>
                <div></div>
              </RedBox>
              <MainBox>
                <div></div>
              </MainBox>
            </GridContainer>
          </div>
        </InnerContainer>
      </div>
    </Container>
  );
}
