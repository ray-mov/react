
function FoorterFeature({ title, para, icon }) {
  return (
    <div className="flex gap-2">
      <div className="text-5xl text-gray-300">
        {icon}
      </div>
      <div>
        <h1 className="font-semibold ">{title}</h1>
        <p className="text-gray-500">{para}</p>
      </div>
    </div>
  )
}

export default FoorterFeature