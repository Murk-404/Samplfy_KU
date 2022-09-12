import { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from './Header/Header.js'
import Content from './Content/Content.js';


export default function App() {
  return (
    <div className="bg-image">
      <Header />
      <Content />
    </div>
  )
}
