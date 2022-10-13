import { Tag } from "./Tag";

export const PortfolioCover = ({ tags, date, title, duration, myRole, responsibility, company }) => {
  return (
    <div className="rounded-lg -mt-24 relative bg-white p-10 shadow-lg">
      <div className="flex justify-between">
        <Tag>{tags}</Tag>
        <p className="font-mono">{date}</p>
      </div>
      <h1 className="text-4xl my-8">{title}</h1>
      <div className="grid grid-cols-4 gap-x-16">
        <div>
          <p className="text-xs">Duration</p>
          <h6 className="font-light">{duration}</h6>
        </div>
        <div>
          <p className="text-xs">My Role</p>
          <h6 className="font-light">{myRole}</h6>
        </div>
        <div>
          <p className="text-xs">Responsibility</p>
          <h6 className="font-light">{responsibility}</h6>
        </div>
        <div>
          <p className="text-xs">Company</p>
          <h6 className="font-light">{company}</h6>
        </div>
      </div>
    </div>
  )
}

export const PortfolioOverview = ({ overview }) => {
  return (
    <>
      <h3 className="text-center mt-24 mb-12 text-3xl">Project Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        {overview.map((item) => {
          return (
            <div className="border rounded-lg p-8" key={item.title}>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const PortfolioProcess = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="shadow-lg rounded-lg p-4 border border-white">
        <h6 className="font-bold mb-4">
          <Tag>01.</Tag>
          Research
        </h6>
        <p className="text-gray-500">Data Analytics, user survey</p>
      </div>
      <div className="shadow-lg rounded-lg p-4 border border-white">
        <h6 className="font-bold mb-4">
          <Tag>02.</Tag>
          Design sprint
        </h6>
        <p className="text-gray-500">Workshop: user discovery, solution discovery</p>
      </div>
      <div className="shadow-lg rounded-lg p-4 border border-white">
        <h6 className="font-bold mb-4">
          <Tag>03.</Tag>
          Execution
        </h6>
        <p className="text-gray-500">UX/UI design, prototype, project management</p>
      </div>
      <div className="shadow-lg rounded-lg p-4 border border-white">
        <h6 className="font-bold mb-4">
          <Tag>04.</Tag>
          Research
        </h6>
        <p className="text-gray-500">Google analytics, business intelligence</p>
      </div>
    </div>
  )
}