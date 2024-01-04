const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Hackathon 2023',
    description:
      'An all-day event where students collaborate to build a working software application.',
    location: '123 Main St School Auditorium, Springfield ST 12345',
    date: 'October 15, 2023',
    image: 'images/image-1.avif',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'AI Workshop Series',
    description:
      'A series of workshops where students learn the fundamentals of artificial intelligence.',
    location: '201 Elm St Room 201, Springfield ST 12345',
    date: 'November 7, 2023',
    image: 'images/image-2.avif',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Code Camp',
    description:
      'A camp where students come together to learn and improve their coding skills.',
    location: '555 Oak St Computer Lab 3, Springfield ST 12345',
    date: 'December 5, 2023',
    image: 'images/image-3.avif',
    isFeatured: false,
  },
  {
    id: 'e4',
    title: 'Tech Talk Series',
    description:
      'A series of talks from industry experts sharing their experiences and insights in the tech industry.',
    location: '101 Pine St Library Conference Room, Springfield ST 12345',
    date: 'January 15, 2024',
    image: 'images/image-4.avif',
    isFeatured: false,
  },
  {
    id: 'e5',
    title: 'Robotics Fair',
    description:
      'An event showcasing student projects on robotics and automated systems.',
    location: '400 Cedar St School Gymnasium, Springfield ST 12345',
    date: 'February 18, 2024',
    image: 'images/image-5.avif',
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
