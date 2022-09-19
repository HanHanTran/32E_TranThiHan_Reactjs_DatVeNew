import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Connect } from 'react-redux'
class ThongTinDatGhe extends Component {
  render() {
 
    return (
      <div>
        <div className="text-light text-left " style={{}}>
        <div className="">
          <button className="gheDuocChon mr-2"></button>
          <span>Ghế đã đặt</span>

        </div>
        <div className="">
          <button className="gheDangChon my-3 mr-2"></button>
          <span>Ghế đang đặt</span>

        </div>
        <div className="">
          <button className="ghe mb-3 mr-2"></button>
          <span>Ghế chưa chọn</span>

        </div>

        </div>
        <table className="table " border={2}>
          <thead>
            <tr className='text-warning' style={{fontSize:'16px'}}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>

            </tr>
          </thead>
          <tbody className='text-light'>
            {this.props.danhsachGheDangDat.map((gheDangDat, index) => {
              return (

                <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}</td>
                  
                  <td>
                    <button className="btn btn-warning" 
                      onClick={() => {
                        // this.props.huyGhe(soGhe)
                       this.props.dispatch({
                      type:'HUY_GHE',
                      soGhe: gheDangDat.soGhe
                       })
                      }}>
                      Huỷ
                    </button>
                  </td>
                </tr>


              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className='text-light ' style={{fontWeight:'bold'}}>Tổng tiền</td>
              <td className='text-light' style={{fontWeight:'bold'}}>{this.props.danhsachGheDangDat.reduce(
                (tongTien,gheDangDat,index)=>{
                  return tongTien += gheDangDat.gia;
              },0).toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>

      </div>
    )
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    danhsachGheDangDat: rootReducers.btDatVe.danhsachGheDangDat
  }
}
// const mapDispatchToProps =(dispatch) =>{
//   return {
//       huyGhe: (soGhe) =>{
//           dispatch ({
//               type: 'HUY_GHE',
//               soGhe,
//           })
//       }

//   }
// }

export default connect(mapStateToProps)(ThongTinDatGhe)
