const items = [
  { id: 1 },
  // More items...
]

export default function Example(props) {
  return (
    <div className="overflow-hidden rounded bg-praimary shadow">
      <ul role="list" className="divide-y divide-gray-200 ">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 justify-center flex m-4">
           {props.children}
          </li>
        ))}
      </ul>
    </div>
  )
}
