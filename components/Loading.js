import { memo } from "react";

export const Loading = memo(({label = "讀取中，請稍候", className}) => {
  return (
    <div className={`my-40 ${className}`}>
      <img src="/images/icons/icon_loading.svg" alt="" className="mx-auto w-10 my-10" />
      <p className="text-center">{label}</p>
    </div>
  );
})
