export const Tag = ({ children, style="gray" }) => {
  
  if (Array.isArray(children)) {
    return (
      <div className="space-x-2">
        {children.map((item) => {
          return (
            <span className="rounded bg-gray-100 inline-block text-xs px-4 py-1" key={`tag-${item}`}>{item}</span>
          )
        })}
      </div>
    )
  } else {
    return(
      <span className="rounded bg-black text-white inline-block py-0 px-2 mr-2">{children}</span>
    )
  }
}