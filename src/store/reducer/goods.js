import { handleActions } from 'redux-actions';

const defaultState = {
    charleskeiths: []
}

export default handleActions({
    week_action: (state, action) => {
        let newWeekState = Object.assign({}, state);
        newWeekState.charleskeiths = action.payload.Result.list;
        console.log(newWeekState, "newWeekState")
        return newWeekState
    }
}, defaultState)
