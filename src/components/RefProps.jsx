import { useRef, forwardRef } from "react";
import { ThemeToggleButton, useTheme } from "./ThemeToggler";

//Input component accept a ref prop

const CustomInput = forwardRef(({ label, className, placeholder }, ref) => {
  return (
    <div>
      <label className={`block text-gray-700 font-medium mb-2 ${className}`}>{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

export function RefProps() {
  const { themeTextColors, themeBgColors,isDark } = useTheme();

  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getFirstInputValue = () => {
    const value = inputRef.current?.value;
    if (!value) return;
    alert(value);
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  const getSecondInputValue = () => {
    const value = secondInputRef.current?.value;
    if (!value) return;
    alert(value);
  };

  const resetValues = () => {
    inputRef.current.value = "";
    secondInputRef.current.value = "";
  };

  return (
    <section className={`p-8 shadow-xl  rounded-2xl ${themeBgColors} ${isDark ? "border-gray-500 border-4 shadow-2xl" : ""}`}>
      <div className="flex justify-between">
        <h2 className={`text-3xl font-bold  mb-5 ${themeTextColors}`}>
          RefProps
        </h2>
        <ThemeToggleButton />
      </div>

      <h2 className={`text-2xl font-bold mb-2 ${themeTextColors}`}>
        Why{" "}
        <code className="text-pink-600 bg-gray-100 px-1.5 rounded">
          useRef()
        </code>{" "}
        Matters
      </h2>
      <p className="text-md text-gray-500 mb-6 leading-relaxed">
        <code className="bg-gray-100 text-pink-600 px-1 rounded">useRef()</code>{" "}
        gives you a way to hold a value that
        <strong className="text-gray-700">
          persists across renders without causing a re-render
        </strong>{" "}
        when it changes. It is the escape hatch from React's normal state flow.
      </p>

      <div className="space-y-4 mb-10">
        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50  ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            1
          </div>
          <div>
            <h3 className={`font-semibold  mb-1 ${themeTextColors}`}>
              Accessing DOM elements directly
            </h3>
            <p className=" text-gray-500 leading-relaxed">
              Sometimes you need direct access to a DOM node — focusing an
              input, measuring an element's size, or triggering a media player.
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                useRef()
              </code>
              gives you that without any workarounds.
            </p>
          </div>
        </div>

        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50  ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold ">
            2
          </div>
          <div>
            <h3 className={`font-semibold  mb-1 ${themeTextColors}`}>
              Storing a value without triggering a re-render
            </h3>
            <p className=" text-gray-500 leading-relaxed">
              Unlike{" "}
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                useState
              </code>
              , updating a ref does{" "}
              <strong className="text-gray-700">not</strong> cause the component
              to re-render. This makes it ideal for storing timers, previous
              values, or flags that the UI does not need to react to.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">
        <code className="text-pink-600 bg-gray-100 px-1.5 rounded">
          useState
        </code>{" "}
        vs{" "}
        <code className="text-pink-600 bg-gray-100 px-1.5 rounded">useRef</code>
      </h3>
      <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12">
        <table className="w-full  text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-5 py-3 font-semibold"></th>
              <th className="px-5 py-3 font-semibold">useState</th>
              <th className="px-5 py-3 font-semibold">useRef</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr >
              <td className="px-5 py-3 text-gray-600 font-medium">
                Triggers re-render?
              </td>
              <td className="px-5 py-3 text-green-600 font-semibold">✅ Yes</td>
              <td className="px-5 py-3 text-red-500 font-semibold">❌ No</td>
            </tr>
            <tr >
              <td className="px-5 py-3 text-gray-600 font-medium">
                Persists across renders?
              </td>
              <td className="px-5 py-3 text-green-600 font-semibold">✅ Yes</td>
              <td className="px-5 py-3 text-green-600 font-semibold">✅ Yes</td>
            </tr>
            <tr >
              <td className="px-5 py-3 text-gray-600 font-medium">Use for</td>
              <td className="px-5 py-3 text-gray-500">
                UI that needs to update
              </td>
              <td className="px-5 py-3 text-gray-500">
                DOM access, timers, flags
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="border-gray-200 mb-10" />

      <h2 className={`text-2xl font-bold mb-2 ${themeTextColors}`}>
        Why{" "}
        <code className="text-pink-600 bg-gray-100 px-1.5 rounded">
          forwardRef()
        </code>{" "}
        Matters
      </h2>
      <p className=" text-gray-500 mb-6 leading-relaxed">
        By default,{" "}
        <strong className="text-gray-700">
          you cannot pass a ref to a custom component
        </strong>
        . React does not forward refs automatically.
        <code className="bg-gray-100 text-pink-600 px-1 rounded">
          forwardRef()
        </code>{" "}
        solves this by allowing a parent component to attach a ref directly to a
        DOM element <strong className="text-gray-700">inside</strong> a child
        component.
      </p>

      <div className="space-y-4 mb-10">
        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50  ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold ">
            1
          </div>
          <div>
            <h3 className={`font-semibold  mb-1 ${themeTextColors}`}>
              Design systems and component libraries
            </h3>
            <p className=" text-gray-500 leading-relaxed">
              Every reusable input, button, or modal needs to support refs so
              consumers can control focus, scrolling, and animation from outside
              the component.
            </p>
          </div>
        </div>

        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50  ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
            2
          </div>
          <div>
            <h3 className={`font-semibold  mb-1 ${themeTextColors}`}>Form libraries</h3>
            <p className=" text-gray-500 leading-relaxed">
              Libraries like React Hook Form rely on refs to register and
              control inputs. Without{" "}
              <code className="bg-gray-200 text-pink-600 px-1 rounded">
                forwardRef
              </code>
              , your custom inputs are invisible to the form library.
            </p>
          </div>
        </div>

        <div
          className={`flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50  ${themeBgColors}`}
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold ">
            3
          </div>
          <div>
            <h3 className={`font-semibold  mb-1 ${themeTextColors}`}>Accessibility</h3>
            <p className=" text-gray-500 leading-relaxed">
              Managing focus programmatically — e.g. moving focus to a modal
              when it opens — requires refs to reach inside child components.
            </p>
          </div>
        </div>
      </div>

      <CustomInput
        label="First Input"
        className={`${isDark?'text-white':'text-gray-800'}`}
        ref={inputRef}
        placeholder="Focus, Enter a value and Get Input Value"
      />

      <CustomInput
        label="Second Input"
        className={`${isDark?'text-white':'text-gray-800'}`}
        ref={secondInputRef}
        placeholder="Focus, Enter a value and Get Input Value"
      />

      <div className="flex flex-wrap gap-2">
        <button
          className="bg-blue-600 rounded px-3 py-2 transition"
          onClick={focusInput}
        >
          Focus First Input
        </button>

        <button
          className="bg-blue-600 rounded px-3 py-2"
          onClick={getFirstInputValue}
        >
          Get First Input value
        </button>

        <button
          className="bg-blue-400 rounded px-3 py-2"
          onClick={focusSecondInput}
        >
          Focus Second Input
        </button>

        <button
          className="bg-blue-400 rounded px-3 py-2"
          onClick={getSecondInputValue}
        >
          Get Second Input value
        </button>

        <button
          className="bg-amber-600 rounded px-3 py-2"
          onClick={resetValues}
        >
          Reset Values
        </button>
      </div>

      <div className="flex items-start gap-3 bg-purple-50 border border-purple-200 rounded-xl p-5 mt-5">
        <span className="text-purple-500 text-xl mt-0.5">💡</span>
        <p className=" text-purple-700 leading-relaxed">
          <strong>The relationship:</strong>
          <code className="bg-purple-100 text-pink-600 px-1 rounded">
            useRef()
          </code>{" "}
          <strong>creates</strong> the ref.
          <code className="bg-purple-100 text-pink-600 px-1 rounded">
            forwardRef()
          </code>{" "}
          <strong>passes</strong> it through a component boundary so it can
          reach the DOM node it needs. They are designed to work together.
        </p>
      </div>
    </section>
  );
}
