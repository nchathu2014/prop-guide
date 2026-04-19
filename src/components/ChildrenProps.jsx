import { ThemeToggleButton, useTheme } from "./ThemeToggler";

function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-green-500 bg-green-500",
    purple: "border-purple-500 bg-purple-500",
    red: "border-red-500 bg-red-500",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
}

export function ChildrenProps() {
  const { themeTextColors, themeBgColors,isDark } = useTheme();
  return (
    <section className={`p-8 shadow-xl  rounded-2xl ${themeBgColors} ${isDark ? "border-gray-500 border-4 shadow-2xl" : ""}`}>
      <div className="flex justify-between">
        <h2 className={`text-3xl font-bold mb-3 ${themeTextColors}`}>
          Children Props
        </h2>
        <ThemeToggleButton />
      </div>

      <div className="space-y-4">
        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-600 transition-colors ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              Reusability without repetition
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Instead of hardcoding content inside a component,
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                children
              </code>
              lets the parent decide what goes inside. The same
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                Card
              </code>
              ,
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                Container
              </code>
              , or
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                Modal
              </code>
              component can display completely different content every time it
              is used.
            </p>
          </div>
        </div>

        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-600 transition-colors ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              Separation of concerns
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The wrapper component owns the{" "}
              <strong className="text-gray-700">structure and style</strong>.
              The parent component owns the{" "}
              <strong className="text-gray-700">content</strong>. Neither needs
              to know about the other's internals.
            </p>
          </div>
        </div>

        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-600 transition-colors ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              Flexible composition
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              You can pass anything as children — text, elements, other
              components, or even nothing at all. This is what makes layout
              components like
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                Container
              </code>
              ,
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                Card
              </code>
              , and
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                Modal
              </code>
              genuinely reusable across an entire application.
            </p>
          </div>
        </div>

        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-600 transition-colors ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            4
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Cleaner code</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Without{" "}
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                children
              </code>
              , you would need to pass content as props like
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                content={`<p>...</p>`}
              </code>
              — which is verbose, harder to read, and breaks the natural feel of
              JSX as markup.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className={`mt-4 mb-5 font-semibold text-2xl ${themeTextColors}`}>
            Card Component with Children
          </h3>
          <Container layout="grid">
            <Card title="User Profle" color="blue">
              <p className="mb-2">
                <strong>Name:</strong> Nuwan Thuduwage
              </p>

              <p className="mb-2">
                <strong>Email:</strong> nuwan.thuduwage@gmail.com
              </p>

              <p className="mb-2">
                <strong>Role:</strong> Software Developer
              </p>
            </Card>

            <Card title="Heros" color="green">
              <p className="mb-2">
                <strong>Name:</strong> Avengers
              </p>

              <p className="mb-2">
                <strong>Email:</strong> No contacts :D
              </p>

              <p className="mb-2">
                <strong>Role:</strong> Save the World
              </p>

              <button className="bg-gray-800 rounded font-medium text-white py-2 px-4 hover:bg-gray-400 hover:text-gray-800 transition-all cursor-pointer">
                Call Us
              </button>
            </Card>

            <Card color="purple">
              <h2 className="text-2xl text-amber-200">
                Hi there, how are you :)
              </h2>
            </Card>

            <Card color="red">
              <h2 className="text-2xl text-amber-200">Error occured</h2>
            </Card>
          </Container>
        </div>
      </div>

      <div className="mt-8 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-5">
        <span className="text-blue-500 text-xl mt-0.5">💡</span>
        <p className="text-sm text-blue-700 leading-relaxed">
          <strong>One line summary:</strong>
          <code className="bg-blue-100 text-pink-600 px-1 rounded">
            children
          </code>
          is what makes a component a <strong>wrapper</strong> instead of just a{" "}
          <strong>display</strong>.
        </p>
      </div>
    </section>
  );
}
