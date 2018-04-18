
import ajax from './ajax'

/*
用户名密码登陆
 */
export const nameLogin = ({name, pwd}) => ajax('/api/login_pwd', {name, pwd}, 'POST')

/*
手机号验证码登陆
 */
export const reqSmsLogin=({phone,code,captcha}) =>ajax('/api/login_sms',{phone,code,captcha},'POST')

/*发送短信验证码*/
export const reqSendCode=phone =>ajax('/api/sendcode',{phone});
/*mock数据*/
export const reqCategorys = () => ajax('/classafiy/sort');
export const reqBrand=()=>ajax('/classafiy/brand');
export const reqHomepage=()=>ajax('/homepages');
export const reqAllbrands=()=>ajax('/allbrands');
export const reqActivity=()=>ajax('/activity');
