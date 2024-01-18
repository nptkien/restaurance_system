import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppState } from "../store";
import * as LocalStorage from '../../utils/storage';
import { AppState } from "../store";
import ApiError from "../../services/api_error";
import { User } from '../../../../models'
interface ILoadUsersBySize {
    data: Array<any>
}
export interface UserListState {
    users: Array<User>,
    loading: boolean,
    error: ApiError,
    size: number
}

const initialState: UserListState = {
    users: [],
    loading: false,
    error: new ApiError(),
    size: 0
};




export const requestLoadUserBySize = createAsyncThunk("Endpoint.LOGIN", async (props: { size: number }, thunkApi) => {
    const { size } = props;
    const res = {}
    return { data: res };
})

// export const requestChangePass = createAsyncThunk('auth/requestChangePass', async (props: {
//     _id: string,
//     passwordOld: string,
//     passwordNew: string,
//     isAdmin?: boolean
// }) => {
//     const res = await apiChangePass(props);
//     return res.data
// })


const usersReducer = createSlice({
    name: "usersReducer",
    initialState,
    reducers: {
        restoreUserSession: {
            reducer: (state, action: PayloadAction<User[]>) => {
                state.users = action.payload
            },
            prepare: (user: User[]) => {
                return { payload: user }
            },

        },

    },
    extraReducers: (builder) => {
        const actionList = [requestLoadUserBySize];
        actionList.forEach(action => {
            builder.addCase(action.pending, (state) => {
                state.loading = true;
            })
        })



    }
});
export const { restoreUserSession } = usersReducer.actions
export const usersState = (state: AppState) => state.usersState as UserListState;
export default usersReducer.reducer;