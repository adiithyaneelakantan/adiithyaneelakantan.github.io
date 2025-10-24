export default function Home() {
  const updates = [
    {
      date: "June 16, 2025",
      description: "Started working on Research project - AI agents with Continual learning"
    },
    {
      date: "May 10, 2025",
      description: "Graduated from Syracuse University, Masters in CS"
    },
    {
      date: "April 26, 2025",
      description: "Wrapped up AIOT Smart Classroom Prototype project"
    },
    {
      date: "December 2, 2024",
      description: "Completed Mental Health categories project on Reddit data, along with 5 other students"
    },
    {
      date: "August 23, 2024",
      description: "Completed 12 week summer internship at Intel"
    },
    {
      date: "August 28, 2023",
      description: "Started Masters in CS degree at Syracuse University"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-12 pt-12 pb-12 space-y-12">
      {/* About Section */}
      <section>
        <h2 className="text-[2rem] font-bold text-black mb-4" data-testid="heading-about">
          About
        </h2>
        <p className="text-[1.1rem] text-black leading-[1.8] text-justify font-bold" data-testid="text-about">
          Hey, I'm a recent graduate at Syracuse University, with a masters degree in Computer Sciences. 
          I'm a research intern at SU, working on building continually learning and adapting AI agents, 
          to study cognition in Agentic AI systems, how agents think about their reasoning process, 
          adapt and learn from users interactions over time. I've also done projects on machine learning, 
          network analysis, natural language processing and computer vision.
        </p>
      </section>

      {/* Updates Section */}
      <section>
        <h2 className="text-[2rem] font-bold text-black mb-6" data-testid="heading-updates">
          Updates
        </h2>
        <div className="relative pl-8">
          {/* Timeline vertical line */}
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-[#A20597]" />
          
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div
                key={index}
                className="relative flex gap-4"
                data-testid={`update-item-${index}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[26px] top-1 w-3 h-3 rounded-full bg-[#A20597] border-2 border-white ring-2 ring-[#A20597]" />
                
                <div className="flex-1">
                  <div className="text-[1rem] text-black font-medium mb-1">
                    {update.date}
                  </div>
                  <div className="text-[1rem] text-black leading-[1.6]">
                    {update.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Vision Section */}
      <section>
        <h2 className="text-[2rem] font-bold text-black mb-4" data-testid="heading-research">
          Research Vision
        </h2>
        <div className="text-[1rem] text-black leading-[1.8] space-y-4 text-justify" data-testid="text-research">
          <p>
            My research interests lie at the intersection of Human-Computer Interaction and Computational 
            Communication. I aim to study and design adaptive, human-centered AI systems that augment 
            human decision-making and the cognitive processes guiding it. My approach combines computational 
            methods such as network analysis, text and web mining, data analytics, machine learning, and 
            cognitive modeling.
          </p>
          <p>
            Specifically, I am interested in bridging computational efficiency with metacognitive intelligence, 
            exploring how AI agents can be designed to not only perform tasks efficiently but also reflect 
            on their decision-making processes. This includes studying how agents can adapt their communication 
            patterns based on user feedback, how they manage and update their internal knowledge representations, 
            and how they evaluate their own confidence and uncertainty in different contexts.
          </p>
          <p>
            Through this work, I seek to contribute to the development of AI systems that are not just tools, 
            but collaborative partners capable of learning, adapting, and growing alongside their human users. 
            My goal is to advance our understanding of both artificial and human cognition, ultimately creating 
            technologies that enhance rather than replace human capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}
