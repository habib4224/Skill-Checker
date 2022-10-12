import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Layouts/Main';
import Home from './component/Home/Home';
import QuizInfo from './component/QuizInfo/QuizInfo';
import Chart from './component/Chart/Chart';
import Blog from './component/Blog/Blog';
import Topics from './component/Topics/Topics';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path: '/chart',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`);
          },
          element: <Chart></Chart>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/single/:singleid',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.singleid}`);
          },
          element: <QuizInfo></QuizInfo>
        },
        {
          path: '*',
          element: <div><h1 className='text-center'>!! Page Not Found !!! Please Go Back!!!</h1></div>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
