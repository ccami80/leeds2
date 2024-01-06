import React from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';

export default function WomenContent() {
  return (
    <div className="content">
    {/* <h2>의상 컨텐츠</h2> */}
    {/* 의상 컨텐츠에 해당하는 내용 */}
    <ul className='Menu'>
      <li>
          <h2>의상</h2>
          <ul className='submenu'>
              <li><Link to="/vignette">의상 메뉴</Link></li>
              <li>스템밀 머신</li>

          </ul>
      </li>
      <li>
          <h2>의상2</h2>
          <ul className='submenu'>
              <li>가정용 사이클</li>
              <li>클럽용 사이클</li>
              <li>스피닝</li>
   
          </ul>
      </li>
      <li>
          <h2>웨이트 머신</h2>
          <ul className='submenu'>
              <li>PR Series</li>
              <li>MGW Series</li>
              <li>PL Series</li>
              <li>HS Series</li>
          </ul>
      </li>
      <li>
          <h2>전동거꾸리</h2>
          <ul className='submenu'>
              <li>가정용 거꾸리</li>
              <li>클럽용 거꾸리</li>
          </ul>
      </li>
      <li>
          <h2>웨이트 머신</h2>
          <ul className='submenu'>
              <li>PR series</li>
              <li>웨이트 헬스기구</li>
              <li>HS Series</li>
          </ul>
      </li>
    </ul>
  </div>
  )
}
