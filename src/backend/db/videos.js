/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";
import {
  holi,
  fivemincraft,
  jumpingfrog,
  craftideas,
  sunset,
  bestoutofwaste,
  inrain,
  diy,
  emboidery,
} from "Assets/gifs";
import {
  paintingIcon1,
  paintingIcon2,
  bestIcon,
  fiveminCraftthumbnail,
  handEmb,
} from "Assets/thumbnail";

export const videos = [
  {
    _id: uuid(),
    title: "Hand Embroidery",
    gif: emboidery,
    thumbnail: handEmb,
    views: "543K",
    creator: "Sentdex",
    created: "6 Months",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Craft Ideas",
    videoLink: "wmT9YXuwMiQ",
  },

  {
    _id: uuid(),
    title: "35 UNUSUAL PAPER CRAFT YOU WILL ADORE",
    gif: fivemincraft,
    thumbnail: fiveminCraftthumbnail,
    views: "299K",
    creator: "Sentdex",
    created: "10 months",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Craft Ideas",
    videoLink: "SF71ks5FrKQ",
  },
  {
    _id: uuid(),
    title: "Jumping Frog  crafts",
    gif: jumpingfrog,
    thumbnail: bestIcon,
    views: "25M",
    creator: "Sentdex",
    created: "5 months",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Craft Ideas",
    videoLink: "fCiq-a-l-tw",
  },
  {
    _id: uuid(),
    title: "11 easy craft Ideas",
    gif: craftideas,
    thumbnail: bestIcon,
    views: "30K",
    creator: "Sentdex",
    created: "1 year",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Best Out of Waste",
    videoLink: "v=xTzkrm63AIQ",
  },
  {
    _id: uuid(),
    title: "Best Out of Waste Craft Ideas",
    gif: bestoutofwaste,
    thumbnail: fiveminCraftthumbnail,
    views: "200K",
    creator: "Sentdex",
    created: "11 months",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Best Out of Waste",
    videoLink: "K0t3BsDyldc",
  },
  {
    _id: uuid(),
    title: "Easy Golden Sunset Poster color Painting",
    gif: sunset,
    thumbnail: paintingIcon2,
    views: "1M",
    creator: "Sentdex",
    created: "2 years",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Paintings",
    videoLink: "sMJH58Ql1Ik",
  },
  {
    _id: uuid(),
    title: "Best Of 2022 DIYs",
    gif: diy,
    thumbnail: fiveminCraftthumbnail,
    views: "100K",
    creator: "Sentdex",
    created: "2 months",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Best Out of Waste",
    videoLink: "v=3gJL0w3kmk0",
  },
  {
    _id: uuid(),
    title: "Walking in the Rain",
    gif: inrain,
    thumbnail: paintingIcon2,
    views: "12K",
    creator: "Sentdex",
    created: "5 Days",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    categoryName: "Paintings",
    videoLink: "v=kZNC6k5YVsc",
  },
  {
    _id: uuid(),
    title: "Painting using Holi Colors",
    gif: holi,
    thumbnail: paintingIcon1,
    views: "1M",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "M.F Hussain",
    created: "2 weeks",
    categoryName: "Paintings",
    videoLink: "v=ryn9IKqIUQ0",
  },
];
