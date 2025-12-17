# 📚 Study Planner

A beautiful and intuitive study planner web application built with React, TypeScript, and Vite. Track your study progress across multiple subjects with topics and visual progress bars.

## ✨ Features

- **Subject Management**: Create, edit, and delete subjects with syllabus descriptions
- **Topic Tracking**: Add topics to each subject and mark them as completed
- **Progress Visualization**: Automatic progress bars showing completion percentage for each subject
- **Theme Switcher**: Toggle between light and dark modes with smooth transitions
- **Data Persistence**: All data is automatically saved to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient designs with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IJabiullah/stydy-planner.git
cd stydy-planner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 How to Use

1. **Add a Subject**: Click the "+ Add New Subject" button to create a new subject
2. **Add Topics**: Expand a subject and add topics you need to study
3. **Track Progress**: Check off topics as you complete them - the progress bar updates automatically
4. **Edit/Delete**: Use the edit (✏️) and delete (🗑️) buttons to manage your subjects
5. **Toggle Theme**: Click the theme toggle button (🌙/☀️) in the header to switch between light and dark modes

## 🛠️ Tech Stack

- **React 19.2.0**: Modern UI library
- **TypeScript 5.9.3**: Type-safe JavaScript
- **Vite 7.2.4**: Fast build tool and dev server
- **CSS3**: Custom styling with CSS variables for theming

## 📁 Project Structure

```
src/
├── components/
│   ├── AddSubjectForm.tsx    # Form to add new subjects
│   ├── SubjectCard.tsx        # Individual subject card with topics
│   ├── TopicList.tsx          # List of topics with checkboxes
│   ├── ProgressBar.tsx        # Visual progress indicator
│   └── ThemeToggle.tsx        # Light/dark mode toggle
├── hooks/
│   └── useLocalStorage.ts     # Custom hook for localStorage
├── types.ts                   # TypeScript type definitions
├── App.tsx                    # Main application component
├── App.css                    # Application styles
└── main.tsx                   # Application entry point
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React and TypeScript
