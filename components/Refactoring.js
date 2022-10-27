import { Button } from "./Button"

export const Refactoring = () => {
  return (
    <div className="text-center p-20 my-20 flex flex-col items-center justify-center rounded-lg opacity-100 space-y-12">
      <p className="text-3xl">Content refactoring... :)</p>
      <Button href="/">Back to Home</Button>
    </div>
  )
}

Refactoring.displayName = "Refactoring";