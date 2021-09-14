import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

const STACK_LIST = {
  0: {
    title: 'React',
    url: 'https://reactjs.org/',
  },
  1: {
    title: 'Firebase',
    url: 'https://firebase.google.com/',
  },
  2: {
    title: 'GraphQL',
    url: 'https://graphql.org/',
  },
  3: {
    title: 'Redux',
    url: 'https://github.com/',
  },
};

const App = () => (
  <Router>
    <Navigation />
    <Content />
  </Router>
);

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/stack">Stack</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

const Content = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/stack/*" element={<Stack />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

const Home = () => <h1>Home Page</h1>;

const About = () => <h1>About Page</h1>;

const Stack = () => (
  <>
    <h2>Stack List and Item Page:</h2>
    <Routes>
      <Route exact path="/" element={<List />} />
      <Route path="/:id" element={<Item />} />
    </Routes>
  </>
);

const List = () => (
  <>
    <h4>List</h4>
    <ul>
      {Object.keys(STACK_LIST).map((key) => (
        <li key={key}>
          Go to individual course route:
          <Link to={`/stack/${key}`}>{STACK_LIST[key].title}</Link>
        </li>
      ))}
    </ul>
  </>
);

const Item = () => {
  const { id } = useParams();
  return (
    <>
      <h4>{STACK_LIST[id].title}</h4>
      <p>
        Go to <a href={STACK_LIST[id].url}>{STACK_LIST[id].title}</a>
      </p>
      <p>
        Back to <Link to="/stack">Stack Page</Link>
      </p>
    </>
  );
};

export default App;
