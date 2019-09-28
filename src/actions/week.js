import { createAction } from "redux-actions"

import { charleskeiths } from "@api/goods"


const WEEK_ACTION = createAction("week_action", data => data);

export const WEEK_ACTION_ASYNC = () => {
    return async (dispatch) => {
        let data = await charleskeiths();
        dispatch(WEEK_ACTION(data));

    }
}
