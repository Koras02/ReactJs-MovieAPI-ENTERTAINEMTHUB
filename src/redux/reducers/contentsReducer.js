import { 
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
} from '../type'


const initialState = {
    isLoading: false,
    searchResults: null
}

const contentsReducer = (state = initialState, action) =>{
     // eslint-disable-next-line default-case
     switch (action.type) {
         case SEARCH_REQUEST:
             return {
                 ...state,
                 isLoading: true,
             };
        case SEARCH_SUCCESS:
            return {
                ...state,
                isLoading:true,
                serachResults: action.payload,
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                isLoading:false,
            };
     }
};


export default contentsReducer;