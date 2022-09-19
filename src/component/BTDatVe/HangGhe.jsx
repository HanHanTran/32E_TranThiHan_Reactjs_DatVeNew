import React, { Component } from 'react'
import {connect} from 'react-redux'
 class HangGhe extends Component {
    renderGhe =()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
      
            let cssGheDaDat = '';
            let disabled = false;
            // tt ghe đã bị ng khác đănt
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }
            // tt dang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhsachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon'
            }


            return <button onClick={()=>{
              this.props.datGhe(ghe)
            }}
            disabled={disabled}
             className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang =() =>{
        return (

            this.props.hangGhe.danhSachGhe.map((hang,index) =>{
                return <button className='rowNumber'>
                    {hang.soGhe}
                </button>
            })
        )
    }
    renderHangGhe = ()=>{
        if (this.props.soHangGhe === 0){
            return <div className="">
                {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>

        }else{

            return(
                <div className="">
                    {this.props.hangGhe.hang} {this.renderGhe()}
    
                </div>
            )
        }

    }
  render() {
    return (
      <div className='text-left'>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = (rootReducers)=> {
    return {

        danhsachGheDangDat: rootReducers.btDatVe.danhsachGheDangDat,
    }
    
}

const mapDispatchToProps =(dispatch) =>{
    return {
        datGhe: (ghe) =>{
            dispatch ({
                type: 'DAT_GHE',
                ghe,
            })
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)
