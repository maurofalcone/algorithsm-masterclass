import { v4 as uuidv4 } from "uuid";

const scores = [
  { player: "Tito", value: 20 },
  { player: "Tito", value: 20 },
  { player: "Tito", value: 10 },
  { player: "Tito", value: 24 },
  { player: "Freddie", value: 10 },
  { player: "Freddie", value: 15 },
  { player: "Freddie", value: 0 },
  { player: "Freddie", value: 0 },
  { player: "Wendy", value: 10 },
  { player: "Wendy", value: 0 },
  { player: "Wendy", value: 0 },
  { player: "Wendy", value: 0 },
];

export const mappedScores = scores.reduce<Record<string, number[]>>(
  (acc, score) => {
    if (!acc[score.player]) {
      acc[score.player] = [score.value];
    } else {
      acc[score.player].push(score.value);
    }
    return acc;
  },
  {}
);
/*
export const players = {
  Tito: [20, 20, 10, 24],
  Freddie: [10, 15, 0, 0],
  Wendy: [10, 0, 0, 0],
};
*/
export const details = [
  {
    id: uuidv4(),
    product: "Iphone 14 Pro Max",
    price: 200,
    qty: 10,
  },
  {
    id: uuidv4(),
    product: "Iphone 14 Pro",
    price: 2300,
    qty: 1,
  },
  {
    id: uuidv4(),
    product: "MacBook Pro",
    price: 280,
    qty: 20,
  },
  {
    id: uuidv4(),
    product: "MacBook Air",
    price: 78.9,
    qty: 12,
  },
  {
    id: uuidv4(),
    product: "Iphone 13 pro",
    price: 33.5,
    qty: 20,
  },
  {
    id: uuidv4(),
    product: "Iphone 13",
    price: 550.05,
    qty: 3,
  },
  {
    id: uuidv4(),
    product: "Iphone 12",
    price: 6000,
    qty: 5,
  },
];

export const toDoMock = [
  {
    id: uuidv4(),
    description: "Go to the gym",
    isFinished: true,
  },
  {
    id: uuidv4(),
    description: "Study time",
    isFinished: false,
  },
  {
    id: uuidv4(),
    description: "Launch",
    isFinished: false,
  },
];

export const familyTree = {
  name: "John",
  age: 90,
  children: [
    {
      name: "Mary",
      age: 60,
    },
    {
      name: "Arthur",
      age: 60,
      children: [
        {
          name: "Lily",
          age: 35,
          children: [
            {
              name: "Hank",
              age: 60,
            },
            {
              name: "Henry",
              age: 57,
            },
          ],
        },
        {
          name: "Billy",
          age: 37,
        },
      ],
    },
    {
      name: "Dolores",
      age: 55,
    },
  ],
};
