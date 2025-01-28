import PropTypes from "prop-types";
import { MapPin, CalendarDays } from "lucide-react";

function ExperienceCard({ title, subtitle, location, date, description }) {
  return (
    <div className="flex flex-row p-4 rounded-lg shadow-lg">
      {/* Timeline */}
      <div className="flex flex-col mr-5 mt-1 justify-center items-center">
        <span className="w-[20px] h-[20px] pb-5 bg-[#1C1C1C] rounded-full"></span>
        <span className="h-full pt-1 bg-[#1C1C1C] w-[1px]"></span>
      </div>
      
      {/* Info */}
      <div className="space-y-4">
        {/* Title, Subtitle, Date */}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="text-[#D4D4D4] font-semibold">{title}</div>
            {subtitle && <div className="text-[#A0A0A0]">{subtitle}</div>}
          </div>
          <div className="text-white p-2 rounded bg-[#1E1E1E] flex items-center w-[220px] justify-center">
            <CalendarDays strokeWidth={2} size={20} className="mr-2" />
            {date}
          </div>
        </div>

        {/* Location */}
        <div className="text-[#8B8B8B] flex items-center">
          <MapPin strokeWidth={2} size={20} className="mr-2" />
          {location}
        </div>

        {/* Description */}
        <div className="text-[#C0C0C0]">{description}</div>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ExperienceCard;
