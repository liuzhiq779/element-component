/*
*
*
*
*/ 
export const phone = (rule,value,callback) => {
    let reg = /^1[3-9]\d{9}$/
    if(value === reg) {
        callback()
    }else{
        callback(new Error('请输入正确的手机号'))
    }
} 