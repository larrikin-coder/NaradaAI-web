import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aiAnimation from "./assets/ai-animation.json"; 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-purple-900 text-white">
      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <motion.h1
          className="text-6xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-yellow-400">Narada-AI</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          The cloud-powered AI recommendation engine that guides you toward the right choices.
        </motion.p>
        <motion.div
          className="w-72 mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Lottie animationData={aiAnimation} loop />
        </motion.div>
        <motion.button
          className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-indigo-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Narada-AI?
          </motion.h2>
          <p className="mt-4 text-lg text-gray-700">
            Combining ancient wisdom with modern AI, Narada-AI offers the best personalized recommendations.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Hybrid Intelligence", "Cloud-Optimized", "Ethical AI"].map((title, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-indigo-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-700">
                  {title === "Hybrid Intelligence" && "Merging collaborative filtering with deep learning and ethical AI."}
                  {title === "Cloud-Optimized" && "Runs on AWS, Azure, and Google Cloud with real-time AI scaling."}
                  {title === "Ethical AI" && "AI-driven guidance inspired by the wisdom of Narada Muni."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-indigo-900 text-center">
        <motion.h2
          className="text-4xl font-bold text-yellow-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Where It Works
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["E-Commerce", "Streaming Services", "Career Pathways"].map((useCase, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-black shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">{useCase}</h3>
              <p className="mt-2">
                {useCase === "E-Commerce" && "Boost sales with AI-powered product recommendations."}
                {useCase === "Streaming Services" && "Smart movie and music recommendations based on your taste."}
                {useCase === "Career Pathways" && "Personalized career suggestions based on AI analysis."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-200 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Users Say
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Increased our conversion rate by 50% in just two months!", "E-Commerce Business Owner"],
            ["Narada-AI's ethical AI approach is game-changing!", "Tech Startup CEO"],
            ["Finally, an AI that guides users in the right direction!", "AI Researcher"]
          ].map(([quote, author], index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic">"{quote}"</p>
              <h4 className="mt-4 font-semibold">- {author}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-400 text-center text-black">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Experience the Future?
        </motion.h2>
        <p className="mt-4 text-lg">Empower your decisions with AI-driven wisdom.</p>
        <motion.button
          className="mt-6 px-6 py-3 bg-indigo-800 text-yellow-400 font-semibold rounded-lg hover:bg-indigo-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-indigo-900 text-center">
        <p className="text-white">&copy; 2025 Narada-AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
