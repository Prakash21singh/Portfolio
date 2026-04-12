export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-2">About</h2>

      <p className="text-primary-text leading-relaxed max-w-2xl">
        I’m a developer who enjoys building systems that actually solve problems
        — especially on the backend. Lately, I’ve been working on things like
        async workflows, job queues, and multi-cloud setups.
        <br />
        <br />I care about clean architecture, performance, and writing code
        that holds up in real-world use — not just demos.
      </p>

      <div className="bg-primary-dark p-5 my-3 text-center rounded-sm text-white/60">
        I build systems not just interface.
      </div>

      <div className="w-full h-px bg-white/5 mt-8 mb-4" />
    </div>
  );
}
