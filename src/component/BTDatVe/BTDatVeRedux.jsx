import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import HangGhe from './HangGhe'
import data from './danhSachGhe.json'

export default class BTDatVeRedux extends Component {

  renderHangGhe =() =>{
    return data.map((hangGhe,index) =>{
      return <div className="" key={index} >
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>

      </div>
    })
  }
  render() {
    return (
      <div className='' style={{backgroundImage:"url('./imgs/bgmovie.jpg')" , backgroundRepeat:'no-repeat', backgroundSize:'100%'}}>
        <div className="" style={{backgroundColor: 'rgba(0, 0, 0,0.6)'}}>
        <div className="container">
          <h1 className='text-light'>Bài tập đặt vé</h1>
          <div className="row">
            <div className="col-9 text-light" style={{fontSize:'25px', fontWeight:'bold'}} >
              <div className="" style ={{}}>
                <h2 className='text-warning my-3'>Màn hình</h2>
              <div className="screen "></div>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-3 my-3">
              <h2 className='text-center text-warning '>Danh sách ghế bạn chọn</h2>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>

        </div>
      </div>
    )
  }
}
