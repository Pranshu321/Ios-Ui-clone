import calendar from "../images/apps/calendar.png";
import fitness from "../images/apps/fitness.webp";
import mail from "../images/apps/mail.png";

const days = ["monday", "tuesday", "wednesday", "thrusday", "friday", "saturday", "sunday"]

export default [
  {
    id: "1",
    createdAt: "1m",
    icon: fitness,
    title: "Keep it going",
    subtitle: `Your best day this week was ${days[new Date().getDay()-1]}. Finish your work.`,
  },
  {
    id: "2",
    createdAt: "10m",
    icon: calendar,
    title: "Team meeting",
    subtitle: "10:00 - 11:00",
  },
  {
    id: "3",
    createdAt: "45m",
    icon: mail,
    title: "notJust.dev inquiry",
    subtitle: "Hey Pranshu, how is it going? ",
  },
  {
    id: "4",
    createdAt: "1h",
    icon: calendar,
    title: "Team meeting",
    subtitle: "10:00 - 11:00",
  },
  {
    id: "5",
    createdAt: "2h",
    icon: calendar,
    title: "Team meeting",
    subtitle: "10:00 - 11:00",
  },
  {
    id: "6",
    createdAt: "5h",
    icon: mail,
    title: "Hola Pranshu",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
  },
  {
    id: "7",
    createdAt: "6h",
    icon: mail,
    title: "To the moon",
    subtitle: "Lorem Ipsum is simply dummy text of the printing  ",
  },
  {
    id: "8",
    createdAt: "6h",
    icon: fitness,
    title: "10,000 steps",
    subtitle: "Your best day this week was Friday. Finish the week strong.",
  },
  {
    id: "9",
    createdAt: "2h",
    icon: calendar,
    title: "Team meeting",
    subtitle: "6:00 - 7:00",
  },
  {
    id: "10",
    createdAt: "6h",
    icon: fitness,
    title: "10,000 steps",
    subtitle: "Your best day this week was Friday. Finish the week strong.",
  },
  {
    id: "11",
    createdAt: "6h",
    icon: fitness,
    title: "10,000 steps",
    subtitle: "Your best day this week was Friday. Finish the week strong.",
  }
];
