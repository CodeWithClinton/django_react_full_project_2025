import { BASE_URL } from "@/api";
import { FormatDate } from "@/services/formatDate";

const CardFooter = ({ blog }) => {
  return (
    <div className="flex items-center gap=4 ">
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={`${BASE_URL}${blog.author.profile_picture}`}
            className="c rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#97989F] text-[12px] font-semibold">
          {blog.author.first_name} {blog.author.last_name}
        </small>
      </span>

      <small className="text-[#97989F] text-[12px] font-semibold ml-3">
        {FormatDate(blog.published_date)}
      </small>
    </div>
  );
};

export default CardFooter;
