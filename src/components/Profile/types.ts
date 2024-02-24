export interface ProfileProps {
  showStatus?: boolean;
  userProfile?: userProfile;
  date?: string;
  userAvatar?: string;
}

interface userProfile {
  username: string;

  // must be neccessary
  profileLink?: string;
  image?: string;
}
