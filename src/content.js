// All invitation details live here. Times include the India Standard Time offset.
export const invitation = {
  ceremony: "Uruthi Varthai",
  bride: { name: "Poorna", fullName: "Poornashri Anandakrishanan" },
  groom: { name: "Kaushi", fullName: "Kaushikaa Siddharthan Chinnaraj" },
  startsAt: "2026-11-20T07:00:00+05:30",
  endsAt: "2026-11-20T09:00:00+05:30",
  date: "20 November 2026",
  weekday: "Friday",
  time: "7:00–9:00 AM",
  timezone: "IST",
  venue: "Annapurna Arunya Hall",
  address: "Avinashi Road, opposite KMCH Hospital, Coimbatore",
  // The Annapoorna branch opposite KMCH; retain the hall name on the invitation.
  mapQuery: "Sree Annapoorna Avinashi Road opposite KMCH Hospital Coimbatore",
  coordinates: { latitude: 11.04085, longitude: 77.04179 },
  invitationText: "You and your family are cordially invited.",
  closingText: "Bless us and join us for breakfast.",
  liveStreamUrl: "https://youtube.com/live/x_zq9tMh1gA?feature=share",
  dinner: {
    address: "550 Kottur Road, S L Patti, Pollachi",
    mapQuery:
      "J2V4+QVR, Alagapuri St, Alagappa Colony, Suleeshwaranpatti, Tamil Nadu 642006, India",
  },
};

export const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(invitation.mapQuery)}`;
export const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(invitation.mapQuery)}&z=16&hl=en&output=embed`;
export const dinnerMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(invitation.dinner.mapQuery)}`;
export const dinnerEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(invitation.dinner.mapQuery)}&z=16&hl=en&output=embed`;
