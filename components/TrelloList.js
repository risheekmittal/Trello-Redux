import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton"

const TrelloList = ({title, cards, listID}) => {
    console.log(cards);
    return(
        <div style={styles.container}>
        <h4>{title}</h4>
        { cards.map(card => (
        <TrelloCard key={card.id} text={card.text}/>
        ))}
        <TrelloActionButton listID={listID} />
        </div>
    );
}; 

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        height:"100%" , 
        padding: 8,
        marginRight: 8
    }
};
export default TrelloList;