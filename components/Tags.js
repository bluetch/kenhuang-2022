export const Tags = ({ name = ["a", "b"] }) => {
  return (
    <div className="space-x-2">
      {name.map((item) => {
        return (
          <span className="rounded bg-gray-100 inline-block text-xs px-4 py-1" key={`tag-${item}`}>{item}</span>
        )
      })}
    </div>
  )
}