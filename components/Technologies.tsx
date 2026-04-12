import { TECH_STACKS } from "@/lib/constant";

export default function Technologies() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-2">
        Technologies I work with
      </h2>

      <p className="text-gray-400 mb-6">
        Tools and technologies I use to build scalable, production-ready
        systems.
      </p>

      <div className="space-y-5">
        {TECH_STACKS.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm text-gray-500 mb-3 uppercase tracking-wider">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-5">
              {group.items.map(({ name, Icon }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-0"
                >
                  <Icon />

                  <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
