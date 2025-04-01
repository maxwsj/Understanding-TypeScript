import Header from './components/Header';
import CourseGoals from './components/CourseGoals';
import goalsImg from './assets/goals.jpg';

function App() {
   return (
      <main>
         <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
            <h1>Your course goals</h1>
         </Header>
         <CourseGoals
            goals={[
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
            ]}
         />
      </main>
   );
}

export default App;
