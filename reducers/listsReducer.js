import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 4;

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
                title: action.payload,
                cards:[],
                id: listID
            };
            listID +=1;
            return [...state, newList];

            case CONSTANTS.ADD_CARD:
            const newCard= {
                text: action.payload.text,
                cards:[],
                id: cardID
            };
            cardID +=1;
            
            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list ,
                        cards: [...list.cards, newCard]
                    }
            }
            else {
                return list
            }
            });

            return newState;


        default:
            return state;
    }
};

export default listsReducer;