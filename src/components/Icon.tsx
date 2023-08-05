import { BsBookmark, BsBookmarkFill, BsGrid3X3, BsInstagram } from "react-icons/bs";
import { GoHome, GoHomeFill, GoLock, GoSearch } from "react-icons/go";
import { RiAddBoxLine, RiAddBoxFill } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaComment, FaPause, FaPlay, FaRegComment } from "react-icons/fa";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";
import { TbCirclePlus, TbBoxMultiple } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from "react-icons/bi";

interface IconType {
  size?: number;
  color?: string;
}

// 로고
export const Insta = ({ size, color }: IconType) => (
  <BsInstagram size={size} color={color} />
);

export const InstaLogo = ({ size }: IconType) => (
  <img src={`/images/logoIcon.png`} width={size}></img>
);

export const InstaTextBlack = ({ size }: IconType) => (
  <img src={`/images/logoText_black.png`} width={size}></img>
);

export const InstaText = ({ size }: IconType) => (
  <img src={`/images/logoText.png`} width={size}></img>
);

// 홈
export const Home = ({ size, color }: IconType) => <GoHome size={size} color={color} />;
export const HomeFill = ({ size, color }: IconType) => (
  <GoHomeFill size={size} color={color} />
);

// 검색
export const Search = ({ size, color }: IconType) => (
  <GoSearch size={size} color={color} />
);

// 더하기
export const Add = ({ size, color }: IconType) => (
  <RiAddBoxLine size={size} color={color} />
);
export const AddFill = ({ size, color }: IconType) => (
  <RiAddBoxFill size={size} color={color} />
);
export const AddCircle = ({ size, color }: IconType) => (
  <TbCirclePlus size={size} color={color} />
);

// 메뉴
export const Menu = ({ size, color }: IconType) => (
  <AiOutlineMenu size={size} color={color} />
);

// 좋아요
export const Heart = ({ size, color }: IconType) => (
  <AiOutlineHeart size={size} color={color} />
);
export const HeartFill = ({ size, color }: IconType) => (
  <AiFillHeart size={size} color={color} />
);

// 말풍선
export const Comment = ({ size, color }: IconType) => (
  <FaRegComment size={size} color={color} />
);
export const CommentFill = ({ size, color }: IconType) => (
  <FaComment size={size} color={color} />
);

// 그리드
export const Grid = ({ size, color }: IconType) => (
  <BsGrid3X3 size={size} color={color} />
);

// 보관됨
export const Bookmark = ({ size, color }: IconType) => (
  <BsBookmark size={size} color={color} />
);
export const BookmarkFill = ({ size, color }: IconType) => (
  <BsBookmarkFill size={size} color={color} />
);

// 가로 점 3개
export const Horizontal = ({ size, color }: IconType) => (
  <HiEllipsisHorizontal size={size} color={color} />
);
export const HorizontalBold = ({ size, color }: IconType) => (
  <HiDotsHorizontal size={size} color={color} />
);

// 닫기 취소
export const Close = ({ size, color }: IconType) => <GrClose size={size} color={color} />;

// 동영상 관련
export const Play = ({ size, color }: IconType) => <FaPlay size={size} color={color} />;
export const Pause = ({ size, color }: IconType) => <FaPause size={size} color={color} />;

// 볼륨
export const Volume = ({ size, color }: IconType) => (
  <ImVolumeMedium size={size} color={color} />
);
export const Mute = ({ size, color }: IconType) => (
  <ImVolumeMute2 size={size} color={color} />
);

// 화살표
export const Left = ({ size, color }: IconType) => (
  <BiSolidChevronLeftCircle size={size} color={color} />
);
export const Right = ({ size, color }: IconType) => (
  <BiSolidChevronRightCircle size={size} color={color} />
);

// 사진 여러 장일 때
export const BoxMultiple = ({ size, color }: IconType) => (
  <TbBoxMultiple size={size} color={color} />
);

// 자물쇠
export const Lock = ({ size, color }: IconType) => <GoLock size={size} color={color} />;
