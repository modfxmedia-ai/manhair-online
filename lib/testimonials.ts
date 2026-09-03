/** Homepage + reviews-page client testimonials.
 *
 * First four are the original ManHair site testimonies. The rest are
 * published 5-star Google reviews (via Birdeye). Do not invent quotes
 * or add Review/AggregateRating schema for these cards.
 */
export const TESTIMONIALS = [
  {
    name: "Greg",
    photo: "/wp-content/uploads/2018/08/greg-mens-hair-replacement-testimony.jpg",
    quote:
      "I have been wearing hair systems for over 20 years and this is the best quality and service I have received without question I would recommend to everyone I know suffering with hair loss.",
    date: "3 weeks ago",
  },
  {
    name: "Nick",
    photo: "/wp-content/uploads/2018/08/nick-hair-replacement-system-testimony.jpg",
    quote:
      "I have rocked a shaved head now for over 5 years and was sick of how I looked in the mirror and decided to make a change. Thank you Manhair for giving my confidence a major boost!",
    date: "a month ago",
  },
  {
    name: "Pam",
    photo: "/wp-content/uploads/2018/08/pam-hair-system-testimony-150x150.jpg",
    quote:
      "My husband was always thinning at an early age and then eventually decided to shave his head. I wasn't thrilled with the chrome dome and recommended Manhair to him and now he looks 20 years younger we are both so happy!",
    date: "2 months ago",
  },
  {
    name: "William",
    photo: "/wp-content/uploads/2018/08/bill-hair-system-testimony.jpg",
    quote:
      "My entire family starting balding at very young age. We all decided to take the plunge to get new hair together and we are all so pleased with the end results thank you.",
    date: "2 months ago",
  },
  {
    name: "Austin",
    photo: null,
    quote:
      "Honestly, life changing! The staff is outstanding! He is extremely detail oriented and strives for perfection. He made the whole process comfortable and is very hospitable. I was never shy about going bald in my early 20s. My friend recommended Man Hair for non-surgical hair replacement. I couldn't be more satisfied! I recommend Man Hair 1000%.",
    date: "3 years ago",
  },
  {
    name: "Lawrence",
    photo: null,
    quote:
      "I was interested but unsure about hair replacement. I visited just about every hair replacement place, and still felt undecided. But after meeting with the staff, I knew I wanted to go forward, and I wanted him to be my stylist. He not only does great work — my hair looks incredible — but he makes me feel like family. I never feel like a product. These guys don't upsell you. It's come-as-you-need-it and pay-per-visit.",
    date: "3 years ago",
  },
  {
    name: "Bengt",
    photo: null,
    quote:
      "Look no further than Man Hair for the highest quality hair replacement. I have had two hair transplants elsewhere and the results were disappointing. The team at Man Hair, however, provide industry-leading replacement — the care and attention are second to none. I cannot recommend Man Hair more highly.",
    date: "3 years ago",
  },
  {
    name: "Eliot",
    photo: null,
    quote:
      "Loved the outcome of it so much! The staff's attention to detail is next level! Highly recommend anyone who is looking for hair replacement. Through this process, I was able to gain back confidence! Thank you so much Man Hair for a lovely experience!",
    date: "3 years ago",
  },
] as const;

/** Rotating avatar tints for the Google-style review cards. */
export const GOOGLE_AVATAR_TINTS = [
  "linear-gradient(135deg, #4285F4, #1a56db)",
  "linear-gradient(135deg, #34A853, #0f7a3d)",
  "linear-gradient(135deg, #FBBC05, #e08e00)",
  "linear-gradient(135deg, #EA4335, #b91c1c)",
] as const;
