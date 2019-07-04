export const showType = (type,title)=>{
    if(title === 'overtime'){
      switch(type){
        case 1:
          return '双休日加班'
        case 2:
          return '节假日加班'
        case 3:
          return '工作日加班' 
        default:
          return '加班' 
      }
    }else{
      switch(type){
        case 1:
          return '年假'
        case 2:
          return '调休'
        default:
          return '休假' 
      }
    }
    
  }


export const showTime = (start)=>{
    // console.log(start);
    if(start){
      return new Date(start).toLocaleString();
    }else{
      return null;
    }
}

export const reduceTime = (startTime,endTime)=>{
   //获取时间差
   let start_num = new Date(new Date(startTime).toGMTString())*1;
   let end_num = new Date(new Date(endTime).toGMTString())*1;
   let num = (end_num - start_num)/1000;
   let day = (num/60/60/24).toFixed(1);
   return day;
}