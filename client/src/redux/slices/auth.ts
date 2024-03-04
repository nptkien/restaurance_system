import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppState } from "../store";
import { AppState } from "../store";
import ApiError from "../../services/api_error";
import { User, } from '../../../../models'
interface ILoadUsersBySize {
    data: Array<any>
}
export interface AuthState {
    user: User | null,
    loading: boolean,
    error: ApiError | null,
}

const initialState: AuthState = {
    user: null, 
    loading: false,
    error: null,
};




export const loginByEmailAndPassword = createAsyncThunk("xxx", async (props: { email: string, password: string }, thunkApi) => {
    // let xxx = new User();
    const { email, password } = props;
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


const authReducer = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        // restoreUserSession: {
        //     reducer: (state, action: PayloadAction<User[]>) => {
        //     },
        //     prepare: (user: User[]) => {
        //         return { payload: user }
        //     },

        // },

    },
    extraReducers: (builder) => {
        const actionList = [loginByEmailAndPassword];
        actionList.forEach(action => {
            builder.addCase(action.pending, (state) => {
                state.loading = true;
            })
        })



    }
});
export const { } = authReducer.actions
export const authState = (state: AppState) => state.authState as AuthState;
export default authReducer.reducer;