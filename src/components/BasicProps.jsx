import { useState } from "react";
import { useTheme } from "./ThemeToggler";

function Button({
  text = "Button",
  color = "primary",
  size = "medium",
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
            ${size === "small" ? "text-sm px-2 py-1" : ""}
            ${size === "medium" ? "text-lg px-5 py-2" : ""}
            ${size === "large" ? "text-lg px-8 py-3" : ""}
            ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
            ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
            ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
            ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}  
            ${color === "warning" ? "bg-yellow-500 hover:bg-yellow-600 text-white" : ""} 
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}        
            `}
    >
      {text}
    </button>
  );
}

export function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
const {themeTextColors, themeBgColors} = useTheme()
  return (
    <>
      <section className={`p-8 shadow-xl rounded-2xl ${themeBgColors}`}>
        <h2 className="text-3xl font-bold text-gray-800">Basic Props</h2>

        <p className="text-gray-500 text-sm mb-10 leading-relaxed">
          A flexible, reusable React button component that supports multiple
          visual variants, sizes, and states — designed to cover the most common
          UI interaction patterns out of the box.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Variants</h2>
          <p className="text-gray-500 text-sm mb-4">
            The component accepts a{" "}
            <code className="bg-gray-100 text-pink-600 px-1 rounded">variant</code>{" "}
            prop to control the button's visual style, making it easy to
            communicate intent at a glance.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Primary
              </span>
              <span className="text-sm text-gray-500">
                The default call-to-action style.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Secondary
              </span>
              <span className="text-sm text-gray-500">
                For less prominent actions.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Danger
              </span>
              <span className="text-sm text-gray-500">
                For destructive or irreversible actions.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Success
              </span>
              <span className="text-sm text-gray-500">
                For confirmation or completion actions.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Warning
              </span>
              <span className="text-sm text-gray-500">
                For actions that require caution.
              </span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Sizes</h2>
          <p className="text-gray-500 text-sm mb-4">
            The component accepts a{" "}
            <code className="bg-gray-100 text-pink-600 px-1 rounded">size</code>{" "}
            prop with three options to fit different layout contexts.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Small
              </span>
              <span className="text-sm text-gray-500">
                Compact, suitable for dense UIs or inline actions.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Medium
              </span>
              <span className="text-sm text-gray-500">
                The default size, suitable for most use cases.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-28 text-right text-sm font-semibold text-gray-700 mt-0.5">
                Large
              </span>
              <span className="text-sm text-gray-500">
                For prominent actions that need visual emphasis.
              </span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Disable State</h2>
          <p className="text-gray-500 text-sm">
            The component accepts a{" "}
            <code className="bg-gray-100 text-pink-600 px-1 rounded">disabled</code>{" "}
            prop that visually dims the button and prevents interaction —
            clearly communicating to the user that the action is currently
            unavailable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Click Tracking</h2>
          <p className="text-gray-500 text-sm">
            The component supports an{" "}
            <code className="bg-gray-100 text-pink-600 px-1 rounded">onClick</code>{" "}
            handler, enabling parent components to respond to user interactions
            — demonstrated here with a live click counter.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Props Summary</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-5 py-3 font-semibold">Prop</th>
                  <th className="px-5 py-3 font-semibold">Type</th>
                  <th className="px-5 py-3 font-semibold">Default</th>
                  <th className="px-5 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <code className="text-pink-600 bg-gray-100 px-1 rounded">
                      variant
                    </code>
                  </td>
                  <td className="px-5 py-3 text-gray-500">string</td>
                  <td className="px-5 py-3 text-gray-500">primary</td>
                  <td className="px-5 py-3 text-gray-500">
                    Visual style —{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      primary
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      secondary
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      danger
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      success
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      warning
                    </code>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <code className="text-pink-600 bg-gray-100 px-1 rounded">
                      size
                    </code>
                  </td>
                  <td className="px-5 py-3 text-gray-500">string</td>
                  <td className="px-5 py-3 text-gray-500">medium</td>
                  <td className="px-5 py-3 text-gray-500">
                    Button size —{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      small
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      medium
                    </code>
                    ,{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      large
                    </code>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <code className="text-pink-600 bg-gray-100 px-1 rounded">
                      disabled
                    </code>
                  </td>
                  <td className="px-5 py-3 text-gray-500">boolean</td>
                  <td className="px-5 py-3 text-gray-500">false</td>
                  <td className="px-5 py-3 text-gray-500">
                    Disables the button when{" "}
                    <code className="bg-gray-100 text-pink-600 px-1 rounded">
                      true
                    </code>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <code className="text-pink-600 bg-gray-100 px-1 rounded">
                      onClick
                    </code>
                  </td>
                  <td className="px-5 py-3 text-gray-500">function</td>
                  <td className="px-5 py-3 text-gray-500">—</td>
                  <td className="px-5 py-3 text-gray-500">
                    Callback fired on button click
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <code className="text-pink-600 bg-gray-100 px-1 rounded">
                      children
                    </code>
                  </td>
                  <td className="px-5 py-3 text-gray-500">node</td>
                  <td className="px-5 py-3 text-gray-500">—</td>
                  <td className="px-5 py-3 text-gray-500">Button label content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-3 mt-3 text-gray-700">
            Different Colors
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              text="Primary"
              color="primary"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="Secondary"
              color="secondary"
              onClick={() => setClickCount(clickCount + 1)}
            />

            <Button
              text="Danger"
              color="danger"
              onClick={() => setClickCount(clickCount + 1)}
            />

            <Button
              text="Success"
              color="success"
              onClick={() => setClickCount(clickCount + 1)}
            />

            <Button
              text="Warning"
              color="warning"
              onClick={() => setClickCount(clickCount + 1)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-3  mt-3 text-gray-700">
            Different Sizes
          </h3>
          <div className="flex flex-wrap gap-3">
            <div>
              <Button
                text="Small"
                color="primary"
                size="small"
                onClick={() => setClickCount(clickCount + 1)}
              />
            </div>

            <div>
              <Button
                text="Medium (default)"
                onClick={() => setClickCount(clickCount + 1)}
              />
            </div>

            <Button
              text="Large"
              size="large"
              onClick={() => setClickCount(clickCount + 1)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-3  mt-3 text-gray-700">
            Disable State
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              text="Enable button"
              color="primary"
              size="medium"
              onClick={() => setClickCount(clickCount + 1)}
            />

            <Button
              text="Disable button"
              color="primary"
              size="medium"
              disabled={true}
              onClick={() => setClickCount(clickCount + 1)}
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-lg font-medium text-gray-700">
            Click Count:{" "}
            <span className="text-blue-600 font-bold">{clickCount}</span>
          </p>
        </div>
      </section>
    </>
  );
}
