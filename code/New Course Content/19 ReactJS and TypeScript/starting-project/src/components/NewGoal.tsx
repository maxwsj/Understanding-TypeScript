import { FormEvent, useRef } from 'react';

export default function NewGoal() {
   const goalRef = useRef<HTMLInputElement>(null);
   const summaryRef = useRef<HTMLInputElement>(null);

   function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const enteredGoal = goalRef.current!.value;
      const enteredSummary = summaryRef.current!.value;
   }

   return (
      <form onSubmit={handleSubmit}>
         <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goalRef} />
         </p>
         <p>
            <label htmlFor="summary">Shot summary</label>
            <input id="summary" type="text" ref={summaryRef} />
         </p>
         <p>
            <button>Add Goal</button>
         </p>
      </form>
   );
}
