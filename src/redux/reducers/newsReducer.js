import {NewsApi} from "../../api/api";

const SET_NEWS = "newsReducer/SET_NEWS"

const initialState = {

}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                ...action.news
            }
        }

        default: return state
    }
}

const setNews = (news) => ({type: SET_NEWS, news})

export const getNews = () => async (dispatch) => {
    const response = await NewsApi.getNews()

    dispatch(setNews(response.data))

}

export default newsReducer
