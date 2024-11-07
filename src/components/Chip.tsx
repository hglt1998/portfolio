function Chip({ info, index }: any) {
  const colors = ["yellow", "indigo", "green", "blue", "slate", "red", "orange", "sky"]
  return (
    <div className={`inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10`}>{info.name}</div>
  )
}
export default Chip