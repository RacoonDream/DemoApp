export interface IRaceEvent {
  id: number;
  eventImageURL: string;
  // eventImageURLBig: string;
  eventName: string;
  eventDesc: string;
  city: string;
  eventDate: Date;
  category: string; // later into Category Type
}
