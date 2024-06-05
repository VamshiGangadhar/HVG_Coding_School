import React, { useState } from "react";
import './AIandML.css'; // Importing the CSS file for styling

const AIandML = () => {
  const [activeTopic, setActiveTopic] = useState("Topic 1: Overview of AI and ML");

  const handleTopicChange = (topic) => {
    setActiveTopic(topic);
  };

  const topics = {
    "Topic 1: Overview of AI and ML": {
      title: "Topic 1: Overview of AI and ML",
      content: (
        <>
          <h2>Overview of AI and ML</h2>
          <p><strong>Definition of AI:</strong> Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. AI can perform tasks such as problem-solving, speech recognition, and decision-making.</p>
          <p><strong>Definition of ML:</strong> Machine Learning (ML) is a subset of AI that involves the use of algorithms and statistical models to enable machines to improve their performance on tasks through experience (data).</p>
          
          <h2>History and Applications</h2>
          <h3>History:</h3>
          <ul>
            <li>1950s-1960s: Early development of AI concepts, including Alan Turing's "Turing Test".</li>
            <li>1980s: Emergence of machine learning algorithms like decision trees.</li>
            <li>2000s-Present: Advances in computational power and data availability leading to breakthroughs in deep learning and neural networks.</li>
          </ul>
          <h3>Applications:</h3>
          <ul>
            <li>Healthcare: Disease prediction, personalized treatment, medical imaging analysis.</li>
            <li>Finance: Fraud detection, algorithmic trading, credit scoring.</li>
            <li>Retail: Recommendation systems, customer segmentation, inventory management.</li>
            <li>Transportation: Autonomous vehicles, route optimization, predictive maintenance.</li>
            <li>Entertainment: Content recommendation, game AI, virtual assistants.</li>
          </ul>
          
          <h2>Basic Terminologies</h2>
          <ul>
            <li><strong>Algorithm:</strong> A step-by-step procedure for calculations and data processing.</li>
            <li><strong>Model:</strong> A mathematical representation of a real-world process.</li>
            <li><strong>Training:</strong> The process of teaching an ML model using data.</li>
            <li><strong>Feature:</strong> An individual measurable property or characteristic of a phenomenon being observed.</li>
            <li><strong>Label:</strong> The output or target variable in supervised learning.</li>
            <li><strong>Dataset:</strong> A collection of data used for training and testing ML models.</li>
            <li><strong>Overfitting:</strong> A model that performs well on training data but poorly on new, unseen data.</li>
            <li><strong>Underfitting:</strong> A model that performs poorly on both training and new data.</li>
          </ul>
        </>
      )
    },
    "Topic 2: Types of Machine Learning": {
      title: "Topic 2: Types of Machine Learning",
      content: (
        <>
          <h2>Supervised Learning</h2>
          <p><strong>Definition:</strong> Supervised learning is a type of ML where the model is trained on a labeled dataset, meaning each training example is paired with an output label.</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>Classification: Predicting a categorical label (e.g., spam detection, image classification).</li>
            <li>Regression: Predicting a continuous value (e.g., house prices, stock prices).</li>
          </ul>
          <p><strong>Process:</strong></p>
          <ol>
            <li>Collect and preprocess data.</li>
            <li>Split data into training and test sets.</li>
            <li>Train the model on the training set.</li>
            <li>Validate and test the model on the test set.</li>
          </ol>
          {/* Add a flowchart here showing the process of Supervised Learning */}
          <img src="supervised-learning-flowchart.png" alt="Supervised Learning Flowchart" className="flowchart" />

          <h2>Unsupervised Learning</h2>
          <p><strong>Definition:</strong> Unsupervised learning involves training a model on data without labeled responses, allowing the model to identify patterns and structures in the data.</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>Clustering: Grouping similar data points together (e.g., customer segmentation, image segmentation).</li>
            <li>Association: Finding rules that describe large portions of the data (e.g., market basket analysis).</li>
          </ul>
          <p><strong>Process:</strong></p>
          <ol>
            <li>Collect and preprocess data.</li>
            <li>Use algorithms like K-Means, hierarchical clustering, or Apriori.</li>
            <li>Analyze the patterns and groupings found by the model.</li>
          </ol>
          {/* Add a flowchart here showing the process of Unsupervised Learning */}
          <img src="unsupervised-learning-flowchart.png" alt="Unsupervised Learning Flowchart" className="flowchart" />

          <h2>Reinforcement Learning</h2>
          <p><strong>Definition:</strong> Reinforcement learning is a type of ML where an agent learns to make decisions by performing actions in an environment to maximize cumulative reward.</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>Game Playing: AlphaGo, OpenAI Five.</li>
            <li>Robotics: Robot navigation and manipulation.</li>
          </ul>
          <p><strong>Process:</strong></p>
          <ol>
            <li>Define the environment and possible actions.</li>
            <li>Implement a reward system.</li>
            <li>Use algorithms like Q-Learning or Deep Q-Networks (DQN) to train the agent.</li>
            <li>Allow the agent to learn through trial and error.</li>
          </ol>
          {/* Add a flowchart here showing the process of Reinforcement Learning */}
          <img src="reinforcement-learning-flowchart.png" alt="Reinforcement Learning Flowchart" className="flowchart" />

          <h2>Key Differences</h2>
          <p><strong>Supervised vs. Unsupervised:</strong></p>
          <ul>
            <li>Supervised learning uses labeled data; unsupervised learning uses unlabeled data.</li>
            <li>Supervised learning focuses on prediction; unsupervised learning focuses on pattern detection.</li>
          </ul>
          <p><strong>Supervised vs. Reinforcement:</strong></p>
          <ul>
            <li>Supervised learning has a fixed dataset; reinforcement learning involves interaction with a dynamic environment.</li>
            <li>Supervised learning aims at learning from examples; reinforcement learning aims at learning through rewards and penalties.</li>
          </ul>
        </>
      )
    }
  };

  return (
    <div className="course-container">
      <div className="side-navigation">
        <ul>
          <li className="Topic-title">Topic 1</li>
          <li onClick={() => handleTopicChange("Topic 1: Overview of AI and ML")} className={activeTopic === "Topic 1: Overview of AI and ML" ? 'active' : ''}>
            Overview of AI and ML
          </li>
          <li className="Topic-title">Topic 2</li>
          <li onClick={() => handleTopicChange("Topic 2: Types of Machine Learning")} className={activeTopic === "Topic 2: Types of Machine Learning" ? 'active' : ''}>
            Types of Machine Learning
          </li>
        </ul>
      </div>
      <div className="content-section">
        <h1>{topics[activeTopic].title}</h1>
        {topics[activeTopic].content}
      </div>
    </div>
  );
};

export default AIandML;
