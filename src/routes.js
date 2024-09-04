import Home from './component/pages/Home';
import About from './component/pages/About/About';
import Contact from './component/pages/Contact';
import Shop from './component/pages/Shop';
import Cart from './component/pages/Cart';
import Login from './component/pages/Login';
import SignUp from './component/pages/SignUp';
import PostPage from './component/pages/PostPage';
import NotFound from './component/pages/NotFound';
import Resume from './component/pages/About/Resume/Resume';
import Information from './component/pages/About/Information';

const routes = [
    { path: '/', element: < Home /> },

    {
        path: '/about/*',
        element: < About />,
        children: [
            { path: 'information', element: < Information /> },
            { path: 'resume', element: < Resume /> },
        ]
    },

    { path: '/contact', element: < Contact /> },
    { path: '/cart', element: < Cart /> },
    { path: '/shop', element: < Shop /> },
    { path: '/Login', element: < Login /> },
    { path: '/signUp', element: < SignUp /> },
    { path: '/shop/post/:postID', element: < PostPage /> },
    { path: '*', element: < NotFound /> },
]

export default routes;