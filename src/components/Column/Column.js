import React from 'react';
import './Column.scss';
import Card from 'components/Card/Card';
import { mapOrder } from 'utilities/sorts';
import { Container, Draggable } from 'react-smooth-dnd';


function Column(props) {
    const { column } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');
    const onCardDrop = (dropResult) => {
        console.log(dropResult);
    }

    return (
        <div className="column">
            <header className="column-drag-handle">{column.title}</header>
            <div className="card-list">
                <Container
                    groupName="col"
                    onDrop={onCardDrop}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'card-drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {cards.map((card, index) => (
                        <Draggable key={index} >
                            <Card card={card} />
                        </Draggable>
                    ))}
                </Container>
            </div>
            <footer>Footer</footer>
        </div>
    );
}

export default Column;