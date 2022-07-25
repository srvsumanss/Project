

export const CARTDATA_LOADING = "CARTDATA_LOADING" ;
export const  CARTDATA_SUCCESS = "CARTDATA_SUCCESS";
export const CARTDATA_FAILURE = "CARTDATA_FAILURE";

// action creator 

export const cartdata_loading = ()=>({
    type : CARTDATA_LOADING ,
}) ;

export const cartdata_success = ()=>({
    type : CARTDATA_SUCCESS ,
})

export const cartdata_failure = ()=>({
    type : CARTDATA_FAILURE ,
})

export const fetchCartdata = ()=>(dispatch)=>{
    dispatch(cartdata_loading())
    axios.get("http://localhost:9000/cart")
    .then((res)=>dispatch(cartdata_sucess(res.data)))
    .catch(()=>cartdata_failure());
} 

export const deleteCartItem = (id)=>(dispatch)=>{
    dispatch(cartdata_loading())
    axios.delete(`http://localhost:9000/cart/${id}`)
    .catch(()=>cartdata_failure());
}

//*********************/

export const patchCartItem = (newQty,id)=>(dispatch)=>{
    dispatch(cartdata_loading());
    axios.patch(`http://localhost:9000/cartData/${id}?quantiy=${newQty}`)
    .catch(()=>cartdata_failure)
}


