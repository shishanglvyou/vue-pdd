import ajax from './ajax'

const BASE_URL='http://127.0.0.1:3000';

export const getHomeCasual=()=>ajax(BASE_URL+'/api/homecasual');
export const getHomeNav=()=>ajax(BASE_URL+'/api/homenav');
export const getHomeShopList=()=>ajax(BASE_URL+'/api/homeshoplist');
export const getRecommendShopList=()=>ajax(BASE_URL+'/api/recommendshoplist');
export const getSearchGoods=()=>ajax(BASE_URL+'/api/searchgoods');
