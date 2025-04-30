const infoDataMock = [
  {
    id: "random-id-1",
    title: "Total Downloads",
    value: "12",
    growthChange: "+13% from last month",
    icon: "lucid-icon-string",
  },
  {
    id: "random-id-2",
    title: "Average Ratings",
    value: "4.8",
    growthChange: "+0.2 from last month",
    icon: "lucid-icon-string",
  },
  {
    id: "random-id-3",
    title: "Growth Rate",
    value: "+24%",
    growthChange: "+7 from last month",
    icon: "lucid-icon-string",
  },
];

export const getInfoDataMock = () => Promise.resolve(infoDataMock);
