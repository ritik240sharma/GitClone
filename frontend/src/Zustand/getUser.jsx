import {create} from 'zustand'
const getUser=

    create((set)=>(
    {
    alluser:null,
    loading:false,
    userProfile:"",
    repos:[],
    sortType:null,
    Setalluser:(alluser)=>set({alluser}),
    Setloading:(loading)=>set({loading}),
    Setrepos:(repos)=>set({repos}),
    SetsortType:(sortType)=>set({sortType}),
    SetuserProfile:(userProfile)=>set({userProfile})
    }
    ))


export default getUser

