import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";

//actions

export const getAllUsers = createAsyncThunk(    
    "user-getAll",
    async (_, thunkAPI) => {
      try {
        const result = await api.get("/users/all"); 
        return result.data.listUsers;
        } catch (error) {   
        return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

////createAsyncThunk( type, function async(payload, thunkAPI) ====> return payload: 
// en cas de success (payload = userToEdit) 
// En cas d'echec (payload = error)
export const updateUser = createAsyncThunk(    
    "user-update",
    async ({id, userData}, thunkAPI) => {
        try {
            const result = await api.put(`/users/${id}`, userData); 
            return result.data.userToEdit;
        } catch (error) {   
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteUser = createAsyncThunk( 
    "user-delete",
    async (id, thunkAPI) => {
        try {
            await api.delete(`/users/${id}`);    
            return id;  // return the id of the deleted user
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }       
    }
);

//Reducer
// -------------------------Slice-------------------------------
const userSlice = createSlice({
    name: "user",
    initialState: {
        listUsers: [],
        loadingUser: false, 
        errors: null,
        success: null,
    },
    // reducers not related to api calls    
    reducers: {
        clearUserErrors: (state) => {
            state.errors = null;    
        },
        clearUserSuccess: (state) => {
            state.success = null;
        },
    },
    // extraReducers : related to api calls
    extraReducers: (build) => {
        //getAllUsers
        build
        .addCase(getAllUsers.pending, (state) => {  
            state.loadingUser = true;
            state.errors = null;
            state.success = null;
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loadingUser = false;
            state.listUsers = action.payload;  
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.loadingUser = false;
            state.errors = action.payload;
        }); 
        //updateUser
        build
        .addCase(updateUser.pending, (state) => {    
            state.loadingUser = true;
            state.errors = null;
            state.success = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loadingUser = false;  
            state.success = "User updated successfully";
            //update user in listUsers
            const index = state.listUsers.findIndex(user => user._id === action.payload._id);
            if (index !== -1) {  
                state.listUsers[index] = action.payload;
            }
        }) 
        .addCase(updateUser.rejected, (state, action) => {    
            state.loadingUser = false;
            state.errors = action.payload;
        });
        //deleteUser
        build
        .addCase(deleteUser.pending, (state) => {    
            state.loadingUser = true;
            state.errors = null;
            state.success = null;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {    
            state.loadingUser = false;  
            state.success = "User deleted successfully";        
            //remove user from listUsers
            state.listUsers = state.listUsers.filter(user => user._id !== action.payload);  //// action.payload is the id of the deleted user
        })
        .addCase(deleteUser.rejected, (state, action) => {    
            state.loadingUser = false;
            state.errors = action.payload;
        });
    },
});
export const { clearUserErrors, clearUserSuccess } = userSlice.actions;
export default userSlice.reducer;

