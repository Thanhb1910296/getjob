import React from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { routes } from './routes';
// import axios from 'axios';
import { DefaultLayout } from './components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
//import { useQuery } from '@tanstack/react-query';

function App() {
    // useEffect(() => {
    //     fetchApi()
    // }, [])

    // const fetchApi = async () => {
    //     const res = await axios.get(`http://localhost:5555/user`);
    //     console.log('res', res);
    //     return res.data;
    // }
    // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi});
    // console.log('query', query);

    return (
        <Router>
            <div className='App'>
                <Routes>
                    {
                    /* {routes.map((route) => {
                        const Page = route.page
                        const Layout = route.isShowHeader ? DefaultComponent : Fragment
                        return (
                            <Route key={route.path} path={route.path} element={
                                <Layout>
                                    <Page />
                                </Layout>
                            } />
                        )
                    })} */
                        routes.map((route, index) =>{
                            // const Layout = route.layout === null ? Fragment : DefaultLayout;
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            
                            if(route.layout){
                                Layout = route.layout
                            } else if(route.layout === null){
                                Layout = Fragment
                            }

                            return <Route key={index} path={route.path} element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }/>
                        })
                    }
                </Routes>
            </div>
        </Router>
    )
}

export default App;