export interface SocialCard {
  id: string;
  title: string;
  description: string;
  image: string;
  facebookUrl: string;
}

export const socialCardsLeft: SocialCard[] = [
  {
    id: "Parent Orientation",
    title: "PARENT ORIENTATION 2026",
    description: "Sta. Catalina College, Inc. successfully held its Parent Orientation for School Year 2026–2027, strengthening the partnership between home and school.",
    image: "/card-carousel/left/parent.png",
    facebookUrl: "https://www.facebook.com/share/p/1CzSi37E9b/",
  },
  {
    id: "admissions",
    title: " FEAST OF OUR LADY PERPETUAL HELP",
    description: "Today, we joyfully celebrate the Feast Day of Our Lady of Perpetual Help, our loving Mother who never ceases to guide, comfort, and intercede for her children.",
    image: "/card-carousel/left/feast.png",
    facebookUrl: "https://www.facebook.com/share/p/19CzBFuxEZ/",
  },

  {
    id: "student-council",
    title: "FIRE & EARTHQUAKE DRILL",
    description: "Sta. Catalina College, Inc. successfully conducted its Fire and Earthquake Drill as part of its continuing commitment to campus safety and disaster preparedness. ",
    image: "/card-carousel/left/drill.png",
    facebookUrl: "https://www.facebook.com/share/p/193EtHG6Zr/",
  },

  {
    id: "student-council",
    title: "STUDENT ORIENTATION 2026",
    description: "Successfully conducted its Student Orientation 2026, formally welcoming Catherineans to School Year 2026–2027 through a series of faith-centered and informative activities.",
    image: "/card-carousel/left/orientation.png",
    facebookUrl: "https://www.facebook.com/share/p/1HTzdseujG/",
  },

  {
    id: "student-council",
    title: "ROAD SAFETY AWARENESS TALK",
    description: "In partnership with its Alumni Association, conducted a Road Safety Awareness Talk to equip Catherineans with essential knowledge on responsible road use",
    image: "/card-carousel/left/road.png",
    facebookUrl: "https://www.facebook.com/share/p/1EZZonkzWL/",
  },

  {
    id: "student-council",
    title: "MASS OF THE HOLY SPIRIT",
    description: "Mass of the Holy Spirit, entrusting the new academic year to God's loving guidance and the wisdom of the Holy Spirit.",
    image: "/card-carousel/left/mass.png",
    facebookUrl: "https://www.facebook.com/share/p/1BJ97BjHrX/",
  },

  

];

export const socialCardsRight: SocialCard[] = [
  {
    id: "student-council",
    title: "NEWLY ELECTED SACC OFFICERS",
    description: "With the official proclamation of the election results, we proudly present the newly elected officers of the Student Activity Coordinating Council (SACC) for the School Year 2026–2027",
    image: "/card-carousel/right/sacc.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1HTzdseujG/",
  },

  {
    id: "student-council",
    title: "MEETING DE AVANCE AND ELECTION OF SACC OFFICERS",
    description: "The future of student leadership begins with informed choices and empowered voices.",
    image: "/card-carousel/right/officer.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1969ui1hwF/",
  },

  {
    id: "student-council",
    title: "LAGUNA YOUTH PATROLLERS",
    description: "The Equinox joins Laguna Youth Patrollers at the Alonte Sports Arena, Biñan City, Laguna, marking another milestone in its commitment to campus journalism and youth empowerment.",
    image: "/card-carousel/right/youth.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1JXc8xPBZ5/",
  },

  {
    id: "student-council",
    title: "40TH ANNIVERSARY EDSA PEOPLE POWER REVOLUTION",
    description: "As we look back on this historic moment, may we strive to be 𝑻𝒓𝒖𝒕𝒉 𝑺𝒆𝒆𝒌𝒆𝒓𝒔, committed to facts, justice, and integrity in a time when truth is often challenged. May we also choose to be 𝑺𝒆𝒓𝒗𝒂𝒏𝒕 𝑳𝒆𝒂𝒅𝒆𝒓𝒔, placing the needs of others above ourselves and leading with humility, compassion, and accountability.",
    image: "/card-carousel/right/edsa.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1C26vEKa6u/",
  },

  {
    id: "student-council",
    title: "MATSCIKA",
    description: "Students immersed themselves in a night of discovery and fun learning activities, from a Flag-Making Contest and Fashion Show using recycled materials that measured their creativity",
    image: "/card-carousel/right/matscika.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1FZmUbB1GR/",
  },

  {
    id: "student-council",
    title: "MATSCIKA",
    description: "Students immersed themselves in a night of discovery and fun learning activities, from a Flag-Making Contest and Fashion Show using recycled materials that measured their creativity",
    image: "/card-carousel/right/matscika.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1FZmUbB1GR/",
  },
  
];

// For backward compatibility
export const socialCards: SocialCard[] = [...socialCardsLeft, ...socialCardsRight];