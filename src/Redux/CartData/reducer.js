import {CARTDATA_LOADING , CARTDATA_SUCCESS , CARTDATA_FAILURE} from "./action" ;

const initState = {
    loading :false ,
    cartData :[],
    error :false ,
}

export const cartReducer = (store = initState,{type,payload})=>{
    switch(type){
        case CARTDATA_LOADING:
            return{
                ...store,
                loading : true,
            }
            case CARTDATA_SUCCESS :
                return{
                    ...store,
                    loading:false,
                    cartData:[...payload] ,

                }
                case CARTDATA_FAILURE :
                    return{
                        ...store,
                        loading:false,
                        error:true,
                    }
                    default:return store;
    }
}