/********** * Chat Users ************** */
import user_1 from "@/assets/images/user/user-1.png";
import user_2 from "@/assets/images/user/user-2.png";
import user_3 from "@/assets/images/user/user-3.png";
import user_4 from "@/assets/images/user/user-4.png";
import user_5 from "@/assets/images/user/user-5.png";
import user_6 from "@/assets/images/user/user-6.png";
import user_7 from "@/assets/images/user/user-7.png";
import user_8 from "@/assets/images/user/user-8.png";

export const chatUsers = [
  {
    id: '1',
    image: user_1,
    name: "John Doe",
    message: "Let's catch up...",
    activity: "2 min ago",
    link: "chat-box",
    status: true,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "001",
          name: "Alice",
          avatar: user_1,
        },
        message: {
          content:
            "Hey Bob, how's it going? Hope you're having a great day! I wanted to check in and see if you’ve completed that project we talked about last week.",
          timestamp: "2024-10-08T10:15:00Z",
          status: "sent",
        },
      },
      {
        messageId: "3",
        sender: {
          id: "001",
          name: "Alice",
          avatar: user_1,
        },
        message: {
          content:
            "I'm good too! Just busy with work as usual. I have a couple of deadlines coming up next week. But I managed to squeeze in some time to start that new book I mentioned. It’s really engaging! Can't wait to discuss it with you once I finish!",
          timestamp: "2024-10-08T10:18:00Z",
          status: "read",
        },
      },
      {
        messageId: "5",
        sender: {
          id: "001",
          name: "Alice",
          avatar: user_1,
        },
        message: {
          content:
            "This weekend works perfectly for me! Let’s do it! Looking forward to it. I’ll bring snacks, and we can chill and catch up.",
          timestamp: "2024-10-08T10:22:00Z",
          status: "read",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "002",
          name: "Bob",
          avatar: user_8,
        },
        message: {
          content:
            "Hey Alice! I'm doing well, thanks! Just wrapped up the project yesterday.",
          timestamp: "2024-10-08T10:16:30Z",
          status: "delivered",
        },
      },
      {
        messageId: "4",
        receiver: {
          id: "002",
          name: "Bob",
          avatar: user_8,
        },
        message: {
          content:
            "Sounds great! I’d love to hear your thoughts on it. Maybe we can set up a time to meet and catch up properly.",
          timestamp: "2024-10-08T10:20:00Z",
          status: "delivered",
        },
      },
    ],
  },
  {
    id: '2',
    image: user_2,
    name: "Jane Smith",
    message: "Are you free?",
    activity: "10 min ago",
    link: "chat-box",
    status: false,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "003",
          name: "Jane",
          avatar: "https://example.com/jane-avatar.jpg",
        },
        message: {
          content: "Hey Michael, are you free to chat today?",
          timestamp: "2024-10-08T10:25:00Z",
          status: "sent",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "004",
          name: "Michael",
          avatar: "https://example.com/michael-avatar.jpg",
        },
        message: {
          content: "Hey Jane, yes, I’m free. What’s on your mind?",
          timestamp: "2024-10-08T10:30:00Z",
          status: "delivered",
        },
      },
    ],
  },
  {
    id: '3',
    image: user_3,
    name: "Michael Brown",
    message: "Check this out...",
    activity: "5 min ago",
    link: "chat-box",
    status: true,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "005",
          name: "Michael",
          avatar: "https://example.com/michael-avatar.jpg",
        },
        message: {
          content: "Hey Jane, I came across this article and thought of you!",
          timestamp: "2024-10-08T11:40:00Z",
          status: "sent",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "006",
          name: "Jane",
          avatar: "https://example.com/jane-avatar.jpg",
        },
        message: {
          content: "Oh, that’s interesting! Thanks for sharing!",
          timestamp: "2024-10-08T11:45:00Z",
          status: "delivered",
        },
      },
    ],
  },
  {
    id: '4',
    image: user_4,
    name: "Emily Clark",
    message: "How's it going?",
    activity: "15 min ago",
    link: "chat-box",
    status: true,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "007",
          name: "Emily",
          avatar: "https://example.com/emily-avatar.jpg",
        },
        message: {
          content: "Hey David! How’s everything going?",
          timestamp: "2024-10-08T10:45:00Z",
          status: "sent",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "008",
          name: "David",
          avatar: "https://example.com/david-avatar.jpg",
        },
        message: {
          content: "Hey Emily, all good here. How about you?",
          timestamp: "2024-10-08T10:47:00Z",
          status: "delivered",
        },
      },
    ],
  },
  {
    id: '5',
    image: user_5,
    name: "David Johnson",
    message: "Meeting at 3...",
    activity: "20 min ago",
    link: "chat-box",
    status: true,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "008",
          name: "David",
          avatar: "https://example.com/david-avatar.jpg",
        },
        message: {
          content: "Hey Emily, just wanted to remind you about the meeting at 3.",
          timestamp: "2024-10-08T11:00:00Z",
          status: "sent",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "007",
          name: "Emily",
          avatar: "https://example.com/emily-avatar.jpg",
        },
        message: {
          content: "Thanks, David. I’ll be there!",
          timestamp: "2024-10-08T11:02:00Z",
          status: "delivered",
        },
      },
    ],
  },
  {
    id: '6',
    image: user_6,
    name: "Linda Harris",
    message: "Call me...",
    activity: "30 min ago",
    link: "chat-box",
    status: true,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "009",
          name: "Linda",
          avatar: "https://example.com/linda-avatar.jpg",
        },
        message: {
          content: "Hey Brian, can you call me when you’re free?",
          timestamp: "2024-10-08T11:15:00Z",
          status: "sent",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "010",
          name: "Brian",
          avatar: "https://example.com/brian-avatar.jpg",
        },
        message: {
          content: "Sure! I’ll call you after my meeting.",
          timestamp: "2024-10-08T11:18:00Z",
          status: "delivered",
        },
      },
    ],
  },
  {
    id: '7',
    image: user_7,
    name: "Christopher Martinez",
    message: "Interesting news...",
    activity: "25 min ago",
    link: "chat-box",
    status: true,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "011",
          name: "Christopher",
          avatar: "https://example.com/christopher-avatar.jpg",
        },
        message: {
          content: "Hey, check out this news article! Thought you’d find it interesting.",
          timestamp: "2024-10-08T11:25:00Z",
          status: "sent",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "012",
          name: "Sarah",
          avatar: "https://example.com/sarah-avatar.jpg",
        },
        message: {
          content: "That’s really cool! Thanks for sharing!",
          timestamp: "2024-10-08T11:30:00Z",
          status: "delivered",
        },
      },
    ],
  },
  {
    id: '8',
    image: user_8,
    name: "Sarah Lee",
    message: "Can we reschedule?",
    activity: "1 hour ago",
    link: "chat-box",
    status: true,
    senderMessages: [
      {
        messageId: "1",
        sender: {
          id: "012",
          name: "Sarah",
          avatar: "https://example.com/sarah-avatar.jpg",
        },
        message: {
          content: "Hey Christopher, can we reschedule the meeting?",
          timestamp: "2024-10-08T11:35:00Z",
          status: "sent",
        },
      },
    ],
    receiverMessages: [
      {
        messageId: "2",
        receiver: {
          id: "011",
          name: "Christopher",
          avatar: "https://example.com/christopher-avatar.jpg",
        },
        message: {
          content: "Sure! Let me know a time that works for you.",
          timestamp: "2024-10-08T11:40:00Z",
          status: "delivered",
        },
      },
    ],
  },
];
