import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';



const resultData = 
[
  {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 72,
    "chemistry": 88,
    "math": 79
  },
  {
    "id": 3,
    "name": "Sakib",
    "physics": 90,
    "chemistry": 85,
    "math": 96
  },
  {
    "id": 4,
    "name": "Nayeem",
    "physics": 65,
    "chemistry": 70,
    "math": 75
  },
  {
    "id": 5,
    "name": "Hasan",
    "physics": 88,
    "chemistry": 92,
    "math": 84
  },
  {
    "id": 6,
    "name": "Rafi",
    "physics": 76,
    "chemistry": 81,
    "math": 69
  },
  {
    "id": 7,
    "name": "Siam",
    "physics": 95,
    "chemistry": 89,
    "math": 98
  },
  {
    "id": 8,
    "name": "Fahim",
    "physics": 68,
    "chemistry": 75,
    "math": 82
  },
  {
    "id": 9,
    "name": "Arif",
    "physics": 82,
    "chemistry": 86,
    "math": 91
  },
  {
    "id": 10,
    "name": "Tanvir",
    "physics": 79,
    "chemistry": 73,
    "math": 87
  }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis dataKey={""}></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>

            </LineChart>
            
        </div>
    );
};

export default ResultChart;