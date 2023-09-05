
const rules = (data)=>{
    data.map(item =>{
        let  rules_arry = [];
        if(item.required){
         const rule = {required:true,message: item.massage || creatMessage(item), }
         rules_arry.push(rule)
        }
        if(item.rules && Array.isArray(item.rules)&&item.rules.length>0){
             rules_arry = rules_arry.concat(item.rules)
        }
        item.rules = rules_arry
       })   
       console.log("数据打印", data)
       return data;
//   return data.map(item =>{
//    const  rules_arry = [];
//    if(item.required){
//     rules_arry.push({required:true,message:item.message,trigger:'blur'})
//    }
//   })   
}

const creatMessage =(data) =>{
    let msg = '';
    switch(data.type){
        case 'input' : 
        msg = '请输入' + data.label;
        break;
        case 'select' : msg = '请选择' + data.label;
        break;
    }
    return msg;
}

//校验证函
// const creatfuncton =(data) =>{
//     let fun = '';
//     switch(data.type){
//         case 'input' : 
//         fun = 'blur';
//         break;
//         case 'select' : fun = 'change';
//         break;
//     }
//     return fun;
// }
export default rules;
