import "./App.css";
import Quiz from "./components/quizQuestions";
import { QuizProvider } from "./contexts/quiz";


function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
 