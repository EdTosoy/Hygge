export interface ProfileProps {
  showStatus?: boolean;
  userProfile?: userProfile;
  date?: string;
  userAvatar?: string;
  username: string;
  avatar: string;
  profileUserId: string;
}

interface userProfile {
  username: string;
  userId: string;

  // must be neccessary
  profileLink?: string;
  image?: string;
}
