import React from "react";

const Experience = () => {
  return (
    <section className="w-full p-5">
      <h1 className="text-center text-3xl lg:text-5xl text-purple">
        Experience
      </h1>
      <div className="w-full h-auto p-5 flex flex-col min-h-[80vh]">
        <div className="w-full  py-10  flex flex-col sm:flex-row justify-around gap-4">
          <div className=" w-full p-4">
            <h1 className="text-xl lg:text-3xl text-purple text-center ">
              Rework AI - Mern Engineer{" "}
              <p className="text-xl text-black-300">Internship</p>
            </h1>
            <ul className="text-black-400">
              <li className="my-2">
                <span className="text-white-200">Led Backend Development:</span>
                Spearheaded the creation of the backend architecture, ensuring
                scalability and efficient data management.
              </li>

              <li className="my-2">
                <span className="text-white-200">Repository Management:</span>{" "}
                Managed the repository, maintaining a clean and organized
                codebase while implementing best practices in version control.
              </li>
              <li className="my-2">
                <span className="text-white-200">Team Guidance:</span>{" "}
                Collaborated with and guided both frontend and backend teams,
                ensuring seamless integration and productivity.
              </li>
              <li className="my-2">
                <span className="text-white-200">Project Leadership:</span>
                Took ownership of the backend development lifecycle, from
                planning to deployment, ensuring all deadlines were met.
              </li>
              <li className="my-2">
                <span className="text-white-200">Problem Solving:</span>{" "}
                Addressed complex technical challenges, providing solutions that
                enhanced the overall system performance.
              </li>
              <li className="my-2 ">
                <span className="text-white-200">Tools & Technologies:</span>{" "}
                Worked extensively with [mention specific technologies, e.g.,
                Node.js, Express, MongoDB, etc.], contributing to a robust and
                efficient backend system.
              </li>
            </ul>
          </div>
          <div className="w-full p-4">
            <h1 className="text-xl lg:text-3xl text-purple text-center ">
              Apna College - Teaching Assistant (MERN Stack)
              <p className="text-xl text-black-300">Internship</p>
            </h1>
            <ul className="text-black-400">
              <li className="my-2">
                <span className="text-white-200">Student Support:</span>
                Provided extensive support to students by resolving their doubts
                and clarifying complex concepts, ensuring a deep understanding
                of the course material.
              </li>

              <li className="my-2">
                <span className="text-white-200">Top Performer:</span>
                Ranked among the top 3 Teaching Assistants of the month,
                recognized for consistently delivering high-quality assistance
                to students and helping them succeed.
              </li>

              <li className="my-2">
                <span className="text-white-200">Doubt Resolution:</span>
                Handled a high volume of student queries, offering personalized
                guidance and explanations that contributed to improved student
                performance.
              </li>

              <li className="my-2">
                <span className="text-white-200">
                  Collaborative Environment:
                </span>
                Worked closely with fellow Teaching Assistants and course
                instructors to create a collaborative and supportive learning
                environment.
              </li>

              <li className="my-2">
                <span className="text-white-200">Skill Development:</span>
                Developed strong communication and problem-solving skills while
                addressing a diverse range of student challenges and learning
                styles.
              </li>

              <li className="my-2">
                <span className="text-white-200">Impact:</span>
                Played a key role in enhancing the overall learning experience
                for students, leading to positive feedback and increased student
                engagement.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
