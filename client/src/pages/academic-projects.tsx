export default function AcademicProjects() {
  const projects = [
    {
      title: "AIoT Smart Classroom System",
      period: "January - April 2025",
      description: "AIoT-based smart education platform integrating RFID and Wi-Fi validation for secure, fraud-proof attendance tracking and AI-powered classroom assistance to enhance student engagement, prioritizing communication across systems working together in an ecosystem.",
      reportLink: "#" // Placeholder - replace with actual PDF link
    },
    {
      title: "Mental Health Categories on Reddit",
      period: "August - December 2024",
      description: "Applied LSTM and Structured Perceptron models, to classify and analyze Reddit posts by mental health categories such as anxiety, depression, and suicidal ideation.",
      reportLink: "#" // Placeholder - replace with actual PDF link
    },
    {
      title: "Movie Review Analysis for Letterboxd Data",
      period: "August - December 2024",
      description: "Performed multi-faceted analysis of Letterboxd movie reviews using Python and HuggingFace transformers, focusing on sentiment, genre, user engagement, sarcasm, and temporal patterns.",
      reportLink: "#" // Placeholder - replace with actual PDF link
    },
    {
      title: "AI-Driven Gomoku Algorithm",
      period: "August - December 2023",
      description: "AI-based Gomoku game using the Minimax search algorithm with a custom heuristic evaluation function, considering immediate threats and multi-step future outcomes.",
      reportLink: null
    },
    {
      title: "Detection of Melanoma using Computer Vision (Capstone Project, VIT)",
      period: "January - June 2023",
      description: "Melanoma detection system using ResNet50 and EfficientNet CNNs, classifying over 50,000 dermoscopic images of skin lesions. Applied data augmentation for better model generation.",
      reportLink: null
    },
    {
      title: "Vehicle Detection using Mask R-CNN",
      period: "July - December 2022",
      description: "Designed and trained a Mask R-CNN model for vehicle and pedestrian detection across 25,000+ test images.",
      reportLink: null
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-12 pt-12 pb-12 space-y-12">
      <section>
        <h2 className="text-[2rem] font-bold text-black mb-8" data-testid="heading-projects">
          ACADEMIC PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[1.2rem] font-bold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-[0.9rem] text-gray-600 mb-3 font-medium">
                {project.period}
              </p>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                {project.description}
              </p>
              {project.reportLink && (
                <a 
                  href={project.reportLink}
                  className="text-[#A20597] hover:underline font-medium text-[0.9rem]"
                  data-testid={`link-report-${index}`}
                >
                  View Report →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
