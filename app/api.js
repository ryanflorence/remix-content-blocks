export async function getBlocks() {
  // a CMS could return a set of blocks for the page
  return [
    {
      type: "tweet-marquee",
      tweets: [
        {
          id: "123",
          author: "@remix_run",
          content: "Buy a conference ticket!",
        },
        {
          id: "456",
          author: "@remix_run",
          content: "Buy a conference ticket!",
        },
        {
          id: "789",
          author: "@remix_run",
          content: "Buy a conference ticket!",
        },
      ],
    },
    {
      type: "tabs",
      tabs: [
        { title: "Tab 1", content: "Tab 1 content" },
        { title: "Tab 2", content: "Tab 2 content" },
        { title: "Tab 3", content: "Tab 3 content" },
      ],
    },
    {
      type: "youtube",
      id: "123",
      title: "Remix Conf 2022",
    },
  ];
}
