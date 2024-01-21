const mockdata =
{ notices: [
    {
      id: 0,
      title: "need a carjack in the weekend in Skinnarila!",
      type: "Looking for...",
      labels: ["Cars", "Tools"],
      ingress: "lorem upsum",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 0,
      image: "/two_kittens.png",
      area: "Skinnarila",
      timedate: "1705877135870",
      location: [61.0569,28.0953],
    },
    {
      id: 1,
      title: "dog walking company",
      type: "Looking for...",
      labels: ["Animals"],
      ingress: "2 year old Samoyed looking for walking buddies!",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 1,
      image: "/samoyed.jpg",
      area: "Kourula",
      timedate: "1705877134870",
      location: [61.0533,28.1038],
    },
    {
      id: 2,
      title: "a bass player needed for a punk band!",
      type: "Looking for...",
      labels: ["Music"],
      ingress: "Practises held on Thursdays, come try out!",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 2,
      image: "/turtle.jpg",
      area: "Skinnarila",
      timedate: "1705877132870",
      location: [61.0377,28.1007],
    },
    {
      id: 3,
      title: "Sewing services for student overalls or other clothing!",
      type: "Offering...",
      labels: ["Hobbies"],
      ingress: "Costs need to be covered",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 3,
      image: "/bad-path.fail",
      area: "Skinnarila",
      timedate: "1705877137570",
      location: [61.0502,28.1836],
    },
    {
      id: 4,
      title: "Moving to a new apartment in Kourula, help needed!",
      type: "Looking for...",
      labels: ["Cars", "Tools"],
      ingress: "lorem upsum",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 0,
      area: "Kourula",
      timedate: "1705877137370",
      location: [61.0502,28.1836],
    },
    {
      id: 5,
      title: "People in LOAS Timppa please be quiet!",
      type: "Attention!",
      labels: [],
      ingress: "lorem upsum",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 0,
      area: "skinnarila",
      timedate: "1705877137120",
      location: [61.0502,28.1836],
    },
    {
      id: 6,
      title: "need a carjack in the weekend in Skinnarila!",
      type: "Looking for...",
      labels: [],
      ingress: "lorem upsum",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 0,
      area: "Skinnarila",
      timedate: "1705877137820",
      location: [61.0502,28.1836],
    },
    {
      id: 7,
      title: "Offering a sofa, located in Leiri!",
      type: "Looking for...",
      labels: [],
      ingress: "lorem upsum",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 0,
      area: "Leiri",
      timedate: "1705877127870",
      location: [61.0502,28.1836],
    },
    {
      id: 8,
      title: "Interested in starting a game project, message if you want to partner up!",
      type: "Looking for...",
      labels: ["Hobbies", "Gaming"],
      ingress: "lorem upsum",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 0,
      area: "Skinnarila",
      timedate: "1705877117870",
      location: [61.0502,28.1836],
    },
    {
      id: 9,
      title: "Hockey players in Sammonlahti!",
      type: "Looking for...",
      labels: ["Hobbies", "Sports"],
      ingress: "lorem upsum",
      description:
        "additional information and description related to the notice. lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum consequat efficitur felis, ut feugiat justo cursus et. maecenas dapibus dictum eros vel lacinia. proin suscipit posuere purus vitae eleifend. maecenas mauris elit, porttitor et magna vel, venenatis egestas diam. aliquam eleifend dictum iaculis. nunc placerat tortor orci, id commodo nisl pulvinar mattis. duis a sem consequat eros ornare feugiat. proin tempor arcu feugiat dignissim maximus. pellentesque tincidunt congue odio, ac gravida nulla. aliquam eu iaculis massa. donec vitae dui ut eros fermentum suscipit quis id nibh. proin et posuere libero. suspendisse potenti. nulla ornare viverra massa sed molestie. fusce dignissim tellus scelerisque aliquam efficitur.",
      userID: 0,
      area: "Sammonlahti",
      timedate: "1705877122870",
      location: [61.0502,28.1836],
    },
  ],
users: [
  {
    id: 0,
    nickname: "carjacker22",
    image: "/two_kittens.png"
  },
  {
    id: 1,
    nickname: "dogwalker22",
    image: "/samoyed.jpg"
  },
  {
    id: 2,
    nickname: "guitarplayer22",
    image: "/turtle.jpg",
  },
  {
    id: 3,
    nickname: "sewer22",
    image: "/bad-path.fail",
  },
  {
    id: 4,
    nickname: "placeholder22",
    image: "/turtle.jpg",
  }
],
messages: [
  {
    id: 0,
    senderID: 0,
    recipientID: 10,
    time: "11/01/2024, 12:13",
    content: "Hello, I have a carjack."
  },
  {
    id: 1,
    senderID: 0,
    recipientID: 10,
    time: "11/01/2024, 12:13",
    content: "Hello, I have a carjack."
  },
  {
    id: 2,
    senderID: 0,
    recipientID: 10,
    time: "11/01/2024, 12:13",
    content: "Hello, I have a carjack."
  },
  {
    id: 3,
    senderID: 0,
    recipientID: 10,
    time: "11/01/2024, 12:13",
    content: "Hello, I have a carjack."
  }
]};

export default mockdata;