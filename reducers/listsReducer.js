import { CONSTANTS } from "../actions";

let listID = 2;

const initialState = [
    {
        title:"Last Epiosode",
        id: 0,
        cards: [
            {
                id: 0,
                text:"we created a static list and card"
            },
            {
                id: 1,
                text:"we used bw a material ui and a style component"
            }
        ]
    },
    {
        title:"This Epiosode",
        id: 0,
        cards: [
            {
                id: 0,
                text:"we created a static list and card"
            },
            {
                id: 1,
                text:"we used bw a material ui and a style component"
            },
            {
                id: 2,
                text: "dgjkafhgifrifgj"
            }
        ]
    
    }
];


const listsReducer = (state = initialState, action) => {
    switch(action.type) {

        case CONSTANTS.ADD_LIST:
            const newList= {
                title: action.payload.title,
                cards:[],
                id: listID
            }
            listID +=1;
            return [...state, newList];
        default:
            return state;
    }
};

export default listsReducer;