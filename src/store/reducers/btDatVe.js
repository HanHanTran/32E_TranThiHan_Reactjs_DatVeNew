const stateDefault = {
   danhsachGheDangDat:[
 
   ]
}
export const btDatVe = (state= stateDefault, action) => {
   switch (action.type) {
      case 'DAT_GHE':{
         let danhsachGheUpdate = [...state.danhsachGheDangDat];
         let index = danhsachGheUpdate.findIndex(gheDangDat => gheDangDat.soGhe ===action.ghe.soGhe);
         if(index !== -1) { // ghế dang đặt đã có trong mảng =>remove
            danhsachGheUpdate.splice(index,1);
         }else{
            danhsachGheUpdate.push(action.ghe);
         }
        state.danhsachGheDangDat = danhsachGheUpdate;
         return {...state}
      }
      case 'HUY_GHE':{
         let danhsachGheUpdate = [...state.danhsachGheDangDat];
         let index = danhsachGheUpdate.findIndex(gheDangDat => gheDangDat.soGhe ===action.soGhe);
         if(index !== -1) { // ghế dang đặt đã có trong mảng =>remove
            danhsachGheUpdate.splice(index,1);
         }
         state.danhsachGheDangDat=danhsachGheUpdate;
         return {...state};
      }
      default:
          return {...state}
   }
}
