import { Button } from "./Button"

export const Refactoring = ({ type }) => {
  if (type === "password") {
    return (
      <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="flex justify-center items-center bg-white w-80">
          <label htmlFor="">
            <span>Password</span>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </label>
        </div>
      </div>
    )
  } else {
    return (
      <div className="text-center p-20 mt-60 flex flex-col items-center justify-center rounded-lg opacity-100 space-y-12">
        <p className="text-3xl">Coming Soon :)</p>

        <Button href="/">Back to Home</Button>
      </div>
    )
  }

}

Refactoring.displayName = "Refactoring";