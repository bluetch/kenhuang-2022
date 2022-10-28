import { H4 } from "components";
import Link from "next/link";
import { Tag } from "./Tag";
import { dateConvert } from "utils";

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
            <div key={item.title} className="border rounded-lg p-8">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const PortfolioProcess = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {data.map((item, index) => {
        return (
          <div key={item.title} className="shadow-lg rounded-lg p-4 border border-white">
            <h6 className="font-bold mb-4">
              <Tag>{`0${index + 1}.`}</Tag>
              {item.title}
            </h6>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export const PortfolioList = ({ data, layout = "figure" }) => {
  if (layout === "figure") {
    return (
      <div className="grid grid-cols-2 gap-x-8 gap-y-20">
        {data.map((item) => {
          if (!item.state) return;
          return (
            <Link key={item.url} href={item.url}>
              <figure className="flex flex-col space-y-4 transition ease-in-out hover:opacity-75">
                <img src={item.img} alt={item.name} className="rounded-lg object-cover aspect-[4/3]" />
                <figcaption className="">
                  <H4 className="text-gray-500 font-normal">{item.name}</H4>
                  <strong>{item.company}, {item.date}</strong>
                  {/* <p className="text-gray-500">{item.desc}</p> */}
                </figcaption>
              </figure>
            </Link>
          )
        })}
      </div>
    )
  } else {
    return (
      <section className="grid grid-cols-2 gap-20 mb-20">
        {data.map((item) => {
          if (!item.state) return;
          return (
            <Link key={item.name} href={item.url} className="group transition">
              <figure className="flex space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-1/3 object-cover aspect-square group-hover:opacity-50 transform transition-all duration-300 rounded"
                />
                <figcaption className="w-2/3 pl-4 space-y-2">
                  <p className="text-gray-400 text-sm">
                    {dateConvert(item.date, "year")}
                    {" | "}
                    {item.company}
                    {" | "}
                    {item.category.join(" / ")}
                  </p>
                  <H4>
                    {item.name}
                  </H4>
                  <p className="text-gray-500 leading-6 max-h-24 overflow-ellipsis overflow-hidden">
                    {item.desc}
                  </p>
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </section>
    )
  }

}