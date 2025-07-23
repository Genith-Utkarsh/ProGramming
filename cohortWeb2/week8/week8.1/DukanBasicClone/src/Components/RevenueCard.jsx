export const RevenueCard = ({ title, showWarning, orderCount, amount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex">
        <div className="text-gray-700  ">{title}</div>
        <div className="flex justify-center flex-col ml-2 ">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="text-4xl font-semibold flex items-center">
          Rs {amount}
        </div>
        <div>
          {orderCount ? (
            <div className="flex  cursor-pointer ">
              <div className="text-blue-500 underline font-medium">{orderCount} Order(s)</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 fill-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
