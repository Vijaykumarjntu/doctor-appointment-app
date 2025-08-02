export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  location: string;
  availableToday: boolean;
  profilePic: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Aisha Sharma",
    specialization: "Cardiologist",
    experience: 12,
    rating: 4.8,
    location: "New Delhi",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Dr. Rajeev Menon",
    specialization: "Neurologist",
    experience: 15,
    rating: 4.7,
    location: "Bangalore",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    id: 3,
    name: "Dr. Sneha Kapoor",
    specialization: "Dermatologist",
    experience: 9,
    rating: 4.5,
    location: "Mumbai",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Dr. Karan Patel",
    specialization: "Orthopedic",
    experience: 11,
    rating: 4.6,
    location: "Ahmedabad",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 5,
    name: "Dr. Nidhi Verma",
    specialization: "Gynecologist",
    experience: 14,
    rating: 4.9,
    location: "Pune",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/women/58.jpg"
  },
  {
    id: 6,
    name: "Dr. Farhan Siddiqui",
    specialization: "Pulmonologist",
    experience: 7,
    rating: 4.4,
    location: "Lucknow",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/men/63.jpg"
  },
  {
    id: 7,
    name: "Dr. Priya Nair",
    specialization: "Pediatrician",
    experience: 10,
    rating: 4.6,
    location: "Kochi",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    id: 8,
    name: "Dr. Arvind Joshi",
    specialization: "Psychiatrist",
    experience: 13,
    rating: 4.7,
    location: "Hyderabad",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    id: 9,
    name: "Dr. Meera Shetty",
    specialization: "ENT Specialist",
    experience: 8,
    rating: 4.5,
    location: "Chennai",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    id: 10,
    name: "Dr. Rakesh Iyer",
    specialization: "Oncologist",
    experience: 16,
    rating: 4.9,
    location: "Nagpur",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 11,
    name: "Dr. Tanya Gupta",
    specialization: "Ophthalmologist",
    experience: 6,
    rating: 4.3,
    location: "Indore",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    id: 12,
    name: "Dr. Aman Rawat",
    specialization: "Urologist",
    experience: 9,
    rating: 4.4,
    location: "Noida",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    id: 13,
    name: "Dr. Ritu Raj",
    specialization: "Gastroenterologist",
    experience: 12,
    rating: 4.6,
    location: "Gurgaon",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/women/73.jpg"
  },
  {
    id: 14,
    name: "Dr. Hitesh Kumar",
    specialization: "Nephrologist",
    experience: 11,
    rating: 4.5,
    location: "Patna",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 15,
    name: "Dr. Swati Bansal",
    specialization: "Endocrinologist",
    experience: 10,
    rating: 4.4,
    location: "Jaipur",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/84.jpg"
  },
  {
    id: 16,
    name: "Dr. Ravi Khandelwal",
    specialization: "Rheumatologist",
    experience: 7,
    rating: 4.2,
    location: "Bhopal",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    id: 17,
    name: "Dr. Manisha Singh",
    specialization: "Dentist",
    experience: 6,
    rating: 4.3,
    location: "Raipur",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 18,
    name: "Dr. Nitin Deshmukh",
    specialization: "Surgeon",
    experience: 15,
    rating: 4.8,
    location: "Thane",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    id: 19,
    name: "Dr. Kiran Rao",
    specialization: "General Physician",
    experience: 10,
    rating: 4.5,
    location: "Vishakhapatnam",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/women/61.jpg"
  },
  {
    id: 20,
    name: "Dr. Yusuf Khan",
    specialization: "Radiologist",
    experience: 13,
    rating: 4.6,
    location: "Amritsar",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    id: 21,
    name: "Dr. Neha Jain",
    specialization: "Hematologist",
    experience: 12,
    rating: 4.5,
    location: "Surat",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    id: 22,
    name: "Dr. Sameer Kaul",
    specialization: "Allergist",
    experience: 5,
    rating: 4.2,
    location: "Vadodara",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
    id: 23,
    name: "Dr. Anjali Mehta",
    specialization: "Pathologist",
    experience: 7,
    rating: 4.3,
    location: "Kanpur",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/women/39.jpg"
  },
  {
    id: 24,
    name: "Dr. Rohit Sinha",
    specialization: "Immunologist",
    experience: 9,
    rating: 4.4,
    location: "Jodhpur",
    availableToday: true,
    profilePic: "https://randomuser.me/api/portraits/men/48.jpg"
  },
  {
    id: 25,
    name: "Dr. Vidya Rao",
    specialization: "Geneticist",
    experience: 8,
    rating: 4.3,
    location: "Trivandrum",
    availableToday: false,
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];
