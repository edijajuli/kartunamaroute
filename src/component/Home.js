import styled from "styled-components";
import image from "../img/banner.jpg";

const Home = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <TextMain className="fs-2">Hello World...</TextMain>
                <TextSub className="fs-1">Welcome to my page!</TextSub>
            </TextWrapper>
            <ImageWrapper>
                <Image src={image}></Image>
            </ImageWrapper>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
  background-color: white;
  <Button color="success" className="w-50 text-center" onClick={toggle}> Preview </Button>
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  ${"" /* margin-top: 5rem; */}
  ${"" /* padding: 1rem; */}
  align-items: center;
  ${"" /* margin-top: 10rem; */}
`;

const TextWrapper = styled.div`
  color: crismon;
  font-size: 2rem;
  width: 30%;
  ${"" /* //background-color: #fff; */}
  padding: 2rem;
`;

const TextMain = styled.h2`
  font-size: 6rem;
`;

const TextSub = styled.p`
  font-size: 3rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  ${"" /* //background-color: #fff; */}
`;
const Image = styled.img`
  width: 180%;
`;