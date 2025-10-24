export default function Experience() {
  const experiences = [
    {
      title: "Syracuse University — ECS Research Assistant Intern",
      period: "June 2025 – Present",
      description: "Creating an adaptive AI Agent with Continual Learning using LLMs that learns from user interactions over time. Integrated vector-based long term memory management, lightweight fine-tuning (LoRA), with tools for feedback-driven self-assessment modules to enable personalized learning and context retention. Studying cognition in Agentic systems, how agents evaluate confidence, adapt communication patterns, and bridge learning gaps through Retrieval-Augmented Generation (RAG) and self-reflective reasoning.",
      company: "Syracuse University"
    },
    {
      title: "Intel — Graduate Technical Intern",
      period: "June 2024 – August 2024",
      description: "Developed a machine learning model using hierarchical clustering to analyze patterns from Intel's SoCWatch profiler, focusing on chip-level power states (C and P). Profiled CPU and GPU workloads to analyze performance and power trade-offs, insights applicable to GPU-accelerated inference.",
      company: "Intel"
    },
    {
      title: "Maven Silicon — VLSI Design Intern",
      period: "September 2022 – October 2022",
      description: "Designed an AHB to APB Bridge using Verilog, facilitating communication between high-performance AHB and low-power APB peripheral components in embedded systems. Ensured efficient data transfer and hardware integration by applying advanced RTL design techniques to optimize bus compatibility and performance. Improved data transfer speeds by 40% and reduced power consumption by 30% while maintaining signal integrity.",
      company: "Maven Silicon"
    },
    {
      title: "Srijan Technologies — Data Science Intern",
      period: "June 2021 – July 2021",
      description: "Predicted respiratory disorders using a custom CNN-based deep learning model to analyze voice notes. Converted audio samples into Mel spectrogram images to detect subtle respiratory illness markers through advanced signal processing. Analyzed Mel spectrogram of 10,000+ voice recordings, identifying chronic respiratory disorders with 92% accuracy.",
      company: "Srijan Technologies"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-12 pt-12 pb-12 space-y-12">
      <section>
        <h2 className="text-[2rem] font-bold text-black mb-8" data-testid="heading-experience">
          EXPERIENCE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[1.2rem] font-bold text-black mb-2">
                {experience.title}
              </h3>
              <p className="text-[0.9rem] text-gray-600 mb-3 font-medium">
                {experience.period}
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
