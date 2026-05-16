import { Button } from './components/Button';
import { Input } from './components/Input';
import { Checkbox } from './components/Checkbox';
import { Card } from './components/Card';

export default function App() {
  return (
    <div className="container">
      <h1>Design System Components</h1>
      <Card title="Checklist UI Components">
        <Input label="Task name" placeholder="Buy groceries" />
        <Checkbox label="Completed" />
        <Button>Save Task</Button>
      </Card>
    </div>
  );
}
