const initialState = {
    loading: false,
    error: null,
    articles: []
}

export default function(state=initialState,action){

    switch(action.type){
        case 'ALL_NEWS_PENDING':

            return {loading:true , error:null, articles: []}
        case 'ALL_NEWS_FULFILLED':
            
            return {loading:false , error:null, articles: action.payload.articles}

        case 'PARTICULAR_NEWS_PENDING':
                    
            return {loading:true , error:null, articles: []}
        case 'PARTICULAR_NEWS_FULFILLED':

            return {loading:false , error:null, articles: action.payload.articles}
      
        default:
            return state
    }
}

