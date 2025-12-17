import { useState } from 'react';

interface AddSubjectFormProps {
  onAddSubject: (name: string, syllabus: string) => void;
}

export default function AddSubjectForm({ onAddSubject }: AddSubjectFormProps) {
  const [name, setName] = useState('');
  const [syllabus, setSyllabus] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddSubject(name.trim(), syllabus.trim());
      setName('');
      setSyllabus('');
      setIsExpanded(false);
    }
  };

  return (
    <div className="add-subject-form">
      {!isExpanded ? (
        <button 
          onClick={() => setIsExpanded(true)} 
          className="btn btn-primary btn-add-subject"
        >
          + Add New Subject
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="subject-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Subject name (e.g., Mathematics)"
            className="subject-input"
            autoFocus
          />
          <textarea
            value={syllabus}
            onChange={(e) => setSyllabus(e.target.value)}
            placeholder="Syllabus description (optional)"
            className="syllabus-input"
            rows={3}
          />
          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">Add Subject</button>
            <button 
              type="button" 
              onClick={() => {
                setIsExpanded(false);
                setName('');
                setSyllabus('');
              }} 
              className="btn btn-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
