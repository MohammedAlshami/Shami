import { useState } from 'react';
import Image from 'next/image';
import YouTube from 'react-youtube';

interface Step {
  title: string;
  resources: { type: 'video' | 'link'; url: string }[];
  checked: boolean; // Added checked property for each step
}

interface Topic {
  title: string;
  steps: Step[];
}

interface Course {
  title: string;
  description: string;
  image: string;
  topics: Topic[];
}

export default function Page() {
  // Initial courses data stored in state so we can update it dynamically
  const [courses, setCourses] = useState<Course[]>([
    {
      title: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript.',
      image: '/js-course.png',
      topics: [
        {
          title: 'Variables and Types',
          steps: [
            {
              title: 'Learn about variables',
              resources: [
                { type: 'video', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk' },
                { type: 'link', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types' },
              ],
              checked: false,
            },
            {
              title: 'Data types overview',
              resources: [
                { type: 'link', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures' },
              ],
              checked: false,
            },
          ],
        },
        {
          title: 'Functions',
          steps: [
            {
              title: 'Understanding functions',
              resources: [
                { type: 'video', url: 'https://www.youtube.com/watch?v=MFuwkrseXVE' },
                { type: 'link', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions' },
              ],
              checked: false,
            },
          ],
        },
      ],
    },
    {
      title: 'React Basics',
      description: 'Understand the basics of React.js.',
      image: '/react-course.png',
      topics: [
        {
          title: 'Components and Props',
          steps: [
            {
              title: 'Intro to Components',
              resources: [
                { type: 'link', url: 'https://reactjs.org/docs/components-and-props.html' },
                { type: 'video', url: 'https://www.youtube.com/watch?v=XtMThy8QKqU' },
              ],
              checked: false,
            },
          ],
        },
      ],
    },
  ]);

  const [activeCourse, setActiveCourse] = useState<number | null>(null);
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setActiveCourse(activeCourse === index ? null : index);
    setActiveTopic(null); // Reset topic if course changes
  };

  const toggleTopic = (index: number) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  const handleCheckStep = (courseIndex: number, topicIndex: number, stepIndex: number) => {
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      const currentStep = updatedCourses[courseIndex].topics[topicIndex].steps[stepIndex];
      currentStep.checked = !currentStep.checked; // Toggle checked state
      return updatedCourses;
    });
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Learning Roadmap</h1>
      <div className="grid gap-4">
        {courses.map((course, courseIndex) => (
          <div
            key={courseIndex}
            className={`border bg-neutral-800/40 border-neutral-700 rounded-lg p-4 transition-all ${
              activeCourse === courseIndex ? 'w-full' : 'w-full md:w-1/2'
            }`}
            onClick={() => toggleCourse(courseIndex)}
          >
            <div className="flex flex-col md:flex-row items-center cursor-pointer hover:bg-neutral-700 transition-colors">
              <Image
                src={course.image}
                alt={course.title}
                width={100}
                height={100}
                className="rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{course.title}</h2>
                <p>{course.description}</p>
              </div>
            </div>
            {activeCourse === courseIndex && (
              <div className="mt-4">
                {course.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="mt-4">
                    <h3
                      className="text-lg font-semibold cursor-pointer hover:text-neutral-300"
                      onClick={() => toggleTopic(topicIndex)}
                    >
                      {topic.title}
                    </h3>
                    {activeTopic === topicIndex && (
                      <div className="ml-4 mt-2">
                        {topic.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start mb-4">
                            <button
                              className={`mr-4 w-6 h-6 rounded-full border-2 ${
                                step.checked ? 'bg-green-500 border-green-500' : 'border-neutral-600'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCheckStep(courseIndex, topicIndex, stepIndex);
                              }}
                            />
                            <div>
                              <p className="font-medium">{step.title}</p>
                              <div className="ml-6 mt-2">
                                {step.resources.map((resource, resourceIndex) => (
                                  <div key={resourceIndex} className="mb-2">
                                    {resource.type === 'video' ? (
                                      <YouTube videoId={resource.url.split('v=')[1]} className="w-full max-w-sm" />
                                    ) : (
                                      <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                      >
                                        {resource.url}
                                      </a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
