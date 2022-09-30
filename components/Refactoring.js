import { Button } from "./Button"

export const Refactoring = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75">
      <div className="text-center fixed top-20 left-10 right-10 bottom-10 bg-white shadow flex flex-col items-center justify-center rounded-lg opacity-90 space-y-12">
        <p className="text-3xl">Content refactoring... :)</p>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  )
}

Loading.displayName = "Refactoring";