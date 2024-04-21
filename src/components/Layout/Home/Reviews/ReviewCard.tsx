export interface ReviewCardProps {
  companyImage: string;
  content: string;
  user: {
    name: string;
    profilePicture: string;
    role: string;
  };
}

export default function ReviewCard({
  companyImage,
  content,
  user,
}: ReviewCardProps) {
  return (
    <div
      className="flex h-full w-fit flex-col rounded-[1.25rem]
      border border-[#E2E8F0] bg-white p-6 shadow-review-card lg:p-8">
      <img src={companyImage} className="mt-4 h-8 w-fit shrink-0" />

      <p className="p-md lg:p-2xl my-6 max-w-[271px] shrink-0 text-black lg:max-w-[320px]">
        {content}
      </p>

      <div className="flex h-full items-center gap-4">
        <img
          src={user.profilePicture}
          className="h-[4rem] w-[4rem] rounded-full object-cover"
        />

        <div>
          <p className="p-lg text-black">{user.name}</p>

          <p className="p-md text-[#475569]">{user.role}</p>
        </div>
      </div>
    </div>
  );
}
