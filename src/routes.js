import Home from './components/pages/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import PostPage from './components/pages/PostPage';
import NotFound from './components/pages/NotFound';
import Resume from './components/pages/About/Resume/Resume';
import Information from './components/pages/About/Information';
import Panel from './components/pages/Panel';
import PravetRoute from './components/pages/PravetRoute';

const routes = [
    { path: '/', element: < Home /> },

    {
        path: '/about/*',
        element: < About />,
        children: [
            { index: true, element: <Information /> },
            { path: 'information', element: < Information /> },
            { path: 'resume', element: < Resume /> },
        ]
    },

    { path: '/contact', element: < Contact /> },
    { path: '/cart', element: < Cart /> },
    { path: '/Courses', element: < Shop /> },
    { path: '/Login', element: < Login /> },
    { path: '/signUp', element: < SignUp /> },
    {
        path: '*', children: [
            { path: '*', element: < NotFound /> },
            { path: "*", element: <PravetRoute />, children: [{ path: "panel", element: <Panel /> }] },
        ]
    },
    { path: '/Courses/post/:postID', element: < PostPage /> },
]

export default routes;