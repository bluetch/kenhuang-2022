import { Typography } from "components";
import Link from "next/link";
import { Tag } from "./Tag";
import { dateConvert } from "utils";

export const PortfolioSummary = ({ tags, date, info, title }) => {
  return (
    <div className="rounded-lg -mt-24 mb-24 relative bg-white lg:p-10 p-4 shadow-lg">
      <div className="lg:flex justify-between">
        <Tag className="hidden lg:block">{tags}</Tag>
        <p className="font-mono">{date}</p>
      </div>
      <Typography variant="h1">{title}</Typography>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-16 gap-4">
        <div>
          <p className="text-xs">{info[0]?.key}</p>
          <h6 className="font-light">{info[0]?.value}</h6>
        </div>
        <div>
          <p className="text-xs">{info[1]?.key}</p>
          <h6 className="font-light">{info[1]?.value}</h6>
        </div>
        <div>
          <p className="text-xs">{info[2]?.key}</p>
          <h6 className="font-light">{info[2]?.value}</h6>
        </div>
        <div>
          <p className="text-xs">{info[3]?.key}</p>
          <h6 className="font-light">{info[3]?.value}</h6>
        </div>
      </div>
    </div>
  )
}

export const PortfolioOverview = ({ overview }) => {
  return (
    <div className="py-8">
      <Typography className="text-center" variant="h3">Project Overview</Typography>
      <div className="grid lg:grid-cols-2 gap-4">
        {overview.map((item) => {
          return (
            <div key={item.title} className="border rounded-lg lg:p-8 p-4">
              <Typography variant="h4">{item.title}</Typography>
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
    <div className={`grid lg:grid-cols-${data.length} gap-8`}>
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
    <div className="grid lg:grid-cols-3 gap-x-8 lg:gap-y-20 gap-y-8">
      {data.map((item) => {
        if (!item.state) return;
        return (
          <Link key={item.url} href={item.url}>
            <figure className="flex lg:flex-col lg:space-y-4 transition ease-in-out hover:opacity-75">
              <img src={item.img} alt={item.name} className="rounded-lg object-cover aspect-[4/3] lg:w-full w-1/4 h-auto" />
              <figcaption className="lg:px-0 px-8">
                <p className="text-gray-500">{item.company}, {item.date}</p>
                <Typography className="text-gray-500 font-normal" variant="h4">{item.name}</Typography>
                <p className=" lg:text-gray-500 font-light">{item.desc}</p>
              </figcaption>
            </figure>
          </Link>
        )
      })}
    </div>
  )
}