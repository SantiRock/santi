import { getContent } from "./redux/selectors"
import { useSelector } from "react-redux"
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

function App() {
  const content = useSelector(getContent);

  return (
    <>
      <Header header={content.header} nav={content.nav}/>
      <Body content={content}/>
      <Footer footer={content.footer}/>

    </>
  )
}

export default App
