import { Feedbacks } from "./Feedbacks/Feedbacks";

// import { Statistics } from "./Feedbacks/Statistics"
// import { Statistics } from "./Feedbacks/FeedbackOptions"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedbacks

      />

    </div>
  );
};
