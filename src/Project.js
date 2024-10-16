export default function Project({ image, title, description, link }) {
  return (
    <div className="text-left bg-[#1B172A] p-6 rounded-[10px] hover:outline hover:outline-[#7456FF] hover:outline-2">
      <a href={link}>
        <img src={image} alt="" className="mb-6 rounded-[2px]" />
        <span className="font-medium sm:text-[18px] text-[16px] sm:mb-0 mb-[2px] inline-block">
          {title}
        </span>
      </a>
      <p className="mb-6 sm:text-[14px] text-[12px] text-[#999999] cursor-default">
        {description}
      </p>
      <a
        href={link}
        className="bg-[#7456FF] text-white p-3 sm:text-[12px] text-[10px] rounded-[2px] inline-block"
      >
        View Project
      </a>
    </div>
  );
}
