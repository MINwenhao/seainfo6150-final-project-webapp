import React, { useState }  from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Form from "./Form/Form.jsx";
import Detail from "./Detail/Detail.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import apartment from "./images/main.png";
import styles from "./App.module.css";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Help from "./Help/Help.jsx";
import ThankYou from "./ThankYou/ThankYou.jsx";
// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};



function App() {
  const [name,setName] = useState({"firstName":"","lastName":""});
  return (
    <>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            {/* <li>
              <Link to="/" >Home</Link>
            </li> */}
            {/* <li>
              <Link to="/detail/1">Detail</Link>
            </li>  */}
             {/* <li>
              <Link to="/baz">Baz</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <div className={styles.header}>     
        <div className={styles.mainPic}>
            <Link to="/"> <img src={apartment} alt="home page pic" className={styles.img} /></Link>
        </div >
        <div className={styles.LogIn}>
          <div>
          <Link to="/Form" >Account</Link>
          </div>
          <div>
          <p>Welcome  {name.firstName}   {name.lastName}</p>
          </div>
        </div>
       </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
         <Route
          path="/detail/:id"
          render={({ match }) => (
            <Detail
              id={match.params.id}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route path="/aboutUs" component={AboutUs}/>
        <Route path="/Help" component={Help} />
        <Route path="/ThankYou" component={ThankYou} />
        <Route
          path="/Form"
          exact
          render={() => <Form 
            name={name}
            setName={setName}/>}
        />
        <Route component={Error} />
      </Switch> 
      <div className={styles.root}>
      <Link to="/aboutUs">About Us</Link>
      
      <Link to="/help">help</Link>
      </div>
      
    </>
  );
}

export default App;
