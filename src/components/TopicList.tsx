import { useState } from 'react';
import type { Topic } from '../types';

interface TopicListProps {
  topics: Topic[];
  onToggleTopic: (topicId: string) => void;
  onDeleteTopic: (topicId: string) => void;
  onAddTopic: (topicName: string) => void;
}

export default function TopicList({ topics, onToggleTopic, onDeleteTopic, onAddTopic }: TopicListProps) {
  const [newTopicName, setNewTopicName] = useState('');

  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTopicName.trim()) {
      onAddTopic(newTopicName.trim());
      setNewTopicName('');
    }
  };

  return (
    <div className="topic-list">
      <form onSubmit={handleAddTopic} className="add-topic-form">
        <input
          type="text"
          value={newTopicName}
          onChange={(e) => setNewTopicName(e.target.value)}
          placeholder="Add new topic..."
          className="topic-input"
        />
        <button type="submit" className="btn btn-add">Add</button>
      </form>
      
      <div className="topics">
        {topics.length === 0 ? (
          <p className="no-topics">No topics yet. Add one to get started!</p>
        ) : (
          topics.map((topic) => (
            <div key={topic.id} className={`topic-item ${topic.completed ? 'completed' : ''}`}>
              <label className="topic-label">
                <input
                  type="checkbox"
                  checked={topic.completed}
                  onChange={() => onToggleTopic(topic.id)}
                  className="topic-checkbox"
                />
                <span className="topic-name">{topic.name}</span>
              </label>
              <button 
                onClick={() => onDeleteTopic(topic.id)} 
                className="btn-delete"
                aria-label="Delete topic"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
