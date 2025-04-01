import Header from './components/Header';
import CourseGoals from './components/CourseGoals';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import NewGoal from './components/NewGoal';

function App() {
   const [goals, setGoals] = useState([
      {
         id: 1,
         title: 'Learn TS',
         description: 'Learn TS from the ground up',
      },
      {
         id: 2,
         title: 'Practice TS',
         description: 'Practice working with TS',
      },
   ]);

   const handleDeleteGoal = (id: number) => {
      setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
   };

   const handleAddSummary = (text: string, summary: string) => {
      setGoals((prevGoals) =>
         prevGoals.concat({
            id: Math.random(),
            title: text,
            description: summary,
         })
      );
   };

   return (
      <main>
         <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
            <h1>Your course goals</h1>
         </Header>
         <NewGoal onAdd={handleAddSummary} />
         <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
      </main>
   );
}

export default App;
