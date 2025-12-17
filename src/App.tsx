import { useEffect } from 'react';
import type { Subject, Theme } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import ThemeToggle from './components/ThemeToggle';
import SubjectCard from './components/SubjectCard';
import AddSubjectForm from './components/AddSubjectForm';
import './App.css';

function App() {
  const [subjects, setSubjects] = useLocalStorage<Subject[]>('study-planner-subjects', []);
  const [theme, setTheme] = useLocalStorage<Theme>('study-planner-theme', 'light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAddSubject = (name: string, syllabus: string) => {
    const newSubject: Subject = {
      id: Date.now().toString(),
      name,
      syllabus,
      topics: []
    };
    setSubjects([...subjects, newSubject]);
  };

  const handleUpdateSubject = (updatedSubject: Subject) => {
    setSubjects(subjects.map(subject =>
      subject.id === updatedSubject.id ? updatedSubject : subject
    ));
  };

  const handleDeleteSubject = (subjectId: string) => {
    setSubjects(subjects.filter(subject => subject.id !== subjectId));
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">📚 Study Planner</h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      <main className="app-main">
        <AddSubjectForm onAddSubject={handleAddSubject} />
        
        {subjects.length === 0 ? (
          <div className="empty-state">
            <p>No subjects yet. Start by adding your first subject!</p>
          </div>
        ) : (
          <div className="subjects-grid">
            {subjects.map(subject => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onUpdateSubject={handleUpdateSubject}
                onDeleteSubject={handleDeleteSubject}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
