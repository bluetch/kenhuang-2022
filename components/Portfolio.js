import { H1, H3, H4 } from "components";
import Link from "next/link";
import { Tag } from "./Tag";
import { dateConvert } from "utils";

export const PortfolioSummary = ({ tags, date, title, duration, myRole, responsibility, company }) => {
  return (
    <div className="rounded-lg -mt-24 relative bg-white lg:p-10 p-4 shadow-lg">
      <div className="lg:flex justify-between">
        <Tag className="hidden lg:block">{tags}</Tag>
        <p className="font-mono">{date}</p>
      </div>
      <H1>{title}</H1>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-16 gap-4">
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
    <div className="py-8">
      <H3 className="text-center">Project Overview</H3>
      <div className="grid lg:grid-cols-2 gap-4">
        {overview.map((item) => {
          return (
            <div key={item.title} className="border rounded-lg lg:p-8 p-4">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const PortfolioProcess = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-8">
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

export const PortfolioList = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-x-8 gap-y-20">
      {data.map((item) => {
        if (!item.state) return;
        return (
          <Link key={item.url} href={item.url}>
            <figure className="flex lg:flex-col lg:space-y-4 transition ease-in-out hover:opacity-75">
              <img src={item.img} alt={item.name} className="rounded-lg object-cover aspect-[4/3] lg:w-full w-1/4 h-auto" />
              <figcaption className="lg:px-0 px-8">
                <p className="text-gray-500">{item.company}, {item.date}</p>
                <H4 className="text-gray-500 font-normal">{item.name}</H4>
                <p className=" lg:text-gray-500 font-light">{item.desc}</p>
              </figcaption>
            </figure>
          </Link>
        )
      })}
    </div>
  )
}