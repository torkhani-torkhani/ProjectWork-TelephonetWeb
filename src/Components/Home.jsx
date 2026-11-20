function Home() {
  return (
    <div>
      <div>
      <h1 className="HomeTitle">telephonet web</h1>
      </div>
      <div className="HomeCont">
        <p className="HomeP">Telephonet Web is a simple React web application built to display phones across multiple pages,<br />
         including a products view, a cart view, and product cards. Users can browse available phones, add items <br />
          to the cart, remove items as needed, and navigate smoothly between pages. <br />
          The project is with React skills such as component-based structure, state management, <br />
          and dynamic UI updates and is designed with scalability in mind so new features and <br />
           improvements can be added
          </p>
          <div className="HomeImgWrapper">
          <img src="../img/phones.jpg" alt="" className="HomeImg" />
          </div>
      </div>
  <footer>
      telephonet web - designed by human
  </footer>
    </div>
  )
}

export default Home;