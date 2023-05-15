import { GlobalStyles } from "./style";
import Header from "./Header";
import MainImage from "./MainImage";
import Profile from "./profile";
import Portfolio from "./Portfolio";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainImage />
      {/* 프로파일 */}
      <Profile />
      <Portfolio />
    </>
  );
}

export default App;
