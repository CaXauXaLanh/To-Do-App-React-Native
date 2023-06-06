import React, {useState} from 'react';
import {LogBox, View, Text, StyleSheet} from 'react-native';
import {RowRepository, Board} from 'rn-dnd-kanban';

export default function Dashboard() {
  const data = [
    {
      id: 1,
      name: 'TO DO',
      rows: [
        {
          id: '1',
          name: 'Analyze your audience',
          description:
            'Learn more about the audience to whom you will be speaking',
        },
        {
          id: '2',
          name: 'Select a topic',
          description:
            'Select a topic that is of interest to the audience and to you',
        },
        {
          id: '3',
          name: 'Define the objective',
          description:
            'Write the objective of the presentation in a single concise statement',
        },
      ],
    },
    {
      id: 2,
      name: 'IN PROGRESS',
      rows: [
        {
          id: '4',
          name: 'Look at drawings',
          description: 'How did they use line and shape? How did they shade?',
        },
        {
          id: '5',
          name: 'Draw from drawings',
          description: 'Learn from the masters by copying them',
        },
        {
          id: '6',
          name: 'Draw from photographs',
          description:
            'For most people, it’s easier to reproduce an image that’s already two-dimensional',
        },
      ],
    },
    {
      id: 3,
      name: 'DONE',
      rows: [
        {
          id: '7',
          name: 'Draw from life',
          description: 'Do you enjoy coffee? Draw your coffee cup',
        },
        {
          id: '8',
          name: 'Take a class',
          description: 'Check your local university extension',
        },
      ],
    },
  ];

  const [boardRepository, setBoardRepository] = useState(
    new RowRepository(data),
  );

  function renderRow(item) {
    let style = [styles.item];
    // Just to show that other sizes works as well
    if (item.id == 2) {
      style.push({height: 100});
    }
    return (
      <View>
        <Text style={style}>{item.name}</Text>
      </View>
    );
  }

  function renderColumnWrapper(column, index, columnComponent) {
    return (
      <View key={`column-${index}`} style={styles.column}>
        <Text>{column.name}</Text>
        {columnComponent}
      </View>
    );
  }

  return (
    <Board
      style={styles.board}
      rowRepository={boardRepository}
      open={() => {}}
      onDragEnd={(srcColumnId, destColumnId, item) => {
        console.log(item);
      }}
      renderRow={renderRow}
      renderColumnWrapper={renderColumnWrapper}
    />
  );
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    padding: 15,
    backgroundColor: '#63A2B8',
  },
  column: {
    width: 250,
    margin: 10,
    padding: 10,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  columnHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    alignSelf: 'center',
  },
  item: {
    flex: 1,
    width: 218,
    margin: 5,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#63A2B8',
    borderRadius: 5,
  },
});
