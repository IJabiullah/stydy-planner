import { useState } from 'react';
import type { Subject, Topic } from '../types';
import ProgressBar from './ProgressBar';
import TopicList from './TopicList';

interface SubjectCardProps {
  subject: Subject;
  onUpdateSubject: (subject: Subject) => void;
  onDeleteSubject: (subjectId: string) => void;
}

export default function SubjectCard({ subject, onUpdateSubject, onDeleteSubject }: SubjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(subject.name);
  const [editSyllabus, setEditSyllabus] = useState(subject.syllabus);

  const completedTopics = subject.topics.filter(t => t.completed).length;
  const totalTopics = subject.topics.length;

  const handleToggleTopic = (topicId: string) => {
    const updatedTopics = subject.topics.map(topic =>
      topic.id === topicId ? { ...topic, completed: !topic.completed } : topic
    );
    onUpdateSubject({ ...subject, topics: updatedTopics });
  };

  const handleDeleteTopic = (topicId: string) => {
    const updatedTopics = subject.topics.filter(topic => topic.id !== topicId);
    onUpdateSubject({ ...subject, topics: updatedTopics });
  };

  const handleAddTopic = (topicName: string) => {
    const newTopic: Topic = {
      id: Date.now().toString(),
      name: topicName,
      completed: false
    };
    onUpdateSubject({ ...subject, topics: [...subject.topics, newTopic] });
  };

  const handleSaveEdit = () => {
    onUpdateSubject({ ...subject, name: editName, syllabus: editSyllabus });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditName(subject.name);
    setEditSyllabus(subject.syllabus);
    setIsEditing(false);
  };

  return (
    <div className="subject-card">
      <div className="subject-header">
        {isEditing ? (
          <div className="subject-edit">
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="subject-input"
              placeholder="Subject name"
            />
            <textarea
              value={editSyllabus}
              onChange={(e) => setEditSyllabus(e.target.value)}
              className="syllabus-input"
              placeholder="Syllabus description"
              rows={3}
            />
            <div className="edit-buttons">
              <button onClick={handleSaveEdit} className="btn btn-save">Save</button>
              <button onClick={handleCancelEdit} className="btn btn-cancel">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <div className="subject-info">
              <h2 className="subject-title">{subject.name}</h2>
              {subject.syllabus && <p className="subject-syllabus">{subject.syllabus}</p>}
            </div>
            <div className="subject-actions">
              <button onClick={() => setIsEditing(true)} className="btn btn-edit">✏️</button>
              <button onClick={() => onDeleteSubject(subject.id)} className="btn btn-delete-subject">🗑️</button>
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="btn btn-expand"
              >
                {isExpanded ? '▲' : '▼'}
              </button>
            </div>
          </>
        )}
      </div>

      <ProgressBar completed={completedTopics} total={totalTopics} />

      {isExpanded && (
        <TopicList
          topics={subject.topics}
          onToggleTopic={handleToggleTopic}
          onDeleteTopic={handleDeleteTopic}
          onAddTopic={handleAddTopic}
        />
      )}
    </div>
  );
}
